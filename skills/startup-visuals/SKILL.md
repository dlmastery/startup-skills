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
4. **`images/<ID>_<slug>.png`** — when a text-to-image tool is available in the session (an image-generation MCP tool, Grok Imagine pipeline, Gemini image API, etc.), render each `P<ID>` prompt and save to this path. Verification is **two-stage, and both stages are mandatory**:
   - **Stage 1 — the file exists.** `ls` shows nonzero size (> 10KB) and the header bytes match the format (`89504e47` for PNG). Never trust "the image has been generated" prose.
   - **Stage 2 — the file is *this* visual.** **Open it and look at it.** A file of the right size in the right place can still be the wrong picture: an image scraped from the tool's gallery, history feed, or another session's output. Confirm the headline text matches `P<ID>`'s TITLE line before the row is marked `rendered`. A raster that passes stage 1 and fails stage 2 is worse than a missing one, because the audit will never catch it again.
   - Generation claimed but file absent → retry **at most twice**, then mark `pending-image` and move on (the HTML version already covers the content). Never block the pack on a raster.
5. **Reconcile `visual_manifest.md` statuses to the glob at the end of every session** — including an interrupted one. Statuses are written from `ls`, never from memory. A manifest whose rows all read `pending` while rendered files sit on disk is a silent lie that makes the work invisible to the audit, the README and the reader.

## Rendering through a browser-driven image tool

When the renderer is a web app (Grok Imagine, etc.) driven by browser automation, the generation is the easy half; **getting bytes to disk is the hard half.** Establish the transfer path on ONE image before generating a batch.

- **Provenance first.** Never save an image URL scraped out of the page without confirming it belongs to *your* generation. Gallery, "Discover" and history feeds sit in the same DOM and the same CDN path as your output. Match on the generation you submitted, then look at the picture.
- **Known-blocked transfer routes** (verified, don't re-derive):
  - `curl` on the asset URL → **403**; generated assets are session-gated behind an HttpOnly cookie the shell doesn't have.
  - Page-initiated download (`<a download>` + blob) → silently suppressed in the extension's context; nothing reaches the Downloads folder.
  - `fetch` to `http://127.0.0.1` → blocked by the host page's **CSP `connect-src`**, which will not list localhost.
  - `ws://127.0.0.1` → may be *allowed by CSP* yet still blocked by Chrome's **Private Network Access**, which gates public HTTPS pages reaching loopback and has no header opt-in for WebSockets.
- **Routes that do work:** a screenshot tool that writes to disk (capture the image at native size, then crop and convert with `sharp`/ffmpeg); the human downloading manually while the agent handles naming, conversion and manifest reconciliation; or a genuine image-generation API called from the shell, which avoids the browser entirely and is always the first choice when available.
- **Check the prompt actually landed.** Long prompts contain newlines that submit the form early. Set the value with a native setter plus an `input` event (or `execCommand('insertText')` for contenteditable) and assert the character count matches before submitting.

**Verification artifacts to expect when checking your own work in a browser** — these look like bugs and are not:
- A **backgrounded tab does not paint**: screenshots come back black and `loading="lazy"` images never load. Confirm with `document.hidden` before concluding the page is broken.
- A **stale cache** serves the previous deploy. Hard-reload with a cache-busting query before reading the DOM, or you will verify the version you just replaced.

## Shared style block (prepend to every image prompt — the visual language of the pack)

"Extremely information-dense professional infographic, white background, elite systems-architect and domain-expert quality, clean modern typography with clear hierarchy, one bold headline takeaway, 3–5 labeled information zones with real data, consistent accent palette, refined iconography, print-grade, no watermark, no lorem ipsum" — plus this run's declared palette and orientation.

## Quality bar

- Every number on a visual exists in a pack artifact; visuals cite their source file.
- Dense ≠ cluttered: one headline takeaway per visual, visible in 3 seconds; depth rewards the next 30.
- Consistent visual language across the whole set (one palette, one type scale — declare them in the manifest header).

## Red flags

- A visual whose numbers appear nowhere in the pack. Decorative charts (shapes without data). Depending on an image model for anything the audit must verify. Skipping the manifest and generating ad hoc.
- **Marking a row `rendered` without opening the image.** Size is not identity — the commonest failure is saving a picture that is real, valid, and not yours.
- Leaving every manifest row `pending` while files exist on disk. Generating a batch before the byte-transfer path has been proven end to end on one image. Reporting a browser page "broken" without first checking `document.hidden` or busting the cache.
