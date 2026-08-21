---
name: startup-infographics
description: >
  Use when generating the remaining dense founder/VC/buyer/spectrum/proof
  infographics, or when the user says "next image", "four at a time",
  "regenerate I don't see it", or "YC density." Trigger on /startup-infographics
  and any "draw the board" request inside a startup run.
---

# startup-infographics

This is the image engine for every required type not owned by a more specific skill. Read `references/visual-spec.md` and `references/infographic-types.md` first.

## Owned types

- S04 coverage illustrations (one board per major text claim)
- S06 audience boards (user / operator / founder / investor)
- S09 / V01–V08 VC decision set
- S18 / X15 spectrum (more than two poles)
- P01–P07 buyer/operator/career-capital/day-in-life
- X06–X08 proof (gains, accessibility layer, not-vaporware)
- X13–X14 future-press newspaper + timeline/usecase
- Any type the user names that already exists in the catalog

## "Next image" protocol

1. Open `{output_dir}/15_audit/QUEUE.md` (create if missing). Queue = every **required** type id not yet on disk.
2. Draw the first 1–4 ids. Call the image tool. Save under `images/{id}.png`.
3. Inspect. If fail, regenerate once.
4. Check them off the queue.
5. Stop after the batch. Do not recap the company.

## VC set — do not skip

V01 capital efficiency · V02 GTM/CAC · V03 founder-market fit · V04 risk matrix · V05 ARR path · V06 comps/exit · V07 traction · V08 willingness-to-pay.

## Regeneration

If the user says they do not see an image, or you only emitted a prompt: generate immediately. Do not apologize at length. Do not emit the prompt again as text.
