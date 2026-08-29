# Go-to-market — Ascent

> **What this is** — The channel decision argued rather than assumed, the named acquisition loop, per-segment CAC hypotheses, and a 90-day motion with founder-hours capacity math.
> **Why it exists** — Ascent's audience is pre-assembled and unattended: 94.8k stars, ~185 open issues, no maintainer since 2026-03-26. This file sets the fork etiquette for claiming it without reading as a hijack, and gates the paid path behind the trust test — if fewer than 5 of 15 practitioners reproduce a bundle, what gets fixed is the proof artifact, not the marketing.
> **How to read it** — §4's day-by-day plan and the capacity table. Attack the founder-hour totals.
> **Depends on / feeds** — Inherits [`strategy/market_type.md`](market_type.md), [`strategy/positioning.md`](positioning.md), [`strategy/personas.md`](personas.md); feeds [`financials/revenue_build.md`](../financials/revenue_build.md) and [`validation/experiment_board.md`](../validation/experiment_board.md).

## 1. Channel decision: open-source-led, argued not assumed

The brief assumes open-core (A2/A3). The evidence says the assumption is right, for four independent reasons:

1. **The trust problem selects the channel.** The product's claim is verifiability, aimed at a population where 46% distrust AI output [C3]. A closed-source "trust me, it's audited" pitch is self-refuting; an inspectable protocol + reproducible bundles are the only credible form of the claim. Channel and product are the same argument (and per A11, the open constitution file IS the channel — the moat is the private corpus, infrastructure, and brand it feeds).
2. **The demand pool already exists as an OSS community.** 94.8k stars / 13.4k forks on the free minimal loop [A1], maintainerless since 2026-03-26 (52 open issues [A1]; ~185 issues+PRs combined [C35]). No other channel offers a pre-assembled, pre-educated, countable audience of the beachhead persona. Caveat carried from market_type.md: stars prove demand for a free toy, not for paid rigor — the conversion is the thing to be proven, not assumed.
3. **The conversion economics are benchmarked, not hoped.** OSS hosted-SaaS converts 1–5% of *active* users; enterprise licenses 0.01–0.1% at far higher ACV [C32]; freemium with sales-assist 5–7% good / 10–15% great [C31]. Precedents ran this play: W&B free-for-individuals → 1,400+ paying orgs → $1.7B exit [C34][C18]; Cursor $200M ARR with zero marketing spend, then 60% enterprise mix [C17].
4. **The monetization gates are historically proven.** GitLab/HashiCorp/W&B monetized on collaboration, hosting, and compliance/audit features [C31][C18] — matching Ascent's split under A12: **Pro = BYOK** (user's own LLM key; tokens user-side by construction) at $100–150/mo for the rigor layer + dashboards + catalog; **hosted/managed runs usage-billed on Team+** (Devin ACU precedent [C21]); Enterprise (audit retention, on-prem) year-2+.

Channels considered and subordinated: paid acquisition (wrong for a trust product), enterprise-first sales (contradicts market_type.md; also blocked in year 1 by vendor DD — see §3 row 5), academic publication (credibility support, too slow as a channel; workshop acceptance is a weak validity signal anyway [survey.md §5]).

## 2. The compounding acquisition loop (named)

**The Reproducible Champion loop:** every campaign ends in a winner archive — a fingerprinted, one-command-reproducible bundle (config, model, run log, trial ledger summary) [BRIEF]. Users publish bundles (SOTA catalog per public dataset); every published bundle is simultaneously (a) a proof artifact a skeptic can rerun, (b) content that ranks for "<dataset> SOTA," and (c) fuel for the reproduction network (A11 asset 2). Each reproduction converts a skeptic at zero marginal CAC and produces a potential publisher. Trackers never had this flywheel (their logs proved nothing [A-series Tier 5]); paper factories can't (their artifact is prose, not a rerunnable improvement [A12–A17]).

Loop math to instrument from day 1: bundles published/mo × reproductions/bundle × reproduction→signup rate. These three numbers are the growth model; no vanity metrics.

