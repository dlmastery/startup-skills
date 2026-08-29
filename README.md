# startup-skills

Claude Code skills that take a **vague startup idea** and produce a complete, research-grounded founder artifact pack — the kind of package you'd walk into YC or a deep-tech VC meeting with.

## See a finished pack, live

**→ [dlmastery.github.io/startup-skills](https://dlmastery.github.io/startup-skills/)**

| | |
|---|---|
| **[Ascent — the landing site](https://dlmastery.github.io/startup-skills/runs/autoresearch/)** | What the pipeline ships: positioning, proof, pricing, commissioned hero art |
| **[The pack reader](https://dlmastery.github.io/startup-skills/runs/autoresearch/pack.html)** | All 64 documents rendered — Mermaid diagrams drawn, tables formatted, every source tag chipped |
| **[Run README](https://github.com/dlmastery/startup-skills/blob/main/runs/autoresearch/README.md)** | The pack's front door: reading paths by audience, visual index, honest completeness |
| **[Coverage audit](https://github.com/dlmastery/startup-skills/blob/main/runs/autoresearch/audit/COVERAGE.md)** | Row-by-row status against the artifact manifest |

One run, generated end to end: **64 documents · 113 rendered visuals · 12 HTML infographics**, every claim traced to a source tag.

The system runs in five modes, in order:

1. **Grill** (`grill-me`) — a YC-partner-grade interrogation that turns a vague idea into a sharp founder brief. Nothing else runs until the brief exists.
2. **Research** (`startup-research`) — deep web research: landscape, competitors, capability table, survey. Every later artifact must cite this layer; no invented market numbers.
3. **Generate + critique** — seven generator skills, each with a strict output contract:
   `startup-strategy`, `startup-product`, `startup-tech`, `startup-narrative`, `startup-validation`, `startup-financials`, `startup-visuals`.
   Every generated phase passes through `startup-critic` — a three-persona red-team panel (skeptical deep-tech VC, domain PhD, elite operator) with up to three revise rounds — before its gate counts as passed.
4. **Audit** (`startup-audit`) — coverage audit against the artifact manifest, generation of anything missing, and a final pack index. This replaces the "I don't see it, regenerate" loop with a deterministic checklist.
5. **Ship** (`startup-website`) — turns the finished pack into a deployable landing site: hero, problem/solution, feature showcase, social proof scaffold, waitlist CTA — copy drawn from the pack, never invented fresh.

`startup-forge` orchestrates all of the above end-to-end. `startup-ingest` optionally folds in external sources (YouTube talks, PDFs, podcasts) keeping only *novel* angles.

## Run it end to end (any coding agent)

Point any file-reading, web-searching, file-writing agent at this repo. Nothing here is Claude-specific.

**Step 0 — clone and orient.**
```bash
git clone https://github.com/dlmastery/startup-skills && cd startup-skills
```
Tell your agent: *"Read AGENTS.md, then drive the pipeline in skills/startup-forge/SKILL.md for this idea: <your one-liner>."* If your harness loads skills natively, `/startup-forge <idea>` is equivalent.

**Step 1 — grill the idea into a brief.** `grill-me` interrogates the one-liner YC-partner style and writes `runs/<slug>/BRIEF.md` plus `ASSUMPTIONS.md`. **Nothing else may run until the brief exists.** If nobody is available to answer, the skill grills the *material* instead and logs every open question.

**Step 2 — research.** `startup-research` produces the six-file evidence layer with dated citations. This phase needs real web search; if your harness cannot search, stop here rather than fabricate it. Everything downstream cites this layer.

**Step 3 — generate the seven layers.** strategy → product → tech → narrative → validation → financials, each against its skill's output contract. Phases 3–7 depend on 0–2 but not on each other, so run them in parallel if your harness supports subagents.

**Step 4 — critique each phase before it counts.** `startup-critic` runs a three-persona red team (skeptical deep-tech VC, domain PhD, elite operator), up to three revise rounds. A phase is not done because it exists; it is done when it survives this.

**Step 5 — visuals.** `startup-visuals` writes the manifest first, then HTML infographics, then images if an image tool exists. Copy the builders rather than writing your own:
```bash
cp templates/build_docmanifest.js templates/build_docimages.js runs/<slug>/visuals/
cd runs/<slug> && node visuals/build_docmanifest.js && node visuals/build_docimages.js
```
Re-run both after **every** batch — they are the reconciliation step and they print what is still unillustrated.

**Step 6 — audit.** `startup-audit` diffs the run against `references/artifact-manifest.md`, generates what is missing, and writes `runs/<slug>/README.md` — the pack's front door. Done means the manifest is satisfied, never memory.

**Step 7 — ship the site.**
```bash
cp templates/site.css templates/build_site.js runs/<slug>/
cd runs/<slug> && node build_site.js        # builds index/product/evidence/pricing/about
```
Then publish (this makes the repo's contents public — confirm first):
```bash
touch .nojekyll
gh api -X POST repos/<owner>/<repo>/pages -f "source[branch]=main" -f "source[path]=/"
gh api repos/<owner>/<repo>/pages --jq .html_url
```
Record the live URL in the run README, in `audit/COVERAGE.md`, **and in this repo's root README** — the last one is the one that gets forgotten.

**Commit at every step, not at the end.** These runs are long and get cut off mid-phase; uncommitted work is indistinguishable from work never done.

## What you get

| | |
|---|---|
| ~64 documents | brief, research, strategy, product, tech, narrative, validation, financials |
| 100+ visuals | HTML infographics, Mermaid diagrams, rendered images, text-free hero art |
| A reader | `pack.html` — every document rendered, diagrams drawn, sources chipped |
| A site | five pages plus the reader, publishable to GitHub Pages |
| An audit | `audit/COVERAGE.md`, row by row against the manifest |

## What the pack enforces

- **Every number** cites `research/sources.md` or carries an `(assumption: basis)` tag.
- **Every artifact** opens with an orientation block: what it is, why it exists, how to read it, what it depends on.
- **Mechanism over adjective** — no claim rests on "powerful" or "seamless".
- **Gaps are named, not hidden** — the run README states an honest completion count.
- **No fabricated traction** — no invented logos, testimonials or metrics, ever.

## Install (harness-agnostic)

The skills use the standard `SKILL.md` format (agentskills.io spec) and are written to run under **any** coding agent:

- **Claude Code** — install the repo as a plugin (it ships `.claude-plugin/plugin.json`), or copy/symlink `skills/*` into `~/.claude/skills/` or `<project>/.claude/skills/`.
- **Codex / Copilot CLI / Gemini CLI** — copy/symlink `skills/*` into `~/.agents/skills/` (the cross-runtime skills directory they all recognize).
- **Grok Build / Antigravity / anything else** — clone the repo and point the agent at it; `AGENTS.md` tells any agent how to drive the pipeline by reading the skill files directly, no skill loader required.

Whatever the harness: keep the repo intact rather than cherry-picking single skill folders — `references/` (quality bar, artifact manifest, grill question bank) is the shared contract every skill cites.

## Output contract

Each run writes to `runs/<slug>/` in the current project:

```
runs/<slug>/
  README.md                        # the front door: pitch, reading paths, embedded visuals,
                                   #   honest completion count (written phase 0, refreshed every phase)
  BRIEF.md  ASSUMPTIONS.md          # grill-me
  research/                        # startup-research
  strategy/                        # startup-strategy
  product/                         # startup-product
  tech/                            # startup-tech (incl. Mermaid architecture diagrams)
  narrative/                       # startup-narrative
  validation/                      # startup-validation (Steve Blank board set)
  financials/                      # startup-financials
  visuals/                         # startup-visuals (HTML infographics + image prompts)
  ingest/                          # startup-ingest (optional)
  audit/COVERAGE.md                # startup-audit
  website/                         # startup-website (deployable landing site)
```

The full file-by-file manifest lives in `references/artifact-manifest.md` — it is the audit skill's checklist.

## Design principles (why this pack is shaped this way)

- **Grill before generate.** Generic inputs produce generic packs. The brief is the single source of truth every generator reads.
- **Research before claims.** Market sizes, competitor facts, and capability statements must trace to `research/sources.md` or be marked `(assumption)`.
- **Contracts, not vibes.** Each generator specifies its artifact's sections, numbering, and quality bar. Artifacts are numbered, priority-ranked, span the full user spectrum, and end with a "recommended next" decision.
- **Deterministic visuals.** Diagrams are Mermaid/HTML (verifiable text), and raster-image needs become *prompt files* for external generators — never a flaky "hope the image rendered" loop.
- **Audit closes the loop.** Done is defined by the manifest, not by memory.
