#!/usr/bin/env python3
"""
Generate per-article OG preview images (1200x630) and hero images (1600x800)
from the metadata in src/data/articles.ts. Outputs go to:

  public/og/<slug>.png            (Open Graph preview — LinkedIn, WhatsApp, X)
  public/articles-hero/<slug>.png (hero banner at top of each article page)

Brand-consistent with the site: Fraunces italic display, Inter sans,
teal #0c6066. A subtle per-category tint differentiates the 5 topics.

Re-run whenever an article is added, renamed, or recategorised:
  python3 scripts/make-article-images.py
"""
from __future__ import annotations

import os
import re
import textwrap
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
FONTS_DIR = ROOT / "scripts" / "fonts"
OG_DIR = ROOT / "public" / "og"
HERO_DIR = ROOT / "public" / "articles-hero"

# Brand
TEAL = (12, 96, 102)
TEAL_DARK = (7, 60, 65)
WHITE = (255, 255, 255)
WARM_WHITE = (248, 246, 240)
ACCENT_SOFT = (235, 196, 140)  # warm accent dot used on some designs

# Per-category accent, applied as a subtle colored rule/dot on OG + hero.
CATEGORY_ACCENT = {
    "Industry":   (235, 196, 140),  # warm amber
    "Research":   (180, 214, 199),  # pale mint
    "Compliance": (214, 182, 214),  # soft lavender
    "Product":    (200, 220, 238),  # glacial blue
    "Operations": (245, 203, 180),  # coral
}
DEFAULT_ACCENT = (235, 196, 140)


def load_font(path: Path, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(path), size=size)


def set_axes(font: ImageFont.FreeTypeFont, wght: int | None = None, opsz: int | None = None):
    """Set variable-font axes if supported. Ignored for static fonts."""
    try:
        axes: dict[str, float] = {}
        if wght is not None:
            axes["wght"] = wght
        if opsz is not None:
            axes["opsz"] = opsz
        if axes:
            font.set_variation_by_axes([axes.get("wght", 400), axes.get("opsz", 14)])
    except Exception:
        pass


def wrap_text(text: str, font: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    """Word-wrap to fit max_width in px."""
    words = text.split()
    lines: list[str] = []
    current: list[str] = []
    for word in words:
        trial = " ".join(current + [word])
        bbox = font.getbbox(trial)
        if bbox[2] - bbox[0] <= max_width:
            current.append(word)
        else:
            if current:
                lines.append(" ".join(current))
            current = [word]
    if current:
        lines.append(" ".join(current))
    return lines


def draw_glasses_mark(draw: ImageDraw.ImageDraw, cx: int, cy: int, size: int, color):
    """A tiny glyph evoking the SciSymbio glasses — two circles + bridge."""
    r = size // 2
    gap = size // 3
    lw = max(2, size // 12)
    left = (cx - gap - r, cy - r, cx - gap + r, cy + r)
    right = (cx + gap - r, cy - r, cx + gap + r, cy + r)
    draw.ellipse(left, outline=color, width=lw)
    draw.ellipse(right, outline=color, width=lw)
    # Bridge
    draw.line([(cx - gap + r, cy), (cx + gap - r, cy)], fill=color, width=lw)


def og_image(
    title: str,
    category: str,
    date: str,
    out_path: Path,
):
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), TEAL)

    # Subtle vignette — darker corners
    vignette = Image.new("L", (W, H), 0)
    vd = ImageDraw.Draw(vignette)
    vd.ellipse((-300, -300, W + 300, H + 300), fill=255)
    vignette = vignette.filter(ImageFilter.GaussianBlur(200))
    dark = Image.new("RGB", (W, H), TEAL_DARK)
    img = Image.composite(img, dark, vignette)

    draw = ImageDraw.Draw(img)

    # SciSymbio mark top-left
    mark_x, mark_y = 60, 60
    draw_glasses_mark(draw, mark_x + 26, mark_y + 26, 44, WHITE)
    wordmark_font = load_font(FONTS_DIR / "Inter.ttf", 28)
    set_axes(wordmark_font, wght=500)
    draw.text((mark_x + 70, mark_y + 10), "SciSymbio", fill=WHITE, font=wordmark_font)

    # Category label top-right (uppercase small caps feel)
    cat_font = load_font(FONTS_DIR / "Inter.ttf", 18)
    set_axes(cat_font, wght=600)
    cat_text = category.upper()
    cat_bbox = cat_font.getbbox(cat_text)
    cat_w = cat_bbox[2] - cat_bbox[0]
    cat_x = W - 60 - cat_w
    draw.text((cat_x, mark_y + 16), cat_text, fill=WARM_WHITE, font=cat_font)
    # Accent dot
    accent = CATEGORY_ACCENT.get(category, DEFAULT_ACCENT)
    draw.ellipse((cat_x - 22, mark_y + 22, cat_x - 10, mark_y + 34), fill=accent)

    # Title — Fraunces italic, wrapped to 3 lines
    title_font = load_font(FONTS_DIR / "Fraunces-Italic.ttf", 68)
    # Try to set light-ish axes
    set_axes(title_font, wght=360, opsz=144)
    max_title_w = W - 120
    lines = wrap_text(title, title_font, max_title_w)
    if len(lines) > 4:
        # Shrink if overflowing
        title_font = load_font(FONTS_DIR / "Fraunces-Italic.ttf", 56)
        set_axes(title_font, wght=360, opsz=144)
        lines = wrap_text(title, title_font, max_title_w)

    line_h = int(title_font.size * 1.12)
    block_h = line_h * len(lines)
    start_y = (H - block_h) // 2 - 10
    for i, ln in enumerate(lines):
        draw.text((60, start_y + i * line_h), ln, fill=WHITE, font=title_font)

    # Accent rule + date bottom-left
    rule_y = H - 80
    draw.line([(60, rule_y), (110, rule_y)], fill=accent, width=2)
    date_font = load_font(FONTS_DIR / "Inter.ttf", 18)
    set_axes(date_font, wght=500)
    draw.text((124, rule_y - 12), date.upper(), fill=WARM_WHITE, font=date_font)

    # "scisymbio.ai" bottom-right
    url_font = load_font(FONTS_DIR / "Inter.ttf", 18)
    set_axes(url_font, wght=400)
    url_text = "scisymbio.ai"
    url_bbox = url_font.getbbox(url_text)
    draw.text(
        (W - 60 - (url_bbox[2] - url_bbox[0]), rule_y - 12),
        url_text,
        fill=WARM_WHITE,
        font=url_font,
    )

    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path, "PNG", optimize=True)
    print(f"og-preview  wrote {out_path.relative_to(ROOT)}")


