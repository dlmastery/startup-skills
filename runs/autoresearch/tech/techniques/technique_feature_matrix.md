# Technique × Feature Matrix

Rows = the 19 technique clusters (146 techniques: W1 50, W2 50, W3 46). Columns = 8 of the 20 flagship features from `product/features_flagship.md` — the 8 most technique-dependent, selected because column density is the point of this matrix; the 12 excluded features and their reasons are §3. ● = cluster's techniques directly power the feature; ○ = supporting role; blank = no relationship.

**Columns (product feature numbers):** #2 Trial-count-corrected acceptance gate · #4 Super-fold split builder · #5 Three pre-commit audit gates · #8 Verified literature grounding · #11 Goodhart divergence monitor · #12 Multi-seed/CPCV confirmation · #14 Winner archive / champion bundle · #20 Team parallel campaigns + org ledger

| Cluster (IDs) | #2 | #4 | #5 | #8 | #11 | #12 | #14 | #20 |
|---|---|---|---|---|---|---|---|---|
| W1.A Leakage-proof protocols (01–10) | | ● | ● | | | ○ | ○ | |
| W1.B Multiple-testing control (11–18) | ● | | | | | | ○ | ● |
| W1.C Experiment-design discipline (19–26) | ○ | | ● | | | | ○ | |
| W1.D Statistical rigor (27–34) | ○ | | | | | ● | ● | |
| W1.E Data integrity & provenance (35–41) | | ● | ● | | | | ○ | |
| W1.F Documentation & reproducibility (42–50) | | | ○ | | | | ● | ● |
| W2.A Sequential error control (01–08) | ● | | | | | | | ● |
| W2.B Goodhart mitigation (09–15) | ○ | | ○ | | ● | | | |
| W2.C Overfitting quantification (16–21) | ● | | | | ○ | ○ | | |
| W2.D Distributional robustness (22–28) | | ○ | | | ○ | ● | | |
| W2.E Optimal experiment selection (29–36) | | | | | | | | |
| W2.F Contamination & validity probes (37–42) | | | ○ | ● | | | | |
| W2.G Causal & diagnostic analysis (43–50) | | | | ○ | ○ | ○ | ● | |
| W3.A Constitution engineering (01–08) | ○ | | ● | | | | ○ | |
| W3.B Literature-grounded generation (09–16) | | | ○ | ● | | | ○ | |
| W3.C Multi-agent verification (17–23) | | | ● | ○ | | ○ | | |
| W3.D Campaign infrastructure (24–32) | | | | | | | | ○ |
| W3.E Corpus-prior & meta-learning (33–39) | ○ | | | ○ | | | | ● |
| W3.F AI-native trust infrastructure (40–46) | ● | | ● | | | | ● | ○ |

## Findings

### 1. Orphan techniques (re-checked against the real 20-feature list) — 7, plus one orphan *cluster*

The seven technique-level orphans survive the remap unchanged — none of the 20 real features consumes them:

1. **W2.14 Satisficing/quantilizer acceptance** — feature #2's acceptance logic is threshold-based argmax-with-deflation; non-argmax acceptance remains unimplemented. Candidate future refinement of #2.
2. **W2.21 Adaptive-data-analysis reuse bounds** — no feature bounds adaptive holdout queries; research-risk parking lot.
3. **W2.27 DRO** — training-objective robustness is outside all 20 features' scope (the loop evaluates; it doesn't impose training objectives).
4. **W2.31 Successive-halving theory** — subsumed by W2.30 in any implementation; theory anchor only.
5. **W2.39 Canary strings** — belongs to D06 exfiltration hardening; no committed feature.
6. **W3.22 Cross-model agreement (weak signal)** — deliberately unconsumed: adopting it inside feature #5 as a gate would violate positioning §4.5. Listed to keep it out, on purpose.
7. **W1.18 White's Reality Check / SPA** — superseded by the DSR/PBO line inside #2/#3; evidence anchor, not implementation target.

**New finding from the remap — W2.E is an orphan cluster at flagship level.** Optimal experiment selection (Bayesian optimization, multi-fidelity, bandits, information gain — 8 techniques) powers *how the agent picks the next experiment*, and none of the 20 flagship features names that capability. It lives implicitly inside the loop and `decision_tree.md`'s fine-HPO branch, but the product list has no "experiment-selection optimizer" feature. Either (a) product should add it as a feature (it is demo-able: "the agent chose this experiment because expected information gain was highest"), or (b) it stays internal machinery — defensible, but then the pack should stop implying search efficiency is a differentiator anywhere in marketing copy. Decision needed; flagged to product.

