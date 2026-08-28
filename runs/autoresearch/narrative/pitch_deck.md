# Ascent — pitch deck (15 slides)

Every title is the takeaway. Every number traces to research/ or carries an assumption flag. PoC results are founder-reported, reproducible from the repo, not independently verified (A6).

---

## Slide 1 — 94,800 people starred a research loop nobody maintains

- Karpathy's autoresearch (released Mar 7, 2026): agents grinding one metric overnight — 8k stars in 48 hours, 94.8k stars / 13.4k forks in six months [A1][A3]
- No active maintainer since March 26, 2026; ~185 issues and PRs piling up unanswered [C35]
- The community's own curated fork list: 14 of 16 notable forks are hardware ports or translations; **zero add rigor** [A2]
- Massive proven demand. Abandoned supply. An empirically unfilled gap.

visual: V-star-curve

---

## Slide 2 — Research rigor fails at published scale, manual and automated alike

- Human discipline: data leakage documented in ≥294 papers across 17 fields [D5]; practitioners hand-run 1–3 experiments/day, 38–45% of time lost to data prep [A39]
- Automated "AI scientists": 42% of experiments failed on coding errors in independent evaluation [A16]; CMU found four recurring failure modes — benchmark mis-selection, leakage, metric misuse, post-hoc selection bias [A46]
- The market's verdict: 46% of developers distrust AI output accuracy, up from 31% a year earlier [C3]
- The blocker isn't capability. It's verifiability.

visual: V-leakage-census

---

## Slide 3 — Execution is solved; judgment is the gap — we ship the judgment layer

- Agent coding horizons: ~12 hours at 50% reliability, doubling every ~4 months [B2]
- MLE-bench medal rates went 16.9% (Oct 2024) to roughly 40–65% depending on scaffold and budget [A8][A10][B13][D39]
- The division of labor, measured: agents beat human experts 4× on 2-hour research sprints; humans beat agents 2× at 32-hour budgets [B4] — execution is theirs, judgment is still ours
- Cost per unit of capability falls ~40–50×/yr; 24/7 steering runs $3–60/day — under 10% of one ML engineer's loaded day [B16][B18][B22]

visual: V-metr-horizon

---

## Slide 4 — Point Ascent at your dataset and metric; wake up to audited, kept improvements

- A binding constitution enforces a 7-step scientific method on every experiment: Diagnose → Literature-ground → Hypothesize → Execute → Analyze → Document → Checkpoint [BRIEF]
- Only strict improvements dethrone the champion — monotonic in a tamper-evident, SHA-256-fingerprinted composite metric (monotonic in the proxy, stated plainly [D31])
- Purged/embargoed splits make temporal/overlap leakage structurally impossible [D8]; three pre-commit audit gates check data integrity, citations, reasoning
- Runs for days on a commodity laptop, checkpointed; you steer in natural language

visual: V-ratchet-loop

---

## Slide 5 — The trial ledger is the demo: every runner-executed trial logged, kept and discarded

- Canonical throughput: the PoC sustained ~3–4 experiments/day over months (265+, founder-reported); short-trial tasks project 10–40 gate-passed experiments/night — a projection from PoC per-experiment timings, not yet demonstrated end-to-end
- Every runner-executed trial is logged, kept and discarded; the ledger-completeness audit (E2) is week-1 work
- Persona illustration — Marcus, solo quant, 11pm: 40th signal variant this month, in-sample Sharpe looks great, and he knows enough trials guarantee that at true zero [D7]; he sets the embargo window and sleeps
- In the illustration's morning he reads the ledger before the champion number — trial count, embargo geometry, the discards — the artifact his notebook folder never contained
- Every kept champion is a fingerprinted winner archive: config, model, reasoning, logs — reproducible in one command

visual: V-trial-ledger

---

## Slide 6 — A constitution enforces what a tired human skips

