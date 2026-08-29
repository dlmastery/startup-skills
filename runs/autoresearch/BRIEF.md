# Ascent — Founder Brief

> **What this is** — the founder's single-page source of truth: problem, user spectrum, mechanism, moat, and the one assumption that can kill Ascent.
> **Why it exists** — every other artifact inherits its beachhead (solo quants), its BYOK pricing architecture, and its riskiest assumption from this page. If the claim that practitioners will trust experiments they did not run is wrong here, the rest of the pack argues for a toy — and the two-week test at the bottom is the cheapest way to find out.
> **How to read it** — start at "Riskiest assumption" and "Mechanism & moat"; a skeptic should attack the PoC metrics, founder-reported and not independently verified, including a champion Sharpe of +6.52 selected from 265+ trials.
> **Depends on / feeds** — pairs with [ASSUMPTIONS.md](ASSUMPTIONS.md); feeds [validation/riskiest_assumptions.md](validation/riskiest_assumptions.md), [narrative/vc_memo.md](narrative/vc_memo.md), [financials/pricing.md](financials/pricing.md).

one-line: **Ascent is the autonomous ML research operating system: point it at any dataset and metric, and it hill-climbs monotonically toward state-of-the-art — every experiment literature-grounded, audit-gated, and reproducible — running for days on a commodity laptop.**
domain: AI/ML developer tools · agentic scientific research
stage: working proof of concept (public repo, 6 validated domains, pre-revenue, solo founder)

## Problem

Rigorous ML experimentation is brutally expensive in human time and discipline. A practitioner with a dataset and a metric faces months of grinding iteration: hand-building leakage-free evaluation harnesses, tracking literature, running experiments one at a time, and constantly guarding against self-deception (leakage, Goodharting, cherry-picking). The result: most ML work outside well-funded labs is either slow, sloppy, or both. AutoML tools automate only the final hyperparameter grind; agentic "AI scientist" systems generate one-shot papers on cloud budgets but don't grind a fixed real-world metric upward. The hard parts — leakage-free evaluation protocol, literature-grounded baselines, systematic deficiency diagnosis — stay manual.

## Users & spectrum

- **Edge-low:** domain scientists / citizen researchers (a biologist, a postdoc, an ambitious undergrad) with an interesting dataset, a clear metric, and no ML engineering depth. Today they either don't do the research or do it badly.
- **Beachhead:** individual ML engineers and quant researchers (solo quants, small trading shops, applied-ML teams) who know exactly what a Sharpe ratio or AUROC means, feel the iteration grind daily, and already pay for tools. Payer = user.
- **Edge-high:** elite research labs and quant funds running many parallel research streams who need forensic auditability (fingerprints, reasoning traces, audit gates) as a compliance/trust feature, not a nicety. Payer = research lead / fund CTO.
- One system serves all three: the constitution adapts rigor and vocabulary per domain; there is no "lite" fork.

## Why now

