#!/usr/bin/env node
/**
 * Post-build step: pre-create a directory + index.html for every SPA route
 * listed in the sitemap. Without this, GitHub Pages returns HTTP 404 for any
 * path other than `/` (the 404.html redirect trick only works in browsers,
 * not for Googlebot, which sees the 404 status and rejects indexing).
 *
 * After this runs:
 *   dist/team/index.html
 *   dist/privacy/index.html
 *   dist/articles/index.html
 *   dist/articles/<slug>/index.html
 *
 * GitHub Pages then serves each with HTTP 200. The SPA shell is identical to
 * the root index.html — React Router reads the URL and renders the correct
 * page.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");
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

const indexHtml = fs.readFileSync(indexHtmlPath, "utf-8");
const sitemap = fs.readFileSync(sitemapPath, "utf-8");

const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
let writtenCount = 0;

for (const url of urls) {
  const { pathname } = new URL(url);
  // Skip the root — dist/index.html already lives there.
  if (pathname === "/" || pathname === "") continue;

  const cleanPath = pathname.replace(/^\/+|\/+$/g, "");
  const targetDir = path.join(distDir, cleanPath);
  fs.mkdirSync(targetDir, { recursive: true });
  const targetFile = path.join(targetDir, "index.html");
  fs.writeFileSync(targetFile, indexHtml);
  writtenCount += 1;
  console.log(`build-routes: wrote ${path.relative(distDir, targetFile)}`);
}

console.log(`build-routes: ${writtenCount} route stubs written.`);
