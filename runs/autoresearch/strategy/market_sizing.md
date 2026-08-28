# Market sizing — Ascent (bottom-up first, arithmetic shown)

All ARR figures annualized. Every factor carries a source tag or an explicit (assumption: basis) flag. Analyst top-down numbers appear only in §4 as a sanity check, with their skepticism notes attached. **Revision note (critic round 1):** the prior version of this file sized SOM off raw GitHub stars and put the job filter in SAM instead of TAM — both category errors, both corrected below; the old $5M plan number does not survive the correction.

## 1. TAM — tiered, with the job filter applied at the TAM layer

The job is "dataset + scalar metric, grind it upward with audited rigor." Only people who *do that job repeatedly* are TAM; the wider practitioner population is a behavior-expansion ceiling, not TAM.

**Core TAM (job-filtered):**

| Layer | Units | Price/yr | Arithmetic | Layer TAM |
|---|---|---|---|---|
| Metric-grinding individuals | 500k–750k = quant researchers ~30–80k [C36, flagged inference] + applied-ML engineers with recurring supervised-metric optimization work (assumption: 10–15% of the 3–10M professionally active ML/DS pool [C7 est], basis: the fraction doing repeated metric optimization rather than plumbing/analytics, consistent with data prep dominating the remaining time budget [A39]) | $1,800 (mid of the normalized $100–200/mo AI power-user tier [C23]) | 625k mid × $1,800 | **$0.9–1.35B** |
| Quant funds (edge budgets) | ~1,000 quant-focused funds — midpoint of "several hundred to ~2,000" [C36, flagged inference], not the upper bound | $150k (mid of single-alternative-dataset spend $100–250k/yr [C37]) | 1,000 × $150,000 | **$0.15B** |
| Enterprise compliance/platform | ~4,000 orgs paying six figures for ML platforms today (DataRobot 850+ [A27], H2O, W&B 1,400+ paying orgs [C34], cloud AutoML; (assumption: 4k ≈ deduplicated union)) | $250k (DataRobot displacement band [C19][A27]) | 4,000 × $250,000 | **$1.0B** |

**Core TAM ≈ $2.0–2.5B/yr — call it $2–3B.** Still ample: a $2B+ core TAM supports a venture-scale outcome without any behavior-change bet.

**Expansion ceiling (labeled, not TAM):** if research-OS behavior spreads to the full 3–10M practitioner pool + 2–3.5M addressable empirical researchers [C7][C5 slice], the ceiling is ~$10B. Cite only as ceiling.

## 2. SAM — reachable by this product and motion

Filters on core TAM: self-serve/English-first reach, laptop-envelope compute (tabular/GBM/small-model, the validated regime [B26–B28]), no sales force in years 1–2.

1. Individuals: (assumption: ~half of core-TAM individuals reachable self-serve, basis: language + platform + payment-rail reach) → 250k–400k × $1,500 = **$0.4–0.6B**.
2. Quant funds procurable by a small vendor: 300–1,000 × $50–150k = **$15–150M** (year-2+; see vendor-DD note in market_type.md).
3. Enterprise compliance early adopters: (assumption: 500 orgs × $200k, basis: audit-requirement subset of platform payers per the W&B enterprise-gate pattern [C18]) = **$100M**, year-2+.

**SAM ≈ $0.5–0.85B; plan on $0.7B.**

## 3. SOM — obtainable in 36 months, built from the corrected funnel

Demand denominator: the countable community — **94.8k stars / 13.4k forks on the dormant Karpathy autoresearch repo [A1]** (52 open issues [A1]; ~185 open issues+PRs combined [C35]). The correction the critics caught: **stars are not active users.** Conversion benchmarks [C32] apply to *active* users; a stars→active stage was missing.