1. Coding agents crossed the long-horizon threshold in the last ~18 months: they can now run multi-day autonomous coding+experiment loops (the enabling capability did not exist in 2024).
2. Karpathy's autoresearch (March 2026; 94.8k stars, 13.4k forks as of Aug 2026, no active maintainer since Mar 26) proved massive demand for the minimal loop — and its own curated fork list proves the community can't get past hardware ports and translations (14 of 16 notable forks; zero add rigor). The rigor layer is the unfilled gap. [research/landscape.md]
3. Cost per unit of *capability* falls ~40–50x/yr (yesterday's frontier becomes cheap mid-tier fast), making a 24/7 steering agent a ~$3–60/day line item — under 10% of one ML engineer's loaded daily cost — provided the loop routes routine steps to mid-tier models. (Frontier list prices themselves are flat-to-rising; see research/capability_table.md.)
4. The AI Scientist family (Sakana et al.) legitimized agentic research but staked out the cloud-scale one-shot-paper niche, leaving the laptop-native monotonic-improvement niche open.

## Wedge & 10-year vision

**Wedge:** the quant/ML practitioner who says "here is my dataset and my metric — make it better while I sleep, and prove you didn't cheat." Ship the open core + constitution; charge for the layers above it.
**Vision:** every empirical field runs on research operating systems. "Ideas, not clusters, are the bottleneck" becomes literal: a lone scientist with a laptop routinely produces publication-grade, fully audited experimental results. Ascent is the OS they run — the git of experimental research.

## Mechanism & moat

**Mechanism:** a binding 52-section constitution enforces a 7-step scientific method (Diagnose → Literature-ground → Hypothesize → Execute → Analyze → Document → Checkpoint) on every experiment; three programmatic audit gates (data integrity, citation rigor, reasoning completeness) run before any commit; a SHA-256-fingerprinted composite metric makes keep-or-discard decisions tamper-evident; purge/embargo super-folds make leakage structurally impossible; aggressive checkpointing makes consumer laptops viable research hardware. Only strict improvements survive → monotonic, literature-grounded progress instead of blind search.
**Moat candidates:** (1) the constitution itself — encoded research judgment refined across domains, hard to reverse-engineer from outputs; (2) a compounding cross-domain corpus of experiment logs + reasoning traces + what-worked-where (a "research prior" no fork accumulates); (3) trust/auditability brand in high-stakes verticals (finance, healthcare); (4) community flywheel of domain forks and SOTA catalogs.

## Competition & failed alternatives (founder's view, to be verified in research/)

Karpathy autoresearch (minimal, no rigor, LLM-training-only); its 11k forks (shallow extensions); Sakana AI Scientist v1/v2, MLR-Copilot, Agent Laboratory (cloud-scale, one-shot paper generation, template-dependent, reproducibility secondary); classical AutoML — AutoGluon, H2O, DataRobot, SageMaker (hyperparameter grind only, no literature grounding, no scientific method; PoC beat AutoGluon/H2O on fraud benchmark); MLOps platforms — W&B, MLflow (track experiments humans design; don't design experiments); "do nothing" — the grad student grinding manually.

## Business model (assumed, see ASSUMPTIONS.md)

Open-source core (the generalized loop + constitution) for distribution and trust; paid **Pro** (hosted dashboards, steering copilot, SOTA catalog subscription), **Team** (parallel research streams, shared winner archives), **Enterprise/Compliance** (audit-trail retention, on-prem, regulated-industry attestations). Anchor: replaces a fraction of an ML engineer's iteration time (
$150k+/yr fully loaded) and rents research capability to those who could never hire it.

## Founder edge

The founder built the entire PoC solo through pure natural-language steering — zero hand-written Python — and validated it across six disparate domains with full forensic logs (champion test Sharpe +6.52 on EUR/USD after 265+ experiments; beat open-source AutoML on fraud detection). The steering_log.md is itself the demo: proof that technical-lead-level humans can run research factories. Asymmetric insight: the bottleneck is *rigor engineering*, not agent capability — and the constitution is the product.

## Riskiest assumption

**Practitioners will trust — and pay for — experiments they didn't run themselves.** If audit gates + fingerprints + reasoning traces don't convert skeptics into users who act on the results (deploy the model, trade the signal, publish the finding), the product is a toy. Two-week test: put the audited EUR/USD and Higgs runs in front of 15 quant/ML practitioners; count how many will (a) reproduce it with one command, (b) say what evidence would make them deploy it.

## Vocabulary

- **Constitution** — the binding 52-section protocol file governing agent behavior (the product's core IP).
- **Experiment** — one minimal change, fixed-duration run, evaluated on the composite metric.
- **Champion** — current best configuration; only strict improvements dethrone it.
- **Composite metric** — task-tailored, SHA-256-fingerprinted scalar anchoring keep-or-discard.
- **Super-folds** — leakage-proof evaluation splits with purge/embargo buffers.
- **7-step loop** — Diagnose, Literature-ground, Hypothesize, Execute, Analyze, Document, Checkpoint.
- **Audit gates** — the three programmatic pre-commit checks (data integrity, citation rigor, reasoning completeness).
- **Reasoning blob** — the complete cited rationale written for every experiment.
- **Steering** — high-level natural-language direction from the human technical lead ("pivot", "self-reflect on stall").
- **Winner archive** — fingerprinted bundle (config, model, reasoning, logs) for every kept champion.
- **Core loop (product):** Sense state → Diagnose weakness → Ground in literature → Change one thing → Measure → Keep-or-discard → Remember.
- **Unit of value:** one audited, kept improvement to the user's metric. **Session:** an autonomous run (hours–days). **Outcome metric:** champion metric delta per dollar/day, at zero leakage.
