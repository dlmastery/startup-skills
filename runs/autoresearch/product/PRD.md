# Ascent — Product Requirements Document

> **What this is** — Ascent's single product definition: the closed 7-step loop, 24 core features, the ten principles every feature must map to, and the metrics that judge them.
> **Why it exists** — It arbitrates cuts — §5 kills any feature mapping to no principle — and records the two live enforcement gaps (runner-refused experiments write no ledger row; the metric fingerprint is tamper-evident, not tamper-refusing) so no surface claims them shipped.
> **How to read it** — Read §5, then §10. Attack §9's metrics and the founder-reported +6.52 raw Sharpe, selected from 265+ trials.
> **Depends on / feeds** — Inherits [BRIEF](../BRIEF.md), [survey](../research/survey.md), [personas](../strategy/personas.md); feeds [features_flagship.md](features_flagship.md), [features_prioritized.md](features_prioritized.md), [ux_spec.md](ux_spec.md), [journeys](journeys/beachhead.md).

**Version 1.0 · 2026-08-27 · Status: draft for founder review.** Source tags: [Dn]=research/survey.md, [Bn]=research/capability_table.md, [An]=research/landscape.md+competitors.md, [Cn]=strategy sources; (An assumption id)=ASSUMPTIONS.md. PoC = the founder's `generalized_ml_autoresearch` repo + paper; all PoC metrics are founder-reported, reproducible from the repo, not independently verified (A6).

---

## 1. Executive summary & vision

Ascent is the autonomous ML research operating system: point it at your dataset and your metric, and it runs a literature-grounded, audit-gated hill-climbing campaign for days on your laptop, keeping only strict improvements and handing you the evidence behind every kept result.

**The closed core loop, in the domain's own verbs (the 7-step scientific method, PoC §3.3):**

> **Diagnose** (per-fold/per-regime weakness analysis of the current champion) → **Literature-ground** (retrieve and cite real prior work; verify every citation) → **Hypothesize** (exactly one minimal change + a quantitative prediction) → **Execute** (fixed-duration run under the frozen protocol) → **Analyze** (outcome vs. prediction, discrepancies explained) → **Document** (complete cited reasoning blob) → **Checkpoint** (durable state + keep-or-discard on the fingerprinted composite metric) — and back to Diagnose.

Three programmatic **audit gates** (data integrity, citation rigor, reasoning completeness) sit before every commit; every kept champion ships as a fingerprinted, one-command-reproducible **winner archive**; every discarded attempt lands in the **trial ledger** that makes trial-count-honest statistics computable. The loop closes because the Checkpoint step writes what the next Diagnose step reads: the campaign remembers.

**Vision (10-year, from BRIEF):** every empirical field runs on research operating systems; a lone scientist with a laptop routinely produces publication-grade, fully audited experimental results. Ascent is the OS they run — the git of experimental research.

**What exists today:** a working PoC demonstrated across six domains (financial forecasting, index prediction, tabular classification, medical-imaging OOD, clustering, fraud detection) — founder-reported, A6 — built solo through natural-language steering, with full forensic logs. Champion test Sharpe +6.52 on EUR/USD after 265+ experiments — a figure that, per our own methodology, is an upper bound on the honest number until deflated for the trial count [D6][D7]; the product ships the deflation machinery as a headline feature, not a footnote (positioning.md §4).

## 2. Goals

