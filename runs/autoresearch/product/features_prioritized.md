# Ascent — Features, Prioritized (Trust-test Kernel / Launch Tranche / Next / Later)

> **What this is** — All 57 features in strict build order across four tiers, with effort, dependencies, and PoC-checkmarks.
> **Why it exists** — It decides where the founder's ~15 hrs/wk goes in weeks 1–12 and protects the E1 trust test: short on capacity, the pre-order gate slips, never the test. Built out of order, the honesty chain — ledger → offline DSR → acceptance gate → family thresholds — never assembles.
> **How to read it** — Start at "Dependencies worth calling out," then the kernel table. Attack the S/M/L estimates against the zero-code velocity assumption.
> **Depends on / feeds** — Sequences [features_flagship.md](features_flagship.md) and [PRD.md](PRD.md) §6; tier tags drive [ux_spec.md](ux_spec.md) and every journey; timed against [experiment_board](../validation/experiment_board.md).

57 features in strict priority order. Effort: S ≤ 1 wk · M ≤ 1 mo · L > 1 mo. "PoC✓" in Mechanism = exists in `generalized_ml_autoresearch` and needs productization, not invention. Principles Pn per PRD §5.

**Velocity assumption (explicit, binding on all effort estimates):** solo founder + agent-assisted build — basis: the PoC itself was built zero-code via natural-language steering across six domains in months (paper; A5/A6). Founder-hours envelope per gtm §4: ~50–55 productive hrs/wk total, of which **~15 hrs/wk go to ascent v0 + BYOK CLI packaging in weeks 1–12**; community (15), trust test (10, weeks 5–10), bundles/DSR (10), admin (5) consume the rest. If over capacity, the day-61–90 pre-order gate slips first — never the trust test.

## NOW (a) — TRUST-TEST KERNEL

The minimum surface the 15-practitioner test (E1) requires — **PoC-checkmark surfaces only, no new UI**. Trust-test recruits are practitioners who can hand-edit a config: the wizard is the OSS activation funnel, **not** a test prerequisite. gen-validation is sliding E1 sessions to weeks 10–13 on this plan.

