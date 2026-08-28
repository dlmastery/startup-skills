---
name: startup-strategy
description: Use when a startup run needs positioning, market type, TAM/SAM/SOM, personas, lean canvas, value proposition canvas, or go-to-market strategy — or when the user asks "size this market", "who is the ICP", "positioning", "GTM plan". Requires BRIEF.md and research/ (run grill-me and startup-research first if missing).
---

# startup-strategy

Convert brief + research into the strategy layer. Every number here traces to `research/sources.md` or carries an `(assumption)` tag.

## Writes → `runs/<slug>/strategy/`

1. **`market_type.md`** — Steve Blank market-type declaration: Existing / Re-segmented / New / Clone, with the evidence, and the strategic consequences table (sales cycle, positioning approach, capital needs, dominant risk) for the chosen type. One decision, defended.
2. **`positioning.md`** — the two axes that actually divide this market (name them; justify against `research/competitors.md`), competitor placement, the open quadrant, and a one-sentence positioning statement: "For <beachhead>, <name> is the only <category> that <key benefit> because <mechanism>."
3. **`market_sizing.md`** — TAM/SAM/SOM built **bottom-up** (units × frequency × price), each factor sourced or flagged; top-down sanity check from analyst numbers; the beachhead sized separately. Show the arithmetic.
4. **`personas.md`** — 4–6 persona cards spanning the full spectrum (edge-low, beachhead core, edge-high, plus buyer/decision-maker where payer ≠ user). Per card: name, context, day-in-the-life pain moment, current workaround, trigger to switch, "must-have" language they'd actually say, objection you must overcome.
5. **`lean_canvas.md`** — full lean canvas as a table; each cell ≤ 3 bullets; riskiest cell marked ⚠ with a pointer to `validation/riskiest_assumptions.md`.
6. **`value_prop_canvas.md`** — customer jobs / pains / gains vs. pain-relievers / gain-creators / products, per major persona, with the top mapping ranked.
7. **`gtm.md`** — channel strategy by segment (beachhead first), the acquisition loop that compounds (referral, content, community, partner), CAC hypothesis per channel with payback logic, and the 90-day motion: first 10 customers by name-of-type, then first 100. Ends with "Recommended next 3 moves".

## Quality bar

- Axes must be *discovered from research*, not defaults (price × quality is almost never the real map).
- Bottom-up beats top-down; showing arithmetic beats citing a Gartner headline.
- Personas quote plausible real language, not marketing-speak.
- Every artifact ends with a decision (chosen quadrant, chosen beachhead, chosen channels) — not a menu.

## Red flags

- "1% of a $100B market". Axes copied from a template. Personas without an objection. A GTM listing every channel equally.
