# Positioning — Ascent

## 1. The axes that actually divide this market

The landscape agent proposed two axes; both survive testing against all 20 competitor rows [competitors.md]. **Adopted, with one refinement each.**

1. **Axis 1 — Run terminus: one-shot artifact vs. sustained monotonic campaign *on the user's own dataset and metric*.** Refinement: the italicized clause is load-bearing. Paper factories (Sakana, Agent Laboratory, Zochi, Carl) terminate in an artifact on *their* problem [A12–A22]; AutoML terminates in a fitted model; MLE-bench agents terminate when the competition ends [A6–A11]. Without "user's own metric," Karpathy-lineage systems look like quadrant-mates when they are hard-coded to one task (val_bpb on nanochat [A1]).
2. **Axis 2 — Output trust: trust-me vs. audit-gated & reproducible.** Rising developer distrust of AI output (46%, up from 31% a year earlier [C3]) is consistent with verifiability being the gating variable — the survey did not name it as the stated blocker, and this file does not claim it did. Third-party evidence that trust-me output is genuinely untrustworthy: CMU found four recurring failure modes (benchmark mis-selection, data leakage, metric misuse, post-hoc selection bias) in flagship open-source AI-scientist systems [A46]; Beel measured 42% experiment failure in the most famous one [A16]; best published full-MLE-bench medal rates span roughly 40–65% depending on scaffold and budget (Operand Quant 39.6% [A10]; ML-ACE ~56% [B13]; MLEvolve 65.3% at a 12-h budget [D39]) — a range, not a ceiling cherry-pick, and still far from unsupervised correctness.
3. **Axes tested and rejected as primary:** (a) *price/cost locus (cloud vs. laptop)* — real, but it divides cost structures, not buyer decisions; retained as the secondary wedge (marginal experiment cost ≈ electricity + mid-tier tokens, $3–60/day [B18][B22] — user-side by construction under BYOK pricing, A12). (b) *model/benchmark quality* — the default axis in public comparisons and precisely where Ascent must not fight: public benchmarks carry contamination [D37][D38] and conflate model/scaffold/budget [D-survey §5]. (c) *degree of autonomy* — Devin/Cursor own it, and it is not what practitioners distrust; the output is [C3].

## 2. Competitor placement

| Quadrant | Occupants |
|---|---|
| One-shot × trust-me | Sakana AI Scientist, Agent Laboratory, Zochi/Carl, AIDE/Weco, MLE-STAR, AutoGluon/H2O/DataRobot/SageMaker/Vertex, Devin/Cursor sessions, manual+ChatGPT [A5–A19, competitors rows 3–14, 18–19] |
| One-shot × audit-gated | Nearly empty: Sargsyan's FDR architecture (paper, no system) [D32]; fragments in Google Co-Scientist's tournament debate (no execution) [A19] |
| Sustained campaign × trust-me | Karpathy autoresearch + its 13.4k forks — free, unmaintained, hard-coded to one task; 0 of 16 curated forks added rigor [A1][A2] |
| **Sustained campaign × audit-gated** | **Empty. Ascent's claim.** |

## 3. Positioning statement and public tagline

**Full statement:** For individual quant researchers and applied-ML engineers, Ascent is the only research operating system that improves your metric, on your data, monotonically, while you sleep — and hands you the evidence it didn't cheat — because a binding constitution enforces a 7-step scientific method with programmatic pre-commit audit gates, purged/embargoed evaluation splits, and a tamper-evident fingerprinted metric on every kept experiment.

**Public tagline (≤20 words):** *"Ascent improves your metric around the clock — and shows you the evidence behind every kept result."*

Vocabulary rule for public copy: no internal terms (constitution, reasoning blob, super-folds) without a one-clause gloss; buyer-facing words are *run log, audit trail, trial count, embargoed splits, reproducible bundle*.

Sub-positioning per spectrum edge (same system, same sentence structure, different clause emphasized):
1. Edge-low (domain scientist): "...on your data..." — you don't need ML engineering depth; the system supplies the method.
2. Beachhead (quant/ML engineer): "...the evidence it didn't cheat..." — the embargoed splits and audit gates you'd have built yourself, enforced by a machine that never gets tired [A-series Tier 7].
3. Edge-high (research lead/fund): "...every kept experiment..." — a forensic audit trail (fingerprints, run logs, winner archives) as a review/compliance artifact, gated to paid tiers exactly where GitLab/W&B history says the monetization line lands [C31][C18].

