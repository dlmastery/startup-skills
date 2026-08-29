# Ascent — the autonomous ML research operating system

**Point it at any dataset and metric, and it hill-climbs monotonically toward state-of-the-art — every experiment literature-grounded, audit-gated, and reproducible — running for days on a commodity laptop.**

Rigorous ML experimentation is policed by nothing but human discipline, and discipline fails at published scale: data leakage is documented in at least 294 papers across 17 fields, while the automated alternatives fail the other way — the most famous AI-scientist system had 42% of its experiments fail on coding errors under independent evaluation. Ascent puts a binding, open-source **constitution** between the practitioner and the metric: a 7-step scientific method on every experiment, three programmatic pre-commit audit gates, purged/embargoed splits that make leakage structurally impossible, and a SHA-256-fingerprinted composite metric that makes keep-or-discard **tamper-evident**. You steer in natural language. The protocol supplies the judgment a tired human skips.

---

**Live site:** **https://dlmastery.github.io/startup-skills/runs/autoresearch/** · **Read all 64 documents:** **[the pack reader](https://dlmastery.github.io/startup-skills/runs/autoresearch/pack.html)**
**Run:** `autoresearch` · **Generated:** 2026-08-28 · **Status: PARTIAL**
**52 of 53 required artifacts present · 113 visuals rendered (every manifest row closed) · 12 of 78 required HTML infographics**
The text pack is complete and cross-layer reconciled. Every visual row is rendered. See [What's missing](#whats-missing--next-draw) — nothing here is hidden.

---

## Start here — 60 seconds

1. **[`narrative/one_pager.md`](narrative/one_pager.md)** — the whole company on one page, every number tagged to a source.
2. **[`narrative/pitch_deck.md`](narrative/pitch_deck.md)** — 15 slides, each with its visual ID.
3. **[`tech/whitepaper.md`](tech/whitepaper.md)** — why this is 10x, defended as arithmetic: 5.1× more valid output × 6× cheaper days ÷ 3 honesty discount = 10.4×.

## The pack at a glance

![Star curve — 94,800 people starred a research loop nobody maintains](visuals/images/V01_star-curve.png)

![Ratchet loop — point Ascent at your dataset and metric; wake up to audited, kept improvements](visuals/images/V04_ratchet-loop.png)

![Trial ledger — every runner-executed trial logged, kept and discarded](visuals/images/V05_trial-ledger.png)

![Deflation ledger — our flagship number, deflated by our own audit](visuals/images/V07_deflation-ledger.png)

## Reading paths by audience

**Investor** — the diligence order, sharpest objection first.
1. [`narrative/one_pager.md`](narrative/one_pager.md) — the claim.
2. [`narrative/vc_memo.md`](narrative/vc_memo.md) — the technical memo written for a skeptic.
3. [`strategy/market_sizing.md`](strategy/market_sizing.md) — $2–3B job-filtered core TAM, bottom-up; the $10B figure is labeled a *ceiling*, not a market.
4. [`financials/unit_economics.md`](financials/unit_economics.md) — BYOK puts token COGS on the user's card, so margin is 82% at 150 users.
5. [`financials/risk_matrix.md`](financials/risk_matrix.md) — three risks stay HIGH *after* mitigation, and the pack says so.
6. [`tech/not_vaporware.md`](tech/not_vaporware.md) — the honesty ledger: what the story implies and the repo lacks, by name.

**Engineer** — mechanism before claims.
1. [`tech/whitepaper.md`](tech/whitepaper.md) → 2. [`tech/architecture/00_INDEX.md`](tech/architecture/00_INDEX.md) (D01–D10, all Mermaid, all syntax-validated) → 3. [`tech/deep_dives.md`](tech/deep_dives.md) (8 algorithm dives) → 4. [`tech/techniques/decision_tree.md`](tech/techniques/decision_tree.md) → 5. [`product/PRD.md`](product/PRD.md).

**Operator / founder** — what to do Monday.
1. [`validation/riskiest_assumptions.md`](validation/riskiest_assumptions.md) → 2. [`validation/experiment_board.md`](validation/experiment_board.md) (E1–E8, every threshold frozen 2026-08-27, before any result existed) → 3. [`strategy/gtm.md`](strategy/gtm.md) → 4. [`financials/use_of_funds.md`](financials/use_of_funds.md) → 5. [`validation/stage_gate.md`](validation/stage_gate.md).

**Practitioner / user** — what it feels like to use.
1. [`product/journeys/day_in_life.md`](product/journeys/day_in_life.md) — ~24 human minutes steering two campaigns on ~$7/day of your own tokens.
2. [`product/journeys/edge_low.md`](product/journeys/edge_low.md) · [`beachhead.md`](product/journeys/beachhead.md) · [`edge_high.md`](product/journeys/edge_high.md) — one system, three edges, no lite fork.
3. [`product/ux_spec.md`](product/ux_spec.md) — 12 screens.

## Artifact map

| Path | What it holds | Files | Skill |
|---|---|---|---|
| [`BRIEF.md`](BRIEF.md) · [`ASSUMPTIONS.md`](ASSUMPTIONS.md) | The grilled founder brief and every open assumption | 2 | grill-me |
| [`research/`](research) | Landscape, 20-row competitor teardown, capability table, survey, market structure, dated sources | 6 | startup-research |
| [`strategy/`](strategy) | Market type, positioning, TAM/SAM/SOM, personas, lean canvas, VPC, GTM | 7 | startup-strategy |
| [`product/`](product) | PRD, 57 prioritized features, flagship set, UX spec, 4 journeys | 8 | startup-product |
| [`tech/`](tech) | Whitepaper, 8 deep dives, D01–D10 architecture (Mermaid), 146 techniques in 3 waves, decision tree, technique×feature matrix, honesty ledger | 19 | startup-tech |
| [`narrative/`](narrative) | One-pager, VC memo, 15-slide deck, future press release, founder story | 5 | startup-narrative |
| [`validation/`](validation) | Riskiest assumptions, E1–E8 board, discovery guide, get-keep-grow, stage gate, metrics by stage, pivot log | 7 | startup-validation |
| [`financials/`](financials) | Pricing, revenue build, unit economics, use of funds, risk matrix, comps & exits | 6 | startup-financials |
| [`visuals/`](visuals) | 100-row manifest, 100 production image prompts (+JSON), 113 rendered PNGs, 12 HTML infographics | 3 + 125 | startup-visuals |
| [`audit/COVERAGE.md`](audit/COVERAGE.md) | Row-by-row completeness audit and draw order | 1 | startup-audit |
| [`index.html`](index.html) | The public site — [live on GitHub Pages](https://dlmastery.github.io/startup-skills/runs/autoresearch/) | 1 | startup-website |

## Visual index — 113 images, 12 HTML infographics

**Every manifest row is rendered, and every substantive artifact carries at least one illustration** (60 documents, 178 placements — visible inline in the [pack reader](pack.html)). Full spec in [`visuals/visual_manifest.md`](visuals/visual_manifest.md); prompts in [`visuals/image_prompts.md`](visuals/image_prompts.md).

| ID | Headline takeaway | Image | HTML |
|---|---|---|---|
| V01 | 94,800 people starred a research loop nobody maintains. | [png](visuals/images/V01_star-curve.png) | [html](visuals/infographics/V01_star-curve.html) |
| V02 | Research rigor fails at published scale, manual and automated alike. | [png](visuals/images/V02_leakage-census.png) | [html](visuals/infographics/V02_leakage-census.html) |
| V03 | Execution is solved; judgment is the gap — we ship the judgment layer. | [png](visuals/images/V03_metr-horizon.png) | [html](visuals/infographics/V03_metr-horizon.html) |
| V04 | Point Ascent at your dataset and metric; wake up to audited, kept improvements. | [png](visuals/images/V04_ratchet-loop.png) | [html](visuals/infographics/V04_ratchet-loop.html) |
| V05 | The trial ledger is the demo: every runner-executed trial logged, kept and discarded. | [png](visuals/images/V05_trial-ledger.png) | [html](visuals/infographics/V05_trial-ledger.html) |
| V06 | A constitution enforces what a tired human skips. | [png](visuals/images/V06_gate-stack.png) | [html](visuals/infographics/V06_gate-stack.html) |
| V07 | Our flagship number, deflated by our own audit — that's the brand. | [png](visuals/images/V07_deflation-ledger.png) | [html](visuals/infographics/V07_deflation-ledger.html) |
| V08 | The core market is $2–3B, sized bottom-up with the arithmetic shown. | [png](visuals/images/V08_som-funnel.png) | [html](visuals/infographics/V08_som-funnel.html) |
| V09 | BYOK pricing removes token costs from our margin by construction. | [png](visuals/images/V09_pricing-ladder.png) | [html](visuals/infographics/V09_pricing-ladder.html) |
| V10 | Ninety days of scripted motion end in pre-orders, not a hosted fantasy. | [png](visuals/images/V10_gtm-timeline.png) | [html](visuals/infographics/V10_gtm-timeline.html) |
| V11 | The sustained-campaign, audit-gated quadrant is empty — and incumbents are walking away f… | [png](visuals/images/V11_quadrant-map.png) | [html](visuals/infographics/V11_quadrant-map.html) |
| V12 | Forks copy the constitution in a day; they cannot backfill the ledger. | [png](visuals/images/V12_moat-ledger.png) | — |
| V13 | Six domains, one protocol, reproducible in one command. | [png](visuals/images/V13_domain-grid.png) | [html](visuals/infographics/V13_domain-grid.html) |
| V14 | The founder already ran the factory for months. | [png](visuals/images/V14_deck-team.png) | — |
| V15 | $1.2M pre-seed buys 24 months of milestone-gated de-risking. | [png](visuals/images/V15_use-of-funds.png) | — |
| V16 | The reasoning plane proposes; the deterministic execution plane owns the disk truth. | [png](visuals/images/V16_system-map.png) | — |
| V17 | Sense → Diagnose → Ground → change one thing → Measure → Keep-or-discard → Remember, with… | [png](visuals/images/V17_core-loop-circuit.png) | — |
| V18 | One adaptive system serves Priya's missing method, Marcus's midnight referee, and Elena's… | [png](visuals/images/V18_user-spectrum.png) | — |
| V19 | 57 features in forced order: the 9-item trust-test kernel ships before any new UI. | [png](visuals/images/V19_feature-roadmap.png) | — |
| V20 | 12 of 19 technique clusters feed the twin gravity wells: the audit gates and the acceptan… | [png](visuals/images/V20_technique-feature-heat-table.png) | — |
| V21 | BYOK puts token COGS on the user's card, so fully-loaded gross margin is 82.0% at 150 use… | [png](visuals/images/V21_unit-economics-engine.png) | — |
| V22 | 5.1x more valid output × 6x cheaper days ÷ 3 honesty discount = a defended 10.4x. | [png](visuals/images/V22_10x-mechanism.png) | — |
| V23 | The system caught her preprocessing leakage before any metric existed — the method she la… | [png](visuals/images/V23_journey-priya.png) | — |
| V24 | The self-deflation stops his scroll; the ledger, discards included, earns his renewal. | [png](visuals/images/V24_journey-marcus.png) | — |
| V25 | She's buying the audit trail and the campaign memory, not the hill-climbing. | [png](visuals/images/V25_journey-elena.png) | — |
| V26 | ~24 human minutes steer two campaigns running on ~$7/day of the user's own tokens. | [png](visuals/images/V26_journey-tuesday.png) | — |
| V27 | Dataset + metric becomes a constitution-governed campaign in ≤20 minutes. | [png](visuals/images/V27_ux-collage-setup.png) | — |
| V28 | A laboratory notebook that cannot be falsified, read like a trading terminal, steered lik… | [png](visuals/images/V28_ux-collage-daily-loop.png) | — |
| V29 | Bundles travel to skeptics; the org ledger raises the bar as the family's trial count grows. | [png](visuals/images/V29_ux-collage-trust-scale.png) | — |
| V30 | "Trial 218 — 9 kept, 209 discarded" renders identically in CLI, dashboard, and bundle cover. | [png](visuals/images/V30_ux-collage-honesty-signatures.png) | — |
| V31 | The trust test runs on CLI and files only; no screen is a prerequisite for honesty. | [png](visuals/images/V31_ux-collage-kernel-cli.png) | — |
| V32 | Error states are five-alarm by design; nothing red is hidden, nothing green is unexplaina… | [png](visuals/images/V32_ux-collage-states-of-truth.png) | — |
| V33 | 50 foundational rigor techniques in 6 clusters: the discipline layer manual practice poli… | [png](visuals/images/V33_technique-wave-1.png) | — |
| V34 | 50 statistical-defense techniques in 7 clusters: sequential error control to causal diagn… | [png](visuals/images/V34_technique-wave-2.png) | — |
| V35 | 46 agentic-infrastructure techniques in 6 clusters: constitution engineering to AI-native… | [png](visuals/images/V35_technique-wave-3.png) | — |
| V36 | Safety and metric-integrity branches structurally outrank progress branches; there is no… | [png](visuals/images/V36_decision-tree-poster.png) | — |
| V37 | Nine kernel items gate E1; if the founder is over capacity, the pre-order gate slips firs… | [png](visuals/images/V37_kernel-roadmap.png) | — |
| V38 | Gates run before any data work; refused experiments cost a message, not compute. | [png](visuals/images/V38_d01-data-pipeline.png) | — |
| V39 | Validity is checked before compute and improvement before commit; neither an invalid nor… | [png](visuals/images/V39_d02-closed-loop.png) | — |
| V40 | The agent may not, by contract, write a result row; the runner writes what actually happe… | [png](visuals/images/V40_d03-orchestration.png) | — |
| V41 | Bundles ship champions and run logs; the discard ledger, gate catch-rates, and priors nev… | [png](visuals/images/V41_d04-run-record.png) | — |
| V42 | The frontier slice is deliberately thin: $3–12/day mid-tier-routed vs $20–60/day all-fron… | [png](visuals/images/V42_d05-model-routing.png) | — |
| V43 | Data never leaves the machine; reasoning tokens do — the boundary is engineered, not denied. | [png](visuals/images/V43_d06-security-boundaries.png) | — |
| V44 | Thin on the way in, rich on the way out: every champion exports the evidence formats skep… | [png](visuals/images/V44_d07-integrations.png) | — |
| V45 | Who audits the auditor: six monitors over signals the ledger already carries. | [png](visuals/images/V45_d08-observability.png) | — |
| V46 | Federation of laptops, not a cluster; team-level deflation needs the aggregate N no track… | [png](visuals/images/V46_d09-team-scale-out.png) | — |
| V47 | The two cheap rungs run without the human; integrity violations bypass the ladder entirely. | [png](visuals/images/V47_d10-steering-ladder.png) | — |
| V48 | SHA-256 freezes the proxy: tamper-evident today, tamper-refusing is a ~15-line [ROADMAP]… | [png](visuals/images/V48_fingerprint-tamper-evidence.png) | — |
| V49 | Train = data − union(val + test + buffers): settled financial-ML methodology as mandatory… | [png](visuals/images/V49_super-fold-geometry.png) | — |
| V50 | Refusal by default; one visible, sentinel-tagged bypass; no silent path. | [png](visuals/images/V50_gate-stack-bypass.png) | — |
| V51 | The keep/discard bar rises with trial count; no published system has this gate, the PoC i… | [png](visuals/images/V51_dsr-acceptance-roadmap.png) | — |
| V52 | 14 of 16 notable forks are ports or translations; zero add rigor — the demand is proven a… | [png](visuals/images/V52_teardown-karpathy.png) | — |
| V53 | 42% of experiments failed in independent evaluation; the family optimizes paper novelty,… | [png](visuals/images/V53_teardown-ai-scientist.png) | — |
| V54 | The category leader took a 92% valuation haircut because search-without-science commoditi… | [png](visuals/images/V54_teardown-automl.png) | — |
| V55 | Even successful trackers were features, not companies; value migrated to whoever owns com… | [png](visuals/images/V55_teardown-trackers.png) | — |
| V56 | Your chatbot suggests; a tired human verifies. Ascent's protocol verifies; you steer. | [png](visuals/images/V56_teardown-manual-chatgpt.png) | — |
| V57 | Job-filtered at the TAM layer: $0.9–1.35B individuals + $0.15B quant funds + $1.0B enterp… | [png](visuals/images/V57_tam-tiers.png) | — |
| V58 | Stars are not users: the stars→active stage was missing, and the old $5M plan did not sur… | [png](visuals/images/V58_som-funnel-corrected.png) | — |
| V59 | Every funded version of the thesis is cloud/wet-lab scale; the laptop-native, practitione… | [png](visuals/images/V59_funding-climate.png) | — |
| V60 | Absorbed = low, commoditized = 1.8x, executing devtool = 15–29x, agent leader = ~53x, nar… | [png](visuals/images/V60_comps-corridor.png) | — |
| V61 | Recomputed honestly, 150 paying arrives at ~month 20–21, not month 18; the milestone move… | [png](visuals/images/V61_revenue-waterfall.png) | — |
| V62 | Three risks stay HIGH after mitigation and the pack says so: the bet, the clock, and the… | [png](visuals/images/V62_risk-matrix.png) | — |
| V63 | E2 and E6 run before E1, E1 before E4; every threshold was declared before any result exi… | [png](visuals/images/V63_experiment-gantt.png) | — |
| V64 | ≥8–10 measured-active users per $1k by month 12 is arithmetically the same statement as t… | [png](visuals/images/V64_kill-floor-unification.png) | — |
| V65 | There is no Ascent cloud in the data path; the honest hole (reasoning tokens) is named on… | [png](visuals/images/V65_security-data-locality.png) | — |
| V66 | $90k of block-D hard costs (SOC 2 Type I + pentest ~$50k, security docs + legal $25k, esc… | [png](visuals/images/V66_vendor-dd-timeline.png) | — |
| V67 | Examiner-ready evidence packs mapped to SR 11-7-style review are [ROADMAP], never claimed… | [png](visuals/images/V67_attestation-roadmap.png) | — |
| V68 | Discovery (with named early-Validation overlap): the gate opens only when all five pre-de… | [png](visuals/images/V68_stage-gate-ladder.png) | — |
| V69 | At n=15 the joint AND-of-three test carries up to ~35% false-fail risk at healthy rates;… | [png](visuals/images/V69_e1-operating-characteristics.png) | — |
| V70 | $3–12/day of the user's own tokens + $125/mo for the rigor layer, against a conservative… | [png](visuals/images/V70_substitution-math.png) | — |
| V71 | Capability-per-dollar falls ~40–50x/yr while frontier list prices are flat-to-rising; rou… | [png](visuals/images/V71_cost-curve.png) | — |
| V72 | A hosted flat-rate Pro would carry $90–360/mo of token COGS against $125 revenue: negativ… | [png](visuals/images/V72_byok-margin-bridge.png) | — |
| V73 | LTV swings 2.3x across the 3–7%/mo planning band; payback stays 2.7 months at every point… | [png](visuals/images/V73_churn-ltv-sensitivity.png) | — |
| V74 | Ledger → offline DSR → acceptance gate → family thresholds: this chain is also the market… | [png](visuals/images/V74_honesty-chain.png) | — |
| V75 | Ledger + refusals → seeded violations → opt-in telemetry → copilot → priors: skip any lin… | [png](visuals/images/V75_corpus-chain.png) | — |
| V76 | Eight experiments, every pass/fail number frozen on 2026-08-27, before any result exists. | [png](visuals/images/V76_threshold-cards.png) | — |
| V77 | Monthly allocation so nothing double-counts: the audit that caught ~$45k of double-counte… | [png](visuals/images/V77_headcount-grid.png) | — |
| V78 | The $4–6M seed is raised on exactly four proven facts, no more. | [png](visuals/images/V78_seed-story-four-facts.png) | — |
| V79 | The riskiest cell is Revenue streams: stars prove a free toy's demand, not $1,500/yr rigo… | [png](visuals/images/V79_lean-canvas.png) | — |
| V80 | The #1 mapping is externally evidenced on both sides: the pain at published scale, the re… | [png](visuals/images/V80_value-prop-mappings.png) | — |
| V81 | Five cards, one system: the must-have language is verbatim, and card 5's first objection… | [png](visuals/images/V81_persona-wall.png) | — |
| V82 | Kept improvements/week and reproduction rate must move together; either alone is vanity. | [png](visuals/images/V82_north-star-pair.png) | — |
| V83 | A good day = ≥1 dashboard read + ≤3 steering sentences + ≥20 gate-passed trials + $/day i… | [png](visuals/images/V83_activation-health-day.png) | — |
| V84 | $6.90 across two campaigns overnight, 91% mid-tier — the user's own bill, visible per step. | [png](visuals/images/V84_spend-meter.png) | — |
| V85 | Karpathy is notified before launch; if he returns or blesses another fork, the pre-writte… | [png](visuals/images/V85_fork-etiquette-plan-b.png) | — |
| V86 | 40 candidates → 15 completers at ~40% show rate, from four named pools, incentive non-cas… | [png](visuals/images/V86_recruitment-funnel.png) | — |
| V87 | Up to 45% contamination on popular benchmarks cuts against the PoC numbers and *for* the… | [png](visuals/images/V87_contamination-preemption.png) | — |
| V88 | Horizons doubled every ~4 months, agents win short sprints 4x, and capability cost falls… | [png](visuals/images/V88_why-now-triptych.png) | — |
| V89 | 16.9% (Oct 2024) → ~40–65% (2026): agents routinely medal, and unsupervised correctness i… | [png](visuals/images/V89_mle-bench-progress.png) | — |
| V90 | Agents 4x humans at 2-hour budgets; humans 2x agents at 32 hours: execution is theirs, ju… | [png](visuals/images/V90_re-bench-division.png) | — |
| V91 | 128 GB unified-memory laptops and 22 s–2.1 min experiments make "laptop-native research h… | [png](visuals/images/V91_laptop-envelope.png) | — |
| V92 | ~4,000 LOC of running core Python, module by module: the mechanism is code with forensic… | [png](visuals/images/V92_repo-reality.png) | — |
| V93 | Removing the citation gate spiked invalid experiments 42% and produced 3 leakage incident… | [png](visuals/images/V93_ablation-evidence.png) | — |
| V94 | What the paper implies and the repo lacks, listed by name; none of it fatal, all of it on… | [png](visuals/images/V94_honesty-ledger.png) | — |
| V95 | Six engineering items on existing rails vs five labeled research risks; the difference is… | [png](visuals/images/V95_quarter-vs-research-risk.png) | — |
| V96 | No jump happens without its named milestone; stages 3–4 are the conditional expansion sto… | [png](visuals/images/V96_revenue-stages.png) | — |
| V97 | $9k → $12k → $15k, one basis line each; usage revenue is upside, deliberately unforecast… | [png](visuals/images/V97_team-acv-steps.png) | — |
| V98 | Campaign COGS $135–540 billed at cost × 1.3–1.5: passthrough plus margin, never a loss-ma… | [png](visuals/images/V98_hosted-run-economics.png) | — |
| V99 | Eight experiment-selection techniques power nothing named; until #29 is built, marketing… | [png](visuals/images/V99_orphan-cluster-decision.png) | — |
| V100 | All 20 competitor rows on one canvas: every casualty either automated one step or automat… | [png](visuals/images/V100_teardown-mega-table.png) | — |
| V101 | Twelve declared assumptions, each with the evidence that would kill it. | [png](visuals/images/V101_assumption-ledger.png) | — |
| V102 | Months of natural-language steering, six domains, zero hand-written Python. | [png](visuals/images/V102_steering-log.png) | — |
| V103 | The headline we intend to earn, dated and framed as vision. | [png](visuals/images/V103_future-press.png) | — |
| V104 | The whole company in six tiles, each traceable to a source. | [png](visuals/images/V104_one-pager-map.png) | — |
| V105 | The order a skeptic should read this pack in, sharpest objection first. | [png](visuals/images/V105_diligence-path.png) | — |
| V106 | Four tiers, three surfaces: the kernel ships on CLI and files alone. | [png](visuals/images/V106_prd-surface-map.png) | — |
| V107 | Four evidence families, every number in the pack traceable to one of them. | [png](visuals/images/V107_source-map.png) | — |
| V108 | Ten diagrams, one system: from data pipeline to escalation ladder. | [png](visuals/images/V108_architecture-index.png) | — |
| V109 | Five stages of the practitioner interview; the deploy question is the one that matters. | [png](visuals/images/V109_discovery-arc.png) | — |
| V110 | Three funnels, one loop: the published bundle is the acquisition engine. | [png](visuals/images/V110_get-keep-grow.png) | — |
| V111 | Every correction recorded with what triggered it, including the ones that cost us the plan. | [png](visuals/images/V111_pivot-ledger.png) | — |
| V112 | Ranked by what would kill the company soonest; the top one is a two-week test. | [png](visuals/images/V112_risk-stack.png) | — |
| V113 | Four Blank stages, one metric each; a stage never borrows the next stage’s scoreboard. | [png](visuals/images/V113_metrics-ladder.png) | — |

## The five sharpest claims

1. **The gap is empirically unfilled, not just unoccupied.** Karpathy's autoresearch took 94,800 stars and 13,400 forks in six months and has had no active maintainer since 2026-03-26. Of its 16 community-curated notable forks, 14 are hardware ports or translations, ~1 is a domain extension, and **0 add rigor**. `[A1][A2][C35]` — [`research/landscape.md`](research/landscape.md)
2. **Execution is solved; judgment is not.** Agents beat humans 4× at 2-hour budgets and lose 2× at 32 hours; task horizons hit ~12h at 50% reliability by mid-2026, doubling every ~4 months. The loop Ascent needs did not exist as a dependable capability 18 months ago. `[B1][B2][B4]` — [`research/capability_table.md`](research/capability_table.md)
3. **We deflate our own flagship number.** The champion renders as `+6.52 raw (founder-reported) · deflated: week-1 work · N=265+ trials` — never the raw number alone, because a champion selected from 265+ trials is exactly what the deflated Sharpe discounts. `[D6][D7]` — [`strategy/positioning.md`](strategy/positioning.md) §4
4. **The rigor layer measurably pays for its overhead.** Removing the citation gate spiked invalid experiments 42% and produced 3 leakage incidents (one task, one seed, founder-reported). `[not_vaporware §3]` — [`tech/not_vaporware.md`](tech/not_vaporware.md)
5. **The honest correction cost us the plan.** Stars are not users; adding the missing stars→active stage moved 150 paying customers to ~month 20–21 and the old $5M plan did not survive. The milestone moved rather than the assumptions inflating. — [`financials/revenue_build.md`](financials/revenue_build.md) §4

## Completeness

This run is **PARTIAL** and says so plainly: the text pack is complete and cross-layer reconciled; the visual layer is partly rendered. The row-by-row status, the open rows and the draw order live in [`audit/COVERAGE.md`](audit/COVERAGE.md), which is where completeness is tracked — a front door states the state of the work, it doesn't carry the task list.
