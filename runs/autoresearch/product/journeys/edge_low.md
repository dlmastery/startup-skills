# Journey — Edge-low: Priya brings her own dataset

**Persona:** Dr. Priya N., 4th-year computational-biology postdoc (strategy/personas.md card 1). R fluent, Python passable, no ML-engineering depth, no lab ML engineer. Hardware: M-series MacBook, inside the validated envelope [B26–B28]. **Session goal:** get a defensible AUROC for her single-cell classifier — one she can put in front of her PI and a reviewer — without fooling herself. Her private dataset is exactly the clean-test case the contamination literature favors [D37][D38] (P7).

Every beat names the **acting component** and the **durable record** written. Format: *component → action → record.*

## Friday, 9:10 pm — instantiation

1. **Instantiation wizard** → Priya answers the 12-step flow in plain language: "binary classification of cell state," "AUROC," "cells from 8 donors — cells from the same donor must never straddle train and test." The wizard maps her donor constraint to a group-disjoint split and adapts the constitution's vocabulary to her domain (no "lite" fork — same 52 sections, her words). → *Record:* `autoresearch_setup_answers.json`; generated `CLAude.md` constitution (52 sections, 4 domain-adapted); folder skeleton.
2. **Private-dataset onboarding** → ingests her `.h5ad` export locally, hashes it, runs the leakage-taxonomy checklist [D5]. It flags her uploaded preprocessing script: normalization was fit on the *full* matrix — the preprocessing-on-full-data leakage subtype from the 294-paper census [D5], the exact mistake she made alone last Sunday. The flag explains the error in two sentences and offers the fixed ordering. She accepts. This is the dignity beat: the system caught the error a lab ML engineer would have caught, without an ML engineer, without shame — it's a checklist item, not a verdict on her. → *Record:* dataset SHA-256 in campaign manifest; checklist report with the flagged-and-fixed item.
3. **Split builder** → constructs `GroupKFoldSplit` on donor ID (the wizard's mapping of her constraint); `validate_no_overlap()` passes; the timeline/grouping diagram shows all 8 donors assigned wholly to one side of each fold. → *Record:* split config + zero-overlap verification stamp in the manifest.
4. **Composite metric designer** → default `min(val_AUROC, test_AUROC) − λ·below-threshold-folds`, explained in one paragraph; she keeps the default; SHA-256 fingerprint frozen. → *Record:* metric definition + fingerprint hash.
5. **BYOK routing** → she pastes her university-account API key; router preset "economy" (mid-tier for everything but Diagnose). Spend meter projects ~$4/day (P10, A12; [B18][B22]). → *Record:* routing config (key stays in her OS keychain — never in the record).

## Friday, 9:50 pm — she goes home

6. **SOTA catalog + Ground step** → seeds `sota_catalog.yaml` with cited tabular/single-cell backbones; Gate 2 verifies every citation against live indexes before any is usable [D35] (P3, P5). → *Record:* catalog file with verified-citation entries.
7. **Runner + 7-step loop, overnight** → each experiment: Diagnose (per-fold weakness on donors 3 and 7) → Ground (cited) → Hypothesize (one change + predicted ΔAUROC) → Execute (fixed-duration) → Analyze → Document → Checkpoint. Gate 1 re-verifies split geometry pre-launch each time; **CheckpointManager** writes state every 5 minutes and after every run (P8). → *Record:* one `experiment_log.jsonl` row per trial — kept and discarded — with seed, config, gate verdicts; `reasoning_annotations.json` blobs; checkpoint markdown refreshed each cycle.

## Saturday, 8:30 am — phone check

8. **Campaign dashboard (mobile view)** → 23 trials, 3 kept; champion AUROC 0.84; per-donor heatmap shows donor 7 still weak. **Stall detector** is quiet — improvement rate is healthy. → *Record:* none (read-only view of the ledger).
9. **Steering console** → she types one sentence: "Donor 7 is the oldest sample — check whether batch-effect correction from the literature helps." Constitution §49–52 obliges the next Hypothesize to incorporate it. → *Record:* steering log entry, timestamped, linked from every descendant experiment.

## Sunday, 7 pm — the artifact

10. **Trial-count-corrected acceptance gate** → at trial 61, a +0.004 candidate is discarded: below the deflated threshold at N=61 (P2 [D6][D9]). The rejection card explains why in one sentence. Priya learns the concept from the product, not a textbook. → *Record:* ledger row with rejection reason "below deflated threshold at N=61."
11. **Multi-seed confirmation** → the final champion candidate re-runs across 5 seeds; all improve; spread ±0.006 (P6 [D11][D12]). → *Record:* confirmation batch results appended to the candidate's ledger entry.
12. **Winner archiver** → champion bundle: model, config, code snapshot, 14-section audit report (calibration, per-donor breakdown, limitations, deployment checklist), cited reasoning blob, automatic reproduction log. → *Record:* `winners/` bundle, fully self-contained.
13. **One-command reproduction** → Monday, her PI's skepticism ("I won't accept a black box") meets `ascent reproduce` on the PI's own machine: fingerprints match. The methods section of her paper cites the split protocol, the trial count (61, 4 kept), and the seed-confirmation spread. The audit trail *is* the anti-black-box (personas card 1). → *Record:* reproduction attestation appended to the bundle.

**What Priya never had to do:** write Python, design a split, check a citation, remember to log a discard, or trust a number she couldn't trace. **What the system never did:** publish for her, interpret the biology, or claim the result "proves" anything — the bundle shows evidence; judgment stays hers.

## Recommended next

Package beats 1–5 as the recorded 20-minute onboarding demo for the community channel (personas: card 1 is harvested via content, not sales). The single scripted moment that converts her cohort is beat 2 — the leakage catch on her own preprocessing — because it demonstrates the system supplying the method she lacks, on her data, before any metric exists.
