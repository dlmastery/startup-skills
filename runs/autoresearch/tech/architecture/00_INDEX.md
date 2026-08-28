# Architecture Diagrams — Index

Ten diagrams, each grounded in the real PoC repo (`generalized_ml_autoresearch/`, ~4,000 LOC core) and extended honestly to the product. Every component is labeled **[exists]** (in the repo today) or **[planned]** (product extension). Captions say what a reviewer should notice — the mechanism, not the shape.

| # | Diagram | One-line mechanism | Mostly exists / planned |
|---|---|---|---|
| [D01](D01.md) | Experiment data pipeline | Dataset → gated splits → backbone → metrics → append-only ledger | exists |
| [D02](D02.md) | The 7-step closed loop with audit gates | Gates run pre-execution AND pre-commit; only strict improvements survive | exists |
| [D03](D03.md) | Component orchestration | Agent orchestrates; runner owns disk truth; ownership contract per file | exists |
| [D04](D04.md) | Durable run record & calibration-corpus schema | Ledger + champions; what ships in bundles vs what stays private (A11) | exists / planned split |
| [D05](D05.md) | Model routing & cost control (BYOK) | Step-class routing: frontier reasoning vs mid-tier routine, budget governor | planned (PoC single-assistant) |
| [D06](D06.md) | Security & privacy boundaries | Data never leaves the machine; only reasoning tokens cross today; BYO-endpoint roadmap | exists / planned split |
| [D07](D07.md) | Integrations & ecosystem | Data sources, git, arXiv/S2/OpenAlex, notebooks, dashboards | exists / planned split |
| [D08](D08.md) | Observability, evaluation & safety monitoring | Gate telemetry, seed variance, proxy-divergence watch, reproduction checks | planned (signals exist in logs) |
| [D09](D09.md) | Team & multi-campaign scale-out | N campaigns, shared winner archives, one steering surface | planned |
| [D10](D10.md) | Human-in-the-loop steering & escalation | Stall → self-reflect → literature pivot → human, as a logged protocol | partial |

**Validation:** every Mermaid block below was syntax-checked (see `not_vaporware.md` for method).
