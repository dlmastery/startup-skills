---
name: startup-external-ingest
description: >
  Use when the user drops YouTube/talk/paper URLs into a startup run and wants
  new infographic prompts that are not duplicates of the existing pack.
  Trigger on /startup-external-ingest, "prompts from this video", "novel only."
---

# startup-external-ingest

Replay source EX178–203.

## Steps

1. Fetch or read the source (transcript, notes, or user-pasted takeaways).
2. Extract candidate boards (usually 5–10).
3. **Dedup against the existing run.** Drop anything already in `infographic-types.md` or already drawn. Source EX199: "new things only — things not thought about earlier — very important."
4. Rewrite survivors so they are about **this** `{product_name}` (source EX180: not generic video recap).
5. Show the prompt list. Then generate 2–5 images in the same turn if the user said "generate."

## Default novel angles (if the talk is about AI + the domain)

Use these only when they are actually new for this run:

- What becomes scarce when the old scarce thing is abundant
- Human × machine complementary-strengths matrix
- "More human" stack (precision engine → cognition → identity → relationships)
- Trust / HITL deep dive
- Measuring flourishing, not completion
- Raised task complexity (scientific-calculator principle, domain-swapped)
- Equity: equalizer vs amplifier
- Strategic window before the interface commoditizes
- Incumbent product on a different plane (productivity copilot vs operating system)

## Images

S19–S24 as applicable. Always white/cream, extreme density, product-named.

Write `14_external/SOURCE_{n}.md` with: url, takeaways, kept prompts, dropped-as-duplicate prompts.
