#!/usr/bin/env node
/**
 * Post-build step:
 *   1. Pre-create a directory + index.html for every SPA route listed in the
 *      sitemap. Without this, GitHub Pages returns HTTP 404 for any path
 *      other than `/` and Googlebot will refuse to index it.
 *   2. For each article route, rewrite the OG/Twitter/title/description
 *      meta tags to article-specific values — so LinkedIn, WhatsApp, and
 *      other social-media scrapers (which do NOT run JavaScript, and so
 *      never see the tags that react-helmet-async injects client-side)
 *      see a per-article preview card.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");
const srcDataArticles = path.resolve(__dirname, "..", "src", "data", "articles.ts");
const indexHtmlPath = path.join(distDir, "index.html");
const sitemapPath = path.join(distDir, "sitemap.xml");

if (!fs.existsSync(indexHtmlPath)) {
  console.error("build-routes: dist/index.html is missing — did Vite build finish?");
  process.exit(1);
}
if (!fs.existsSync(sitemapPath)) {
  console.error("build-routes: dist/sitemap.xml is missing — cannot derive routes.");
  process.exit(1);
}

const SITE_URL = "https://www.scisymbio.ai";
const SITE_NAME = "SciSymbio";

const indexHtml = fs.readFileSync(indexHtmlPath, "utf-8");
const sitemap = fs.readFileSync(sitemapPath, "utf-8");

/**
 * Crude but reliable regex parse of src/data/articles.ts — extract
 * slug / title / excerpt / date / category for each entry so we can
 * bake article-specific OG tags into each pre-rendered route stub.
 */
function parseArticles() {
  if (!fs.existsSync(srcDataArticles)) return new Map();
  const text = fs.readFileSync(srcDataArticles, "utf-8");
  const map = new Map();
  // Split on the opening brace of each article object.
  const blocks = text.split(/\n\s*\{\s*\n\s+slug:\s*/);
  for (const block of blocks.slice(1)) {
    const slug = block.match(/^"([^"]+)"/)?.[1];
    const title = block.match(/title:\s*\n?\s*"([^"]+)"/)?.[1];
    const excerpt = block.match(/excerpt:\s*\n?\s*"([^"]+)"/)?.[1];
    const date = block.match(/date:\s*"([^"]+)"/)?.[1];
    const category = block.match(/category:\s*"([^"]+)"/)?.[1];
    if (slug && title) {
      map.set(slug, { slug, title, excerpt, date, category });
    }
  }
  return map;
}

const articles = parseArticles();

/** Static per-route meta for the non-article pages we pre-render. */
const pageMeta = {
  "/team": {
    title: "Team",
    description:
      "The team behind SciSymbio — the voice- and vision-native AI companion for the wet lab.",
  },
  "/articles": {
    title: "Articles",
    description:
      "Essays on scientific reproducibility, tacit knowledge, ALCOA+ data integrity, and the AI companion that captures what happens at the bench.",
  },
  "/privacy": {
    title: "Privacy & Legal Notice",
    description:
      "SciSymbio privacy policy and legal notice — how we handle personal data, cookies, and GDPR rights.",
  },
  "/security": {
    title: "Security & Data Handling",
    description:
      "How SciSymbio handles customer data: encryption, residency, DPA availability, GDPR posture, and compliance roadmap.",
  },
};

/** Replace a single `<meta ... content="..." />` tag by its property/name attr. */
function replaceMeta(html, attr, attrValue, newContent) {
  const re = new RegExp(
    `(<meta\\s+${attr}="${attrValue}"\\s+content=")[^"]*(")`,
    "i"
  );
  if (!re.test(html)) return html;
  // Use a replacement function so `$` in newContent isn't treated as a backref.
  return html.replace(re, (_m, pre, post) => `${pre}${escapeAttr(newContent)}${post}`);
}

function replaceTitle(html, newTitle) {
  return html.replace(/<title>[^<]*<\/title>/i, () => `<title>${escapeHtml(newTitle)}</title>`);
}

function replaceCanonical(html, newHref) {
  return html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/i,
    () => `<link rel="canonical" href="${escapeAttr(newHref)}" />`
  );
}

function replaceOgType(html, newType) {
  return html.replace(
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/>/i,
    () => `<meta property="og:type" content="${escapeAttr(newType)}" />`
  );
}

function escapeAttr(s) {
  return String(s).replace(/"/g, "&quot;").replace(/\n/g, " ");
}
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Bake per-route meta into a copy of the shell HTML. */
function htmlForRoute(pathname) {
  let html = indexHtml;
  const url = `${SITE_URL}${pathname}`;

  // Article page
  const articleSlugMatch = pathname.match(/^\/articles\/([^/]+)\/?$/);
  if (articleSlugMatch) {
    const slug = articleSlugMatch[1];
    const a = articles.get(slug);
    if (a) {
      const fullTitle = `${a.title} · ${SITE_NAME}`;
      const description = a.excerpt || "";
      const ogImage = `${SITE_URL}/og/${a.slug}.png`;

      html = replaceTitle(html, fullTitle);
      html = replaceMeta(html, "name", "description", description);
      html = replaceCanonical(html, url);
      html = replaceOgType(html, "article");
      html = replaceMeta(html, "property", "og:title", fullTitle);
      html = replaceMeta(html, "property", "og:description", description);
      html = replaceMeta(html, "property", "og:url", url);
      html = replaceMeta(html, "property", "og:image", ogImage);
      html = replaceMeta(html, "property", "og:image:alt", fullTitle);
      html = replaceMeta(html, "name", "twitter:title", fullTitle);
      html = replaceMeta(html, "name", "twitter:description", description);
      html = replaceMeta(html, "name", "twitter:image", ogImage);
      return html;
    }
  }

  // Static page meta (/team, /articles, /privacy, /security)
  const cleanPath = pathname.replace(/\/+$/g, "") || "/";
  const meta = pageMeta[cleanPath];
  if (meta) {
    const fullTitle = `${meta.title} · ${SITE_NAME}`;
    html = replaceTitle(html, fullTitle);
    html = replaceMeta(html, "name", "description", meta.description);
    html = replaceCanonical(html, url);
    html = replaceMeta(html, "property", "og:title", fullTitle);
    html = replaceMeta(html, "property", "og:description", meta.description);
    html = replaceMeta(html, "property", "og:url", url);
    html = replaceMeta(html, "name", "twitter:title", fullTitle);
    html = replaceMeta(html, "name", "twitter:description", meta.description);
  }

  return html;
}

const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
let writtenCount = 0;

for (const url of urls) {
  const { pathname } = new URL(url);
  if (pathname === "/" || pathname === "") continue;

  const cleanPath = pathname.replace(/^\/+|\/+$/g, "");
  const targetDir = path.join(distDir, cleanPath);
  fs.mkdirSync(targetDir, { recursive: true });
  const targetFile = path.join(targetDir, "index.html");

  const rendered = htmlForRoute(pathname);
  fs.writeFileSync(targetFile, rendered);
  writtenCount += 1;
  console.log(`build-routes: wrote ${path.relative(distDir, targetFile)}`);
}

console.log(`build-routes: ${writtenCount} route stubs written.`);
