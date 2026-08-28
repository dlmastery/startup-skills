# Techniques — Wave 1: Established Research-Methodology Techniques (50)

The settled toolkit of rigorous empirical ML and quantitative research. Per technique: **name — mechanism — evidence anchor.** IDs (W1.xx) are referenced by `decision_tree.md` and `technique_feature_matrix.md`. Six clusters, 50 techniques.

## Cluster A — Leakage-proof evaluation protocols (10)

1. **W1.01 Purged cross-validation** — drop training observations whose labels overlap the test window, killing label-overlap leakage. [D8]
2. **W1.02 Embargo buffers** — additionally excise a post-test-window buffer to stop serial-correlation leakage. [D8]
3. **W1.03 Combinatorial purged CV (CPCV)** — many purged train/test paths yield a *distribution* of out-of-sample estimates, not a point. [D8]
4. **W1.04 Walk-forward evaluation** — train strictly on the past, test on the strictly subsequent block, rolled forward. [D8]; repo `WalkForwardSplit`
5. **W1.05 Super-folds** — train = all data − union(val + test + buffers) across pre-specified windows; one comparable assignment per campaign. Repo `SuperFoldSplit`; paper §3.5
6. **W1.06 Group-disjoint splits** — entity-level (hospital/slide/user) disjointness so no group straddles train and test. [D5] leakage type; repo `GroupKFoldSplit`; PoC PathMNIST run (founder-reported)
7. **W1.07 Frozen benchmark splits** — evaluate on the field's fixed split (e.g., Baldi 2014 Higgs) so numbers are comparable across papers. Paper §4.2
8. **W1.08 Nested cross-validation** — hyperparameter selection inside an inner loop so the outer estimate stays selection-free. Cawley & Talbot, JMLR 2010 (classical)
9. **W1.09 Train-only preprocessing fit** — scalers/imputers/encoders fit on train folds only; the textbook leakage type most often violated. [D5] taxonomy; repo runner `_standard_scale`
10. **W1.10 Programmatic overlap assertion** — machine-checked train∩val∩test = ∅ before any run; discipline as code, not habit. Repo `validate_no_overlap()`

## Cluster B — Multiple-testing & selection control (8)

11. **W1.11 Deflated Sharpe Ratio (DSR)** — correct a champion Sharpe for the number of trials run and non-normal returns; the honest number after search. [D6]
12. **W1.12 Probability of Backtest Overfitting (PBO)** — estimate the chance the in-sample winner underperforms out-of-sample; high-trial regimes are guilty until measured. [D7]
13. **W1.13 Trial ledger (count everything)** — log every trial including discards; N is the denominator every correction needs. [D6][D7]; repo `experiment_log.jsonl`
14. **W1.14 Bonferroni / Šidák correction** — family-wise error control by dividing α across comparisons; blunt but unarguable. Dunn 1961 (classical)
15. **W1.15 Benjamini–Hochberg FDR control** — control the expected fraction of false discoveries across many tests; the standard for screening many hypotheses. Benjamini & Hochberg, JRSS-B 1995 (classical)
16. **W1.16 Pre-registration / model info sheets** — declare hypothesis, metric, and protocol before running; kills the garden of forking paths at the root. [D9]; [D5] (proposed remedy)
17. **W1.17 Lockbox holdout** — a final test set touched once, at the end, by rule; the last defense against adaptive overfitting. [D5][D9]
18. **W1.18 White's Reality Check / SPA test** — bootstrap test of whether the best of many strategies beats a benchmark by more than luck. White, Econometrica 2000; Hansen 2005 (classical)

## Cluster C — Experiment-design discipline (8)

