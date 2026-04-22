#!/usr/bin/env python3
"""
Generate article hero images via OpenAI gpt-image-2 OR Google Nano Banana 2.

Setup — pick the provider(s) you want to use:
    export OPENAI_API_KEY=sk-...            # OpenAI (gpt-image-2, ~$0.21/image)
    export GEMINI_API_KEY=AIza...           # Google (Nano Banana 2, ~$0.067/image, free tier ~500/day)
    pip install pillow requests

Usage:
    # Default provider is gemini (cheaper, often free). Override with --provider openai.
    python scripts/generate-article-image.py --slug 28-billion-reproducibility-tax
    python scripts/generate-article-image.py --slug tacit-knowledge-walking-out --provider openai

    # Multiple variants (Gemini: N separate API calls; OpenAI: one call, n=N)
    python scripts/generate-article-image.py --slug onboarding-two-weeks --variants 4

    # All five articles, 2 variants each (gemini: ~$0.67, openai: ~$2.50)
    python scripts/generate-article-image.py --all --variants 2

    # A-B compare providers on the same scene (run both):
    python scripts/generate-article-image.py --slug onboarding-two-weeks --provider gemini --variants 2
    python scripts/generate-article-image.py --slug onboarding-two-weeks --provider openai --variants 2

    # Override the prompt on the fly (prompt file untouched):
    python scripts/generate-article-image.py --slug onboarding-two-weeks \\
        --prompt-override "Same style as brief, but make the hourglass tilted 45 degrees..."

    # Preview the full prompt without calling any API:
    python scripts/generate-article-image.py --slug why-eln-cant-capture-procedure --dry-run

After generation, each image writes three files per variant:
    scripts/generated-images/{slug}-{provider}-v{N}-raw.png   (source res, ~3:2)
    scripts/generated-images/{slug}-{provider}-v{N}-hero.png  (2:1 crop, 1600x800)
    scripts/generated-images/{slug}-{provider}-v{N}-og.png    (1.91:1 crop, 1200x630)

Pick the variant you like per article, then hand the filename to Claude and
he'll drop it into public/articles-hero/{slug}.png and public/og/{slug}.png.

Provider notes:
    gemini (Nano Banana 2, released 2026-02-26)
        - Model: gemini-3.1-flash-image-preview
        - Cheap + fast + free tier 500 req/day, 60 req/min
        - Does NOT accept a size parameter; aspect ratio is requested in prompt
        - Usually returns ~1024x1024 or similar square/near-square; we crop down
        - One image per call, so --variants N = N sequential calls
    openai (gpt-image-2, released 2026-04-21)
        - Model: gpt-image-2
        - Better at text in images (irrelevant here — we forbid text anyway)
        - Exposes size + quality parameters directly (1536x1024 3:2 widescreen)
        - Supports n>1 in a single call
"""

from __future__ import annotations

import argparse
import base64
import json
import os
import sys
import time
from pathlib import Path

try:
    import requests
except ImportError:
    print("ERROR: 'requests' not installed. Run: pip install requests pillow", file=sys.stderr)
    sys.exit(1)

try:
    from PIL import Image
except ImportError:
    print("ERROR: 'pillow' not installed. Run: pip install requests pillow", file=sys.stderr)
    sys.exit(1)


ROOT = Path(__file__).resolve().parent.parent
PROMPTS_FILE = ROOT / "scripts" / "image-prompts.json"
OUT_DIR = ROOT / "scripts" / "generated-images"

HERO_TARGET = (1600, 800)     # 2:1 — matches existing public/articles-hero dims
OG_TARGET = (1200, 630)       # 1.905:1 — matches existing public/og dims

# ---- Provider registry ------------------------------------------------------

PROVIDERS = {
    "openai": {
        "env_key": "OPENAI_API_KEY",
        "model": "gpt-image-2",
        "url": "https://api.openai.com/v1/images/generations",
        "size": "1536x1024",                # 3:2 source ratio — crops cleanly to 2:1
        "quality": "high",                   # low | medium | high
        "price_per_image_usd": 0.25,         # est. at 1536x1024 high quality
        "supports_batch_n": True,
    },
    "gemini": {
        "env_key": "GEMINI_API_KEY",         # also accepts GOOGLE_API_KEY as fallback
        "model": "gemini-3.1-flash-image-preview",
        "url": "https://generativelanguage.googleapis.com/v1beta/models/"
               "gemini-3.1-flash-image-preview:generateContent",
        "size": None,                        # not accepted by API; ask via prompt
        "quality": None,
        "price_per_image_usd": 0.067,        # 1K tier; free under 500/day quota
        "supports_batch_n": False,            # one image per call
    },
}

