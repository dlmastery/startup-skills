# Value proposition canvas — Ascent

Per major persona (personas.md cards 2, 3, 4; card 1 noted where it diverges). Format: customer side (jobs / pains / gains) → product side (pain relievers / gain creators / products & features), then the ranked top mappings.

---

## 1. Marcus — solo quant researcher (beachhead a)

**Jobs:** 1. Find deployable signal improvements (Sharpe, on his data). 2. Convince *himself* a backtest is real before risking capital. 3. Keep a defensible record of what was tried (for future-self and any allocator).
**Pains:** 1. Multiple-testing self-deception — with enough variants, high in-sample Sharpe is near-guaranteed at true zero [D7]; he knows it and can't police it alone. 2. Purged/embargoed CV per idea is a week of harness work he skips [D8]. 3. Throughput ceiling: 1–3 hand-run experiments/day [A-series Tier 7]; nothing runs while he sleeps.
**Gains:** 1. More audited attempts per week than he could run himself. 2. A number he can trust *because the machinery couldn't cheat*. 3. Campaign memory that survives his own context loss.

**Pain relievers:** 1. Super-folds with purge/embargo as the default protocol, not an aspiration [BRIEF; D8 lineage]. 2. The **full trial ledger a DSR computation requires — discarded experiments included** [D6] (caveat: verify the PoC logged discards; if not, the first fully instrumented run is the deliverable, positioning.md §4.2); roadmap: trial-count-corrected acceptance gate (no published system has one [survey.md §6]). 3. Overnight autonomous campaigns at $3–12/day on BYOK mid-tier routing [B18][B22][A12].
**Gain creators:** 1. **Trial-count and DSR transparency**: every campaign publishes its true trial count and deflated read alongside the raw champion — the 265-experiment EUR/USD run is the methodology showcase, not the headline (founder-reported, A6; positioning.md §4.2). 2. Winner archive = fingerprinted bundle (config, model, run log, ledger summary) per kept champion [BRIEF]. 3. One-command reproduction of any champion.
**Products/features:** OSS core loop + constitution; BYOK Pro (A12): steering copilot + dashboard + SOTA catalog.

## 2. Jae — applied-ML engineer, fintech (beachhead b)

**Jobs:** 1. Ship the quarterly fraud-model improvement (AUC). 2. Survive model-risk review with documentation intact. 3. Beat the free baseline (AutoGluon) by enough to justify their time.
**Pains:** 1. Weeks per cycle on harness rebuild + retroactive documentation (field-wide: 38–45% prep [A39], 75% plumbing [A40]). 2. AutoML can't diagnose *why* performance is bad or read literature about it [A23]. 3. Tracker logs prove nothing — a leaky split logs cleanly [A-series Tier 5].
**Gains:** 1. Iteration weeks returned to judgment work. 2. Documentation that writes itself at experiment time, cited. 3. Literature-grounded ideas they'd never have search-time for (retrieval-grounding measurably beats pure LLM priors: MLE-STAR 64% medals on MLE-bench-Lite vs prior best on the same benchmark [A9]; DeepEvolve [D28]).
**Pain relievers:** 1. The 7-step loop builds and enforces the eval protocol — the step every competitor assumes away [A-series Tier 2]. 2. Diagnose + Ground steps produce deficiency-driven, cited experiment choices [BRIEF]. 3. Audit gates emit review-ready records per commit.
**Gain creators:** 1. Fraud-benchmark bundle where the PoC beat AutoGluon/H2O (founder-reported, reproducible, A6) as the try-it artifact. 2. Champion delta per dollar/day as the reportable outcome metric [BRIEF].
**Products/features:** Same single system; Team tier adds shared winner archives + parallel streams.

## 3. Elena — fund research lead (edge-high)

