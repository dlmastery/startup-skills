# Revenue build — Ascent (bottom-up, stage-gated)

Built strictly from the corrected `strategy/market_sizing.md` (the old $5M SOM is dead; plan is **$1.0M ARR at 36 months**, year-1 **$225k run-rate**). Rule: **no jump happens without its named milestone**; each stage's arithmetic is one line a spreadsheet can copy.

## 1. The build table

| Stage | Timing | Units × price = ARR | Arithmetic | Gate milestone that must be TRUE before this stage is planned revenue |
|---|---|---|---|---|
| **0. Paid signal** | Mo 0–6 | 30 pre-orders × $99 + 5 design partners | 30 × $99 = $2,970 one-time | **E1 passed on all three pre-declared legs** (validation/experiment_board.md): ≥5/15 one-command reproductions, ≥3/15 on own private data, ≥8/15 name deploy evidence — with E2 (DSR/ledger) and E6 (gate catch-rates ≥90%/≤10% FP) run first per board sequencing. If E1 fails, revenue plan pauses — fix the proof artifact |
| **1. Beachhead** | Mo 6–18 | 150 Pro × $1,500/yr | 150 × $1,500 = **$225k run-rate** | **E4 passed** (≥30 pre-orders AND ≥5 design partners by day 90; standing floor: paid conversion ≥0.5% of measured active by month 6); **E3 on track** (active/stars ≥5%, >3k actives at month 6) toward the ~9.5k mid-band; paid conversion ≥1.6% of active — inside the 1–5% OSS norm [C32] (market_sizing §5) |
| **2. Plan ($1.0M)** | Mo 18–36 | 285 Pro + 10 Teams + 5 audit-led deals | 285 × $1,500 = $427k; 10 × $9k = $90k; 5 × $100k = $500k → **≈ $1.0M ARR** | (a) active base grown past 3k floor and toward ~9.5k+ via maintained fork + bundles (kill trigger otherwise, market_sizing §6); (b) Team pull-through observed at 2–4% of paying individuals [C31][C18 analog]; (c) enterprise-DD prerequisites shipped (entity, security docs, escrow — use_of_funds block 4) before any of the 3–8 deals close |
| **3. Conditional: $10M** | ~Yr 4–5 | 2,500 Pro + 150 Teams + 40 Enterprise | 2,500 × $1,500 = $3.75M; 150 × $12k = $1.8M; 40 × $110k = $4.4M → **$9.95M** | **Milestone: measured-active base reaches 30–50k** (≈10x; requires the maintained successor to reclaim the repo's growth — it added ~95k stars in 6 months while dormant [A1][C35], so pool growth is plausible but must be *measured*, not assumed); **Team attach ≥5%** of paying Pro (up from 2–4%, evidenced by shared-archive usage); **enterprise DD package proven** by the first 5 reference deals + SOC 2 |
| **4. Conditional: $50–100M** | ~Yr 6–8 | 10,000 Pro + 800 Teams + 250 Enterprise/quant | 10,000 × $1,500 = $15M; 800 × $15k = $12M; 250 × $250k = $62.5M → **≈ $90M** | **Milestone: the corpus effect is demonstrable — E8 passed** (corpus-primed campaigns reach first kept champion in ≥20% fewer experiments than cold, 2 of 2 tasks — A11's own test), because at this stage forks and fast-followers exist and price alone won't hold; quant vertical opened at DataRobot-displacement ACVs ($250k avg [C19]) with attestation product shipped; behavior expansion beyond the core job (the $10B ceiling in market_sizing §1) starting to show in edge-low signups |

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

## 4. MRR waterfall, months 6–18 (the only period worth monthly granularity now)

Assumptions: launch at mo 6 with 30 pre-order converts; net adds ramp 8 → 15/mo as bundles compound (assumption: loop math at 10 bundles/mo × 3 reproductions × 30% signup→paid of reproducers, gtm.md §2 — instrument from day 1); churn 5%/mo mid-band (assumption: devtools comparables 3–7%/mo, see unit_economics.md §4).

| Month | 6 | 9 | 12 | 15 | 18 |
|---|---|---|---|---|---|
| Paying Pro | 30 | 60 | 95 | 125 | **152** |
| MRR | $3.8k | $7.5k | $11.9k | $15.6k | **$19.0k** |
| ARR run-rate | $45k | $90k | $143k | $188k | **$228k** |

Sensitivity a reader can recompute: at 3%/mo churn the mo-18 count is ~168 ($252k); at 7%/mo it is ~138 ($207k). The stage-1 target survives the whole churn band; what it does **not** survive is the active base failing to grow (kill trigger, market_sizing §6).

## 5. What is deliberately absent

No hockey stick: every step past $1.0M carries its named milestone. No usage-revenue forecast pre-measurement. No enterprise revenue before the DD prerequisites are paid for. No "1% of TAM" logic — the plan number is 0.14% of SAM and is built from a countable community [A1] through benchmarked conversion [C32].
