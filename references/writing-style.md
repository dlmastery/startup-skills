# Writing style — ASD-STE100 Simplified Technical English

Write every sentence of prose in a run in ASD-STE100 (Simplified Technical English, Issue 8). This rule binds. It applies to all artifacts, the run README, site copy, image captions, infographic labels, and commit messages for the run. The critic loop and the audit check it.

**Why this standard.** Generated text has a signature. The signs are long sentences with three clauses, dashes inside a sentence, passive verbs, hedge words, and pairs like "not X, but Y". Readers recognise the signature in one paragraph and stop.

STE is a controlled language from the aerospace industry. The industry built it so that a maintenance technician can read one sentence once and act on it. Its rules remove the signature mechanically.

## 1. The rules that bind

STE Part 1 has nine sections of rules. The pack binds these:

| # | STE section | Rule | Check |
|---|---|---|---|
| 1 | Words | Use each word with one meaning only. Use the STE approved word, not a synonym. Use the same word for the same thing in every artifact. | Same noun for the same thing across the run. |
| 2 | Words | Technical names come from `BRIEF.md` §Vocabulary, `research/sources.md`, and the approved terms in §3 below. Do not invent a name when the founder already has one. | Every domain noun appears in one of the three lists. |
| 3 | Noun phrases | No noun cluster of more than three nouns. Split the cluster or add "of". | `CLUSTER` in the linter. |
| 4 | Verbs | Use only these verb forms: infinitive, imperative, simple present, simple past, past participle as an adjective, and future with "will". | `ING` and `MODAL` in the linter. |
| 5 | Verbs | Do not use the -ing form of a verb. Exception: the -ing word is part of a technical name ("machine learning", "pricing"). | `ING` in the linter. |
| 6 | Verbs | Use the active voice. Name the actor. Use the passive only when the actor is unknown. | `PASSIVE` in the linter. |
| 7 | Verbs | Approved modal verbs are "can", "must", and "will". Do not use "should", "would", "could", "may", or "might". | `MODAL` in the linter. |
| 8 | Sentences | Descriptive sentences have at most 25 words. Procedural sentences have at most 20 words. Write to a target of 12 to 18 words. The cap is a ceiling, not a target. | `LONG` in the linter. |
| 9 | Sentences | One topic per sentence. One instruction per sentence. If "and", "but", "which", or "while" joins two clauses that each have a verb, split the sentence at that word. | Read. |
| 10 | Sentences | Do not omit words to make a sentence shorter. Keep articles, "that", and the subject. | Read. |
| 11 | Sentences | Use a vertical list for more than three parallel items. If a paragraph names more than three competitors, examples, or steps in a row, it becomes a numbered list with one item per sentence. | `PARA` in the linter catches the long form. |
| 12 | Procedures | Write instructions in the imperative. Write the condition before the instruction: "If the source is a press release, tag the number as founder-reported." | Read. |
| 13 | Paragraphs | One topic per paragraph. The first sentence states the topic. At most six sentences per paragraph. Write to a target of three to five. | `PARA` in the linter. |
| 14 | Paragraphs | Use a one-sentence paragraph at most once in ten paragraphs. | Read. |
| 15 | Punctuation | A dash introduces an item in a vertical list. A dash does not appear inside a sentence. Use a period or a colon. | `DASH` in the linter. |
| 16 | Punctuation | Do not use semicolons. Write two sentences. | `SEMI` in the linter. |
| 17 | Punctuation | Use parentheses only for a source tag or an assumption tag. | Read. |
| 18 | Practice | Do not use slang, marketing words, or rhetorical questions. | `SLOP` in the linter. |

STE has a dictionary of about 900 approved general words. The pack does not ship the dictionary. Apply the intent: choose the short common word.

| Write | Not |
|---|---|
| use | utilise, leverage, harness |
| start | commence, kick off, initiate |
| before | prior to |
| to | in order to |
| some | a number of |
| show | demonstrate, showcase, illustrate |
| study | delve into, explore |
| let, allow | unlock, enable, empower |
| help | facilitate, foster |
| about | approximately, in the region of |
| because | due to the fact that, owing to |
| if | in the event that, should |

## 2. Generated-text tells, and the rule that removes each one

Each row names a pattern that marks a document as generated. The fix column is the STE rule.

