# Pricing — Ascent

BYOK-first architecture per A12 (binding). Every number sourced or `(assumption: basis)`-tagged; change any assumption and the tier math recomputes trivially.

## 1. Value metric: what the price scales with

The unit of value is **one audited, kept improvement to the user's metric** (BRIEF). But improvements are lumpy and unpredictable per campaign, so pricing them directly would make revenue a lottery ticket and invite Goodharting of our own gate. The chosen split:

1. **The rigor layer is priced flat** (Pro subscription). Rationale: the constitution + gates + dashboards + catalog deliver value continuously — every experiment that *doesn't* survive the gates is also value (self-deception prevented). Flat pricing matches how the normalized $100–200/mo AI power tier already bills [C23], and avoids taxing the user's own iteration volume, which would punish exactly the behavior (more experiments) the product exists to enable.
2. **The compute-adjacent piece is metered** (hosted/managed runs on Team+, usage-billed — the Devin ACU precedent [C21], the only working pricing model for autonomous-agent compute where a "$20 budget" team gets invoiced $400 when the agent actually works). Metering lands only where marginal cost is real (our GPUs, our tokens), never on the rigor layer.
3. **Seats scale the collaboration layer** (Team/Enterprise) — the historically proven open-core gate line: collaboration, hosting, compliance [C31][C18].

Why BYOK is the architecture and not a discount gimmick (A12): tokens are user-side **by construction**, so Pro carries ~zero token COGS (see `unit_economics.md`), the user keeps model choice (A9, platform-risk hedge), and the user's own bill is small and legible — a 24/7 steering loop on mid-tier models costs **$3–12/day** (Haiku 4.5 / Gemini 3.7 Flash tier, computed in capability_table §3 [B18][B20][B22]). That is the persona-2 ("Marcus", personas.md) own-wallet math: $3–12/day of tokens + $125/mo for the layer that makes the output trustworthy, vs ~$600/day of his own loaded time [C25].

## 2. Anchor analysis: the budget line this replaces

| Anchor | Number | Read for Ascent |
|---|---|---|
| ML engineer iteration time | $279k avg total comp; $350–550k/yr loaded senior [C25] → ~$600–1,500/working day | Pro at $125/mo = **<0.1% of one engineer's loaded cost**; recovering 2 engineer-hours/mo pays for it |
| AI power-individual tier | Claude Max $100/$200; ChatGPT Pro $100/$200 [C23] | The $100–200/mo price point is already normalized for the exact beachhead persona |
| Quant information edge | Bloomberg $31,980/yr/seat [C24]; alt-datasets $100–250k/yr each [C37][C38] | The vertical ceiling: audit-grade research automation at $5–20k/yr/seat is cheap against existing edge spend |
| Enterprise AutoML displacement | DataRobot $150k–500k+/yr [C19][A27]; H2O $250–550k/yr [C20] | The Enterprise tier's price corridor already exists as a budget line |

## 3. Competitor price table (sourced)

| Product | Individual | Team | Enterprise | Note |
|---|---|---|---|---|
| GitHub Copilot | $10–39/mo | $19/user/mo | $39/user/mo | usage credits from Jun 2026 [C22] |
| Cursor | $20/mo | ~$40/user/mo | custom | $2B ARR proves volume [C17] |
| Devin (Cognition) | $20–200/mo | $80/user/mo **+ ACU usage** | custom | closest autonomous-agent pricing comp [C21] |
| Claude / ChatGPT | $20 → $100 → $200/mo | — | — | power-tier normalization [C23] |
| W&B (pre-acq.) | free | $35–50/user/mo | ~$300+/unit/mo, audit/SSO gated | the exact gate line Ascent copies [C18][A31] |
| DataRobot / H2O | — | — | $100k–550k/yr | the ceiling [C19][C20] |
| ClearML | — | $15/user/mo | — | tracking floor [A34] |

Ascent Pro at $100–150/mo sits above Cursor/Copilot (which sell code completion, a commodity) and squarely inside the Claude-Max/Devin power band — correct, because the job replaced is research iteration, not typing speed.

## 4. Tier design

