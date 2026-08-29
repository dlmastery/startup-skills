# Business Model Canvas — Ascent (Osterwalder, 9 blocks, one falsifiable hypothesis each)

> **What this is** — the nine-block Osterwalder canvas, one falsifiable hypothesis per block, and the cheapest experiment that kills it.
> **Why it exists** — this pack's Lean Canvas ([lean_canvas.md](lean_canvas.md)) drops Key Partners, Key Activities and Customer Relationships, so three load-bearing beliefs — no commercial partner is needed, 15 hrs/wk of community maintenance is acquisition not charity, a user reaches first value with no human onboarding — were never written down, so never tested. Discovering them false at month 9 costs the runway.
> **How to read it** — Hypothesis and Kill-test columns first; Content is inherited. Attack §3's three blocks with no existing experiment row.
> **Depends on / feeds** — inherits [../BRIEF.md](../BRIEF.md), [lean_canvas.md](lean_canvas.md), [../financials/pricing.md](../financials/pricing.md); feeds [../validation/experiment_board.md](../validation/experiment_board.md) and [channel_plan.md](channel_plan.md).

---

## 1. Why this file exists alongside the Lean Canvas

| Osterwalder block | Lean Canvas cell | Status |
|---|---|---|
| Customer Segments | Customer Segments | same |
| Value Propositions | Unique Value Proposition | same |
| Channels | Channels | same |
| **Customer Relationships** | — | **dropped by Maurya** |
| Revenue Streams | Revenue Streams | same |
| **Key Activities** | — | **dropped by Maurya** |
| **Key Resources** | (partly) Unfair Advantage | narrowed — Unfair Advantage asks what can't be copied, not what the business must own to operate |
| **Key Partners** | — | **dropped by Maurya** |
| Cost Structure | Cost Structure | same |
| — | Problem | Lean-only (kept: see [lean_canvas.md](lean_canvas.md)) |
| — | Solution | Lean-only |
| — | Key Metrics | Lean-only |
| — | Unfair Advantage | Lean-only |

Maurya dropped the three blocks on the grounds that a pre-product startup has no partners, no fixed activities and no relationship model yet. For Ascent that reasoning fails on all three counts, and the failures are specific:

1. **Key Partners** — Ascent's whole cost structure rests on an unstated claim that it depends on *nobody*: BYOK puts the LLM contract on the user's card (A12), the laptop puts compute on the user's hardware [B26–B28], the literature step reads public sources. That is a strong, cheap-to-check claim, and it has never been checked (§4, H-KP).
2. **Key Activities** — [gtm.md §3](gtm.md) budgets 15 founder-hours/week to answering another project's orphaned issues and books the CAC at ~$0. That is either the highest-leverage activity in the company or a 780-hour/year donation. Nothing in the pack distinguishes the two (§4, H-KA).
3. **Customer Relationships** — [market_type.md §4](market_type.md) already concedes adoption is gated by a *reproduce-and-verify cycle of days to weeks*, not a click. If that cycle needs a founder in it, the 150-paying-user plan ([market_sizing.md §5](market_sizing.md)) is capacity-capped, not demand-capped, and the whole self-serve pricing architecture is mis-specified (§4, H-CR).

Keep both files. The Lean Canvas carries Problem / Solution / Key Metrics / Unfair Advantage, which Osterwalder has no home for; this canvas carries the three blocks Maurya cut. Where the two overlap, the Lean Canvas is canonical for content and this file is canonical for the **hypothesis and its test**.

---

## 2. The canvas

