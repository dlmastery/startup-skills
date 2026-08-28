---
name: startup-narrative
description: Use when a startup run needs investor- and public-facing storytelling — one-pager, technical VC memo, pitch deck, future press release — or when the user asks "pitch this", "convince a technical VC", "write the deck", "one-pager". Requires BRIEF.md, research/, and ideally strategy/ + tech/ (run prerequisites first if missing).
---

# startup-narrative

Generate the persuasion layer. Persuasion here = evidence arranged in the right order, in the founder's voice. Everything asserted must already exist in research/strategy/product/tech files — this layer arranges, it does not invent.

## Writes → `runs/<slug>/narrative/`

1. **`one_pager.md`** — single page: one-line, problem (with the sharpest sourced stat), solution mechanism, why now, traction/evidence, market (bottom-up number), team edge, the ask. Every sentence load-bearing.
2. **`vc_memo.md`** — the technical investor memo, teardown-then-build structure:
   - **Thesis** — 3–5 sentences: what everyone else gets wrong and what this architecture does about it.
   - **Why existing approaches are insufficient** — category-by-category demolition (pull from `research/competitors.md` and `research/landscape.md`): named systems, measured limits, benchmark numbers where they exist, the structural reason each category can't close the gap.
   - **Core architecture** — numbered components (from `tech/`), each with its role in one sentence.
   - **Concrete operating examples** — 2–3 compressed scenarios from `product/journeys/` proving the loop end-to-end.
   - **Why this can win where others haven't** — the recombination argument + moat + why-now.
   - **Honest risks** — the top 3 with mitigations. A memo without risks reads as naive.
3. **`pitch_deck.md`** — 12–15 slides in markdown, one section per slide: slide title (the takeaway as a full sentence, e.g. "Retention doubles when diagnosis precedes instruction", never a label like "Market"), 3–5 bullet payload, and a `visual:` line naming the supporting visual from `visuals/visual_manifest.md`. Standard arc: cold-open problem → status quo failure → insight → product (demo moment) → mechanism/deep tech → market → business model → GTM → competition → traction/evidence → team → ask & use of funds.
4. **`future_press.md`** — Amazon-style working-backwards press release dated 5–8 years out: the headline outcome achieved, customer quotes that sound like the personas, the metric the world now uses because this company existed. Plus a short "how we got here" timeline. This is the vision artifact — vivid but internally consistent with the pack.
5. **`founder_story.md`** — the founder-market-fit narrative: the lived insight, the unfair advantage, why this founder wins the next 10 years of this problem. Written in first person, usable verbatim in applications and intros.

## Quality bar

- Slide titles are claims, not categories.
- The VC memo must survive the "so what / says who" test on every paragraph: each claim has a mechanism and a source tag.
- Voice: confident, specific, zero hype adjectives — the evidence does the selling.

## Red flags

- New numbers appearing here that exist nowhere in research/ or financials/. A deck with a slide titled "Market". A memo with no named competitors and no risks section.
