# Use of funds — Ascent pre-seed

> **What this is** — what the $1.2M pre-seed buys, as four milestone-linked spend blocks across 24 months, plus the headcount grid behind them.
> **Why it exists** — the raise is one wire but the spending is sequenced on evidence: block B's money is not spent if the 15-practitioner trust test fails, and block D's DD costs wait on Team pull. Without that discipline a solo founder with a working PoC builds hosted dashboards and hires ahead of ever learning whether anyone pays for audited results they did not produce.
> **How to read it** — section 2's milestone column, then the 2b grid that caught a ~$45k double-count; a skeptic should attack the $110k founder comp and the 21% buffer.
> **Depends on / feeds** — inherits from [revenue_build.md](revenue_build.md) and [../validation/experiment_board.md](../validation/experiment_board.md); feeds [../narrative/pitch_deck.md](../narrative/pitch_deck.md) slide 15.

## 1. The amount: **$1.2M pre-seed** for 24 months

Why $1.2M and not the edges of the honest $750k–1.5M band:

- **$750k fails the plan, not the founder.** It funds the founder + one engineer to ~month 18 but cannot pay for the enterprise-DD package (block D, ~$90k hard cost) *and* a second hire — which means stage-2 revenue ($500k of the $1.0M plan is audit-led deals, revenue_build.md) is structurally unreachable before the money runs out.
- **$1.5M buys dilution, not milestones.** Every named de-risking milestone below is fully funded at $1.2M including a 15% buffer; the marginal $300k would fund headcount ahead of the trust evidence — the exact failure mode the stage-gating exists to prevent.
- $1.2M at solo-founder pre-seed terms is a fundable ask for a control-point thesis (assumption: [C33] documents sector funding totals and late-round size averages, not pre-seed norms — the climate read is directional, not a benchmark), and the burn (~$41k/mo average) is honest for founder + 2–3 hires (A5, lean_canvas cost cells) — no phantom team.

Runway check: total spend below = $995k over 24 months; buffer to $1.2M = $205k (~21%), covering overrun or ~4 extra months. (Prior version claimed $1.04M — a headcount-grid audit found ~$45k of engineer-1 comp double-counted across overlapping block windows; fixed in §2b.)

## 2. Milestone-linked spend blocks

Each block names the assumption it de-risks, cited by the real ids in `validation/riskiest_assumptions.md` (assumptions #1–#9) and `validation/experiment_board.md` (experiments E1–E8, pre-declared thresholds). Sequencing below honors the board's forced order: E2 and E6 before E1; E1 before E4; E3 instrumented from day 1; E8 waits for ledger accumulation.

| Block | Months | Spend | What it buys | Milestone that ends the block | Assumption de-risked |
|---|---|---|---|---|---|
| **A. Trust test + fork launch** | 0–6 | **$95k** = founder comp $55k ($110k/yr, below-market solo rate (assumption)) + legal entity/formation $15k + infra/tools/LLM $12k + trust-test costs (recruiting time, incentives are non-cash per gtm.md) $5k + misc $8k | ascent v0 shipped, upstream-credited (E5: ≥10/15 issue threads engaged + ≥500 clones/30d); **E2** DSR/ledger check + **E6** seeded-violation harness (≥90% catch, ≤10% false positives) run *before* trust-test sessions per board sequencing; 15-practitioner test run | **E1 passes all three legs** (sessions weeks 10–13 per the validation calendar): ≥5/15 one-command reproductions, ≥3/15 on own private data, ≥8/15 name specific deploy evidence | **Assumption #1 trust→payment** (the pack's riskiest), plus #2 (E2), #5 (E5), #6 (E6) as gating pre-work |
| **B. Launch + first ~75 paying** | 4–12 | **$260k** = founder $55k + founding engineer mo 6–12 ($180k/yr loaded ×7 mo = $105k, see §2b grid) + infra scale-up $20k + content/bundle production tooling $10k + admin/accounting $15k + contractor design $25k + misc $30k | **E4** pre-order gate (≥30 pre-orders + ≥5 design partners, window ~day 110–120 per the validation calendar, opened only on E1 pass); BYOK Pro GA, dashboards v1, catalog v1; **E3** telemetry from day 1 (active = cloned + ran ≤90 days) | **~73–78 paying ≈ $110k run-rate at mo 12** (the corrected waterfall, revenue_build §4 — the old "150 by mo 12" claim did not survive recompute); E3 pass at month 6: active/stars ≥5% AND >3,000 actives; paid conversion ≥1.6% of measured active [C32 band], floor 0.5% (E4 standing floor) | **Assumptions #3 (E4) + #4 (E3)** — the kill trigger lives here (market_sizing §6) |
| **C. Team tier + instrumented corpus + 150-paying** | 10–18 | **$285k** = founder $55k + eng 1 mo 13–18 ($90k, §2b grid) + hire 2 (devrel/community eng, mo 13, $160k/yr loaded ×6 mo = $80k) + hosted-run infra deposits $25k + misc $35k | Shared archives, usage-billed hosted runs, and the **corpus instrumentation** — trial ledgers incl. discards, gate catch-rates, steering-efficiency telemetry | First 5–10 Teams live; **~135 paying ≈ $199k run-rate at mo 18**, crossing **150 paying ≈ $225k+ at ~mo 20–21** (revenue_build §4 — the 150 milestone moved here from block B); **E8-full passed** (≥3 paired runs per arm: corpus-primed reaches first kept champion in ≥20% fewer experiments than cold) — note **E8-directional** (the first single paired run, per validation's relabel) reads early at ~mo 4–6 and only guides, never passes, the milestone | **Assumption #7 corpus value (E8)** — A11's kills-if-wrong test; also Team-attach rate (2–4% hypothesis) and #9 retention cohort reads |
| **D. Enterprise DD package** | 15–24 | **$355k** = founder $55k + eng 1 mo 19–24 ($90k, §2b grid) + hire 2 mo 19–24 ($80k) + **DD hard costs $90k** (SOC 2 Type I + pentest ~$50k (assumption: market rate), security documentation + legal $25k, source-escrow setup $15k) + first audit-led deal support $20k + misc $20k | The vendor-DD prerequisites that gate all enterprise revenue (market_type.md §4; gtm.md §3 row 5) | First 3 audit-led deals in contract; $1.0M-plan trajectory visible | **Vendor-DD gate** — a spend gate from market_type.md §4, deliberately not an experiment-board row (it is a checklist to pay for, not a hypothesis to test); enterprise copy also depends on **E7** LLM-agnostic pass (assumption #8) for the BYO-endpoint story |

Total blocks: $95k + $260k + $285k + $355k = **$995k**; +$205k buffer = **$1.2M**.

### 2b. Headcount grid (monthly, so nothing double-counts)

Each person's paid months sum once across non-overlapping calendar allocations — the audit that caught the prior version's ~$45k overcount (eng 1 was billed 22 months inside a 19-month employment window):

| Person | Months employed | $/mo loaded | Total | Allocation across blocks |
|---|---|---|---|---|
| Founder | 1–24 (24 mo) | $9.2k ($110k/yr) | **$220k** | $55k each to A (mo 1–6), B (7–12), C (13–18), D (19–24) |
| Eng 1 (founding engineer) | 6–24 (19 mo) | $15.0k ($180k/yr) | **$285k** | B $105k (mo 6–12) · C $90k (13–18) · D $90k (19–24) |
| Hire 2 (devrel/community eng) | 13–24 (12 mo) | $13.3k ($160k/yr) | **$160k** | C $80k (13–18) · D $80k (19–24) |
| **Headcount total** | | | **$665k** | non-headcount $330k (entity/DD/infra/contractors/misc per block lines) → **$995k** |

Hire order (A5): 1) founding engineer (mo 6, after trust gate — not before), 2) devrel/community engineer at mo 13, **triggered by E3's month-6 pass (>3,000 actives AND active/stars ≥5%) or MRR ≥ $10k, whichever comes first** — a real gate, not the always-true "community hours exceed capacity" condition (founder capacity is exceeded from week 5 by gtm's own table), 3) optional third hire (mo 18+, backend/compliance) only if Team usage revenue is live; otherwise the buffer stays banked.

