# Visual manifest — Ascent

**Shared visual language (binding on every visual in this pack):**
- **Palette:** deep indigo primary (#312E81 family) + teal accent (#0D9488 family) on pure white, per the validated test render; warm amber reserved exclusively for warnings/caveats/[ROADMAP] flags; red only for gate failures and kill triggers.
- **Type treatment:** one dense grotesk sans (Inter-class) with a strict 3-level hierarchy (bold headline takeaway → zone labels → data annotations); **monospace for all numbers, hashes, thresholds, and code identifiers**. One bold headline takeaway per visual, legible in 3 seconds; depth rewards the next 30.
- **Honesty rules bind images too (non-negotiable):** every PoC metric carries "founder-reported"; the EUR/USD champion always renders as `+6.52 raw (founder-reported) · deflated: week-1 work · N=265+ trials` — never the raw number alone; unshipped capabilities (trial-count-corrected acceptance gate, attestation packs, BYO-endpoint, fingerprint *refusal*) carry a visible **[ROADMAP]** tag; the fingerprint claim is always "tamper-evident, **not** tamper-refusing (refusal is roadmap)"; "monotonic" is always "monotonic in the composite proxy."
- **Every number on every visual exists in a pack artifact**; each row cites its source file(s); each image prompt in `image_prompts.md` carries the source citation as an HTML comment.
- **Forms:** `image` = production text-to-image prompt exists in `image_prompts.md` / `prompts.json`; `mermaid-existing` = a syntax-checked Mermaid source already ships in the cited artifact (the image row renders its poster version); `html` = best built as a self-contained HTML infographic in a later pass.
- **Counts:** 100 rows · **78 required · 22 optional**. **Status as of 2026-08-29 (reconciled to the glob): 83 images rendered, 12 HTML infographics rendered. All 78 required image rows are closed.** A row is marked rendered only when the file exists on disk with nonzero size — verified, not assumed.
- **Sizes:** 1536x1024 landscape default; 1024x1536 portrait for the technique-wave posters (V33–V35) and the decision-tree poster (V36) only.

**Standard-set dedupe (contract rows satisfied by other rows, with reasons):** competitive positioning map → V11 (deck version is canonical); TAM/SAM/SOM bottom-up build → V08 + V57/V58 (deck + VC deep versions); use-of-funds milestone map → V15; journey maps → V23–V26; technique decision tree → V36; UX collages → V27–V32; risk matrix grid → V62 (placed in the VC set where the diligence read happens).

---

## A. The 15 deck visuals (pitch_deck.md `visual:` IDs — all required, all image)

| ID | Title — headline takeaway | Audience | Source artifact(s) | Form | Status |
|---|---|---|---|---|---|
| V01 | Star curve — 94,800 people starred a research loop nobody maintains. | VC | narrative/pitch_deck.md s1; research/landscape.md [A1][A3]; research/market_structure.md [C35] | image | image rendered + html rendered |
| V02 | Leakage census — Research rigor fails at published scale, manual and automated alike. | VC | pitch_deck.md s2; research/survey.md [D5]; landscape.md [A16][A46][A39]; market_structure.md [C3] | image | image rendered + html rendered |
| V03 | METR horizon — Execution is solved; judgment is the gap — we ship the judgment layer. | VC | pitch_deck.md s3; research/capability_table.md [B1][B2][B4][B16] | image | image rendered + html rendered |
| V04 | Ratchet loop — Point Ascent at your dataset and metric; wake up to audited, kept improvements. | cross | pitch_deck.md s4; BRIEF.md; tech/architecture/D02.md | image | image rendered + html rendered |
| V05 | Trial ledger — The trial ledger is the demo: every runner-executed trial logged, kept and discarded. | cross | pitch_deck.md s5; product/features_flagship.md #1; product/ux_spec.md | image | image rendered + html rendered |
| V06 | Gate stack — A constitution enforces what a tired human skips. | cross | pitch_deck.md s6; tech/deep_dives.md §3; survey.md §4.4 | image | image rendered + html rendered |
| V07 | Deflation ledger — Our flagship number, deflated by our own audit — that's the brand. | VC | pitch_deck.md s7; strategy/positioning.md §4; survey.md §6 [D6][D7] | image | image rendered + html rendered |
| V08 | SOM funnel — The core market is $2–3B, sized bottom-up with the arithmetic shown. | VC | pitch_deck.md s8; strategy/market_sizing.md §1–3 | image | image rendered + html rendered |
| V09 | Pricing ladder — BYOK pricing removes token costs from our margin by construction. | VC | pitch_deck.md s9; financials/pricing.md §4 | image | image rendered + html rendered |
| V10 | GTM timeline — Ninety days of scripted motion end in pre-orders, not a hosted fantasy. | VC | pitch_deck.md s10; strategy/gtm.md §4 | image | image rendered + html rendered |
| V11 | Quadrant map — The sustained-campaign, audit-gated quadrant is empty — and incumbents are walking away from it. | VC | pitch_deck.md s11; positioning.md §1–2; research/competitors.md | image | image rendered + html rendered |
| V12 | Moat ledger — Forks copy the constitution in a day; they cannot backfill the ledger. | VC | pitch_deck.md s12; positioning.md §5; strategy (A11) | image | image rendered |
| V13 | Domain grid — Six domains, one protocol, reproducible in one command. | cross | pitch_deck.md s13; tech/not_vaporware.md §2 | image | image rendered + html rendered |
| V14 | Deck team — The founder already ran the factory for months. | VC | pitch_deck.md s14; BRIEF.md; financials/use_of_funds.md §2b | image | image rendered |
| V15 | Use of funds — $1.2M pre-seed buys 24 months of milestone-gated de-risking. | VC | pitch_deck.md s15; use_of_funds.md §1–2 | image | image rendered |

## B. Contract standard set (rows not already satisfied above)

| ID | Title — headline takeaway | Audience | Source artifact(s) | Form | Status |
|---|---|---|---|---|---|
| V16 | System map — The reasoning plane proposes; the deterministic execution plane owns the disk truth. | research-lead | tech/architecture/D03.md, D01.md | image (mermaid-existing in D03) | image rendered |
| V17 | Core-loop closed circuit — Sense → Diagnose → Ground → change one thing → Measure → Keep-or-discard → Remember, with minutes-scale latencies at every hop. | cross | BRIEF.md vocabulary; D02.md; not_vaporware.md §4 | image | image rendered |
| V18 | User-spectrum coverage — One adaptive system serves Priya's missing method, Marcus's midnight referee, and Elena's forensic audit trail — no lite fork. | cross | strategy/personas.md; tech/whitepaper.md §3 | image | image rendered |
| V19 | Feature roadmap — 57 features in forced order: the 9-item trust-test kernel ships before any new UI. | practitioner | product/features_prioritized.md | image | image rendered |
| V20 | Technique×feature heat table — 12 of 19 technique clusters feed the twin gravity wells: the audit gates and the acceptance gate. | research-lead | tech/techniques/technique_feature_matrix.md | image | image rendered |
| V21 | Unit-economics engine — BYOK puts token COGS on the user's card, so fully-loaded gross margin is 82.0% at 150 users and ≥85% at 300+. | VC | financials/unit_economics.md §1, §3–4 | image | image rendered |
| V22 | 10x mechanism breakdown — 5.1x more valid output × 6x cheaper days ÷ 3 honesty discount = a defended 10.4x. | VC | tech/whitepaper.md §2 | image | image rendered |

## C. Practitioner set

| ID | Title — headline takeaway | Audience | Source artifact(s) | Form | Status |
|---|---|---|---|---|---|
| V23 | Journey: Priya (edge-low) — The system caught her preprocessing leakage before any metric existed — the method she lacked, supplied without shame. | practitioner | product/journeys/edge_low.md | image | image rendered |
| V24 | Journey: Marcus weeks 0–12+ (beachhead) — The self-deflation stops his scroll; the ledger, discards included, earns his renewal. | practitioner | product/journeys/beachhead.md | image | image rendered |
| V25 | Journey: Elena year 2 (edge-high) — She's buying the audit trail and the campaign memory, not the hill-climbing. | practitioner | product/journeys/edge_high.md | image | image rendered |
| V26 | Journey: ordinary Tuesday — ~24 human minutes steer two campaigns running on ~$7/day of the user's own tokens. | practitioner | product/journeys/day_in_life.md | image | image rendered |
| V27 | UX collage A: instantiation & setup — Dataset + metric becomes a constitution-governed campaign in ≤20 minutes. | practitioner | product/ux_spec.md screens 1, 2, 3, 10 | image | image rendered |
| V28 | UX collage B: the daily loop — A laboratory notebook that cannot be falsified, read like a trading terminal, steered like a chat. | practitioner | ux_spec.md screens 4, 5, 6, 8 | image | image rendered |
| V29 | UX collage C: trust & scale — Bundles travel to skeptics; the org ledger raises the bar as the family's trial count grows. | practitioner | ux_spec.md screens 7, 9, 11, 12 | image | image rendered |
| V30 | UX collage D: honesty signatures — "Trial 218 — 9 kept, 209 discarded" renders identically in CLI, dashboard, and bundle cover. | practitioner | ux_spec.md globals + micro-interactions | image | image rendered |
| V31 | UX collage E: kernel CLI surfaces — The trust test runs on CLI and files only; no screen is a prerequisite for honesty. | practitioner | ux_spec.md tier labels; features_prioritized.md #1–9 | image | image rendered |
| V32 | UX collage F: states of truth — Error states are five-alarm by design; nothing red is hidden, nothing green is unexplainable. | practitioner | ux_spec.md screens 4–7 error states | image | image rendered |
| V33 | Technique wave 1 poster — 50 foundational rigor techniques in 6 clusters: the discipline layer manual practice polices only with willpower. | practitioner | tech/techniques/wave1.md; technique_feature_matrix.md | image (portrait) | image rendered |
| V34 | Technique wave 2 poster — 50 statistical-defense techniques in 7 clusters: sequential error control to causal diagnosis. | practitioner | tech/techniques/wave2.md; technique_feature_matrix.md | image (portrait) | image rendered |
| V35 | Technique wave 3 poster — 46 agentic-infrastructure techniques in 6 clusters: constitution engineering to AI-native trust. | practitioner | tech/techniques/wave3.md; technique_feature_matrix.md | image (portrait) | image rendered |
| V36 | Decision-tree poster — Safety and metric-integrity branches structurally outrank progress branches; there is no silent path around the audit machinery. | practitioner | tech/techniques/decision_tree.md | image (portrait; mermaid-existing) | image rendered |
| V37 | Kernel roadmap — Nine kernel items gate E1; if the founder is over capacity, the pre-order gate slips first, never the trust test. | practitioner | features_prioritized.md NOW(a); validation/experiment_board.md | image | image rendered |

## D. Research-lead set

| ID | Title — headline takeaway | Audience | Source artifact(s) | Form | Status |
|---|---|---|---|---|---|
| V38 | D01 poster: experiment data pipeline — Gates run before any data work; refused experiments cost a message, not compute. | research-lead | tech/architecture/D01.md | image (mermaid-existing) | image rendered |
| V39 | D02 poster: the 7-step closed loop — Validity is checked before compute and improvement before commit; neither an invalid nor a non-improving change enters the champion line. | research-lead | D02.md | image (mermaid-existing) | image rendered |
| V40 | D03 poster: component orchestration — The agent may not, by contract, write a result row; the runner writes what actually happened. | research-lead | D03.md | image (mermaid-existing) | image rendered |
| V41 | D04 poster: durable run record & corpus schema — Bundles ship champions and run logs; the discard ledger, gate catch-rates, and priors never ship. | research-lead | D04.md | image (mermaid-existing) | image rendered |
| V42 | D05 poster: model routing & cost control — The frontier slice is deliberately thin: $3–12/day mid-tier-routed vs $20–60/day all-frontier. | research-lead | D05.md; capability_table.md §3 | image (mermaid-existing) | image rendered |
| V43 | D06 poster: security & data boundaries — Data never leaves the machine; reasoning tokens do — the boundary is engineered, not denied. | research-lead | D06.md | image (mermaid-existing) | image rendered |
| V44 | D07 poster: integrations & ecosystem — Thin on the way in, rich on the way out: every champion exports the evidence formats skeptics already trust. | research-lead | D07.md | image (mermaid-existing) | image rendered |
| V45 | D08 poster: observability & safety monitoring — Who audits the auditor: six monitors over signals the ledger already carries. | research-lead | D08.md | image (mermaid-existing) | image rendered |
| V46 | D09 poster: team scale-out — Federation of laptops, not a cluster; team-level deflation needs the aggregate N no tracker offers. | research-lead | D09.md | image (mermaid-existing) | image rendered |
| V47 | D10 poster: steering & escalation ladder — The two cheap rungs run without the human; integrity violations bypass the ladder entirely. | research-lead | D10.md | image (mermaid-existing) | image rendered |
| V48 | Deep dive: fingerprint & tamper-evidence — SHA-256 freezes the proxy: tamper-evident today, tamper-refusing is a ~15-line [ROADMAP] patch. | research-lead | tech/deep_dives.md §1; not_vaporware.md §5 | image | image rendered |
| V49 | Deep dive: super-fold purge/embargo geometry — Train = data − union(val + test + buffers): settled financial-ML methodology as mandatory default. | research-lead | deep_dives.md §2; survey.md §4.3 [D8] | image | image rendered |
| V50 | Deep dive: audit-gate stack with bypass disclosure — Refusal by default; one visible, sentinel-tagged bypass; no silent path. | research-lead | deep_dives.md §3; D01.md; not_vaporware.md | image | image rendered |
| V51 | Deep dive: DSR / acceptance-gate roadmap — The keep/discard bar rises with trial count; no published system has this gate, the PoC included. | research-lead | deep_dives.md §4; survey.md §6; experiment_board.md E2 | image | image rendered |

## E. VC set

| ID | Title — headline takeaway | Audience | Source artifact(s) | Form | Status |
|---|---|---|---|---|---|
| V52 | Teardown: Karpathy ecosystem — 14 of 16 notable forks are ports or translations; zero add rigor — the demand is proven and the gap is empirically unfilled. | VC | landscape.md Tier 1 [A1][A2][A3]; market_structure.md [C35] | image | image rendered |
| V53 | Teardown: AI-Scientist family — 42% of experiments failed in independent evaluation; the family optimizes paper novelty, not a user's fixed metric. | VC | landscape.md Tier 3 [A12–A22][A16][A46]; competitors.md | image | image rendered |
| V54 | Teardown: AutoML collapse — The category leader took a 92% valuation haircut because search-without-science commoditized. | VC | landscape.md Tier 4 [A23–A29]; comps_exits.md | image | image rendered |
| V55 | Teardown: tracking absorption — Even successful trackers were features, not companies; value migrated to whoever owns compute or models. | VC | landscape.md Tier 5 + post-mortems [A30–A34][A41–A43] | image | image rendered |
| V56 | Teardown: manual + ChatGPT (the chosen enemy) — Your chatbot suggests; a tired human verifies. Ascent's protocol verifies; you steer. | VC | competitors.md rows 19–20; positioning.md §6 | image | image rendered |
| V57 | TAM tiers — Job-filtered at the TAM layer: $0.9–1.35B individuals + $0.15B quant funds + $1.0B enterprise ≈ $2–3B core, with the $10B ceiling labeled as ceiling. | VC | market_sizing.md §1 | image | image rendered |
| V58 | Corrected SOM funnel — Stars are not users: the stars→active stage was missing, and the old $5M plan did not survive the correction. | VC | market_sizing.md §3, §6 | image | image rendered |
| V59 | Funding-climate map — Every funded version of the thesis is cloud/wet-lab scale; the laptop-native, practitioner-priced corner is unclaimed. | VC | market_structure.md funding section [C26–C30][C33]; comps_exits.md | image | image rendered |
| V60 | Comps corridor — Absorbed = low, commoditized = 1.8x, executing devtool = 15–29x, agent leader = ~53x, narrative premium = ~88x; seed pricing is milestone evidence, not ARR math. | VC | financials/comps_exits.md §1 | image | image rendered |
| V61 | Revenue waterfall — Recomputed honestly, 150 paying arrives at ~month 20–21, not month 18; the milestone moved rather than the assumptions inflating. | VC | financials/revenue_build.md §4 | image | image rendered |
| V62 | Risk matrix — Three risks stay HIGH after mitigation and the pack says so: the bet, the clock, and the structure. | VC | financials/risk_matrix.md | image | image rendered |
| V63 | Experiment-board Gantt — E2 and E6 run before E1, E1 before E4; every threshold was declared before any result exists. | VC | validation/experiment_board.md | image | image rendered |
| V64 | Capital-efficiency / kill-floor unification — ≥8–10 measured-active users per $1k by month 12 is arithmetically the same statement as the E3 kill floor. | VC | use_of_funds.md §3; market_sizing.md §6 | image | image rendered |

## F. Enterprise-buyer set

| ID | Title — headline takeaway | Audience | Source artifact(s) | Form | Status |
|---|---|---|---|---|---|
| V65 | Security & data locality (buyer view) — There is no Ascent cloud in the data path; the honest hole (reasoning tokens) is named on the diagram, with redaction and BYO-endpoint as [ROADMAP]. | enterprise-buyer | D06.md; personas.md card 4 | image | image rendered |
| V66 | Vendor-DD readiness timeline — $90k of block-D hard costs (SOC 2 Type I + pentest ~$50k, security docs + legal $25k, escrow $15k) before any enterprise deal is sellable. | enterprise-buyer | use_of_funds.md block D; market_type.md §4; gtm.md §3 row 5 | image | image rendered |
| V67 | Attestation roadmap — Examiner-ready evidence packs mapped to SR 11-7-style review are [ROADMAP], never claimed shipped; the audit-trail architecture is itself the compliance story. | enterprise-buyer | features_prioritized.md #47–48; personas.md card 5; risk_matrix.md #8 | image | image rendered |

## G. Extended cross-audience set

| ID | Title — headline takeaway | Audience | Source artifact(s) | Form | Status |
|---|---|---|---|---|---|
| V68 | Stage-gate ladder — Discovery (with named early-Validation overlap): the gate opens only when all five pre-declared exit criteria hold. | cross | validation/stage_gate.md | image | image rendered |
| V69 | E1 operating characteristics — At n=15 the joint AND-of-three test carries up to ~35% false-fail risk at healthy rates; a narrow miss triggers diagnostic review, but thresholds never move. | research-lead | experiment_board.md E1 operating characteristics | image | **optional** · image rendered |
| V70 | Substitution math — $3–12/day of the user's own tokens + $125/mo for the rigor layer, against a conservative $1,100/day of the practitioner's own time. | VC | pricing.md §1–2; whitepaper.md M5 | image | **optional** · image rendered |
| V71 | Cost-curve poster — Capability-per-dollar falls ~40–50x/yr while frontier list prices are flat-to-rising; routing is a margin feature. | VC | capability_table.md §3 [B16–B21]; unit_economics.md §5 | image | image rendered |
| V72 | BYOK margin bridge — A hosted flat-rate Pro would carry $90–360/mo of token COGS against $125 revenue: negative margin on exactly the best users. | VC | unit_economics.md §1 | image | image rendered |
| V73 | Churn/LTV sensitivity — LTV swings 2.3x across the 3–7%/mo planning band; payback stays 2.7 months at every point because CAC is organic-dominated. | VC | unit_economics.md §4; risk_matrix.md #9 | image | image rendered |
| V74 | Honesty chain — Ledger → offline DSR → acceptance gate → family thresholds: this chain is also the marketing. | practitioner | features_prioritized.md dependencies | image | **optional** · image rendered |
| V75 | A11 corpus chain — Ledger + refusals → seeded violations → opt-in telemetry → copilot → priors: skip any link and the moat is brand-only. | research-lead | features_prioritized.md dependencies; positioning.md §5 | image | **optional** · image rendered |
| V76 | E-board threshold cards — Eight experiments, every pass/fail number frozen on 2026-08-27, before any result exists. | research-lead | experiment_board.md | image | **optional** · image rendered |
| V77 | Headcount grid — Monthly allocation so nothing double-counts: the audit that caught ~$45k of double-counted comp in the prior version. | VC | use_of_funds.md §2b | image | **optional** · image rendered |
| V78 | Seed-story four facts — The $4–6M seed is raised on exactly four proven facts, no more. | VC | use_of_funds.md §4 | image | image rendered |
| V79 | Lean canvas board — The riskiest cell is Revenue streams: stars prove a free toy's demand, not $1,500/yr rigor demand. | cross | strategy/lean_canvas.md | image | **optional** · pending |
| V80 | Value-prop mappings — The #1 mapping is externally evidenced on both sides: the pain at published scale, the reliever from settled methodology. | cross | strategy/value_prop_canvas.md §4 | image | **optional** · pending |
| V81 | Persona card wall — Five cards, one system: the must-have language is verbatim, and card 5's first objection has no clever answer — which is why it's year-2+. | cross | strategy/personas.md | image | image rendered |
| V82 | North-star pair — Kept improvements/week and reproduction rate must move together; either alone is vanity. | practitioner | lean_canvas.md key metrics; experiment_board.md rule 5 | image | **optional** · pending |
| V83 | Activation-health day — A good day = ≥1 dashboard read + ≤3 steering sentences + ≥20 gate-passed trials + $/day inside the projected band. | practitioner | journeys/day_in_life.md recommended next | image | **optional** · pending |
| V84 | Spend-meter exemplar — $6.90 across two campaigns overnight, 91% mid-tier — the user's own bill, visible per step. | practitioner | day_in_life.md; ux_spec.md screen 10 | image | **optional** · pending |
| V85 | Fork etiquette & plan-B — Karpathy is notified before launch; if he returns or blesses another fork, the pre-written branch executes: congratulate, stay compatible, shift channels. | cross | gtm.md §4; experiment_board.md E5 | image | **optional** · pending |
| V86 | Trust-test recruitment funnel — 40 candidates → 15 completers at ~40% show rate, from four named pools, incentive non-cash by design. | research-lead | gtm.md §4 step 5; experiment_board.md E1 | image | **optional** · pending |
| V87 | Contamination pre-emption — Up to 45% contamination on popular benchmarks cuts against the PoC numbers and *for* the private-data product. | research-lead | survey.md §6 [D37][D38]; gtm.md §2.2 | image | **optional** · pending |
| V88 | Why-now triptych — Horizons doubled every ~4 months, agents win short sprints 4x, and capability cost falls 40–50x/yr: the loop did not exist as a capability 18 months ago. | VC | capability_table.md "Why now" | image | image rendered |
| V89 | MLE-bench progress curve — 16.9% (Oct 2024) → ~40–65% (2026): agents routinely medal, and unsupervised correctness is still unsolved. | research-lead | capability_table.md §2; survey.md §5 | image | **optional** · pending |
| V90 | RE-bench division of labor — Agents 4x humans at 2-hour budgets; humans 2x agents at 32 hours: execution is theirs, judgment is ours. | research-lead | capability_table.md [B4] | image | **optional** · pending |
| V91 | Laptop envelope — 128 GB unified-memory laptops and 22 s–2.1 min experiments make "laptop-native research hardware" a 2026 fact, not a projection. | practitioner | capability_table.md §5 [B26–B28]; not_vaporware.md §4 | image | **optional** · pending |
| V92 | Repo reality table — ~4,000 LOC of running core Python, module by module: the mechanism is code with forensic logs, not a deck. | research-lead | not_vaporware.md §1 | image | **optional** · pending |
| V93 | Ablation evidence card — Removing the citation gate spiked invalid experiments 42% and produced 3 leakage incidents; the rigor layer measurably pays for its overhead (one task, one seed). | research-lead | not_vaporware.md §3; whitepaper.md M4 | image | image rendered |
| V94 | Honesty ledger (implies vs lacks) — What the paper implies and the repo lacks, listed by name; none of it fatal, all of it on the this-quarter list. | research-lead | not_vaporware.md §5 honesty ledger | image | **optional** · pending |
| V95 | This-quarter vs research-risk board — Six engineering items on existing rails vs five labeled research risks; the difference is the credibility. | research-lead | not_vaporware.md §5 | image | image rendered |
| V96 | Revenue stages 0–4 — No jump happens without its named milestone; stages 3–4 are the conditional expansion story, explicitly not the plan of record. | VC | revenue_build.md §1 | image | image rendered |
| V97 | Team ACV steps — $9k → $12k → $15k, one basis line each; usage revenue is upside, deliberately unforecast pre-measurement. | VC | revenue_build.md §1 note, §2 | image | **optional** · pending |
| V98 | Hosted-run economics — Campaign COGS $135–540 billed at cost × 1.3–1.5: passthrough plus margin, never a loss-maker, never the margin story. | VC | unit_economics.md §2 | image | **optional** · pending |
| V99 | W2.E orphan-cluster decision — Eight experiment-selection techniques power nothing named; until #29 is built, marketing must not claim search-efficiency IP. | research-lead | technique_feature_matrix.md finding 1; features_prioritized.md #29 | image | **optional** · pending |
| V100 | Teardown mega-table — All 20 competitor rows on one canvas: every casualty either automated one step or automated search without trust; nobody died from automating too much rigor. | VC | competitors.md; landscape.md post-mortems | image | **optional** · pending |