**Two pre-conditions before any bundle ships (binding, from positioning.md §4):**
1. **Self-deflate first.** Publish the DSR with true trial count + CPCV path distribution alongside every raw champion number ("+6.52 raw, X deflated over N trials, here's the ledger") [D6][D8]. If the deflated EUR/USD number is weak, lead with fraud-vs-AutoGluon and run EUR/USD as the methodology showcase. Caveat: DSR needs the full trial ledger *including discarded experiments* — verify the PoC logged discards; if not, the public deliverable is "DSR on a fresh instrumented run," stated plainly.
2. **Pre-empt the contamination objection.** Public-dataset bundles (Higgs, fraud, PathMNIST) are attackable: the agent's underlying LLM may "know" published solutions (contamination up to 45% on popular benchmarks [D37][D38]). Every bundle write-up states this and points to the answer: bring-your-own-private-dataset runs, which contamination cannot touch — cutting *for* Ascent's actual use case.

## 3. Channel plan by segment, with CAC hypotheses

| # | Channel | Segment | Motion | CAC hypothesis | Payback logic |
|---|---|---|---|---|---|
| 1 | Autoresearch community (issue authors, fork owners, discussion #225 audience [A2]) | Beachhead (personas 2–3) | Maintained successor project + substantive issue answers (see §4 etiquette) | ~$0 cash; founder time (assumption: 15–20 hrs/wk for weeks 1–8) | BYOK Pro at $100–150/mo (A12) means **dozens of converts justify the founder time** — 50 paying = $75k ARR; the corrected funnel (market_sizing §3) needs ~1.6% of active users in year 1, inside the [C32] norm |
| 2 | Reproducible champion bundles + technical posts (HN/X/arXiv-adjacent) | Beachhead + edge-low | Publish DSR-honest bundles per §2 | (assumption: $50–200/signup-equivalent in founder time, basis: devtool content CAC with an existing audience) | Content is permanent; reproductions compound per §2 |
| 3 | $99 pre-orders / design-partner commitments for the BYOK CLI tier | Beachhead | Landing page + waitlist; charge-at-commit, refundable | Blended target <$300 (assumption: ≤2 months Pro revenue, self-serve devtool norm) | Same conversion signal as a hosted build at ~5% of the build cost; converts to Pro at launch |
| 4 | Bottom-up team expansion | Persona 4 | In-product: shared archives + hosted usage-billed runs require Team (the W&B/GitLab gate line [C18][C31]; A12) | ~$0 acquisition (pull), sales-assist time only | Team $6–12k/yr (A8); one convert ≈ 4–8 Pro seats |
| 5 | Audit-trail-led quant/enterprise deals — **year-2+ only** | Personas 4–5 | Inbound pull only; demo = replay a winner archive in front of model risk | (assumption: $10–25k/deal founder-led, 3–9 mo cycle) | $100k+ ACV [C19]. Honest scoping: [C38] evidences outcome-elastic *dataset* budgets, not fast vendor onboarding; a pseudonymous solo founder (A5) fails bank/fund vendor-risk DD. Prerequisites budgeted before this channel opens: legal entity, security documentation/posture, source-escrow line item |

Deliberately not funded: conference sponsorships, paid social, outbound SDR. Revisit only if loop math (§2) stalls below the recalibrated kill trigger (market_sizing §6: <0.5% of measured *active* users after 6 months, or active base stuck under ~3k).

## 4. The 90-day motion

**Fork etiquette (binding, before day 1):** The successor project is named **ascent** — not "autoresearch-anything" — with prominent upstream credit in README and every announcement. Karpathy gets a private heads-up BEFORE launch (issue/email: "building the rigor layer as a separately-named project; happy to upstream anything you want"). On the dormant repo itself we have commenter rights, not maintainer rights: answer only the **top ~15 issues** where we can be substantively useful, full answers in-thread, zero link-drops. **Pre-written branch:** if Karpathy returns or blesses a different fork, we congratulate publicly, keep upstream compatibility, and shift acquisition weight to the plan-B channel — direct quant/ML community (r/quant, QuantConnect/Numerai forums, SSRN/arXiv-adjacent readership) where the audit/DSR story stands on its own without the repo.

**Days 1–30 — earn standing in the community.** 1. Ship ascent v0: the constitution + gates running the original nanochat task (leakage-safe splits, fingerprints), upstream-credited. 2. Answer the top ~15 autoresearch issues substantively. 3. Post the bridge write-up ("what 16 notable forks built, and the layer none of them did" [A2]). 4. Instrument the funnel: measure *active users* (cloned + ran within 90 days), not stars.

**Days 31–60 — run the trust test before selling anything.** 5. The 15-practitioner test (BRIEF), upgraded: (a) at least 3 of 15 run Ascent on **their own private dataset** (the contamination-proof leg, §2.2); the rest reproduce the public bundles; count one-command reproductions and "what evidence would make you deploy" answers. (b) **Recruitment mechanics:** source ~40 candidates to yield 15 at a ~40% show/complete rate (assumption: standard research-recruiting attrition) — 15 from autoresearch issue/fork authors, 10 from r/quant + QuantConnect/Numerai forums, 10 from the founder's network + trust-test volunteers off the bridge post, 5 from AutoGluon/H2O issue trackers; incentive: lifetime Pro + named acknowledgment (no cash, keeps it credibility-selected); calendar: weeks 5–7 outreach, weeks 7–10 sessions — outreach starts week 5, not week 9. 6. Publish results with the self-deflation treatment (§2.1) and announce the trial-count-corrected acceptance gate on the roadmap [survey.md §6]. Honesty is the differentiator; overclaiming is the one unrecoverable error with persona 2.

**Days 61–90 — open a paid signal, not a hosted build.** 7. **No hosted-Pro build.** Instead: $99 pre-order / design-partner commitments against the BYOK CLI tier (channel 3) — target 30 pre-orders and 5 design partners from trust-test participants and bundle reproducers. Same conversion evidence at ~5% of the cost; hosted dashboards get built only after pre-orders clear the gate. 8. First 10 customers by name-of-type: 3 solo quants from the issue list; 2 prop-shop researchers from the trust-test cohort; 2 applied-ML engineers who reproduced the fraud bundle; 1 postdoc who reproduced Higgs; 2 AutoML power users frustrated in public (AutoGluon/H2O trackers). First 100: same mix scaled through the champion loop — target 30 published bundles, ≥3 reproductions each, by day 180.

**Founder-hours capacity math, weeks 1–12** (solo founder, A5; assumption: 55 productive hrs/wk):

| Workstream | Hrs/wk |
|---|---|
| ascent v0 + BYOK CLI packaging | 15 |
| Community: issue answers, fork upkeep | 15 |
| Trust test: recruiting, sessions, write-up | 10 (weeks 5–10; ~0 before) |
| Bundles + DSR/CPCV computation + posts | 10 |
| Admin/entity/misc | 5 |

Weeks 1–4 run ~50 hrs (no trust test yet); weeks 5–10 run ~55 and are the crunch. **If over capacity, the day-61–90 pre-order gate slips first** — explicitly: paid-signal work is deferred before community work (the channel decays without maintenance — the comp died of exactly this [C35]) and never at the expense of the trust test, which is the decision gate for everything downstream.

Gates: if <5/15 trust-test practitioners reproduce (test fails per BRIEF), stop the paid path and fix the proof artifact, not the marketing. If paid conversion <0.5% of measured active users by month 6 (recalibrated trigger, market_sizing §6), assumption A2 is wrong — rework GTM and financials per ASSUMPTIONS.md protocol.

## 5. Recommended next 3 moves

1. **Ship ascent v0 (named, upstream-credited, Karpathy notified first) and start answering the top ~15 orphaned issues this week** — the beachhead is pre-assembled with zero competing maintainer [A1][C35], and every week of dormancy invites someone else to claim it; the pre-written plan-B branch means this move is safe even if Karpathy returns.
2. **Verify the PoC's discarded-trial ledger and start the DSR/CPCV computation now** — it gates every public bundle (§2.1); if discards weren't logged, the fresh instrumented run must start immediately so the self-deflated headline exists by the day-31 trust test.
3. **Begin trust-test recruitment in week 5 (40 candidates → 15 completers, incl. ≥3 on private data)** — it is the pack's riskiest assumption (BRIEF), the private-data leg neutralizes the contamination attack [D37][D38], and its outcome decides whether the $99 pre-order gate opens at day 61 or the proof artifact gets fixed instead.