### 2. Thin features (remapped from my provisional F5/F6 findings — both confirmed)

1. **#16 BYOK model routing** (was my provisional F6) — confirmed thin: powered only by W3.03/W3.37/W3.45. It is an engineering feature, not technique IP; excluded from the columns for exactly that reason. Risk acceptable; nobody should claim deep IP here.
2. **#18 Steering console** (was my provisional F5-copilot) — confirmed, and sharper now: the console's *input channel* is backed (W3.28/W3.29), but its *intelligence* — the suggested-steering prompts feature #17/#18 promise — depends on W3.33 what-worked-where corpus priors, which are **[ROADMAP]** and carry A11's kills-pack-if-wrong clause. The stall-detector half of #17 is solidly backed (W3.30, W2.09-adjacent signals). The matrix still surfaces the pack's declared moat risk in feature form.

### 3. The 12 excluded features and why

Exclusion means "not one of the 8 densest technique columns," never "not technique-backed":

- **#1 Trial ledger** — infrastructure prerequisite; its techniques (W1.13, W1.42–43) are inherited by columns #2 and #20. Including it would double-count every multiple-testing row.
- **#3 DSR panel** — technique base identical to #2 (W1.11–12, W2.16–19); it is #2's display surface. One column serves both (product's own "Recommended next" pairs them).
- **#6 Constitution wizard** — onboarding UX over W3.A techniques already credited to #5.
- **#7 Constitution editor, locked invariants** — single-mechanism feature (W3.01/W3.04 + W2.13 freeze); base captured in #5's and #11's columns.
- **#9 Deficiency diagnosis heatmap** — visualization of W2.G diagnostics that fire inside the loop; the techniques are credited where they act (#11, #12, #14).
- **#10 Fingerprinted composite metric** — deliberately narrow (W2.13, W3.44); it is load-bearing but one-technique-deep, and #2/#11 both presuppose it.
- **#13 Crash-proof checkpointing** — engineering (W3.05/W3.26/W3.27); essential, thin.
- **#15 One-command reproduction** — technique base shared with #14 (W1.46, W3.20, W3.42, W3.44); #14's column carries both.
- **#16 BYOK routing** — see thin-feature finding above.
- **#17 Dashboard + stall detector** — monitoring surface; its underlying monitors (W2.09 divergence, W2.20 decay, W3.30 stall) are credited to #11 and #2, and D08 is its architecture home.
- **#18 Steering console** — see thin-feature finding above.
- **#19 SOTA catalog + subscription** — its retrieval techniques (W3.12/15/16) sit in #8's column; the subscription itself is curation + business model, not technique.

### 4. Load-bearing observations

1. **#5 (audit gates) and #2 (acceptance gate) are the twin gravity wells** — between them, 12 of 19 clusters feed the trust spine. That concentration is the strategy (positioning: trust axis) and the single point of failure: if gate catch-rates disappoint when measured (survey §7), the right half of the matrix weakens together.
2. **#2/#3's column is the deepest technique-to-feature arbitrage** — it draws on three clusters (W1.B, W2.A, W2.C) that *no shipped code implements yet* (the gate is ROADMAP, deep_dives §4). The arsenal is ahead of the product here, which is the correct order; product's Recommended-next #1 already agrees.
3. **The open/paid boundary follows technique provenance** — commodity-retrieval techniques (W3.B) land in open-core-adjacent #8; corpus-prior techniques (W3.E) land in paid #19/#20 — exactly the A11 split, now visible at matrix level.

## Recommended next 3

1. **Build #2 + #3 first** (matches product's Recommended-next #1): the highest-density column with zero shipped implementation — and the only feature no published system has [survey §6].
2. **Resolve the W2.E orphan-cluster question with product**: add an experiment-selection feature or formally declare it internal machinery; today it is 8 techniques powering nothing named.
3. **De-risk #18 before building its intelligence**: one measured experiment on whether W3.33 corpus priors improve steering suggestions (A11's kills-pack-if-wrong test) before the copilot layer is committed.