| Tier | Price | What's included | What's gated | Payer |
|---|---|---|---|---|
| **Free (OSS core)** | $0 | The full loop + constitution + audit gates + super-folds, laptop-native, BYOK. Genuinely complete for a solo run — this is the trust channel (A11: the file IS the channel) | No hosted dashboards, no catalog, no DSR service, no shared archives | — |
| **Pro (BYOK)** | **$125/mo ($100–150 band)**, annual $1,250–1,500 (~2 mo free) | Rigor layer as a service: hosted campaign dashboards, SOTA catalog subscription, DSR/deflation reports on demand, champion-bundle publishing, steering copilot (house-metered, capped) | Team features | Individual practitioner (personas 2–3), own card |
| **Team** | **$500–1k/mo base (A8) + usage-billed hosted runs** at cost × 1.3–1.5 (assumption: Devin ACU-style margin band [C21]; exact multiplier set after first 10 hosted campaigns' measured cost) + $50–100/seat/mo beyond 5 seats (assumption: W&B per-user corridor [C18]) | Parallel research streams, shared winner archives, org-wide catalog, hosted GPU runs for teams that don't want BYOK ops | Attestation, retention, on-prem | Research lead (persona 4) |
| **Enterprise / Compliance** | **$100k+/yr, year-2+ only** (A10) | Audit-trail retention SLAs, attestation/DSR service, on-prem/VPC, source escrow | — | Fund CTO / model-risk (persona 5) |

Enterprise prerequisites are costed before the tier opens (gtm.md §3 row 5, market_type.md §4): legal entity, security documentation, SOC 2 path, escrow — budgeted in `use_of_funds.md` block 4. A pseudonymous solo founder fails vendor DD today; the tier is a roadmap item priced now so the corridor is anchored, not sold now.

## 5. Willingness-to-pay logic per persona

1. **Persona 1 (domain scientist, edge-low):** WTP ~$0–50/mo — served by Free; conversion target is *reproductions and citations*, not revenue. Deliberately unmonetized (quality-bar full-spectrum rule: same system, no lite fork).
2. **Personas 2–3 (solo quant / applied-ML engineer, beachhead):** WTP $100–200/mo demonstrated by the tier they already buy [C23] and by Cursor's ramp [C17]; the substitution math ($125/mo vs $600+/day of own time [C25]) gives ~10x headroom above the price.
3. **Persona 4 (research lead):** WTP $6–12k/yr base + usage — one team convert ≈ 4–8 Pro seats (gtm.md §3); anchored under W&B team spend for a tool that *designs* experiments rather than logging them.
4. **Persona 5 (fund/enterprise compliance):** WTP $100k–500k/yr — the DataRobot budget line [C19], with the quant ceiling at Bloomberg-seat territory [C24] if the audit story lands. Outcome-elastic: "no budget limit if it makes money and is uncorrelated" [C38].

## 6. Pricing power: why the price rises over time

Per A11, the moat is not the open constitution file; it is three accumulating assets, two of which are priced here:

1. **The private calibration corpus** (full trial ledgers *including discards*, gate catch-rates, what-worked-where priors) makes the steering copilot measurably more efficient over time — fewer wasted experiments per kept improvement. If corpus-informed steering cuts experiments-per-kept-improvement even 20–30% (assumption: to be measured from instrumented campaigns — this is A11's kills-if-wrong test), the flat Pro price buys strictly more outcome each year: price can follow value upward ($125 → $150–200 band) without repricing the metric.
2. **The catalog + reproduction network** compounds as a subscription good: each published, reproduced bundle raises the catalog's value to every subscriber at zero marginal cost.
3. Frontier list prices are flat-to-rising while capability-per-dollar collapses 40–50x/yr [B16][B19]; BYOK users ride the cost curve down on their own bill while Ascent's flat layer captures none of that deflation as COGS — margin structurally improves (unit_economics.md §5).

## 7. Decision

Commit: Free OSS core / **Pro $125/mo BYOK** (launch price; $99 pre-order honored for life per gtm.md) / **Team $750/mo base + usage-billed hosted runs + seats** / **Enterprise $100k+ year-2+**. First repricing review after the corpus-effect measurement (A11 test) — raise Pro only with measured steering-efficiency evidence in hand.
