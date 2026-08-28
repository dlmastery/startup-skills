---
name: startup-critic
description: Use after any startup artifact is drafted and before its phase is declared complete, or when the user asks to "critique", "red-team", "stress test", or "make this stronger". Runs on one artifact or a whole phase. Part of every startup-forge phase gate.
---

# startup-critic

Adversarial refinement loop: three elite critic personas attack the draft, the generator revises, up to three rounds. The pack's floor quality comes from the generators' contracts; its ceiling comes from this loop.

## The panel (all three, every round)

1. **The skeptical deep-tech VC** — has seen 400 decks this year. Attacks: unsourced numbers, mechanism-free claims, missing competitors, ignored risks, "wrapper" smell, anything that pattern-matches to the last hype cycle. Signature question: *"Says who, and why won't {incumbent} do this in a quarter?"*
2. **The domain PhD** — 20 years in this field. Attacks: misused terminology, overclaimed evidence, cherry-picked citations, effect sizes that don't replicate, mechanisms that violate how the domain actually works, missing seminal work. Signature question: *"Would this survive review by people who actually build/study this?"*
3. **The elite operator-founder** — has scaled a company in an adjacent space. Attacks: unbuildable scope, GTM fantasy, unit economics that ignore reality, journeys no real user would follow, teams that can't be hired, timelines that ignore integration pain. Signature question: *"What breaks in month three of actually executing this?"*

Run each persona as a genuinely separate pass (separate subagents when available — a critic sharing the author's context pulls its punches). Each critic reads: the artifact, its owning skill's contract, `references/quality-bar.md`, and the relevant `research/` files.

## Verdict format (per critic, per round)

```
VERDICT: pass | revise
Top issues (max 5, ranked):
  1. [severity: fatal|major|minor] <specific quote or section> — <what's wrong> — <what would fix it>
Strongest element: <one line — protect this in revision>
```

Critics must quote the artifact — an issue that can't point to a line isn't an issue. Critics may NOT expand scope ("also add a section on…") unless the owning contract requires that section.

## The loop

1. Round 1: all three critics review the draft in parallel.
2. Revise: fix fatal and major issues; minor issues at author's judgment (log skipped ones with a reason at the bottom of the artifact as an HTML comment).
3. Rounds 2–3: only previously-failing critics re-review, checking their own issues plus regressions.
4. Stop when all three pass, or after round 3 — then ship with a `<!-- critic: unresolved -->` note listing what remains, honestly. Never loop past three rounds; diminishing returns are real and the audit will catch anything structural.

## Quality bar for the critics themselves

- Specific beats sweeping: "the CAC in §4 has no channel basis" beats "financials feel weak".
- A critic that passes everything on round 1 wasn't reading — the first round of any substantial artifact yields issues.
- Fatal = a claim an investor could falsify in one search, a broken mechanism, or a contract section missing entirely.

## Red flags

- Running critics in the same breath as authorship ("as I wrote it, I checked it"). Vague verdicts. Scope creep disguised as critique. A fourth round. Deleting the artifact's strongest element while fixing a minor issue.
