# Infographic types

Every **required** type must exist for a new run. Series types (S*) produce N images. Singleton types produce one.

Filename map: `image-index.md`. Do not skip a type because the new domain "doesn't have a parent dashboard" — every domain has a **buyer** dashboard.

## Required S-series

| ID | Count | What to draw | Phase |
|---|---|---|---|
| S01 | 4 | Deep-tech use cases as **live product screens** (one mechanism each) | deeptech |
| S02 | 6 | 20-feature collage set (product chrome, 3–4 features per frame) | features |
| S03 | 7 | 50-feature priority product screens (importance order) | features |
| S04 | 20 | Coverage illustrations — one board per major text claim already written | infographics |
| S05 | 10 | Buyer-convince + market-metrics boards | market |
| S06 | 8 | Audience boards: user / operator / founder / investor (2 each) | infographics |
| S07 | 10 | Named neo-alternative cards (one program/competitor each) + white-space map | market |
| S08 | 8 | High-density technique packs, ~10 techniques per board, stubborn-user cases | techniques |
| S09 | 8 | VC decision set (V01–V08) | infographics |
| S10 | 16 | Blank / Owner's Manual set (B01–B16) | blank |
| S11 | 10 | System-design set (A01–A10) | system-design |
| S12 | 8 | UX 4-up live-product collages | ux |
| S13 | 8 | Narrative / cinematic technique screens | techniques |
| S14 | 10 | Technique-wave-2 collages (5 techniques each) | techniques |
| S15 | 11 | Technique-wave-3 collages (5 techniques each) | techniques |
| S16 | 12 | Remainder expert-technique screens + decision-tree neighbors | techniques |
| S18 | 7 | User-spectrum / gradation boards (not two poles) | infographics |
| S19 | 6 | Human-centered / complementary-strengths / trust / flourishing metrics | infographics |
| S20 | 8 | Raised-demand / "better instrument, harder task" / cognitive partnership | infographics |
| S25 | 2 | Incumbent-product structural-gap (named real products, searched) | market |

## Conditional series

| ID | When | What |
|---|---|---|
| S17 | Coverage audit found misses | Professional-grade redo of every miss (white, elite) |
| S21–S24 | `external_sources` is non-empty | Talk-derived **novel-only** boards |

If `external_sources` is empty, still produce S19–S20 from first principles. Do not fail the audit for S21–S24.

## Required singletons

### Buyer / operator

| ID | Title pattern |
|---|---|
| P01 | Buyer mobile + real-time alerts |
| P02 | Operator copilot (highest-human-value moments — not a content mill) |
| P03 | Skills & career capital from one intensive cycle |
| P04 | Day-in-the-life (low-end) 6–8 screens |
| P05 | Day-in-the-life (high-end) 6–8 screens |
| P06 | Buyer weekly insight report |
| P07 | Why-this-works-for-my-person storyboard (before/after + mechanism) |

### VC decision

| ID | Title |
|---|---|
| V01 | Capital efficiency & use of funds (18-month, milestone-linked) |
| V02 | Go-to-market engine & CAC dynamics |
| V03 | Founder-market fit & team advantage (asymmetric insight) |
| V04 | Risk matrix & explicit mitigations |
| V05 | Path to $50–100M ARR / scalability model |
| V06 | Comparable companies & exit landscape |
| V07 | Early traction / pilot dashboard (real numbers or clearly labeled projections) |
| V08 | Pricing power & willingness-to-pay |

### Steve Blank

| ID | Title |
|---|---|
| B01 | Business Model Canvas |
| B02 | Customer Discovery → Validation progress map |
| B03 | Riskiest assumptions / hypothesis testing board |
| B04 | Get–Keep–Grow funnel |
| B05 | Problem–Solution fit evidence |
| B06 | Value Proposition Canvas |
| B07 | Pivot or persevere decision framework |
| B08 | Early customer archetype cards |
| B09 | Market type classification (existing / new / resegmented / clone) + implications |
| B10 | MVP experiment board |
| B11 | Customer-discovery insight synthesis (verbatim must-have language) |
| B12 | Stage-gate map (Discovery → Validation → Creation → Company building) |
| B13 | Current vs desired customer journey (dual if `gtm.dual_customer`) |
| B14 | Sales roadmap / channel strategy by segment |
| B15 | Key metrics by customer-development stage |
| B16 | Learning & pivot history log |

### System design

| ID | Title |
|---|---|
| A01 | End-to-end data & value pipeline |
| A02 | Real-time adaptive closed loop |
| A03 | Integration & ecosystem architecture |
| A04 | Multi-agent (or multi-service) orchestration + conflict resolution |
| A05 | Durable model / knowledge-graph schema + versioning |
| A06 | Observability, evaluation & safety monitoring |
| A07 | Human-in-the-loop & escalation |
| A08 | Multi-tenant & scalability |
| A09 | Model serving & routing (frontier / cache / fallback / on-device) |
| A10 | Security, privacy & compliance |

### Synthesis / proof

| ID | Title |
|---|---|
| X01 | Full architecture (agents + durable model + safety envelope) |
| X02 | Master technique-application decision tree |
| X03 | Technique-to-feature mapping matrix |
| X04 | 50-feature Now/Next/Later roadmap |
| X05 | Top-20 highest-leverage screens on one page |
| X06 | Evidence & gains projection with confidence bands |
| X07 | Accessibility / underserved-modulation layer |
| X08 | "Why this is not vaporware" stack + eval loops |
| X09 | Lean canvas (if B01 is BMC, X09 is the lean one-pager) |
| X10 | Strategic positioning map (domain axes) |
| X11 | TAM / SAM / SOM + beachhead |
| X12 | Competitive landscape matrix (named comps, unique axes) |
| X13 | Future-press newspaper (category-defining outcome — labeled speculative) |
| X14 | Use-case diagram + visual timeline |
| X15 | User-spectrum taxonomy (more than two poles) |

## Count check

A full run is **≥ 120 distinct required image files**. Conditional series can push higher. Landing 20 is a thin pack. Fail the audit.
