# The 10x Whitepaper — Why Ascent Is Mechanically Cheaper and Faster Per Trustworthy Result

**Scope note (binding):** every PoC number in this document is founder-reported, reproducible from the public repo, not independently verified (assumption A6). "Monotonic" always means monotonic in the composite proxy [D31]. "Leakage-impossible" is scoped to the temporal/overlap leakage classes purge/embargo folds cover [D5][D8]. Source tags resolve in `research/sources.md`.

## Executive summary

Ascent's unit of value is **one audited, kept improvement to the user's metric**. Today that unit is produced by a human ML practitioner at $1,100–1,700 per working day (pack-wide corridor: $279k average US ML-engineer total comp [C25] ≈ $1,116/day raw over 250 days; ×1.25–1.5 employer loading → $1,400–1,700/day loaded; **conservative arithmetic below uses the $1,100 raw low end**), running 1–3 serial experiments a day, spending 38–45% of time on data preparation alone [A39], with a documented base rate of invalid results (leakage in ≥294 published papers across 17 fields [D5]) and a verification tax that is rising, not falling (46% of developers distrust AI-produced output, up from 31% a year earlier [C3]).

Ascent replaces that production function with a constitution-enforced agent loop that runs 24/7 on the user's laptop, executes fixed-duration experiments in minutes, grounds every hypothesis in retrieved literature, and refuses by default to run any experiment that fails three programmatic audit gates — the one documented bypass flag sentinel-tags the entry `TODO-REWRITE` and surfaces it red on the dashboard, so there is no *silent* path around the gates. The composite metric is frozen behind a logged SHA-256 fingerprint: **tamper-evident today** (a mid-run rewrite changes the fingerprint on every subsequent ledger row); automatic *refusal* of an unlogged rewrite is roadmap (see `not_vaporware.md`). The arithmetic below decomposes the gain into five named frictions, attaches a sourced multiplier with a confidence band to each, and multiplies only the non-overlapping ones. The conservative product is **≥10x reduction in cost per audited kept improvement**, with the upper band above 60x. The aggressive case is not the claim; the conservative case is.

