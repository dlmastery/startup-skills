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

## Structure — a site, not one long scroll

A single page carrying hero, problem, mechanism, product tour, evidence, pricing, team and CTA is a **deck rendered as a webpage**. It reads as generated: no information hierarchy beyond vertical order, no page a visitor can be sent to, nothing to bookmark, and one enormous scroll where a real company has a navigable structure. Look at how funded startups actually ship — Home, Product, Pricing, Docs, About, each page doing one job.

**Build the standard set as separate pages:**

| Page | Its one job |
|---|---|
| `index.html` | The claim, the proof strip, the three pillars in brief, one image. It should be **short** — it exists to route, not to say everything. |
| `product.html` | How the mechanism works and what the user actually sees. |
| `evidence.html` | Results, framed honestly, plus the explicit list of what is not claimed. |
| `pricing.html` | Tiers and the economics that make them hold. |
| `about.html` | Founder-market fit, mission, why now. |
| `pack.html` | The document reader. |

**Mechanics that keep it a site rather than five drifting files:**

- **One shared stylesheet** (`site.css`) linked by every page. Never paste the token block into each file — they diverge within one edit.
- **Generate the pages from one shell** (`build_site.js`) holding head, nav and footer, with per-page content as data. Nav, meta tags and footer then cannot fall out of sync, and adding a page is one entry.
- **Nav carries an active state** for the current page, so a visitor always knows where they are.
- **Every interior page ends with a "keep reading" rail** — two or three cards pointing at the next relevant page, including a deep link into the reader. This is what makes a set of pages feel navigable rather than orphaned.
- Cross-link *into the pack reader* by hash (`pack.html#financials/unit_economics.md`) wherever a page summarises something the pack argues in full.
- Verify by walking every `href`/`src` in every generated page and asserting the target exists. Template literals inside embedded scripts will look like broken links — exclude the reader's own JS from that check rather than "fixing" it.

## Hero imagery — the site needs art, not more charts

A landing page built only from data infographics reads as a report, not a company. Commission a small set of **4–6 hero visuals** stored in `visuals/hero/`, separate from the manifest's data rows, and use them as full-bleed bands between sections.

**Make them text-free. This is the highest-leverage rule in the whole visual pipeline.** Every image failure mode — clipping, letter garbling, label mis-binding — is a *text-rendering* failure. A wordless image cannot exhibit any of them, so hero art is both the most beautiful and the most reliable category available. State it forcefully in the prompt: *no letters, no words, no numbers, no labels, no watermark, no UI chrome with readable type.*

- Derive each image from the product's own mechanism, not from stock-photo abstraction: the monotonic ascent, the ledger of kept-and-discarded trials, the gates that clarify what passes, the purged splits that never touch. Someone who knows the product should recognise the idea.
- Ask for one register and hold it — editorial minimalism, precise geometry, generous negative space, controlled palette drawn from the site tokens.
- **Normalise the ground after generation.** Image models drift to cream even when asked for white, which clashes badly against a white page. Sample the corner pixel and map it to neutral with a levels pass (`ffmpeg -vf colorlevels=rimax=<r/255>:gimax=<g/255>:bimax=<b/255>`) rather than regenerating. Deterministic, instant, and it preserves the art.
- Mid-tone or dark atmospheric pieces are fine as *bands* inside a light page — a dark section is a rhythm device, not a dark theme.

## Aesthetic direction — earn it, don't default to it

The default "AI-generated site" look is a warm cream ground, a high-contrast serif display face and a terracotta accent. It is pleasant and it is instantly recognisable as untailored. For a technical product aimed at skeptical practitioners it reads as an editorial blog rather than a shipped company.

For deep-tech and developer products the credible register is **near-monochrome with one confident accent**: white and a single cool surface tone, near-black ink, tight negative letter-spacing on large display type, one accent colour used sparingly for emphasis and interactive states, hairline borders instead of heavy shadows, and monospace reserved for every number. Restraint reads as confidence; decoration reads as compensation. Pick the direction from the subject, state it, and hold it across the landing page, the reader and the artwork.

## Copy structure — the Minto Pyramid Principle (binding)

Landing-page copy defaults to generic persuasion unless a structure forbids it. Write every run's site to the **Minto Pyramid**, which is built for persuading a skeptical executive and happens to match this pack's own claim → mechanism → evidence spine:

1. **Lead with the conclusion.** The hero states the primary claim outright, in the first sentence, before any supporting material. Borrow the BLUF discipline here: the bottom line lands in sentence one, active voice, no throat-clearing.
2. **Exactly three supporting categories, mutually exclusive and collectively exhaustive.** Not four, not seven feature cards. Name the three things that must all be true for the business to work — typically *the gap is real*, *the mechanism works and is measured*, *the economics hold*. State them as claims a reader could disprove.
3. **2–3 concrete proofs per category.** Each proof is a number with its source tag, or a named mechanism. No adjective is allowed to carry an argument: the quality bar's "mechanism over adjective" rule applies to marketing copy exactly as it applies to artifacts.
4. **Strict top-down flow.** Conclusion → three arguments → supporting sections. Label the detail sections by which pillar they support ("Support for 2 — the mechanism") so the structure is visible rather than implied.
5. **Name the falsifier.** Directly under the three pillars, state the single assumption that would sink all of them, and what test settles it. On an evidence-led pack this converts better than another benefit card, and it is the honest thing to publish.

