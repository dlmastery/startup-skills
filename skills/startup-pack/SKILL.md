---
name: startup-pack
description: >
  Use when assembling the final founder pack after coverage audit PASS —
  index, reading order, and file manifest. Trigger on /startup-pack,
  "assemble the pack", "give this to a coding agent."
---

# startup-pack

Only run after `15_audit/COVERAGE.md` says PASS on both catalogs. If it does not, run `startup-coverage-audit` instead.

## Writes

`16_pack/INDEX.md`

```
# {product_name} founder pack
params: ...
audit: PASS
reading order:
  1. VC_WRITEUP
  2. PRD
  3. WHITEPAPER
  4. architecture images X01, A01–A10
  5. journeys + buyer boards
  6. Blank set
  7. market + S25
  8. features + techniques + X02/X03
  9. UX collages
  10. external novel boards (if any)
manifest: path · type · one-line purpose
image count: N
```

Also write `16_pack/MANIFEST.tsv` (`path\tkind\ttype_id\tpurpose`).

This is the handoff a frontier coding agent or a partner can implement from. No new claims. No new images unless audit regresses.
