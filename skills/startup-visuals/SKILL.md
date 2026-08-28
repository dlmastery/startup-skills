---
name: startup-visuals
description: Use when a startup run needs its visual layer — infographics, diagrams, UX collages, pitch visuals — or when the user asks for "infographics", "dense visuals", "UX screens collage", "diagrams for the deck". Requires the text artifacts it visualizes (product/, tech/, strategy/, narrative/) — run those first.
---

# startup-visuals

Generate every visual as **verifiable text first** — self-contained HTML infographics and Mermaid diagrams that render deterministically — then, when a text-to-image capability exists in the runtime, render the stunning raster versions from those specs. The verification rule that makes this safe: a raster image counts as generated **only when its file exists on disk with nonzero size** — never trust "the image has been generated" prose. This is what kills the "I don't see it → regenerate" loop that can burn 50 exchanges.

## Process

1. Build `visual_manifest.md` first — the complete list of visuals this pack needs, grouped **by audience**: users, operators/team, investors, buyers/partners. Derive it from what exists: every deck slide's `visual:` line, the architecture diagrams, the feature collages, the Blank boards, plus the audience-specific set below. Rank within each audience; mark each row `required` or `optional`.
2. Generate `required` rows one at a time; check each renders before moving on (that's startup-audit's grep target too).

## Standard visual set (adapt nouns; drop rows only with a reason in the manifest)

- **System map** — the full architecture on one canvas (from `tech/architecture/`).
- **Core-loop closed circuit** — sense→decide→act→measure→remember with latencies.
- **User-spectrum coverage** — one system serving edge-low → beachhead → edge-high.
- **Journey maps** — one per `product/journeys/` scenario, horizontal timeline with system actions beneath user moments.
- **Feature roadmap** — Now/Next/Later from `features_prioritized.md` with dependencies.
- **Technique decision tree** — from `tech/techniques/decision_tree.md`.
- **Technique×feature matrix heat table**.
- **Competitive positioning map** — the two discovered axes, competitors placed, white space highlighted.
- **TAM/SAM/SOM bottom-up build** — bar/funnel showing the arithmetic, not nested circles.
- **10x mechanism breakdown** — friction→mechanism→multiplier chain from the whitepaper.
- **Unit-economics engine** — CAC→payback→LTV→margin flow with the compute-cost line visible.
- **Risk matrix grid** and **use-of-funds milestone map**.
- **UX collages** — 4-up screen mockups per collage, built as HTML/CSS in realistic product chrome.

## Writes → `runs/<slug>/visuals/`

1. **`visual_manifest.md`** — the ranked table: ID · Title · Audience · Source artifact · Form (html/mermaid/image-prompt) · Status.
2. **`infographics/<ID>_<slug>.html`** — one self-contained file per visual: inline CSS, no external assets, white background, print-clean A4/16:9, dense but hierarchical (headline takeaway → 3–5 information zones → source line citing `[Sn]` tags). Real data from pack artifacts only.
3. **`image_prompts.md`** — one production-grade text-to-image prompt per manifest visual, numbered `P<ID>`, each fully self-contained: subject and every data point/label to embed (pulled verbatim from the source artifact), composition zones, orientation, and the pack's shared style block (see below). These are the same prompts whether a human pastes them into an image tool or step 4 runs them automatically.
4. **`images/<ID>_<slug>.png`** — when a text-to-image tool is available in the session (an image-generation MCP tool, Grok Imagine pipeline, Gemini image API, etc.), render each `P<ID>` prompt and save to this path. Verify by `ls`: file exists and > 10KB → mark manifest row `rendered`; generation claimed but file absent → retry **at most twice**, then mark `pending-image` and move on (the HTML version already covers the content). Never block the pack on a raster.

## Shared style block (prepend to every image prompt — the visual language of the pack)

"Extremely information-dense professional infographic, white background, elite systems-architect and domain-expert quality, clean modern typography with clear hierarchy, one bold headline takeaway, 3–5 labeled information zones with real data, consistent accent palette, refined iconography, print-grade, no watermark, no lorem ipsum" — plus this run's declared palette and orientation.

## Quality bar

- Every number on a visual exists in a pack artifact; visuals cite their source file.
- Dense ≠ cluttered: one headline takeaway per visual, visible in 3 seconds; depth rewards the next 30.
- Consistent visual language across the whole set (one palette, one type scale — declare them in the manifest header).

## Red flags

- A visual whose numbers appear nowhere in the pack. Decorative charts (shapes without data). Depending on an image model for anything the audit must verify. Skipping the manifest and generating ad hoc.
