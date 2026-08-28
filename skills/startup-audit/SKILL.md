---
name: startup-audit
description: Use when a startup run may be incomplete — before declaring a pack done, when the user asks "what's missing", "audit coverage", "finish the pack", "continue", or after any interrupted run. Also the mandatory final gate of startup-forge before the website phase.
---

# startup-audit

Deterministic completeness check: compare what exists on disk against `references/artifact-manifest.md`, generate what's missing, then index the pack. This skill is why "done" never depends on memory or optimism.

## Process

1. **Inventory.** Glob `runs/<slug>/` and diff against the manifest. Three states per row: present · missing · stub (exists but under ~40 substantive lines or missing its contract sections — open and check, don't trust file size alone).
2. **Spot-check quality.** Sample 3–5 present artifacts against `references/quality-bar.md`: unsourced numbers? adjective-claims? missing "recommended next" endings? Mermaid that doesn't parse? HTML that doesn't render? Log failures as `fix` rows.
3. **Write `audit/COVERAGE.md`** — the full manifest table with Status per row, then the gap list grouped in priority tiers:
   - Tier 1 core mechanism & architecture · Tier 2 end-to-end journeys · Tier 3 validation boards · Tier 4 market & positioning · Tier 5 feature/technique synthesis · Tier 6 proof & trust (safety, evidence, "not vaporware").
   - End with an explicit **priority draw order** (the exact sequence to generate next) and effort estimates.
4. **Close the gaps.** Work the draw order: invoke the owning skill for each missing/stub/fix row. Update COVERAGE.md as rows close. On "continue" after interruption, re-run step 1 and resume — never regenerate finished work.
5. **Write `INDEX.md`** at the run root once coverage is clean: reading-order guide per audience (60-second version → investor path → engineer path → operator path), one-line description per artifact, generation date, and the pack's top 5 sharpest claims with their source tags.

## Quality bar

- The audit is adversarial: its job is to find gaps, and a first audit of a long run that finds zero gaps is suspect — re-check stubs.
- Every gap names its owning skill and contract section, so closing it is mechanical.
- INDEX.md is written last, from what actually exists — never aspirationally.

## Red flags

- Declaring done from memory instead of the glob. Counting a stub as present. Padding COVERAGE.md with optional rows marked missing to look thorough. Writing INDEX.md before gaps are closed.
