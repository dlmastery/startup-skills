---
name: startup-coverage-audit
description: >
  Use when finishing a startup run, when the user says "what did we miss",
  "missing artifacts", "go over the entire pack", or before claiming the pack
  is done. Trigger on /startup-coverage-audit and the mandatory pre-pack gate.
---

# startup-coverage-audit

This phase is mandatory.

## Steps

1. List every path in `references/artifact-catalog.md`. Exists on disk? yes/no.
2. List every **required** type id in `references/infographic-types.md`. File under `{output_dir}/images/`? yes/no. Skip S21–S24 unless `external_sources` is non-empty. Skip S17 unless there are misses.
3. Walk the text already written in this run. Any major claim with no illustration → add to Missing-N.
4. Write `15_audit/COVERAGE.md`:

```
# Coverage
Date:
PASS/FAIL text artifacts: k / expected
PASS/FAIL required image types: k / N
Missing text:
Missing images (tiered):
  Tier 1 architecture
  Tier 2 journeys
  Tier 3 Blank
  Tier 4 market
  Tier 5 feature/technique synthesis
  Tier 6 proof & trust
Priority draw order:
```

5. Generate every miss at professional-grade, white background, elite systems + domain + operator. S17 is this redo series.
6. Re-count. FAIL until both catalogs are complete.
7. Refresh `{output_dir}/15_audit/QUEUE.md` for `startup-infographics`.

Do not declare the project complete from a recap. Beautiful technique collages are not a founder pack.
