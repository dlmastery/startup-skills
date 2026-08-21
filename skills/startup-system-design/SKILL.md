---
name: startup-system-design
description: >
  Use when producing the company-level system diagrams (pipeline, closed loop,
  orchestration, durable-model schema, HITL, multi-tenant, model routing,
  observability, integrations, security). Trigger on /startup-system-design,
  "system diagrams", "architecture of the company."
---

# startup-system-design

## Writes

`11_system_design/README.md` + one page per diagram (`A01.md`–`A10.md`).

## Images (A01–A10) — indigo/teal architecture family

| ID | Diagram |
|---|---|
| A01 | End-to-end data & value pipeline (raw signals → diagnosis → act → memory → outcomes) |
| A02 | Real-time adaptive closed loop with latency notes |
| A03 | Integration & ecosystem (adjacent systems, hardware, third-party content) |
| A04 | Orchestration: how `{deep_tech.agents}` hand off and resolve conflict |
| A05 | Durable model / graph schema + versioning + rollback |
| A06 | Observability, evaluation, safety, drift |
| A07 | Human-in-the-loop & escalation (when `{personas}` of role operator/buyer enter) |
| A08 | Multi-tenant & scalability (individual → group → institution) |
| A09 | Model serving & routing (frontier / cache / fallback / on-device / cost) |
| A10 | Security, privacy, compliance (domain regs from `risks`) |

Also draw X01 (full architecture with safety envelope) if not already produced.

These are technical illustrations, not hexagon slides. Every box is a named component that appears in `params.deep_tech`.