def hero_image(
    title: str,
    category: str,
    out_path: Path,
):
    W, H = 1600, 800
    img = Image.new("RGB", (W, H), TEAL_DARK)

    # Gradient — darker to lighter top-left
    grad = Image.new("RGB", (W, H), TEAL_DARK)
    g = ImageDraw.Draw(grad)
    for y in range(H):
        t = y / H
        r = int(TEAL_DARK[0] + (TEAL[0] - TEAL_DARK[0]) * (1 - t))
        gg = int(TEAL_DARK[1] + (TEAL[1] - TEAL_DARK[1]) * (1 - t))
        b = int(TEAL_DARK[2] + (TEAL[2] - TEAL_DARK[2]) * (1 - t))
        g.line([(0, y), (W, y)], fill=(r, gg, b))
    img = grad

    draw = ImageDraw.Draw(img)

    # Large faint word — the category — as a design motif
    accent = CATEGORY_ACCENT.get(category, DEFAULT_ACCENT)
    motif_font = load_font(FONTS_DIR / "Fraunces-Italic.ttf", 420)
    set_axes(motif_font, wght=280, opsz=144)
    motif_text = category.lower()

    # Draw motif word on a transparent layer and composite with low alpha
    motif_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    md = ImageDraw.Draw(motif_layer)
    bbox = motif_font.getbbox(motif_text)
    mw = bbox[2] - bbox[0]
    mh = bbox[3] - bbox[1]
    # Center horizontally, lower-right oriented
    motif_x = W - mw - 80
    motif_y = (H - mh) // 2
    md.text((motif_x, motif_y), motif_text, fill=(255, 255, 255, 26), font=motif_font)
    img = Image.alpha_composite(img.convert("RGBA"), motif_layer).convert("RGB")
    draw = ImageDraw.Draw(img)

    # Small accent rule + category tag top-left
    draw.line([(80, 80), (130, 80)], fill=accent, width=2)
    tag_font = load_font(FONTS_DIR / "Inter.ttf", 22)
    set_axes(tag_font, wght=600)
    draw.text((146, 68), category.upper(), fill=WARM_WHITE, font=tag_font)

    # SciSymbio mark bottom-left
    draw_glasses_mark(draw, 106, H - 90, 50, WHITE)
    wm_font = load_font(FONTS_DIR / "Inter.ttf", 28)
    set_axes(wm_font, wght=500)
    draw.text((144, H - 104), "SciSymbio", fill=WARM_WHITE, font=wm_font)

    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path, "PNG", optimize=True)
    print(f"hero        wrote {out_path.relative_to(ROOT)}")


def parse_articles_ts(ts_path: Path) -> list[dict]:
    """Crude parse of the articles.ts TypeScript file — extract slug/title/category/date."""
    text = ts_path.read_text()
    entries = []
    # Split on "{" at the start of each article object — articles start with "slug:"
    blocks = re.split(r"\n\s*\{\s*\n\s+slug:\s*", text)
    for block in blocks[1:]:
        slug_match = re.match(r'"([^"]+)"', block)
        title_match = re.search(r'title:\s*\n?\s*"([^"]+)"', block)
        category_match = re.search(r'category:\s*"([^"]+)"', block)
        date_match = re.search(r'date:\s*"([^"]+)"', block)
        if not (slug_match and title_match and category_match and date_match):
            continue
        entries.append(
            {
                "slug": slug_match.group(1),
                "title": title_match.group(1),
                "category": category_match.group(1),
                "date": date_match.group(1),
            }
        )
    return entries


def main():
    articles_ts = ROOT / "src" / "data" / "articles.ts"
    articles = parse_articles_ts(articles_ts)
    if not articles:
        raise SystemExit("No articles parsed from src/data/articles.ts")

    OG_DIR.mkdir(parents=True, exist_ok=True)
    HERO_DIR.mkdir(parents=True, exist_ok=True)

    for a in articles:
        og_image(a["title"], a["category"], a["date"], OG_DIR / f"{a['slug']}.png")
        hero_image(a["title"], a["category"], HERO_DIR / f"{a['slug']}.png")

    print(f"\nDone. Generated {len(articles)} OG + {len(articles)} hero images.")


if __name__ == "__main__":
    main()
