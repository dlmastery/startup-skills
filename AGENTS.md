# startup-skills — agent instructions

This repository is a harness-agnostic skill pack that turns a vague startup idea into a complete, research-grounded founder artifact pack. It works with any coding agent that can read files, search the web, and write files — Claude Code, Grok Build, Gemini / Antigravity CLI, Codex, Copilot CLI, or a plain LLM session pointed at this directory.

## If your harness loads skills natively

Each directory under `skills/` is a standard skill (`SKILL.md` with `name`/`description` frontmatter, per the agentskills.io spec). Load them and let the descriptions trigger. Entry point for a full run: `startup-forge`.

## If your harness does NOT load skills natively

Treat each `skills/<name>/SKILL.md` as an instruction file and follow it literally:

1. Read `skills/startup-forge/SKILL.md` — it defines the pipeline and gates.
2. Follow its phase table: for each phase, open the named skill file and execute its contract.
3. Shared contracts every skill cites live in `references/`:
   - `references/quality-bar.md` — the seven properties every artifact must satisfy (binding).
   - `references/artifact-manifest.md` — the file-by-file definition of "done".
   - `references/grill-question-bank.md` — the founder-interrogation quiver.
4. All output goes to `runs/<slug>/` in the working directory.

## Capability adaptation (do not skip a phase because a tool is missing)

- **Web search**: required for `startup-research`. If your harness cannot search, stop and tell the user research needs a search-capable session — do not fabricate the research layer.
- **Subagents/parallelism**: optional. Where a skill says "dispatch in parallel when supported", run sequentially otherwise.
- **Structured question UI**: optional. `grill-me` falls back to numbered questions in chat.
- **Text-to-image**: optional. `startup-visuals` always produces HTML/Mermaid + prompt files; render `visuals/images/*.png` only if you have an image tool, and verify by file existence, never by claim.
- **Diagram rendering**: diagrams are Mermaid source in markdown; they need no renderer to be complete.

## Hard rules (all harnesses)

1. No artifact before `runs/<slug>/BRIEF.md` exists (run `grill-me` first).
2. Every number is cited to `research/sources.md` or tagged `(assumption)`.
3. Generated phases pass the `startup-critic` loop before they count.
4. "Done" = `startup-audit` reports full coverage against `references/artifact-manifest.md`, never memory.