| Funnel stage | Factor | Source/flag | Result |
|---|---|---|---|
| OSS demand pool | 94,800 starred users | [A1] | 94,800 |
| → ever-active users | 5–15% (assumption: basis — Kaggle's active competitors are historically <5% of registered accounts [C6]; a starred repo's clone-and-run rate is somewhat higher than a platform's compete rate, so 5–15% band) | (assumption, [C6] analog) | 4,700–14,200 |
| → paying individuals | 1–5% of ACTIVE users convert to hosted/paid | Scarf OSS benchmark [C32] | 47–711 |
| × individual price | $1,200–1,800/yr (BYOK Pro at $100–150/mo, A12, inside [C23] corridor) | [C23][A12] | **$0.06M–$1.3M ARR** — plan band ≈ **$0.1–1M** |
| Team pull-through | 2–4% of paying individuals convert a team at $9k/yr (A8) | (assumption: GitLab/W&B expand pattern [C31][C18]) | 1–28 teams → **$10k–$0.26M** |
| Quant/enterprise deals (year 2–3 only) | 3–8 audit-trail-led deals at $100k avg [C19]; gated on legal entity + security posture (market_type.md §4) | [C19] | **$0.3M–$0.8M** |

**Corrected SOM (36 mo) = $0.4M–$2.4M ARR. Plan number: $1.0M ARR.** Midpoint arithmetic in one line:
**94.8k × 10% active × 3% paid × $1,500 = $427k, + 10 teams × $9k = $90k, + 5 deals × $100k = $500k → ≈ $1.0M ARR.**

Two honest notes: (1) the old $5M plan was built on converting stars directly — a ~10× overstatement; (2) the pool is not static — the repo gained ~95k stars in 6 months while *dormant* [A1][C35]; a maintained successor plausibly grows both the pool and the active fraction. Treated as upside, not plan.

## 4. Top-down sanity check (with the required skepticism)

1. AutoML analysts: $1.9–2.6B (2025) → $11–16B (2030), 42–44% CAGR [C8]; base years span 3× and 42–53% CAGRs are classic analyst-mill inflation [C8 note]. Honest read: ~$1–3B today.
2. MLOps analysts: $1.8–4.0B (2025) [C11][C12], same 2×+ spread; real-money datum: CoreWeave paid ~$1.7B for W&B's 1,400 orgs ≈ $1.2M/customer-org [C34].
3. Agentic AI: use the $25–55B-by-2030 band, not Gartner's $1.08T relabeling [C13–C15 note].
4. Check: core TAM $2–3B ≈ today's AutoML+MLOps analyst bases — plausible for a category that displaces slices of both plus an individual layer analysts don't model (Cursor's $2B ARR proves that layer exists [C17]). SOM plan $1.0M = 0.14% of SAM. No "1% of $100B" reasoning anywhere in this file.

## 5. Beachhead sized separately (the only number that matters for the next 12 months)

Beachhead = individual quant researchers + applied-ML engineers (A3). Corrected framing: converting on *stars* flattered the plan — against the active base, targets must be modest and benchmark-honest. **Year-1 target: 150 paying individuals × $1,500 = $225k ARR run-rate.** That requires ~1.6% of the ~9.5k mid-band active users — inside the 1–5% norm [C32], achievable but not automatic; the prior claim that year-1 needed "below-benchmark" conversion was wrong (it was measured against stars). Growth beyond that comes from growing the active base (maintained fork, champion bundles), not from assuming above-benchmark conversion.

## 6. Decision and recalibrated kill trigger

Commit to: core TAM $2–3B / SAM $0.7B / SOM(36mo) plan $1.0M ARR (range $0.4–2.4M) / year-1 beachhead $225k run-rate. **Kill trigger (recalibrated to the corrected funnel):** measure active users directly (cloned + ran a campaign within 90 days). If after 6 months of maintained-successor work EITHER paid conversion is <0.5% of measured active users (bottom half of [C32]) OR the active base itself cannot be grown past ~3,000 despite maintenance and published bundles, the open-core model (A2) is wrong — escalate to ASSUMPTIONS.md before building enterprise features. (The old 0.3%-of-stars trigger would have fired on a perfectly healthy funnel; retired.)
