---
name: startup-financials
description: Use when a startup run needs the money layer — pricing, revenue build, unit economics, use of funds, risk matrix, comparables and exit landscape — or when the user asks "pricing strategy", "path to $100M ARR", "unit economics", "use of funds", "comps". Requires BRIEF.md, research/, and strategy/ (run prerequisites first if missing).
---

# startup-financials

Generate the financial layer. Rule one: **assumption-driven, never number-painted** — every figure derives from a stated assumption a reader can change, and assumptions trace to `research/sources.md` or carry an `(assumption)` tag.

## Writes → `runs/<slug>/financials/`

1. **`pricing.md`** — value metric chosen (the unit price scales with — seats, usage, outcomes) and why; anchor analysis (what budget line this replaces, from research); competitor price table (sourced); tier design; willingness-to-pay logic per persona; the pricing-power argument (why price rises as the data moat compounds).
2. **`revenue_build.md`** — bottom-up path to $1M → $10M → $50–100M ARR: units × conversion × price per stage, expansion revenue layers (the domain's equivalents of siblings/seats/premium), the milestone each jump depends on, and which GTM motion carries each stage. A table a spreadsheet could be built from directly.
3. **`unit_economics.md`** — per-unit P&L: CAC by channel (hypothesis + basis), gross margin including **AI/compute cost per unit at current API prices** (from `tech/not_vaporware.md`), payback period, LTV under stated retention, contribution margin trajectory. Include the cost-curve argument: what happens to margin as model prices fall.
4. **`use_of_funds.md`** — the raise: amount, 18–24-month milestone-linked spend plan (each dollar block buys a named de-risking milestone), key hires in order, capital-efficiency metric to report, and what the *next* round's story requires this round to prove.
5. **`risk_matrix.md`** — top 6–8 risks (technology, market, regulatory, competition, cost, retention, key-person, platform) as a table: Risk · Likelihood · Impact · Leading indicator · Mitigation · Residual level. Honest residuals — a matrix where everything mitigates to "low" is fiction.
6. **`comps_exits.md`** — comparable companies (sourced): recent rounds, revenue multiples where known, what the market rewarded/punished; realistic acquirer profiles and why each would pay; IPO-path conditions. Ends with the "why this can be a standalone generational company" paragraph — after the sober comps, not instead of them.

## Quality bar

- Show the arithmetic; a reader must be able to disagree with an assumption and recompute.
- AI-native startups live or die on compute margin — the per-unit inference cost line is mandatory.
- Ranges with reasoning beat false precision ("$14–22 CAC via channel X because comparable Y reports Z").

## Red flags

- Hockey sticks with no milestone causing the bend. CAC asserted without a channel basis. Gross margin ignoring inference cost. A comps section listing only the winners.
