# Personas — Ascent (five cards spanning the full spectrum, one system, no "lite" fork)

> **What this is** — Five persona cards spanning the spectrum — comp-bio postdoc, solo quant, fintech ML engineer, fund research lead, enterprise model-risk buyer — each with a pain moment, switch trigger and blocking objection.
> **Why it exists** — It commits the beachhead to cards 2 and 3, where payer equals user, and defers cards 4–5 to year 2: a pseudonymous solo founder fails bank and fund vendor-risk diligence, so selling there in year 1 spends the runway on procurement cycles that cannot close regardless of product quality.
> **How to read it** — Cards 2 and 3, then each objection line. Attack whether the triggers are real.
> **Depends on / feeds** — Inherits [`research/market_structure.md`](../research/market_structure.md) and [`research/survey.md`](../research/survey.md); feeds [`strategy/value_prop_canvas.md`](value_prop_canvas.md) and [`strategy/gtm.md`](gtm.md).

Grounding data used across cards: 46% of developers distrust AI output accuracy, up from 31% a year earlier [C3]; the autoresearch community's actual behavior is porting and translating, not adding rigor (14/16 notable forks are platform ports, 0 add rigor [A2]), and it filed 185 issues into a maintainerless repo rather than leaving [C35] — these people want the loop on *their* machine for *their* problem, and no one is answering.

---

## 1. Edge-low — Dr. Priya N., computational biology postdoc ("citizen researcher")

- **Context:** 4th-year postdoc, single-cell dataset + a clear AUROC target for a classifier that would anchor her next paper. R fluent, Python passable, zero ML-engineering depth. Lab has no ML engineer; university cluster queue is weeks long. Laptop: M-series MacBook — inside Ascent's validated envelope [B26–B28].
- **Day-in-the-life pain moment:** Sunday night, she has hand-rolled a train/test split, gets AUROC 0.81, and genuinely does not know whether it's real or leakage — she preprocessed on the full dataset before splitting, the preprocessing-on-full-data subtype of the Kapoor–Narayanan leakage taxonomy that affected 294 published papers across 17 fields [D5]. Nobody in her lab can review it.
- **Current workaround:** ChatGPT for code snippets, runs by hand, judges by eye (the dominant workaround, competitors row 19) — or doesn't do the research at all (BRIEF edge-low).
- **Trigger to switch:** a peer's paper gets a leakage correction/retraction; or she sees a reproducible champion bundle from her subfield she can rerun with one command.
- **Must-have language:** "I need it to stop me from fooling myself — I can't referee my own splits." / "If a reviewer asks how I validated, I need something to point at."
- **Objection to overcome:** "I don't trust AI-generated analysis" (she is inside the 46% [C3]) *and* "my PI won't accept a black box." Answer: the audit trail *is* the anti-black-box — every experiment ships a cited run log and a rerunnable bundle; the CMU four failure modes [A46] are what the gates check, by name.

## 2. Beachhead core (a) — Marcus T., solo quant researcher / 2-person prop shop

- **Context:** ex-bank quant, trades own capital + a small pool. Sharpe-ratio culture; already pays for data feeds and would find Bloomberg's $32k/seat unremarkable [C24]. Runs 1–3 hand-built experiments/day between everything else [A-series Tier 7].
- **Day-in-the-life pain moment:** 11pm, 40th variant of a signal this month, in-sample Sharpe looks great — and he *knows* that's the problem: with enough trials a high in-sample Sharpe is nearly guaranteed under a true Sharpe of zero [D7]. He has read López de Prado [D8]; building purged/embargoed CV properly for every idea is a week he never has.
- **Current workaround:** manual + ChatGPT for code; a private folder of Jupyter notebooks as the "research log"; discipline as the only audit gate — and a tired human skips the gate [A-series Tier 7].
- **Trigger to switch:** a losing month traced to an overfit backtest; or seeing the EUR/USD winner archive with the trial count and DSR caveat *honestly stated* — the honesty is the hook for this persona, not the +6.52 (which he will correctly discount per [D6][D7]).
- **Must-have language:** "Run it while I sleep, but show me the embargo window and the exact trial count." / "I don't need it to be smart, I need it to be unable to cheat — give me the full run log, discards included."
- **Objection to overcome:** "A Sharpe selected from 265 trials is exactly what the deflated Sharpe ratio discounts — why should I believe yours?" Answer: agree, out loud; show the roadmap trial-count-corrected acceptance gate (no published system has one [survey.md §6]) and the one-command reproduction. This objection is the BRIEF's riskiest-assumption test in persona form.

## 3. Beachhead core (b) — Jae K., applied-ML engineer at a mid-size fintech

