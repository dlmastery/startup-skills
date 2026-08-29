# Artifact manifest — the audit checklist

Paths relative to `runs/<slug>/`. `req` = required for a complete pack; `opt` = generate on demand. Stable names — startup-audit globs these exactly.

| ID | Path | Owner skill | Req |
|----|------|-------------|-----|
| A00 | `BRIEF.md` | grill-me | req |
| A01 | `ASSUMPTIONS.md` | grill-me | req |
| A02 | `research/landscape.md` | startup-research | req |
| A03 | `research/competitors.md` | startup-research | req |
| A04 | `research/capability_table.md` | startup-research | req |
| A05 | `research/survey.md` | startup-research | req |
| A06 | `research/sources.md` | startup-research | req |
| A07 | `strategy/market_type.md` | startup-strategy | req |
| A08 | `strategy/positioning.md` | startup-strategy | req |
| A09 | `strategy/market_sizing.md` | startup-strategy | req |
| A10 | `strategy/personas.md` | startup-strategy | req |
| A11 | `strategy/lean_canvas.md` | startup-strategy | req |
| A12 | `strategy/value_prop_canvas.md` | startup-strategy | req |
| A13 | `strategy/gtm.md` | startup-strategy | req |
| A14 | `product/PRD.md` | startup-product | req |
| A15 | `product/features_flagship.md` | startup-product | req |
| A16 | `product/features_prioritized.md` | startup-product | req |
| A17 | `product/journeys/edge_low.md` | startup-product | req |
| A18 | `product/journeys/beachhead.md` | startup-product | req |
| A19 | `product/journeys/edge_high.md` | startup-product | req |
| A20 | `product/journeys/day_in_life.md` | startup-product | req |
| A21 | `product/ux_spec.md` | startup-product | req |
| A22 | `tech/whitepaper.md` | startup-tech | req |
| A23 | `tech/deep_dives.md` | startup-tech | req |
| A24 | `tech/architecture/00_INDEX.md` + `D01.md`…`D10.md` (11 files) | startup-tech | req |
| A25 | `tech/techniques/wave1.md` | startup-tech | req |
| A26 | `tech/techniques/wave2.md` | startup-tech | req |
| A27 | `tech/techniques/wave3.md` | startup-tech | opt |
| A28 | `tech/techniques/decision_tree.md` | startup-tech | req |
| A29 | `tech/techniques/technique_feature_matrix.md` | startup-tech | req |
| A30 | `tech/not_vaporware.md` | startup-tech | req |
| A31 | `narrative/one_pager.md` | startup-narrative | req |
| A32 | `narrative/vc_memo.md` | startup-narrative | req |
| A33 | `narrative/pitch_deck.md` | startup-narrative | req |
| A34 | `narrative/future_press.md` | startup-narrative | req |
| A35 | `narrative/founder_story.md` | startup-narrative | req |
| A36 | `validation/riskiest_assumptions.md` | startup-validation | req |
| A37 | `validation/experiment_board.md` | startup-validation | req |
| A38 | `validation/discovery_guide.md` | startup-validation | req |
| A39 | `validation/get_keep_grow.md` | startup-validation | req |
| A40 | `validation/stage_gate.md` | startup-validation | req |
| A41 | `validation/metrics_by_stage.md` | startup-validation | req |
| A42 | `validation/pivot_log.md` | startup-validation | req |
| A43 | `financials/pricing.md` | startup-financials | req |
| A44 | `financials/revenue_build.md` | startup-financials | req |
| A45 | `financials/unit_economics.md` | startup-financials | req |
| A46 | `financials/use_of_funds.md` | startup-financials | req |
| A47 | `financials/risk_matrix.md` | startup-financials | req |
| A48 | `financials/comps_exits.md` | startup-financials | req |
| A49 | `visuals/visual_manifest.md` | startup-visuals | req |
| A50 | `visuals/infographics/*.html` — every required row **whose content an image cannot carry** (see below) | startup-visuals | req |
| A51 | `visuals/image_prompts.md` | startup-visuals | req |
| A52 | `visuals/images/*.png` — rendered when text2image available | startup-visuals | opt |
| A52b | `visuals/docimages.json` — artifact→visual map; **no substantive artifact over ~400 words left with zero illustrations** | startup-visuals | req |
| A53 | `ingest/SOURCE_<n>.md` — one per ingested source | startup-ingest | opt |
| A54 | `audit/COVERAGE.md` | startup-audit | req |
| A55 | `README.md` — the run's front door (see contract below) | startup-audit | req |
| A58 | `strategy/business_model_canvas.md` — Osterwalder 9 blocks, one hypothesis + test per block | startup-strategy | req |
| A59 | `strategy/petal_diagram.md` — Blank's petal: adjacent markets we draw customers from, not a 2×2 | startup-strategy | req |
| A60 | `strategy/channel_plan.md` — channel map **and channel economics** (discount/margin stack per channel) | startup-strategy | req |
| A61 | `strategy/sales_roadmap.md` — organisation map, influence map, access map, sales process | startup-strategy | req |
| A62 | `validation/mvp_definition.md` — low-fidelity → high-fidelity MVP, and the earlyvangelist definition | startup-validation | req |
| A63 | `validation/decision_making_unit.md` — user / payer / champion / saboteur, and who can veto | startup-validation | req |
| A64 | `narrative/mission_vision.md` — mission, vision, values, and the "why we exist" | startup-narrative | req |
| A56 | `index.html` — the run's public site, self-contained, relative asset paths | startup-website | opt |
| A57 | Live GitHub Pages URL, recorded in `README.md` and verified loading | startup-website | opt |