**Jobs:** 1. Maximize audited research throughput across 40 researchers. 2. Answer compliance/allocators with full decision trails. 3. Retain institutional memory of what-was-tried-and-why.
**Pains:** 1. Enforcement-by-discipline doesn't scale; trial-count bookkeeping per strategy family is aspirational [D6 need]. 2. Pitched backtests can't be reconstructed variant-by-variant. 3. Research memory walks out the door with people.
**Gains:** 1. Every pod's campaign forensically replayable. 2. A trust artifact for regulator/allocator conversations. 3. Cross-pod research prior (what worked where).
**Pain relievers:** 1. Constitution as *organizational* enforcement — the gate that can't be skipped by a tired researcher [A-series Tier 7]. 2. Tamper-evident metrics + cited run logs per experiment [BRIEF]. 3. Honest data-locality split: training/eval data stays on her metal today (local execution [B26–B28], BYOK [A12]); steering currently calls hosted LLM APIs — BYO-endpoint/local-model steering is roadmap (A9; PoC was Claude-family only), and attestations are roadmap (A10).
**Gain creators:** 1. Shared winner archives as the firm's compounding corpus [BRIEF moat 2]. 2. Audit-trail retention exactly on the historically proven enterprise monetization gate (SSO/audit-logs pattern [C18][C31]).
**Products/features:** Enterprise: retention, on-prem, parallel-stream orchestration, attestation roadmap (A10).

**Card-1 divergence (Priya, edge-low):** same system; her top pain reliever is the constitution *supplying* method she doesn't have (leakage taxonomy coverage [D5]) and her gain creator is a reviewer-ready validation record; vocabulary adapts per domain (BRIEF: no lite fork).

---

## 4. Ranked top mappings (the fit hierarchy)

1. **#1 mapping — Pain "I can't police my own rigor at speed" → Reliever "programmatic audit gates + leakage-proof protocol by default."** Strongest because it is externally evidenced on both sides: the pain at published scale (294 leaked papers [D5]; 46% distrust [C3]; CMU's four failure modes [A46]) and the reliever's lineage is settled methodology, not a bet (purge/embargo [D8]; deterministic gates are well-evidenced, while LLM-judged checks are a screen, not a guarantee — design pushes everything possible into the deterministic class [survey.md §4.4]).
2. **#2 — Pain "throughput ceiling of 1–3 experiments/day" → Reliever "overnight monotonic campaigns at ~1–4% of one engineer-day's cost."** Corrected arithmetic: a senior ML engineer at $350–550k/yr fully loaded [C25-derived, market_structure] is ~$1,400–2,200 per working day; steering at $3–60/day [B18][B22] is 0.1–4% of that — the ratio is *better* than previously stated. For the solo payer spending their own money (Marcus): $60/day frontier-token steering would be ~$1,800/mo and untenable against a $100–150/mo product; the design answer is BYOK + mid-tier routing at $3–12/day [B18][A12], with the product fee separate and flat. Capability well-evidenced [B1–B4]; caveat is Goodhart/plateau risk on long campaigns [D30][D31][A4] — which routes back to mapping #1's gates.
3. **#3 — Gain "documentation/audit record writes itself" → Creator "winner archives + reasoning blobs."** The expand-revenue mapping (it is what Elena and David actually pay for [C18 gate pattern]); ranked third because it monetizes only after mappings 1–2 earn individual adoption.
4. **#4 — Gain "literature-grounded ideas" → Creator "Ground step + citation-rigor gate."** Real but supporting: retrieval is commodity [B24]; the differentiated part is the *verification* — ungrounded LLM generation fabricates ~20% of references overall for GPT-4o [D36], 47–77% of reference titles in some CS domains, and 14–95% across 13 models depending on field [D35] — which again collapses into mapping #1.

## Decision

Lead every surface (README, landing page, demo) with mapping #1 phrased as the product ("shows you the evidence it didn't cheat"), with #2 as the economic clincher. Mappings #3–4 appear only on Team/Enterprise pages. The canvas's falsifiable core is mapping #1's conversion power — exactly what the 15-practitioner test measures (BRIEF).
