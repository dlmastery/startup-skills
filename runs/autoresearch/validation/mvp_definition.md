# MVP definition — Ascent: low-fidelity (tests the problem) → high-fidelity (tests whether the solution is bought)

> **What this is** — the two MVPs, in order: a low-fidelity one testing whether the problem is real in our terms, a high-fidelity one testing whether the solution is bought, and the earlyvangelist definition of a valid subject.
> **Why it exists** — the pack jumps straight to a nine-week build (the trust-test kernel) aimed at proving *evidence* is what practitioners want. If that premise is wrong we learn it in week 13, having spent our most expensive resource. A low-fidelity MVP tests it in week 4 for ten founder-hours — and none has been defined.
> **How to read it** — §3 and §4; read their "deliberately omits" rows, where MVPs rot into products. Attack §6's earlyvangelist screen for selection bias.
> **Depends on / feeds** — inherits [../BRIEF.md](../BRIEF.md), [riskiest_assumptions.md](riskiest_assumptions.md), [../product/features_prioritized.md](../product/features_prioritized.md); feeds [experiment_board.md](experiment_board.md), [get_keep_grow.md](get_keep_grow.md).

---

## 1. Three artifacts that are constantly confused

| Artifact | Its job | Its success condition | Not to be confused with |
|---|---|---|---|
| **`ascent` v0** (public OSS release) | A **channel act**: earn standing in an orphaned community with a named, upstream-credited successor | E5 — engagement on ≥10 of ~15 answered threads, ≥500 clones in 30 days | An MVP. v0 proves we showed up, not that anyone wants the layer |
| **Low-fidelity MVP** (§3) | Test the **problem**: is the pain we named the pain they have, in our terms? | Pre-declared in §3.4 | A landing page for the product. It sells nothing and asks for no money |
| **High-fidelity MVP** (§4) | Test whether the **solution is bought**: will they verify it, run it on private data, and pre-commit cash? | E1 (all three legs) then E4 | The product. It omits most of the product on purpose |
| ([../product/PRD.md](../product/PRD.md)) | Specifies the product we intend to build | — | **Neither MVP.** A PRD answers "what shall we build"; an MVP is an instrument that answers a question we might get a *no* to |

The two MVPs share code with v0 and with each other. They do not share purpose, and the failure mode this file exists to prevent is letting the engineering overlap collapse the questions into one.

---

## 2. Why the low-fidelity MVP is missing today, and what it costs to add

The current calendar (D-CALENDAR, [experiment_board.md](experiment_board.md)) is: weeks 1–9 build the kernel, weeks 8–10 recruit, weeks 10–13 run E1. The first external read on **whether evidence is what they want** therefore lands around week 13, after the kernel is built.

But the premise under the kernel is a specific, falsifiable claim from [../strategy/positioning.md §3](../strategy/positioning.md): that the buying clause is *"the evidence it didn't cheat"* rather than *"while you sleep."* If throughput is what they actually want, Ascent is competing against AutoML and coding agents on speed, where the quadrant argument does not hold and where the kernel is the wrong nine weeks of work.

That claim can be tested in weeks 2–5 with a page and twenty conversations, inside the community workstream that is already staffed at 15 hrs/wk. **Marginal cost: ~8–12 founder-hours, $0 cash, zero effect on the kernel schedule.** That asymmetry is the entire argument for this file.

---

## 3. Low-fidelity MVP — **"The Bridge Page + Ledger Teaser"**

### 3.1 What it is

