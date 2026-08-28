# Customer discovery guide — Ascent (Mom-Test discipline)

Rules that override everything below: ask about the **past**, never the hypothetical future; never pitch during a problem interview; a compliment is a data-free deflection — log it as one; the interviewee's exact words go in quotes, not paraphrase. Personas from personas.md; the trust-test cohort (gtm §4) doubles as the first discovery panel.

## 1. Screeners (disqualify fast; recruit only people who do the job)

| Persona | Qualify if (all) | Disqualify if |
|---|---|---|
| **Marcus** — solo quant / small prop shop (card 2) | Trades real capital (own or pooled); ran ≥10 signal-research experiments in the last 30 days; can name their validation scheme (walk-forward, purged CV, anything); already pays for ≥1 data/tools subscription | Paper-trades only; runs backtests "occasionally"; validation answer is "I eyeball it" *and* they see no problem with that (no felt pain = no pull) |
| **Jae** — applied-ML engineer, mid-size company (card 3) | Owns a production model with a scalar metric (AUC, recall) they are paid to improve; went through ≥1 model refresh/review cycle in the last 2 quarters; team already expenses AI tools [C23] | Does analytics/BI, not recurring metric optimization (outside job-filtered TAM, market_sizing §1); no review/governance process at all |
| **Priya** — domain scientist / postdoc (card 1) | Has a live dataset + a target metric anchoring a paper/thesis; built ≥1 train/test split themselves in the last 6 months; no ML engineer available to them | ML is a one-off curiosity; a collaborator handles all modeling |
| **Elena** — fund/lab research lead (card 4; discovery only, year-2+ sale) | Manages ≥5 researchers running parallel experiments; personally answers to compliance/allocators/reviewers for research records | Individual contributor (that's card 2); org already mandates a home-built platform they're happy with |

Recruiting sources = the E1 pools (gtm §4): autoresearch issue/fork authors, r/quant, QuantConnect/Numerai forums, AutoGluon/H2O issue trackers, founder network.

## 2. Problem interview — 14 questions, all past-tense

Warm-up (2): 1. "Walk me through the last experiment you ran — from idea to deciding keep or kill." 2. "How many experiment variants did you run last month? How do you know that number?"

Self-deception & rigor (5):
3. "Walk me through the last experiment you later found was leaked — how did you catch it, and what did it cost you?"
4. "When did you last distrust your own backtest / eval result? What did you do about it?" (Marcus/Jae core)
5. "Tell me about the last time you shipped/published a number and someone challenged how you validated it. What did you show them?"
6. "The last time you built a train/test split under deadline pressure — what corners did you cut?" (Priya core: preprocessing-on-full-data [D5])
7. "How many variants did the last result you acted on get selected from? Where is that count written down?" (trial-count bookkeeping [D6])

Workflow & cost (4):
8. "Last model refresh / research cycle: how many days went to harness/plumbing vs. actual improvement attempts?" (checks the 38–45% prep claim [A39] against lived reality)
9. "What ran overnight last night? What would have to be true for something to run while you sleep?"
10. "What did you pay for last year to speed up research — tools, data, compute? What did you cancel, and why?"
11. "Tell me about the last time you tried an AutoML tool or a coding agent on this job. Where did it stop helping?" (workaround census; competitors row 19)

Trust & acting on others' results (3 — the riskiest-assumption probes):
12. "When did you last act on an experimental result you didn't run yourself — deploy it, trade it, cite it? What convinced you?"
13. "When did you last *refuse* to act on someone else's result? What was missing?"
14. "Who reviews your experimental work before it counts? What did the last review actually check?"

Close, never a pitch: "Who else do you know who fights this? Can I mention you asked?" (referral = the only acceptable ask).

## 3. Solution interview — built around bundle reproduction (run only after E2/E6 gate the artifact)

Setup: interviewee gets the DSR-honest bundle link (EUR/USD or fraud per the E2 branch) and a fresh machine/VM. **We watch; we do not drive or troubleshoot unprompted.**

1. **Reproduce:** "Here's a champion bundle — config, model, run log, trial ledger summary. Get it to reproduce." Log: time-to-reproduce, where they got stuck, whether they finished unaided (feeds E1a).
2. **Interrogate:** "You've reproduced it. Attack it — what would you check before believing it?" Log every artifact they open (trial count? embargo window? discards? DSR?) — this is the trust-anatomy data, and it ranks which gate to demo first.
3. **Transfer:** "Would you run this on data of yours? What data, and what stops you today?" (feeds E1b; contamination objection should surface here — note whether *they* raise it before we do [D37][D38].)
4. **Deploy evidence:** "What specific evidence would make you deploy / trade / publish a result this system produced?" Verbatim capture, mandatory (feeds E1c — this sentence is the product roadmap).
5. **Money (commitment, not compliment):** "It's $100–150/mo, your own LLM key. Walk me through how you'd expense or justify that — and would you put $99 down today to hold a seat?" A yes with a card is data; "I'd definitely pay" without one is logged as a compliment.

Never say during either interview: "monotonic", "constitution", "super-folds" (vocabulary rule, positioning §3); buyer words only: run log, audit trail, trial count, embargoed splits, reproducible bundle.

## 4. Synthesis template (one per interview, same day)

```
Interview #__ · date · persona card __ · screener result: qualified/borderline
1. Top 3 pains, ranked by them (their ranking, not ours) — with the past episode evidencing each
2. Current workaround + what it costs them (hours/$/risk), verbatim where possible
3. Trigger events observed (what actually made them change tools last time)
4. MUST-HAVE LANGUAGE HEARD (verbatim, quoted, ≥3 lines) — candidate copy;
   compare against the predicted lines in personas.md (e.g. "I need it to stop me
   from fooling myself", "show me the embargo window and the exact trial count") —
   mark each prediction CONFIRMED / NOT HEARD / CONTRADICTED
5. Reproduction result (solution interviews): finished unaided? time? artifacts inspected, in order
6. Deploy-evidence sentence (verbatim)
7. Commitment secured: none / referral / follow-up session / private-data run / $99 pre-order
8. Surprise findings + anything that contradicts the pack (route to ASSUMPTIONS.md protocol)
```

Aggregation rule: after every 5 interviews, tally pains and must-have language across the cohort; a pain claimed in strategy/ that fewer than 2 of 5 raise unprompted gets flagged in `pivot_log.md` as weakening evidence. Synthesis feeds E1 counts directly — no narrative summaries without the counts.
