# Not Vaporware — What Exists Today, What It Costs, What's This Quarter vs Research Risk

One page. Every claim is checkable against the public repo or carries the A6 framing (founder-reported, reproducible from repo, not independently verified).

## 1. The repo is real code, not a deck

`generalized_ml_autoresearch/` — working PoC, ~4,000 LOC of core Python (counted 2026-08-28):

| Module | LOC | What it does |
|---|---|---|
| `core/runner.py` | 510 | One experiment per invocation; refuses ungated launches; writes the ledger |
| `core/reasoning.py` | 451 | Citation-rigor + reasoning-completeness validators (Gates 2–3) |
| `core/winner_archive.py` | 483 | Self-contained champion bundles + 14-section audit report + Colab notebook |
| `core/evaluation/splits.py` | 349 | 7 split protocols incl. purge/embargo `SuperFoldSplit` + overlap assertion (Gate 1) |
| `core/evaluation/` (metrics, composite, uncertainty) | 438 | Metric registry; SHA-256-fingerprinted composite; MC-dropout/ensemble/quantile uncertainty |
| `core/backbones/` (7 files) | 1,398 | Registry + MLP/LSTM/tabular-transformer/XGB/LGBM/CatBoost + foundation-model stub |
| `core/checkpoint.py` | 188 | Crash-recovery checkpoint: champion state + exact next command, every experiment + every 5 min |
| `dashboard/dashboard.html` | 171 | Local read-only dashboard over the JSONL ledger + reasoning annotations |

Plus three runnable examples (Titanic, house prices, Olivetti — the Olivetti example ships a 150+-experiment `autoresearch_results/` tree with per-experiment prediction logs) and the 12-step setup skill.

## 2. The runs are real (founder-reported framing, binding)

Six domains, one recipe, full ledgers and reasoning traces in the forks: EUR/USD (265+ experiments, champion test Sharpe +6.52 — **the raw, pre-deflation number; a champion of 265 trials is exactly what the DSR discounts [D6][D7], and self-deflating it publicly is the plan, not the embarrassment**), QQQ (216+ experiments, composite Sharpe +1.32, PSR 0.997), Higgs (AUROC ≈0.8675+), PathMNIST OOD (AUC 0.997), Olivetti (conditional ARI 0.874), fraud (AUC 0.6097 vs AutoGluon 0.522 / H2O 0.518). All founder-reported, single-seed in most domains, public datasets with contamination caveats [D37]. Third-party validation of the *spec* (not the results): CMU's NeurIPS 2025 audit of open-source AI-scientist systems found exactly four recurring failure modes — benchmark mis-selection, data leakage, metric misuse, post-hoc selection bias [A46] — the four things the super-folds, fingerprinted composite, and gates were built to prevent. The independent literature ordered the product spec; the PoC built it.

## 3. The ablations are real experiments (founder-reported, single-seed)

Paper Table C.2, EUR/USD, same seed and folds: removing the **citation-rigor gate** spiked the invalid-experiment rate by 42% and produced 3 leakage incidents (vs 0 with full protocol); removing the **7-step method** gave faster early gains but plateaued 18% lower; **low-level human steering** underperformed high-level steering; **no checkpointing** lost multiple runs to BSODs. The rigor layer measurably pays for its overhead — on this one task, one seed; replication is roadmap.

## 4. Current cost model (Aug 2026 list prices)

24/7 campaign, BYOK (A12): ~2–5M fresh input + 0.5–1M output tokens/day with caching ⇒ **$3–12/day** routed mid-tier (Haiku 4.5 $1/$5, Gemini 3.7 Flash $0.75/$3.75), **$20–60/day** all-Sonnet-5-tier [B18][B20]; observed heavy-automation agent spend corroborates the band ($17–65/day) [B22][B23]. Compute substrate: the user's laptop — PoC experiments ran 22 s–2.1 min each on consumer hardware; 2026 laptops (128 GB unified memory) cover the entire validated domain envelope [B26][B28]. Versus one ML engineer at $1,400–2,200/loaded day [C25-derived]: the agent line item is 0.2–4% of the human it augments.

## 5. Buildable this quarter vs research risk

**This quarter (engineering on existing rails):** ledger hash-chain attestation + DSR reporting over the existing JSONL ledger (the discard rows are already logged for runner-executed trials); seeded-violation gate calibration (red-team scripts + confusion matrices — also the first A11 corpus asset); live-index citation-existence checks (OpenAlex/S2, free APIs [B24]); step-class model routing + budget governor; dashboard stall-score panel; packaged one-command reproduction for the 15-practitioner test.

**Research risk (labeled, not promised):** trial-count deflation for *generic* metrics (closed form exists for Sharpe only; permutation-null analogue unproven); effective-N estimation under correlated trials [D9]; whether corpus priors measurably improve steering (A11's kills-pack-if-wrong); Goodhart divergence monitoring with usable false-positive rates [D31]; gate catch-rates on *semantic* leakage types [D5].

**Honesty ledger — paper implies, repo lacks:** `run_autoresearch.py` and `core/data_loader.py` (paper D.1/D.2) don't exist as named — loading lives in the runner; the paper's dashboard (Plotly equity curves, CSV export, live stall detector, App. B) is richer than the shipped 171-line generalized dashboard — those features existed in domain forks per the paper and are **[planned]** in the core; `seed_variance.json` is in the winner-archive layout but multi-seed variance is unreported for most champions; the "SOTA catalog subscription" is today a per-fork YAML pattern, not a maintained feed. None of this is fatal; all of it goes on the this-quarter list rather than in the marketing.

**Bottom line:** the mechanism is running code with forensic logs; the numbers are honest raw numbers awaiting their own deflation; the fastest path to "not vaporware" for skeptics is the one the architecture already made cheap — hand them the bundle and let them rerun it.
