# Competitor teardown — Ascent

> **What this is** — A 20-row teardown scoring every alternative Ascent's buyer could choose — Karpathy's free loop, AutoML incumbents, paper factories, trackers, coding agents, doing nothing — on mechanism, price, traction and mechanistic failure.
> **Why it exists** — It is the row-by-row evidence for the claim the pack prices and pitches on: the sustained-campaign × audit-gated quadrant is empty. Asserted without this table, the first serious skeptic empties it with one system Ascent never checked, and the category-creation bet collapses into comparison marketing.
> **How to read it** — Last column first, then rows 19–20: the real enemy is manual + ChatGPT, not AutoML. Attack the quadrant.
> **Depends on / feeds** — Built on [`research/landscape.md`](landscape.md); feeds [`strategy/positioning.md`](../strategy/positioning.md) and [`strategy/lean_canvas.md`](../strategy/lean_canvas.md).

Date of research: 2026-08-27. Facts tagged [An]; sources at end. Mechanistic failure = where the system structurally cannot do what Ascent's loop does (Diagnose → Ground → Hypothesize → Execute → Analyze → Document → Checkpoint, audit-gated, on the user's dataset/metric), not where it merely underperforms.

## Teardown table

| # | Competitor | Segment | Mechanism | Pricing | Funding / stage | Traction signal | Where it wins | Where it fails mechanistically |
|---|---|---|---|---|---|---|---|---|
| 1 | Karpathy `autoresearch` | OSS agentic hill-climb | Greedy code-edit loop, fixed 5-min runs, single metric (val_bpb), single task (nanochat LLM training) [A1] | Free (MIT) | None — personal OSS | 94.8k stars / 13.4k forks in ~6 months [A1][A3] | Distribution, legitimacy, minimal-loop proof | Hard-coded to one task+metric; no leakage protection, no literature, no audit artifacts, greedy path converges to local optima [A4] |
| 2 | autoresearch forks (16 curated) | OSS derivatives | Same loop, ported (ROCm, ANE, MLX, WebGPU, Colab-T4…) [A2] | Free | None | 13.4k forks; 14/16 notable forks are platform ports, ~1 domain extension, 0 rigor additions [A2] | Run-anywhere plumbing | Nobody built the rigor layer or dataset/metric generality — the gap is empirically unfilled [A2] |
| 3 | Weco AI (AIDE) | ML-engineering agent, commercial | Solution-tree search over code; score-driven [A6] | Public beta; pricing unpublished (unfindable 2026-08-27) | $8M seed [A7] | Scaffold for OpenAI's MLE-bench baseline; SOTA claims on MLE-bench/RE-Bench [A6][A8] | Short-horizon Kaggle-shaped optimization | Assumes a given, leak-free evaluator; no protocol construction, no citations, no audit trail, no multi-day champion campaign |
| 4 | Google MLE-STAR | ML-engineering agent (research) | Web-search-seeded solution + ablation-guided targeted refinement; 64% medals MLE-bench-Lite [A9] | N/A (research code) | Google | NeurIPS 2025; best published Lite result [A9] | Proves retrieval-grounding beats pure LLM priors | One-shot per task; retrieves model recipes, not cited science; no gates/fingerprints; not a product |
| 5 | Sakana AI Scientist v1/v2 | Autonomous paper factory | Idea→experiment→paper; agentic tree search; ~$15–25/paper [A12] | OSS; company sells Japan-focused models | $135M Series B at $2.65B post (2025-11-17); ~$379M total [A15] | 1st AI paper past workshop review (ICLR 2025); Nature methods paper (Mar 2026) [A13][A14] | Category legitimacy, cost-per-artifact, brand | Optimizes paper novelty, not a user's fixed metric; 42% experiment failure rate & bad novelty checks measured [A16]; reproducibility secondary; cloud-scale one-shot |
| 6 | Agent Laboratory / AgentRxiv | Autonomous paper pipeline (academic) | Role-based multi-agent lit-review→experiment→report; $2.33/paper [A17]; shared preprint server lifts MATH-500 70.2→79.8% [A18] | Free (OSS) | AMD/JHU academic | EMNLP Findings 2025; wide citation | Cheapest full pipeline; real literature step; human checkpoints | Grounding feeds prose, not deficiency-driven experiment choice; no leakage/metric gates; paper is the product, not a kept improvement |
| 7 | Google AI Co-Scientist | Hypothesis engine | Gemini multi-agent generate→debate→tournament-rank [A19] | Trusted-tester | Google | Nature 2026 paper; 2-day recapitulation of 10-yr finding [A19] | Best-in-class Hypothesize/Ground upstream | Does not execute on user data; no metric, no experiments, no checkpoints — stops where Ascent starts |
| 8 | FutureHouse / Edison Scientific | AI scientist for biology | Literature agents (PaperQA2) + discovery agents (Robin) [A20] | Platform free/beta; Edison commercial | Nonprofit (Schmidt-backed); Edison $70M seed 2025 [A20] | Robin→ripasudil dAMD candidate (2025) [A20] | Deepest literature-grounding stack anywhere | Domain-locked to life science; Execute is wet-lab/human; no ML/quant metric hill-climbing |
| 9 | Intology Zochi / Autoscience Carl | Paper-milestone startups | Autonomous paper generation aimed at peer review | Unfindable | Unfindable (2026-08-27) | ACL 2025 main-track accept (Zochi) [A21]; ICLR 2025 workshops (Carl) [A22] | Publicity milestones | Peer-review-pass ≠ audited metric improvement on a user's data; no product surface for practitioners |
| 10 | AutoGluon | OSS AutoML | Ensembling/stacking/HPO presets incl. tabular foundation models [A23] | Free | AWS-backed OSS | AutoML Benchmark 2025 SOTA; 5-min preset beats rivals' 1-hr [A23] | Strongest free baseline; speed; stability | Fixed search space; cannot diagnose deficiency, read literature, invent features, or verify protocol; no reasoning artifact — Ascent's PoC beat it on fraud (founder claim, to verify in demo) |
| 11 | H2O.ai Driverless AI | Enterprise AutoML | Grandmaster-recipe feature search + HPO | Custom: ~$12k → $1M+/yr; mid-market $250–550k [A26] | ~$744M raised (getlatka); last mark $1.7B Nov 2021 [A24] | $75M revenue 2024; headcount 389→~330; GenAI/sovereign pivot [A24][A25] | Enterprise trust, on-prem, regulated-industry base | Same fixed-space limits as #10; category stalled — the pivot itself signals AutoML stopped compounding |
| 12 | DataRobot | Enterprise AutoML/MLOps | End-to-end AutoML platform + agent pivot | $150k–$500k+/yr [A27] | $6.3B (2021) → ~$500M (early 2025); layoffs 26%+7% [A27] | $285M ARR, 850+ enterprises, ⅓ of Fortune 50 [A27] | Incumbent distribution in F500 | 92% valuation haircut = market's verdict on AutoML-without-science; no literature, no audit, still sells to committees not practitioners |
| 13 | SageMaker Autopilot/Canvas | Cloud AutoML | No-code AutoML on AWS instances | $1.90/hr workspace; ~$2–7 per small tabular build [A28] | Amazon | Default for AWS shops | Cheap, integrated, elastic | Commodity HPO; user must supply correct eval protocol; zero scientific method; hyperscalers cannibalize it (Google killed AutoML Text/Video 2025 [A29]) |
| 14 | Vertex AutoML | Cloud AutoML | Managed AutoML on GCP | Usage-based | Google | AutoML Text & Video already shut down (June/July 2025) [A29] | GCP integration | Same as #13, plus demonstrated product mortality |
| 15 | Weights & Biases | Experiment tracking | Passive logging/dashboards of human-designed runs | $50–150/user/mo; enterprise ~$300+/unit [A31] | Acquired by CoreWeave: $1.4B announced / $1.7B reported, closed 2025-05-05 [A30] | De-facto standard in DL labs pre-acquisition | Beautiful record-keeping, network effects | Records experiments; designs and verifies none; a leaky split logs as cleanly as a sound one; now a GPU cloud's attach product |
| 16 | MLflow | OSS experiment tracking | Open tracking/registry; 3.0 pivoted to GenAI observability [A32] | Free; managed via Databricks | Linux Foundation / Databricks | 30M+ downloads/mo; 5k+ orgs [A32] | Free default everywhere | Same passivity as #15; roadmap now chases LLM-app observability, not experimental science |
| 17 | Neptune.ai / ClearML | Experiment tracking | Tracking SaaS | Neptune was $35–600/mo; ClearML Pro $15/user/mo [A33][A34] | Neptune: acquired by OpenAI, SaaS dead March 2026 [A33] | Neptune's death = consolidation proof | — | Standalone tracking could not sustain a company even with happy users; value migrated to compute/model owners |
| 18 | Devin (Cognition) / Cursor (Anysphere) | General coding agents | Long-horizon autonomous coding; no experimental contract | Devin/enterprise custom; Cursor $20+/mo tiers | Cognition $1B at $26B (May 2026), $492M rev [A35]; Anysphere $29.3B (Nov 2025), >$500M–$2B ARR reports [A36] | Fastest software-revenue ramps recorded | Raw execution capability (Ascent's enabling layer) | No fixed-budget experiments, no champion bookkeeping, no leakage-aware eval, no citations, no monotonic guarantee — a session is not a research campaign |
| 19 | **Manual + ChatGPT** (dominant workaround) | Human + chatbot | Practitioner asks an LLM for ideas/code, runs by hand, judges by eye | ~$20–200/mo LLM subs + salary | — | Default behavior of nearly every practitioner today | Zero setup; human judgment in the loop | ~1–3 experiments/day; no enforced protocol; chat suggestions are uncited and unverified; self-deception (leakage, cherry-picking) unpoliced; nothing runs while you sleep |
| 20 | **Do nothing** (grad-student grind) | Manual baseline | Hand-built harnesses, serial experiments, discipline-policed rigor | $212k–279k/yr ML engineer [A37]; ~$500k typical quant researcher [A38] | — | 38–45% of time on data prep [A39]; 64% of orgs ≥1 month to deploy one model; 75% of DS time on plumbing [A40] | Full trust in own work; accountability | Throughput and enforcement: a tired human skips the audit; months of salary per audited improvement |

## Positioning read — the two axes that actually divide this market

Most public comparisons sort these systems by model quality or benchmark score. That is not where buyers diverge. Two mechanistic axes explain every row above:

**Axis 1 — What the run produces: one-shot artifact vs. sustained metric campaign.**
Paper factories (Sakana, Agent Laboratory, Zochi, Carl) terminate in an artifact and restart from zero; AutoML terminates in a fitted model; MLE-bench agents terminate when the competition ends. Only rows 1–2 (and Ascent) run an open-ended, resumable campaign where a champion is defended across hundreds of experiments — and rows 1–2 are hard-coded to one task. Nothing commercial today sells "your metric, monotonically better, indefinitely."

**Axis 2 — Whether the output is verifiable: trust-me vs. audit-gated.**
CMU's controlled study found the field's flagship autonomous systems commit benchmark mis-selection, data leakage, metric misuse, and post-hoc selection bias — "easily overlooked in practice" [A46]; Beel measured 42% experiment failure in the most famous one [A16]; the best full-MLE-bench agent still medals under 40% [A10]. Every system in the table asks the user to trust unverified agent output or to re-verify it manually (recreating the grind). None ship programmatic pre-commit gates, tamper-evident metrics, or leakage-proof protocol construction as product primitives.

**The white space:** the quadrant *sustained-campaign × audit-gated* is empty. Ascent's only quadrant-mates are the free-but-hard-coded autoresearch lineage (which the fork record shows cannot escape its niche [A2]) — and the incumbent trajectories point away from the quadrant, not toward it: AutoML is being commoditized/cannibalized [A27][A29], trackers were absorbed as features [A30][A33], coding agents chase general software work [A35][A36], and AI-scientist companies chase publication milestones [A13][A21]. The two failure lessons of the dead (point-solutions die: SigOpt, Neptune; search-without-trust stalls: DataRobot, SparkBeyond [A27][A33][A41][A44]) both push toward Ascent's design: automate the *whole* loop and make its output *forensically* trustworthy.

Secondary wedge inside the quadrant: cost locus. Cloud-scale systems bill per run; Ascent's laptop-native + checkpointing model makes marginal experiment cost ≈ electricity + falling LLM tokens — the only cost structure under which "run for days, keep only strict improvements" is rational for an individual payer.

## Sources

- [A1] karpathy/autoresearch — https://github.com/karpathy/autoresearch — 2026-08-27 — stars/forks/scope/metric/budget.
- [A2] Fork discussion #225 — https://github.com/karpathy/autoresearch/discussions/225 — 2026-08-27 — fork composition (ports vs. rigor).
- [A3] AutoResearch growth — https://www.paperclipped.de/en/blog/karpathy-autoresearch-autonomous-research/ — 2026-08-27 — release date, early star velocity.
- [A4] GEAR — https://arxiv.org/abs/2605.13874 — 2026-08-27 — greedy loop hits local optimum; population search sustains gains.
- [A6] AIDE — https://arxiv.org/abs/2502.13138 — 2026-08-27 — solution-tree mechanism, benchmark claims.
- [A7] Weco seed — https://www.weco.ai/blog/seed-announcement — 2026-08-27 — $8M seed, beta status.
- [A8] MLE-bench — https://arxiv.org/abs/2410.07095 — 2026-08-27 — 16.9% baseline medal rate.
- [A9] MLE-STAR — https://research.google/blog/mle-star-a-state-of-the-art-machine-learning-engineering-agents/ — 2026-08-27 — 64% MLE-bench-Lite medals; search-grounding.
- [A10] Operand Quant — https://arxiv.org/abs/2510.11694 — 2026-08-27 — 39.56% full-bench medal rate (2025 best found).
- [A12] AI Scientist cost — https://analyticsindiamag.com/ai-news-updates/sakana-ai-releases-ai-scientist-which-writes-scientific-papers-for-15/ — 2026-08-27 — $15/paper v1; $20–25 v2 (eesel).
- [A13] Sakana first peer-reviewed AI paper — https://sakana.ai/ai-scientist-first-publication/ — 2026-08-27 — ICLR 2025 workshop pass, 6.33.
- [A14] AI Scientist in Nature — https://sakana.ai/ai-scientist-nature/ — 2026-08-27 — Nature, March 2026.
- [A15] Sakana Series B — https://techcrunch.com/2025/11/17/sakana-ai-raises-135m-series-b-at-a-2-65b-valuation-to-continue-building-ai-models-for-japan — 2026-08-27 — $135M at $2.65B post; ~$379M total.
- [A16] Beel et al. — https://arxiv.org/abs/2502.14297 — 2026-08-27 — 42% experiment failure; novelty errors; template dependence.
- [A17] Agent Laboratory — https://arxiv.org/abs/2501.04227 — 2026-08-27 — $2.33/paper; 84% cost cut; pipeline design.
- [A18] AgentRxiv — https://arxiv.org/abs/2503.18102 — 2026-08-27 — MATH-500 70.2→79.8%.
- [A19] AI Co-Scientist — https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/ — 2026-08-27 — mechanism, weeks→days, 2-day recapitulation.
- [A20] FutureHouse/Edison — https://www.futurehouse.org/ — 2026-08-27 — agents, Robin/ripasudil, Edison $70M seed.
- [A21] Zochi ACL 2025 — https://www.intology.ai/blog/zochi-acl — 2026-08-27 — A* main-track acceptance.
- [A22] Autoscience Carl — https://www.rdworldonline.com/startup-autoscience-says-its-ai-agent-carl-just-wrote-the-first-academically-peer-reviewed-paper/ — 2026-08-27 — ICLR 2025 workshop.
- [A23] AutoGluon benchmark — https://auto.gluon.ai/stable/whats_new/index.html — 2026-08-27 — AutoML Benchmark 2025 dominance; v1.4.
- [A24] H2O.ai financials — https://getlatka.com/companies/h2o.ai and https://pitchbook.com/profiles/company/55882-36 — 2026-08-27 — $1.7B (2021); $75M rev 2024; headcount decline.
- [A25] H2O FedRAMP (May 2025) — via company news in search results — 2026-08-27 — sovereign/GenAI pivot signal.
- [A26] Driverless AI pricing — https://www.g2.com/products/h2o-driverless-ai/pricing and https://www.umu.com/ask/t11122301573854319860 — 2026-08-27 — contract bands $12k–$1M+.
- [A27] DataRobot — https://sacra.com/c/datarobot/valuation/ — 2026-08-27 — $6.3B→~$500M; ARR $285M; layoffs; pricing $150k–$500k+.
- [A28] SageMaker Canvas pricing — https://aws.amazon.com/sagemaker/ai/canvas/pricing/ — 2026-08-27 — $1.90/hr; example build costs.
- [A29] Vertex AutoML shutdowns — https://cloud.google.com/vertex-ai/docs/release-notes — 2026-08-27 — AutoML Text (2025-06-15) & Video (2025-07-31) shutdowns.
- [A30] CoreWeave–W&B — https://investors.coreweave.com/news/news-details/2025/CoreWeave-Completes-Acquisition-of-Weights--Biases/default.aspx — 2026-08-27 — completed 2025-05-05; $1.4B announced / $1.7B reported (range, two sources: CoinDesk; The Information via remunerationlabs).
- [A31] W&B pricing — https://wandb.ai/site/pricing/ and https://www.vendr.com/marketplace/weights-biases — 2026-08-27 — per-user tiers.
- [A32] MLflow — https://www.databricks.com/product/managed-mlflow — 2026-08-27 — 30M+ monthly downloads; 3.0 GenAI pivot.
- [A33] Neptune shutdown — https://mlopslab.org/neptune-ai-alternatives-urgent-shutdown-march-2026/ — 2026-08-27 — OpenAI acquisition; March 2026 shutdown; old pricing.
- [A34] ClearML pricing — https://www.zenml.io/blog/neptune-ai-alternatives — 2026-08-27 — Pro $15/user/mo.
- [A35] Cognition — https://thenextweb.com/news/cognition-just-raised-1-billion-at-a-26-billion-valuation-and-90-of-its-own-code-is-written-by-its-ai — 2026-08-27 — $1B at $26B; $492M revenue.
- [A36] Anysphere/Cursor — press coverage incl. https://techcrunch.com (Nov 2025 Series D) — 2026-08-27 — $29.3B valuation; >$500M ARR (Jan 2026); ~$2B ARR later reports (single-source; range stated).
- [A37] ML engineer comp — https://builtin.com/salaries/us/machine-learning-engineer and https://www.levels.fyi/t/software-engineer/title/machine-learning-engineer — 2026-08-27 — $212k avg / $279k median total comp.
- [A38] Quant comp — https://www.quantt.co.uk/resources/quant-researcher-salary-guide — 2026-08-27 — $150k–$1M+ by level; ~$500k typical.
- [A39] Anaconda surveys — https://www.anaconda.com/blog/state-of-data-science-2024-key-findings — 2026-08-27 — data-prep time share 38–45% (2020–2022).
- [A40] Algorithmia surveys — https://thenewstack.io/add-it-up-how-long-does-a-machine-learning-deployment-take/ — 2026-08-27 — 64% ≥1 month to deploy; 75% time on model plumbing.
- [A41] SigOpt wind-down — https://github.com/sigopt/sigopt-server — 2026-08-27 — Intel ceased development/support.
- [A44] SparkBeyond — https://getlatka.com/companies/sparkbeyond.com — 2026-08-27 — $7.2M ARR / $21.5M valuation (third-party estimate, directional).
- [A46] CMU pitfalls paper — https://arxiv.org/abs/2509.08713 — 2026-08-27 — four failure modes in AI-scientist systems.
