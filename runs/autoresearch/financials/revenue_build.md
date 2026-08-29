# Revenue build — Ascent (bottom-up, stage-gated)

> **What this is** — the bottom-up revenue plan, stage by stage, with the milestone that must be true before each stage counts as planned revenue.
> **Why it exists** — the pack already killed a $5M SOM built by converting GitHub stars into payers; this is the corrected arithmetic. Its month-by-month waterfall is also what moved the 150-paying milestone from month 18 to roughly month 20-21: when the numbers stop following from their own assumptions, the date moves rather than the assumptions being quietly inflated.
> **How to read it** — section 4's recurrence copies straight into a spreadsheet; a skeptic should attack the gross-adds ramp (the fragile input, not churn) and the $500k of audit-led enterprise revenue inside the $1.0M plan.
> **Depends on / feeds** — inherits from [../strategy/market_sizing.md](../strategy/market_sizing.md), [pricing.md](pricing.md), [../validation/experiment_board.md](../validation/experiment_board.md); feeds [use_of_funds.md](use_of_funds.md), [unit_economics.md](unit_economics.md).

Built strictly from the corrected `strategy/market_sizing.md` (the old $5M SOM is dead; plan is **$1.0M ARR at 36 months**; the 150-paying ≈ **$225k run-rate** target is re-dated by the §4 waterfall to **~mo 20–21** — i.e., "year 1" counts from GA at mo 6, not from day 0). Rule: **no jump happens without its named milestone**; each stage's arithmetic is one line a spreadsheet can copy.

## 1. The build table