| # | Component | Notes |
|---|---|---|
| 1 | The **bridge write-up** — "what 16 notable forks built, and the layer none of them did" [A2] | Already planned for days 1–30 ([../strategy/gtm.md §4](../strategy/gtm.md)); this MVP instruments it rather than adding work |
| 2 | A **static ledger teaser**: the EUR/USD campaign summarised as a readable table — 265+ experiments, raw test Sharpe +6.52, the deflation framing, the discards column — plus the fraud-vs-AutoGluon comparison | Every figure carries its framing: **founder-reported, reproducible from the repo, not independently verified** (A6). A champion selected from 265+ trials is exactly what the deflated Sharpe ratio discounts [D6][D7] |
| 3 | A **five-item problem-ranking probe** at the foot of the page (not a signup form): rank the costs of your last modelling project — *building the evaluation harness · not trusting your own result · throughput (1–3 experiments/day) · documentation for review · choosing the next experiment* | This is [../strategy/business_model_canvas.md §3](../strategy/business_model_canvas.md) H-VP, run eight weeks earlier and at zero engineering cost |
| 4 | One **free-text question**: "the last time you didn't trust one of your own results — what was it?" | The single best discriminator between a felt pain and an agreed-with premise |
| 5 | A **qualifier field**: "do you already pay for an AI coding or research tool out of your own budget?" | The P3 ∩ P4 overlap test from [../strategy/petal_diagram.md §4](../strategy/petal_diagram.md) |
| 6 | **20 discovery conversations**, 30 minutes each, on the existing script | [discovery_guide.md](discovery_guide.md); recruited from the same pools as E1 so the funnel is not run twice |

### 3.2 What it deliberately omits

No running code. No reproduction. No gates. No dashboard. No pricing, no checkout, no ask for money. **No claim that Ascent solves the problem** — the page argues that the problem exists and shows a ledger; it does not sell a remedy. Omitting the remedy is what makes the ranking answer trustworthy: a page that has already told the reader which cost matters cannot then measure which cost they rank first.

### 3.3 The question it answers

> **Is the problem we named the problem they have, in the terms we named it — and does the evidence cost outrank the throughput cost?**

### 3.4 The result that would falsify it (pre-declared, 2026-08-29)

**FAIL on any one of:**

| Leg | Threshold | If it fails |
|---|---|---|
| (a) Ranking | Fewer than **8 of 20** discovery subjects place an evidence item (*not trusting your own result*, or *documentation for review*) in their top two | The positioning headline clause is wrong. Rewrite [../strategy/positioning.md §3](../strategy/positioning.md) and re-aim the kernel — **before** its expensive half |
| (b) Concreteness | Fewer than **10 of 20** free-text answers contain a specific, dated incident rather than a general agreement | The pain is intellectual, not felt. Agreement without incidents is the classic false positive; it predicts no purchase |
| (c) Overlap density | Fewer than **25%** of page respondents answer yes to the budget qualifier | P3 ∩ P4 is thinner than [../strategy/petal_diagram.md §4](../strategy/petal_diagram.md) assumes, and the entire year-1 conversion plan is aimed at a population that does not pay for tools |

**Cost:** ~8–12 founder-hours, $0 cash. **Window:** weeks 2–5, reading before week 6 — i.e. before the kernel's second half is built. **Does not gate E1** on a pass; a fail redirects the kernel rather than stopping it, because a redirected kernel is still the right nine weeks of work and an unredirected one may not be.

---

## 4. High-fidelity MVP — **the trust-test kernel** (features #1–9)

### 4.1 What it is

The nine features already prioritized as NOW(a) in [../product/features_prioritized.md](../product/features_prioritized.md), stated here as an MVP contract rather than a build list:

| # | Feature | What it contributes to the test |
|---|---|---|
| 1 | Trial-ledger export + completeness audit | The honest denominator; without it no deflation is computable |
| 2 | Refusal ledger | Experiments refused pre-launch currently write no row; refusals are evidence and corpus data |
| 3 | `ascent reproduce`, epsilon-band tolerance policy | **The core act of the test.** Metrics within pre-declared bands plus config/data fingerprint equality — not bitwise equality |
| 4 | Seeded-violation harness | Turns "trust the gates" into a measured catch-rate; ≥50 seeds per gate class (E6) |
| 5 | Winner archive / champion bundle | The portable artifact a subject takes away |
| 6 | Split-verification surfacing | Purge/embargo parameters printed as an inspectable stamp |
| 7 | Offline DSR script | "+6.52 raw, X deflated over N trials" exists in text before any UI exists |
| 8 | Minimal single-OS BYOK path | Gates the private-data leg — subjects need their own keys |
| 9 | Reproduction-registry ping | One observable reproduction signal from day 1 |

### 4.2 What it deliberately omits, and why each omission is a decision