**Stage-gate discipline:** block B money is not spent if block A's milestone fails (fix the proof artifact instead — gtm.md gate); block D's DD spend is not committed until block C shows Team pull. The wire transfer is milestone-sequenced even though the raise is one check.

## 3. Capital-efficiency metrics (reported to investors monthly)

1. **Measured-active users per $1k cumulative spend, indexed to the kill floor** — active = cloned + ran a campaign within 90 days (the corrected denominator, market_sizing §3). The E3 kill floor (>3,000 actives at month 6) against ~$355k cumulative spend at mo 12 ≈ 8.5 actives/$1k, so the reported target is **≥8–10 actives/$1k by mo 12**: staying above this line is arithmetically the same statement as staying above the E3 floor, which makes the investor metric and the kill trigger one number instead of two.
2. **Audited kept-improvements per $1k spent** — the product's unit of value (BRIEF) as a capital metric; pairs with the reproduction-rate co-metric so volume can't be gamed (lean_canvas key metrics).
3. Standard: net burn, months of runway, ARR per FTE.

## 4. What the seed-round story requires this round to prove

The seed (target: $4–6M at yr 2–3 (assumption: current agentic-devtool seed sizing [C33])) is raised on exactly four proven facts — no more:

1. **Practitioners pay for rigor they didn't run (E1 → E4 passed):** trust test cleared all three legs, ≥30 pre-orders + ≥5 design partners converted, then conversion ≥1.6% of measured active users sustained, 150+ paying, churn inside the 3–7% planning band (unit_economics §4).
2. **The active base grows under maintenance (E3 passed):** active/stars ≥5% and >3,000 actives at month 6, compounding via the bundle loop — proving the channel is an asset, not a dead repo's echo.
3. **The corpus effect is real (E8 passed, A11):** corpus-primed campaigns reach first kept champion in ≥20% fewer experiments than cold on 2 of 2 tasks — the moat claim as a measurement by seed time, not a thesis.
4. **Enterprise demand exists behind the DD gate:** ≥3 audit-led deals in contract at $100k+ [C19], proving the $500k enterprise slice of the $1.0M plan and the stage-3 story.

If (1) or (2) fails — E4's standing floor (paid conversion <0.5% of measured active by month 6) or E3's month-6 read — the seed story doesn't exist and the open-core model is wrong (A2, per the experiment board's decision rules). That finding, at $1.2M instead of $5M, is the capital efficiency argument for this raise size.