# Aspect-ratio nudge appended to prompts when using Gemini (it doesn't expose
# size as a parameter, so we ask for widescreen inside the prompt).
GEMINI_ASPECT_NUDGE = (
    "\n\nIMPORTANT OUTPUT REQUIREMENT: Generate this as a wide landscape "
    "image in approximately 3:2 or 16:9 aspect ratio — NOT square. The "
    "final image should be clearly widescreen, with the composition "
    "arranged to fill a horizontal canvas. Prefer width > height by at "
    "least a 3:2 margin."
)


# ---- Prompt loading ---------------------------------------------------------

def load_prompts() -> dict:
    if not PROMPTS_FILE.exists():
        print(f"ERROR: {PROMPTS_FILE} missing", file=sys.stderr)
        sys.exit(1)
    return json.loads(PROMPTS_FILE.read_text())


def build_full_prompt(style_brief: str, article: dict, provider: str) -> str:
    accent_line = f"Accent color for this article: {article['accent']}.\n\n"
    base = f"{style_brief}{accent_line}Scene:\n{article['scene']}"
    if provider == "gemini":
        base += GEMINI_ASPECT_NUDGE
    return base


# ---- Provider: OpenAI -------------------------------------------------------

def call_openai(api_key: str, prompt: str, n: int) -> list[bytes]:
    cfg = PROVIDERS["openai"]
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }
    payload = {
        "model": cfg["model"],
        "prompt": prompt,
        "size": cfg["size"],
        "quality": cfg["quality"],
        "n": n,
    }
    print(f"  [openai] {cfg['model']} size={cfg['size']} quality={cfg['quality']} n={n}")
    t0 = time.time()
    resp = requests.post(cfg["url"], headers=headers, json=payload, timeout=300)
    dt = time.time() - t0
    if resp.status_code != 200:
        print(f"ERROR: OpenAI API {resp.status_code}\n{resp.text}", file=sys.stderr)
        sys.exit(2)
    data = resp.json()
    print(f"  [openai] got {len(data.get('data', []))} image(s) in {dt:.1f}s")
    return [base64.b64decode(item["b64_json"]) for item in data["data"]]


# ---- Provider: Gemini (Nano Banana 2) ---------------------------------------

def call_gemini_single(api_key: str, prompt: str) -> bytes:
    cfg = PROVIDERS["gemini"]
    headers = {"Content-Type": "application/json"}
    params = {"key": api_key}
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        # The image-preview models require responseModalities in generationConfig
        # to return image parts alongside (or instead of) text.
        "generationConfig": {
            "responseModalities": ["IMAGE", "TEXT"],
        },
    }
    resp = requests.post(cfg["url"], headers=headers, params=params, json=payload, timeout=300)
    if resp.status_code != 200:
        print(f"ERROR: Gemini API {resp.status_code}\n{resp.text}", file=sys.stderr)
        sys.exit(2)
    data = resp.json()
    # Response shape: candidates[0].content.parts[N].inline_data.{mime_type, data}
    try:
        candidates = data["candidates"]
        if not candidates:
            raise KeyError("no candidates")
        parts = candidates[0]["content"]["parts"]
    except KeyError as e:
        print(f"ERROR: unexpected Gemini response shape ({e})\n{json.dumps(data)[:500]}",
              file=sys.stderr)
        sys.exit(2)
    for part in parts:
        inline = part.get("inline_data") or part.get("inlineData")  # API is inconsistent
        if inline and "data" in inline:
            return base64.b64decode(inline["data"])
    print(f"ERROR: no inline image data in Gemini response\n{json.dumps(data)[:500]}",
          file=sys.stderr)
    sys.exit(2)


def call_gemini(api_key: str, prompt: str, n: int) -> list[bytes]:
    cfg = PROVIDERS["gemini"]
    print(f"  [gemini] {cfg['model']} n={n} (sequential, 1 per call)")
    out: list[bytes] = []
    t0 = time.time()
    for i in range(n):
        t_start = time.time()
        png = call_gemini_single(api_key, prompt)
        print(f"  [gemini] variant {i+1}/{n} done in {time.time()-t_start:.1f}s")
        out.append(png)
    print(f"  [gemini] got {len(out)} image(s) in {time.time()-t0:.1f}s total")
    return out


PROVIDER_CALL = {
    "openai": call_openai,
    "gemini": call_gemini,
}


# ---- Image post-processing --------------------------------------------------

def crop_center(img: Image.Image, target: tuple[int, int]) -> Image.Image:
    """Resize keeping aspect ratio, then center-crop to exact target dims."""
    tw, th = target
    target_ratio = tw / th
    src_ratio = img.width / img.height
    if src_ratio > target_ratio:
        new_h = th
        new_w = round(img.width * (th / img.height))
    else:
        new_w = tw
        new_h = round(img.height * (tw / img.width))
    resized = img.resize((new_w, new_h), Image.LANCZOS)
    left = (new_w - tw) // 2
    top = (new_h - th) // 2
    return resized.crop((left, top, left + tw, top + th))