| # | Block | Content (inherited, sourced) |
|---|---|---|
| 1 | **Customer Segments** | Beachhead: individual quant researchers + applied-ML engineers, payer = user (personas cards 2–3; A3). Edge-low: domain scientists with a dataset and a metric, served by the same system, deliberately unmonetized ([../financials/pricing.md §5](../financials/pricing.md)). Expand, year-2+ and bottom-up only: fund research leads and regulated-enterprise model-risk buyers (cards 4–5), gated on vendor-DD readiness ([market_type.md §4](market_type.md)) |
| 2 | **Value Propositions** | "Your metric, monotonically better, while you sleep — with the evidence it didn't cheat." Sole occupant of the sustained-campaign × audit-gated quadrant ([positioning.md §2](positioning.md)). Unit of value: one audited, kept improvement to the user's own metric ([../BRIEF.md](../BRIEF.md)) |
| 3 | **Channels** | Open-source core (`ascent`, upstream-credited) into the orphaned autoresearch community — 94,800 stars / 13,400 forks, maintainerless since 2026-03-26 [A1][C35]; DSR-honest reproducible champion bundles (the loop, [gtm.md §2](gtm.md)); $99 pre-order → BYOK Pro self-serve. Full economics per channel in [channel_plan.md](channel_plan.md) |
| 4 | **Customer Relationships** | Self-serve, asynchronous, evidence-mediated: the relationship is carried by a bundle a stranger can rerun, not by a person. Community reciprocity (substantive issue answers) upstream; a public reproduction network downstream; founder-led contact reserved for the 15 trust-test alumni and 5 design partners ([gtm.md §4](gtm.md)) |
| 5 | **Revenue Streams** | Free OSS core $0 · **Pro $125/mo BYOK** ($100–150 band) · **Team $750/mo base + hosted runs at cost × 1.3–1.5 + $50–100/seat beyond 5** · **Enterprise $100k+/yr, year-2+, not sold now** — all from [../financials/pricing.md §4](../financials/pricing.md). Founding cohort: ≤35 users at a lifetime $99/mo lock (≤$11k/yr foregone) |
| 6 | **Key Resources** | (a) The private cross-domain **calibration corpus** — full trial ledgers *including discards*, gate catch-rates on seeded violations, what-worked-where priors (A11); (b) the founder's operating experience across six domains and the steering log ([../narrative/founder_story.md](../narrative/founder_story.md)); (c) ~55 productive founder-hours/week, the binding year-1 constraint ([gtm.md §4](gtm.md)); (d) the rigor brand. **Not a resource: the constitution file** — it ships open and is the channel (A11) |
| 7 | **Key Activities** | (a) Community maintenance: ~15 hrs/wk answering the top ~15 orphaned issues; (b) rigor engineering: the trust-test kernel, features #1–9 ([../product/features_prioritized.md](../product/features_prioritized.md)); (c) self-deflation publishing: DSR/CPCV computation + bundle write-ups, ~10 hrs/wk; (d) corpus instrumentation — logging every discard and refusal from v0 day 1 ([positioning.md §5.4](positioning.md)). **Not an activity in year 1: outbound sales** |
| 8 | **Key Partners** | Deliberately near-empty. Upstream goodwill (Karpathy / autoresearch — credit and a pre-launch heads-up, no agreement). LLM providers are the *user's* counterparty under BYOK, not ours (A12) — a designed non-partnership that doubles as the platform-risk hedge (A9). Public goods used, not partnered with: arXiv, OpenML/Kaggle/HuggingFace-hosted public datasets. Domain communities (r/quant, QuantConnect, Numerai) are channels, not partners. **[ROADMAP]** and year-2+ only: a GPU provider for hosted Team runs; a security auditor and escrow agent as vendor-DD prerequisites ([market_type.md §4](market_type.md)) |
| 9 | **Cost Structure** | Token COGS ≈ $0 on Pro by construction (BYOK, A12) — the single most important line in [../financials/unit_economics.md](../financials/unit_economics.md). Cash COGS $7.90–14.90/user/mo; imputed support $3.80–7.60 at 150 users → **82.0% fully-loaded GM worst case**, ≥85% at 300+. Hosted-run GPU is passthrough, billed at cost × 1.3–1.5 (23–33% GM). The real year-1 cost is founder-hours; the enterprise prerequisites (entity, security posture, escrow) are budgeted before that tier opens |

---

## 3. One falsifiable hypothesis per block, and the cheapest test that kills it

