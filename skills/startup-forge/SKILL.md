---
name: startup-forge
description: Use when the user wants the complete founder artifact pack generated from a startup idea end-to-end — trigger on /startup-forge, "generate all startup artifacts", "full founder pack", "YC pack", "investor pack", or when a startup idea is pasted with a request for everything. For a single phase, use the individual startup-* skill instead.
---

# startup-forge

Orchestrates the full pipeline: vague idea → grilled brief → deep research → all artifacts → coverage audit → website. Each phase is a skill with its own contract; this skill sequences them and enforces the gates.

**Read `references/quality-bar.md` first. It binds every phase.**

## Pipeline

| # | Phase | Skill | Gate before next phase |
|---|-------|-------|------------------------|
| 0 | Brief | grill-me | `BRIEF.md` + `ASSUMPTIONS.md` exist and are concrete |
| 1 | Research | startup-research | `research/sources.md` has real, dated citations |
| 2 | Strategy | startup-strategy | market type + positioning declared |
| 3 | Product | startup-product | PRD + features + journeys done |
| 4 | Tech | startup-tech | whitepaper + diagrams + technique system done |
| 5 | Narrative | startup-narrative | one-pager + VC memo + deck done |
| 6 | Validation | startup-validation | Blank board set done |
| 7 | Financials | startup-financials | pricing + revenue build + risk matrix done |
| 8 | Visuals | startup-visuals | visual manifest complete, all HTML infographics render |
| 9 | Audit | startup-audit | COVERAGE.md shows zero missing required artifacts **and README.md renders the pack (A55 contract, every link resolves)** |
| 10 | Website | startup-website | site builds locally |

Every phase gate from 2 onward includes the **critic loop**: run startup-critic on the phase's artifacts (three personas, up to three revise rounds) before marking the gate passed. Research (phase 1) is critiqued implicitly by every downstream citation; grill output is critiqued by the founder's own corrections.

## Rules

1. **Never skip phase 0.** If the idea is a one-liner, grill first. If the user is unavailable (autonomous run), grill the *material*: answer the question bank from the provided sources, log everything else in ASSUMPTIONS.md, and proceed.
2. **Research is upstream of all claims.** Phases 2–8 cite `research/` files; a claim with no source gets an `(assumption)` tag.
3. **Parallelize where independent.** Phases 3–7 all depend on 0–2 but not on each other — dispatch them as parallel subagents when the runtime supports it, each reading `BRIEF.md` + `research/` + this pack's references. Visuals (8) waits for 3–7; audit (9) waits for everything.
4. **Checkpoint after each phase.** One-paragraph status to the user: what was produced, the single most interesting finding, what's next. Long runs must be resumable: on "continue", read `audit/COVERAGE.md` (or the manifest) to find the first unfinished artifact and resume there.
   - **Commit and push at every checkpoint, unasked.** Not at the end of the run — at the end of each phase, and again after any batch of generated artifacts lands. These runs are long and get cut off mid-phase by session limits; work that is committed survives, work that is not is simply gone, and the next session cannot tell the difference between "never generated" and "generated and lost". Write a real commit message naming what was produced and what is still open.
   - **State counts from the glob at every checkpoint**, never from memory of what you generated. Re-derive "X of Y" by listing files immediately before reporting. This applies to the run README and `audit/COVERAGE.md` too: both go stale the moment new artifacts land, and a front door advertising last week's counts is worse than one advertising none.
   - **Commit at swarm boundaries, never mid-flight.** When subagents are writing in parallel, `git add -A` will snapshot a file another process is still writing and abort with "short read while indexing" — a partial write, not a clean failure. Wait for every agent to report, then stage once. The commit-often rule and parallel generation are both right; the sequencing between them is what needs care.
   - **Write `runs/<slug>/README.md` at the end of phase 0 and refresh it at every checkpoint** — a stub front door from the start, grown as phases land. Never leave the run root bare between phases: sessions get interrupted mid-run, and an interrupted run with no README is indistinguishable from a failed one. Phase 9 finalizes this file; it does not create it.
5. **Domain vocabulary everywhere.** Use the nouns from `BRIEF.md` §Vocabulary, never placeholder nouns like "the product" or leftover nouns from other domains.
6. **Done = manifest satisfied**, not "feels complete". The run ends only when startup-audit reports full coverage and `README.md` presents the pack with every link resolving.
7. **Decide the routine calls yourself; escalate only what changes the work.** Asking the founder to adjudicate something a stylesheet already handles — an asset's pixel dimensions, a filename, a font fallback — spends their attention and stalls the run. Put a question to them only when two readings would produce materially different artifacts (scope of a manifest row, which renderer to standardise on, whether to publish publicly). Otherwise pick the sensible default, note it in one clause, and keep building.
8. **Never present pre-existing work as newly produced.** A run directory usually contains artifacts from earlier sessions. Before reporting what "was generated", check provenance — `git log --diff-filter=A -- <path>` names the commit and session that added it. Say plainly what this session made, what it found already there, and what it changed. Claiming inherited artifacts is the fastest way to lose the founder's trust in every other number you report.

## Resume triggers

"continue", "keep going", "next" → resume at first unfinished manifest row. Never regenerate finished artifacts unless asked.
