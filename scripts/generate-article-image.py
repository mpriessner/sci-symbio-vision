#!/usr/bin/env python3
"""
Generate article hero images via OpenAI gpt-image-2.

Setup:
    export OPENAI_API_KEY=sk-...            # never commit, never paste into files
    pip install pillow requests             # both already used by make-article-images.py

Usage:
    # Generate one article with 2 variants (default)
    python scripts/generate-article-image.py --slug 28-billion-reproducibility-tax

    # Generate a specific number of variants
    python scripts/generate-article-image.py --slug tacit-knowledge-walking-out --variants 4

    # Generate ALL five at once (~$2.50 at 2 variants each)
    python scripts/generate-article-image.py --all --variants 2

    # Override the prompt on the fly (prompt file untouched)
    python scripts/generate-article-image.py --slug onboarding-two-weeks \\
        --prompt-override "Same style as brief, but make the hourglass tilted 45 degrees..."

    # Preview the full prompt without calling the API
    python scripts/generate-article-image.py --slug why-eln-cant-capture-procedure --dry-run

After generation, each image writes three files per variant:
    scripts/generated-images/{slug}-v{N}-raw.png   (3:2 source, 1536x1024)
    scripts/generated-images/{slug}-v{N}-hero.png  (2:1 crop, 1600x800)
    scripts/generated-images/{slug}-v{N}-og.png    (1.91:1 crop, 1200x630)

Pick the variant you like per article, then hand the filename to Claude and
he'll drop it into public/articles-hero/{slug}.png and public/og/{slug}.png.
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

API_URL = "https://api.openai.com/v1/images/generations"
MODEL = "gpt-image-2"
SIZE = "1536x1024"           # 3:2 source; we crop to 2:1 and 1.91:1 locally
QUALITY = "high"              # 'low' | 'medium' | 'high'
PRICE_PER_IMAGE_USD = 0.25    # rough estimate for 1536x1024 high quality; actual billed by tokens

HERO_TARGET = (1600, 800)     # 2:1 — matches existing public/articles-hero dims
OG_TARGET = (1200, 630)       # 1.905:1 — matches existing public/og dims


def load_prompts() -> dict:
    if not PROMPTS_FILE.exists():
        print(f"ERROR: {PROMPTS_FILE} missing", file=sys.stderr)
        sys.exit(1)
    return json.loads(PROMPTS_FILE.read_text())


def build_full_prompt(style_brief: str, article: dict) -> str:
    accent_line = f"Accent color for this article: {article['accent']}.\n\n"
    return f"{style_brief}{accent_line}Scene:\n{article['scene']}"


def call_api(api_key: str, prompt: str, n: int) -> list[bytes]:
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }
    payload = {
        "model": MODEL,
        "prompt": prompt,
        "size": SIZE,
        "quality": QUALITY,
        "n": n,
    }
    print(f"  calling {MODEL} (size={SIZE}, quality={QUALITY}, n={n})...")
    t0 = time.time()
    resp = requests.post(API_URL, headers=headers, json=payload, timeout=300)
    dt = time.time() - t0
    if resp.status_code != 200:
        print(f"ERROR: API returned {resp.status_code}\n{resp.text}", file=sys.stderr)
        sys.exit(2)
    data = resp.json()
    print(f"  received {len(data.get('data', []))} image(s) in {dt:.1f}s")
    return [base64.b64decode(item["b64_json"]) for item in data["data"]]


def crop_center(img: Image.Image, target: tuple[int, int]) -> Image.Image:
    """Resize keeping aspect ratio, then center-crop to exact target dims."""
    tw, th = target
    target_ratio = tw / th
    src_ratio = img.width / img.height
    if src_ratio > target_ratio:
        # source is wider → scale to target height, crop sides
        new_h = th
        new_w = round(img.width * (th / img.height))
    else:
        # source is taller → scale to target width, crop top/bottom
        new_w = tw
        new_h = round(img.height * (tw / img.width))
    resized = img.resize((new_w, new_h), Image.LANCZOS)
    left = (new_w - tw) // 2
    top = (new_h - th) // 2
    return resized.crop((left, top, left + tw, top + th))


def save_variant(raw_png: bytes, slug: str, variant: int) -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    raw_path = OUT_DIR / f"{slug}-v{variant}-raw.png"
    hero_path = OUT_DIR / f"{slug}-v{variant}-hero.png"
    og_path = OUT_DIR / f"{slug}-v{variant}-og.png"

    raw_path.write_bytes(raw_png)
    src = Image.open(raw_path).convert("RGB")
    crop_center(src, HERO_TARGET).save(hero_path, "PNG", optimize=True)
    crop_center(src, OG_TARGET).save(og_path, "PNG", optimize=True)

    print(f"  wrote {raw_path.relative_to(ROOT)}")
    print(f"  wrote {hero_path.relative_to(ROOT)}")
    print(f"  wrote {og_path.relative_to(ROOT)}")


def generate_for_slug(api_key: str, style_brief: str, slug: str,
                      articles: dict, variants: int, prompt_override: str | None,
                      dry_run: bool) -> None:
    if slug not in articles:
        print(f"ERROR: unknown slug '{slug}'. Known: {list(articles.keys())}", file=sys.stderr)
        sys.exit(1)

    article = articles[slug]
    if prompt_override:
        full_prompt = f"{style_brief}Scene:\n{prompt_override}"
        print(f"\n=== {slug} (override prompt, {variants} variant(s)) ===")
    else:
        full_prompt = build_full_prompt(style_brief, article)
        print(f"\n=== {slug} ({variants} variant(s)) ===")

    if dry_run:
        print("\n--- FULL PROMPT ---\n")
        print(full_prompt)
        print("\n--- (dry-run; no API call) ---")
        return

    images = call_api(api_key, full_prompt, variants)
    for i, png in enumerate(images, start=1):
        save_variant(png, slug, i)


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate SciSymbio article hero images via gpt-image-2")
    parser.add_argument("--slug", help="Article slug (key in image-prompts.json > articles)")
    parser.add_argument("--all", action="store_true", help="Generate all five articles")
    parser.add_argument("--variants", type=int, default=2,
                        help="Number of variants per slug (default: 2)")
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
    total_images = len(targets) * args.variants
    est_cost = total_images * PRICE_PER_IMAGE_USD

    print(f"Planned: {total_images} image(s)  —  est. ${est_cost:.2f}  "
          f"(at ~${PRICE_PER_IMAGE_USD:.2f}/image for {SIZE} {QUALITY})")
    if not args.dry_run:
        api_key = os.environ.get("OPENAI_API_KEY", "").strip()
        if not api_key:
            print("ERROR: OPENAI_API_KEY env var not set.\n"
                  "  Run:  export OPENAI_API_KEY=sk-your-key-here\n"
                  "  Then rerun this script.", file=sys.stderr)
            return 1
    else:
        api_key = "DRY_RUN"

    for slug in targets:
        try:
            generate_for_slug(api_key, style_brief, slug, articles,
                              args.variants, args.prompt_override, args.dry_run)
        except KeyboardInterrupt:
            print("\nInterrupted.", file=sys.stderr)
            return 130

    if not args.dry_run:
        print(f"\nDone. Preview the variants in: {OUT_DIR.relative_to(ROOT)}")
        print("When you've picked the ones you like, tell Claude the slugs + variant numbers.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