| Tell | Example | STE rule | Fix |
|---|---|---|---|
| Dash in the middle of a sentence | "PoC numbers ship self-deflated — raw Sharpe alongside DSR — or they do not ship." | 15 | Split into sentences. Use a colon for a list. |
| Three clauses in one sentence | 39-word sentence with two dashes and a subordinate clause | 8, 9 | One topic per sentence. Cut at 25 words. |
| Semicolon chain | "X is true; Y follows; Z is the result." | 16 | Three sentences. |
| "Not X, but Y" / "It's not about X, it's about Y" | "This is not a feature, it is a moat." | 9, 18 | State Y. Delete X. |
| Rhetorical question | "What does this mean for founders?" | 18 | Write the statement. |
| Sentence that starts with an -ing verb | "Leveraging the corpus, the agent..." | 5 | "The agent uses the corpus to..." |
| Passive with no actor | "Value is delivered through..." | 6 | "The scheduler delivers value by..." |
| Hedge adverbs | "arguably", "essentially", "crucially", "notably", "importantly" | 1, 18 | Delete the adverb. If the claim is weak, cite the source or tag the assumption. |
| Weak modals | "This could enable teams to..." | 7 | "This lets teams..." or "Teams can..." |
| Adjective stacks | "a robust, scalable, seamless platform" | 1, 18 | Name the mechanism. See quality-bar property 1. |
| Marketing verbs | leverage, unlock, empower, elevate, harness, foster, delve, navigate, supercharge | 1 | Use the plain verb from §1. |
| Set-piece openers | "In today's fast-moving landscape...", "At its core..." | 18 | Delete the opener. Start with the topic sentence. |
| Noun stacks | "AI research agent orchestration layer" | 3 | "the layer that orchestrates research agents" |
| Boilerplate orientation | "This document describes the go-to-market strategy." | quality-bar 0 | Name the decision this venture makes with the document. |
| Synonym rotation | "the platform", "the system", "the product", "the tool" for one thing | 1, 2 | One name from `BRIEF.md` §Vocabulary. |

## 3. Approved technical terms

Technical names are exempt from the approved-word rule and from the -ing rule. Three lists define them for a run:

1. `BRIEF.md` §Vocabulary. The founder's own nouns for the core loop, the unit of value, the session, and the outcome metric.
2. Proper names in `research/sources.md`: companies, products, papers, benchmarks, people.
3. The standard startup and finance terms in this table. The linter exempts them.

| Area | Terms |
|---|---|
| Revenue and cost | ARR, MRR, CAC, LTV, payback period, churn, NRR, gross margin, contribution margin, unit economics, pricing |
| Capital | burn, runway, seed, Series A, pre-money, post-money, dilution, cap table, funding, use of funds |
| Market | TAM, SAM, SOM, ICP, beachhead, wedge, moat, positioning, go-to-market, land and expand, sales cycle |
| Product | PoC, MVP, onboarding, activation, retention, conversion, cohort, pipeline, roadmap |

A word that is on none of these lists follows the general rules. When the founder uses two names for one thing, `grill-me` picks one and records it in §Vocabulary.

## 4. Where the rules relax

- **Quoted text.** A founder quote, a source quote, or a customer quote appears verbatim. Mark it with quotation marks and a source tag.
- **Headings and slide titles.** Fragments pass. The 25-word cap still applies.
- **Table cells.** Fragments pass. Full sentences in cells follow all rules.
- **Code, Mermaid, JSON, and shell.** Not prose. The linter skips fenced blocks.
- **`narrative/founder_story.md`.** First person passes. All other rules apply.
- **Taglines and positioning statements.** At most 12 words. All other rules apply.

There is no other exemption. "The sentence needs the dash for rhythm" is not an exemption.

## 5. Example, before and after

Before, from a generated positioning artifact. One paragraph, three sentences, 39 words in the longest, three dashes. It sits in a fence so the linter skips it:

```text
Ascent's differentiator is a trust claim, self-destroying if oversold. §4 enforces the consequence:
PoC numbers ship self-deflated — raw Sharpe alongside the DSR over the true trial count — or they do
not ship. Skip that and the first quant to compute the deflation publishes it, taking the rigor
brand, the one asset a fork cannot copy, with them.
```

After, in STE. Six sentences, longest 19 words, no dashes, same claims, same evidence:

> Ascent's differentiator is a trust claim. An oversold trust claim destroys itself. Section 4 sets the rule: each PoC number ships with its raw Sharpe ratio and its DSR over the true trial count. A PoC number without both does not ship. If Ascent skips this rule, the first quant who computes the deflation will publish it. That quant then owns the rigor brand, which is the one asset a fork cannot copy.

The second version is 12 words longer and has the same density. Length is not the cost. Clause depth is the cost.

## 6. The linter

`templates/check_ste.js` checks the mechanical rules. It does not check meaning. Run it on every artifact before the critic loop and again in the audit:

```
node templates/check_ste.js runs/<slug> --vocab runs/<slug>/BRIEF.md
node templates/check_ste.js runs/<slug>/strategy/positioning.md --vocab runs/<slug>/BRIEF.md --top 20
```

Pass criteria per artifact:

1. `DASH`, `SEMI`, and `LONG` are zero. These three have no false positives worth an exception.
2. `PARA` is zero.
3. `ING`, `PASSIVE`, `MODAL`, `CLUSTER`, and `SLOP`: open each hit. Keep a hit only when the word is a technical name from §3 or sits inside a quotation. Rewrite every other hit.

A clean linter run is necessary and not sufficient. The critic still reads for rule 9, 10, 12, and 14, which need a reader.

## 7. How this interacts with the quality bar

STE does not lower the bar on density or evidence. It changes the shape of the sentence, not the content. Property 1 (mechanism over adjective) and property 7 (dense, not long) still apply. An STE sentence that names no mechanism fails property 1. A dense paragraph of 40-word sentences fails this standard. Both must pass.
