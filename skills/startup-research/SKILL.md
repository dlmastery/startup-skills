---
name: startup-research
description: Use when a startup run needs its research layer — market landscape, competitor teardown, technology capability survey — or when the user asks "what else exists like this", "survey this space", "who are the competitors", "research this market". Requires runs/<slug>/BRIEF.md (run grill-me first if missing).
---

# startup-research

Build the evidence layer every other artifact cites. **Search the live web; do not rely on training memory** for anything dated, priced, funded, or benchmarked — memory is stale and this layer exists to be trusted.

## Method

1. Read `BRIEF.md`. Derive 15–25 search queries across four tracks: (a) direct competitors and their pricing/funding/reviews, (b) adjacent and historical attempts (including dead startups — post-mortems are gold), (c) enabling technology state of the art (papers, benchmarks, model capabilities, cost curves), (d) market structure (size estimates, growth, regulation, buyer behavior).
2. Fan out searches in parallel (subagents where available). Prefer primary sources: company pricing pages, papers, filings, credible analyst reports. Note the date of every fact.
3. Synthesize into the four artifacts below. Conflicting numbers? Report the range and both sources.

## Writes → `runs/<slug>/research/`

1. **`landscape.md`** — every relevant approach to the problem, ordered nearest-to-farthest from the brief's mechanism: direct products → adjacent products → research systems → classical/manual techniques → emerging hybrids. Per entry: what it is, how it maps onto the brief's core loop, mechanism, strengths, measured limits, and the gap it leaves.
2. **`competitors.md`** — teardown table (Competitor · Segment · Mechanism · Pricing · Funding/stage · Traction signal · Where it wins · Where it fails mechanistically) followed by a positioning read: the two axes that matter in this space and where the white space sits. Include "do nothing" and the dominant workaround as competitors.
3. **`capability_table.md`** — the enabling-technology state of the art as of today's date: Capability · Best current system/model · Measured performance · Cost trend · Fit to the brief's mechanism · Gap. This is what makes "why now" defensible.
4. **`survey.md`** — a dated mini survey paper: abstract, classical foundations, taxonomy of approaches, enabling technology, evaluation methods and benchmarks, evidence for/against the core mechanism, risks, open questions. This is the scientific grounding the whitepaper and PRD will cite.
5. **`sources.md`** — numbered list: `[S1] <title> — <url> — <date accessed> — <what it supports>`. Every fact in files 1–4 carries an `[Sn]` tag.

## Quality bar (see references/quality-bar.md)

- A named real system beats a category ("Khanmigo" beats "AI tutors").
- Post-mortems of failed attempts are required, not optional — "why did previous tries die" is the most investor-checked question.
- Unfindable facts are stated as unfindable; a marked gap beats a confident guess.

## Red flags

- Writing market numbers from memory. Citing zero dead startups. A landscape where nothing comes close (you haven't searched hard enough). No dates on facts.
