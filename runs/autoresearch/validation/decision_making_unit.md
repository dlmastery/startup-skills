# Decision-making unit — Ascent: user · payer · champion · saboteur · and everyone with a veto

> **What this is** — the buying roles for Ascent's four deal shapes — what each wants, fears, is moved by, and can kill the deal over — plus a register of every veto and whether it is satisfiable today.
> **Why it exists** — [../strategy/personas.md](../strategy/personas.md) covers who *benefits*. Benefit does not close deals; the absence of a blocker does. Ascent has ten identifiable vetoes and four cannot be satisfied this year — currently scattered across five files as caveats, therefore never counted. Counted, it justifies the beachhead.
> **How to read it** — §2's configurations, then §4's veto register, the real payload. Attack §5: the saboteurs we create ourselves.
> **Depends on / feeds** — inherits [../strategy/personas.md](../strategy/personas.md), [../strategy/sales_roadmap.md](../strategy/sales_roadmap.md); feeds [mvp_definition.md](mvp_definition.md), [../strategy/channel_plan.md](../strategy/channel_plan.md).

---

## 1. Division of labour

| File | Answers |
|---|---|
| [../strategy/personas.md](../strategy/personas.md) | Who are they, what is their day like, what do they gain |
| [../strategy/sales_roadmap.md](../strategy/sales_roadmap.md) | Where do these people sit, who influences them, how do we reach them, in what order |
| **this file** | **Which role does each person play in a purchase, and who can stop it** |

Roles, as used throughout: **User** runs it · **Payer** funds it · **Champion** spends internal credibility on it · **Saboteur** works against it without formal authority · **Veto** can stop it unilaterally regardless of everyone else's enthusiasm.

---

## 2. The four configurations

### Config A — Marcus, solo quant / two-person prop shop (**the year-1 target**)

