# Landscape — everything adjacent to Ascent, nearest-to-farthest from its mechanism

Date of research: 2026-08-27. All facts live-web-verified on that date; every fact carries an [An] tag resolved in **## Sources**. Ascent's core loop for mapping: **Diagnose → Ground(literature) → Hypothesize → Execute → Analyze → Document → Checkpoint**, with three audit gates (data integrity, citation rigor, reasoning completeness), a fingerprinted composite metric, and purge/embargo super-folds.

---

## Tier 1 — Same loop skeleton (metric hill-climbing agents)

### 1. Karpathy `autoresearch` (open-source, March 2026)
- **What:** AI agents autonomously improving single-GPU LLM training (nanochat) overnight: agent edits `train.py`, runs fixed 5-minute experiments, evaluates `val_bpb` (validation bits-per-byte), keeps improvements, iterates [A1]. Released 2026-03-06; 8k stars in 48h, 48k stars / 6.7k forks in two weeks [A3]; **94.8k stars / 13.4k forks, 52 open issues, MIT license as of 2026-08-27** [A1].
- **Loop mapping:** Execute → Analyze → Checkpoint only. No Diagnose step (no structured deficiency analysis), no Ground (zero literature retrieval), Hypothesize is implicit in the LLM's next edit, Document is a log not a cited rationale.
- **Mechanism:** greedy hill-climb over code edits with a fixed compute budget per experiment making runs comparable [A1].
- **Strengths:** proved massive demand for the minimal loop (fastest-growing repo class on GitHub [A3]); fixed-budget experiment design is a genuinely good comparability primitive; Karpathy's distribution.
- **Measured limits:** hard-scoped to one task (LLM pretraining on one GPU), one metric (val_bpb), NVIDIA H100 assumed [A1]. No leakage protection, no audit trail, no literature grounding — none claimed.
- **Gap left:** everything Ascent calls the rigor layer, plus generalization to arbitrary dataset+metric. This is the anchor demand-proof, not a competitor for Ascent's user.

### 2. The `autoresearch` fork ecosystem (13.4k forks)
- **What:** the community's attempts to extend #1. The repo's own "notable fork submissions" thread (2026-03-12) lists 16 highlighted forks: ROCm/AMD port, Apple Neural Engine, MLX/16GB-Mac, Mac Mini no-CUDA, WebGPU-in-browser, free-T4/Colab, Rust+CUDA rewrite, DGX Spark, Chinese translation, a multi-agent variant, and exactly one domain extension — `autoresearch-glm`, "autonomous feature discovery for tabular GLM models" [A2].
- **Loop mapping:** identical to #1; forks change *where it runs*, not *what it does*.
- **Strengths:** proves the porting energy exists; laptop-native demand is real (multiple Apple-Silicon and free-GPU ports) [A2].
- **Measured limits:** of 16 curated forks, 14 are hardware/platform ports or translations; ~1 changes the research domain; 0 add evaluation rigor, leakage protection, or literature grounding [A2].
- **Gap left:** confirms the founder's claim empirically — the community iterates on plumbing, not on scientific method. The rigor layer remains unbuilt in the ecosystem.

### 3. GEAR — Genetic AutoResearch (arXiv, May 2026)
- **What:** academic successor to the autoresearch loop: population-based (genetic) search over code-change candidates instead of single-path hill-climb; parents selected on productivity/novelty/coverage; mutation + crossover [A4].
- **Loop mapping:** Execute → Analyze → Checkpoint with a smarter Hypothesize (population search). Still no Ground, no audit gates, no Document-as-evidence.
- **Measured limits / findings:** all three GEAR variants beat the AutoResearch baseline at equal compute; the key negative finding for greedy loops — **the single-path baseline converges to a local optimum while population search keeps finding improvements** [A4].
- **Gap left:** search-strategy research, not a product; validates that naive hill-climbing stalls, which is an argument for Ascent's literature-grounded Diagnose step (escaping local optima via knowledge, not just via population diversity).

### 4. Evo AI Labs "Multi-Agent AutoResearch" (April 2026)
- **What:** open-source project layering tree search on the autoresearch-style greedy hill-climb — multiple directions fork from any committed node so exploration doesn't collapse to one path [A5]. Direct-fetch of the write-up returned 403; details are from the published abstract/summary only — funding, team, and traction were **unfindable**.
- **Gap left:** same as GEAR — better search, no rigor, no generalization to user datasets.

