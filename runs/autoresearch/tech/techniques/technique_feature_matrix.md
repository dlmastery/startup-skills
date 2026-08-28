# Technique × Feature Matrix

Rows = the 19 technique clusters (146 techniques total: W1 50, W2 50, W3 46). Columns = the 8 flagship features (derived from BRIEF/A2/A12 tiers; the product layer should adopt these names or map its own onto them). ● = cluster's techniques directly power the feature; ○ = supporting role; blank = no relationship. Orphans and unsupported features are findings, listed below.

**Flagship features:** F1 Autonomous campaign loop (open core) · F2 Leakage-proof harness builder (open core) · F3 Audit gates & evidence bundles (open core) · F4 Literature grounding + SOTA catalog subscription (Pro) · F5 Steering copilot + dashboard (Pro) · F6 BYOK model routing & cost governor (Pro) · F7 Team scale-out: shared archives, team ledger (Team) · F8 DSR/attestation & compliance trail (Enterprise, roadmap)

| Cluster (IDs) | F1 | F2 | F3 | F4 | F5 | F6 | F7 | F8 |
|---|---|---|---|---|---|---|---|---|
| W1.A Leakage-proof protocols (01–10) | ○ | ● | ● | | | | | ● |
| W1.B Multiple-testing control (11–18) | | | ○ | | | | ● | ● |
| W1.C Experiment-design discipline (19–26) | ● | | ● | | | | | ○ |
| W1.D Statistical rigor (27–34) | ○ | | ● | | ○ | | | ● |
| W1.E Data integrity & provenance (35–41) | | ● | ● | | | | | ● |
| W1.F Documentation & reproducibility (42–50) | ○ | | ● | | ● | | ● | ● |
| W2.A Sequential error control (01–08) | | | ○ | | | | ● | ● |
| W2.B Goodhart mitigation (09–15) | ● | | ● | | ○ | | | ○ |
| W2.C Overfitting quantification (16–21) | | | ○ | | ○ | | | ● |
| W2.D Distributional robustness (22–28) | ● | ○ | ○ | | ● | | | |
| W2.E Optimal experiment selection (29–36) | ● | | | ○ | | ○ | | |
| W2.F Contamination probes (37–42) | | ○ | ● | ○ | | | | ○ |
| W2.G Causal & diagnostic analysis (43–50) | ● | | ● | | ● | | | ○ |
| W3.A Constitution engineering (01–08) | ● | ○ | ● | | | ● | ○ | ○ |
| W3.B Literature-grounded generation (09–16) | ● | | ○ | ● | | | | |
| W3.C Multi-agent verification (17–23) | ○ | | ● | ○ | | | | ○ |
| W3.D Campaign infrastructure (24–32) | ● | | | | ● | ● | ○ | |
| W3.E Corpus-prior & meta-learning (33–39) | ○ | | | ● | ○ | ● | ● | |
| W3.F AI-native trust infrastructure (40–46) | | | ● | | ○ | | ○ | ● |

## Findings

### 1. Orphan techniques (no feature consumes them today) — 7

These are real orphans at technique granularity even where their cluster maps somewhere:

1. **W2.14 Satisficing/quantilizer acceptance** — no feature implements non-argmax acceptance; candidate future refinement of the keep rule.
2. **W2.21 Adaptive-data-analysis reuse bounds** — theoretically the deepest answer to holdout burn; no feature consumes it. Research-risk parking lot.
3. **W2.27 DRO** — training-time robustness is out of the current loop's scope (the loop evaluates; it doesn't impose training objectives).
4. **W2.31 Successive-halving theory** — subsumable under W2.30 in practice; keep as theory anchor only.
5. **W2.39 Canary strings** — belongs to a data-exfiltration story (D06 hardening) that has no committed feature yet.
6. **W3.22 Cross-model agreement (weak signal)** — deliberately unconsumed: adopting it as a gate would violate positioning §4.5. Listed to keep it out, on purpose.
7. **W1.18 White's Reality Check / SPA** — superseded by the DSR/PBO line (W1.11/W1.12) for F8; retained as evidence anchor, not implementation target.

Verdict: 7 orphans out of 146 (~5%) — healthy. A pack where everything is "used" is a pack that never says no.

### 2. Under-supported features (thin technique backing) — 2

1. **F6 BYOK routing & cost governor** — powered by only W3.A/W3.D/W3.E fragments (routing tables, telemetry, escalation). Adequate but thin: it is an engineering feature more than a technique-driven one. Risk: acceptable; flagged so nobody claims deep IP here.
2. **F5 Steering copilot** — well-covered on the sensing side (diagnostics, dashboards) but the *advice generation* side ("what should I steer next?") leans on W3.33 corpus priors that are **[ROADMAP]** and whose value is unproven (A11's kills-pack-if-wrong clause). This is the matrix surfacing the pack's declared moat risk in feature form.

### 3. Load-bearing observations

1. **F3 (audit gates & evidence) is the gravity well** — 11 of 19 clusters feed it. That concentration is the strategy (positioning: trust axis), and also the single-point-of-failure: if gate catch-rates disappoint when finally measured (survey §7), most of the matrix's right side weakens with it.
2. **F8 (attestation) is the deepest untapped column** — powered almost entirely by W1.B/W2.A/W2.C techniques that *no shipped feature yet implements* (the trial-count-corrected gate is ROADMAP). The technique arsenal is ahead of the product here; that is the correct order, and closing it is deep_dives §4.
3. **F4's paid boundary is visible in the matrix** — W3.B literature techniques are open-core-adjacent (retrieval is commodity [B24]), but W3.E corpus priors are Team/Pro-only; the matrix shows the open/paid split following the technique provenance exactly as A11 prescribes.

## Recommended next 3

1. **Close the F8 column**: implement W2.08 (trial-count-corrected gate) + W1.11 DSR reporting — the highest technique-to-feature arbitrage in the matrix.
2. **De-risk F5's roadmap dependency**: run one measured experiment on whether W3.33 corpus priors improve steering suggestions (A11's kills-pack-if-wrong test) before building the copilot around them.
3. **Prune the orphans deliberately**: move W2.21/W2.27 to a labeled research-risk appendix so the catalog stays a decision tool, not a museum.
