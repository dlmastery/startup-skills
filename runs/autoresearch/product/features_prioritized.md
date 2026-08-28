# Ascent — 50 Features, Prioritized (Now / Next / Later)

Strict priority order within and across tiers. Effort: S ≤ 1 wk · M ≤ 1 mo · L > 1 mo (solo-founder + agent-assisted build, consistent with the PoC's construction method). "PoC✓" in Mechanism = exists in `generalized_ml_autoresearch` and needs productization, not invention. Principles Pn per PRD §5.

## NOW — earn the beachhead's trust (target: the 15-practitioner test passes)

| # | Feature | Mechanism | User value | Depends on | Effort |
|---|---|---|---|---|---|
| 1 | Trial ledger (discards included) | PoC✓ `experiment_log.jsonl` extended with gate verdicts + discard reasons; append-only [P2] | The honest denominator; Marcus's stated demand; feeds A11 corpus | — | S |
| 2 | One-command reproduction | PoC✓ bundle rerun + fingerprint diff, packaged as `ascent reproduce <bundle>` [P9] | Turns founder-reported into evidence; the demo | 4 | S |
| 3 | DSR / deflated-statistic panel | Compute DSR [D6] (or trial-count analogue) from ledger N; render beside raw metric | "+6.52 raw, X deflated" — the honesty hook that converts quants | 1 | M |
| 4 | Winner archive / champion bundle | PoC✓ `winner_archive.py`: 14-section audit report, model, snapshot, repro log [P9] | The portable trust artifact | — | S |
| 5 | Three audit gates, deterministic-first | PoC✓ `reasoning.py` + runner invariants; harden Gate 1/2 to fully mechanical checks [P5] | "Unable to cheat" claim made inspectable | — | M |
| 6 | Super-fold split builder (CLI+visual) | PoC✓ `splits.py` + timeline visualization of purge/embargo, overlap verification stamp [P1] | Kills the week of harness work; leakage defense visible | — | M |
| 7 | Constitution instantiation wizard | PoC✓ 12-step skill flow → guided onboarding emitting adapted 52-section constitution | 20-minute activation for all personas | 6 | M |
| 8 | Fingerprinted composite metric designer | PoC✓ `composite.py` DSL + SHA-256 at campaign start; mid-run rewrite refusal [P4] | Tamper-evident keep/discard anchor | — | S |
| 9 | Crash-proof checkpoint + resume | PoC✓ `checkpoint.py` 5-min cadence; `ascent resume` UX [P8] | Laptop viability; zero-loss recovery | — | S |
| 10 | Campaign dashboard (App. B.1 table) | PoC✓ static HTML: sortable table, curves, per-fold heatmap, champion panel, exports | The daily technical-lead surface | 1 | M |
| 11 | Stall detector + suggested steering | Rolling improvement-rate stats over ledger; canned prompt suggestions (App. B.3) [P4][P8] | Minutes-per-day oversight instead of babysitting | 10 | S |
| 12 | Steering console + durable steering log | PoC✓ steering_log.md; single input channel wired to next-hypothesis rule (§49–52) [P8] | High-level control; the log is the audit trail of human input | 10 | S |
| 13 | BYOK key management + routing v1 | User keys in OS keychain; static routing table: frontier→Diagnose/Hypothesize, mid-tier→rest (A12) [P10] | $3–12/day economics on the user's own bill | — | M |
| 14 | Spend meter | Client-side token accounting per step/model; $/day projection [P10] | Cost trust for the solo payer | 13 | S |
| 15 | Private-dataset onboarding + contamination advisory | Local ingest, hashing, Kapoor–Narayanan checklist [D5]; warn on recognized public sets [P7] | Clean-test guidance; enterprise-safe posture | 6 | S |
| 16 | Deficiency diagnosis heatmap | Per-fold/regime champion analysis rendered + linked from Diagnose blobs [P4] | Shows *why* the next experiment was chosen | 10 | S |
| 17 | Verified citation links in UI | Gate 2 results rendered: resolving links + verified ticks [P3][P5] | Grounding made visible, not asserted | 5, 10 | S |
| 18 | Seeded-violation self-test harness | Inject known leakage/fabrication/incomplete-reasoning cases; measure gate catch-rates [P5] | Publishable gate scorecard; answers survey §7(c); feeds A11 corpus | 5 | M |

## NEXT — deepen rigor, open the paid layers

| # | Feature | Mechanism | User value | Depends on | Effort |
|---|---|---|---|---|---|
| 19 | Trial-count-corrected acceptance gate | Keep/discard threshold rises with ledger N (deflated-composite analogue) [P2] | The differentiator no published system has [survey §6] | 1, 3 | M |
| 20 | Multi-seed confirmation batch | Champion candidates re-run across k seeds; promote only outside noise band [D11][D12] [P6] | Kills seed-lucky champions | 1 | M |
| 21 | CPCV path distribution | Combinatorial purged CV where protocol supports [D8]; distribution plot in bundle [P6][P1] | Distributional evidence, not a point estimate | 6, 20 | M |
| 22 | Goodhart divergence monitor | Proxy-vs-raw-metric tracking, banded alerts [D31] [P4] | Early warning on long campaigns | 10 | S |
| 23 | SOTA catalog v1 (curated feed) | `sota_catalog.yaml` per task family, verified citations, monthly updates (Pro subscription) [P3] | Warm-start Ground; recurring value for Pro | 17 | M |
| 24 | Constitution editor with locked invariants | Section-blocked editor per App. A.1; live-campaign locks (PoC rule 9) [P4][P5] | Safe customization without rigor loss | 7 | M |
| 25 | Pro tier packaging + licensing | BYOK Pro $100–150/mo (A12, A8 hypothesis): hosted dashboards, catalog, DSR service | First revenue; validates willingness-to-pay | 3, 13, 23 | M |
| 26 | Hosted dashboard sync (read-only) | Opt-in push of dashboard JSON to hosted view; phone URL (data stays local; telemetry disclosed, A9) | App. B.3 phone check without a local server | 10, 25 | M |
| 27 | Adaptive model routing v2 | Route by step complexity + cache hit-rates; auto-downgrade routine steps [P10] | Pushes $/day toward the $3 floor | 13 | M |
| 28 | Reproduction network / public bundle registry | Registry of published bundles + reproduction attestations from strangers [P9] | Trust flywheel; marketing that can't be faked | 2, 4 | M |
| 29 | Opt-in ledger telemetry (corpus intake) | Consented upload of discard ledgers + gate stats; never in bundles (A11) | Builds the moat corpus | 1, 18 | M |
| 30 | Backbone plugin SDK | PoC✓ `Backbone` ABC + registry; document + stabilize as public API | Community extends coverage; catalog pipeline | — | M |
| 31 | Metric/split plugin SDK | PoC✓ metric + split registries opened with validation contracts [P1] | Domain generality without forks | 30 | S |
| 32 | Campaign templates per domain | Six PoC domain forks packaged as instantiation presets | "Replicate the recipe" as a button | 7 | S |
| 33 | Literature watch alerts | Standing catalog+arXiv queries per campaign; new-paper alerts routed to steering suggestions [P3] | Ground step stays current mid-campaign | 23 | S |
| 34 | Gate scorecard publication page | Auto-published catch-rate stats from #18 per release | Public accountability; sales artifact | 18 | S |
| 35 | Steering copilot | Suggests steering from stall patterns + what-worked-where priors; human always confirms [P8] | Lowers steering bandwidth (the open question, survey §6) | 11, 29 | M |

## LATER — team, enterprise, expansion (gated on beachhead traction + vendor-DD readiness)

| # | Feature | Mechanism | User value | Depends on | Effort |
|---|---|---|---|---|---|
| 36 | Team parallel campaigns | Multi-stream orchestration on shared hardware/queue; org ledger [P2] | Elena's pods; Team tier anchor | 25 | L |
| 37 | Shared winner-archive search | Org-wide indexed archive: champions, reasoning, discards searchable | Campaign memory that survives attrition | 36 | M |
| 38 | Role-based access + SSO | Standard enterprise gates (the proven monetization line [C18][C31]) | Team/Enterprise unlock | 36 | M |
| 39 | Audit-trail retention policies | Configurable immutable retention of ledgers/blobs/checkpoints | Compliance posture for funds | 36 | M |
| 40 | Attestation & model-risk export | Validator-facing evidence pack mapped to SR 11-7-style review needs (A10 roadmap; David persona) | Year-2+ enterprise wedge — never claimed shipped | 39 | L |
| 41 | BYO-endpoint / local-model steering | Route steering to customer-approved endpoints or local models (A9 roadmap; PoC was Claude-family only) | Closes Elena's "alpha can't touch a vendor's cloud" objection honestly | 27 | L |
| 42 | On-prem / air-gapped deployment | Self-hosted dashboards, catalog mirror, license server | Regulated-vertical requirement | 38, 41 | L |
| 43 | Cloud burst execution | Optional remote runners for larger backbones; checkpoint-compatible (paper Table 3 "hybrid") | Scale beyond laptop without changing the loop | 36 | L |
| 44 | Multi-agent roles (Queen/Architect/Runner) | Parallel experiment streams inside one campaign (paper Table 3 High priority) | Throughput on big hardware | 36 | L |
| 45 | Cross-campaign what-worked-where priors | Corpus-derived Hypothesize priors served per domain (A11 payoff) | Measurably better proposals — the moat made product | 29, 35 | L |
| 46 | Uncertainty-aware evaluation suite | PoC✓ `uncertainty.py` (MC dropout, ensembles, quantiles) surfaced in reports [P6] | Richer champion audit sections | 4 | M |
| 47 | Semantic-leakage gate extensions | Feature-legitimacy and sampling-bias checks beyond split geometry [D5 taxonomy] [P1][P5] | Covers the leakage classes folds can't | 18 | L |
| 48 | FDR budget accounting (research monad) | Sargsyan-style machine-checked error-budget debiting [D32] [P2][P5] | Structural rigor beyond gates; academic credibility | 19 | L |
| 49 | Community fork exchange | Vetted domain constitutions/templates marketplace | Distribution flywheel (BRIEF moat 4) | 32 | M |
| 50 | Attested reproduction service | Hosted third-party reruns issuing signed reproduction certificates | Monetizes the trust network (A11 infrastructure) | 28, 40 | L |

## Dependencies worth calling out

- The **A11 corpus chain** is 1 → 18 → 29 → 35 → 45: skip any link and the moat is brand-only.
- The **honesty chain** is 1 → 3 → 19: the ledger enables the deflated statistic, which enables the acceptance gate. This chain is also the marketing.
- Nothing in LATER starts before the 15-practitioner test (PRD G1) passes; #40/#42 additionally gate on vendor-DD readiness (legal entity, security docs — personas card 5).

## Recommended next 5 (in order)

1. **#1 Trial ledger** — everything honest and everything moat-shaped depends on it.
2. **#2 One-command reproduction** — the riskiest-assumption test needs it in strangers' hands.
3. **#3 DSR panel** — self-deflate the +6.52 before a critic does it for us (positioning.md §4.2).
4. **#5 Deterministic gate hardening** — the "evidence it didn't cheat" claim must survive inspection.
5. **#7 Instantiation wizard** — the activation funnel for the OSS channel; converts stars to campaigns.