| Omitted | Feature | Why omitting it makes the test *better*, not just cheaper |
|---|---|---|
| Campaign dashboard | #10 | A dashboard confounds "credible evidence" with "pleasant interface." The test's whole subject is credibility |
| Constitution instantiation wizard | #11 | Subjects are practitioners who can hand-edit a config. The wizard is the OSS activation funnel, not a test prerequisite |
| Cross-OS BYOK, spend meter | #19, #20 | One OS suffices for 15 people; cross-OS is launch-tranche work that would consume kernel weeks |
| DSR UI panel | #16 | #7's text output is the honest content; the panel is presentation |
| SOTA catalog, steering copilot | #30, #42 | Pro value, not evidence |
| Any hosted or team surface | #33, #43+ | Nothing in the test involves a second user |
| **Pricing page and checkout** | — | **The paid ask is a separate experiment (E4), deliberately sequenced after E1.** Bundling them would let enthusiasm for the artifact be read as willingness to pay |

### 4.3 The question it answers

> **Will practitioners act on an audited result they did not produce — verify it themselves, run the system on their own private data, and then commit money?**

That is [../BRIEF.md](../BRIEF.md)'s riskiest assumption made operational: *practitioners will trust — and pay for — experiments they didn't run themselves.*

### 4.4 The result that would falsify it

Thresholds are inherited unchanged and frozen ([experiment_board.md](experiment_board.md) board rule 2):

| Gate | Threshold | Consequence of failure |
|---|---|---|
| **E1** (sessions weeks 10–13) | **PASS only if all three:** (a) ≥5/15 fresh-install reproduce a bundle with one command, unaided; (b) ≥3/15 run Ascent on their own private dataset; (c) ≥8/15 name specific evidence that would make them deploy, trade or publish the result | **Stop the paid path. Fix the proof artifact, not the marketing** ([../strategy/gtm.md §4](../strategy/gtm.md)) |
| **E6** (prerequisite, before E1 sessions) | ≥90% catch on deterministic-gate violation classes with ≤10% false positives, on ≥50 seeds per class | Fix the gates first. Never publish "evidence it didn't cheat" copy with unmeasured gates |
| **E2** (prerequisite) | Ledger complete including discards **and** DSR ≥ 0.95 | Pre-committed branch: lead with fraud-vs-AutoGluon; EUR/USD becomes the methodology showcase |
| **E4** (days 110–120, opens only on an E1 pass) | ≥30 pre-orders **and** ≥5 design partners | A2 (open-core) declared wrong; rework GTM and financials per the ASSUMPTIONS.md protocol |

**Narrow-miss rule, pre-committed:** a one-count miss on a single E1 leg triggers a diagnostic review against the operating-characteristic curves already computed in [experiment_board.md](experiment_board.md) — at healthy true rates the AND-of-three structure still carries up to a ~35% joint false-fail risk — but the thresholds themselves do not move.

---

## 5. Low- vs high-fidelity, side by side

| Dimension | Low-fidelity MVP | High-fidelity MVP |
|---|---|---|
| Tests | The **problem** | Whether the **solution is bought** |
| Question | Is the evidence cost the top cost? | Will they verify, run it on private data, and pay? |
| Subject count | 20 conversations + page traffic | 15 practitioners (recruited 40 → 15 at ~40%) |
| Runs in | Weeks 2–5 | Weeks 10–13 (kernel built weeks 1–9) |
| Founder cost | ~8–12 hours | ~9 weeks of build + ~10 hrs/wk weeks 8–13 |
| Cash cost | $0 | ~$0 cash, but **15 lifetime-Pro grants ≈ $1.5k/yr list each** — non-cash compensation, not free |
| Artifact | A page, a table, six questions | A runnable evidence surface |
| A pass means | Build the kernel we planned | Open the paid gate (E4) |
| A fail means | **Re-aim the kernel before building its expensive half** | Fix the proof artifact; the paid path stays closed |
| Can it produce a false positive? | Yes — agreement without incidents, which leg (b) exists to catch | Yes — a ~16% pass rate against a true reproduction rate of only 0.20 on leg (a) |

---

## 6. The earlyvangelist definition — five things someone must already have done

An earlyvangelist is not "an interested person." A subject who fails any of the five below cannot falsify anything: their yes is politeness and their no is inexperience. All five are required.

