# Infographic types — generalized from all 295 source images

Every type must exist for a new run. Series types (S*) produce N images. Singleton types produce one.

Source map: `image-exchange-map.md`. Do not skip a type because the new domain "doesn't have a parent dashboard" — every domain has a buyer dashboard.

## S-series (multi-image)

| ID | Count | What to draw | Source imgs | Phase |
|---|---|---|---|---|
| S01 | 4 | Deep-tech use cases as **live product screens** (one mechanism each) | 001–004 | deeptech |
| S02 | 6 | 20-feature collage set (product chrome, 3–4 features per frame) | 005–010 | features |
| S03 | 7 | 50-feature priority product screens (importance order) | 011–017 | features |
| S04 | 20 | Transcript-coverage illustrations — one board per major text claim already written | 018–037 | infographics |
| S05 | 10 | Buyer-convince + market-metrics boards | 038–051 | market |
| S06 | 8 | Audience boards: user / operator / founder / investor (2 each) | 052–070 | infographics |
| S07 | 10 | Named neo-alternative cards (one program/competitor each) + white-space map | 103–115 | market |
| S08 | 8 | YC-density tranche (four, then four) — stubborn-user / cutting-edge technique packs, 10 techniques per board | 116–137 | techniques |
| S09 | 8 | VC decision set (see V01–V08) | 138–145 | infographics |
| S10 | 16 | Blank / Owner's Manual set (see B01–B16) | 146–162 | blank |
| S11 | 10 | System-design set (see A01–A10) | 165–173 | system-design |
| S12 | 8 | UX 4-up live-product collages | 174–181 | ux |
| S13 | 8 | Narrative / cinematic technique screens | 182–189 | techniques |
| S14 | 10 | Technique-wave-2 collages (5 techniques each) | 190–201 | techniques |
| S15 | 11 | Technique-wave-3 collages (5 techniques each) | 202–212 | techniques |
| S16 | 12 | Remainder PhD-technique screens + decision-tree neighbors | 213–224 | techniques |
| S17 | 15 | Missing-25 professional-grade redo (white, elite) | 225–239 | coverage-audit |
| S18 | 7 | User-spectrum / gradation boards (not two poles) | 240–246 | infographics |
| S19 | 6 | Human-centered / complementary-strengths / trust / flourishing metrics | 247–252 | external-ingest |
| S20 | 8 | Raised-demand / "scientific calculator principle" / cognitive partnership | 253–260 | external-ingest |
| S21 | 5+4+4+4 | Talk-derived novel boards (only non-duplicates) | 261–276 | external-ingest |
| S22 | 10 | Trust / equity / knowledge-OS / role-shift / window-to-build | 277–286 | external-ingest |
| S23 | 5 | Epistemic / living knowledge / durable-model vs generic retrieval | 287–291 | external-ingest |
| S24 | 2 | Pedagogy-shift + orchestration-of-environments | 292–293 | external-ingest |
| S25 | 2 | Incumbent-product structural-gap (named real products, searched) | 294–295 | market |

If `external_sources` is empty, still produce S19–S20 from first principles (human complementarity, raised task complexity). S21–S24 scale with the number of sources.

## Singleton boards (must exist even if a series also covers the idea)

### Buyer / parent analog

| ID | Title pattern |
|---|---|
| P01 | Buyer mobile + real-time alerts |
| P02 | Operator / teacher-analog copilot (not a lesson generator — moment-of-highest-human-value) |
| P03 | Skills & career capital from one intensive cycle |
| P04 | Day-in-the-life (low-end) 6–8 screens |
| P05 | Day-in-the-life (high-end) 6–8 screens |
| P06 | Buyer weekly insight report |
| P07 | Why-this-works-for-my-person storyboard (before/after + mechanism) |

### VC decision (source EX52)

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

### Steve Blank (source EX63–81)

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

### System design (source EX87–97)

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
| X07 | Accessibility / UDL / underserved-modulation layer |
| X08 | "Why this is not vaporware" stack + eval loops |
| X09 | Lean canvas (if B01 is BMC, X09 is the lean one-pager) |
| X10 | Strategic positioning map (depth × personalization, or domain analog) |
| X11 | TAM / SAM / SOM + beachhead |
| X12 | Competitive landscape matrix (named comps, unique axes) |
| X13 | Future-press newspaper (category-defining outcome — labeled speculative) |
| X14 | Use-case diagram + visual timeline |
| X15 | User-spectrum taxonomy (more than two poles) |

## Count check

A full run is **≥ 120 distinct image files**. The source had 295 because it redrew misses and ingested many talks. A new run may land 120–200 if regenerate-churn is low. Landing 20 is a thin pack. Fail the audit.
