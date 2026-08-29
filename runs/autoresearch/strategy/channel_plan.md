# Channel plan & channel economics — Ascent

> **What this is** — the channel map by segment, plus what a GTM narrative omits: the computed margin stack per channel, list price down to contribution, at the $125/mo Pro price.
> **Why it exists** — [gtm.md §3](gtm.md) names channels and hypothesizes CAC but never computes what each channel *takes*. That gap is how a company signs a reseller at a 25% take on a $1,500 ACV, finds the partner cannot fund a salesperson on $375/year of margin, and burns two quarters proving it.
> **How to read it** — §3 map, §4 arithmetic, §5 verdicts. Attack the delivery-cost basis in §2 and the two unsourced take-rate assumptions (rows C6, C7).
> **Depends on / feeds** — inherits [gtm.md](gtm.md), [petal_diagram.md](petal_diagram.md), [../financials/pricing.md](../financials/pricing.md), [../financials/unit_economics.md](../financials/unit_economics.md); feeds [sales_roadmap.md](sales_roadmap.md).

---

## 1. Division of labour with gtm.md

| Question | Answered in |
|---|---|
| Which channels, in what order, with what 90-day motion? | [gtm.md](gtm.md) §1–§4 |
| Which adjacent budget does each channel reach into? | [petal_diagram.md](petal_diagram.md) §3 |
| **What does each channel cost us per dollar of list price, and does it clear?** | **this file, §4–§5** |
| Who signs, and through which map do we reach them? | [sales_roadmap.md](sales_roadmap.md) |

Nothing here overrides [gtm.md](gtm.md)'s channel ordering. This file adds the veto: a channel that fails §5's viability rule does not open, whatever the narrative says about it.

---

## 2. The delivery-cost basis (so every row below is recomputable)

All figures per Pro user per month, from [../financials/unit_economics.md §1](../financials/unit_economics.md):

| Line | Best case | Worst case | Basis |
|---|---|---|---|
| LLM token COGS | **0** | **0** | BYOK by construction (A12): the user's steering loop runs at $3–12/day on their own key [B18][B20][B22] |
| Steering-copilot inference (house-metered, capped) | 2.00 | 6.00 | (assumption: capped allowance ≈ 0.5–1.5M tok/mo on Haiku-4.5/Flash-tier at $1/$5 and $0.75/$3.75 per Mtok [B18][B20]) |
| Hosting/infra (dashboards, catalog, bundle storage) | 2.00 | 5.00 | (assumption: standard SaaS infra at prosumer scale; bundles are MB-scale) |
| Support, imputed founder-hours at 150 users | 3.80 | 7.60 | imputed at $53/hr, the pack-wide rate (founder comp $110k/yr ÷ 2,080 hr) |
| **Delivery cost excluding payment processing** | **$7.80** | **$18.60** | sum of the above |
| Payment processing, when Ascent is merchant of record | — | 2.9% + $0.30 | (assumption: standard card rails) |

**Every stack below uses the worst case, $18.60.** Direct self-serve therefore reconciles exactly to the published 82.0% fully-loaded margin at 150 users: `(125 − 3.93 − 18.60) / 125 = 82.0%`. At 300+ users support amortizes to $3.80 and every row improves by ~3 points.

---

## 3. Channel map by segment

| Segment | Discover | Evaluate | Buy | Expand |
|---|---|---|---|---|
| **Marcus — solo quant** (card 2; petal P3 ∩ P4) | Answered issue thread on the dormant autoresearch repo; the bridge write-up; r/quant, QuantConnect, Numerai (plan-B channel) | `ascent reproduce` on a DSR-honest public bundle, then a private-dataset run on his own key | Self-serve card, C1 — no call, no procurement | Second seat when a partner joins → Team trigger |
| **Jae — applied-ML engineer, fintech** (card 3; petals P1, P2, P4) | The fraud-vs-AutoGluon bundle; AutoGluon/H2O issue trackers | Rerun the fraud bundle on a laptop; hand the audit trail to a model-risk reviewer | Self-serve card or manager-approved expense at $125/mo, C1 | Team when shared archives are needed; security review is the gate, not price |
| **Priya — domain scientist** (card 1; petal P5-adjacent) | Published bundle content ranking for "\<dataset\> SOTA"; academic word of mouth | One-command reproduction of a public bundle | **Deliberately does not buy** — served by the free OSS core ([../financials/pricing.md §5.1](../financials/pricing.md)); her conversion metric is reproductions and citations | Becomes a bundle publisher, feeding C5 |
| **Elena — head of research, fund** (card 4; petal P6) | Bottom-up: one of her researchers already runs Ascent and a winner archive lands in a review meeting | Replay a winner archive against an internal strategy review; data-locality diagnostic | Team, C8 — sales-assist only, never cold | Enterprise, **year-2+**, gated on vendor DD (A5) and BYO-endpoint steering **[ROADMAP]** (A9) |
| **David — model risk, regulated enterprise** (card 5) | Only as the internal recipient of a team's winner archives | — | **No channel exists today.** A pseudonymous solo founder fails vendor-risk DD ([market_type.md §4](market_type.md)) | — |

