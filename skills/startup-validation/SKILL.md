---
name: startup-validation
description: Use when a startup run needs the customer-development and validation layer — riskiest assumptions, experiment board, discovery plan, get-keep-grow funnel, stage-gate map, pivot log — or when the user mentions Steve Blank, lean startup, customer discovery, "how do we validate this". Requires BRIEF.md and strategy/ (run prerequisites first if missing).
---

# startup-validation

Generate the Steve Blank / customer-development board set: the artifacts that show the company knows *what it doesn't know yet* and exactly how it will find out. For a pre-traction startup this layer is mostly forward-looking — planned experiments and expected evidence — and must say so honestly rather than inventing traction.

## Writes → `runs/<slug>/validation/`

1. **`riskiest_assumptions.md`** — every load-bearing assumption from `ASSUMPTIONS.md`, `strategy/lean_canvas.md` (the ⚠ cells), and the brief's riskiest-assumption line, as a ranked board: # · Assumption · Kills company if wrong? · Current evidence (with source) · Cheapest decisive test · Cost · Time · Status (untested/testing/validated/invalidated).
2. **`experiment_board.md`** — the Blank-style learning log for the top 6–10 assumptions: Hypothesis (falsifiable, with a number) · Experiment design · Pass/fail threshold declared **in advance** · Result · Learning · Decision. Planned rows stay honest: status "planned".
3. **`discovery_guide.md`** — the customer-discovery interview kit: screening criteria for each persona, 10–15 non-leading problem-interview questions (past behavior, not hypotheticals — Mom-Test discipline), solution-interview script, and the synthesis template (top pains · workarounds · triggers · must-have language · surprise findings).
4. **`get_keep_grow.md`** — the funnel per major segment: Get (channels → activation moment), Keep (the habit loop and the metric that predicts retention), Grow (expansion, referral loop, the viral/word-of-mouth mechanism specific to this domain). Each stage: metric, current/target, the lever.
5. **`stage_gate.md`** — where the company sits in Discovery → Validation → Creation → Building, the evidence supporting that placement, and the explicit exit criteria (with numbers) required to pass the next gate.
6. **`metrics_by_stage.md`** — the 3–5 metrics that matter at each stage and — equally important — the vanity metrics to ignore at each stage and why.
7. **`pivot_log.md`** — decision journal: what has already been considered and killed (from the grill session and research), and the standing pivot-or-persevere criteria: "we pivot if X by date Y".

## Quality bar

- Falsifiable beats directional: "8 of 15 interviewees currently pay for a workaround" is a threshold; "people like it" is not.
- Thresholds are declared before results exist — that's the whole discipline.
- Interview questions ask about the past ("when did you last…"), never the hypothetical future ("would you use…").

## Red flags

- Invented traction. Experiments without pass/fail numbers. "Validate demand" as a hypothesis. A discovery guide whose questions pitch the product.