19. **W1.19 One-change-per-experiment** — vary exactly one factor per run so attribution is trivial by construction. Constitution §15–22; paper §3.3
20. **W1.20 Quantitative prediction before execution** — state the expected metric delta pre-run; turns each experiment into a falsifiable bet. Constitution §23–29; repo reasoning floor "prediction ≥25 words"
21. **W1.21 Fixed-duration/fixed-budget experiments** — equal compute per trial makes results comparable and search honest. [A1] (Karpathy's core primitive); [D22]
22. **W1.22 Baselines-first protocol** — establish the strong simple baseline (logistic regression, GBM, buy-and-hold) before anything exotic. [D5] civil-war case study (ML failed to beat logistic regression after leakage fix)
23. **W1.23 Ablation studies** — remove one component at a time to attribute gains; the difference between a system claim and a story. Paper C.2; standard practice per [D24] methodology
24. **W1.24 Negative controls** — run with shuffled labels / permuted features; any "signal" found is the leakage detector firing. Kapoor–Narayanan remedy family [D5]
25. **W1.25 Early stopping with patience** — stop training on validation plateau; prevents test-set peeking disguised as tuning. Prechelt, "Early Stopping — But When?" 1998 (classical); repo runner config
26. **W1.26 Regression testing of the harness** — the evaluation harness is immutable and tested; experiments change the model, never the judge. [A1] (immutable harness); constitution §12

## Cluster D — Statistical rigor of results (8)

27. **W1.27 Multi-seed variance analysis** — re-run at K seeds; a gain within seed noise is not a gain. [D11][D12]
28. **W1.28 Bootstrap confidence intervals** — resample to attach uncertainty to every headline metric. Efron 1979 (classical); [D11] (bootstrap variance largest component)
29. **W1.29 Permutation significance tests** — nonparametric null for metric deltas when distributional assumptions fail. Fisher 1935 (classical)
30. **W1.30 Probabilistic Sharpe Ratio (PSR)** — probability the true Sharpe exceeds a threshold given skew/kurtosis and sample length. Bailey & López de Prado 2012 [D6 lineage]; PoC QQQ PSR 0.997 (founder-reported)
31. **W1.31 Calibration analysis** — reliability curves + ECE; a classifier whose 0.9 means 90% is evidence, one whose 0.9 means 60% is a hazard. Guo et al., ICML 2017 (classical); repo audit report §6
32. **W1.32 Paired model-comparison tests** — DeLong (AUC), McNemar (paired errors), Diebold–Mariano (forecasts): compare models on the same folds, not across headlines. DeLong 1988; McNemar 1947 (classical)
33. **W1.33 Variance decomposition of benchmarks** — separate data-sampling, init, and HPO variance before claiming ranking changes. [D11]
34. **W1.34 Effect size + practical significance reporting** — report the magnitude that matters to the deployer, not just p < 0.05. Cohen 1988 (classical); quality-bar §2

## Cluster E — Data integrity & provenance (7)

35. **W1.35 Dataset fingerprinting** — hash data + split assignment; evaluation claims bind to exact bytes. Paper C.3; repo composite fingerprint pattern
36. **W1.36 Leakage-taxonomy audit** — walk all eight Kapoor–Narayanan leakage types as a checklist per dataset. [D5]
37. **W1.37 Feature-legitimacy review** — would this feature exist at prediction time in deployment? The semantic leakage split geometry can't catch. [D5] type 5
38. **W1.38 Duplicate / near-duplicate detection** — dedup across train/test; duplicates are leakage in disguise. [D5]; contamination lineage [D37]
39. **W1.39 Timestamp sanity audits** — verify no feature is computed from future information (look-ahead bias). [D8] (the founding sin of backtesting)
40. **W1.40 Dataset versioning** — immutable versioned data artifacts so every result names its exact input. Standard MLOps practice [A32]; repo config-logged dataset paths
41. **W1.41 Imbalance-aware evaluation** — PR-AUC / cost curves under class imbalance where accuracy and ROC mislead. Davis & Goadrich, ICML 2006 (classical); PoC fraud run context

## Cluster F — Documentation & reproducibility (9)

42. **W1.42 Complete config logging** — every run's full config, seed, and environment appended to an append-only log. Repo `experiment_log.jsonl`; NeurIPS checklist (classical)
43. **W1.43 Git commit per kept result** — champion lineage as version-control history; diffable, ordered, tamper-evident. [A1][D22]; repo ledger `git_commit` field
44. **W1.44 Reasoning records per experiment** — diagnosis, citations, hypothesis, verdict, learning written *at experiment time*, not reconstructed later. Repo `ReasoningEntry`; paper App. A
45. **W1.45 Environment pinning** — exact library/hardware versions recorded; "works on my machine" is not a result. Paper D.1 hardware log; standard practice
46. **W1.46 Self-contained reproduction bundles** — config + code snapshot + weights + one-command rerun script per champion. Repo `winner_archive.py`; paper D.2
47. **W1.47 Structured audit reports** — fixed-section explainability/limitations report per champion (14 sections in the PoC). Repo `AUDIT_SECTIONS`
48. **W1.48 Reproducibility checklists** — NeurIPS/ICLR-style artifact checklists enforced as release gates. Paper App. D; Pineau et al., JMLR 2021 (classical)
49. **W1.49 Research journal / decision log** — the campaign-level narrative of axes tried, closed, and open; institutional memory as artifact. Repo `research_journal.md` convention; checkpoint "exhausted axes"
50. **W1.50 Champion/challenger bookkeeping** — one current champion, strict-improvement dethroning, full provenance per reign. [D22]; repo `best_config.json` single-writer path

**Coverage note:** this wave is genuinely full — the 50 above are the load-bearing standards of the leakage, multiple-testing, and reproducibility literatures; further additions would be variants (e.g., more paired-test flavors), not new mechanisms.