- 52 sections of encoded research judgment governing every agent action; open source by design — the file is the channel (A11)
- Deterministic gates carry the guarantee: citation exists, split geometry holds, hash matches, ledger is complete; LLM-judged checks are a screen, not a guarantee [survey §4.4]
- Each mechanism independently evidenced: retrieval-grounding beats blind search [D28][A9]; purge/embargo is settled financial-ML methodology [D8]; the gates target exactly the independently documented failure modes [A16][A46]
- The composition is the product — no published system combines them [survey §7]

visual: V-gate-stack

---

## Slide 7 — Our flagship number, deflated by our own audit — that's the brand

- Champion test Sharpe +6.52 on EUR/USD after 265+ experiments — founder-reported, reproducible from the repo, **and precisely the statistic the deflated Sharpe ratio exists to discount** [D6][D7]
- So we publish the deflated number first: "+6.52 raw, X deflated over N trials — here's the ledger," before any critic computes it [positioning §4]
- Roadmap: trial-count-corrected acceptance gates — the keep/discard bar rises with experiment count; no published system has one, ours included [survey §6] (closed form exists for Sharpe-family metrics; the permutation-null analogue for other metrics is research risk)
- Competitors chasing benchmark headlines cannot copy this posture without deflating their own headlines

visual: V-deflation-ledger

---

## Slide 8 — The core market is $2–3B, sized bottom-up with the arithmetic shown

- Job filter applied at TAM: only people who repeatedly grind a dataset+metric — ~500–750k individuals + ~1,000 quant funds + ~4,000 enterprise platform payers ≈ **$2–3B/yr core TAM** [market_sizing §1]
- SAM ~$0.7B (self-serve reach, laptop-envelope compute) [market_sizing §2]
- SOM plan: **$1.0M ARR in 36 months** — 94.8k stars × 10% active × 3% paid × $1,500 + teams + 5 audit-led deals; stars are not users, and the funnel says so [market_sizing §3]
- No "1% of $100B" anywhere; beachhead ramp per the recomputed waterfall: ~$110k run-rate at month 12, 150 paying ≈ $225k+ crossing ~month 20–21 [revenue_build §4]

visual: V-som-funnel

---

## Slide 9 — BYOK pricing removes token costs from our margin by construction

- Pro $100–150/mo, bring-your-own-LLM-key: revenue buys the rigor layer, dashboards, SOTA catalog; tokens are user-side by construction (A12) — inside the normalized $100–200/mo power-user tier [C23]
- Team ~$500–1k/mo: parallel streams, shared winner archives, hosted runs usage-billed (Devin ACU precedent [C21])
- Enterprise, year-2+: audit-trail retention, on-prem, attestations-roadmap (A10) — displacing $100k–500k/yr DataRobot-class spend [C19]
- Monetization gates sit exactly where GitLab/W&B history proved they convert: collaboration, hosting, compliance [C31][C18]

visual: V-pricing-ladder

---

## Slide 10 — Ninety days of scripted motion end in pre-orders, not a hosted fantasy

- Days 1–30: ship ascent v0 (named, upstream-credited, Karpathy notified first); answer the top ~15 orphaned issues; instrument *active* users, not stars [gtm §4]
- Days 31–60: the 15-practitioner trust test — ≥3 on their own private data (the contamination-proof leg [D37][D38]); publish results with the DSR treatment, whatever they say
- Days 61–90: $99 refundable pre-orders for the BYOK CLI tier — target 30 pre-orders + 5 design partners; hosted dashboards get built only after pre-orders clear the gate
- Growth engine: the Reproducible Champion loop — every published bundle is a proof artifact, a search asset, and a recruiter [gtm §2]

visual: V-gtm-timeline

---

## Slide 11 — The sustained-campaign, audit-gated quadrant is empty — and incumbents are walking away from it

