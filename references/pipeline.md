# Pipeline — observed from the source 203-exchange run

The source user did not ask for "a pitch deck." They walked a methodical deepening loop. Replay this loop, parameterized.

## Phase map (source exchanges → generic phase)

| Source EX | What they actually asked | Generic phase |
|---|---|---|
| 1 | Similar techniques to a seed video, including NotebookLM | research — landscape of analogs |
| 2 | Tabular form + latest model capabilities | research — capability table |
| 3 | Survey paper as of now | research — survey |
| 4 | PRD of best-of-best superset, principled, full-spectrum | prd |
| 5 | White paper: 10x faster/better, every caliber, every modality | whitepaper |
| 6 | Pitch framing as legendary founder (they then rejected slides) | narrative — founder |
| 7 | Not a slideshow — writeup for deeply technical VCs, concrete scenarios, not vaporware | narrative — VC |
| 8–9 | E2E scenario for the underserved edge (then a more specific persona) | scenarios |
| 10 | Deep-tech use cases with visuals of how it looks | deeptech + first product screens |
| 11 | 20 features in a collage | features-20 |
| 12 | Executive function, discipline, curiosity, gamification, doing-good | features — motivation/EF cluster |
| 13 | 50 features, priority order, same visual fashion | features-50 |
| 14 | Explore tier-1 diagnostic algorithms | deeptech — algorithms |
| 15–20 | Illustrate the *entire transcript*; don't miss; then the gaps | coverage-driven illustration |
| 21–22 | What convinces the buyer; competitive landscape; market metrics | market + buyer |
| 23–27 | Finish missing; parent mobile; teacher copilot; career capital | audience boards |
| 28 | Deep paper on industrial-trap + path forward | whitepaper addendum |
| 29–34 | Named neo-alternatives, one dense card each, then force the missing ones | neo-alternatives |
| 35–47 | What other infographics do students / operators / VCs / founders need; four at a time; YC density | audience + YC tranche |
| 48–51 | Ten cutting-edge techniques per board, stubborn-user teaching | technique boards |
| 52–62 | What VCs need to write a check; then generate; force every miss | VC decision set |
| 63–81 | *Startup Owner's Manual* (Blank) — full remaining set, one image each | blank set |
| 82–86 | Timeline + use-case diagrams; future-press newspaper IPO | narrative artifacts |
| 87–97 | Systems-thinking diagrams of the company | system-design set |
| 98–106 | UX screenshot collages, 4 use cases, live product chrome | ux set |
| 107–118 | Narrative/cinematic techniques as product screens | techniques — narrative wave |
| 119–129 | Fifty more techniques; five per collage | techniques — wave 2 |
| 130–140 | Fifty more, behavioral + learning theory; five per collage | techniques — wave 3 |
| 141 | Full decision tree of when/what technique, in what order | decision tree |
| 142–154 | PhD techniques not yet discussed; illustrate | techniques — remainder |
| 155–170 | Audit entire transcript; Missing-25; professional-grade redo | coverage audit |
| 171–177 | Spectrum / gradations of users, not two poles | spectrum boards |
| 178–186 | Ingest a talk; prepend novel human-centered boards; then draw | external ingest |
| 187–203 | More talks → novel-only prompts → images; competitor-product teardown | external + competitor-compare |

## Operating rules the source user enforced

1. **Images are the product of most phases, not decoration.** After EX10 almost every request is "draw it."
2. **Never miss.** If you promised ten and shipped two, the next three exchanges are "where are the rest."
3. **Regenerate until visible.** "I see a prompt but no image" is a hard fail. Call the image tool.
4. **Four at a time, then next four.** Do not dump 25 prompts. Do not dump 0 images.
5. **Coverage audit is a phase.** EX155 is "go over the entire transcript and list the most important missing 25." Then draw them at professional-grade (white background, elite).
6. **External ingest is additive and de-duplicated.** EX199: "not duplicates to existing material — new things only."
7. **Competitor products get a structural-gap board**, not a feature laundry list (EX203: Claude for Teachers vs ChatGPT for Teachers vs the product OS).
8. **Reject thin slides.** EX6 asked for a deck; EX7 cancelled it in favor of a technical writeup.

## Parallelism

Safe to parallelize after params exist:

- research / prd / whitepaper / narrative / scenarios (text)
- then lock visual spec via first deeptech screens
- then features + techniques + market + blank + system-design + ux (image-heavy, shared visual language)

Not safe to parallelize: coverage audit (must see everything) and pack (must see audit PASS).
