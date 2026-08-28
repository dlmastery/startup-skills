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
| 9 | Audit | startup-audit | COVERAGE.md shows zero missing required artifacts |
| 10 | Website | startup-website | site builds locally |

Every phase gate from 2 onward includes the **critic loop**: run startup-critic on the phase's artifacts (three personas, up to three revise rounds) before marking the gate passed. Research (phase 1) is critiqued implicitly by every downstream citation; grill output is critiqued by the founder's own corrections.

## Rules

1. **Never skip phase 0.** If the idea is a one-liner, grill first. If the user is unavailable (autonomous run), grill the *material*: answer the question bank from the provided sources, log everything else in ASSUMPTIONS.md, and proceed.
2. **Research is upstream of all claims.** Phases 2–8 cite `research/` files; a claim with no source gets an `(assumption)` tag.
3. **Parallelize where independent.** Phases 3–7 all depend on 0–2 but not on each other — dispatch them as parallel subagents when the runtime supports it, each reading `BRIEF.md` + `research/` + this pack's references. Visuals (8) waits for 3–7; audit (9) waits for everything.
4. **Checkpoint after each phase.** One-paragraph status to the user: what was produced, the single most interesting finding, what's next. Long runs must be resumable: on "continue", read `audit/COVERAGE.md` (or the manifest) to find the first unfinished artifact and resume there.
5. **Domain vocabulary everywhere.** Use the nouns from `BRIEF.md` §Vocabulary, never placeholder nouns like "the product" or leftover nouns from other domains.
6. **Done = manifest satisfied**, not "feels complete". The run ends only when startup-audit reports full coverage and writes `INDEX.md`.

## Resume triggers

"continue", "keep going", "next" → resume at first unfinished manifest row. Never regenerate finished artifacts unless asked.
