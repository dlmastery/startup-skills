# startup-skills

Parameterized Grok skill pack that replays a founder-grade startup artifact factory for **any** startup description.

Extracted from a 203-exchange / 295-infographic build of LessonOrca (AI Probe–Plan–Teach tutor). The source content is edtech. The skills are not.

## What you get

A rerunnable pipeline that, given a startup description, writes the same *shape* of pack:

- landscape survey + latest-capability table + survey paper
- superset PRD grounded in domain science
- mechanistic 10x white paper (full-spectrum users, every modality)
- legendary-founder framing + technical VC writeup (scenarios, not vaporware)
- e2e journeys for the underserved edge, the middle, and the elite edge
- deep-tech use cases as real product screens
- 20-feature then 50-priority feature lists, illustrated
- three waves of 50 domain techniques + decision tree + technique↔feature matrix
- TAM/SAM/SOM, competitive matrix, neo-alternative teardown
- full Steve Blank / *Startup Owner's Manual* board set
- 10 system-design diagrams
- 4-up UX collages in product chrome
- VC decision boards, buyer boards, spectrum boards, future-press
- external-source ingest that keeps only **novel** angles
- a coverage audit that lists missing artifacts and then generates them

## How to rerun

1. Clone this repo (or add it as `.grok/skills` / a Grok project skill root).
2. Point Grok at `GROK.md`.
3. Say: `Run /startup-skills for this startup:` and paste a description (or a PDF / transcript).
4. The agent writes `params.yaml` from your description, then walks the 16 phases.

To resume: `continue` / `next image` / `keep going`. It picks up at the first unfinished catalog type.

## Layout

```
GROK.md                         # spine — read first
params.schema.yaml              # every substitutable field
examples/lessonorca.params.yaml # the source instantiation
skills/                         # one skill per phase
references/                     # catalogs, visual spec, image map
```

## Fidelity rule

Do not thin the pipeline. The source run's failure mode was missing images and missing Blank/system/VC boards. The skills exist to make that failure expensive.
