---
name: startup-setup
description: >
  Use when starting a new generic startup artifact run, when params.yaml is
  missing or still contains leftover LessonOrca/edtech nouns, or when the user
  pastes a startup description / PDF / transcript and wants the factory.
  Also trigger on /startup-setup and the first step of /startup-skills.
---

# startup-setup

Write `params.yaml` from the user's description. Do not start research or images until this file exists.

## Steps

1. Read `params.schema.yaml` and `examples/lessonorca.params.yaml` (shape only).
2. Read the user's description, PDF, or transcript in full. If they point at a source run, note `source_run`.
3. Fill every schema field. Invent nothing that the user already stated. For gaps, write an explicit `TODO` string — do not silently copy LessonOrca values.
4. Domain-swap checks (fail setup if any still say the source domain and this run is not edtech):
   - `core_loop` is not forced to Probe-Plan-Teach
   - `spectrum.low_end` is this domain's underserved edge
   - `domain_science` is this domain's evidence base
   - `market.comps` are this category's named incumbents
5. Create `{output_dir}/` and write `{output_dir}/params.yaml` plus a copy at repo-root `params.yaml`.
6. Show the user a 15-line params summary. If they object, edit. Then hand off to phase 1.

## Output

- `params.yaml`
- `{output_dir}/params.yaml`
- `{output_dir}/00_SETUP.md` — one paragraph on what was inferred vs asked
