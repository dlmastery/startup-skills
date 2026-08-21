---
name: startup-blank
description: >
  Use when producing the Steve Blank / Startup Owner's Manual founder boards
  (BMC, discovery map, riskiest assumptions, Get-Keep-Grow, VPC, market type,
  MVP experiments, stage-gate, dual journey, pivot log). Trigger on
  /startup-blank, "Steve Blank", "Startup Owner's Manual", "lean canvas."
---

# startup-blank

This is **not** "just a lean canvas."

## Writes

`10_blank/README.md` plus one markdown page per board (`B01.md`–`B16.md`) with the facts that will be drawn.

## Images — all 16, one per turn or two per turn, never zero

B01 Business Model Canvas  
B02 Discovery → Validation progress  
B03 Riskiest assumptions board  
B04 Get–Keep–Grow  
B05 Problem–Solution fit evidence  
B06 Value Proposition Canvas  
B07 Pivot or persevere  
B08 Persona / archetype cards (every `params.personas` id)  
B09 Market type + implications (sales cycle, positioning, funding, risk)  
B10 MVP experiment board  
B11 Discovery insight synthesis — **verbatim** `must_have_language`  
B12 Stage-gate (Discovery → Validation → Creation → Company)  
B13 Current vs desired journey (dual if `gtm.dual_customer`)  
B14 Sales roadmap / channel by segment  
B15 Metrics by customer-development stage  
B16 Learning & pivot history  

Visual family B (cream/white). See `references/visual-spec.md`.

If the user says "next as per Steve," emit the next undrawn B-id, not a new invented framework.