| # | Feature | Mechanism | User value | Depends on | Effort |
|---|---|---|---|---|---|
| 1 | Trial ledger export + completeness audit | PoC✓ `experiment_log.jsonl` for runner-executed trials; **week-1 work is the completeness audit** (verify discards are fully captured) + a clean `ascent ledger export` [P2] | The honest denominator; Marcus's stated demand; feeds A11 corpus | — | S |
| 2 | **Refusal ledger** (D-REFUSAL-LEDGER) | New build item: experiments **refused pre-launch** (gate failure, missing annotation, overlap) currently write **no ledger row**; add one JSONL of refusals with gate verdicts [P2][P5] | Closes the gap between "per-trial gate verdicts" and what's captured today; feeds A11 corpus + E6 | 1 | S |
| 3 | `ascent reproduce` (one-command reproduction) | PoC✓ bundle rerun; package as CLI with the **tolerance policy: metrics within pre-declared epsilon bands + config/data fingerprint equality — not bitwise output equality** (GPU/BLAS nondeterminism) [P9] | Turns founder-reported into evidence; the test's core act | 5 | S |
| 4 | Seeded-violation harness | Inject known leakage/fabrication/incomplete-reasoning cases; measure gate catch-rates [P5] — **promoted: E6 requires measured catch-rates before E1 sessions run** | Publishable gate scorecard; answers survey §7(c); feeds A11 | 2 | M |
| 5 | Winner archive / champion bundle | PoC✓ `winner_archive.py`: 14-section audit report, model, snapshot, repro log [P9] | The portable trust artifact | — | S |
| 6 | Split verification surfacing | PoC✓ `validate_no_overlap()` + purge/embargo params printed as a verification stamp in bundle/CLI output [P1] | Leakage defense inspectable at test time (visual builder is launch tranche) | — | S |
| 7 | **Offline DSR script** | CLI script computing DSR [D6] (or trial-count analogue) from the ledger's true N; text/CSV output — **replaces the DSR panel screens for test purposes** | "+raw · deflated over N" honesty exists before any UI does | 1, 2 | S |
| 8 | Minimal single-OS BYOK path | Key from env var/keychain on one OS + static routing table (frontier→Diagnose/Hypothesize, mid-tier→rest) (A12) [P10] | **Gates the trust test's private-data leg** (≥3/15 on own data need their own keys); full cross-OS is launch tranche | — | S |
| 9 | Reproduction-registry ping (slice of #38) | One-line opt-in consent at `ascent reproduce` time posting {bundle id, pass/fail, timestamp} — nothing else; privacy-consistent with "what leaves this machine" | gen-validation's growth loop gets one observable reproduction signal from day 1 | 3 | S |

## NOW (b) — LAUNCH TRANCHE

Everything else needed for the public OSS/Pro launch; starts only after the kernel is E1-ready.

| # | Feature | Mechanism | User value | Depends on | Effort |
|---|---|---|---|---|---|
| 10 | Campaign dashboard (App. B.1 table) | PoC✓ local web app served by `ascent dashboard` (see ux_spec globals): sortable table, curves, per-fold heatmap, champion panel, exports | The daily technical-lead surface | 1 | M |
| 11 | Constitution instantiation wizard | PoC✓ 12-step skill flow → guided onboarding emitting adapted 52-section constitution | 20-minute activation — the OSS funnel, not a test prerequisite | — | M |
| 12 | Three audit gates, deterministic-first hardening | PoC✓ `reasoning.py` + runner invariants; harden Gate 1/2 to fully mechanical checks [P5] | "Unable to cheat" claim made inspectable | 4 | M |
| 13 | Super-fold split builder (visual) | Timeline visualization of purge/embargo over PoC✓ `splits.py`; drag-to-adjust [P1] | Kills the week of harness work | 6 | M |
| 14 | Fingerprinted composite metric designer | PoC✓ `composite.py` DSL + SHA-256 at campaign start; **fingerprint is logged (tamper-evident) today — mid-run rewrite refusal is [ROADMAP], see #24** [P4] | Tamper-evident keep/discard anchor | — | S |
| 15 | Crash-proof checkpoint + resume UX | PoC✓ `checkpoint.py` 5-min cadence; `ascent resume` [P8] | Laptop viability | — | S |
| 16 | DSR panel (UI) | Screen 6 rendering of the #7 script output: honesty pair + ledger table | The honesty hook, productized | 7, 10 | S |
| 17 | Stall detector + suggested steering | Rolling improvement-rate stats over ledger; canned prompts (App. B.3) [P4][P8] | Minutes-per-day oversight | 10 | S |
| 18 | Steering console + durable steering log | PoC✓ steering_log.md; single input channel wired to next-hypothesis rule (§49–52) [P8] | High-level control; audit trail of human input | 10 | S |
| 19 | BYOK cross-OS keys + routing v1 | OS-keychain storage on Win/Mac/Linux; routing presets; extends #8 [P10] (A12) | $3–12/day economics for everyone | 8 | M |
| 20 | Spend meter | Client-side token accounting per step/model; $/day projection [P10] | Cost trust for the solo payer | 19 | S |
| 21 | Private-dataset onboarding + contamination advisory | Local ingest, hashing, Kapoor–Narayanan checklist [D5]; warn on recognized public sets [P7] | Clean-test guidance | 11 | S |
| 22 | Deficiency diagnosis heatmap | Per-fold/regime champion analysis rendered + linked from Diagnose blobs [P4] | Shows *why* the next experiment was chosen | 10 | S |
| 23 | Verified citation links in UI | Gate 2 results rendered: resolving links + verified ticks [P3][P5] | Grounding made visible | 12, 10 | S |

## NEXT — deepen rigor, open the paid layers

| # | Feature | Mechanism | User value | Depends on | Effort |
|---|---|---|---|---|---|
| 24 | Mid-run metric/invariant rewrite **refusal** | Runner compares live composite/split config hashes against the campaign-start fingerprint and refuses divergence (D-A: today the fingerprint is logged, never compared — tamper-evident, not tamper-refusing) [P4][P5] | Closes the PRD §8 enforcement gap | 14 | S |
| 25 | Trial-count-corrected acceptance gate | Keep/discard threshold rises with ledger N (deflated-composite analogue) [P2] | The differentiator no published system has [survey §6] | 1, 7 | M |
| 26 | Multi-seed confirmation batch | Champion candidates re-run across k seeds; promote only outside noise band [D11][D12] [P6] | Kills seed-lucky champions | 1 | M |
| 27 | CPCV path distribution | Combinatorial purged CV where protocol supports [D8]; distribution plot in bundle [P6][P1] | Distributional evidence, not a point estimate | 13, 26 | M |
| 28 | Goodhart divergence monitor | Proxy-vs-raw-metric tracking, banded alerts [D31] [P4] | Early warning on long campaigns | 10 | S |
| 29 | **Experiment-selection optimizer** | BO/multi-fidelity/information-gain scoring of the Hypothesize candidate pool (the W2.E cluster): pick the next experiment by expected information, not LLM ordering alone [D2][D23] [P4] | Fewer wasted trials per kept improvement. **Until built, marketing must not claim search-efficiency IP** — the current selector is constitution-guided LLM choice | 25 | L |
| 30 | SOTA catalog v1 (curated feed) | `sota_catalog.yaml` per task family, verified citations, monthly updates (Pro subscription) [P3] | Warm-start Ground; recurring Pro value | 23 | M |
| 31 | Constitution editor with locked invariants | Section-blocked editor per App. A.1; live-campaign locks | Safe customization without rigor loss | 11, 24 | M |
| 32 | Pro tier packaging + licensing | BYOK Pro $100–150/mo (A12, A8 hypothesis): hosted dashboards, catalog, DSR service | First revenue | 16, 19, 30 | M |
| 33 | Hosted dashboard sync (read-only) | Opt-in push of dashboard JSON to hosted view; phone URL (data stays local; telemetry disclosed, A9) | Remote monitoring without a local server | 10, 32 | M |
| 34 | Adaptive model routing v2 | Route by step complexity + cache hit-rates; auto-downgrade routine steps [P10] | Pushes $/day toward the $3 floor | 19 | M |
| 35 | Opt-in ledger telemetry (corpus intake) | Consented upload of discard+refusal ledgers + gate stats; never in bundles (A11) | Builds the moat corpus | 1, 2, 4 | M |
| 36 | Backbone plugin SDK | PoC✓ `Backbone` ABC + registry; document + stabilize as public API | Community extends coverage | — | M |
| 37 | Metric/split plugin SDK | PoC✓ metric + split registries opened with validation contracts [P1] | Domain generality without forks | 36 | S |
| 38 | Reproduction network / public bundle registry (full) | Registry of published bundles + reproduction attestations; extends the #9 ping [P9] | Trust flywheel | 3, 9 | M |
| 39 | Campaign templates per domain | Six PoC domain forks packaged as instantiation presets | "Replicate the recipe" as a button | 11 | S |
| 40 | Literature watch alerts | Standing catalog+arXiv queries per campaign; alerts routed to steering suggestions [P3] | Ground stays current mid-campaign | 30 | S |
| 41 | Gate scorecard publication page | Auto-published catch-rate stats from #4 per release | Public accountability; sales artifact | 4 | S |
| 42 | Steering copilot | Suggests steering from stall patterns + what-worked-where priors; human confirms [P8] | Lowers steering bandwidth (survey §6 open question) | 17, 35 | M |

## LATER — team, enterprise, expansion (gated on beachhead traction + vendor-DD readiness)

| # | Feature | Mechanism | User value | Depends on | Effort |
|---|---|---|---|---|---|
| 43 | Team parallel campaigns | Multi-stream orchestration on shared hardware/queue; org ledger [P2] | Elena's pods; Team tier anchor | 32 | L |
| 44 | Shared winner-archive search | Org-wide indexed archive: champions, reasoning, discards searchable | Campaign memory that survives attrition | 43 | M |
| 45 | **Family-level deflated thresholds** | Org ledger aggregates trial counts per strategy family; promotion requires clearing the deflated threshold at the family's cumulative N [D6][D7] [P2] | The edge_high journey's beat 7; the Team-tier acceptance-gate scale-up | 25, 43 | M |
| 46 | Role-based access + SSO | Standard enterprise gates (the proven monetization line [C18][C31]) | Team/Enterprise unlock | 43 | M |
| 47 | Audit-trail retention policies | Configurable immutable retention of ledgers/blobs/checkpoints | Compliance posture for funds | 43 | M |
| 48 | Attestation & model-risk export | Validator-facing evidence pack mapped to SR 11-7-style review needs (A10 roadmap; David persona) — never claimed shipped | Year-2+ enterprise wedge | 47 | L |
| 49 | BYO-endpoint / local-model steering | Route steering to customer-approved endpoints or local models (A9 roadmap; PoC was Claude-family only) | Closes Elena's data-flow objection honestly | 34 | L |
| 50 | On-prem / air-gapped deployment | Self-hosted dashboards, catalog mirror, license server | Regulated-vertical requirement | 46, 49 | L |
| 51 | Cloud burst execution | Optional remote runners for larger backbones; checkpoint-compatible (paper Table 3) | Scale beyond laptop | 43 | L |
| 52 | Multi-agent roles (Queen/Architect/Runner) | Parallel experiment streams inside one campaign (paper Table 3) | Throughput on big hardware | 43 | L |
| 53 | Cross-campaign what-worked-where priors | Corpus-derived Hypothesize priors served per domain (A11 payoff) | The moat made product | 35, 42 | L |
| 54 | Uncertainty-aware evaluation suite | PoC✓ `uncertainty.py` (MC dropout, ensembles, quantiles) surfaced in reports [P6] | Richer champion audits | 5 | M |
| 55 | Semantic-leakage gate extensions | Feature-legitimacy and sampling-bias checks beyond split geometry [D5 taxonomy] [P1][P5] | Covers the leakage classes folds can't | 4 | L |
| 56 | FDR budget accounting (research monad) | Sargsyan-style machine-checked error-budget debiting [D32] [P2][P5] | Structural rigor beyond gates | 25 | L |
| 57 | Community fork exchange + attested reproduction service | Vetted domain-constitution marketplace; hosted third-party reruns issuing signed certificates (A11 infrastructure) | Distribution + trust monetized | 38, 39, 48 | L |

## Dependencies worth calling out

- The **A11 corpus chain** is 1+2 → 4 → 35 → 42 → 53: skip any link and the moat is brand-only. The refusal ledger (#2) is part of link one — refusals are corpus data the PoC does not capture today.
- The **honesty chain** is 1+2 → 7 → 25 → 45: ledger → offline DSR → acceptance gate → family-level thresholds. This chain is also the marketing.
- The **kernel is the E1 critical path**: #1–9 must be done before trust-test sessions (weeks 10–13); nothing in the launch tranche blocks E1.
- Nothing in LATER starts before the trust test passes (canonical thresholds: ≥5/15 reproduce, ≥3/15 on own private data, ≥8/15 name deploy evidence); #48/#50 additionally gate on vendor-DD readiness (entity, security docs — personas card 5).

## Recommended next 5 (in order)

1. **#1+#2 Ledger completeness audit + refusal ledger** — everything honest and everything moat-shaped depends on the full ledger, and refusals aren't captured today.
2. **#3 `ascent reproduce` with the epsilon-band tolerance policy** — the trust test's core act, in strangers' hands.
3. **#7 Offline DSR script** — self-deflate the +6.52 before a critic does it for us (positioning.md §4.2); no UI needed to be honest.
4. **#4 Seeded-violation harness** — E6 requires measured gate catch-rates before E1 sessions run.
5. **#5 Winner archive packaging** — the bundle is what test participants take away and what the registry ping (#9) reports on.
