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

The system has four modes, run in order:

1. **Grill** (`grill-me`) — a YC-partner-grade interrogation that turns a vague idea into a sharp founder brief. Nothing else runs until the brief exists.
2. **Research** (`startup-research`) — deep web research: landscape, competitors, capability table, survey. Every later artifact must cite this layer; no invented market numbers.
3. **Generate + critique** — seven generator skills, each with a strict output contract:
   `startup-strategy`, `startup-product`, `startup-tech`, `startup-narrative`, `startup-validation`, `startup-financials`, `startup-visuals`.
   Every generated phase passes through `startup-critic` — a three-persona red-team panel (skeptical deep-tech VC, domain PhD, elite operator) with up to three revise rounds — before its gate counts as passed.
4. **Audit** (`startup-audit`) — coverage audit against the artifact manifest, generation of anything missing, and a final pack index. This replaces the "I don't see it, regenerate" loop with a deterministic checklist.
5. **Ship** (`startup-website`) — turns the finished pack into a deployable landing site: hero, problem/solution, feature showcase, social proof scaffold, waitlist CTA — copy drawn from the pack, never invented fresh.

`startup-forge` orchestrates all of the above end-to-end. `startup-ingest` optionally folds in external sources (YouTube talks, PDFs, podcasts) keeping only *novel* angles.

## Quick start

```
# from any project directory with these skills installed
/startup-forge An AI copilot for independent pharmacies
```

or run phases individually:

```
/grill-me <your idea>          # produces runs/<slug>/BRIEF.md
/startup-research              # produces runs/<slug>/research/
/startup-product               # PRD, features, journeys ...
/startup-audit                 # coverage check + the run's README.md front door
```

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
