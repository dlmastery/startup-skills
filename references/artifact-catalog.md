# Artifact catalog — every file a run must produce

Paths are relative to `{output_dir}`. Names stay stable so coverage audit can grep them.

## Text artifacts

| ID | Path | Skill | Source analog |
|---|---|---|---|
| T01 | `01_research/landscape.md` | startup-research | EX1 similar techniques |
| T02 | `01_research/capability_table.md` | startup-research | EX2 tabular + latest models |
| T03 | `01_research/survey.md` | startup-research | EX3 survey paper |
| T04 | `02_prd/PRD.md` | startup-prd | EX4 superset PRD |
| T05 | `03_whitepaper/WHITEPAPER.md` | startup-whitepaper | EX5 10x paper |
| T06 | `03_whitepaper/INDUSTRIAL_TRAP.md` | startup-whitepaper | EX28 industrial-loop paper |
| T07 | `04_narrative/FOUNDER_FRAMING.md` | startup-narrative | EX6 legendary founder |
| T08 | `04_narrative/VC_WRITEUP.md` | startup-narrative | EX7 technical VC memo |
| T09 | `04_narrative/FUTURE_PRESS.md` | startup-narrative | EX85–86 IPO newspaper copy |
| T10 | `05_scenarios/LOW_END.md` | startup-scenarios | EX8 underserved e2e |
| T11 | `05_scenarios/BEACHHEAD.md` | startup-scenarios | EX9 specific beachhead persona |
| T12 | `05_scenarios/HIGH_END.md` | startup-scenarios | genius/elite parallel |
| T13 | `06_deeptech/USE_CASES.md` | startup-deeptech | EX10 deep-tech use cases |
| T14 | `06_deeptech/ALGORITHMS.md` | startup-deeptech | EX14 tier-1 diagnostics |
| T15 | `07_features/FEATURES_20.md` | startup-features | EX11 |
| T16 | `07_features/FEATURES_50.md` | startup-features | EX13 |
| T17 | `07_features/MOTIVATION_EF.md` | startup-features | EX12 |
| T18 | `08_techniques/WAVE1.md` | startup-techniques | EX119 |
| T19 | `08_techniques/WAVE2.md` | startup-techniques | EX130 |
| T20 | `08_techniques/WAVE3.md` | startup-techniques | EX107 + EX142 |
| T21 | `08_techniques/DECISION_TREE.md` | startup-techniques | EX141 |
| T22 | `09_market/LANDSCAPE.md` | startup-market | EX21 |
| T23 | `09_market/TAM_SAM_SOM.md` | startup-market | EX19/22 |
| T24 | `09_market/NEO_ALTERNATIVES.md` | startup-market | EX29–34 |
| T25 | `10_blank/README.md` | startup-blank | EX63–81 index |
| T26 | `11_system_design/README.md` | startup-system-design | EX87 index |
| T27 | `15_audit/COVERAGE.md` | startup-coverage-audit | EX155 Missing-25 |
| T28 | `16_pack/INDEX.md` | startup-pack | final handoff |

## Infographic artifacts

Every row in `infographic-types.md` becomes `images/{type_id}.png` (or `_01`, `_02` if the type is a series). The image is not optional. The matching markdown caption lives next to it under the phase folder.

## Missing-25 template (source EX155, generalized)

When auditing, use these six tiers. Fill with this startup's nouns.

1. Core architecture & orchestration (5)
2. End-to-end user journeys for low-end, day-in-life, high-end, buyer narrative, buyer dashboard (5)
3. Steve Blank / validation (5)
4. Market, competition, positioning (3)
5. Feature & technique synthesis (3)
6. High-stakes proof & trust (4)

Priority order for maximum impact (source): architecture → decision tree → low-end journey → buyer narrative → lean canvas → competitive matrix → durable model → closed loop → feature roadmap → safety/oversight.
