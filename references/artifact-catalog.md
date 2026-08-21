# Artifact catalog — every file a run must produce

Paths are relative to `{output_dir}`. Names stay stable so coverage audit can grep them.

## Text artifacts

| ID | Path | Skill |
|---|---|---|
| T00 | `00_SETUP.md` | startup-setup |
| T01 | `01_research/landscape.md` | startup-research |
| T02 | `01_research/capability_table.md` | startup-research |
| T03 | `01_research/survey.md` | startup-research |
| T04 | `02_prd/PRD.md` | startup-prd |
| T05 | `03_whitepaper/WHITEPAPER.md` | startup-whitepaper |
| T06 | `03_whitepaper/INDUSTRIAL_TRAP.md` | startup-whitepaper |
| T07 | `04_narrative/FOUNDER_FRAMING.md` | startup-narrative |
| T08 | `04_narrative/VC_WRITEUP.md` | startup-narrative |
| T09 | `04_narrative/FUTURE_PRESS.md` | startup-narrative |
| T10 | `05_scenarios/LOW_END.md` | startup-scenarios |
| T11 | `05_scenarios/BEACHHEAD.md` | startup-scenarios |
| T12 | `05_scenarios/HIGH_END.md` | startup-scenarios |
| T13 | `06_deeptech/USE_CASES.md` | startup-deeptech |
| T14 | `06_deeptech/ALGORITHMS.md` | startup-deeptech |
| T15 | `07_features/FEATURES_20.md` | startup-features |
| T16 | `07_features/FEATURES_50.md` | startup-features |
| T17 | `07_features/HABIT_MOTIVATION.md` | startup-features |
| T18 | `08_techniques/WAVE1.md` | startup-techniques |
| T19 | `08_techniques/WAVE2.md` | startup-techniques |
| T20 | `08_techniques/WAVE3.md` | startup-techniques |
| T21 | `08_techniques/DECISION_TREE.md` | startup-techniques |
| T22 | `09_market/LANDSCAPE.md` | startup-market |
| T23 | `09_market/TAM_SAM_SOM.md` | startup-market |
| T24 | `09_market/NEO_ALTERNATIVES.md` | startup-market |
| T25 | `10_blank/README.md` | startup-blank |
| T26 | `10_blank/B01.md` … `B16.md` | startup-blank |
| T27 | `11_system_design/README.md` | startup-system-design |
| T28 | `11_system_design/A01.md` … `A10.md` | startup-system-design |
| T29 | `12_ux/CAPTIONS.md` | startup-ux |
| T30 | `15_audit/COVERAGE.md` | startup-coverage-audit |
| T31 | `15_audit/QUEUE.md` | startup-coverage-audit |
| T32 | `16_pack/INDEX.md` | startup-pack |
| T33 | `16_pack/MANIFEST.tsv` | startup-pack |
| T34 | `{output_dir}/params.yaml` | startup-setup |
| T35 | `14_external/NONE.md` or `14_external/SOURCE_1.md` | startup-external-ingest |

T26 is sixteen files. T28 is ten files. Audit counts each file.

## Infographic artifacts

Every **required** row in `infographic-types.md` becomes `images/{type_id}.png` (or `_01`, `_02` if the type is a series). The image is not optional. The matching markdown caption lives next to it under the phase folder.

## Missing-N template

When auditing, use these six tiers. Fill with this startup's nouns.

1. Core architecture & orchestration (5)
2. End-to-end user journeys for low-end, day-in-life, high-end, buyer narrative, buyer dashboard (5)
3. Steve Blank / validation (5)
4. Market, competition, positioning (3)
5. Feature & technique synthesis (3)
6. High-stakes proof & trust (4)

Priority draw order: architecture → decision tree → low-end journey → buyer narrative → lean canvas → competitive matrix → durable model → closed loop → feature roadmap → safety/oversight.
