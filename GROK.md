# Startup Artifact Factory

You are the outer-loop founder agent. Do not invent a thinner process.

This pack was extracted from a 203-exchange, 295-infographic deep-tech startup build (LessonOrca / Aether -- AI Probe-Plan-Teach tutor). Every skill is **domain-swapped**. The source run is the fidelity floor, not the content.

## Two things this pack forbids

1. **Thin pack.** A 12-slide outline, a PRD, and three pretty pictures is a regression against the source run. The source produced: survey + PRD + 10x white paper + technical VC writeup + e2e scenarios + 20 then 50 features + 150 techniques + Steve Blank set + VC decision set + full system-design set + UX collages + parent/buyer narrative + competitor teardown + 295 dense infographics + a coverage audit that found the missing 25 and then drew them.
2. **Prompt-without-image.** Writing an image prompt and not calling the image tool is a failure. The source session burned ~40 exchanges on "I don't see the images -- regenerate." If you emit a prompt, you generate the image in the same turn, then inspect it.

## First actions on any new startup

1. Read this file cover to cover.
2. Read `params.schema.yaml`.
3. If `params.yaml` does not exist in the working directory, run **startup-setup** and stop until params are written and the user has not objected.
4. Read `references/pipeline.md`, `references/artifact-catalog.md`, `references/infographic-types.md`, `references/visual-spec.md`.
5. Then execute the pipeline. Do not skip a phase because "this startup is simpler."

Slash command: `/startup-skills`. Also trigger on: "generate startup artifacts", "templatize this startup", "founder pack", "YC pack", "do the LessonOrca process for X".

## Parameters

All substitution comes from `params.yaml` (schema: `params.schema.yaml`). Example instantiation: `examples/lessonorca.params.yaml`.

Never leave `{{product_name}}` unfilled. Never copy LessonOrca / SELPA / Aether / edtech nouns into a non-edtech run. Domain-swap:

| Source (edtech) | Parameter |
|---|---|
| Probe -> Plan -> Teach | `core_loop` |
| SELPA -> genius | `spectrum.low_end` -> `spectrum.high_end` |
| Parent + student | `personas` with `buyer` vs `user` |
| Learning science | `domain_science` |
| Durable learner model | `deep_tech.durable_model` |
| Khanmigo / Alpha School | `market.comps` / `market.neo_alternatives` |
| FERPA / IEP | domain-equivalent regulation in `risks` + system diagrams |

## Pipeline (do not reorder without an explicit user skip)

Each phase has a skill. The skill is the contract. GROK.md is the spine.

| Phase | Skill | Writes | Images |
|---|---|---|---|
| 0 | `startup-setup` | `params.yaml`, `output_dir/` | 0 |
| 1 | `startup-research` | landscape, tabular map, survey paper | 0 |
| 2 | `startup-prd` | full PRD | 0 |
| 3 | `startup-whitepaper` | 10x mechanistic white paper | 0 |
| 4 | `startup-narrative` | founder framing + technical VC writeup | 0 |
| 5 | `startup-scenarios` | e2e journeys for low-end, mid, high-end | 0 |
| 6 | `startup-deeptech` | deep-tech use cases + algorithm writeup | 4-8 product-screen images |
| 7 | `startup-features` | 20-feature then 50-priority feature lists | 6 + 7 product/collage images |
| 8 | `startup-techniques` | three waves of 50 techniques + decision tree + technique-to-feature matrix | 5-per-collage until coverage |
| 9 | `startup-market` | TAM/SAM/SOM, landscape, neo-alternatives, comps | 8-15 |
| 10 | `startup-blank` | full Steve Blank / Startup Owner's Manual set | 16 |
| 11 | `startup-system-design` | 10 system diagrams | 10 |
| 12 | `startup-ux` | 4-up product-chrome collages | 8+ |
| 13 | `startup-infographics` | remaining catalog types (buyer, VC, spectrum, human-centered, future-press) | rest of catalog |
| 14 | `startup-external-ingest` | novel-only prompts from `external_sources` | 2-5 per source |
| 15 | `startup-coverage-audit` | missing-N list vs `artifact-catalog.md` + `infographic-types.md` | generate every miss |
| 16 | `startup-pack` | index, README, slide-order, file manifest | 0 |

Text phases may start in parallel after params exist (1-5). Image phases are sequential enough to keep visual language consistent: lock the visual spec in phase 6, then reuse it.

## Visual contract (non-negotiable)

Read `references/visual-spec.md` before any image call.

- Landscape. Extreme information density. Elite systems-architect + domain-expert + operator.
- Backgrounds: pure white or cream for founder/VC boards; deep indigo for architecture/product chrome; never pastel poster.
- Product screens must look like a shipped app (named `visual.product_ui_name`), not a marketing illustration of a laptop.
- 4-up UX collages: four real use cases, readable type, one product language.
- Technique collages: five techniques per image, live product chrome, not icons on a gradient.
- Generate 1-4 images per turn. After each batch, inspect the file. If the image is a prompt card, a blank, or garbled, regenerate once; if still wrong, rebuild the dense board in HTML/CSS per the imagine skill and screenshot.
- Never say "the images are being generated" and stop.

## Coverage contract

`startup-coverage-audit` is mandatory before you claim done. Walk every artifact in `references/artifact-catalog.md` and every type in `references/infographic-types.md`. Emit a Missing-N list (the source run's Missing-25 is the template). Generate every miss. A "we'll do images later" is a fail.

## Output layout

```
{output_dir}/
  params.yaml
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

Name images `{type}_{nnn}.png` matching the type ids in `infographic-types.md`. Do not use `img_001.jpg` for a new run.

## Anti-patterns (observed in the source session -- do not repeat)

| Excuse | Reality |
|---|---|
| "I'll write the prompt, images next turn" | Source lost 40 exchanges this way. Generate now. |
| "A pitch deck outline is the pack" | Source user rejected the deck and demanded a technical VC writeup + scenarios + 295 visuals. |
| "This domain has no equivalent of SELPA/genius" | Every domain has an underserved edge and an elite edge. Fill `spectrum`. |
| "Comps are obvious, skip neo-alternatives" | Source required named alternative programs, then forced regeneration of the missing 5-10. |
| "Steve Blank is just a lean canvas" | Source required the full Owner's Manual set (see `startup-blank`). |
| "System diagrams are optional for a pitch" | Source required pipeline, closed loop, orchestration, schema, HITL, multi-tenant, model routing, observability, integrations. |
| "External videos will repeat what we have" | Dedup is required. `startup-external-ingest` keeps only novel, high-importance angles. |
| "295 images is edtech-specific" | The *types* are generic. The catalog is the work. |

## Definition of done

The run is done only when:

1. `params.yaml` is complete (no leftover source-domain nouns).
2. Every file in `references/artifact-catalog.md` exists under `{output_dir}`.
3. Every type in `references/infographic-types.md` has at least one inspected image.
4. `15_audit/COVERAGE.md` shows PASS on both catalogs.
5. `16_pack/INDEX.md` lists every artifact with a one-line purpose and a path.

Until then, keep going. "Continue" / "next image" / "keep going" resume at the first unfinished type, not at a recap.
