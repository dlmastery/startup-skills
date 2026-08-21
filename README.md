# startup-skills

A self-contained Grok skill pack. Give it any startup idea. It produces a complete founder artifact pack for that idea: research, PRD, white paper, technical VC memo, journeys, features, techniques, market, Steve Blank boards, system diagrams, UX collages, and dense infographics — then a coverage audit that fills gaps.

No other repository is required. Every noun comes from a `params.yaml` you (or the agent) write for *this* idea.

## What a complete run contains

- landscape survey + latest-capability table + dated survey paper
- superset PRD grounded in domain science
- mechanistic 10x white paper (full-spectrum users, every modality)
- founder framing + technical VC writeup (scenarios, not vaporware)
- e2e journeys for the underserved edge, the beachhead, and the elite edge
- deep-tech use cases as real product screens
- 20-feature then 50-priority feature lists, illustrated
- three waves of 50 domain techniques + decision tree + technique↔feature matrix
- TAM/SAM/SOM, competitive matrix, neo-alternative teardown
- full Steve Blank / *Startup Owner's Manual* board set
- 10 system-design diagrams
- 4-up UX collages in product chrome
- VC decision boards, buyer boards, spectrum boards, future-press
- optional external-source ingest that keeps only **novel** angles
- a coverage audit that lists missing artifacts and then generates them

## How to run

1. Point Grok at this directory (clone, or add as a Grok skill root).
2. Say: `Run /startup-skills for this startup:` and paste a description (or a PDF / transcript).
3. The agent writes `params.yaml` from your description, then walks the 16 phases in `GROK.md`.

To resume: `continue` / `next image` / `keep going`. It picks up at the first unfinished catalog type.

## Layout

```
GROK.md                         # spine — read first
SKILL.md                        # pack trigger
params.schema.yaml              # every substitutable field
templates/params.yaml           # empty form
examples/kiln.params.yaml       # fictional filled example (shape only)
skills/                         # one skill per phase
references/                     # catalogs, visual spec, pipeline
```

## Fidelity rule

Do not thin the pipeline. The failure mode this pack exists to prevent is missing images and missing Blank / system / VC boards.
