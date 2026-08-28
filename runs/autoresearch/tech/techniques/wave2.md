# Techniques — Wave 2: Advanced & Theory-Grounded Techniques (50)

The layer above standard practice: sequential error control, Goodhart theory, overfitting quantification, robust evaluation, and optimal experiment selection. Seven clusters, 50 techniques. Anchors as in wave1.

## Cluster A — Sequential & adaptive error control (8)

1. **W2.01 Online FDR control (alpha-investing)** — a spendable error-budget "wealth" debited per test and partially replenished on discoveries; rigor for *never-ending* test streams — exactly a research campaign's shape. Foster & Stine 2008; Javanmard & Montanari 2018 (classical); structural version [D32]
2. **W2.02 Machine-checked testing budgets (research monad)** — make running a test without debiting the FDR budget a *type error*; rigor enforced by construction, not policy. Sargsyan [D32]
3. **W2.03 Alpha-spending functions** — pre-committed schedule for spending total α across interim analyses. Lan & DeMets 1983 (classical)
4. **W2.04 Sequential probability ratio test (SPRT)** — accept/reject/continue with optimal expected sample size; the right primitive for "stop this experiment early, honestly." Wald 1945 (classical)
5. **W2.05 Group-sequential designs** — pre-planned interim looks with corrected boundaries (O'Brien–Fleming); the clinical-trials answer to peeking. O'Brien & Fleming 1979 (classical)
6. **W2.06 E-values / anytime-valid inference** — evidence measures valid under continuous monitoring and optional stopping — a campaign that checks the dashboard hourly needs exactly this. Grünwald et al. 2024; Ramdas et al. 2023 (recent theory)
7. **W2.07 Hierarchical hypothesis families** — organize tests into families (per-axis, per-backbone) with budget allocation across the hierarchy. Yekutieli 2008 (classical)
8. **W2.08 Trial-count-corrected acceptance thresholds** — the keep/discard bar rises with ledger N (deflated-composite analogue); no published system does this — Ascent's claimed first (survey §6; positioning §4.6). [D6][D7]; deep_dives §4 [ROADMAP]

## Cluster B — Goodhart mitigation & proxy integrity (7)

9. **W2.09 Proxy–target divergence monitoring** — track the composite against each raw constituent; sustained divergence = Goodhart onset. [D31]; D08 monitor M3
10. **W2.10 Threshold-aware optimization stopping** — proxy optimization helps then hurts past a threshold; treat late-campaign gains with escalating suspicion. [D31]
11. **W2.11 Constrained multi-metric acceptance** — improvements must not degrade guard metrics (runtime, drawdown, worst fold) beyond bounds; hackability shrinks with each independent constraint. [D30] (unhackable proxies don't exist → add constraints); repo composite `min(val,test) − λ·penalty` form
12. **W2.12 Metric ensembles / worst-case aggregation** — score = min or CVaR over a metric set; optimizing the floor is harder to game than optimizing the mean. [D30] mitigation family; repo `min()` composite
13. **W2.13 Tamper-evident metric freezing** — hash the metric definition; any change is loud and permanent. Repo `CompositeCalculator.fingerprint()`; paper §3.5
14. **W2.14 Satisficing / quantilizer acceptance** — accept "clearly good enough by a robust margin" rather than argmax; argmax is where Goodhart lives. Taylor 2016, quantilizers (theory)
15. **W2.15 Reward-hacking red-team probes** — deliberately search for degenerate solutions that inflate the proxy (e.g., constant predictions gaming a ratio metric); patch the metric before the agent finds them. [D30]; CMU metric-misuse failure mode [A46]

## Cluster C — Overfitting quantification (6)

16. **W2.16 CSCV / PBO estimation** — combinatorially symmetric CV to estimate the probability the selected winner is overfit. [D7]
17. **W2.17 Effective number of trials** — cluster correlated configs to estimate true N for deflation; 265 tweaks of one architecture are not 265 independent bets. [D6] guidance; [D9]
18. **W2.18 Minimum backtest length** — required sample length grows with trials; compute it before believing any champion. Bailey & López de Prado 2014 [D6 lineage]
19. **W2.19 Haircut Sharpe ratios** — shrink reported performance as a function of search intensity. Harvey & Liu, "Backtesting," 2015 (classical)
20. **W2.20 In-sample/out-of-sample decay curves** — plot IS vs OOS performance across the ledger; a negative slope is the [D7] signature of overfit search.
21. **W2.21 Adaptive-data-analysis reuse bounds** — differential-privacy-based limits on how many adaptive queries a holdout supports before it's burned. Dwork et al., Science 2015 (classical theory)

## Cluster D — Distributional & regime robustness (7)

22. **W2.22 Regime-conditional evaluation** — score per market/hospital/season regime; a champion that wins on average and loses in crises is a liability with good PR. Repo `regime_label` on folds; PoC 7-regime folds (founder-reported)
23. **W2.23 Worst-fold reporting** — headline the minimum across folds, not the mean; the composite already does this by construction. Repo composite; [D8] multi-path philosophy
24. **W2.24 Covariate-shift detection** — test train-vs-serve feature distributions (PSI, MMD, classifier two-sample tests); drift voids the evaluation contract. Rabanser et al., NeurIPS 2019 (classical)
25. **W2.25 Stress scenarios / synthetic shocks** — evaluate under constructed tail events (vol spikes, corruption levels); PoC's matched-blur OOD is this pattern. Paper §4.3; WILDS benchmark lineage (Koh et al. 2021)
26. **W2.26 Conformal prediction** — distribution-free coverage guarantees on prediction sets; honest uncertainty without distributional faith. Vovk et al. 2005; Angelopoulos & Bates 2023 (established theory)
27. **W2.27 Distributionally robust optimization (DRO)** — optimize worst case over a distribution ball around the training measure. Duchi & Namkoong 2021 (theory)
28. **W2.28 Uncertainty decomposition** — separate aleatoric from epistemic; only epistemic shrinks with more data — the diagnosis determines the fix. Kendall & Gal, NeurIPS 2017; repo `uncertainty.py`

## Cluster E — Optimal experiment selection (8)

29. **W2.29 Bayesian optimization (SMBO)** — surrogate + acquisition function chooses the next config to maximize expected improvement per unit compute. [D3] SMAC; [D1]
30. **W2.30 Multi-fidelity search (Hyperband/BOHB)** — allocate small budgets broadly, promote survivors; matches the fixed-duration experiment primitive exactly. [D2]
31. **W2.31 Successive halving with theory** — provably near-optimal budget allocation across candidate arms. Karnin et al. 2013; Li et al. (Hyperband) 2018 (classical)
32. **W2.32 Bandit allocation across research axes** — treat axes (features, architecture, HPO, data aug) as arms; allocate experiments by posterior payoff. Thompson 1933 (classical); survey §6 open-question framing
33. **W2.33 Expected information gain (Bayesian experimental design)** — choose the experiment that most reduces posterior uncertainty about what works, not the one most likely to win. Lindley 1956; Chaloner & Verdinelli 1995 (classical)
34. **W2.34 Learning-curve extrapolation** — predict final performance from partial curves; kill doomed runs at 20% budget. Domhan et al., IJCAI 2015 (classical)
35. **W2.35 Meta-learned warm starts** — initialize search from configurations that worked on similar datasets — the principled version of the corpus prior (A11). [D1] auto-sklearn meta-learning
36. **W2.36 Population-based / evolutionary search** — maintain a population to escape the single-path local optima greedy ratchets fall into. GEAR [A4]; PBT, Jaderberg 2017 (classical)

## Cluster F — Contamination & validity probes (6)

37. **W2.37 N-gram / embedding contamination probes** — test whether benchmark rows appear (verbatim or paraphrased) in the underlying LLM's training data. [D37][D38]
38. **W2.38 Private post-cutoff test sets** — the clean test: data created after the model's cutoff, never posted publicly; Ascent's user-owned-data case is structurally this. Survey §6; [D37]
39. **W2.39 Canary strings** — plant unique markers in private data; their appearance in model output proves contamination/exfiltration. Carlini et al. 2019 (classical)
40. **W2.40 Dynamic benchmark rotation** — refresh evaluation items over time so static-benchmark gaming decays. [D38]
41. **W2.41 Memorization vs generalization tests** — perturb inputs semantically-neutrally; memorized answers break, generalized ones survive. [D38] lineage
42. **W2.42 Solution-provenance audits** — when an agent proposes a known-SOTA trick, require the citation trail proving it came from retrieval, not from contaminated recall. Gate 2 + [D37]; deep_dives §8 failure mode (b)

## Cluster G — Causal & diagnostic analysis (8)

43. **W2.43 Permutation feature importance** — shuffle a feature, measure the damage; model-agnostic attribution for the audit report. Breiman 2001 (classical); repo audit §2
44. **W2.44 SHAP local explanations** — per-prediction additive attributions for champion behavior on real cases. Lundberg & Lee, NeurIPS 2017; repo audit §4
45. **W2.45 Per-fold drift Z-scores** — flag features whose importance or distribution shifts across folds; instability predicts deployment failure. Repo audit §5
46. **W2.46 Error attribution tables** — top-K wins/losses per fold with feature context; where Diagnose gets its raw material. Repo audit §9
47. **W2.47 Influence functions** — trace a prediction back to the training points that caused it; the deep audit for suspicious champions. Koh & Liang, ICML 2017 (classical)
48. **W2.48 Counterfactual slice analysis** — re-evaluate on constructed subpopulations (time slices, demographic slices) to find hidden dependence. WILDS lineage (Koh 2021); [A46] benchmark-selection failure mode
49. **W2.49 Temperature scaling / post-hoc calibration** — one-parameter fix for systematic miscalibration before deployment decisions. Guo et al. 2017 (classical)
50. **W2.50 Champion post-mortems on dethroning** — when a champion falls, analyze *why* the old one lost — regression discovery, not just progress bookkeeping. Constitution "learning: axis closed/open" field; repo reasoning schema

**Coverage note:** full at 50. The residual candidates (more DRO variants, more acquisition functions) duplicate mechanisms already listed.