Stub threshold: a `req` file under ~40 substantive lines, or missing sections its owner skill's contract names, counts as **stub**, not present. A24/A50 count each file individually.

## Coverage against *The Startup Owner's Manual* (Blank & Dorf)

The validation layer follows Blank's four steps, but a pack assembled from the audience sets alone reliably omits deliverables the Customer Development method treats as core. A58–A64 close the gaps found by auditing this manifest against the book:

| Blank deliverable | Where it lives | Note |
|---|---|---|
| Business Model Canvas, 9 blocks, hypothesis per block | **A58** | The Lean Canvas (A11) is Maurya's variant and drops Key Partners, Key Activities and Customer Relationships — the blocks Blank tests explicitly. Keep both. |
| Competitive **petal diagram** | **A59** | Blank's tool is not a 2×2. It asks which *adjacent markets* the company draws customers from, which is a different and harder question than where rivals sit. |
| Channel plan **and channel economics** | **A60** | A GTM narrative usually names channels and omits the discount/margin stack, so channel viability is asserted rather than computed. |
| Sales roadmap: organisation, influence and access maps | **A61** | Blank's Customer Validation Phase 1. Without it "we'll sell to funds" hides the fact that nobody has mapped who signs. |
| MVP definition, low- then high-fidelity, plus earlyvangelist | **A62** | Distinguishes the artifact that tests the problem from the one that tests the solution. A PRD is neither. |
| Decision-making unit: user / payer / champion / saboteur | **A63** | Personas cover who benefits; the DMU covers **who can veto**, which is what actually stalls enterprise deals. |
| Mission, vision, values, the "why" | **A64** | Distinct from positioning: positioning is against competitors, mission is independent of them. |

Already covered, do not duplicate: market type (A07), TAM/SAM/SOM (A09), customer archetypes (A10), value proposition (A12), get/keep/grow (A39), stage-gate and pivot-or-proceed (A40, A42), metrics by stage (A41), discovery scripts (A38), day-in-the-life (A20).

## A50 — which rows need an HTML version

The original wording ("every required row") mandated an HTML file for all 78 required visuals, duplicating 78 images. That is the wrong obligation, and the reason is empirical rather than aesthetic: **image models render pictures well and text badly.** A row gets an HTML infographic when its content is text a reader must be able to read *exactly*, because that is precisely what garbles.

**Needs HTML** — the words are the content:
- tables and matrices with many cells (technique×feature heat tables, risk matrices, comps corridors);
- journeys, collages and card walls carrying prose per panel;
- posters enumerating many named items (technique waves, decision trees, teardowns, boards);
- anything whose numbers must be transcribable — a reader who cannot copy the figure cannot check it.

**Does not need HTML** — the picture is the content:
- chart-shaped rows (curves, funnels, quadrants, timelines, ladders, gantts);
- schematic dossier illustrations, which are deliberately label-only already;
- **rows whose source artifact already ships a Mermaid diagram** — the reader renders those live, so an HTML poster duplicates them. Cite the source document instead.

Record the classification per row in the manifest's Form column so the audit can check it mechanically, and state the resulting target count in the manifest header. A row that fails its image render for text reasons is automatically reclassified as needing HTML.

## A55 — the run README contract

A pack of sixty files with no front door reads as an empty directory. `runs/<slug>/README.md` is the one artifact a human opens first, so it is `req` and it is written from the glob, never from memory. It must carry all eight sections:

1. **Title + one-paragraph pitch** — what this venture is, in the founder's own framing, from `BRIEF.md`.
2. **Status line** — generation date, run slug, and the honest completion state: `X/Y required artifacts · Z/N visuals rendered`. Never round up, never write "complete" while `audit/COVERAGE.md` lists open rows.
3. **Start here** — the three-file 60-second path (typically one-pager → pitch deck → whitepaper), each as a working relative link.
4. **Reading paths by audience** — investor, engineer, operator, practitioner. Each an ordered list of relative links with a clause on why that file is next.
5. **Full artifact map** — every directory as a table: path · what it holds · file count · owning skill. Counts come from the glob.
6. **Visual index** — every rendered image and HTML infographic as a relative link with its headline takeaway. **Images are embedded inline** (`![...](visuals/images/<ID>_<slug>.png)`) for at least the deck set, so the pack's best work is visible without opening a single subdirectory.
7. **Top 5 sharpest claims** — each with its source tag, so a skeptic can start where it hurts.
8. **Completeness** — one short paragraph stating the run's honest state (`COMPLETE` / `PARTIAL`, and which layer is short), linking to `audit/COVERAGE.md`. Do **not** reproduce the gap table or draw order here: a front door states the state of the work, it does not carry the task list. Completeness is tracked in COVERAGE.md, where a reader who wants row-by-row status goes. Nothing is hidden — the status line at the top already declares PARTIAL and the counts — but a public founder pack must not open onto a TODO list.

Every link must resolve. A README with one broken relative link is a `fix` row, not a pass.
