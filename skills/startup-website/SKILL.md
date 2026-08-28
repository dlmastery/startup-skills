---
name: startup-website
description: Use when a startup run's pack is complete (or nearly) and the user wants the public-facing website — trigger on "build the website", "landing page", "launch site", or as the final ship phase of startup-forge after the audit passes. Requires narrative/, strategy/, and product/ artifacts to draw copy from.
---

# startup-website

Turn the pack into a deployable marketing site. Iron rule: **the site arranges the pack, it does not invent** — every headline, stat, and feature claim on the site must exist in a pack artifact. The pack is the copy deck.

## Source mapping (where each section's content comes from)

| Section | Source |
|---|---|
| Hero headline + subhead | `strategy/positioning.md` statement + `narrative/one_pager.md` one-line |
| Problem ("the world today") | whitepaper §1 frictions, sharpest sourced stat |
| Solution + how it works | core loop from PRD; 3-step mechanism, not feature soup |
| Feature showcase | top 6–9 of `features_flagship.md`, with their "visible product moment" lines |
| Who it's for | persona cards spanning the spectrum (edge-low, beachhead, edge-high) |
| Why now / why us | `narrative/founder_story.md` + why-now from BRIEF |
| Social proof scaffold | placeholders wired for real quotes; pre-launch: the future-press vision line, clearly framed as vision |
| Pricing | `financials/pricing.md` tiers (or "early access" if pre-pricing) |
| CTA | waitlist/early-access form (provision a real backend when integrations are available; else a mailto/form-service stub with a TODO) |
| Footer | contact, privacy stance from PRD's compliance section |

## Process

1. Read the sources above; extract the copy verbatim-or-tightened (tightening may cut words, never add claims).
2. Choose stack: default **Next.js App Router** project in `runs/<slug>/website/` when the environment supports it; else a single self-contained `index.html`. Use visuals from `visuals/` (HTML infographics can embed directly; rendered `images/*.png` where they exist).
3. Design with intent — load the frontend-design skill if available. The site's look must express the brand personality implied by the domain (a pediatric-health product and a devtools product do not share an aesthetic). Responsive, fast, dark/light aware, real favicon, OG tags filled from the one-pager.
4. Verify: build/serve locally, check every section renders, every internal anchor works, no lorem ipsum, no unsourced claim. Screenshot for the user when browser tooling is available.
5. Offer (don't auto-run) deployment: Vercel/static host, with the command ready.

## Quality bar

- A visitor should be able to answer "what is this, for whom, why believe it" in 10 seconds — the hero carries the positioning statement's payload in plain words.
- Zero fabricated social proof: no fake testimonials, fake logos, or fake metrics. Pre-launch honesty converts better than invented traction and is non-negotiable.
- Copy sounds like the founder's voice (founder_story), not SaaS-template speak ("Supercharge your workflow" is banned).

## Red flags

- Claims on the site that appear in no pack artifact. Fake testimonial cards "to fill space". Shipping without a local render check. A hero that names the category but not the mechanism.