| # | Criterion | Screening question | Qualifies if |
|---|---|---|---|
| **1** | **Has the problem** | "How many experiments did you run against a single fixed scalar metric, on your own dataset, in the last six months?" | ≥10 (threshold: declared 2026-08-29; basis — the practitioner baseline is 1–3 hand-run experiments/day in bursts, so ten in six months separates a metric-grinder from an observer) |
| **2** | **Knows they have it** | "Tell me about the last time you didn't trust one of your own results." | A **specific, dated incident** — an overfit backtest, a leak found late, a model that degraded. Not a general concern |
| **3** | **Has been actively looking for a solution** | "What have you tried, to fix that?" | ≥1 named action in the last 12 months: starred/forked/filed an issue on autoresearch, tried AutoGluon or H2O, read López de Prado or the leakage literature [D5][D8], built their own purged-CV harness |
| **4** | **Has cobbled together an interim solution** | "Show me your research log." | An **actual artifact exists**: a notebook graveyard used as a log, a hand-rolled CV harness, a spreadsheet trial ledger, a manual+ChatGPT ritual. Nothing homemade means the pain has not yet cost them enough to act |
| **5** | **Has, or can commit, budget today** | "What do you pay for AI tooling per month, out of whose budget?" | Already spends **$100–200/mo** on a personal or trivially-expensed budget [C23], with **no procurement step**. An enthusiast who must raise a purchase order fails this criterion for a different reason than a hobbyist, but fails it |

**Ascent-specific sixth screen (not Blank's, required here):**

| # | Criterion | Question | Qualifies if |
|---|---|---|---|
| **6** | **Can run it on private data** | "Is there a private dataset you could run this on within a month?" | Yes, and they can name it. Public-dataset results are attackable — LLM contamination reaches up to 45% on popular benchmarks [D37][D38] — so the contamination-proof leg needs subjects who have somewhere private to point it |

**Scoring:** 5/5 = a valid E1 subject. 6/6 = a design-partner candidate (E4 target: ≥5). 4/5 or below = keep in the community, exclude from the test population and say so in the write-up.

**Common near-misses, named so they are not counted:**

| Looks like a lead | Fails on | Why it matters |
|---|---|---|
| Starred autoresearch, never cloned | 1 and 4 | The largest and most countable population in the pack — 94,800 people — and the least qualified. Stars prove demand for a free toy |
| Pays for Cursor, does not grind a metric | 1 | Lives in petal P4 but not P3; the wallet is real, the problem is not |
| Enthusiastic academic, no budget | 5 | Genuinely valuable — as a bundle publisher and citation source, deliberately unmonetized ([../financials/pricing.md §5.1](../financials/pricing.md)) — but cannot test willingness to pay |
| Enterprise contact who "loves it" | 5 (procurement) and the vendor-DD gate (A5) | Cannot buy this year; their enthusiasm is the most misleading signal available |

### 6.1 Selection-bias control (declared 2026-08-29)

Recruiting only 5/5 subjects risks selecting an audience that already agrees with the thesis, which is how a trust test returns a pass and a launch returns silence. Mitigation: of the ~40 candidates sourced for E1, **deliberately retain ~4 who satisfy criteria 1, 3, 4 and 5 but fail criterion 2** — metric-grinders with no remembered incident of self-distrust. Their results are reported **separately and are excluded from the E1 numerator**, because the thresholds are frozen. What they answer is the question the qualified cohort structurally cannot: does the pain have to be pre-felt, or can the ledger create it? A large difference between the two groups is the strongest available evidence about how wide this market is beyond the people already looking for us.

---

## 7. Recommended next 3

1. **Ship the low-fidelity MVP in weeks 2–5, inside the community workstream.** It costs ~10 founder-hours against a nine-week engineering commitment whose central premise it tests, it reuses the bridge write-up already scheduled for days 1–30, and its fail branch — re-aim the kernel — is only actionable while the kernel is still half-built.
2. **Freeze the kernel's omission list before week 1 of the build.** Every omission in §4.2 is a week that would otherwise disappear into the dashboard or the wizard, and both are more pleasant to build than the refusal ledger. The list, not the schedule, is what keeps E1 sessions starting in week 10.
3. **Screen all ~40 E1 candidates against the six criteria before outreach closes in week 10, and retain the four deliberate non-qualifiers.** Screening is what makes an E1 pass mean something and an E1 fail diagnostic; the control group is the only instrument in the pack that can distinguish "this market is real" from "we found the fifteen people who already agreed."
