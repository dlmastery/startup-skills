# startup-skills — agent instructions

This repository is a harness-agnostic skill pack that turns a vague startup idea into a complete, research-grounded founder artifact pack. It works with any coding agent that can read files, search the web, and write files — Claude Code, Grok Build, Gemini / Antigravity CLI, Codex, Copilot CLI, or a plain LLM session pointed at this directory.

## If your harness loads skills natively

Each directory under `skills/` is a standard skill (`SKILL.md` with `name`/`description` frontmatter, per the agentskills.io spec). Load them and let the descriptions trigger. Entry point for a full run: `startup-forge`.

## If your harness does NOT load skills natively

Treat each `skills/<name>/SKILL.md` as an instruction file and follow it literally:

1. Read `skills/startup-forge/SKILL.md` — it defines the pipeline and gates.
2. Follow its phase table: for each phase, open the named skill file and execute its contract.
3. Shared contracts every skill cites live in `references/`:
   - `references/quality-bar.md` — the properties every artifact must satisfy (binding), including **property 0**: every artifact opens with an orientation block saying what it is and why it exists.
   - `references/artifact-manifest.md` — the file-by-file definition of "done", plus the A50 (HTML vs image) and A55 (run README) contracts and the Startup Owner's Manual coverage table.
   - `references/grill-question-bank.md` — the founder-interrogation quiver.
4. Working tooling ships in `templates/` — **copy these, do not rewrite them**:
   - `build_docmanifest.js` — the reader's document list; walks the whole run tree.
   - `build_docimages.js` — artifact→visual map, slug map, and the unillustrated-artifact report.
   - `build_site.js` + `site.css` — the multi-page site shell and design tokens.
5. All output goes to `runs/<slug>/` in the working directory.

## Capability adaptation (do not skip a phase because a tool is missing)

- **Web search**: required for `startup-research`. If your harness cannot search, stop and tell the user research needs a search-capable session — do not fabricate the research layer.
- **Subagents/parallelism**: optional. Phases 3–7 are independent of each other; run them in parallel where supported, sequentially otherwise.
- **Structured question UI**: optional. `grill-me` falls back to numbered questions in chat.
- **Text-to-image**: optional. `startup-visuals` always produces HTML/Mermaid + prompt files. Render `visuals/images/*.png` only if you have an image tool — an image **API called from the shell is strongly preferred** over browser automation, which is blocked at several layers (see the skill's transfer-route notes). Verify by opening the file, never by claim.
- **Diagram rendering**: diagrams are Mermaid source in markdown; they need no renderer to be complete.
- **Publishing**: optional. GitHub Pages from the repo root is the default; it makes repository contents public, so confirm with the user first.

## Hard rules (all harnesses)

1. No artifact before `runs/<slug>/BRIEF.md` exists (run `grill-me` first).
2. Every number is cited to `research/sources.md` or tagged `(assumption)`.
3. Every artifact opens with its orientation block (quality-bar property 0).
4. Generated phases pass the `startup-critic` loop before they count.
5. "Done" = `startup-audit` reports full coverage against `references/artifact-manifest.md`, never memory.
6. **Commit and push at every phase checkpoint, unasked.** Long runs get cut off mid-phase; uncommitted work is indistinguishable from work that was never done.
7. **Report counts from the glob at the moment of reporting**, never from memory of what you generated.
8. **Never present pre-existing artifacts as newly produced.** A run directory often contains work from earlier sessions — check `git log --diff-filter=A -- <path>` before claiming it.
9. **Verify by looking.** A file of the right size in the right place can still be the wrong content; automated checks catch layout, only inspection catches meaning.
10. No fabricated traction — no invented logos, testimonials, quotes or metrics, in any artifact or on the site.
