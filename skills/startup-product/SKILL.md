---
name: startup-product
description: Use when a startup run needs the product layer — PRD, feature lists, user journeys/scenarios, or UX specification — or when the user asks "write the PRD", "list the features", "user journeys", "end-to-end scenario". Requires BRIEF.md and research/ (run grill-me and startup-research first if missing).
---

# startup-product

Generate the product layer: a superset PRD grounded in the domain's science, ranked feature lists, and full-spectrum user journeys.

## Writes → `runs/<slug>/product/`

1. **`PRD.md`** — versioned, dated. Sections:
   - Executive summary & vision (the closed core loop named in the domain's own verbs, e.g. Sense → Decide → Act → Measure → Remember).
   - Goals and explicit **Non-Goals** (what this deliberately is not).
   - Target users & personas — full spectrum, one adaptive system, no stigmatizing separate tracks; reference `strategy/personas.md`.
   - **First-principles grounding (non-negotiable):** the 6–10 domain-science principles this product obeys (cite `research/survey.md`), with the rule *"every major feature must map to one or more principles."*
   - Core feature set (superset), organized by phase of the core loop, each feature tagged with its principle(s).
   - Data & learning flywheel: what the system remembers per user and how it compounds.
   - Oversight, safety, privacy, and compliance requirements for this domain.
   - Success metrics: outcome metrics first (the domain's real "did it work" measure), then engagement, then business.
2. **`features_flagship.md`** — the 20 highest-leverage features, numbered, each: one-line name → mechanism → principle it maps to → the visible product moment (what the user literally sees). Close with the integration argument: why the power is the closed loop, not any single feature.
3. **`features_prioritized.md`** — 50 features in strict priority order in Now / Next / Later tiers with dependencies noted. Each row: # · Feature · Mechanism · User value · Depends on · Effort (S/M/L).
4. **`journeys/`** — four end-to-end narrative scenarios, each a named persona with a concrete profile, a session goal, and phase-by-phase narration where **every beat names the system component acting** and what gets written to the user's durable record:
   - `edge_low.md` — the least-supported, most-constrained user succeeding with dignity.
   - `beachhead.md` — the core paying use case, first session to habitual use.
   - `edge_high.md` — the elite/power user being genuinely stretched, not bored.
   - `day_in_life.md` — one ordinary day across all touchpoints (including the buyer's view when payer ≠ user).
5. **`ux_spec.md`** — the 8–12 key screens: purpose, primary action, information hierarchy, states (empty/loading/error), and the micro-interactions that carry the product's feel. Text spec — visual collages belong to startup-visuals.

## Quality bar

- Feature ↔ principle mapping is the credibility engine: a feature that maps to no principle gets cut or the principle list was wrong.
- Journeys are cinematic but mechanical: a skeptic reading `edge_low.md` should be able to list which components fired in what order.
- Non-goals are real renunciations, not humble-brags.

## Red flags

- Features phrased as adjectives ("smart", "seamless"). A journey where "the AI just knows". A PRD with no non-goals. Prioritization that's secretly chronological.
