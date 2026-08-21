# Visual spec

Lock this language in phase 6 (`startup-deeptech`) and reuse it for the rest of the run.

## Two families

### A. Product chrome (UX, techniques-in-action, day-in-life)

- Looks like a shipped app. Named `{visual.product_ui_name}`.
- Dark or light professional UI. Real content in the subject domain, not lorem.
- Recurring widgets that prove the core loop is real:
  - live state gauge (load / risk / confidence — domain-swap)
  - preference chips
  - state / knowledge graph (mastered / in-progress / frontier)
  - live copilot strip
- 4-up collages: four distinct use cases, same type language, readable at slide size.
- 5-up technique collages: five labeled techniques, each a real screen, not an icon.

### B. Founder / VC / system boards (Blank, market, architecture, proof)

- Landscape. Extreme density. Every panel has a noun, a number or mechanism, and a consequence.
- Backgrounds:
  - **Cream / off-white** for Blank, founder-market-fit, personas, funnels.
  - **Pure white** for competitive pyramids, structural-gap vs incumbents, trust. Prefer white for any board meant for investors or buyers.
  - **Deep indigo + teal glass** for multi-agent / closed-loop / graph architecture.
- Palette: navy, charcoal, muted teal, gold/amber accents. No pastel SaaS, no 3D cartoon people as the hero.
- Title (8–12 words) + subtitle that names the product and the claim.
- Footer strip: 3–6 proof chips + one sentence thesis.
- Comparison boards are **structural** (what plane the incumbent occupies vs the missing OS), not logo soups.

## Prompt skeleton (fill from params)

```
Professional-grade landscape infographic on {bg}. Extremely information-dense, data-rich, precise.
Title: "{TITLE}"
Subtitle: "{one_liner or claim} | {product_name} / {codename}"
{BODY — named boxes, numbers, mechanisms, not adjectives}
Palette: navy / charcoal / muted teal. Elite systems-architect + domain-expert + operator.
No decorative people. No watermark. No prompt-card. The image IS the board.
```

For product chrome, replace the first line with:

```
High-fidelity product UI screenshot of {visual.product_ui_name}, professional SaaS, real {domain} content on screen, live widgets for {core_loop} state.
```

## Generation rules

1. Call the image tool in the same turn as the prompt. Batch 1–4.
2. Inspect the result. Fail if: prompt text is visible, layout is a single icon, words are soup, promised panels are missing.
3. One regenerate. If still wrong, rebuild as HTML/CSS (exact text/structure → code) and capture.
4. Stable filename: `images/{type_id}.png`.
5. Prefer **pure white** for any board meant for investors or buyers.

## Density test

A competent stranger should extract ≥8 discrete facts from one image in 20 seconds. If they only get a vibe, the image is a poster. Redo it.
