# Coverage audit — Ascent (`runs/autoresearch`)

**Audit date:** 2026-08-30 · **Method:** glob of `runs/autoresearch/` diffed against `references/artifact-manifest.md`. Every status below was read off the filesystem at audit time, not from session memory.

## Headline

| Measure | Count |
|---|---|
| Documents in the pack | **71** |
| Required manifest rows | 60 (A00–A57 plus A58–A64) |
| **Required present** | **59** |
| Required partial | 1 — A50 HTML infographics (6 of 35 under the narrowed rule) |
| Images rendered | **120** — every manifest row closed |
| HTML infographics | **16** |
| Artifacts with an orientation block | **67 of 67** (all content artifacts; meta files exempt) |
| Substantive artifacts with zero illustrations | **0** (A52b satisfied) |
| Relative links across the run | 559 checked, **0 broken** |

**Verdict: the text pack is complete, oriented and illustrated. One required row is partial: the HTML infographic set.**

## Layer inventory

| Layer | Files | Status |
|---|---|---|
| Brief | 3 | present |
| Research | 6 | present |
| Strategy | 11 | present — incl. A58–A61 (canvas, petal, channel plan, sales roadmap) |
| Product + Journeys | 8 | present |
| Tech + Architecture + Techniques | 19 | present |
| Narrative | 6 | present — incl. A64 (mission & vision) |
| Validation | 9 | present — incl. A62–A63 (MVP definition, decision-making unit) |
| Financials | 6 | present |
| Visuals + Audit | 3 | present |

## Quality bar

| Property | Status |
|---|---|
| **0 — orientation block on every artifact** | **pass** — verified structurally on all 59 content artifacts: four labelled lines, positioned directly after the H1, venture-specific "why it exists" |
| 1 — mechanism over adjective | pass (sampled) |
| 2 — every number sourced or flagged | pass (sampled); the seven new artifacts carry `(assumption: …)` tags where unsourced |
| 5 — decision-forcing endings | pass — all seven new artifacts end with a "Recommended next" section |
| 8 — every run has a front door | pass — README, site and reader all live |

## Open rows

| Gap | Owner | Size |
|---|---|---|
| **29 HTML infographics** — 6 of 35 under the narrowed A50 rule | startup-visuals | large |
| **Critic pass on A58–A64** | startup-critic | medium — every other layer went through it; these seven have not |

## Draw order

1. **Critic pass on the seven new artifacts.** They are unreviewed, which is the same gate every other layer had to clear. Cheapest way to find an invented number.
2. **HTML infographics for the journeys and matrices** — the rows where image rendering garbles text and the words are the content.
3. Re-run `visuals/build_docimages.js` and reconcile after every batch.