Tests marked **NEW** did not exist anywhere in this pack before this file; they are the concrete return on running Osterwalder alongside Maurya. Thresholds carrying no source tag are pre-registrations made here (threshold: declared 2026-08-29).

| # | Block | Falsifiable hypothesis (one) | Cheapest test that kills it | Cost | Time | Kills company? |
|---|---|---|---|---|---|---|
| 1 | Customer Segments | **≥50% of the first 30 paying users pay from a personal or personally-expensed card** — i.e. payer = user, as A3 asserts | Add one required field to the E4 pre-order checkout: "who approves this spend — me / my manager / procurement". Read at window close, ~day 120 | $0 (one Stripe field) | 0 days marginal; reads at day 120 | **Yes for the motion** — <50% means payer ≠ user, self-serve pricing, CAC model and the no-sales-headcount plan are all mis-specified; sequencing flips to Team-first |
| 2 | Value Propositions | **The evidence is what they buy, not the automation:** ≥8/15 E1 practitioners rank an evidence item first when forced to rank Ascent's four capabilities (runs while you sleep · chooses the next experiment · enforces the split protocol · hands you a reproducible audit bundle) | One ranking card at the close of each E1 session ([../validation/experiment_board.md](../validation/experiment_board.md) E1, sessions weeks 10–13). **NEW** — E1 measures behaviour, never which clause caused it | $0 | 0 days marginal | **Yes for positioning** — if automation ranks first we are competing on throughput against AutoML and coding agents, where the quadrant argument does not hold ([positioning.md §1.3](positioning.md)) |
| 3 | Channels | **Paid conversion ≥0.5% of corrected active users by month 6** (plan needs ~1.6% for the 150-user target) | E4 ($99 pre-orders, ≥30 + 5 design partners) against the E3 corrected-active denominator | ~$1k cash | 10-day window, days 110–120 | **Yes for the business model** — the standing kill trigger; below it A2 (open-core) is declared wrong ([market_sizing.md §6](market_sizing.md)) |
| 4 | **Customer Relationships** | **A user reaches first value with no human in the loop:** ≥5/15 E1 recruits reproduce a bundle unaided (E1a) **and** ≥60% of the pre-order cohort reach a first own-data campaign without a founder call | Tally founder-contact events per user for 30 days post-activation, alongside the E1a count. **NEW** — nothing in the pack counts founder touches per activation | $0 (a tally column) | 30 days after first activations | **Yes for scale** — if every activation needs a call, growth is capacity-bound at ~55 founder-hrs/wk and the $225k run-rate is unreachable regardless of demand |
| 5 | Revenue Streams | **Willingness to pay exists *at list*, not only at the discount:** of the pre-order cohort, offer half the $99 lifetime lock and half the $125 list — ≥40% of the list-price arm converts relative to the lock arm | Split the E4 pre-order page 50/50 by arrival order. **NEW** — E4 as written tests only the *existence* of willingness at a 21% discount, never the level; a pass at $99 says nothing about $125 | $0 (one page variant) | Same 10-day window | **No, but repricing follows** — a large gap means the $125 plan number in [../financials/pricing.md](../financials/pricing.md) and every downstream revenue build are wrong |
| 6 | Key Resources | **The corpus is a resource, not a story:** corpus-primed campaigns reach their first kept champion in ≥20% fewer experiments than cold starts | E8 directional smoke test (1 paired run/arm, 2 tasks, ~month 4–6), then E8-full (≥3 paired runs/arm) | Laptop compute + logging discipline, already budgeted | Month 4–6 / block C | **Partially** — if false, the moat is hosted infrastructure + brand inside the honest 12–24-month window ([positioning.md §5.1](positioning.md)) |
| 7 | **Key Activities** | **Community maintenance is acquisition, not charity:** the ~15 answered issue threads produce ≥10 substantively engaged threads and ≥500 successor-repo clones in 30 days, **and** ≥25% of the first 100 signups trace to an answered thread or the bridge post | E5 as written, extended with a one-question "where did you first hear about Ascent?" field at signup. **NEW** — E5 measures engagement but never attributes a signup to it | $0 (one signup field) | 30 days | **Yes for the CAC model** — the ~$0 CAC in [gtm.md §3 row 1](gtm.md) is the cheapest line in the plan; if unattributable, 780 founder-hours/year should move to bundles and the plan-B channel |
| 8 | **Key Partners** | **Ascent can deliver its full trust-test kernel with zero commercial agreements in place** — every dependency is the user's own (their LLM key, their hardware) or a public good | Dependency audit of kernel features #1–9: enumerate every external service the loop touches (LLM endpoints, citation/DOI resolution, dataset hosts, package registries) and record each one's terms, rate limits and redistribution rules. **NEW** — the pack has no partner or dependency analysis anywhere | 1 founder-day | 1 day, runnable this week | **No, but it moves risk** — any hard dependency (a rate-limited citation API, a non-redistributable benchmark licence) enters the risk register and materially complicates on-prem/air-gapped [ROADMAP] |
| 9 | Cost Structure | **Pro fully-loaded GM stays ≥80% at 150 users** — i.e. actual delivery cost stays under the $22.50/user/mo worst case, and support stays under ~0.5 hr/user/mo | Measure copilot inference spend + hosting bill + a logged support-hour count across the first 30 paying users for 60 days, against the modelled band | $0 marginal (billing dashboards + a time log) | 60 days from first paid cohort | **Yes for the financial story** — support above 0.5 hr/user/mo breaks both the margin claim and the no-sales-headcount plan; the imputed rate is $53/hr pack-wide ([../financials/unit_economics.md §1](../financials/unit_economics.md)) |

