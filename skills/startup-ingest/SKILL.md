---
name: startup-ingest
description: Use when the user feeds an external source into an existing startup run — a YouTube talk, podcast, PDF, article, transcript, or competitor announcement — and wants its insights folded into the pack. Trigger on "use this video/PDF/talk", "add insights from this link", "what does this change". Requires an existing runs/<slug>/ pack.
---

# startup-ingest

Fold an external source into the pack, keeping **only what is novel**. The failure mode this skill prevents: every new podcast re-generating artifacts that restate what the pack already says.

## Process

1. **Acquire.** Fetch/read the source (transcript, PDF text, article). If unfetchable, ask the user to paste the transcript; never summarize a video from its title.
2. **Extract claims.** List the source's concrete claims, data points, frameworks, and named examples — with timestamps/pages.
3. **Novelty filter (the core step).** For each claim, grep the existing pack: already covered → drop (note where); covered but contradicted → flag as a conflict; genuinely new → keep. Target output is short; a 90-minute talk typically yields 3–8 truly novel angles.
4. **Integrate.** For each kept item, name the artifact it strengthens and apply a surgical edit (add the sourced point, update the matrix row, add the risk). Add the source to `research/sources.md`. Conflicts: present both sides to the user with a recommendation — never silently overwrite research with a podcast quote.

## Writes → `runs/<slug>/ingest/`

- **`SOURCE_<n>.md`** — per source: citation & date · novel claims kept (with pointer to where each was integrated) · claims dropped as duplicates (one line each) · conflicts raised. If nothing was novel, write `SOURCE_<n>.md` saying exactly that — a null result is a valid result.

## Quality bar

- Novel-only: the dropped-as-duplicate list should usually be longer than the kept list.
- Every kept claim lands as an edit in a real artifact, not just a note in the ingest file.
- Charisma ≠ evidence: a speaker's confident number still gets tagged with the source's authority level.

## Red flags

- Regenerating whole artifacts because a talk was inspiring. Ingesting without the novelty grep. Letting a podcast quote overwrite sourced research. Summarizing a video you couldn't actually read.
