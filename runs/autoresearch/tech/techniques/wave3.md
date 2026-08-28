# Techniques — Wave 3: Frontier AI-Native Techniques (46 — honestly short of 50)

Techniques that only exist because LLM agents do. Six clusters, 46 techniques. **Honesty note:** this wave stops at 46. The 2024–2026 agentic-research literature is young; the remaining candidates we surveyed (more prompt-engineering folklore, more scaffold variants) are packaging, not mechanisms, and padding to 50 would violate the quality bar. The four missing slots are the wave's finding: the frontier is thinner than it markets itself.

## Cluster A — Constitution & protocol engineering (8)

1. **W3.01 Binding constitution files** — a versioned protocol document the agent must obey per experiment; encoded research judgment as the behavioral layer. Paper App. A (52 sections); [A1] program.md as ancestor
2. **W3.02 Refusal-by-default runners** — the deterministic harness refuses ungated work; agent compliance enforced by code, not prompt. Repo `runner.py` invariants; Sargsyan's structural-enforcement thesis [D32]
3. **W3.03 Cross-assistant behavioral pinning** — write the protocol so different LLMs produce consistent behavior; the portability layer that enables model routing. Paper App. A ("consistent behavior across assistants"); A9
4. **W3.04 Protocol version fingerprinting** — hash and log the constitution version per campaign; behavior changes become diffable events. D04 schema `constitution_version` [planned]
5. **W3.05 Session-resume contracts** — a fresh agent session must reconstruct full state from one checkpoint file; statelessness as a reliability feature. Repo `checkpoint.py`; paper §3.4
6. **W3.06 Ownership-contract file mandates** — each artifact has exactly one writer (runner vs agent); forensic attribution by construction. Repo ARCHITECTURE.md "Dashboard Files Update Mandate"; D03
7. **W3.07 Reasoning-completeness floors** — structural minima (word counts, required quantitative prediction, verdict keywords) on agent reasoning before execution. Repo `validate_reasoning_blob()`; screen-not-guarantee framing [D33]
8. **W3.08 Constitution evolution with ratification** — the protocol improves through the same NL process that created it, but changes are versioned and human-ratified, never silent. Paper §6 ("designed to evolve"); A11 (file is open; judgment compounds elsewhere)

## Cluster B — Literature-grounded generation (8)

9. **W3.09 Retrieval-grounded hypothesis generation** — ground next-experiment proposals in retrieved papers; the measured escape from pure-prior plateaus. DeepEvolve [D28]; MLE-STAR [A9]
10. **W3.10 Citation-existence verification** — check every cited work against live scholarly indexes; fabricated-reference rates of 18–95% ungrounded [D35][D36] drop toward zero with retrieval verification. Gate 2 productization; [B24]
11. **W3.11 Deficiency-driven retrieval queries** — search literature *for the diagnosed weakness* ("per-regime failure in high-vol folds"), not generically for the task. Constitution steps 1→2; paper §3.3
12. **W3.12 SOTA-catalog seeding** — start campaigns from a curated, cited catalog of current-best architectures per task family. Repo `sota_catalog.yaml` pattern (per-fork); PoC Higgs 14-backbone grid (founder-reported)
13. **W3.13 Retrieval-based novelty checking** — compare a proposed idea against retrieved prior work before calling it new; the fix for agents reinventing micro-batched SGD. SciMON [D29]; Beel's novelty-failure finding [D20]
14. **W3.14 Two-pass literature screens** — broad sweep then deep read, agent-executed; commodity wrappers exist. [B25]; PaperQA2 as the quality bar [A20]
15. **W3.15 Paper-to-config extraction** — pull hyperparameters and recipes from the *originating* paper into runnable configs; no cross-backbone folklore inheritance. Repo ARCHITECTURE.md rule 6; deep_dives §8
16. **W3.16 Citation-chasing expansion** — follow reference graphs from anchor papers to map a subfield before committing an experiment axis. [B24][B25]

## Cluster C — Multi-agent & adversarial verification (7)

17. **W3.17 Generate–debate–rank hypothesis tournaments** — competing agent-generated hypotheses ranked via structured debate/tournament; measured expert preference. Co-Scientist [D18]
18. **W3.18 Role-split agent pipelines** — separate researcher/engineer/reviewer agents so no agent grades its own work. Agent Laboratory [D15]
19. **W3.19 Adversarial violation seeding (red-team agent)** — an agent plants leakage/fabricated citations/incomplete reasoning to measure gate catch rates; QA for the audit layer and the calibration corpus's engine. Deep_dives §3 plan; [A46] failure taxonomy as the seed list [ROADMAP]
20. **W3.20 Independent replication agents** — a second agent with no shared context reruns the champion bundle before promotion. Paper D.2 one-command reproduction; D08 M5 [planned]
21. **W3.21 LLM-judge screens with deterministic backstops** — LLM judgment allowed only where a deterministic check bounds the damage; judges are reliable-but-not-valid. [D33][D34]; positioning §4.5
22. **W3.22 Cross-model agreement as *weak* signal** — model consensus used only as a triage heuristic, never as validation — agreement can encode shared bias. [D34]
23. **W3.23 Solution-tree / population search over code** — organize candidate solutions in trees or populations to escape single-path stagnation. AIDE [D23]; GEAR [A4]; Evo AI Labs [A5]