1. **G1 — Convert skeptics with evidence, not claims.** A practitioner who distrusts AI output (46% of developers do [C3]) can inspect the trial ledger, rerun any champion with one command, and see exactly which gates fired. Target (canonical E1 thresholds): of 15 beachhead practitioners, **≥5/15 reproduce a bundle with one command, ≥3/15 run Ascent on their own private dataset, and ≥8/15 name the evidence that would make them deploy** (BRIEF riskiest-assumption test, per gtm §4).
2. **G2 — Return iteration weeks.** Replace the harness-building and grinding weeks (38–45% of practitioner time is data prep [A39]; 75% plumbing [A40]) with an audited overnight factory: ≥20 gate-passed experiments per overnight session on a 2026 laptop [B26–B28].
3. **G3 — Make rigor the default, not a discipline.** Purged/embargoed splits, verified citations, and complete trial ledgers happen without the user asking — the constitution enforces what a tired human skips [A-series Tier 7].
4. **G4 — Keep the economics BYOK-first (A12).** Pro users bring their own LLM keys; routine steps route to mid-tier models so a 24/7 campaign costs $3–12/day, frontier reasoning reserved for Diagnose/Hypothesize [B18][B22].
5. **G5 — Instrument the moat from day 1 (A11).** Every discard, every gate verdict, every seeded-violation catch-rate flows into the private calibration corpus; bundles ship champions and run logs, never the negative-result ledger. **Known gap (D-REFUSAL-LEDGER): experiments the runner refuses pre-launch currently write no ledger row at all — the refusal ledger (one JSONL of refusals with gate verdicts) is an explicit build item (features_prioritized #2), without which "per-trial gate verdicts" is aspiration, not capture.**

## 3. Non-Goals (real renunciations)

1. **No one-shot paper generation.** Sakana's AI Scientist family owns idea→paper [D13][D14]; Ascent terminates in a kept, audited improvement to *your* metric, never a manuscript. We will not add a "write my paper" button even though the reasoning blobs make it tempting.
2. **No open-ended architecture invention.** Fully open-ended discovery without a fixed evaluation harness is explicitly out of scope (PoC §5.2); Ascent requires a dataset and a scalar metric before it will run at all.
3. **No cloud-scale training.** Frontier-scale pretraining and billion-parameter fine-tuning stay outside the envelope; the niche is the sub-cluster regime a 2026 laptop covers [B26–B28]. Cloud bursting is a Later-tier convenience, not a pivot.
4. **No replacing the researcher's judgment.** The human is the technical lead: they steer, review dashboards, and decide what to deploy. RE-Bench shows humans beat agents 2× at 32-hour budgets on research judgment [B4]; Ascent productizes that division of labor rather than pretending it away.
5. **No "proves it didn't cheat" claims.** Ascent shows you the evidence — deterministic gate verdicts, fingerprints, ledgers, reproduction logs. It never claims proof; LLM-judged checks are labeled as screens, not guarantees [D33][D34] (positioning.md §4.5).
6. **No lite fork.** One adaptive system across the whole user spectrum; the constitution adapts rigor vocabulary per domain (BRIEF).

## 4. Target users & personas

Full spectrum, one system — see strategy/personas.md for the five cards. Summary:

| Persona | Edge | Metric culture | Pays for | Ascent surface |
|---|---|---|---|---|
| **Priya** — comp-bio postdoc | Edge-low | AUROC | (free/OSS→Pro) method she doesn't have: leakage-proof protocol + reviewer-ready record [D5] | Wizard, gates, winner archive |
| **Marcus** — solo quant | Beachhead (a) | Sharpe | Trial ledger + DSR honesty + overnight throughput [D6][D7] | Ledger, acceptance gate, steering |
| **Jae** — fintech ML engineer | Beachhead (b) | AUC | Harness weeks returned + documentation that writes itself [A39][A40] | Diagnose, dashboards, bundles |
| **Elena** — fund research lead | Edge-high | Sharpe/compliance | Organizational enforcement + campaign memory across 40 researchers | Team campaigns, retention |
| **David** — head of model risk | Buyer, payer≠user (year-2+, A10) | SR 11-7 | Attestation exports validators can check without the developer in the room | Attestation (roadmap) |

## 5. First-principles grounding (non-negotiable)

The ten research-methodology principles this product obeys. **Rule: every major feature must map to one or more of these principles; a feature that maps to none gets cut.** All cite research/survey.md.

- **P1 — Leakage must be structurally prevented, not policed.** Leakage corrupted ≥294 published papers across 17 fields [D5]; purged/embargoed splits are settled financial-ML methodology [D8]. Scope honestly: split geometry kills temporal/overlap leakage; the semantic leakage types need gate-layer checks [D5][survey §4.3].
- **P2 — Acceptance must be trial-count-corrected.** A champion selected from N noisy trials is a max-of-N statistic; expected in-sample Sharpe grows with trials even at true zero [D6][D7]; forking paths inflate false positives at machine speed [D9]. **No published system raises its keep/discard threshold with experiment count today [survey §6] — Ascent's roadmap differentiator.**
- **P3 — Literature-grounded search beats blind search.** Pure evolution plateaus; retrieval-grounded iteration sustains gains (DeepEvolve, the cleanest head-to-head [D28]); grounding in accumulated validated results added 11–14% relative — measured on MATH-500 with agent-generated shared results [D17], not on arbitrary domains. Valid only when citations are verified — ungrounded LLMs fabricate 14–95% of references depending on field [D35][D36].
- **P4 — Keep/discard tree search is the best-performing engine — and the one most needing guards.** AIDE-lineage keep-if-better search tops MLE-bench [D23][D24][D39]; greedy single paths hit local optima [A4]; proxy optimization helps then hurts past a threshold [D31]. Monotonicity is guaranteed only in the proxy, never the truth.
- **P5 — Deterministic gates over LLM judgment.** Agents cannot assess their own results (42% experiment failure measured [D20]; six recurring failure modes [D21]); LLM judges are reliable-but-not-valid [D33][D34]. Every check that can be mechanical (citation exists, split geometry, hash match, ledger completeness, budget debited [D32]) must be; LLM-judged checks are screens.
- **P6 — Seed and sampling variance is signal-sized.** Variance from seeds and data sampling reorders leaderboards [D11]; seed scans move CIFAR-10 accuracy more than many published improvements [D12]. Distributional evidence (multi-seed, CPCV paths [D8]) is the fix, budgeted against laptop compute.
- **P7 — Contamination awareness: private data is the clean test.** Public benchmarks are contaminated at up to 45% [D37][D38]; an agent's underlying LLM may "know" published solutions. Ascent's user-owned-dataset use case is the defense — and the reason PoC public-benchmark results are framed cautiously.
- **P8 — Chunked, checkpointed autonomy matches the reliability curve.** Frontier 50%-time-horizon is ~12 h and doubling every ~4 months [B1][B2]; agents beat humans 4× at 2-h budgets and lose 2× at 32-h [B4]. Many short verified experiments with durable checkpoints — never one heroic multi-day run.
- **P9 — Reproducibility is a product primitive, not an appendix.** Independent reproduction is the single action that moves results from "founder-reported" to "evidence" [survey §7]; every kept champion must be rerunnable by a stranger with one command.
- **P10 — Cost-routed autonomy.** Cost per unit of capability falls ~40–50×/yr; frontier list prices are flat-to-rising [B16–B19]. Frontier tokens for Diagnose/Hypothesize reasoning, mid-tier for routine steps, BYOK by default (A12) — that is what makes $3–60/day, under 10% of one ML engineer-day [B22][C25], structurally true.

## 6. Core feature set (superset), by phase of the core loop

Tags: each feature carries its principle(s). Fuller detail in features_flagship.md and features_prioritized.md.

**Phase 0 — Instantiate (before the loop runs)**
1. Constitution instantiation wizard — 12-step guided setup emitting the domain-adapted 52-section constitution (PoC skill flow) [P1][P5][P7].
2. Constitution editor — section-blocked editing (Startup/Safety §1–8, Philosophy §9–14, Design rules §15–22, 7-step §23–29, Gates §30–35, Metric §36–42, Harness §43–48, Steering §49–52 per paper App. A.1), with invariant sections locked against mid-run edits [P4][P5].
3. Super-fold split builder — visual purge/embargo/label-horizon configuration over `SuperFoldSplit`/`WalkForwardSplit`, with programmatic zero-overlap verification [P1].
4. Composite metric designer — expression DSL or callable, SHA-256-fingerprinted at campaign start. **Enforcement status (D-A): the fingerprint is logged today — tamper-evident; runner-level refusal of mid-run metric/invariant rewrites is [ROADMAP] (features_prioritized #24), since the PoC logs the fingerprint but never compares it** [P4][P2].
5. Private-dataset onboarding — local ingestion, hashing, leakage-taxonomy checklist [D5], contamination advisory for known public sets [P7][P1].
6. SOTA catalog — curated `sota_catalog.yaml` of literature-grounded backbones per task family; subscription keeps it current (paid layer) [P3].

**Phase 1–3 — Diagnose · Ground · Hypothesize**
7. Deficiency diagnosis engine — per-fold/per-regime champion weakness analysis feeding hypothesis selection [P4][P3].
8. Verified literature grounding — retrieval over OpenAlex/Semantic Scholar/arXiv [B24] with Gate 2 citation verification against live indexes [P3][P5].
9. Hypothesis contract — exactly one minimal change + quantitative prediction, refused by `core/reasoning.py` if incomplete [P5][P4].

**Phase 4–5 — Execute · Analyze**
10. Fixed-duration audited runner — one experiment per invocation; refuses to launch on missing/failed pre-run annotation, split overlap, or unlogged GPU pre-flight (PoC runner invariants) [P1][P5][P8].
11. BYOK model routing — user keys; frontier tier for Diagnose/Hypothesize, mid-tier for Execute/Document routine; per-campaign spend meter [P10] (A12).
12. Multi-seed / CPCV confirmation runs — champion candidates confirmed distributionally before promotion [P6][P2]. *[planned — Next tier, D08; not in the PoC]*
13. Goodhart divergence monitor — tracks composite-proxy vs. each raw target metric; alerts on divergence [survey §6] [P4]. *[planned — Next tier, D08; not in the PoC]*

**Phase 6–7 — Document · Checkpoint**
14. Reasoning blob + three audit gates — deterministic checks first (Gate 1 data integrity, Gate 2 citation rigor), completeness floors on Gate 3, all verdicts logged [P5][P3][P1].
15. Trial ledger — append-only record of **every** experiment including discards, with per-trial gate verdicts; the input DSR needs [D6] and the raw material of the calibration corpus (A11) [P2]. **Build items (D-REFUSAL-LEDGER): (a) completeness audit of the PoC's discard logging; (b) the refusal ledger — runner-refused experiments currently write no row; a dedicated refusals JSONL closes it and feeds the A11 corpus and gate-scorecard measurement (E6).**
16. Trial-count-corrected acceptance gate — keep/discard threshold rises with ledger count (deflated-composite analogue); DSR reported next to every raw champion metric [P2]. *Roadmap differentiator: no published system has one [survey §6].*
17. Crash-proof checkpointing — 5-minute reasoning + post-experiment checkpoints to a self-contained markdown state file; any fresh session resumes exactly (PoC §3.4) [P8].
18. Winner archive / champion bundle — fingerprinted, self-contained: config, model, code snapshot, 14-section audit report, reasoning blob, reproduction log, notebook (PoC `winner_archive.py`) [P9].
19. One-command reproduction — `ascent reproduce <bundle>` reruns any champion and diffs fingerprints [P9].

**Cross-loop — Observe · Steer · Share**
20. Campaign dashboard — sortable experiment table, per-fold heatmap, champion panel, equity/metric curves, exports, live status (paper App. B.1 table) [P4][P9].
21. Stall detector — surfaces diminishing-return patterns with suggested steering prompts (App. B.3) [P4][P8].
22. Steering console — high-level natural-language direction ("pivot", "self-reflect on stall") written durably into the steering log; phone-usable [P8].
23. Team parallel campaigns — multiple streams, shared winner archives, org-wide trial ledgers (Team tier) [P2][P9].
24. Attestation & model-risk export — validator-facing evidence pack (year-2+ roadmap, A10; never claimed as shipped) [P5][P9].

## 7. Data & learning flywheel

**Per user/campaign, the durable record accumulates:** `experiment_log.jsonl` (every trial, kept and discarded, with seed/config/commit), `reasoning_annotations.json` (cited blobs), gate verdict log, checkpoint files, steering log, winner archives, per-prediction CSVs. This is the user's asset — local, exportable, theirs.

**Across users, the private calibration corpus compounds (A11 — the moat is the corpus, not the constitution file):**
1. **Discarded-trial ledgers** (opt-in telemetry on hosted tiers; never shipped inside public bundles) → what-worked-where priors per domain → better Diagnose/Hypothesize proposals → higher gate-pass and keep rates → more campaigns run → more ledger.
2. **Gate catch-rates on seeded violations** — Ascent deliberately injects known violations to measure true/false-positive rates per gate (the unmeasured quantity the survey flags [survey §7c]) → published gate scorecards → trust → adoption.
3. **The reproduction network** — every public bundle reproduced by a stranger is a trust datum the SOTA catalog and marketing can cite.

Flywheel rule (from A11): champions and run logs ship in bundles; the negative-result ledger never does. Instrumentation of discards and seeded violations starts day 1 or the moat doesn't exist (positioning.md §5.4).

## 8. Oversight, safety, privacy, compliance

1. **Data locality, stated honestly (A9):** training/eval data never leaves the user's machine — execution is local by architecture. Steering **currently calls hosted LLM APIs**, so prompts and telemetry leave unless routed to an approved endpoint; BYO-endpoint and local-model steering are roadmap. Every surface states this split before the user discovers it.
2. **BYOK key handling (A12):** user LLM keys stored in OS keychain, never transmitted to Ascent servers; spend meter reads provider usage APIs client-side.
3. **Human oversight is a design requirement, not a caveat:** every independent evaluation concludes current systems need it [D20][D21]. The steering console, stall detector, and daily-review dashboard are the oversight surface; the product never auto-deploys a model or auto-trades a signal.
4. **Immutable protocol under autonomy — current status stated honestly (D-A):** the design intent is that the agent optimizes inside the sandbox and cannot edit the sandbox (PoC rule 9). Today the composite metric and invariants are **tamper-evident** — fingerprinted and logged, so any mid-run rewrite is detectable after the fact — but the runner does not yet *compare* the live config against the campaign-start fingerprint and refuse divergence. That refusal check is a committed build item (features_prioritized #24), not a shipped guarantee; no surface may claim "cannot rewrite" until it lands.
5. **Tamper-evidence scope:** SHA-256 fingerprints make records tamper-evident, not Goodhart-proof or correct [survey §6]; copy discipline enforced product-wide (positioning.md §4).
6. **High-stakes domains:** finance/health outputs carry a standing "research evidence, not deployment advice" banner; regulated-vertical attestations are Enterprise roadmap (A10), and nothing in-product claims certification before it exists.
7. **Telemetry consent:** corpus contributions (discard ledgers, gate stats) are opt-in, documented, and separable from the OSS core.

## 9. Success metrics

**Outcome first (the domain's real "did it work" measure):**
1. **Champion metric delta per dollar-day at zero leakage incidents** (BRIEF's unit of value), reported per campaign with trial count and deflated statistic alongside.
2. **Independent reproductions:** count of bundles rerun by someone other than their author, passing the tolerance policy (metrics within pre-declared epsilon bands + config/data fingerprint equality). North-star trust metric; canonical E1 targets: ≥5/15 reproduce, ≥3/15 on own private data, ≥8/15 name deploy evidence (G1).
3. **Deployment actions:** % of kept champions the user acts on (deploys, trades, submits, publishes) within 60 days — the riskiest-assumption conversion.
4. **Gate integrity:** measured catch-rate on seeded violations per gate (target: published scorecard by GA); false-positive rate low enough that <10% of gate rejections are overridden.

**Engagement second:** gate-passed experiments per active campaign-night (target ≥20); campaigns resumed after crash without manual repair (target ≥99%); weekly steering interactions per active campaign (healthy band 3–10 — too low means abandoned, too high means babysitting); stall-detector prompts acted on within 24 h.

**Business third:** OSS installs → activated first campaign (wizard completion); free→Pro conversion on BYOK tier ($100–150/mo hypothesis, A8/A12); Team seats via shared-archive pull (Cursor bottom-up pattern [C17]); corpus size (opted-in ledger-months) as the leading moat indicator.

## 10. Decision — Recommended next 3

1. **Build the trial ledger (completeness audit + refusal ledger) + offline DSR reporting before any new capability** (features 15–16 here; trust-test-kernel scope = features_prioritized #1, #2, #7 — the preventive acceptance gate itself is Next #25): it is the beachhead persona's stated demand (Marcus card), the positioning's offensive move (§4.6), and the prerequisite of the A11 corpus. Without it, +6.52 stays an unlabeled upper bound.
2. **Run the 15-practitioner reproduction test with the existing EUR/USD and fraud bundles** (G1) before building Team features — it validates or kills the trust thesis for $0 of engineering.
3. **Ship the instantiation wizard + split builder as the OSS front door** (features 1, 3): they turn the PoC's 12-step skill into the activation funnel and make P1 the first thing every new user experiences.