---

## 4. Channel economics — the stack, list → net → contribution

Pro list = **$125/mo**. Team base = **$750/mo**. Enterprise = **$100k+/yr, year-2+, not sold now**.

| # | Channel | Take / discount | Net to Ascent | − delivery | **Contribution** | **% of list** | Cost to acquire | Time to first revenue |
|---|---|---|---|---|---|---|---|---|
| **C1** | **Direct self-serve** (site + Stripe) | payment 2.9% + $0.30 = $3.93 | $121.07 | 18.60 | **$102.47** | **82.0%** | $0 cash; blended founder-time CAC $150–300 (assumption, [../financials/unit_economics.md §3](../financials/unit_economics.md)) | **Immediate** — the day checkout opens |
| **C2** | Direct **annual prepay** ($1,250/yr, ~2 mo free) | discount $250/yr + payment $36.55/yr → effective $104.17/mo realized, $3.05/mo processing | $101.12 | 18.60 | **$82.52** | **66.0% of list** (79.2% of realized) | same as C1 | Immediate, and **$1,213 cash upfront** — collapses the 2.7-month payback to day 0 |
| **C3** | **$99 founding-cohort lifetime lock** (≤35 users, [../financials/pricing.md §7](../financials/pricing.md)) | $26/mo price lock + payment $3.17 | $95.83 | 18.60 | **$77.23** | **78.0% of $99** | included in the trust-test cost | Immediate at the day-110–120 window; ≤$11k/yr foregone at full retention |
| **C4** | OSS community organic → C1 | none (feeds C1's stack) | as C1 | — | as C1 | 82.0% | **$150–250/convert**: 140 founder-hrs × $53/hr ≈ $7,400 against the first 30–50 converts; falls toward ~$0 as content compounds | ~90 days (community standing must precede any ask) |
| **C5** | Bundle / content loop → C1 | none (feeds C1's stack) | as C1 | — | as C1 | 82.0% | $0 cash; **$50–200/signup-equivalent** in founder time (assumption: devtool content CAC with an existing audience) | 60–120 days; assets are permanent and reproductions compound |
| **C6** | **Hyperscaler marketplace** (AWS/GCP/Azure) | (assumption: listing-fee bands of **3% (large private offers) to 20% (small self-service transactions)** — *not sourced in this pack's research; verify against current seller terms before listing*) | $100.00 at 20% · $121.25 at 3% (marketplace is merchant of record, so no card fee to us) | 18.60 | **$81.40** at 20% · **$102.65** at 3% | **65.1%** · **82.1%** | listing engineering + tax/seller onboarding (assumption: 2–4 founder-weeks) | (assumption: **6–12 weeks** to listing approval) |
| **C7** | **Reseller / SI** (quant consultancies, MLOps integrators) | (assumption: standard devtool reseller discount **20–30%**; modelled at 25% — *not sourced in this pack*). Reseller is merchant of record → no card fee to us | $93.75 | 18.60 | **$75.15** | **60.1%** | ~$0 cash, but partner enablement is founder time | 3–6 months (agreement, enablement, first deal) |
| **C8** | **Team pull-through** (PLG expand) | none — direct billing | $750/mo base | base carries ~90% GM ([../financials/unit_economics.md §2](../financials/unit_economics.md)) | **~$675/mo base** | **~90%** | **~$0 acquisition** (product pull); sales-assist hours only | Only after a Pro cohort exists; one Team ≈ 4–8 Pro seats |
| **C9** | **Hosted-run usage billing** (Team+) | billed at cost × 1.3–1.5 | $175–810/campaign on $135–540 COGS | included | **$40–270/campaign** | **23–33% of billed** | $0 (attached to C8) | With C8 |
| **C10** | **Founder-led enterprise / audit-led quant** | none — direct | $100k+/yr ACV [C19] | — | high, but sales-cost-dominated | — | **$10–25k/deal** founder-led (assumption, [gtm.md §3 row 5](gtm.md)) | **3–9 months, and year-2+ only** |
| **C11** | Academic / institutional site licence | — | — | — | — | — | not funded | **[ROADMAP]** — persona 1 is deliberately unmonetized |
| **C12** | Paid acquisition · outbound SDR · conference sponsorship | — | — | — | — | — | not funded | — |

---

## 5. Viability verdicts at this price point

**The rule (declared here, 2026-08-29):** a channel opens only if (a) fully-loaded contribution stays **≥60% of list** at Pro ACV, (b) the partner's own economics are livable, and (c) time-to-first-revenue fits inside the funding block it sits in ([../financials/use_of_funds.md](../financials/use_of_funds.md)).

| Channel | Verdict | Reasoning |
|---|---|---|
| **C1 Direct self-serve** | **OPEN — the default, and the only channel that clears at full list** | 82.0% contribution, immediate revenue, no intermediary. Every other channel is measured against this |
| **C2 Annual prepay** | **OPEN** | 66% of list is a real 16-point give, bought deliberately: it front-loads $1,213 of cash and insures against churn. Worth it below the 5%/mo churn plan point, revisit with data ([../financials/unit_economics.md §4](../financials/unit_economics.md)) |
| **C3 $99 lifetime lock** | **OPEN, capped at 35 users** | 78% contribution on a smaller base; the cap bounds lifetime exposure at ≤$11k/yr. It buys conversion evidence at ~5% of a hosted build's cost — the point is the signal, not the revenue |
| **C4 OSS community** | **OPEN — primary** | Feeds C1's stack at $150–250/convert of imputed founder time, falling toward zero. Its whole CAC claim is under test (E5 + the attribution field in [business_model_canvas.md §3](business_model_canvas.md) H-KA) |
| **C5 Bundle/content loop** | **OPEN — primary** | Same stack as C1, permanent assets, and it is the only channel that produces proof and reach from the same artifact |
| **C6 Marketplace** | **DEFER — not at Pro ACV** | A 20% take costs 17 points of contribution to reach a buyer who could have used C1 at zero incremental cost. Marketplaces earn their fee only where they unlock **committed cloud spend drawdown** — a Team/Enterprise phenomenon. Revisit when Enterprise opens (year-2+), and verify the real fee schedule first; the 3%/20% band here is an unsourced assumption |
| **C7 Reseller / SI** | **REFUSE at Pro. Reconsider only at Team+ ACV** | The arithmetic is decisive from the partner's side, not ours: 25% of $1,500/yr = **$375/yr per seat**. No consultancy funds a salesperson on that. Even at Team ($9k ACV) it is $2,250/yr — thin. This channel is only rational against $100k+ Enterprise ACV, i.e. year-2+ |
| **C8 Team pull-through** | **OPEN when the trigger exists** | ~90% GM on base, ~$0 acquisition, and the highest revenue-per-founder-hour of any row. Gated on a real product trigger (shared winner archives, feature #43–44), not on a sales push |
| **C9 Hosted runs** | **OPEN as a convenience, never as the story** | 23–33% GM by construction — passthrough plus a margin. The user's alternative is ≈$1/day of electricity on their own laptop [B26–B28]; priced accordingly. Report absolute dollars, never blend this percentage into the Pro margin claim |
| **C10 Enterprise direct** | **CLOSED until year 2** | The arithmetic is fine ($10–25k CAC against $100k+ ACV). The blocker is not economics: a pseudonymous solo founder (A5) fails vendor-risk DD. Prerequisites — legal entity, security documentation, SOC 2 path, escrow — are budgeted in [../financials/use_of_funds.md](../financials/use_of_funds.md) block 4 |
| **C11 Academic licence** | **[ROADMAP]** | Persona 1 stays on the free core by design; her value to the company is reproductions and citations, not revenue |
| **C12 Paid acquisition / SDR / sponsorship** | **REFUSE — do not fund** | Two independent reasons. Economic: at $1,500 ACV against a $150–300 blended CAC target, paid devtool acquisition has no room. Structural: the product's claim is verifiability, and a bought impression is the least verifiable form of a trust claim — the channel contradicts the pitch ([gtm.md §1](gtm.md)) |

### Channel conflict — the one case that could actually bite

The core loop and constitution are free and MIT-shaped ([gtm.md §1](gtm.md); A11), while C6/C7 partners would be selling the *layer above it* — hosted dashboards, catalog, DSR service. A partner who cannot articulate that line will be caught selling something the customer can download, which damages the rigor brand far more than it earns. Consequence, binding: **no reseller or marketplace listing ships without a one-page "what is free and what is paid" sheet as part of the listing itself**, and the same sheet is public on the site. This is cheap now and unrecoverable after the first angry thread.

---

## 6. What the arithmetic changed

1. **Two channels named in general startup practice are refused here on numbers, not taste** — reseller (C7) at Pro ACV, and paid acquisition (C12). Refusing them in writing is the point of computing the stack.
2. **The marketplace question turns out to be a Team/Enterprise question, not a Pro question.** It was worth a table row to learn that its fee only buys something (cloud-commit drawdown) that Pro buyers do not have.
3. **Annual prepay is the most expensive channel we are choosing to run** — 16 points of list — and it is chosen for cash timing and churn insurance rather than for reach. Worth stating plainly, because it is the discount most likely to be extended casually.

---

## 7. Recommended next 3

1. **Ship C1 and nothing else at launch.** It is the only channel that clears at full list, it is the only one with zero time-to-first-revenue, and every alternative reaches the same buyer at a worse rate. Every founder-hour that would go to a partner conversation goes to C4/C5 instead, which feed C1's stack.
2. **Verify the C6 take-rate assumption before the Team tier is designed, not after.** The 3%/20% band in this file is an explicit unsourced assumption; if marketplaces do unlock committed-spend drawdown at the Team price point, that changes the Team packaging and the timing of C8 — and it is a one-hour read of the current seller terms.
3. **Put the "what is free / what is paid" sheet in the v0 repo, before any partner or marketplace conversation exists.** It is the mitigation for the only channel conflict that can damage the rigor brand, it costs an afternoon, and writing it early also forces the Pro feature boundary to be honest at launch rather than negotiated later.