**Sequencing note.** Tests 8 (partners) and 7 (activities attribution) are the only two runnable before v0 launch — 8 is one day, 7 is one signup field. Tests 2, 4 and 5 are free riders on experiments already scheduled: they cost nothing extra *if added before the run*, and cannot be recovered afterwards. That is the entire operational point of this file.

---

## 4. What the three restored blocks change

1. **Key Partners → the on-prem story.** If the dependency audit (H-KP) finds the citation gate calls a hosted resolver, then "on-prem / air-gapped deployment" (feature #50, LATER) inherits an unsolved problem, and Elena's data-locality objection (personas card 4) is broader than the LLM-endpoint split currently disclosed. Cheap to know now, expensive to discover in a year-2 enterprise pilot.
2. **Key Activities → the founder-hour allocation.** [gtm.md §4](gtm.md) allocates 15/15/10/10/5 hrs/wk and declares the slip rule (paid-signal work slips first, community never). That rule is correct *only if* H-KA holds. Attribution turns the rule from a conviction into a measurement.
3. **Customer Relationships → the shape of the company.** Ascent's declared activation moment is "the user's first own-data campaign that survives the gates" ([../validation/get_keep_grow.md](../validation/get_keep_grow.md)) — a days-to-weeks act on private data the founder cannot see. Either the artifact carries the user through that alone, or the business is a consultancy with a subscription attached. H-CR is the single cheapest way to find out which.

---

## 5. Recommended next 3

1. **Run the Key Partners dependency audit (H-KP) this week — it is one founder-day and it is the only block-level test with no prerequisite.** It either confirms the zero-partner cost structure that the entire 82% margin and laptop-native story rest on, or it surfaces a dependency now, while the kernel is still being built and a substitution is cheap.
2. **Wire the three free-rider instruments before their host experiments run: the E1 ranking card (H-VP), the signup attribution field (H-KA), and the 50/50 $99-vs-$125 split on the pre-order page (H-RS).** Each costs zero and each is unrecoverable once its experiment has run — E1 sessions start week 10, the pre-order window opens day 110.
3. **Add the founder-contact tally (H-CR) to the activation instrumentation shipping in v0.** It is one column, it decides whether the company is capacity-bound or demand-bound, and it is the block Maurya's canvas deleted and this pack consequently never questioned.
