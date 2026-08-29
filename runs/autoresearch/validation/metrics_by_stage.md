# Metrics by stage — Ascent

> **What this is** — what to track and what to deliberately ignore at each of the four company stages, anchored to one north-star pair.
> **Why it exists** — Ascent inherits a 94,800-star audience, and this pack already converted stars straight into payers once, producing a $5M plan that was a ~10x overstatement caught in review. The ignore-lists exist so that specific error cannot recur: stars are permitted only as a denominator for the star-to-active ratio, never as a numerator in anything.
> **How to read it** — read each stage's ignore-list before its track-list; a skeptic should attack the corrected-actives methodology and whether the north-star pair is measurable at all before external users exist.
> **Depends on / feeds** — inherits from [../strategy/market_sizing.md](../strategy/market_sizing.md), [experiment_board.md](experiment_board.md), [get_keep_grow.md](get_keep_grow.md); feeds [pivot_log.md](pivot_log.md).

North-star **pair** carried through every stage (lean_canvas Key metrics, unchanged): **audited kept improvements/week across user campaigns** × **independent reproduction rate per published bundle** (internal twin: gate catch-rate on seeded violations). The pair must move together — kept-improvement volume without reproductions is vanity; reproductions of stale bundles is stagnation.

## The cautionary tale this file exists to enforce

**GitHub stars are explicitly a vanity metric for this company — and the pack's own history proves it.** The first draft of market_sizing sized SOM by converting 94.8k *stars* directly to paying users and produced a $5M/36mo plan; the critic pass caught the category error (stars ≠ active users; conversion benchmarks [C32] apply to *active* users only) and the corrected plan is $1.0M — a ~10× overstatement killed in review, not in the market (market_sizing revision note + §3; pivot_log entry P4). Every stage below therefore lists what to ignore with the same seriousness as what to track. Stars are allowed exactly one use: a *reach* denominator for computing the star→active ratio (E3) — never a numerator in anything.

## Stage 1 — Customer Discovery (now)

**Track (5):**
1. Trust-test counts: reproductions /15, private-data runs /15, deploy-evidence answers /15 (E1 — the stage's decisive numbers).
2. Corrected active users: registry-measured actives (opt-in reproduction-registry ping at `ascent reproduce`) + GitHub clone stats, corrected by the frozen E3 methodology — registry ÷ 0.35 assumed opt-in, reported with the 20–50% band (assumption), bounded between raw registry count and unique 90-day cloners. This corrected estimate is the kill-trigger denominator (market_sizing §6, D-TELEMETRY); raw registry counts are never quoted without the band.
3. The three loop numbers: bundles published/mo × reproductions/bundle × reproduction→signup rate (gtm §2 — the growth model, no substitutes; reproductions registry-measured, same correction band).
4. Gate catch-rate on seeded violations + trial-ledger completeness (E6/E2 — the internal north-star twin; also the demo).
5. Discovery-interview count with must-have-language confirmations vs. contradictions (discovery_guide §4).

**Ignore (vanity at this stage):**
- **GitHub stars of ascent or autoresearch** — see above; the sizing error is the standing reminder.
- Raw champion metrics (+6.52 etc.) as traction — founder-reported, pre-DSR; upper bounds, not results (A6, survey §7a).
- Waitlist signups without a card — the $99 pre-order exists precisely because signup lists are compliments (E4).
- Social/HN post reach — content is a bundle-delivery vehicle; reach without reproductions is noise (gtm §2).

## Stage 2 — Customer Validation (after the five exit criteria in stage_gate.md)

**Track (5):**
1. Paying individuals + conversion as % of corrected active (E3 denominator; floor 0.5%, plan ~1.6%, norm 1–5% [C32]).
2. North-star pair: kept improvements/week × reproduction rate — now on *customer* campaigns, not founder runs.
3. Activation rate: % of signups reaching first own-data gate-surviving campaign (the declared activation moment, get_keep_grow).
4. Retention pair: campaigns/week per user + reproduction shares; week-4 retained % of activated.
5. CAC by channel vs. the gtm §3 hypotheses — **with founder-hours priced in, not waved as free**: the "community ~$0" channel actually costs ~15 hrs/wk, which at the $53/hr imputed rate (use_of_funds comp) is ~$800/wk of real acquisition spend; content CAC likewise re-priced from the $50–200/signup-equivalent founder-time hypothesis into imputed dollars. Measured, hypothesis-corrected, and comparable across channels only in the imputed-dollar form.

**Ignore:** stars (still); MRR growth % off a tiny base (report absolute payers); token volume processed (BYOK makes it the user's cost, not our traction, A12); logo count of design partners without usage; press mentions.

## Stage 3 — Customer Creation (repeatable motion proven)

**Track (5):**
1. SOM-plan trajectory vs. the $1.0M/36mo band ($0.4–2.4M, market_sizing §6).
2. Team conversions: % of payers converting (target band 2–4%, market_sizing §3) + seats/team; hosted-run usage billing attach.
3. Loop-number trend: 2-quarter stability/growth of bundles × reproductions × signup rate — the scalability evidence.
4. Corpus value read (E8): warm-start advantage on experiments-to-champion — the moat metric (A11); plus corpus size in complete ledgers/domains.
5. Payback period by channel against the gtm §3 payback logic.

**Ignore:** stars (permanently); TAM-share arithmetic in any deck ("no 1%-of-$100B reasoning," market_sizing §4); enterprise pipeline value before vendor-DD prerequisites exist (market_type §4 — unclosable pipeline is fiction); aggregate "experiments run" (activity ≠ kept, audited improvements — the unit of value is the kept improvement, BRIEF).

## Stage 4 — Company Building (scale)

**Track (4):**
1. North-star pair at ecosystem scale: kept improvements/week platform-wide × reproduction network activity (reruns of others' bundles — A11 asset 2 as a measured graph).
2. Net revenue retention: Pro → Team → Enterprise expansion (the Cursor/W&B path the plan borrows [C17][C18]).
3. Enterprise: audit-trail-led deals closed at $100k+ [C19], sales cycle length vs. the 3–9mo hypothesis (gtm §3 row 5) — year-2+ only.
4. Gate integrity at scale: catch-rate on seeded violations run continuously in CI + composite-vs-raw-metric divergence monitoring (the Goodhart watchdog, survey §6 [D31]).

**Ignore:** vanity even here: cumulative campaigns ever run; model-count/domain-count breadth without per-domain kept-improvement depth; valuation-comp storytelling (Cognition/Cursor rounds [C30][C17] are context, not metrics).

## Standing rule

A metric may be promoted or demoted only via an entry in `pivot_log.md` with the evidence attached. Any report that cites a numerator without its denominator (payers without actives, reproductions without bundles) is returned unread — the star→active omission was exactly this class of error, and it cost the plan a 10× correction once already.