Banned in site copy, as in every artifact: "revolutionary", "seamless", "powerful", "supercharge", "game-changing", and any claim whose only support is an adjective.

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
3. **Render markdown client-side** with a pinned CDN library (`marked`), styled with the site's own tokens — the serif for headings, mono for tables and every number, generous measure (~74ch), styled tables with sticky headers and zebra rows, and horizontal scroll containers so wide tables never break the page.
4. **Render Mermaid as diagrams, not code.** Architecture docs ship ```mermaid fences; initialize `mermaid` with a theme built from the site tokens and render each fence. A pack whose diagrams show as raw text has failed this step — those diagrams are the tech layer's whole argument.
5. **Preserve the honesty signatures in the reader's CSS:** source tags (`[A1]`, `[D5]`) and `(assumption)` flags get the same chip treatment as the landing page; `[ROADMAP]` renders in amber wherever it appears.
6. **Link it prominently** — top nav plus the landing page's primary CTA. "Read the full pack" must land in the reader, not a directory listing.

### The reader must present documents, not just style them

Rendered markdown with correct fonts is still a wall of text. A reader that returns 4,000 words in one undifferentiated column has failed, however good its typography. Every one of these is required:

- **White reading ground, always.** Set `<meta name="color-scheme" content="light">` and do **not** ship a dark-mode block — **on any page of the run site, landing pages and run index included, not just the reader.** Long-form documents full of tables are read in light, and a page that inherits the viewer's OS dark theme is the single most common complaint. Fixing only the reader and leaving the landing page dark is the classic half-fix: grep the whole site for `prefers-color-scheme` before claiming it is done. The sidebar may carry the warm chrome tone; the reading column is white.
- **Handle every link the markdown itself contains.** Rendered artifacts are full of relative links, and left alone they destroy the reader: a link to a `.png` navigates the whole app to a bare image, and a link to another `.md` loads raw markdown over the top of the reader. Rewrite them after render, resolving `..` against the current document's directory:
  - link to another artifact (`*.md`) → rewrite to the reader's own hash route so the reader survives;
  - link to an image, PDF or any other asset → correct the path for the document's depth and open it in a **new tab** (`target="_blank" rel="noopener"`);
  - external `http(s)`/`mailto` → new tab.
  Give the two kinds different affordances (a cross-reference underline, an `↗` on assets) so a reader knows which links leave the page. Markdown-authored `<img>` tags need the same depth correction as generated figures.
- **Put the visuals in the documents.** Build `visuals/docimages.json` by parsing the visual manifest's source column for the artifacts each rendered image cites, then invert it. Lead each document with its first image and close with the rest under "Visuals generated from this document." A pack that rendered images and shows none while reading has wasted them.
- **Resolve every path against the reader, not the document.** The reader is one page at the run root displaying many documents; relative URLs resolve against **`pack.html`'s** location, not the location of the markdown it happens to be showing. So a document's own relative links must be resolved to a run-root-relative path and then used **with no depth prefix at all**. Adding `../` per document depth looks obviously right and is wrong — it silently 404s every image on every nested document while the root-level ones keep working, which is exactly the pattern that hides the bug from a spot check. Verify by loading a document **two levels deep** (`tech/architecture/D02.md`) and asserting `img.naturalWidth > 0`, not merely that the element exists.
- **Lift the H1 into a document header** with its layer eyebrow and path, and set the opening paragraph as a lede at ~20px. The reader should look composed before a single word is read.
- **Auto-number `h2` sections** with a monospace chip, and add a sticky "On this page" rail built from them for any document with more than one section.
- **Promote bold-label paragraphs to callouts.** A paragraph opening `<strong>Caveat:</strong>` is a callout in disguise — give it a left accent bar and a monospace uppercase label, in amber when the label matches caveat/warn/risk/scope/limit/honest. This alone breaks up most of the wall, because these packs are written that way throughout.
- **Space long lists.** A `ul` with 4+ substantive items gets row separators instead of dense bullets.
- **Show an image count** beside each sidebar entry so a reader can find the illustrated documents.

Verify by loading the published page and confirming: a document renders, tables are styled, a Mermaid diagram draws, images appear inline, callouts and section numbers are present, and a deep link opens the right file.

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
6. **Record the live URL in all three places it belongs**, then verify each loads (200, not 404) — Pages takes ~1 minute on first build:
   - the run's `README.md` status block, alongside a direct link to the pack reader;
   - `audit/COVERAGE.md` row A57;
   - **the repository's own root `README.md`**, near the top, as a "see it live" block.

   The third is the one that gets forgotten, and it is the one that matters most: the repo root README is where every visitor actually lands. A published site nobody is pointed at is the same front-door failure as an unindexed run, one level up. Link the landing page *and* the reader — they answer different questions ("what is this?" vs "show me the work").

Fallback when the repo has no GitHub remote: keep the site at `runs/<slug>/index.html` and tell the user the one command that would publish it.

## Quality bar

- A visitor should be able to answer "what is this, for whom, why believe it" in 10 seconds — the hero carries the positioning statement's payload in plain words.
- Zero fabricated social proof: no fake testimonials, fake logos, or fake metrics. Pre-launch honesty converts better than invented traction and is non-negotiable.
- Copy sounds like the founder's voice (founder_story), not SaaS-template speak ("Supercharge your workflow" is banned).

## Red flags

- Claims on the site that appear in no pack artifact. Fake testimonial cards "to fill space". Shipping without a local render check. A hero that names the category but not the mechanism.