- One-shot × trust-me: Sakana, Agent Laboratory, AIDE/Weco, MLE-STAR, all AutoML, Devin/Cursor sessions, manual+ChatGPT [positioning §2]
- Sustained × trust-me: the Karpathy lineage — free, unmaintained, hard-coded to one task [A1][A2]
- Sustained × audit-gated: **empty — Ascent's claim** [positioning §2]
- Trajectories point away: AutoML leader took a 92% valuation haircut [A27]; trackers were absorbed (W&B→CoreWeave $1.7B, Neptune→OpenAI shutdown) [A30][A33]; the real enemy is manual+ChatGPT, and it never sleeps well

visual: V-quadrant-map

---

## Slide 12 — Forks copy the constitution in a day; they cannot backfill the ledger

- The file is open source — the moat is three accumulating assets (A11):
- 1. Private cross-domain calibration corpus: full trial ledgers *including discarded experiments*, gate catch-rates on seeded violations, what-worked-where priors — never shipped in bundles
- 2. Hosted trust infrastructure: DSR/attestation service, SOTA catalog, the reproduction network
- 3. The rigor brand, compounded by public self-deflation — structurally resistant to copying by headline-chasers
- Honest window: 12–24 months before a Cursor/Cognition-class "research mode" [positioning §5]; a follower starting at month 18 is 18 months of ledger behind — if the corpus effect measures (E8, pre-registered)

visual: V-moat-ledger

---

## Slide 13 — Six domains, one protocol, reproducible in one command

- Validated PoC domains include: EUR/USD (Sharpe +6.52 raw, DSR treatment per slide 7), fraud detection (beat AutoGluon and H2O — the measured SOTA of tabular AutoML [A23]), Higgs AUROC 0.8675+, PathMNIST OOD AUC 0.997, Olivetti ARI 0.874 — all founder-reported, reproducible from the repo (A6)
- 265+ experiments on a single campaign vs. the manual baseline's 1–3 a day [A-Tier 7]
- Full forensic logs on every run; reproducibility bundle published (paper Appendix D)
- The two-week test that converts founder-reported into evidence: 15 practitioners, one-command reproduction, ≥3 on private data [BRIEF]

visual: V-domain-grid

---

## Slide 14 — The founder already ran the factory for months

- Built the entire PoC through pure natural-language steering — zero hand-written Python — across six disparate domains, on a consumer Intel laptop, through BSODs, thanks to aggressive checkpointing (A5)
- The steering_log.md is itself the demo: proof that a technical lead can run a research factory by steering alone
- The asymmetric insight: execution stopped being the bottleneck; discipline did — and the constitution is discipline, made enforceable
- Already holds the first cross-domain ledger — the moat's month zero (A11); hiring plan per use_of_funds §2b: founding engineer at month 6 (after the trust gate, not before), devrel/community engineer at month 13 (triggered by E3's month-6 pass or MRR ≥ $10k, whichever comes first), optional third hire only if Team usage revenue is live

visual: V-deck-team

---

## Slide 15 — $1.2M pre-seed buys 24 months of milestone-gated de-risking

- **$1.2M pre-seed, 24 months of runway** ($995k across four blocks + $205k buffer, ~21%; average burn ~$41k/mo), spent in milestone-linked blocks [use_of_funds §1–2]:
- **Block A, months 0–6, $95k** — ascent v0 + the 15-practitioner trust test (ends when E1 passes all three legs). **Block B, months 4–12, $260k** — launch: pre-order gate, BYOK Pro GA, first ~75 paying ≈ $110k run-rate at month 12. **Block C, months 10–18, $285k** — Team tier + the instrumented corpus (E8 measures the moat); ~135 paying ≈ $199k at month 18, crossing 150 paying ≈ $225k+ at ~month 20–21 [revenue_build §4]. **Block D, months 15–24, $355k** — the enterprise-DD package and first 3 audit-led deals.
- Stage-gate discipline: **block B money is not spent if block A's milestone fails** — the wire is one check, the spending is milestone-sequenced [use_of_funds §2]
- Pre-committed kill trigger: <0.5% paid conversion of measured active users, or active base stuck under ~3k at month 6 [market_sizing §6]
- What you're buying: the only team in the empty quadrant, 12–24 months before anyone else notices it

visual: V-use-of-funds

---