- **Context:** owns the fraud-detection model; comp in the $200–280k band [C25], so their iteration time is the most expensive line item on the team. AUC culture. Team already expenses Cursor and Claude [C17][C23]; the $100–200/mo expense is a Slack message — the security review of a new agentic tool is not (see objection).
- **Day-in-the-life pain moment:** quarterly model refresh: three weeks of the quarter go to rebuilding the eval harness and backfilling documentation for model risk review, ~1 week to actual improvement attempts — mirroring the field-wide split where 38–45% of time is data prep [A39] and 75% of DS time is plumbing [A40].
- **Current workaround:** AutoGluon as baseline (free, strong [A23]) + manual feature work + MLflow to log what they chose to run — and MLflow records a leaky split as cleanly as a sound one [A-series Tier 5].
- **Trigger to switch:** Ascent's public fraud-benchmark bundle (the PoC beat AutoGluon/H2O — founder-reported, reproducible from repo, A6) reruns on their laptop in one command; or a model-risk reviewer asks for evidence their harness is leakage-free and they have nothing.
- **Must-have language:** "AutoGluon gives me a model; it can't tell me *why* recall on new merchants is bad or read a paper about it." / "The documentation writes itself or it doesn't get written."
- **Objection to overcome:** two-part. (1) "We already have AutoML and a tracker; why a third tool?" Answer: teardown, not adjectives — AutoML optimizes inside a fixed space on a protocol you must get right yourself; trackers record and enforce nothing [A23, A-series Tiers 4–5]; Ascent replaces the *harness-building and grinding weeks*, not those tools. (2) "Security won't clear an autonomous agent near production-adjacent data." Answer: BYOK + local execution (A12/A9) means data and keys stay in Jae's environment; pilot on public/synthetic data first; the audit trail is itself the security-review artifact.

## 4. Edge-high — Elena R., head of research at a systematic fund (~40 researchers)

- **Context:** runs parallel research streams; budget is outcome-elastic ("no budget if it makes money and is uncorrelated" [C38]); tech+data infra $200–500k/yr, individual datasets at $100–250k each [C37]. Payer = her, users = her researchers.
- **Day-in-the-life pain moment:** a promising strategy dies in committee because the researcher can't reconstruct which of ~300 variants produced the pitched backtest, and compliance wants the full decision trail. Institutional memory of *what was tried and why* lives in people who leave.
- **Current workaround:** internal platform + conventions + code review — enforcement by discipline at 40-person scale; the multiple-testing bookkeeping (trial counts per strategy family, for DSR [D6]) is aspirational.
- **Trigger to switch:** one pod adopts Ascent bottom-up (the Cursor path: individual → team → enterprise, 60% of Cursor revenue is now enterprise [C17]) and its winner archives make one review meeting 10× shorter.
- **Must-have language:** "I'm buying the audit trail and the campaign memory, not the hill-climbing — my people can climb hills." / "A tamper-evident run log per experiment, with trial counts, is what I show the regulator and the allocator."
- **Objection to overcome:** "Our alpha can't touch a vendor's cloud." Honest answer, split in two: training/eval data never leaves her metal *today* — execution is local by architecture [B26–B28] and Pro is BYOK (A12). But steering currently calls hosted LLM APIs, so prompts and telemetry do leave unless routed to her approved endpoint; BYO-endpoint and local-model steering are roadmap (A9 — the PoC ran Claude-family only). State the split before she discovers it; Enterprise attestations are likewise roadmap (A10).

## 5. The buyer where payer ≠ user — David M., head of model risk / CTO, regulated enterprise (**expand motion, year-2+**)

- **Context:** bank or healthcare enterprise already paying $150–500k/yr for a DataRobot-class platform [C19][A27]; SR 11-7-style model-governance obligations; his signature is on the model inventory. He will never run Ascent himself. This card is documented now but sold in year 2+ (vendor-DD gate below).
- **Day-in-the-life pain moment:** annual validation cycle: his team reverse-engineers documentation for models whose development history is a chat log and a notebook graveyard. The platform he pays six figures for tracks deployments, not experimental rigor.
- **Current workaround:** human validators re-deriving what should have been recorded at experiment time; audit features are exactly what his current vendors gate to enterprise tiers without enforcing at run time [C18].
- **Trigger to switch:** an examiner finding on model documentation; or an internal team already using Ascent hands him a winner archive and it's the best development record he has ever seen.
- **Must-have language:** "Every kept model must come with evidence a validator can check without the developer in the room." / "Tamper-evident beats well-intentioned."
- **Objection to overcome:** his *first* objection is not about the product: "Who is this vendor? A pseudonymous solo founder (A5) does not pass our vendor-risk process." There is no clever answer — this is why the card is year-2+; prerequisites are a legal entity, security documentation, and a source-escrow line (market_type.md §4). Until then David is reached only as the internal recipient of a bottom-up team's winner archives. His *second* objection — "autonomous experimentation increases my model risk" — inverts with third-party evidence: humans-plus-discipline already produce leakage at published scale (294 papers, 17 fields [D5]); the CMU failure modes occur precisely when automation lacks gates [A46]. Sell the gates, not the autonomy. (Compliance attestations are roadmap, A10 — never claim them as shipped.)

---

## Decision

Beachhead commitment: cards **2 and 3** (payer = user, scalar-metric culture, existing $100–200/mo spend habit [C23], reachable inside the existing autoresearch community [A1][C35]). Card 1 is served by the same system and harvested via community content, not sales. Cards 4–5 are the year-2+ expand motion, entered only through bottom-up pull (Cursor/W&B pattern [C17][C18]), never cold, and gated on vendor-DD readiness (market_type.md §4). First-money test: put the audited EUR/USD and fraud bundles in front of 15 card-2/3 practitioners (BRIEF riskiest-assumption test) before building anything for cards 4–5.