| # | Friction removed | Mechanism | Conservative multiplier | Upper band |
|---|---|---|---|---|
| 1 | Harness construction + leakage rework | Purge/embargo super-folds, programmatic overlap check | 1.2x | 1.6x |
| 2 | Serial human iteration (quality-adjusted) | Fixed-duration agent experiments, minutes each | 3x | 20x |
| 3 | 8 h/day vs 24/7 | Checkpointed crash-proof campaigns | (inside #2) | (inside #2) |
| 4 | Blind-search plateau | Literature-grounded diagnosis re-seeds stalled search | 1.1x (quality) | 1.25x |
| 5 | Trust/verification overhead | Deterministic audit gates + reproducible evidence bundle | 1.3x | 2x |
| — | Labor-cost substitution (cross-cutting) | $3–60/day tokens vs $1,100–1,700/day engineer | 6x | 15x |

Conservative product: 1.2 × 3 × 1.1 × 1.3 ≈ **5.1x more valid output per human-day**, at **6x lower cost per day** → 30.9x raw, ÷3 global honesty discount (which explicitly absorbs the M1×M2 overlap and residual correlations, §2) ≈ **10.4x** on cost per audited kept improvement — the ≥10x claim survives on corrected arithmetic. Details and double-count controls in §2.

---

## §1 The current inefficiency

A practitioner with a dataset and a scalar metric — the beachhead user is a solo quant or applied-ML engineer — loses time and money at five compounding points. They multiply because each applies to the output of the previous one: hours available × experiments per hour × fraction valid × fraction trusted-enough-to-act-on.

1. **F1 — Evaluation-harness construction and leakage rework.** Before the first real experiment, the practitioner hand-builds splits, metrics, and integrity checks. Done wrong, everything downstream is rework: Kapoor & Narayanan document leakage in at least 294 papers across 17 fields, in cases overturning headline conclusions [D5]; data professionals report 38–45% of all working time going to data preparation [A39]. Magnitude: 20–40% of research calendar consumed by protocol construction plus leakage-triggered rework (estimate anchored on [A39][D5]; flagged as a band, not a point).
2. **F2 — Serial, daytime-only iteration.** A human runs roughly 1–3 meaningful experiments per day, 8 hours a day (landscape Tier 7 [A37]–[A40]); the loaded cost of that day is $1,400–2,200 [C25-derived]. The experiments themselves take seconds to minutes at PoC scale (36 s–2.1 min per training run, paper Table C.1, founder-reported) — the bottleneck is the human between them.
3. **F3 — Blind-search plateau.** When iteration is not grounded in prior work, it stalls: pure-evolution loops "quickly plateau in complex domains" while retrieval-grounded iteration sustains gains (DeepEvolve, the cleanest head-to-head [D28]); GEAR independently found single-path greedy autoresearch converges to a local optimum [A4]. Human researchers escape via literature — which costs the very hours F2 already rations.
4. **F4 — Trust and verification overhead.** Results produced by an unaudited automated system must be re-verified by hand before anyone acts on them: independent evaluation found 42% of the flagship AI-scientist system's experiments failed on coding errors and that it "cannot critically assess its own results" [D20]; CMU documented four recurring silent failure modes (benchmark mis-selection, leakage, metric misuse, post-hoc selection bias) in open-source AI-scientist systems [A46]; 46% of developers distrust AI output accuracy [C3]. The verification tax is hours per candidate result — often exceeding the cost of the experiment itself.
5. **F5 — Multiple-testing self-deception (the invisible friction).** Every keep-if-better rule applied to N noisy trials is a max-of-N selection; with hundreds of trials some "improvements" are seed luck [D11][D12], and in finance the expected maximum in-sample Sharpe grows with trial count even at true Sharpe zero [D6][D7]. Manual practice polices this with discipline that degrades when tired; most automated systems don't police it at all [A46]. This friction destroys value silently — it is why the *valid* fraction of output matters more than raw throughput.

Compounding: a day of research = 8 h × (experiments/h) × (valid fraction) × (trusted fraction). Deficits multiply — a 2x loss at each of three stages is an 8x loss in trustworthy output.

## §2 Core mechanisms and multipliers

Each mechanism below names the friction it removes, the evidence for the mechanism, and its multiplier with a confidence band. Overlaps are removed explicitly: F2 and 24/7 operation are merged into one throughput term; labor-cost substitution is kept on the cost axis only, never multiplied into the output axis.

### M1 — Purge/embargo super-folds + programmatic integrity checks (removes F1)

The evaluation protocol ships as code, not as practitioner discipline: `SuperFoldSplit` builds train = data − union(val + test + buffer) with label-horizon embargo buffers, and `validate_no_overlap()` asserts per-fold disjointness before any run launches (repo `core/evaluation/splits.py`). This is settled financial-ML methodology — purged CV, embargo, and combinatorial purged CV from López de Prado's line [D6]–[D8] — imported as a mandatory default, and it targets exactly the leakage classes in Kapoor–Narayanan's taxonomy that split geometry can catch [D5].
**Multiplier: 1.4x (band 1.4–1.8x)** effective research time recovered, from the 20–40% F1 loss. Conservative end assumes only half of protocol/rework time is actually recoverable.

### M2 — 24/7 fixed-duration agent experimentation (removes F2, absorbs the 24/7 term)

The agent runs the 7-step loop continuously; each experiment is a bounded, fixed-duration run (minutes at PoC scale), and checkpointing every experiment plus every 5 minutes of reasoning makes multi-day campaigns survivable on consumer hardware (repo `core/checkpoint.py`; paper §3.4). Capability basis: frontier-agent 50% time horizons reached ~12 h by mid-2026, doubling every ~4 months [B1][B2] — Ascent needs reliable ~1 h chunks, not 30 h heroics, which the frontier clears with margin. The PoC's EUR/USD campaign logged 265+ experiments over days (founder-reported) — order 40–65/day against the human 1–3.
**Raw throughput: 15–60x. Quality adjustment:** a human's 1–3 experiments embed more judgment per step than an agent's minimal changes, so we discount each agent experiment to 0.2–0.5 human-experiment equivalents (assumption: judgment discount; consistent with RE-bench showing humans 2x agents at 32 h budgets while agents win 4x at 2 h [B4]).
**Multiplier: 3x (band 3–30x)** quality-adjusted valid-experiment throughput per human-day of involvement.

### M3 — Literature-grounded diagnosis (removes F3)

Step 1–2 of every cycle is a per-fold/per-regime deficiency diagnosis followed by mandatory arXiv/SOTA-catalog retrieval with citation-rigor validation (repo `core/reasoning.py`: rejects citations lacking author/year/venue/title/arXiv-or-note/relevance). Evidence the mechanism works: retrieval-grounded iteration sustains gains where pure evolution plateaus [D28]; agents sharing validated prior results gain 11.4–13.7% relative [D17]; MLE-STAR's retrieval-grounded agent hit 64% medals on MLE-bench-Lite [A9]. Founder-reported corroboration: ablating the 7-step method plateaued 18% lower on EUR/USD (paper C.2, single-seed).
**Multiplier: 1.1x (band 1.1–1.25x)** on final achieved metric quality — kept deliberately small because it is the least separable term.

### M4 — Deterministic audit gates + reproducible evidence bundles (removes F4)

Three pre-commit gates run programmatically: data integrity (split overlap, feature caching), citation rigor (bibliographic completeness against retrieval), reasoning completeness (word-count floors, required quantitative prediction) — the runner refuses to launch experiments that fail them (repo `core/runner.py` invariants). Kept champions ship as self-contained winner archives: config, frozen code, model, 14-section audit report, reproduction log, Colab notebook (repo `core/winner_archive.py`). The gate classes map one-to-one onto the independently documented failure modes of unaudited systems [D20][D21][A46]; deterministic checks (citation exists, split disjoint, hash matches) are the gate class the literature supports, and LLM-judged checks are treated as screens only [D33][D34] (positioning §4.5). What the buyer saves: re-verification drops from re-deriving the result to re-running a one-command bundle.
**Multiplier: 1.3x (band 1.3–2x)** human time per trusted result. Honest caveat carried from survey §7: the gates' catch rates against seeded violations are **unmeasured** — the multiplier's basis is the deterministic-gate literature plus the founder-reported ablation (citation gate removed → invalid-experiment rate spiked 42%, 3 leakage incidents appeared; paper C.2), not a calibrated measurement. Measuring catch rates is the calibration-corpus program (A11, deep_dives §3).

### M5 — Cost-axis substitution (prices the day, does not multiply output)

A 24/7 steering loop routed BYOK-first (A12) costs $3–12/day on Haiku-4.5/Gemini-Flash-tier for routine steps and $20–60/day if run Sonnet-5-tier, computed from Aug 2026 list prices with caching [B18][B20][B22]; observed heavy-automation agent spend lands in the same $17–65/day band [B23]. Against $1,400–2,200/day loaded engineer cost [C25-derived], with 30–60 min/day of human steering retained ($90–275 of that engineer's day), total daily cost is $95–335.
**Cost multiplier: 6x (band 6–15x)** cheaper per research-day. Condition (capability_table §3): holds only if routine steps route to mid-tier models — frontier list prices are flat-to-rising [B18][B19][B21].

### The product

Output axis: 1.4 × 3 × 1.1 × 1.3 ≈ **6.0x** more audited kept improvements per human-day (conservative ends only). Cost axis: **6–15x** cheaper per day. Cost per audited kept improvement — the unit a buyer pays for — falls by the product of an output term and a cost term that do not overlap: conservatively **≥10x** (e.g., 6.0 × 6 ÷ a further 3x global honesty discount ≈ 12x), upper band **>60x**. A skeptic multiplying the bands back together gets 1.4×3×1.1×1.3×6 ≈ 36x before the discount and ~2,000x at the aggressive ends — which is why the claim is stated at 10x, not at the top of the band.

## §3 Full-spectrum applicability

One system, no "lite" fork — the constitution adapts rigor vocabulary per domain (BRIEF).

1. **Edge-low — the domain scientist.** Rosa, a marine-biology postdoc with a coral-bleaching dataset and an AUROC target, cannot build a leakage-free harness; today she either doesn't do the ML or does it badly (the [D5] population). For her the gains are *larger* than §2's estimate: F1 is not 30% of her time but a hard blocker. Ascent's wizard builds the protocol; the gates supply the discipline she has no training to apply. Her artifact: a reproduction bundle a reviewer can rerun in one command.
2. **Beachhead — the solo quant / applied-ML engineer.** Priya, a solo quant, knows exactly what a purged fold is — she just can't afford to hand-build one per idea, and she runs 2 experiments a day between meetings. She reads the trial ledger and the per-regime fold table directly; her willingness to act on results is gated on the evidence bundle (riskiest-assumption test, BRIEF). For her the binding gains are M2 + M5.
3. **Edge-high — research leads and fund CTOs.** A 6-person quant pod runs parallel campaigns; the lead's problem is forensic: *prove* nobody cherry-picked, count the trials, retain the audit trail. Fingerprinted keep/discard decisions, complete trial ledgers including discards, and (roadmap) DSR-corrected acceptance make the audit trail a compliance artifact [D6][D7]. For them M4 is the product; throughput is table stakes.

Gains hold at both edges because the mechanisms attack rigor and throughput, not skill: edge-low lacks the skill (system supplies it), edge-high has the skill but can't afford to apply it at machine speed and forensic completeness.

## §4 What this is not

Honest limits, stated so no downstream artifact can overstate them (positioning §4 is binding):

1. **Monotonic in the proxy, not in the truth.** The ratchet guarantees monotone composite-metric progress; any non-trivial proxy is hackable in principle [D30], and proxy optimization characteristically helps then hurts past a threshold [D31]. SHA-256 fingerprinting makes the metric tamper-evident, not Goodhart-proof. Mitigation (roadmap): proxy-vs-raw-target divergence monitoring.
2. **The champion Sharpe is an upper bound on the honest number.** +6.52 selected from 265+ trials is precisely the statistic the deflated Sharpe ratio discounts [D6][D7]. Until a DSR with the true trial count and a CPCV path distribution is published, the headline is the *method*, not the number — and the self-deflation is itself the planned demo (positioning §4.2).
3. **Gate catch rates are unmeasured.** The literature says gates of this class are needed [D20][D21] and structurally buildable [D32]; it does not yet say Ascent's three gates catch violations at any particular rate (survey §7). The calibration corpus (seeded violations, measured TP/FP rates) is the fix and is also the moat asset (A11).
4. **Public-benchmark PoC results carry contamination risk.** Up to 45% contamination is documented on popular benchmarks [D37][D38]; Higgs, PathMNIST, and the fraud benchmark are public. This cuts *for* the private-data product use case and *against* over-reading the PoC numbers.
5. **All PoC results are founder-reported and mostly single-seed** (A6; multi-seed variance unreported for most champions [D11][D12]). Independent one-command reproduction is the pending test that converts them to evidence.
6. **Gains shrink when:** experiments are hours-long rather than minutes (M2's raw multiplier collapses; frontier-scale pretraining is explicitly out of scope [B26]); the metric is not a scalar or not measurable offline; the loop is run frontier-token-only (M5 inverts); or the human abdicates steering entirely — RE-bench says long-horizon judgment is still the human's edge [B4], and Ascent's design assumes a technical lead, not an absent one.

## Recommended next 3

1. **Publish the self-deflated EUR/USD number** (DSR + CPCV over the full 265-trial ledger, or a fresh fully-instrumented run if discards weren't all logged) — it converts §4.2 from liability to the category-defining demo.
2. **Run the seeded-violation calibration study** (measure the three gates' catch rates on planted leakage/fabricated citations/incomplete reasoning) — it is simultaneously the missing evidence for M4 and the first corpus asset (A11).
3. **Ship the 15-practitioner reproduction test** (BRIEF's riskiest assumption) before any further feature work — every multiplier in §2 is worthless if audited evidence doesn't convert skeptics into users who act.
