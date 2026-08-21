---
name: startup-prd
description: >
  Use when writing the superset PRD for a startup artifact run — best-of-best
  cutting-edge features, principled, full-spectrum users. Trigger on /startup-prd
  and "PRD for this product."
---

# startup-prd

The PRD is a **superset** — not an MVP spec.

## Required sections

1. Executive summary and vision
2. Goals and non-goals
3. Target users and personas (`params.personas`, full spectrum)
4. Domain-science grounding (non-negotiable) — `{domain_science}`
5. Core feature set (superset) — later refined by `startup-features`
6. Technical architecture requirements — `{deep_tech}`
7. UX principles (dignity for `spectrum.low_end`, ceiling for `spectrum.high_end`)
8. Safety, ethics, governance
9. Evaluation and success metrics
10. Phased roadmap
11. Open questions and risks

## Rules

- One product, one engine. No segregated "lite" mode that reduces capability for the underserved edge (`spectrum.low_end.dignity_rule`).
- Domain **suitability** is first-class, not "the model answered."
- Write `02_prd/PRD.md`. No images.
