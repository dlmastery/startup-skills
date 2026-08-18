# Visual spec — locked from the 295 source images

Inspected directly (not guessed): `img_001` product chrome, `img_011` live-session tutor UI, `img_050` knowledge-graph parent board, `img_140` founder-market-fit cream board, `img_225` indigo multi-agent architecture, `img_270` white competitive-advantage pyramid, `img_295` competitor-structural-gap board.

## Two families

### A. Product chrome (UX, techniques-in-action, day-in-life)

- Looks like a shipped app. Named `{visual.product_ui_name}`.
- Dark or light academic UI. Real content in the subject domain (equations, diagrams, live annotation), not lorem.
- Recurring widgets that prove the core loop is real:
  - live state gauge (cognitive load / risk / confidence — domain-swap)
  - preferred-modality / preference chips
  - knowledge-boundary / state graph (mastered / in-progress / frontier)
  - live voice or copilot strip
- 4-up collages: four distinct use cases, same type language, readable at slide size.
- 5-up technique collages: five labeled techniques, each a real screen, not an icon.

### B. Founder / VC / system boards (Blank, market, architecture, proof)

- Landscape. Extreme density. Every panel has a noun, a number or mechanism, and a consequence.
- Backgrounds:
  - **Cream / off-white** for Blank, founder-market-fit, personas, funnels (`img_140` family).
  - **Pure white** for competitive pyramids, structural-gap vs incumbents, trust (`img_270`, `img_295` family). Late source run (EX157+) demanded white background, professional consumption.
  - **Deep indigo + teal glass** for multi-agent / closed-loop / knowledge-graph architecture (`img_225`, `img_050` family).
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
High-fidelity product UI screenshot of {visual.product_ui_name}, dark academic SaaS, real {domain} content on screen, live widgets for {core_loop} state.
```

## Generation rules

1. Call the image tool in the same turn as the prompt. Batch 1–4.
2. Inspect the result. Fail if: prompt text is visible, layout is a single icon, words are soup, promised panels are missing.
3. One regenerate. If still wrong, rebuild as HTML/CSS (imagine skill: exact text/structure → code, not the image model) and capture.
4. Stable filename: `images/{type_id}.png`.
5. After EX157-style user pressure, prefer **pure white** for any board meant for investors or parents.

## Density test

A competent stranger should extract ≥8 discrete facts from one image in 20 seconds. If they only get a vibe, the image is a poster. Redo it.
