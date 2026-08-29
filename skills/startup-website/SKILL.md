---
name: startup-website
description: Use when a startup run's pack is complete (or nearly) and the user wants the public-facing website — trigger on "build the website", "landing page", "launch site", or as the final ship phase of startup-forge after the audit passes. Requires narrative/, strategy/, and product/ artifacts to draw copy from.
---

# startup-website

Turn the pack into a deployable marketing site. Iron rule: **the site arranges the pack, it does not invent** — every headline, stat, and feature claim on the site must exist in a pack artifact. The pack is the copy deck.

## Source mapping (where each section's content comes from)

| Section | Source |
|---|---|
| Hero headline + subhead | `strategy/positioning.md` statement + `narrative/one_pager.md` one-line |
| Problem ("the world today") | whitepaper §1 frictions, sharpest sourced stat |
| Solution + how it works | core loop from PRD; 3-step mechanism, not feature soup |
| Feature showcase | top 6–9 of `features_flagship.md`, with their "visible product moment" lines |
| Who it's for | persona cards spanning the spectrum (edge-low, beachhead, edge-high) |
| Why now / why us | `narrative/founder_story.md` + why-now from BRIEF |
| Social proof scaffold | placeholders wired for real quotes; pre-launch: the future-press vision line, clearly framed as vision |
| Pricing | `financials/pricing.md` tiers (or "early access" if pre-pricing) |
| CTA | waitlist/early-access form (provision a real backend when integrations are available; else a mailto/form-service stub with a TODO) |
| Footer | contact, privacy stance from PRD's compliance section |

## Design system (binding — the pack's house look)

Load the frontend-design skill for judgment, then apply these tokens. They are Claude-inspired: a warm ivory ground, clay accent, and a transitional serif — deliberately paired with the pack's own indigo/teal data palette so rendered infographics sit on the page natively instead of fighting it.

```css
:root{
  --paper:#F0EEE6;        /* warm ivory ground */
  --paper-raised:#FAF9F5; /* cards, raised surfaces */
  --ink:#1F1E1D;          /* primary text */
  --ink-soft:#605A57;     /* secondary text */
  --rule:#DEDBD2;         /* hairlines, borders */
  --clay:#D97757;         /* the accent: links, CTAs, one thing per screen */
  --indigo:#312E81;       /* data ink — matches visuals/ */
  --teal:#0D9488;         /* data accent — matches visuals/ */
  --amber:#B45309;        /* caveats and [ROADMAP] flags only */
}
```

- **Display:** a warm transitional serif (Newsreader, Copernicus-class) for headlines only, used with restraint.
- **Body:** a neutral grotesque (Inter, Styrene-class) at generous line-height.
- **Data:** monospace (JetBrains Mono) for **every number, hash, threshold and identifier** — the same rule that binds the pack's visuals. Numbers never render in the body face.
- Load webfonts from a CDN with a real fallback stack; never let the page render in a default serif while fonts fetch.
- Dark-mode aware where the ground inverts to `#1F1E1D` / ink `#F0EEE6`; the clay accent holds in both.

**The signature device:** every number on the site carries its **source tag inline** as a small monospace chip (`[A1]`, `[D5]`, `(assumption)`), exactly as the artifacts do. The site performs the product's own thesis — showing the evidence — rather than describing it. This is the one memorable element; keep everything around it quiet.

## Process

1. Read the sources above; extract the copy verbatim-or-tightened (tightening may cut words, never add claims).
2. Choose stack: default **Next.js App Router** project in `runs/<slug>/website/` when the environment supports it; else a single self-contained `index.html`. Use visuals from `visuals/` (HTML infographics can embed directly; rendered `images/*.png` where they exist).
3. Design with intent — load the frontend-design skill if available. The site's look must express the brand personality implied by the domain (a pediatric-health product and a devtools product do not share an aesthetic). Responsive, fast, dark/light aware, real favicon, OG tags filled from the one-pager.
4. Verify: build/serve locally, check every section renders, every internal anchor works, no lorem ipsum, no unsourced claim. Screenshot for the user when browser tooling is available.
5. **Publish to GitHub Pages and hand back the live URL** (below). A site nobody can open is not a shipped site.