---

## Tier 2 — ML-engineering agents (one-shot Kaggle-style optimization)

### 5. AIDE / Weco AI
- **What:** LLM agent that automates ML-engineering trial-and-error by organizing all historical solutions in a tree and proposing improvements per node ("AI-Driven Exploration in the Space of Code," arXiv:2502.13138) [A6]. Commercialized by Weco AI ($8M seed) as an "AI research engineer" in public beta [A7].
- **Loop mapping:** Hypothesize → Execute → Analyze in a tree; evaluation is whatever score function the task hands it. No Diagnose beyond score deltas, no Ground, no leakage defenses, no audit artifacts.
- **Strengths:** was the scaffold behind OpenAI's best MLE-bench baseline (o1-preview + AIDE: bronze-or-better in 16.9% of Kaggle competitions) [A8]; claimed 5× medal-rate jump on MLE-bench and above-top-human results on METR RE-Bench [A6].
- **Measured limits:** optimizes short-horizon, well-specified Kaggle-shaped tasks where the eval harness is given. Building the leakage-free harness — Ascent's hardest manual step — is assumed away.
- **Gap left:** no sustained multi-day monotonic campaign on a user's own metric; no evidence trail a skeptic could audit.

### 6. Google MLE-STAR (Aug 2025, NeurIPS 2025)
- **What:** ML-engineering agent that first **web-searches for effective models** to form an initial solution, then refines targeted code blocks guided by ablation studies; medals in 64% of MLE-bench-Lite competitions [A9].
- **Loop mapping:** closest existing system to Ascent's Ground step — but it retrieves *model recipes from the web*, not scientific literature with citations; ablation-guided refinement is a real Diagnose analogue. Still one-shot per competition; no audit gates, no fingerprints, no campaign memory.
- **Strengths:** demonstrates that retrieval-grounding measurably beats pure-LLM-prior agents (64% vs. prior best on same benchmark) [A9] — external evidence for Ascent's core bet.
- **Gap left:** research artifact (code in Google's agent framework), not a product; no rigor/audit layer; Kaggle-horizon not days-long campaigns.

### 7. MLE-bench leaderboard agents (Operand Quant, EurekAgent, ML-Agent…)
- **What:** the benchmark race OpenAI started (MLE-bench: 75 Kaggle competitions [A8]). 2025 best full-benchmark medal rate: Operand Quant, 39.56% ± 5.65% (63.6% Lite / 33.3% Medium / 20% Hard) [A10]; EurekAgent reports 85.7% on a curated 7-competition subset [A11].
- **Gap left:** the entire category optimizes *given* leak-free evaluators built by benchmark authors. In the wild the evaluator is the hard part — that inversion is Ascent's opening. Also: medal rates ≤40% on full MLE-bench mean unsupervised correctness is far from solved [A10], which is why audit gates matter.

---

## Tier 3 — Autonomous "AI scientist" paper factories

### 8. Sakana AI — The AI Scientist v1/v2
- **What:** end-to-end automated research: idea → experiments → paper, ~$15/paper (v1, 2024), ~$20–25/paper (v2) [A12]. v2 added agentic tree search, dropped human code templates, and produced the first fully AI-generated paper to pass workshop-level peer review (ICLR 2025 ICBINB workshop, score 6.33) [A13]. Methodology paper published in **Nature, March 2026** [A14]. Company: $135M Series B closed 2025-11-17 at $2.65B post-money (MUFG, Khosla, NEA, Lux, In-Q-Tel); ~$379M total raised [A15].
- **Loop mapping:** covers Hypothesize → Execute → Analyze → Document, but optimized for *paper novelty*, not for a user's fixed metric; no monotonic champion, no Ground-with-citation-gates (its novelty checks are the weak point, see #16), no user dataset.
- **Strengths:** legitimized the category up to Nature-level credibility [A14]; cheap per artifact [A12]; well-funded.
- **Measured limits (independent eval):** Beel et al. found 42% of its experiments failed on coding errors, novelty assessment misclassified established concepts as novel, and autonomy depended on human-provided templates [A16].
- **Gap left:** one-shot paper generation ≠ grinding a real-world metric upward for days; reproducibility and audit are secondary to the artifact. Sakana's own positioning (Japan-optimized models [A15]) suggests AI Scientist is a flagship research program, not its revenue engine.

### 9. Agent Laboratory + AgentRxiv (Schmidgall et al., AMD/JHU)
- **What:** multi-agent pipeline (PhD/Postdoc/ML-Engineer/Professor roles) doing literature review → experimentation → report; $2.33/paper on gpt-4o, ~19.4 min/paper, 84% cost cut vs. prior systems; its mle-solver posted strong MLE-bench-subset results [A17]. AgentRxiv adds a shared preprint server so agent labs build on each other: MATH-500 accuracy 70.2% → 79.8% (11.4% relative solo, 13.7% collaborative) [A18].
- **Loop mapping:** has a real literature-review stage (nearest analogue to Ground) and human-checkpoint co-pilot mode (an ancestor of Steering) — but grounding feeds paper-writing, not deficiency-driven experiment selection; no leakage protection, no audit gates, no monotonic metric contract.
- **Gap left:** throughput-of-papers, not trustworthiness-of-improvements. Nothing prevents the four CMU failure modes (#17) inside its runs.

### 10. Google AI Co-Scientist (Feb 2025 → Nature 2026)
- **What:** Gemini-based multi-agent hypothesis engine (generate → debate → tournament-rank → evolve); reduced early hypothesis generation from weeks to days on 15 biomedical goals; independently recapitulated an unpublished 10-year gene-transfer finding in 2 days [A19].
- **Loop mapping:** Diagnose+Hypothesize+Ground only — it proposes; humans execute. No Execute on user data, no metric, no checkpoints.
- **Gap left:** upstream of Ascent's loop entirely; complements rather than competes. Signals that a hyperscaler sees "scientific method as agent workflow" as strategic.

### 11. FutureHouse / Edison Scientific
- **What:** nonprofit (Eric Schmidt-backed) building AI-scientist agents for biology: PaperQA2 (claimed superhuman literature Q&A), Crow/Falcon/Owl/Phoenix, and Robin — which identified ripasudil as a dAMD treatment candidate end-to-end in 2025 [A20]. For-profit spinout **Edison Scientific raised a $70M seed in 2025** to commercialize [A20].
- **Loop mapping:** strong Ground (literature agents are its crown jewel) + Hypothesize; Execute is wet-lab/human-mediated; no fixed-metric hill-climbing.
- **Gap left:** domain-locked to life sciences; the literature-agent excellence is worth studying (PaperQA2 is the bar for Ascent's Ground step), but it doesn't touch ML/quant practitioners.

### 12. Milestone startups: Intology Zochi, Autoscience Carl
- **What:** Zochi — AI-generated papers accepted at ICLR 2025 workshops and then **ACL 2025 main track** (first fully AI-generated paper through A*-conference review) [A21]. Carl (Autoscience) — ICLR 2025 workshop acceptances [A22]. Funding for both: **unfindable** as of 2026-08-27.
- **Gap left:** both compete on the "peer-review milestone" axis, which is orthogonal to "make my metric better and prove you didn't cheat." No dataset-in, audited-improvement-out product from either.

---

## Tier 4 — Classical AutoML (the incumbents Ascent's PoC benchmarked against)

### 13. AutoGluon (AWS, open source)
- **What:** the measured SOTA of tabular AutoML: AutoML Benchmark 2025 shows it statistically dominating all other AutoML systems at every time budget; its 5-minute preset beats competitors' 1-hour budgets; v1.4's "extreme" preset (TabPFNv2/TabICL/Mitra foundation models) set a further margin on <30k-sample datasets; zero failures at ≥5-min budgets [A23].
- **Loop mapping:** Execute+Analyze compressed into one fitted ensemble; no Diagnose (no deficiency reasoning), no Ground (its priors are baked into presets), no Document, no audit trail. Search space is fixed: models/ensembles/HPO — it will never propose a new feature from a paper, question the eval protocol, or detect leakage in your split design.
- **Strengths:** free, fast, genuinely strong baseline; the honest floor Ascent must beat (the PoC's fraud-benchmark win over AutoGluon/H2O is the founder's claim to verify in demos).
- **Gap left:** literature-grounded feature/architecture invention; leakage-proof protocol construction; evidence a compliance officer could read.

### 14. H2O.ai (Driverless AI)
- **What:** enterprise AutoML pioneer. Trajectory: last priced at $1.7B (Nov 2021) [A24]; revenue $75M (2024) [A24]; headcount down 389 (2023) → ~330 (2026) [A24]; pivoted hard toward sovereign/GenAI (FedRAMP "In Process," May 2025) [A25]. Driverless AI contracts are custom: reported ~$12k/yr base to $60–120k pilots to $250–550k mid-market to $1M+ enterprise [A26].
- **Loop mapping:** same as AutoGluon plus feature-engineering search ("Kaggle grandmaster recipes"); still no Ground/Document/audit-gates.
- **Gap left:** stalled valuation and GenAI pivot signal the pure-AutoML category stopped compounding; six-figure contracts leave individual practitioners entirely unserved.

### 15. DataRobot / SageMaker Autopilot+Canvas / Vertex AutoML
- **DataRobot:** valuation $6.3B (Jul 2021) → **~$500M (early 2025)**; layoffs 26% (2023) + 7% (2024); ARR $285M (2024), 850+ enterprise customers; contracts $150k–$500k+/yr; pivoting to agents with NVIDIA/SAP [A27]. The category leader's 92% valuation haircut is the single loudest post-mortem signal in this space.
- **SageMaker Canvas/Autopilot:** pay-as-you-go no-code AutoML; Canvas workspace $1.90/hr, tabular model builds ~$2–$7.30 typical [A28]. Solid commodity floor, zero scientific method.
- **Vertex AutoML:** Google already shut down AutoML Text (June 2025) and AutoML Video (July 2025) as Gemini absorbed those workloads [A29] — evidence hyperscalers treat AutoML as a feature to be cannibalized, not a product line.
- **Gap left (whole tier):** mechanically identical everywhere — they optimize within a fixed pipeline space against a metric *the user must already have correctly defined*, with no leakage protection at protocol level, no literature input, no reasoning artifact. When the model is done, the user still cannot answer "why should I trust this?"

---

## Tier 5 — MLOps / experiment tracking (records experiments; designs none)

### 16. Weights & Biases — acquired by CoreWeave: announced at $1.4B (Mar 2025; The Information reported $1.7B cost), completed 2025-05-05 [A30]. Pricing was $50–150/user/mo tiered by tracked hours, enterprise ~$300+/unit/mo [A31]. Post-acquisition it is a GPU-cloud's attach product.
### 17. MLflow — Linux Foundation, 30M+ monthly downloads, 5k+ orgs; MLflow 3.0 (2025) pivoted the roadmap to GenAI/agent observability [A32].
### 18. Neptune.ai — **acquired by OpenAI late 2025; standalone SaaS shuts down March 2026** [A33]. ClearML persists at $15/user/mo Pro [A34].
- **Loop mapping (whole tier):** Document + Checkpoint only — and only as passive storage. Humans do Diagnose/Ground/Hypothesize/Execute/Analyze.
- **Why tracking ≠ autonomous experimentation:** a tracker records what a human chose to run; it enforces nothing (no gates), proposes nothing, and its logs are not evidence of rigor (a leaky split logs as cleanly as a sound one). The consolidation wave (W&B→CoreWeave, Neptune→OpenAI) says standalone tracking could not sustain independent companies even at strong adoption — the value migrated to whoever owns compute or models [A30][A33].
- **Gap left:** the audit-grade, self-writing experimental record — Ascent's Document/Checkpoint outputs are what these tools would look like if the system, not the human, guaranteed their integrity.

## Tier 6 — General coding agents pointed at ML

### 19. Devin (Cognition) / Cursor (Anysphere)
- **Traction:** Cognition raised $1B at **$26B** (May 2026), revenue $492M (13× YoY), Goldman Sachs and U.S.-military customers [A35]. Anysphere: $2.3B Series D at $29.3B (Nov 2025); 1M+ users, 360k paying, >$500M ARR (Jan 2026), with later reports of ~$2B ARR [A36].
- **Loop mapping:** Execute (superbly) + fragments of Analyze. No experimental contract at all: no fixed-budget experiments, no champion/challenger bookkeeping, no leakage-aware evaluation, no literature citations, no monotonic guarantee. A Devin session *can* run an ML experiment; nothing makes 265 consecutive sessions a coherent, audited research campaign.
- **Why they matter anyway:** they are the capability layer Ascent rides (the "why now"), the talent magnet, and the most likely future platform competitors if they ever add an experiment-contract layer. Watch for either shipping "research mode."

## Tier 7 — The manual baseline ("do nothing")

### 20. Grad student / solo quant grinding by hand
- **Costs, measured:** US ML engineers average ~$212k total comp (Built In) with levels.fyi median $279k [A37]; hedge-fund quant researchers typically ~$500k total comp (junior $150–280k, senior $500k–$1M+) [A38]. Data professionals still spend ~38–45% of time on data preparation alone (Anaconda 2020–2022 surveys) [A39]; 64% of organizations took ≥1 month to deploy a single model and 75% of data-scientist time went to deploying/connecting/scaling/managing models manually (Algorithmia enterprise surveys) [A40].
- **Loop mapping:** the human runs all 7 steps — at ~1–3 experiments/day, with self-deception (leakage, cherry-picking, Goodharting) policed only by discipline, and documentation written last if ever.
- **Strengths:** full trust in own work; judgment; accountability.
- **Gap left:** throughput (Ascent's PoC ran 265+ experiments on one problem [BRIEF]) and *enforced* rigor — a tired human skips the audit gate; a constitution cannot.

---

## Post-mortems & critiques (required section)

### Dead, stalled, or absorbed
1. **SigOpt** (hyperparameter-optimization API, raised from a16z/DCVC) — acquired by Intel Oct 2020; Intel wound the product down, ended support/updates, and abandoned the open-source server (no maintenance, releases, or fixes) [A41]. *Lesson:* a point-solution on one loop step (Hypothesize-over-hyperparameters) has no standalone economics; acquirer strategy shifts kill it.
2. **Determined AI** (open training platform) — acquired by HPE June 2021 [A42]; the OSS repo sits at 3.2k stars/373 forks, alive but subsumed into HPE's MLDE/Cray branding — growth flatlined post-acquisition [A43]. *Lesson:* infrastructure-for-experiments without the experiment-designing brain becomes a hardware vendor's attach software.
3. **Neptune.ai** — competent, priced-right tracker ($35–600/mo tiers); acquired by OpenAI late 2025, SaaS killed March 2026 [A33]. *Lesson:* even successful tracking businesses were features, not companies.
4. **DataRobot** (down-round, not dead) — $6.3B → ~$500M with two layoff rounds [A27]. *Lesson:* "AutoML as enterprise platform" commoditized; basic AutoML became a baseline feature of clouds and OSS [A27].
5. **SparkBeyond** (automated hypothesis/feature discovery — the closest 2015-era ancestor of "the machine proposes ideas") — still alive but at reported $7.2M ARR against a $21.5M latest valuation after years of enterprise pushing [A44]. *Lesson:* selling machine-generated hypotheses to enterprises without an execution+verification loop under-monetizes; insight without audited execution is a consulting deliverable.
6. **Pecan AI** (pivot, not death) — $116M raised for AutoML-for-analysts; pivoted to GenAI co-pilot and vertical forecasting products [A45]. *Lesson:* horizontal no-code AutoML for non-experts kept re-pivoting to survive; the buyer who can't judge a model also can't champion the purchase.

**Cross-cutting failure pattern:** every casualty either (a) automated one step of the scientific loop and sold it as a product (SigOpt, Neptune, trackers), or (b) automated the *search* but not the *trust* (AutoML platforms — buyers stalled at "why should I believe/deploy this?"). Nobody died from automating too much rigor. The unclaimed position — automate the whole loop *and* make the output forensically trustworthy — is exactly the corner Ascent targets.

### Critiques of automated research quality
7. **Beel et al., "Evaluating Sakana's AI Scientist" (arXiv:2502.14297)** — 42% of experiments failed on coding errors; novelty assessment misclassified established ideas (e.g., micro-batched SGD) as novel; claimed autonomy actually depended on human templates; manuscripts and citations sub-par; still judged a leap forward on speed/cost [A16]. *Read for Ascent:* citation-rigor and reasoning-completeness gates address the two most-documented failure classes.
8. **CMU, "The More You Automate, the Less You See" (arXiv:2509.08713, NeurIPS 2025)** — controlled experiments on two prominent open-source AI-scientist systems found four recurring, easily-overlooked failure modes: **inappropriate benchmark selection, data leakage, metric misuse, post-hoc selection bias** [A46]. *Read for Ascent:* this is a third-party enumeration of precisely the four things Ascent's mechanism was designed to prevent (super-folds → leakage; fingerprinted composite metric → metric misuse & post-hoc selection; audit gates → the rest). Cite it in every skeptic conversation.
9. **GEAR's negative result** — greedy single-path autoresearch converges to a local optimum under sustained compute [A4]; grounding and structured diagnosis are candidate escapes.
10. **MLE-bench's ceiling** — best full-benchmark agent medal rate is still ~40% [A10]: unsupervised agent correctness is unsolved, so any autonomous system's outputs need programmatic verification — the audit layer is not optional.

---

## Sources

- [A1] karpathy/autoresearch (GitHub repo) — https://github.com/karpathy/autoresearch — 2026-08-27 — current stars (94.8k), forks (13.4k), issues, license, scope (single-GPU nanochat, val_bpb, 5-min budget).
- [A2] Notable fork submissions, Discussion #225 — https://github.com/karpathy/autoresearch/discussions/225 — 2026-08-27 — 16 curated forks; composition (hardware ports vs. domain extensions); dated 2026-03-12.
- [A3] Karpathy AutoResearch explained — https://www.paperclipped.de/en/blog/karpathy-autoresearch-autonomous-research/ — 2026-08-27 — release date 2026-03-06; 8k stars/48h; 48k stars & 6.7k forks at two weeks.
- [A4] GEAR: Genetic AutoResearch for Agentic Code Evolution — https://arxiv.org/abs/2605.13874 — 2026-08-27 — population search beats AutoResearch baseline; single-path local-optimum finding; May 2026.
- [A5] Evo AI Labs, Multi-Agent AutoResearch (Medium, Apr 2026) — https://evoailabs.medium.com/multi-agent-autoresearch-automating-ml-optimization-with-open-source-ai-c76d1dabfc0f — 2026-08-27 — tree-search over hill-climb; open-source; page 403'd on direct fetch, details from search summary only.
- [A6] AIDE: AI-Driven Exploration in the Space of Code — https://arxiv.org/abs/2502.13138 — 2026-08-27 — solution-tree mechanism; MLE-bench/RE-Bench claims.
- [A7] Weco seed announcement — https://www.weco.ai/blog/seed-announcement — 2026-08-27 — $8M seed; commercialization of AIDE; public beta.
- [A8] MLE-bench (OpenAI) — https://arxiv.org/abs/2410.07095 — 2026-08-27 — 75 Kaggle competitions; o1-preview+AIDE 16.9% medal rate.
- [A9] MLE-STAR (Google Research blog + arXiv) — https://research.google/blog/mle-star-a-state-of-the-art-machine-learning-engineering-agents/ and https://arxiv.org/abs/2506.15692 — 2026-08-27 — web-search-grounded initial solution; ablation-guided refinement; 64% medals on MLE-bench Lite; NeurIPS 2025.
- [A10] Operand Quant — https://arxiv.org/abs/2510.11694 — 2026-08-27 — 39.56%±5.65% full MLE-bench medal rate; per-difficulty breakdown.
- [A11] EurekAgent — https://arxiv.org/pdf/2606.13662 — 2026-08-27 — 85.71% medal rate on curated 7-competition subset.
- [A12] Sakana AI Scientist cost — https://analyticsindiamag.com/ai-news-updates/sakana-ai-releases-ai-scientist-which-writes-scientific-papers-for-15/ and https://www.eesel.ai/blog/sakana-ai-pricing — 2026-08-27 — ~$15/paper v1; ~$20–25/paper v2.
- [A13] Sakana, first peer-reviewed AI paper — https://sakana.ai/ai-scientist-first-publication/ — 2026-08-27 — ICLR 2025 ICBINB workshop acceptance, score 6.33; v2 tree search, template removal.
- [A14] AI Scientist in Nature — https://sakana.ai/ai-scientist-nature/ and https://www.nature.com/articles/d41586-026-00899-w — 2026-08-27 — Nature publication, March 2026.
- [A15] Sakana Series B — https://techcrunch.com/2025/11/17/sakana-ai-raises-135m-series-b-at-a-2-65b-valuation-to-continue-building-ai-models-for-japan — 2026-08-27 — $135M at $2.65B post (2025-11-17); investors; ~$379M total; Japan-model focus.
- [A16] Beel et al., Evaluating Sakana's AI Scientist — https://arxiv.org/abs/2502.14297 — 2026-08-27 — 42% experiment failure; novelty misclassification; template dependence.
- [A17] Agent Laboratory — https://arxiv.org/abs/2501.04227 — 2026-08-27 — $2.33/paper, 19.4 min, 84% cost reduction; mle-solver MLE-bench-subset results; role pipeline; co-pilot mode.
- [A18] AgentRxiv — https://arxiv.org/abs/2503.18102 — 2026-08-27 — MATH-500 70.2%→79.8%; 11.4%/13.7% relative gains.
- [A19] Google AI co-scientist — https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/ and https://www.nature.com/articles/s41586-026-10644-y — 2026-08-27 — Gemini multi-agent tournament mechanism; weeks→days; 2-day recapitulation of decade-long finding.
- [A20] FutureHouse / Edison Scientific — https://www.futurehouse.org/ and https://www.futurehouse.org/research/demonstrating-end-to-end-scientific-discovery-with-robin-a-multi-agent-system — 2026-08-27 — nonprofit, Schmidt-backed; agent roster; Robin/ripasudil; Edison $70M seed (2025).
- [A21] Intology Zochi — https://www.intology.ai/blog/zochi-acl — 2026-08-27 — ACL 2025 main-track acceptance; ICLR 2025 workshops.
- [A22] Autoscience Carl — https://www.rdworldonline.com/startup-autoscience-says-its-ai-agent-carl-just-wrote-the-first-academically-peer-reviewed-paper/ — 2026-08-27 — ICLR 2025 workshop acceptances.
- [A23] AutoGluon what's-new / AutoML Benchmark 2025 — https://auto.gluon.ai/stable/whats_new/index.html — 2026-08-27 — benchmark dominance claims; v1.4 extreme preset; stability stats.
- [A24] H2O.ai profile — https://getlatka.com/companies/h2o.ai and https://pitchbook.com/profiles/company/55882-36 — 2026-08-27 — $1.7B (Nov 2021) valuation; $75M 2024 revenue; headcount 389→~330.
- [A25] H2O FedRAMP — (via search summary of company news, May 2025) — 2026-08-27 — FedRAMP "In Process" high-impact designation.
- [A26] H2O Driverless AI pricing reports — https://www.umu.com/ask/t11122301573854319860 and https://www.g2.com/products/h2o-driverless-ai/pricing — 2026-08-27 — custom contracts ~$12k to $1M+/yr; typical bands.
- [A27] DataRobot valuation/ARR — https://sacra.com/c/datarobot/valuation/ and https://sacra.com/c/datarobot/ — 2026-08-27 — $6.3B (2021) → ~$500M (early 2025); $285M ARR 2024; 26%/7% layoffs; $150k–$500k+ contracts; commoditization read.
- [A28] SageMaker Canvas pricing — https://aws.amazon.com/sagemaker/ai/canvas/pricing/ — 2026-08-27 — $1.90/hr workspace; ~$2–$7.30 example tabular builds.
- [A29] Vertex AI deprecations — https://cloud.google.com/vertex-ai/docs/release-notes (deprecation entries) — 2026-08-27 — AutoML Text shutdown 2025-06-15; AutoML Video shutdown 2025-07-31.
- [A30] CoreWeave completes W&B acquisition — https://investors.coreweave.com/news/news-details/2025/CoreWeave-Completes-Acquisition-of-Weights--Biases/default.aspx and https://www.coindesk.com/business/2025/03/05/nvidia-backed-coreweave-to-acquire-ai-developer-platform-ahead-of-ipo — 2026-08-27 — $1.4B announced / $1.7B reported; completed 2025-05-05.
- [A31] W&B pricing — https://wandb.ai/site/pricing/ and https://www.vendr.com/marketplace/weights-biases — 2026-08-27 — $50/$100/$150 per-user tiers; enterprise ~$300–315/unit/mo reports.
- [A32] MLflow adoption — https://www.databricks.com/product/managed-mlflow and https://www.databricks.com/blog/mlflow-30-unified-ai-experimentation-observability-and-governance — 2026-08-27 — 30M+ monthly downloads; 5k+ orgs; 3.0 GenAI pivot.
- [A33] Neptune shutdown — https://mlopslab.org/neptune-ai-alternatives-urgent-shutdown-march-2026/ — 2026-08-27 — OpenAI acquisition late 2025; SaaS shutdown March 2026; historical pricing.
- [A34] ClearML pricing — https://www.zenml.io/blog/neptune-ai-alternatives — 2026-08-27 — Pro $15/user/mo.
- [A35] Cognition raise — https://thenextweb.com/news/cognition-just-raised-1-billion-at-a-26-billion-valuation-and-90-of-its-own-code-is-written-by-its-ai — 2026-08-27 — $1B at $26B (2026-05-27); $492M revenue, 13×; customers.
- [A36] Anysphere/Cursor — https://research.contrary.com/company/cognition (context) and TechCrunch/press summaries — 2026-08-27 — $2.3B Series D at $29.3B (Nov 2025); 1M+ users, 360k paying, >$500M ARR (Jan 2026); later ~$2B ARR reports (single-source, treat as range).
- [A37] ML engineer comp — https://builtin.com/salaries/us/machine-learning-engineer and https://www.levels.fyi/t/software-engineer/title/machine-learning-engineer — 2026-08-27 — $212k avg total; $279k levels.fyi median.
- [A38] Quant researcher comp — https://www.quantt.co.uk/resources/quant-researcher-salary-guide and https://medium.com/@tzjy/hedge-fund-compensation-for-quant-researchers-salary-breakdown-by-experience-6cb42579f52b — 2026-08-27 — junior $150–280k; typical ~$500k; senior $500k–$1M+.
- [A39] Anaconda State of Data Science — https://www.anaconda.com/blog/state-of-data-science-2024-key-findings and https://www.bigdatawire.com/2020/07/06/data-prep-still-dominates-data-scientists-time-survey-finds/ — 2026-08-27 — data-prep share 45% (2020), 39% (2021), ~38% (2022).
- [A40] Algorithmia enterprise ML surveys — https://thenewstack.io/add-it-up-how-long-does-a-machine-learning-deployment-take/ and https://venturebeat.com/ai/why-businesses-take-a-month-or-more-to-deploy-ml-models-and-what-you-can-do — 2026-08-27 — 40% >1 month; 64% ≥1 month; 75% of DS time on deploy/manage (2018 survey).
- [A41] SigOpt wind-down — https://github.com/sigopt/sigopt-server and https://venturebeat.com/ai/intel-acquires-ai-software-optimization-platform-sigopt — 2026-08-27 — Intel acquisition Oct 2020; support/updates ended; OSS unmaintained.
- [A42] HPE acquires Determined AI — https://venturebeat.com/business/hpe-acquires-determined-ai-to-bolster-its-high-performance-compute-business — 2026-08-27 — June 2021 acquisition.
- [A43] determined-ai/determined repo — https://github.com/determined-ai/determined — 2026-08-27 — 3.2k stars/373 forks; active, not archived; HPE MLDE branding.
- [A44] SparkBeyond — https://getlatka.com/companies/sparkbeyond.com — 2026-08-27 — reported $7.2M ARR, $21.5M valuation (third-party estimate; treat as directional).
- [A45] Pecan AI — https://www.pecan.ai/ and https://venturebeat.com/ai/pecan-ai-debuts-predictive-generative-ai-to-democratize-ai-predictions-for-business — 2026-08-27 — $116M raised; GenAI co-pilot / DemandForecast.ai pivot.
- [A46] CMU, The More You Automate, the Less You See — https://arxiv.org/abs/2509.08713 — 2026-08-27 — four failure modes (benchmark selection, data leakage, metric misuse, post-hoc selection bias); NeurIPS 2025; two open-source systems audited.
