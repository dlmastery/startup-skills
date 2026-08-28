# Journey — Beachhead: Marcus, first session to habitual use

**Persona:** Marcus T., ex-bank solo quant, 2-person prop shop (strategy/personas.md card 2). Sharpe culture; 1–3 hand-run experiments/day today; has read López de Prado [D8]; knows a 40-variant month means his in-sample Sharpe is nearly guaranteed to lie [D7]. **He is the payer and the user.** His conversion condition, verbatim from the persona card: *"I don't need it to be smart, I need it to be unable to cheat — give me the full run log, discards included."* This journey shows the system handing him exactly that.

Format: *component → action → durable record.*

## Week 0 — the skeptical trial

1. **Public bundle registry** → Marcus lands on the EUR/USD champion bundle from a forum thread. The headline is not +6.52; it is "+6.52 raw · deflated X over 265 trials — founder-reported, full ledger attached" (positioning.md §4.2). The self-deflation is what stops his scroll — every vendor shows him inflated backtests; nobody shows him the trial count. → *Record (his side):* none yet.
2. **One-command reproduction** → `ascent reproduce eurusd-champion` on his own machine. Forty minutes later: fingerprints match, per-fold Sharpes reproduce. He inspects the ledger: 265+ trials, 250+ discards, each with a gate verdict and a cited reasoning blob. He correctly discounts the raw Sharpe per [D6][D7] — and notes the system discounted it first. → *Record:* reproduction attestation (he opts in to publishing it to the registry — trust datum #1 for the network).
3. **Instantiation wizard + private-dataset onboarding** → his own intraday FX dataset, local only; contamination advisory confirms it's private (P7). BYOK: his own Anthropic + OpenAI keys; economy routing preset. → *Record:* setup answers, dataset hash, routing config.
4. **Split builder** → walk-forward super-folds, 10-day purge/embargo on his label horizon [D8]; overlap verification stamp. The screen he'd have spent a week building by hand (persona pain 2) exists in eleven minutes. → *Record:* split config + verification stamp.

## Week 1 — first campaign, first fight with the gate

5. **Runner, overnight × 5 nights** → 30–40 gate-passed experiments/night at ~$7/day on his meter (P10; [B18][B22]). → *Record:* ledger rows for every trial; reasoning blobs; 5-minute checkpoints.
6. **Trial-count-corrected acceptance gate** → Thursday: a candidate with +0.09 composite improvement is **discarded** — below the deflated threshold at N=163 (P2). Marcus's first reaction is annoyance; his second is the purchase decision. This gate is the thing he cannot make himself do at 11 pm on variant 40 (persona pain 1): the machine applies his own standards when he's tired. → *Record:* rejection card in the ledger: "keep threshold at N=163 is +0.14; observed +0.09; discarded."
7. **DSR panel** → his campaign header reads "Champion Sharpe 1.87 raw · 1.31 deflated over 163 trials." He forwards a screenshot to his partner with one line: "finally a number I'd trade." → *Record:* DSR computed from the true ledger count, stored with the champion.
8. **Goodhart divergence monitor** → week's end, amber banner: composite up, raw test Sharpe flat over the last 20 trials [D31]. **Steering console:** "self-reflect on the stall; check if the drift penalty is dominating." The next Diagnose blob addresses it, cited. → *Record:* divergence alert + steering entry, linked to descendant experiments.

## Weeks 2–6 — habit formation

9. **Morning ritual (7:40 am, phone):** **dashboard** → ledger delta since midnight, champion status, stall detector. Ninety seconds. **Steering console** → zero or one sentence. This is the whole human interface — the division of labor RE-Bench says is correct: the agent grinds short experiments; Marcus keeps the research judgment [B4].
10. **SOTA catalog subscription** (his Pro conversion, ~$100–150/mo BYOK, A12/A8) → monthly drop: two new time-series backbones with verified citations; he queues one via the console. His logic, per the value-prop canvas: the fee is for the rigor layer and catalog; tokens are his own bill and visible on the meter — no hidden COGS markup. → *Record:* catalog version pin in campaign manifest.
11. **Multi-seed + CPCV confirmation** → his month-2 champion candidate survives 5 seeds and shows a positive CPCV path distribution [D8][D11] (P6). He sizes a small live allocation — the outcome metric that matters (deployment action, PRD §9.3). → *Record:* confirmation distributions in the champion bundle.
12. **Winner archive** → every kept champion auto-bundles: 14-section audit report, embargo windows stated, trial count on the cover page. His "research log" is no longer a folder of notebooks (persona workaround); it is a defensible record he could show an allocator. → *Record:* `winners/` bundles; the durable asset his shop now accumulates.

## The moment that closes the loop (week 6)

13. A losing week. Old Marcus would re-open the notebook graveyard and wonder which of 40 variants he'd actually validated. New Marcus opens the **shared ledger**, filters "kept," reads the three reasoning blobs behind the live signal, and confirms the drawdown is inside the CPCV path envelope he accepted at promotion time. He does not override the system; he types one steering line: "research regime-detection literature for the next campaign." → *Record:* steering entry; campaign 3 opens with it as the seed directive.

**Why he stays (and pays):** not the hill-climbing — "my people can climb hills" is Elena's line, but Marcus's version is "I can climb hills; I can't referee myself at midnight." The retention mechanism is the pairing of feature #1 (ledger) and #19 (acceptance gate): the product's spine is his own discipline, externalized and tireless [A-series Tier 7].

## Recommended next

This journey is the 15-practitioner test script (PRD G1): beats 1–2 are the test itself — put the self-deflated EUR/USD bundle and `ascent reproduce` in front of 15 Marcus/Jae-profile practitioners and count reproductions and stated deploy conditions. Beat 6 (the gate rejecting *his* improvement) is the demo moment to film: nothing else in the market can produce it [survey §6].