## The pack browser — never link raw `.md` from the site

A landing page that links `research/landscape.md` directly hands the reader unstyled plaintext: with `.nojekyll` set, GitHub Pages serves markdown raw, so the pack's best writing arrives looking like a config file. **The site must never link a `.md` file as a destination.** Every artifact is reached through a reader.

Write **`runs/<slug>/pack.html`** — a self-contained document browser over the whole pack:

1. **Manifest first.** A JS array of `{group, path, title, blurb}` covering every artifact that exists on disk — grouped by layer (Brief, Research, Strategy, Product, Tech, Narrative, Validation, Financials, Visuals, Audit). Generate it from the glob, never by hand.
2. **Sidebar + reader.** Grouped, filterable document list on the left; rendered document on the right. Deep-link by hash (`pack.html#tech/whitepaper.md`) so any artifact is directly shareable, and restore that hash on load.
3. **Render markdown client-side** with a pinned CDN library (`marked`), styled with the site's own tokens — the serif for headings, mono for tables and every number, generous measure (~70ch), styled tables with sticky headers, and horizontal scroll containers so wide tables never break the page.
4. **Render Mermaid as diagrams, not code.** Architecture docs ship ```mermaid fences; initialize `mermaid` with a theme built from the site tokens and render each fence. A pack whose diagrams show as raw text has failed this step — those diagrams are the tech layer's whole argument.
5. **Preserve the honesty signatures in the reader's CSS:** source tags (`[A1]`, `[D5]`) and `(assumption)` flags get the same chip treatment as the landing page; `[ROADMAP]` renders in amber wherever it appears.
6. **Link it prominently** — top nav plus the landing page's primary CTA. "Read the full pack" must land in the reader, not a directory listing.

Verify by loading the published page and confirming: a document renders, its tables are styled, a Mermaid diagram draws, and a deep link opens the right file.

## Publish — the run gets a real, public URL

The deliverable is a link, not a directory. Default to **GitHub Pages served from the repository root on the default branch**, which makes the run's own `visuals/images/*.png` reachable by relative path — no duplicated asset tree, no build step.

1. Write the site as **`runs/<slug>/index.html`**, self-contained, with images referenced relatively (`visuals/images/V01_star-curve.png`). It sits beside the artifacts it summarizes.
2. Add **`.nojekyll`** at the repo root so files are served verbatim (without it, Pages runs Jekyll and can drop or rewrite paths).
3. Add a root **`index.html`** that lists every published run and links to it — otherwise the bare Pages domain 404s.
4. Enable Pages if it isn't already, then record the URL:
   ```bash
   gh api -X POST repos/<owner>/<repo>/pages -f source[branch]=main -f source[path]=/   # 409 = already enabled
   gh api repos/<owner>/<repo>/pages --jq .html_url
   ```
5. **Confirm before enabling.** Turning on Pages publishes the repository's contents at a public URL. Ask first unless the user explicitly requested a public link, and never publish a private run without asking — `runs/*` is gitignored by default for exactly this reason.
6. Record the live URL in the run's `README.md` status block and in `audit/COVERAGE.md` row A57. Verify it loads (200, not 404) before reporting it — Pages takes ~1 minute on first build.

Fallback when the repo has no GitHub remote: keep the site at `runs/<slug>/index.html` and tell the user the one command that would publish it.

## Quality bar

- A visitor should be able to answer "what is this, for whom, why believe it" in 10 seconds — the hero carries the positioning statement's payload in plain words.
- Zero fabricated social proof: no fake testimonials, fake logos, or fake metrics. Pre-launch honesty converts better than invented traction and is non-negotiable.
- Copy sounds like the founder's voice (founder_story), not SaaS-template speak ("Supercharge your workflow" is banned).

## Red flags

- Claims on the site that appear in no pack artifact. Fake testimonial cards "to fill space". Shipping without a local render check. A hero that names the category but not the mechanism.
