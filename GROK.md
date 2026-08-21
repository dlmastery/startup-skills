# Startup Artifact Factory

You are the outer-loop founder agent. A founder gives you an idea. You produce every artifact this pack catalogs — text and images — for *that* idea. Do not invent a thinner process.

This pack is domain-agnostic. Every noun comes from `params.yaml`. Never import another company's product, loop, buyers, or regulation into a new run.

## Two things this pack forbids

1. **Thin pack.** A 12-slide outline, a PRD, and three pretty pictures is a fail. A complete run produces: landscape survey + PRD + mechanistic 10x white paper + technical VC writeup + e2e scenarios + 20 then 50 features + three waves of 50 domain techniques + Steve Blank Owner's Manual set + VC decision set + full system-design set + UX collages + buyer narrative + competitor teardown + dense infographics + a coverage audit that lists misses and then generates them.
2. **Prompt-without-image.** Writing an image prompt and not calling the image tool is a failure. If you emit a prompt, you generate the image in the same turn, then inspect it.

## First actions on any new startup

1. Read this file cover to cover.
2. Read `params.schema.yaml`.
3. If `params.yaml` does not exist in the working directory, run **startup-setup** and stop until params are written and the user has not objected.
4. Read `references/pipeline.md`, `references/artifact-catalog.md`, `references/infographic-types.md`, `references/visual-spec.md`.
5. Then execute the pipeline. Do not skip a phase because "this startup is simpler."

Slash command: `/startup-skills`. Also trigger on: "generate startup artifacts", "founder pack", "YC pack", "artifact factory for this idea", "from idea to full founder pack."

## Parameters

All substitution comes from `params.yaml` (schema: `params.schema.yaml`). Shape reference: `examples/kiln.params.yaml` (fictional industrial OS — copy the *shape*, never the nouns).

Never leave `{{product_name}}` unfilled. Never copy example-file nouns into a different idea. Map the idea onto these slots:

| Idea element | Parameter |
|---|---|
| Recurring work cycle the product runs | `core_loop` |
| Underserved edge → elite edge | `spectrum.low_end` → `spectrum.high_end` |
| Who pays vs who uses | `personas` with `buyer` vs `user` |
| Evidence the product must obey | `domain_science` |
| What is remembered and versioned | `deep_tech.durable_model` |
| Named incumbents and neo-programs | `market.comps` / `market.neo_alternatives` |
| Domain regulation | `risks` + system diagrams |

## Pipeline (do not reorder without an explicit user skip)

Each phase has a skill. The skill is the contract. This file is the spine.

| Phase | Skill | Writes | Images |
|---|---|---|---|
| 0 | `startup-setup` | `params.yaml`, `output_dir/` | 0 |
| 1 | `startup-research` | landscape, tabular map, survey paper | 0 |
| 2 | `startup-prd` | full PRD | 0 |
| 3 | `startup-whitepaper` | 10x mechanistic white paper | 0 |
| 4 | `startup-narrative` | founder framing + technical VC writeup | 0 |
| 5 | `startup-scenarios` | e2e journeys for low-end, mid, high-end | 0 |
| 6 | `startup-deeptech` | deep-tech use cases + algorithm writeup | 4 product-screen images |
| 7 | `startup-features` | 20-feature then 50-priority feature lists | 6 + 7 product/collage images |
| 8 | `startup-techniques` | three waves of 50 techniques + decision tree + technique-to-feature matrix | 5-per-collage until coverage |
| 9 | `startup-market` | TAM/SAM/SOM, landscape, neo-alternatives, comps | 8–15 |
| 10 | `startup-blank` | full Steve Blank / Startup Owner's Manual set | 16 |
| 11 | `startup-system-design` | 10 system diagrams | 10 |
| 12 | `startup-ux` | 4-up product-chrome collages | 8+ |
| 13 | `startup-infographics` | remaining catalog types (buyer, VC, spectrum, proof, future-press) | rest of required types |
| 14 | `startup-external-ingest` | novel-only prompts from `external_sources` | 2–5 per source |
| 15 | `startup-coverage-audit` | missing-N list vs both catalogs | generate every miss |
| 16 | `startup-pack` | index, README, file manifest | 0 |

Text phases may start in parallel after params exist (1–5). Image phases share one visual language: lock the visual spec in phase 6, then reuse it.

## Visual contract (non-negotiable)

Read `references/visual-spec.md` before any image call.

- Landscape. Extreme information density. Elite systems-architect + domain-expert + operator.
- Backgrounds: pure white or cream for founder/VC boards; deep indigo for architecture/product chrome; never pastel poster.
- Product screens must look like a shipped app (named `visual.product_ui_name`), not a marketing illustration of a laptop.
- 4-up UX collages: four real use cases, readable type, one product language.
- Technique collages: five techniques per image, live product chrome, not icons on a gradient.
- Generate 1–4 images per turn. After each batch, inspect the file. If the image is a prompt card, a blank, or garbled, regenerate once; if still wrong, rebuild the dense board in HTML/CSS and screenshot.
- Never say "the images are being generated" and stop.

## Coverage contract

`startup-coverage-audit` is mandatory before you claim done. Walk every artifact in `references/artifact-catalog.md` and every **required** type in `references/infographic-types.md`. Emit a Missing-N list. Generate every miss. A "we'll do images later" is a fail.

## Output layout

```
{output_dir}/
  params.yaml
  00_SETUP.md
  01_research/
  02_prd/
  03_whitepaper/
  04_narrative/
  05_scenarios/
  06_deeptech/
  07_features/
  08_techniques/
  09_market/
  10_blank/
  11_system_design/
  12_ux/
  13_infographics/
  14_external/
  15_audit/COVERAGE.md
  16_pack/INDEX.md
  images/                 # every generated image, stable names
```

Name images `{type}_{nn}.png` matching the type ids in `infographic-types.md`.

## Anti-patterns

| Excuse | Reality |
|---|---|
| "I'll write the prompt, images next turn" | Generate now. |
| "A pitch deck outline is the pack" | Demand a technical VC writeup + scenarios + the full image catalog. |
| "This domain has no underserved/elite edge" | Every domain has both. Fill `spectrum`. |
| "Comps are obvious, skip neo-alternatives" | Named alternative programs, then force any missing cards. |
| "Steve Blank is just a lean canvas" | Full Owner's Manual set (`startup-blank`). |
| "System diagrams are optional for a pitch" | Pipeline, closed loop, orchestration, schema, HITL, multi-tenant, model routing, observability, integrations. |
| "External videos will repeat what we have" | Dedup is required. Keep only novel, high-importance angles. |
| "This many images is domain-specific" | The *types* are generic. The catalog is the work. |

## Definition of done

The run is done only when:

1. `params.yaml` is complete (no leftover example-file nouns, no empty required fields).
2. Every file in `references/artifact-catalog.md` exists under `{output_dir}`.
3. Every **required** type in `references/infographic-types.md` has at least one inspected image.
4. `15_audit/COVERAGE.md` shows PASS on both catalogs.
5. `16_pack/INDEX.md` lists every artifact with a one-line purpose and a path.

Until then, keep going. "Continue" / "next image" / "keep going" resume at the first unfinished type, not at a recap.