## 4. The overclaim boundary (binding on all downstream artifacts)

The pack's #1 declared scientific risk is the deflated-Sharpe / multiple-testing critique [survey.md §6–7]. Positioning therefore **must not** lead with PoC point results as proven outcomes:

1. PoC numbers (EUR/USD test Sharpe +6.52 over 265+ experiments, fraud AUC beating AutoGluon/H2O, etc.) are always framed "founder-reported, reproducible from the repo, not independently verified" (assumption A6). A champion Sharpe selected from 265+ trials is precisely the statistic the deflated Sharpe ratio exists to discount [D6][D7]; +6.52 is an *upper bound on the honest number* until corrected.
2. **Self-deflate first.** Before any champion bundle ships publicly, compute and publish the DSR with the true trial count plus a CPCV path distribution [D6][D8], and make the *corrected* number the headline: "+6.52 raw, X deflated over N trials — here's the ledger." If the deflated number is weak, lead with the fraud-vs-AutoGluon result and reposition EUR/USD as the methodology showcase. Computability caveat: DSR requires the FULL trial ledger *including discarded experiments* — verify the PoC actually logged discards; if it did not, the honest deliverable is "DSR computed on a fresh, fully instrumented run," not a promise about the old number.
3. "Leakage structurally impossible" is scoped to the leakage classes purge/embargo folds actually cover — temporal/overlap leakage — not semantic leakage types or multiple-testing inflation [D5][D8][survey.md §4.3].
4. "Monotonic" is always scoped as **monotonic in the composite proxy**: a ratchet guarantees monotonicity in the proxy, not in the truth, and proxy optimization characteristically helps then hurts past a threshold [D31]. Fingerprinting makes the proxy tamper-evident, not Goodhart-proof [survey.md §6].
5. "Hands you the evidence it didn't cheat" is scoped to the deterministic gate classes (citation existence, split geometry, hash integrity, ledger completeness); LLM-judged checks are a screen, not a guarantee [survey.md §4.4].
6. The offensive move: turn the critique into roadmap differentiation. **Trial-count-corrected acceptance gates (a deflated-composite-metric analogue: the keep/discard threshold rises with experiment count) — no published system does this today, Ascent's PoC included [survey.md §6].** First mover on that gate owns the scientific high ground the critics themselves defined; cite CMU [A46] and Bailey–López de Prado [D6][D7] in every skeptic conversation.

## 5. Incumbent response and the honest window (per A11)

1. **The quadrant is defensible for an estimated 12–24 months, not indefinitely** (assumption: basis — Cursor shipped enterprise features in ~1 year [C17]; Cognition/Anthropic-class teams could ship a "research mode" within 2 model generations; watch item flagged in landscape Tier 6 [A35][A36]).
2. **The constitution file is open source and is therefore the channel, not the moat** (A11). What accumulates monthly and cannot be forked: (a) the **private calibration corpus** — full trial ledgers including discarded experiments, gate catch-rates on seeded violations, what-worked-where priors across domains; bundles publish champions and run logs, never the negative-result ledger, so the corpus never leaks through the channel; (b) the **hosted trust infrastructure** — DSR/attestation service, SOTA catalog, the reproduction network of users who have rerun each other's bundles; (c) the **rigor brand** compounded by public self-deflation (§4.2) — an asset incumbents chasing benchmark headlines structurally resist copying.
3. Why a fast follower is permanently behind: the corpus is time × campaigns; a follower starting at month 18 has 18 fewer months of ledger *and* every month of Ascent operation widens the gap. Cursor/Devin/Anthropic can fork the file in a day; they cannot backfill discarded-experiment ledgers they never ran.
4. Consequence for execution: instrument the corpus (log every discard, seed violations to measure gate catch-rates) from day 1 — the moat only exists if the data is captured.

## 6. Decision

Chosen quadrant: **sustained campaign × audit-gated**, defended by the two axes above; secondary wedge: laptop-native cost locus. Chosen enemy for contrast in all copy: **"manual + ChatGPT"** (the dominant workaround, competitors row 19) — never AutoML, never Sakana. The one-line contrast: *"Your chatbot suggests; a tired human verifies. Ascent's protocol verifies; you steer."*