| Role | Who | Wants | Fears | Evidence that moves them | What kills the deal |
|---|---|---|---|---|---|
| **User = Payer = Champion** | Marcus | Deployable signal improvements he can act on; more audited attempts per week than he can run himself; campaign memory that survives his own context loss | That he is paying to **automate self-deception at scale** — 265 overfit trials instead of three. He has read the multiple-testing literature and knows a high in-sample Sharpe is near-guaranteed at a true Sharpe of zero [D7] | The full trial ledger **including discards**; the deflated number published beside the raw one; purge/embargo parameters printed as an inspectable stamp; measured gate catch-rates on seeded violations (E6); one-command reproduction | **One overclaim.** A raw +6.52 presented as a result rather than as an upper bound on the honest number ends the relationship permanently. So does a `reproduce` that fails quietly |
| **Saboteur (internal)** | His own priors, and r/quant consensus | To not be the person who fell for a hype tool | — | Agreeing with the critique out loud, first, before he raises it; the trial-count-corrected acceptance gate as roadmap, honestly labelled as roadmap (feature #25) | Being defensive about the DSR objection |
| **De-facto veto** | `ascent reproduce` on his own machine | — | — | — | It fails, or it succeeds only with help. **This is why E1 leg (a) requires *unaided* reproduction** |
| **Soft veto (2-person shop)** | The partner, on shared P&L | To know the running cost before it starts | An open-ended token bill | BYOK at $3–12/day mid-tier on their own key [B18][B22]; the client-side spend meter (feature #20, launch tranche) | An unbounded or unmeasurable spend |

**The strategic point of Config A:** the DMU has one box. No security review, no procurement, no committee, no vendor questionnaire. That is not a small-customer consolation — it is the reason the beachhead is winnable this year while every configuration below is not.

### Config B — Jae, applied-ML engineer inside a mid-size fintech

| Role | Who | Wants | Fears | Evidence that moves them | What kills the deal |
|---|---|---|---|---|---|
| **User · Champion** | Jae | The quarterly fraud-model improvement, and documentation that survives model-risk review without three weeks of backfill | Being the person who introduced an autonomous agent to production-adjacent data | Rerunning the fraud bundle on his own laptop in one command; the audit trail as something his model-risk reviewer accepts | An artifact his reviewer rejects — then Jae has spent credibility and got a liability |
| **Payer** | Engineering manager | Team velocity for a defensible $125/mo — the team already expenses Cursor and Claude [C17][C23] | Tool sprawl: a fourth ML tool with a third overlapping purpose | Jae's own reproduction, plus a clear statement of what Ascent does that AutoGluon and MLflow structurally cannot | "Why a third tool?" left unanswered. At this price the manager is not evaluating cost, they are evaluating clutter |
| **VETO** | **AppSec / security review** | A reviewable execution model; credentials and data that stay put | An agent with an API key operating near production data | BYOK plus local execution — data and keys stay in Jae's environment (features #8, #19); a pilot on public or synthetic data first; the audit trail as the review artifact itself; **the data-flow disclosure one-pager** stating that steering calls hosted LLM APIs today | **Discovering the hosted-steering data flow during the review rather than in our own disclosure.** The flow is defensible; concealing it is not |
| **Saboteur** | Data platform team | Consolidation; their platform staying central | Shadow tooling they must later support | The additive framing: Ascent writes the evidence a tracker was never designed to produce and does not replace it. The "what is free / what is paid" sheet ([../strategy/channel_plan.md §5](../strategy/channel_plan.md)) | Positioning Ascent as a tracker replacement. That converts a stall into an opponent, and [../strategy/petal_diagram.md §5](../strategy/petal_diagram.md) already declines that fight |
| **Latent champion** | Model-risk reviewer | Development records that a validator can check without the developer in the room | Reverse-engineering documentation from a chat log and a notebook graveyard | The winner archive as a development record | Claiming compliance attestations — they are **[ROADMAP]** (A10) and a reviewer will know |

### Config C — Elena, head of research at a ~40-researcher systematic fund (**year-2+, bottom-up only**)

| Role | Who | Wants | Fears | Evidence that moves them | What kills the deal |
|---|---|---|---|---|---|
| **User** | Pod researchers | More audited attempts; campaign memory | **Two fears, and the second is the one nobody writes down.** (1) Looking automated, therefore replaceable. (2) **The ledger makes their true trial counts visible to their boss** — the audit trail that sells the fund is a threat to the researcher | Framing family-level deflated thresholds (feature #45) as a **defensible promotion standard** that protects a researcher whose strategy is questioned — not as a management dashboard | Any demo that shows the ledger to the manager before it has shown it to the researcher |
| **Payer** | Elena | "The audit trail and the campaign memory, not the hill-climbing — my people can climb hills." Budget is outcome-elastic [C38]; tech and data infra run $200–500k/yr [C37] | Institutional memory walking out the door with the people who hold it; a strategy dying in committee because ~300 variants cannot be reconstructed | One pod adopting bottom-up and making a single review meeting 10× shorter; a tamper-evident run log with trial counts she can show an allocator | Cold outreach of any kind. Her documented trigger is entirely bottom-up [C17] |
| **Champion** | The pod lead who adopted first | To be right about the tool they brought in | — | Their own reproduced results | — |
| **Saboteur** | Internal platform team | To build it themselves — they already run the internal platform and conventions at 40-person scale | Losing scope | The honest concession: they *can* build the loop. What they cannot backfill is the cross-domain calibration corpus, and that is an accumulating claim still under test (E8/E8-full, A11) | Overstating the moat. This audience will price a 12–24-month window correctly ([../strategy/positioning.md §5.1](../strategy/positioning.md)) |
| **VETO 1** | Fund CTO / infra | Alpha that never touches a vendor's cloud | Prompt and telemetry egress | Execution is local by architecture [B26–B28] and Pro is BYOK (A12) — **but steering calls hosted LLM APIs today.** BYO-endpoint and local-model steering are **[ROADMAP]** (feature #49) | The split being found rather than disclosed |
| **VETO 2** | Compliance | A retained, reconstructable decision trail | An examiner asking for a trail that does not exist | Audit-trail retention policies (feature #47, LATER) | Claiming retention SLAs before they are built |
| **VETO 3** | **Vendor risk / operational DD** | A vendor that exists as a legal entity with a security posture | — | Legal entity, security documentation, source escrow ([../strategy/market_type.md §4](../strategy/market_type.md)) | **Fails today.** A pseudonymous solo founder (A5) does not clear this gate |

### Config D — David, model risk / CTO, regulated enterprise (**year-2+, no channel today**)

| Role | Who | Wants | Fears | Evidence that moves them | What kills the deal |
|---|---|---|---|---|---|
| **User** | Internal ML team | As Config B | As Config B | As Config B | As Config B |
| **Payer · Approver** | David | Every kept model arriving with evidence a validator can check without the developer present. "Tamper-evident beats well-intentioned" | An examiner finding on model documentation; his signature is on the model inventory | His own team handing him a winner archive that is the best development record he has seen — better than what his $150–500k/yr platform produces [C19] | Leading with autonomy. His second objection is that autonomous experimentation *increases* model risk; the inversion is third-party evidence that humans-plus-discipline already produce leakage at published scale (294 papers, 17 fields [D5]) and that the CMU failure modes occur precisely where automation lacks gates [A46]. **Sell the gates, not the autonomy** |
| **Saboteur 1** | Incumbent platform vendor | The renewal, and the relationship | Displacement | — | Nothing we control. Do not fight for the platform budget line; be the evidence layer inside it |
| **Saboteur 2** | Internal model validators | Their role | A tool that automates the part of their job they are measured on | Reframe: the archive removes the *reconstruction* work, not the judgement work | Positioning the archive as a replacement for validation |
| **VETO 1–4** | Vendor risk · CISO · Legal · Procurement | An assessable vendor | — | Entity, security documentation, SOC 2 path, escrow, and a stated liability position on autonomous experimentation | **All four fail today.** Attestations are **[ROADMAP]** (A10) and the liability position is not even drafted |

---

## 3. Who signs, per configuration

| Config | Signs | Cycle | Blockers between "yes" and money |
|---|---|---|---|
| A — solo quant | Marcus, on his own card | Days to weeks (a reproduce-and-verify cycle, not an impulse buy) | **None** |
| B — fintech team | Jae or his manager, at $125/mo | Weeks | One: security review |
| C — fund | Elena, on a Team contract | Months, bottom-up only | Three: infra, compliance, vendor risk |
| D — regulated enterprise | Procurement, on David's sponsorship | Quarters | Four, all currently failing |

---

## 4. Veto register — the file's payload

| # | Veto holder | Config | What it gates | What satisfies it | Satisfiable **today**? | Owning artifact |
|---|---|---|---|---|---|---|
| 1 | Marcus's own reproduction attempt | A | Everything | `ascent reproduce` succeeding unaided, epsilon-band tolerance | **YES** — kernel feature #3 | E1 leg (a) |
| 2 | Shop partner, on cost | A | A second seat | BYOK spend visibility at $3–12/day [B18][B22] | **Partially** — the spend meter (#20) is launch-tranche, not kernel | [../product/features_prioritized.md](../product/features_prioritized.md) |
| 3 | AppSec / security review | B | Pilot start on any internal data | BYOK + local execution + a public/synthetic pilot + honest data-flow disclosure | **Partially** — local execution yes, hosted steering disclosed, BYO-endpoint **[ROADMAP]** (#49) | Data-flow disclosure one-pager (to write) |
| 4 | Data platform team (informal) | B | Nothing formally; can stall indefinitely | Additive framing + the free/paid sheet | **YES** — it is a document | [../strategy/channel_plan.md §5](../strategy/channel_plan.md) |
| 5 | Model-risk reviewer | B | Production use of the output | The winner archive as a development record | **YES for the archive; NO for attestation** (A10 **[ROADMAP]**) | Winner archive (#5) |
| 6 | Fund CTO / infra | C | Any fund pilot | BYO-endpoint or local-model steering | **NO — [ROADMAP]** (#49) | — |
| 7 | Fund compliance | C | Contract | Audit-trail retention policies | **NO — LATER** (#47) | — |
| 8 | Fund vendor risk | C | Any contract | Legal entity, security documentation, escrow | **NO** (A5) | [../financials/use_of_funds.md](../financials/use_of_funds.md) block 4 |
| 9 | Enterprise vendor risk / CISO / procurement | D | Any contract | The above plus a SOC 2 path and attestations | **NO** (A5, A10) | block 4 |
| 10 | Enterprise legal | D | Any contract | A stated liability position on autonomous experimentation | **NO — not drafted** | — |

**Read the last column.** Six of ten vetoes are satisfiable today or with a document; the four that are not (rows 6–10, counting 9 as one) all sit above the beachhead, and none of them is a product-quality problem. They are corporate-identity and roadmap problems, which is why [../strategy/market_type.md §4](../strategy/market_type.md) dates the enterprise motion to year 2 and why [../strategy/channel_plan.md §5](../strategy/channel_plan.md) closes channel C10. Any plan that books fund or enterprise revenue before those rows flip is booking revenue against a veto.

---

## 5. The saboteurs we create ourselves

Three of the most dangerous actors in this file are not on anyone's org chart.

| # | Self-inflicted saboteur | How it is created | Cost | Prevention |
|---|---|---|---|---|
| 1 | **The overclaim** | Publishing +6.52 as a result rather than as an upper bound on the honest number; claiming "LLM-agnostic validated" from a two-stack existence proof (E7); claiming attestations that are **[ROADMAP]** | Permanent with persona 2 — the one buyer for whom a single overclaim is unrecoverable. Also the fastest route to r/quant consensus against us | Self-deflate first, always: raw and deflated together, ledger attached ([../strategy/positioning.md §4.2](../strategy/positioning.md)). Say "runs on X and Y", never "LLM-agnostic" |
| 2 | **The ledger framed as surveillance** | Demoing the trial ledger and family-level thresholds to Elena before demoing them to her researchers | Turns every user in Config C into a saboteur, and users who resist a tool their boss bought are how fund deployments die quietly | Frame family-level thresholds as a promotion standard that *protects* the researcher; show researchers first |
| 3 | **The link-drop** | Promoting Ascent in autoresearch issue threads instead of answering the question that was asked | Converts the only permission-giver in the community into an opponent, and costs the pre-assembled audience that channel C4's ~$0 CAC depends on | Full answers in-thread, zero link-drops, separate project name, upstream credit, and a private heads-up to Karpathy before launch ([../strategy/gtm.md §4](../strategy/gtm.md)) |

---

## 6. Finding the DMU in a live conversation

Four questions, asked in this order, that map any prospect onto §2 in under five minutes. Add them to the E1 session script ([discovery_guide.md](discovery_guide.md)):

| # | Question | Reveals |
|---|---|---|
| 1 | "Whose budget would this come out of, and would you need to ask anyone?" | Payer, and whether Config A holds. A pause here means the DMU is not one box |
| 2 | "Who else would need to look at this before you ran it on real data?" | The veto — reliably AppSec in Config B, infra in Config C. If the answer is "nobody", confirm by asking what they ran last time |
| 3 | "Who inside would be least happy that you brought this in?" | The saboteur. Practitioners answer this one accurately and cheerfully |
| 4 | "If this worked, who would you show the result to?" | The latent champion and the real consumer of the evidence — often a model-risk reviewer nobody had mentioned |

---

## 7. Recommended next 3

1. **Write the data-flow disclosure one-pager this month.** It is the satisfying artifact for veto #3, the honest half-answer to veto #6, and the difference between a disclosed limitation and a discovered one. It costs an afternoon and it is the only unsatisfied veto in the register that a document can move.
2. **Add the four DMU questions to the E1 session script before outreach closes in week 10.** The trust test currently measures whether a practitioner will act; it does not ask who else would have to agree. Fifteen answers to question 2 are the cheapest possible map of the vetoes waiting in Config B, and they cannot be collected retroactively.
3. **Put the veto register's last column into the revenue model's review, not just this file.** Four vetoes are unsatisfiable this year and all four sit on the largest budgets in [../strategy/petal_diagram.md §3](../strategy/petal_diagram.md). Any forecast line that depends on rows 6–10 flipping should be labelled with the prerequisite (entity, security documentation, escrow, feature #49) rather than with a date.
