# The quality bar — what "beats an elite founder's own pack" means

Every generator skill in this pack must satisfy these nine properties. They are checkable, not aspirational. The audit skill spot-checks them.

## 0. Every artifact opens by saying what it is and why it exists

Immediately under the H1, before any section, argument, table or figure, every artifact carries a short **orientation block** — four labelled lines, roughly 80–120 words total:

- **What this is** — one sentence naming the artifact's job in plain words.
- **Why it exists** — the decision this document informs, and what goes wrong if it does not exist. Name the failure, not the benefit.
- **How to read it** — where to look first, and what a skeptic should attack.
- **Depends on / feeds** — the upstream artifacts whose conclusions it inherits, and the downstream ones that consume it, as links.

This is listed as property zero because it is the one a generator most reliably skips. A document that opens on "## 1. Channel decision" assumes the reader already knows why they are reading it — which is true only for the author. The orientation block is what turns sixty files into a pack rather than a folder, and it is what lets any single artifact be opened cold, out of order, from a search result or a shared link.

Boilerplate fails this bar. "This document describes the go-to-market strategy" restates the title and informs nothing. The test: **the "why it exists" line must name a decision or a failure that is specific to this venture**, not to documents of this type.

## 1. Mechanism over adjective

Banned as load-bearing content: "revolutionary", "cutting-edge", "seamless", "powerful", "game-changing" — any claim whose only support is an adjective. Every "better/faster/cheaper" claim must name the **mechanism** that produces it and the **evidence** behind the mechanism.

- Weak: "Our AI delivers dramatically better outcomes."
- Strong: "Recursive prerequisite probing finds the learner's true knowledge boundary, so instruction lands only at optimal difficulty — eliminating the ~50% of practice time spent on already-known or inaccessible material (testing-effect and ZPD literature, see research/survey.md §4)."

## 2. Every number has a source or a flag

Market sizes, growth rates, competitor metrics, effect sizes, pricing points: each traces to an entry in `research/sources.md`, or carries an explicit `(assumption: <basis>)` tag. A pack with invented numbers is worse than a pack with fewer numbers.

## 3. Teardown before build

Before presenting the startup's approach, demolish the existing alternatives *category by category*, naming real systems and their measured limits. Credibility is earned by demonstrating you understand why everything else falls short — then the architecture reads as the obvious recombination.

## 4. Full-spectrum users, one system

Cover the low-support edge, the mainstream beachhead, and the elite/power edge of the user spectrum — served by one adaptive system, never bolted-on "special" tiers. Name each edge concretely for this domain.

## 5. Numbered, ranked, decision-forcing

Artifacts use numbered lists and priority ranking, and end with a "Recommended next N" decision — what to build/test/show first and why. An artifact that doesn't force a decision is a report, not a founder artifact.

## 6. Concrete operating examples

Every abstract capability gets at least one named-persona, step-by-step operating example ("Maya, age 11, opens the app…"). Screens, agent handoffs, and data written are described specifically enough that an engineer could start and a skeptic could not call it vaporware.

## 7. Dense, not long

Elite artifacts are information-dense: tables, tiered lists, and tight prose. Delete every sentence that survives deletion without loss. Length is a cost, density is the goal.

## 8. Every run has a front door

Work nobody can find is work nobody did. `runs/<slug>/README.md` exists from the first phase onward and is refreshed at every phase checkpoint — never deferred to the end, because runs get interrupted and a bare directory of sixty files is indistinguishable from a failed run. It embeds the pack's best visuals inline, links every directory, and states the honest completion count including what is still missing. Its contract is A55 in `references/artifact-manifest.md`.

- Weak: sixty excellent artifacts across eight subdirectories, no README, images rendered but never linked.
- Strong: a reader who opens the directory sees the pitch, the three best images, and the reading path for their role — in ten seconds, without opening a subdirectory.
