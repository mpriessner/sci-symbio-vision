# SciSymbio Website — Onboarding Guide

**Repo:** https://github.com/mpriessner/sci-symbio-vision · **Live:** https://www.scisymbio.ai

Welcome. This guide gets you from zero to confidently improving the SciSymbio website, without needing to know how to code. Read it once end to end — it's long, but it's the only document you'll need.

**Tip:** you can also hand this to Claude Code. In the project folder, just say:

> "Read ONBOARDING.md so you know how we work here."

*(There's also a short `CLAUDE.md` in the project that Claude reads automatically every session — that one holds the technical rules. You don't need to read it, but it's why Claude already knows this codebase.)*

---

**Contents**

- [Part 0 — What you're actually working with](#part-0--what-youre-actually-working-with)
- [Part 1 — One-time setup](#part-1--one-time-setup-45-60-min-once)
- [Part 2 — The daily loop](#part-2--the-daily-loop)
- [Part 3 — Working with Martin](#part-3--working-with-martin)
- [Part 4 — Safety: what you can and cannot break](#part-4--safety-what-you-can-and-cannot-break)
- [Part 5 — Map of the website](#part-5--map-of-the-website)
- [Part 6 — Copy-paste recipes](#part-6--copy-paste-recipes)
- [Part 7 — Undo: getting out of trouble](#part-7--undo-getting-out-of-trouble)
- [Part 8 — Growing beyond the website](#part-8--growing-beyond-the-website)
- [Part 9 — Glossary](#part-9--glossary)

---

## Part 0 — What you're actually working with

### The mental model

The website is **not** a WordPress-style admin panel where you log in and edit text in a box. It's a folder of text files. You change the text files, and a robot turns them into the website.

```
You describe a change in plain English
        ↓
Claude Code edits the text files
        ↓
You look at the result in your browser (only on YOUR computer — nobody else sees it)
        ↓
You're happy → you push your branch and open a pull request
        ↓
Martin reviews and merges it
        ↓
GitHub automatically rebuilds and publishes (~2 minutes)
        ↓
www.scisymbio.ai is updated for the whole world
```

The important consequence: **nothing you do on your computer affects the live website.** You can experiment as wildly as you like. Only the merge step is public.

### What the tech is (you don't need to understand this, just recognise the words)

- **React** — builds the pages out of reusable blocks called "components"
- **TypeScript** — the language the files are written in. Files end in `.tsx` or `.ts`
- **Tailwind CSS** — how things are styled. Written inline as short words like `text-lg font-bold text-accent`
- **Vite** — runs the preview on your computer and builds the final site
- **GitHub Pages** — the free hosting that serves www.scisymbio.ai
- **shadcn/ui** — a library of pre-built buttons, cards and dialogs we use

### What already exists

| Page | URL | Contents |
|---|---|---|
| Home | `/` | Hero, problem, solution, vision, validation, article teaser, FAQ, contact |
| Team | `/team` | Team member bios |
| Articles | `/articles` | Index of 5 long-form articles |
| Article | `/articles/<slug>` | Individual article with references |
| Privacy | `/privacy` | Privacy policy |
| Security | `/security` | Security page |

Plus SEO metadata, social-media preview cards, a sitemap, Cloudflare + Microsoft Clarity analytics, and a Calendly booking link.

---

## Part 1 — One-time setup (45–60 min, once)

Do these in order. If something fails, that's normal — paste the error into Claude Code and ask for help.

### 1.1 — Accept the GitHub invitation

Martin has sent an invite to the repository. Check your email, or go to https://github.com/mpriessner/sci-symbio-vision and accept the banner at the top. **Do this first** — without it you can look but not contribute.

### 1.2 — Install Node.js

The engine that runs the website locally.

- https://nodejs.org → download the **LTS** version (left, green button)
- Run the installer, accept defaults

Verify — open **Terminal** (Mac: Cmd+Space, type "Terminal"):

```bash
node --version
npm --version
```

Two version numbers = good. "command not found" = restart Terminal and retry.

### 1.3 — Install Git

**Mac:** run `git --version`. If prompted to install "command line developer tools", say yes and wait.
**Windows:** https://git-scm.com, install with defaults.

### 1.4 — Install GitHub Desktop (strongly recommended)

This is your safety net. It shows a **visual diff** — a side-by-side view of exactly what changed — before anything goes public. For someone new to this, that's worth far more than learning git commands.

- https://desktop.github.com → install → sign in

You'll use **Claude Code to make changes** and **GitHub Desktop to review and share them**.

### 1.5 — Get the project onto your computer

GitHub Desktop → **File → Clone repository** → select `mpriessner/sci-symbio-vision` → **Clone**.

Default location `~/Documents/GitHub/sci-symbio-vision` is fine. Note the path.

### 1.6 — Install the project's dependencies

The project needs ~250 supporting libraries, not stored in GitHub. Download them once:

```bash
cd ~/Documents/GitHub/sci-symbio-vision
npm install
```

Takes 1–3 minutes and prints a lot of text. Warnings are fine; errors that stop it are not.

> **Use `npm`, never `bun`.** There's a leftover `bun.lockb` file, but the publishing pipeline uses npm. Mixing them causes builds that work locally and fail when published.

### 1.7 — Run it

```bash
npm run dev
```

Open **http://localhost:8080**. You should see the SciSymbio website — the whole site, running on your laptop.

- Leave it running while you work. It **auto-refreshes** the moment a file is saved.
- Stop with **Ctrl+C**. Start again with `npm run dev`.

### 1.8 — Start Claude Code

Open a **second** Terminal window (Cmd+N) so the preview keeps running:

```bash
cd ~/Documents/GitHub/sci-symbio-vision
claude
```

Test it:

> "What is this project and what pages does the website have?"

A correct answer means everything is wired up.

---

## Part 2 — The daily loop

**1. Pull first.** GitHub Desktop → **Fetch origin** → pull anything new. Martin may have changed things. Doing this first avoids most conflicts.

**2. Start a branch.** A branch is a private sandbox that can't touch the live site. GitHub Desktop → **Current Branch → New Branch** → name it after the work (`polish-hero`, `new-team-photos`). Always branch off `main`.

**3. Make sure the preview is running** (`npm run dev`, browser at localhost:8080).

**4. Ask Claude Code for the change** in plain English, specific about *where*:

> "On the homepage hero section, the headline feels too long. Make it punchier — two lines maximum — and show me three options first."

**5. Look at the browser.** It auto-refreshes. This is the real test — not whether the code looks right, but whether the page looks right.

**6. Iterate.** *"The spacing under the headline is too tight."* / *"Make the button teal instead of black."* / *"Undo that, I preferred the first version."*

**7. Review the diff** in GitHub Desktop — every changed line, red removed, green added. You don't need to understand the code. You're checking the *scope* is what you expected. If you asked for a headline change and 14 files changed, ask Claude why before continuing.

**8. Run the build** — `npm run build`. Catches breakage before anyone else sees it.

**9. Commit and open a pull request** — see Part 3.

### How to talk to Claude Code effectively

**Describe the outcome, not the implementation.** You don't need file names.

| Instead of | Say |
|---|---|
| "Edit HeroSection.tsx line 40" | "Change the big headline on the homepage" |
| "Add a flex container with gap-4" | "Put these three cards side by side with more space between them" |
| "Change --accent in index.css" | "Make the teal accent slightly warmer across the whole site" |

**Useful phrases**

- *"Show me 2–3 options before you change anything."* — great for design decisions
- *"Explain what you're about to change before you do it."* — good while learning
- *"That's worse, go back to how it was."* — Claude can revert its own last change
- *"Does this look right on mobile?"*
- *"Which file controls X?"* — builds your mental map over time

**When something breaks:** copy the *entire* red error message and paste it in. Don't summarise — the details are what Claude needs.

---

## Part 3 — Working with Martin

### Who publishes what

Martin owns the repository. You have **write access**, which means you can create branches, push them, open pull requests, and comment.

**The agreed workflow: you propose, Martin merges.**

You build and preview locally → open a pull request → Martin reviews and merges → the site deploys automatically. This isn't about trust; it's that `main` **is** the live company website with no staging environment in between, so a second pair of eyes before anything goes public is simply cheap insurance.

Once you've got a few changes under your belt, ask Martin about merging small things yourself.

### Opening a pull request

1. Commit your work in GitHub Desktop (short description of what you did)
2. Click **Publish branch** — this pushes your branch. **It does not affect the live site.**
3. Click **Create Pull Request** — opens GitHub in your browser
4. Write a couple of sentences: what you changed and why. Screenshots help a lot for visual changes — drag an image straight into the description box
5. Create it, and tell Martin
6. He reviews, comments or approves, and merges

After merging, the deploy runs automatically and the site is live in ~2 minutes.

### Responding to review comments

Martin might request changes. You don't start over — just switch back to that branch locally, make the fixes (Claude Code can help: *"Martin asked for X, can you adjust it?"*), commit, and push again. **The pull request updates itself automatically.**

### Staying in sync

- **Always pull before starting new work.** GitHub Desktop → Fetch origin.
- If Martin merges something while you're mid-branch, GitHub Desktop may warn about conflicts. Don't panic and don't guess — paste the conflict into Claude Code, or ask Martin. Conflicts are routine and always fixable.
- Delete branches after they're merged (GitHub offers a button). Keeps things tidy.

### What to ask whom

| Ask Claude Code | Ask Martin |
|---|---|
| How do I change this? | Should we change this? |
| Why is this broken? | Is this wording on-message? |
| What does this error mean? | Does this claim need legal/scientific review? |
| Which file controls X? | Can I merge this myself? |
| Make it look better | Is this the right priority right now? |

Rule of thumb: **Claude for "how", Martin for "whether".** Anything touching factual claims about the science, partnerships, customers, or numbers should get Martin's eyes before it goes live.

---

## Part 4 — Safety: what you can and cannot break

### The genuinely reassuring part

- **Nothing is permanent.** Every change is tracked and reversible (Part 7).
- **Your computer is a sandbox.** Local edits have zero effect on the live site.
- **There's no database to corrupt.** No user accounts, no customer data, no payments. The worst realistic outcome is a visually odd page for a few minutes.
- **The build is a safety gate.** If you break something structurally, the build fails and the publish is *rejected* — the old site stays up.

### 🟢 Safe to change freely

Text and wording anywhere · colours, fonts, spacing, sizes · images in `public/` and `src/assets/` · articles in `src/data/articles.ts` · FAQ in `src/data/faqs.ts` · team members in `src/components/TeamSection.tsx` · homepage section order in `src/pages/Index.tsx` · anything in `src/components/` outside the `ui/` subfolder

### 🟡 Ask Claude to explain first

| File | Why |
|---|---|
| `src/App.tsx` | The router. Adding a page means editing this **and** the sitemap |
| `src/index.css` | Design tokens. One colour change here shifts the whole site |
| `tailwind.config.ts` | Global design settings |
| `src/components/SEO.tsx` | Search-engine metadata |
| `package.json` | The dependency list |

### 🔴 Do not touch

| File/folder | Why |
|---|---|
| `public/CNAME` and `/CNAME` | Holds `www.scisymbio.ai`. **Delete it and the site falls off the company domain.** The single most damaging small mistake available |
| `src/components/ui/` (49 files) | Generated shadcn/ui components. Hand-editing creates bugs that are painful to trace. Want a different button style? Change where it's *used* |
| `dist/` | Generated output, rebuilt on every publish. Edits are silently discarded |
| `node_modules/` | Downloaded libraries |
| `.github/workflows/deploy.yml` | The publishing pipeline |

### ⚠️ The two non-obvious traps

**1. New pages must be added to the sitemap, or they 404 in production.**

This site is a single-page app on static hosting. A post-build script reads `public/sitemap.xml` and pre-creates a real folder for every listed URL. A page in the router but *not* in the sitemap works perfectly on your laptop and returns **404 for real visitors**.

So: **new page → add it to `public/sitemap.xml` in the same commit.** Tell Claude "add it to the sitemap too" and it will handle it.

**2. There is no staging site.** `main` **is** production. Your local preview is the only preview. That's the whole reason for the pull-request step.

---

## Part 5 — Map of the website

### Where the visible things live

| What you see | File |
|---|---|
| Top navigation bar | `src/components/Navigation.tsx` |
| Big hero + headline | `src/components/HeroSection.tsx` |
| Animated headline effect | `src/components/AnimatedHeadline.tsx` |
| "The problem" narrative | `src/components/ProblemDescriptionSection.tsx` |
| Problem stats/cards | `src/components/ProblemSection.tsx` |
| "Our solution" | `src/components/SolutionSection.tsx` |
| Three-phase vision | `src/components/VisionSection.tsx` |
| Validation / partners | `src/components/ValidationSection.tsx` |
| Team cards (homepage) | `src/components/TeamSection.tsx` |
| Article teaser strip | `src/components/ArticlesTeaser.tsx` |
| FAQ accordion | `src/components/FAQSection.tsx` |
| Contact + Calendly button | `src/components/ContactSection.tsx` |
| Footer | `src/components/Footer.tsx` |
| Animated background | `AmbientMolecularBackground.tsx`, `AuroraGlow.tsx`, `MoleculeOrbit.tsx` |
| Scroll progress bar | `src/components/ScrollProgress.tsx` |
| Counting-up numbers | `src/components/CountUp.tsx` |
| Cursor-following buttons | `src/components/MagneticButton.tsx` |

### Content you edit as data (no design work needed)

| Content | File |
|---|---|
| Articles | `src/data/articles.ts` — title, excerpt, author, date, category, paragraphs, references |
| FAQ | `src/data/faqs.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Calendly link, analytics IDs | `src/config/site.ts` — empty string disables a feature |

### Pages

| Route | File |
|---|---|
| `/` | `src/pages/Index.tsx` — assembles the homepage sections in order |
| `/team` | `src/pages/Team.tsx` |
| `/articles` | `src/pages/Articles.tsx` |
| `/articles/:slug` | `src/pages/ArticleDetail.tsx` |
| `/privacy` | `src/pages/Privacy.tsx` |
| `/security` | `src/pages/Security.tsx` |
| 404 | `src/pages/NotFound.tsx` |

### The design system

All colours live in one place: `src/index.css`, in the `:root` block.

```css
--background: 42 33% 96%;   /* warm cream #FAF7F0 */
--foreground: 20 14% 12%;   /* warm near-black */
--primary:    182 79% 22%;  /* SciSymbio teal #0c6066 */
--accent:     182 79% 22%;  /* same teal — the single accent */
--radius:     0.5rem;       /* corner roundness */
```

Values are HSL **without** the `hsl()` wrapper — a Tailwind convention, not a typo. Change `--accent` and every accent element site-wide updates at once.

**Typography:** Fraunces (serif, display headings, via the `font-display` class) + Inter (sans, body). Loaded from Google Fonts at the top of `index.css`.

The aesthetic is deliberately editorial and warm — cream rather than white, serif headings, a single teal accent. Worth preserving as you refine.

### Images

| Location | Purpose |
|---|---|
| `public/` | Served as-is: favicon, logo, `og-preview.png`, robots.txt, sitemap.xml |
| `public/articles-hero/` | Article header images |
| `public/og/` | Social-media preview cards |
| `src/assets/` | Images imported by components (Vite optimises these) |
| `src/assets/images/` | Team photos and logo variants |

There are optional Python scripts in `scripts/` that generate article artwork via AI image models. They need an API key — ask Martin. Output lands in `scripts/generated-images/` (not committed); you pick the good ones and copy them into `public/articles-hero/`.

---

## Part 6 — Copy-paste recipes

**Change homepage headline**
> "Change the main headline on the homepage hero. The current one feels generic. Give me three alternatives that emphasise reproducibility, then apply the one I pick."

**Add a team member**
> "Add a new team member: [Name], [Role], bio: [text]. Photo at [path]. Add them to both the homepage team section and the /team page, matching the existing style."

**Write a new article**
> "Add a new article to src/data/articles.ts. Title: [X]. Category: [Industry/Technology]. I'll give you the body text next. Follow the exact structure of the existing articles including references, generate a URL-friendly slug, and add the new article URL to public/sitemap.xml so it doesn't 404 in production."

**Adjust colours**
> "The teal accent feels a bit cold. Show me three warmer variants as HSL values for the --accent token in src/index.css, describe how each would feel, and apply the one I choose."

**Add a new page**
> "Create a new page at /pricing. Match the visual style of the existing pages, reuse Navigation and Footer, add the route to App.tsx above the catch-all, and add the URL to public/sitemap.xml."

**Mobile check**
> "Go through the homepage section by section and tell me which parts don't work well on a narrow phone screen. Then fix them."

**General polish**
> "Look at the homepage as a whole and suggest five specific improvements to spacing, hierarchy and rhythm — in the existing editorial style, not a redesign. List them first, then let me pick."

**Understand before changing**
> "Explain how the articles system works end to end — where content lives, how a URL maps to an article, and what I'd need to touch to add one."

**Prepare a pull request**
> "Summarise everything I changed on this branch in two or three plain sentences I can paste into a pull request description for Martin."

---

## Part 7 — Undo: getting out of trouble

Gentlest to strongest. In most cases just tell Claude Code what's wrong — but it's worth knowing these exist.

**"Claude just made it worse"**
> "Undo your last change, revert to how it was before."

**"I've made a mess of uncommitted edits"**
GitHub Desktop → right-click the file → **Discard changes**. Back to your last commit.

**"My last commit was a mistake"**
GitHub Desktop → History → right-click the commit → **Revert changes**. Creates a new commit undoing it. Safe and traceable.

**"Something I merged broke the live site"**
1. Tell Martin.
2. GitHub Desktop → History → revert the offending commit → push. Restored in ~2 minutes.

**"The preview won't start / weird errors after pulling"**
Usually stale dependencies:
```bash
rm -rf node_modules
npm install
npm run dev
```

**"I don't understand what state anything is in"**
```bash
git status
```
Paste the output into Claude Code. Always safe — it only reports, never changes.

**The nuclear option:** delete the project folder and clone fresh. Anything pushed to GitHub is safe; you'd only lose uncommitted local work.

### Existing branches worth knowing about

`backup-current-main` is a snapshot on GitHub. Three earlier design explorations are preserved as `redesign/v2-minimalism`, `redesign/v3-editorial` (the current live direction) and `redesign/v4-futuristic` — worth browsing for inspiration before a big visual change.

---

## Part 8 — Growing beyond the website

The website is your training ground. Once you're comfortable, the same skills apply to the rest of the company's codebases — and Martin has spent months building up a Claude Code setup that makes that work faster and safer. This section is the on-ramp.

### Why you're not getting all of it on day one

Martin's setup includes a couple of dozen custom commands, automated safety hooks, knowledge-graph indexes, and multi-agent review workflows. Handing you all of it now would be counterproductive: most of it is specific to codebases and hardware you don't touch yet, and the sheer volume would bury the handful of things that would genuinely help you this month.

So it comes in stages. Ask Martin when you're ready for the next one.

### Stage 1 — Adopt now: the safety net and the principles

**The damage-control hooks.** Martin's setup intercepts every command Claude tries to run and blocks the destructive ones — recursive deletes, force-pushes, reading credential files, touching system directories. It's genuinely effective; it fires regularly. As someone who can't yet read code well enough to catch a bad command before it runs, this is the single most valuable thing to copy across. Ask Martin for the `damage-control` hooks — they're portable and take a few minutes to install.

**The working principles** — these cost nothing to adopt and matter more than any tool:

1. **Verification-first.** Never consider a change done until you've *seen* it work. For website work that means looking at the browser, not reading the code. Before you ask "is this finished?", ask "how would I know?"
2. **Don't over-engineer.** Ask for exactly what you need. Claude will happily build an elaborate solution to a simple problem if you let it. "Do the simplest thing that works" is a legitimate and useful instruction.
3. **Explore before assuming.** If you're unsure how something works, ask Claude to explain it before asking it to change it. Two minutes of reading prevents an hour of confusion.
4. **Small, separate changes.** One idea per branch, one branch per pull request. Bundling five unrelated changes makes review hard and makes reverting a single mistake painful.
5. **Plan the non-trivial stuff in writing first.** For anything bigger than a wording tweak, have Claude write out what it intends to do, read it, and only then say go. Martin's team formalises this as "stories" — a written description of the change, reviewed before any code exists. It catches bad ideas when they're still cheap.

### Stage 2 — When you're comfortable: web-relevant tooling

Three of Martin's custom commands are directly useful for website work:

| Command | What it does | Why you'd want it |
|---|---|---|
| `/playwright-ui-test` | Drives the site in a real browser and records a video of the run | Watch what actually happens when someone clicks through your changes, instead of guessing |
| `/gemini-vision` | Analyses images, screenshots and video | Paste a screenshot of a section and ask for design critique — genuinely useful second opinion on layout and hierarchy |
| `/feature-workflow` | Turns a rough idea into a structured written plan before any code | Good discipline for anything larger than a tweak |

### Stage 3 — Later: the heavy machinery

Multi-model story review (proposals critiqued by several AI models before implementation), codebase knowledge graphs for navigating large repos structurally, and multi-agent orchestration for big parallel tasks. Powerful, but they only earn their complexity on large codebases. The marketing site is roughly forty files — you don't need them yet.

### ⚠️ Commands you must not run

Some of Martin's setup talks to physical hardware and confidential data. If you end up with his full skill set, leave these alone:

| Command | Why |
|---|---|
| `/hw-test`, `/glasses-e2e` | Send jobs to real Rokid glasses and a phone physically on Martin's desk, coordinated by a shared lock. Running these from your machine will at best fail confusingly, at worst disrupt a test he's mid-way through |
| `/tsa`, `/ask-interviews` | Operate on confidential founder-interview data and its transcription pipeline |
| `/agentic-loop` | Needs a local engine and connected Android devices; single-tenant, so two people running it collide |

### Write your own CLAUDE.md as you learn

You've already seen `CLAUDE.md` in this project — the file Claude reads automatically each session. You can create one anywhere. As you discover things that trip you up repeatedly, add them:

> "Add a note to CLAUDE.md that we always use npm here, never bun — I keep forgetting."

Over time this becomes your accumulated knowledge, and Claude stops making the same mistakes. **You don't need permission to edit it** — it's a working document, and improving it is one of the highest-leverage habits you can build.

One caution: keep it lean. Everything in `CLAUDE.md` is re-read on every single session, so it should hold rules and facts Claude needs *every time* — not long explanations. Long-form material belongs in a separate file like this one, which you point Claude at when it's relevant.

### One thing to never do

**Never put API keys, passwords or tokens in a file you commit.** Martin's personal settings file contains live credentials, which is exactly why you're getting a curated copy of his setup rather than the whole thing. If you're ever unsure whether something is safe to commit, ask before pushing — it's far easier than removing a leaked secret from git history afterwards.

---

## Part 9 — Glossary

| Term | Meaning |
|---|---|
| **Repository / repo** | The project folder, with its full history |
| **Clone** | Download a copy of the repo to your computer |
| **Branch** | A parallel sandbox for changes. `main` is the live one |
| **Commit** | A saved snapshot with a description. Reversible |
| **Push** | Upload your commits to GitHub |
| **Pull / Fetch** | Download others' commits — do this before starting work |
| **Pull Request (PR)** | Proposing changes for review before they go into `main` |
| **Merge** | Folding a branch's changes into another branch |
| **Conflict** | Two people changed the same lines; needs a human decision |
| **Diff** | The line-by-line view of what changed |
| **Build** | Converting source files into the final website |
| **Deploy** | Publishing the built site so the public can see it |
| **Dependency** | An external library the project uses |
| **Component** | A reusable page block (a button, a section, a card) |
| **Route** | A URL path like `/team` |
| **Slug** | The URL-friendly part of an article address |
| **localhost:8080** | The preview running on your own machine |
| **Hot reload** | The browser auto-updating when you save a file |

---

## Quick reference card

```bash
cd ~/Documents/GitHub/sci-symbio-vision   # go to project
npm install        # after pulling changes that touch package.json
npm run dev        # start preview → http://localhost:8080
npm run build      # test that a real publish would succeed
claude             # start Claude Code here
git status         # what's changed? (read-only, always safe)
```

**Golden rules**

1. Pull before you start.
2. Always work on a branch, never straight on `main`.
3. Run `npm run build` before opening a pull request.
4. New page → add it to `public/sitemap.xml`, or it 404s for real visitors.
5. Never delete `CNAME`.
6. When stuck, paste the *whole* error into Claude Code.
7. Claude for "how", Martin for "whether".

---

*Questions this file doesn't answer: ask Claude Code first — it can read the entire codebase and usually knows. Business and content decisions go to Martin.*