## Cluster D — Agentic campaign infrastructure (9)

24. **W3.24 Monotonic ratchet loops** — keep-if-better over fixed-budget experiments with git as the commit medium; the field's best-performing search shell. [D22][D23][D24]
25. **W3.25 Fixed-duration experiment units** — bound every agent task to minutes-scale runs; matches the regime where agents beat humans 4x [B4]. [A1]; capability_table §1
26. **W3.26 Aggressive checkpoint/resume harnesses** — checkpoint every experiment + every 5 min of reasoning; multi-day campaigns on crash-prone consumer hardware. Repo `checkpoint.py`; Anthropic long-running-agent patterns [B8][B10]
27. **W3.27 Memory compaction for long campaigns** — compress history into champion state + exhausted axes + learnings so context windows survive week-long runs. [B8]; repo checkpoint format
28. **W3.28 Natural-language steering protocols** — human input restricted to high-level NL ("pivot", "self-reflect"); low-level intervention measurably slowed convergence (founder-reported ablation, paper C.2). Constitution §49–52
29. **W3.29 Steering-log forensics** — every human prompt logged; the campaign's autonomy level becomes an auditable, measurable quantity. Paper D.1 `steering_log.md`; survey §6 (nobody has published the measurement)
30. **W3.30 Stall-detection self-reflection** — automated stall scoring triggers whole-history re-diagnosis before any human is bothered. Deep_dives §7; paper B.3 [partial]
31. **W3.31 Harness auto-generation from NL** — the agent builds loaders, splits, metrics, and dashboards from a task description; zero human-written code (founder-reported, steering log as proof). Paper §3.6; BRIEF founder edge
32. **W3.32 Auto-generated live dashboards** — self-contained HTML over the ledger as the human's monitoring surface. Repo `dashboard/dashboard.html`; paper App. B

## Cluster E — Corpus-prior & meta-learning over campaigns (7)

33. **W3.33 What-worked-where priors** — steer new campaigns with priors mined from past campaign ledgers across domains; the A11 moat asset. A11; meta-learning lineage [D1] [ROADMAP]
34. **W3.34 Discard-ledger mining** — learn from the *negative* space (what failed, where, why) that no public fork accumulates; bundles ship champions, never the discard corpus. A11; positioning §5.3 [ROADMAP]
35. **W3.35 Shared validated-result archives** — agents building on other agents' *kept* results: +11.4–13.7% measured relative gain. AgentRxiv [D17]
36. **W3.36 Gate catch-rate calibration corpora** — accumulated seeded-violation results per gate per domain; converts "we have gates" into "our gates catch X%." Deep_dives §3 [ROADMAP]
37. **W3.37 Cost-telemetry-learned routing** — learn per-step-class model routing from logged cost/quality telemetry rather than static tables. D05 [planned]; [B16] price dynamics
38. **W3.38 Cross-domain constitution transfer** — "replicate the exact recipe from the forex run, adapted to this problem" as a reproducible instantiation pattern across six domains (founder-reported). Paper §3.1/§4
39. **W3.39 Steering-bandwidth measurement** — minutes-of-human-attention per kept improvement as a tracked product metric; the open research question turned KPI. Survey §6; W3.29 data [ROADMAP]

## Cluster F — AI-native evaluation & trust infrastructure (7)

40. **W3.40 Seeded-violation gate testing** — the evaluation method *for* audit gates: plant known violations, measure TP/FP. Deep_dives §3; mirrors [A46] taxonomy [ROADMAP]
41. **W3.41 Process-validity benchmarking** — score the *validity of the research process* (leakage, selection bias), not just the final metric; no such public benchmark exists — building one is open ground. Survey §5 gap; [A46] as proto-methodology
42. **W3.42 Reproduction-telemetry networks** — opted-in bundle reruns on real user machines as continuous third-party verification. D08 M5; BRIEF riskiest-assumption test [ROADMAP]
43. **W3.43 Deflation-aware leaderboards** — rankings that display trial-count-corrected numbers next to raw ("6.52 raw, X deflated over N trials — here's the ledger"). Positioning §4.2 self-deflation doctrine [ROADMAP]
44. **W3.44 Evidence-bundle standards** — a portable format (config, code, weights, ledger extract, audit report, rerun script) any skeptic can execute; the trust artifact as interchange format. Repo winner archive as v0; paper D.1
45. **W3.45 Token-cost-per-kept-improvement accounting** — the campaign's economic efficiency as a first-class logged metric ($/audited improvement). D05 telemetry; BRIEF outcome metric [planned]
46. **W3.46 Contamination-aware agent evaluation** — validate agent systems on private post-cutoff tasks because the agent's LLM may know public benchmark solutions. [D37][D38]; survey §6

**Coverage note:** stopped at 46 of 50 — see header. The gap is honest information about the field's maturity, not an oversight.