def save_variant(raw_png: bytes, slug: str, provider: str, variant: int) -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    stem = f"{slug}-{provider}-v{variant}"
    raw_path = OUT_DIR / f"{stem}-raw.png"
    hero_path = OUT_DIR / f"{stem}-hero.png"
    og_path = OUT_DIR / f"{stem}-og.png"

    raw_path.write_bytes(raw_png)
    src = Image.open(raw_path).convert("RGB")
    crop_center(src, HERO_TARGET).save(hero_path, "PNG", optimize=True)
    crop_center(src, OG_TARGET).save(og_path, "PNG", optimize=True)

    print(f"  wrote {raw_path.relative_to(ROOT)}  ({src.width}x{src.height} source)")
    print(f"  wrote {hero_path.relative_to(ROOT)}")
    print(f"  wrote {og_path.relative_to(ROOT)}")


# ---- Orchestration ----------------------------------------------------------

def generate_for_slug(provider: str, api_key: str, style_brief: str, slug: str,
                      articles: dict, variants: int, prompt_override: str | None,
                      dry_run: bool) -> None:
    if slug not in articles:
        print(f"ERROR: unknown slug '{slug}'. Known: {list(articles.keys())}", file=sys.stderr)
        sys.exit(1)

    article = articles[slug]
    if prompt_override:
        full_prompt = f"{style_brief}Scene:\n{prompt_override}"
        if provider == "gemini":
            full_prompt += GEMINI_ASPECT_NUDGE
        header = f"{slug} [{provider}] override-prompt {variants}x"
    else:
        full_prompt = build_full_prompt(style_brief, article, provider)
        header = f"{slug} [{provider}] {variants}x"

    print(f"\n=== {header} ===")

    if dry_run:
        print("\n--- FULL PROMPT ---\n")
        print(full_prompt)
        print("\n--- (dry-run; no API call) ---")
        return

    images = PROVIDER_CALL[provider](api_key, full_prompt, variants)
    for i, png in enumerate(images, start=1):
        save_variant(png, slug, provider, i)


def resolve_api_key(provider: str) -> str:
    env_key = PROVIDERS[provider]["env_key"]
    val = os.environ.get(env_key, "").strip()
    if not val and provider == "gemini":
        # Accept GOOGLE_API_KEY as a fallback (common convention).
        val = os.environ.get("GOOGLE_API_KEY", "").strip()
    if not val:
        print(f"ERROR: {env_key} env var not set.\n"
              f"  Run:  export {env_key}=your-key-here\n"
              f"  Then rerun this script.", file=sys.stderr)
        if provider == "gemini":
            print("  (also accepts GOOGLE_API_KEY)", file=sys.stderr)
        sys.exit(1)
    return val


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Generate SciSymbio article hero images via gpt-image-2 or Nano Banana 2")
    parser.add_argument("--slug", help="Article slug (key in image-prompts.json > articles)")
    parser.add_argument("--all", action="store_true", help="Generate all five articles")
    parser.add_argument("--variants", type=int, default=2,
                        help="Number of variants per slug (default: 2)")
    parser.add_argument("--provider", choices=list(PROVIDERS.keys()), default="gemini",
                        help="Image provider (default: gemini / Nano Banana 2 — cheaper, often free)")
    parser.add_argument("--prompt-override", help="Replace the scene block for this run only")
    parser.add_argument("--dry-run", action="store_true", help="Print prompt without calling API")
    args = parser.parse_args()

    if not args.slug and not args.all:
        parser.error("pass --slug SLUG or --all")
    if args.slug and args.all:
        parser.error("pass --slug or --all, not both")
    if args.prompt_override and args.all:
        parser.error("--prompt-override only works with a single --slug")

    prompts = load_prompts()
    style_brief = prompts["style_brief"]
    articles = prompts["articles"]

    targets = list(articles.keys()) if args.all else [args.slug]
    cfg = PROVIDERS[args.provider]
    total_images = len(targets) * args.variants
    est_cost = total_images * cfg["price_per_image_usd"]

    size_desc = cfg["size"] or "1024-ish (Gemini picks)"
    print(f"Provider: {args.provider} ({cfg['model']})")
    print(f"Planned:  {total_images} image(s)  —  est. ${est_cost:.2f}  "
          f"(at ~${cfg['price_per_image_usd']:.3f}/image at {size_desc})")
    if args.provider == "gemini":
        print("          (Gemini free tier: 500 req/day, 60 req/min — likely $0.00)")

    api_key = "DRY_RUN" if args.dry_run else resolve_api_key(args.provider)

    for slug in targets:
        try:
            generate_for_slug(args.provider, api_key, style_brief, slug, articles,
                              args.variants, args.prompt_override, args.dry_run)
        except KeyboardInterrupt:
            print("\nInterrupted.", file=sys.stderr)
            return 130

    if not args.dry_run:
        print(f"\nDone. Preview the variants in: {OUT_DIR.relative_to(ROOT)}")
        print("When you've picked the ones you like, tell Claude the slugs + variant numbers + provider.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
