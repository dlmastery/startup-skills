# Use of funds — Ascent pre-seed

## 1. The amount: **$1.2M pre-seed** for 24 months

Why $1.2M and not the edges of the honest $750k–1.5M band:

- **$750k fails the plan, not the founder.** It funds the founder + one engineer to ~month 18 but cannot pay for the enterprise-DD package (block D, ~$90k hard cost) *and* a second hire — which means stage-2 revenue ($500k of the $1.0M plan is audit-led deals, revenue_build.md) is structurally unreachable before the money runs out.
- **$1.5M buys dilution, not milestones.** Every named de-risking milestone below is fully funded at $1.2M including a 15% buffer; the marginal $300k would fund headcount ahead of the trust evidence — the exact failure mode the stage-gating exists to prevent.
- $1.2M at solo-founder pre-seed terms is squarely inside the current climate for control-point theses [C33], and the burn (~$45k/mo average) is honest for founder + 2–3 hires (A5, lean_canvas cost cells) — no phantom team.

Runway check: total spend below = $1.04M ≈ 24 months; buffer to $1.2M covers 15% overrun or 3 extra months.

## 2. Milestone-linked spend blocks

Each block names the assumption it de-risks, cited by the real ids in `validation/riskiest_assumptions.md` (assumptions #1–#9) and `validation/experiment_board.md` (experiments E1–E8, pre-declared thresholds). Sequencing below honors the board's forced order: E2 and E6 before E1; E1 before E4; E3 instrumented from day 1; E8 waits for ledger accumulation.

| Block | Months | Spend | What it buys | Milestone that ends the block | Assumption de-risked |
|---|---|---|---|---|---|
| **A. Trust test + fork launch** | 0–6 | **$95k** = founder comp $55k ($110k/yr, below-market solo rate (assumption)) + legal entity/formation $15k + infra/tools/LLM $12k + trust-test costs (recruiting time, incentives are non-cash per gtm.md) $5k + misc $8k | ascent v0 shipped, upstream-credited (E5: ≥10/15 issue threads engaged + ≥500 clones/30d); **E2** DSR/ledger check + **E6** seeded-violation harness (≥90% catch, ≤10% false positives) run *before* trust-test sessions per board sequencing; 15-practitioner test run | **E1 passes all three legs:** ≥5/15 one-command reproductions, ≥3/15 on own private data, ≥8/15 name specific deploy evidence | **Assumption #1 trust→payment** (the pack's riskiest), plus #2 (E2), #5 (E5), #6 (E6) as gating pre-work |
| **B. 150 paying** | 4–12 | **$260k** = founder $55k + founding engineer from mo 6 ($180k/yr loaded ×7 mo = $105k) + infra scale-up $20k + content/bundle production tooling $10k + admin/accounting $15k + contractor design $25k + misc $30k | **E4** pre-order gate (≥30 pre-orders + ≥5 design partners by day 90, opened only on E1 pass); BYOK Pro GA, dashboards v1, catalog v1; **E3** telemetry from day 1 (active = cloned + ran ≤90 days) | **150 paying ≈ $225k run-rate**; E3 pass at month 6: active/stars ≥5% AND >3,000 actives; paid conversion ≥1.6% of measured active [C32 band], floor 0.5% (E4 standing floor) | **Assumptions #3 (E4) + #4 (E3)** — the kill trigger lives here (market_sizing §6) |
| **C. Team tier + instrumented corpus** | 10–18 | **$330k** = founder $55k + eng 1 $135k (9 mo) + hire 2 (devrel/community eng, mo 12, $160k/yr loaded ×6 mo = $80k) + hosted-run infra deposits $25k + misc $35k | Shared archives, usage-billed hosted runs, and the **corpus instrumentation** — trial ledgers incl. discards, gate catch-rates, steering-efficiency telemetry | First 5–10 Teams live; **E8** run once ≥2 domains have full ledgers (~mo 4–6): pass = corpus-primed campaign reaches first kept champion in ≥20% fewer experiments than cold, 2 of 2 tasks | **Assumption #7 corpus value (E8)** — A11's kills-if-wrong test; also Team-attach rate (2–4% hypothesis) and #9 retention cohort reads |
| **D. Enterprise DD package** | 15–24 | **$355k** = founder $55k + eng 1 $90k + hire 2 $80k + **DD hard costs $90k** (SOC 2 Type I + pentest ~$50k (assumption: market rate), security documentation + legal $25k, source-escrow setup $15k) + first audit-led deal support $20k + misc $20k | The vendor-DD prerequisites that gate all enterprise revenue (market_type.md §4; gtm.md §3 row 5) | First 3 audit-led deals in contract; $1.0M-plan trajectory visible | **Vendor-DD gate** — a spend gate from market_type.md §4, deliberately not an experiment-board row (it is a checklist to pay for, not a hypothesis to test); enterprise copy also depends on **E7** LLM-agnostic pass (assumption #8) for the BYO-endpoint story |

Total blocks: $95k + $260k + $330k + $355k = **$1.04M**; +$160k buffer = **$1.2M**.

Hire order (A5): 1) founding engineer (mo 6, after trust gate — not before), 2) devrel/community engineer (mo 12, when community hours exceed founder capacity per gtm.md §4 table), 3) optional third hire (mo 18+, backend/compliance) only if Team usage revenue is live; otherwise the buffer stays banked.

**Stage-gate discipline:** block B money is not spent if block A's milestone fails (fix the proof artifact instead — gtm.md gate); block D's DD spend is not committed until block C shows Team pull. The wire transfer is milestone-sequenced even though the raise is one check.

## 3. Capital-efficiency metrics (reported to investors monthly)

1. **Measured-active users per $1k spent** — active = cloned + ran a campaign within 90 days (the corrected denominator, market_sizing §3). Target trajectory: ≥3 active users/$1k by mo 12 (assumption: 4,700–14,200 active band achievable on ~$350k cumulative spend).
2. **Audited kept-improvements per $1k spent** — the product's unit of value (BRIEF) as a capital metric; pairs with the reproduction-rate co-metric so volume can't be gamed (lean_canvas key metrics).
3. Standard: net burn, months of runway, ARR per FTE.

## 4. What the seed-round story requires this round to prove

The seed (target: $4–6M at yr 2–3 (assumption: current agentic-devtool seed sizing [C33])) is raised on exactly four proven facts — no more:

1. **Practitioners pay for rigor they didn't run (E1 → E4 passed):** trust test cleared all three legs, ≥30 pre-orders + ≥5 design partners converted, then conversion ≥1.6% of measured active users sustained, 150+ paying, churn inside the 3–7% planning band (unit_economics §4).
2. **The active base grows under maintenance (E3 passed):** active/stars ≥5% and >3,000 actives at month 6, compounding via the bundle loop — proving the channel is an asset, not a dead repo's echo.
3. **The corpus effect is real (E8 passed, A11):** corpus-primed campaigns reach first kept champion in ≥20% fewer experiments than cold on 2 of 2 tasks — the moat claim as a measurement by seed time, not a thesis.
4. **Enterprise demand exists behind the DD gate:** ≥3 audit-led deals in contract at $100k+ [C19], proving the $500k enterprise slice of the $1.0M plan and the stage-3 story.

If (1) or (2) fails — E4's standing floor (paid conversion <0.5% of measured active by month 6) or E3's month-6 read — the seed story doesn't exist and the open-core model is wrong (A2, per the experiment board's decision rules). That finding, at $1.2M instead of $5M, is the capital efficiency argument for this raise size.
