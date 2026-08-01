# CLAUDE.md — SciSymbio website

Project rules and context for Claude Code. Loaded automatically every session.

**New here?** The full onboarding manual is `ONBOARDING.md` — read it once, then come back.

## What this is

Marketing site for SciSymbio. **Live at www.scisymbio.ai** — `main` is production.
Vite + React 18 + TypeScript + Tailwind + shadcn/ui. Static, no backend, no database.

## Commands

```bash
npm run dev      # preview → http://localhost:8080
npm run build    # vite build + scripts/build-routes.mjs — run before any publish
npm run lint
```

Use **npm**, never bun. `package-lock.json` is authoritative; `bun.lockb` is a stale leftover and CI uses `npm ci`.

## Critical rules

1. **A new route MUST be added to `public/sitemap.xml`.** The post-build step `scripts/build-routes.mjs` reads the sitemap — not the router — and pre-creates a static stub for every URL listed. A route in `App.tsx` but absent from the sitemap works in dev and returns **404 in production**.
2. **Never delete `CNAME`** (repo root and `public/`). It holds `www.scisymbio.ai`; removing it drops the custom domain.
3. **Never hand-edit `src/components/ui/`** — generated shadcn/ui primitives. Restyle at the call site instead.
4. **Never edit `dist/`** — regenerated on every build.
5. **Preserve the formatting convention in `src/data/articles.ts`.** `build-routes.mjs` regex-parses it (object literal opening with `slug:` on its own line, double-quoted values) to bake per-article OG tags. Reformatting silently degrades social previews.
6. CI pins **Node 18** — don't use newer APIs in build scripts.

## Working agreement

The repo has two people: Martin (owner) and his co-founder, who is new to coding and drives Claude Code in plain English.

- **Default to a branch + pull request**, never a direct commit to `main`, unless explicitly told otherwise.
- **Explain before acting** on anything structural, and offer options for design decisions rather than picking unilaterally.
- **Run `npm run build`** before saying a change is ready to publish.
- Assume no coding vocabulary. Describe changes in terms of what appears on the page.

## Architecture

- Routes in `src/App.tsx` — new `<Route>` goes **above** the catch-all `*`. Pages lazy-loaded from `src/pages/`.
- Homepage sections assembled in order in `src/pages/Index.tsx`; each section is a component in `src/components/`.
- Content as data: `src/data/articles.ts`, `faqs.ts`, `testimonials.ts`.
- Third-party config: `src/config/site.ts` (Calendly URL, Clarity ID, Cloudflare token — empty string disables).
- Per-page metadata via `src/components/SEO.tsx` (react-helmet-async); JSON-LD passed through its `structuredData` prop.
- Path alias `@/` → `./src/`.
- `@tanstack/react-query` is mounted but unused — there is no API layer.

## Design system

Tokens live in `src/index.css` `:root` as HSL triplets **without** the `hsl()` wrapper (Tailwind convention).

```
--background 42 33% 96%    warm cream #FAF7F0
--foreground 20 14% 12%    warm near-black
--primary / --accent  182 79% 22%   SciSymbio teal #0c6066
--radius 0.5rem
```

Fraunces (serif display, via `.font-display`) + Inter (sans body). Editorial and warm: cream not white, one teal accent, generous whitespace. **No dark mode** — don't add `dark:` variants without a deliberate decision.

## Deployment

`.github/workflows/deploy.yml` — on push to `main`: `npm ci` → `npm run build` → GitHub Pages. Live in ~2 min. **No staging environment**; local preview is the only preview.

## Adding a page — full checklist

1. Component in `src/pages/`
2. Lazy import + `<Route>` in `App.tsx`, above the catch-all
3. **Entry in `public/sitemap.xml`** (see rule 1)
4. `<SEO>` usage with path + description
5. Keep `Navigation` and `Footer`