| Stage | Timing | Units × price = ARR | Arithmetic | Gate milestone that must be TRUE before this stage is planned revenue |
|---|---|---|---|---|
| **0. Paid signal** | Mo 0–6 (E1 sessions weeks 10–13; E4 pre-order window ~day 110–120, per the validation calendar) | 30 pre-orders + 5 design partners at the **$99/mo lifetime price lock** (pricing.md §7 — a locked subscription rate, not a deposit) | 30 × $99/mo = $2,970 MRR at activation ≈ **$35.6k ARR** contribution; cohort billed $99/mo forever | **E1 passed on all three pre-declared legs** (validation/experiment_board.md): ≥5/15 one-command reproductions, ≥3/15 on own private data, ≥8/15 name deploy evidence — with E2 (DSR/ledger) and E6 (gate catch-rates ≥90%/≤10% FP) run first per board sequencing. If E1 fails, revenue plan pauses — fix the proof artifact |
| **1. Beachhead** | Mo 6–21 | 150 Pro (≤30 at the $99/mo lock, rest at $125/mo) | ~136 × blended ≈ $16.6k MRR ≈ $199k at mo 18; **150 paying ≈ $19.4k MRR ≈ $233k run-rate at ~mo 20–21** — the honest date from the §4 waterfall; the prior mo-18 claim did not survive its own stated assumptions and is retired | **E4 passed** (≥30 pre-orders AND ≥5 design partners by ~day 120, re-dated per validation calendar; standing floor: paid conversion ≥0.5% of measured active by month 6); **E3 on track** (active/stars ≥5%, >3k actives at month 6) toward the ~9.5k mid-band; paid conversion ≥1.6% of active — inside the 1–5% OSS norm [C32] (market_sizing §5) |
| **2. Plan ($1.0M)** | Mo 21–36 | 285 Pro + 10 Teams + 5 audit-led deals | 285 × $1,500 = $427k; 10 × $9k = $90k; 5 × $100k = $500k → **≈ $1.0M ARR** | (a) active base grown past 3k floor and toward ~9.5k+ via maintained fork + bundles (kill trigger otherwise, market_sizing §6); (b) Team pull-through observed at 2–4% of paying individuals [C31][C18 analog]; (c) enterprise-DD prerequisites shipped (entity, security docs, escrow — use_of_funds block 4) before any of the 3–8 deals close |
| **3. Conditional: $10M** | ~Yr 4–5 | 2,500 Pro + 150 Teams + 40 Enterprise | 2,500 × $1,500 = $3.75M; 150 × $12k = $1.8M; 40 × $110k = $4.4M → **$9.95M** | **Milestone: measured-active base reaches 30–50k** (≈10x; requires the maintained successor to reclaim the repo's growth — it added ~95k stars in 6 months while dormant [A1][C35], so pool growth is plausible but must be *measured*, not assumed); **Team attach ≥5%** of paying Pro (up from 2–4%, evidenced by shared-archive usage); **enterprise DD package proven** by the first 5 reference deals + SOC 2 |
| **4. Conditional: $50–100M** | ~Yr 6–8 | 10,000 Pro + 800 Teams + 250 Enterprise/quant | 10,000 × $1,500 = $15M; 800 × $15k = $12M; 250 × $250k = $62.5M → **≈ $90M** | **Milestone: the corpus effect is demonstrable — E8 passed** (corpus-primed campaigns reach first kept champion in ≥20% fewer experiments than cold, 2 of 2 tasks — A11's own test), because at this stage forks and fast-followers exist and price alone won't hold; quant vertical opened at DataRobot-displacement ACVs ($250k avg [C19]) with attestation product shipped; behavior expansion beyond the core job (the $10B ceiling in market_sizing §1) starting to show in edge-low signups |

**Team ACV steps, one basis line each:** stage 2 **$9k** = A8 base (~$750/mo, 5 seats included, minimal hosted usage — first Teams are converted Pro groups); stage 3 **$12k** = base + seat growth (2–4 seats beyond the included 5 at $50–100/seat/mo ≈ +$2–4k/yr, the W&B per-user corridor [C18]); stage 4 **$15k** = base + seats + hosted-run usage attach (1–2 managed campaigns/mo at $175–810 billed each, unit_economics §2, ≈ +$2–10k/yr as usage matures).

Stages 3–4 are the **conditional expansion story** — explicitly not the plan of record. The fundable claim is: stage 2 is achievable on benchmarks already cited; stages 3–4 each name the single measurable thing that bends the curve, so a diligencing investor can track whether the bend is earned.

## 2. Expansion revenue layers (this domain's seats/siblings/premium)

1. **Pro → Team pull** (the seat layer): shared winner archives + hosted runs require Team — the proven gate line [C31][C18]. Modeled at 2–4% of paying individuals converting a team (stage 2), rising to 5%+ only with observed attach (stage 3 gate).
2. **Hosted-run usage** (the metered layer): Team+ managed campaigns billed at cost × 1.3–1.5 (pricing.md §4). Not in the table above — deliberately: usage revenue is real but unforecastable pre-launch (Devin's own customers 20x their budgets [C21]); treat as upside inside Team ACV, revisit after 10 measured campaigns.
3. **Catalog/DSR subscriptions** (the premium content layer): included in Pro now; a separately billable attestation/DSR service appears only in Enterprise ACV (stage 2+).
4. **Per-campaign quant deals** (the outcome layer, yr 3+): funds pay per validated edge, dataset-budget style ($100–250k [C37][C38]). Zero in plan; the honest version of "outcome pricing" waits for reference customers.

## 3. Which GTM motion carries each stage

| Stage | Carrying motion (gtm.md) |
|---|---|
| 0–1 | OSS community + reproducible-champion loop + pre-orders (channels 1–3); founder-led, ~$0 cash CAC |
| 2 | Same, plus bottom-up Team pull (channel 4) and the first inbound audit-led deals (channel 5, year-2+ only) |
| 3 | Loop at scale (bundles × reproductions instrumented), first devrel/support hires carry community; founder moves to Team/Enterprise |
| 4 | Named enterprise motion (first AE/SE pair — a seed-round hire, not this round), quant-vertical specialist |

## 4. MRR waterfall, months 6–21 (rebuilt so the table follows from its own assumptions)

**Revision note (critic round 2):** the prior table's counts (60/95/152 at mo 9/12/18) did not follow from the stated adds-and-churn assumptions — recomputing them honestly gives the numbers below, and the 150-paying milestone moves from mo 18 to **~mo 20–21**. The file's own rule is spreadsheet-reproducibility; the milestone moves rather than the assumptions being quietly inflated.

Recurrence (copy into a spreadsheet directly): `N(m+1) = N(m) × (1 − churn) + adds(m+1)`, with:
- Start: 30 lifetime-lock users at mo 6 (the E4 pre-order cohort, billed **$99/mo forever** per pricing.md §7; all later adds bill $125/mo).
- Gross adds: 8 in mo 7, +1/mo to 15 at mo 14, flat 15 after (assumption: bundle loop scaling — gtm §4 targets 10→30 published bundles/mo by day 180 × ≥3 reproductions each × ~15–20% reproducer→paid; instrument the three loop numbers from day 1).
- Churn 5%/mo plan case (assumption: devtools comparables band 3–7%/mo, unit_economics §4). Locked-cohort remainder at month m = 30 × 0.95^(m−6).
- MRR = locked × $99 + (N − locked) × $125.

| Month | 6 | 9 | 12 | 15 | 18 | 21 |
|---|---|---|---|---|---|---|
| Paying (total) | 30 | 51 | 78 | 109 | 136 | **160** |
| — of which $99 lock | 30 | 26 | 22 | 19 | 16 | 14 |
| MRR | $3.0k | $5.8k | $9.2k | $13.1k | $16.6k | **$19.6k** |
| ARR run-rate | $36k | $69k | $111k | $158k | $199k | **$235k** |

**150 paying is crossed at ~mo 20** (152 at mo 20 in the plan case); the $225k run-rate arrives ~mo 20–21. Sensitivity on churn alone: at 3%/mo, 150 arrives ~mo 18 ($228k+); at 7%/mo, ~mo 24. The stage-1 milestone is therefore dated **mo 21** (plan case, stated conservatively). What the plan does **not** survive is the active base failing to grow — the adds ramp, not the churn rate, is the fragile assumption (kill trigger, market_sizing §6).

## 5. What is deliberately absent

No hockey stick: every step past $1.0M carries its named milestone. No usage-revenue forecast pre-measurement. No enterprise revenue before the DD prerequisites are paid for. No "1% of TAM" logic — the plan number is 0.14% of SAM and is built from a countable community [A1] through benchmarked conversion [C32].
