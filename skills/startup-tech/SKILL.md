---
name: startup-tech
description: Use when a startup run needs the deep-tech layer — the 10x whitepaper, system architecture diagrams, algorithm deep-dives, technique catalog, or technique decision tree — or when the user asks "why is this 10x", "system design", "architecture diagrams", "what techniques power this". Requires BRIEF.md and research/ (run prerequisites first if missing).
---

# startup-tech

Generate the deep-tech layer: the mechanistic case that this is a real technology company, not a wrapper.

## Writes → `runs/<slug>/tech/`

1. **`whitepaper.md`** — the 10x argument, structured as mechanism arithmetic:
   - Executive summary.
   - §1 The current inefficiency: where users' time/money/effort is wasted today, decomposed into 4–6 named frictions with magnitude estimates (sourced or flagged). Frictions *multiply* — show the compounding.
   - §2 Core mechanisms: for each friction, the mechanism that removes it, evidence for the mechanism (cite `research/survey.md`), and the resulting multiplier with confidence bands. Conservative × conservative should still be large.
   - §3 Full-spectrum applicability: why the gains hold at both user edges.
   - §4 What this is not: honest limits and conditions under which gains shrink.
2. **`deep_dives.md`** — the 5–8 tier-1 algorithms/systems behind the mechanisms. Per item: Goal (the one question it answers) → Algorithmic approach (real methods by name, drawn from `research/capability_table.md`) → Inputs/outputs → Key design choice and its rationale → Failure modes and fallbacks.
3. **`architecture/`** — `00_INDEX.md` plus ten diagram docs `D01`–`D10`, each a titled **Mermaid diagram** with a caption explaining what a reviewer should notice. Standard set (rename with domain nouns; replace any that don't apply, keep ten):
   D01 end-to-end data pipeline · D02 real-time adaptive closed loop · D03 multi-agent/component orchestration · D04 durable user-model & memory schema · D05 model serving, routing & cost control · D06 security/privacy/compliance · D07 integrations & ecosystem · D08 observability, evaluation & safety monitoring · D09 multi-tenant scalability · D10 human-in-the-loop & escalation.
4. **`techniques/`** — the domain-technique system, the pack's intellectual arsenal:
   - `wave1.md`, `wave2.md`, `wave3.md` — three waves of up to 50 techniques each (stop a wave early only when the field is genuinely exhausted; say so). Wave 1: established domain-science techniques. Wave 2: advanced/theory-grounded. Wave 3: frontier AI-native and cross-domain imports. Cluster by sub-discipline with counts; per technique: name, one-line mechanism, evidence anchor.
   - `decision_tree.md` — when/what/in-which-order techniques fire: continuous sensing inputs → priority triage (safety/critical states first) → adaptive branches by dominant state → continuous re-evaluation. Mermaid flowchart + logic table.
   - `technique_feature_matrix.md` — techniques × flagship features matrix showing which techniques power which features; flag orphan techniques (unused) and unsupported features (no technique) — both are findings.
5. **`not_vaporware.md`** — one page: concrete stack choices, evaluation loop (how quality is measured continuously, named benchmarks where they exist), cost model at current API prices, what's buildable this quarter vs. research risk.

## Quality bar

- Real method names, honestly applied — "Bayesian knowledge tracing", not "proprietary AI". If it's speculative, label it research risk.
- Mermaid must render (validate syntax); every diagram earns its place by showing a mechanism, not a marketing shape.
- The whitepaper's multipliers must survive a skeptic multiplying them back together.

## Red flags

- A whitepaper that asserts 10x without arithmetic. Architecture diagrams that are boxes labeled "AI". Techniques padded with duplicates to hit 50. A matrix where every technique powers every feature.
