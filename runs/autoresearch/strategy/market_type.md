# Market type — Ascent

**Declaration: NEW MARKET — "autonomous research operating systems" — entered with the spend-behavior economics of an existing market.** One decision, defended below against the strongest alternative (re-segmented AutoML), then the consequences table.

## 1. The two candidate readings

1. **Re-segmented AutoML (niche):** Ascent as the "rigor-first, laptop-native, practitioner-priced" segment of the automated-ML market that DataRobot/H2O/AutoGluon define. Attractive because budgets exist: DataRobot collects $150k–$500k+/yr from 850+ enterprises [A27]; H2O mid-market deals run $250–550k/yr [A26]; the analyst category is ~$1–3B today [C8, with the 3× base-year spread noted there].
2. **New market:** nobody today sells what Ascent's unit of value is — *one audited, kept improvement to the user's own metric, produced autonomously over days*. The sustained-campaign × audit-gated quadrant is empty of commercial offerings [competitors.md positioning read, A-series]; no public benchmark even measures the job ("no public benchmark measures multi-day monotonic metric-improvement with leakage controls" [B, capability_table 'Unfindable']).

## 2. Why re-segmented AutoML is the wrong declaration

1. **The existing market is collapsing, not waiting to be re-segmented.** The category leader took a 92% valuation haircut ($6.3B → ~$500M, 2021→2025) with two layoff rounds [A27]; H2O's valuation stalled at its Nov-2021 mark on $75M revenue and shrinking headcount [A24]; Google shut down two Vertex AutoML product lines outright in 2025 [A29]. Re-segmenting a market means accepting its buyers, its comparison frame, and its trajectory. "A better DataRobot" inherits all three — including the market's verdict that search-without-trust stalls [A27, A44].
2. **The buyer is different in kind, not degree.** AutoML sells to enterprise committees; Ascent's beachhead payer is the individual practitioner (payer = user, per BRIEF). A re-segmentation keeps the buyer and changes the product; Ascent changes both.
3. **The job is different.** AutoML automates the last mile (HPO/ensembling on a user-supplied, assumed-correct eval protocol [A23, D1–D4]); Ascent's product is the whole loop *including* protocol construction and audit — the parts AutoML structurally cannot do [A-series Tier 4 read]. Customers who compare Ascent to AutoGluon are comparing the 5% overlap.

## 3. Why "new market" is the honest declaration — and why its usual costs are discounted here

1. **Demand-side evidence of a market that doesn't exist yet commercially:** 94.8k stars / 13.4k forks on a free minimal version of the loop in ~6 months [A1], one of the fastest star trajectories recorded on GitHub (8k stars in 48 hours [A3]; 54k in 19 days, faster than nanoGPT's 3-year run [B30]) — and zero commercial products in the quadrant. Massive proven demand, abandoned supply (dormant since 2026-03-26; 52 open issues [A1], ~185 open issues+PRs combined [C35]).
2. **New markets normally cost years of buyer education — most of it is pre-paid here.** (a) The *concept* education happened: Karpathy pre-educated ~95k practitioners on the loop's existence for free [A1][A3]. (b) The *payment behavior* is normalized: 84% of developers use/plan AI tools, $100–200/mo individual power tiers are standard [C3][C23][C21], and Cursor proved individuals expense these tiers bottom-up at $2B-ARR scale [C17].
3. **The one new-market cost that is NOT pre-paid: converting free-toy demand into paid-rigor demand.** The stars prove demand for a free minimal loop, not for $1,500/yr of enforced rigor — and "0 of 16 notable forks added rigor" [A2] cuts both ways: unfilled gap, or unwanted layer. Budget the conversion explicitly rather than netting education to zero: the 15-practitioner trust test (2 weeks) plus 3–6 months of self-deflation publishing and community maintenance before conversion evidence exists — effectively the first two quarters of GTM, (assumption: ~$10–20k cash + the founder-hours in gtm.md §4, basis: honoraria-free recruiting, hosting, entity setup).
4. **Corroborating pattern:** every adjacent existing category is being absorbed as a *feature* (tracking → CoreWeave/OpenAI [A30][A33]; AutoML → cloud baselines [A28][A29]). Value migrated away from every existing category Ascent touches; the only defensible ground is the new one.

## 4. Strategic consequences of the chosen type

| Dimension | Consequence for Ascent |
|---|---|
| Sales cycle | Beachhead: self-serve checkout at the normalized tier [C23], but adoption is gated by a reproduce-and-verify evaluation cycle (days–weeks per user) — not an impulse buy; plan onboarding around the first reproduction, not the first click. Enterprise/quant: **year-2+ expand motion.** [C38] evidences outcome-elastic *dataset* budgets, not fast vendor onboarding; a pseudonymous solo founder (A5) fails bank/fund vendor-risk DD — legal entity, security documentation, and a source-escrow budget line are prerequisites before this tier is sellable |
| Positioning approach | Category creation ("research OS"), not comparison marketing. Never position as "cheaper DataRobot" or "rigorous AutoML" — define the axes (see positioning.md) and name the quadrant |
| Capital needs | Moderate. New-market education cost is pre-paid by the OSS community [A1]; the spend to fund is community adoption + conversion infrastructure, not enterprise sales headcount. Comparable funded theses (Periodic $300M, Lila $550M [C27][C28]) are cloud/wet-lab capital plays; the laptop-native version needs a fraction |
| Dominant risk | **Market risk leads; technical risk is reduced, not retired.** Market: will practitioners trust — and pay for — experiments they didn't run? (BRIEF riskiest assumption; 46% of developers distrust AI output accuracy and rising [C3]). Technical: B1–B4 prove *short-horizon* agent capability (hours, not days); the composed system — multi-day audited campaigns whose gates demonstrably catch violations — is unvalidated [survey.md §7: gate catch-rates unmeasured, multi-seed variance unreported]. The market question is the bigger unknown, but both stay on the risk register |

## 5. Decision

**Ascent declares a new market — autonomous research operating systems — and prices/ships into the already-normalized individual AI-tool spend line.** Re-segmentation language (vs. AutoML, vs. trackers) is banned from positioning except in teardown/comparison appendices. The enterprise tier will *later* displace DataRobot-class budget lines ($100k–500k/yr [C19]) — that is a revenue consequence, not the market identity.
