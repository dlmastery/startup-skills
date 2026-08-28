# Journey — Edge-high: Elena runs parallel campaigns

**Persona:** Elena R., head of research at a systematic fund, ~40 researchers (strategy/personas.md card 4). Payer = her; users = her pods. Her stated buy: *"I'm buying the audit trail and the campaign memory, not the hill-climbing — my people can climb hills."* This journey stretches the power user: the system must be genuinely harder to outgrow than her internal platform, and honest about what it can't do yet (A9/A10). Entry is bottom-up — one pod adopted Ascent months ago (the Cursor path [C17]); Elena is now evaluating Team.

Format: *component → action → durable record.*

## The trigger (month 0)

1. **Shared winner archive (pod-level)** → In strategy committee, pod 3's researcher answers "which variant produced this backtest?" by opening the champion bundle: config, cited reasoning, embargo windows, trial count 214, DSR beside the raw Sharpe, CPCV distribution. The meeting that historically died in reconstruction (persona pain 2) ends in 20 minutes. Elena asks for the Team evaluation that afternoon. → *Record (already existing):* the pod's bundles — the artifact that sells upward without a salesperson.

## Month 1 — the honest security review

2. **Data-locality review with her infra lead** → Ascent's own docs state the split before her team finds it (A9): training/eval data never leaves fund hardware — execution is local by architecture [B26–B28], keys are BYOK (A12). **But steering currently calls hosted LLM APIs: prompts and run telemetry leave the building unless routed to an approved endpoint. BYO-endpoint and local-model steering are roadmap, not shipped. Attestations (A10) likewise roadmap.** Her infra lead's note: "vendor said the uncomfortable part unprompted." Pilot scope set accordingly: two pods, non-flagship strategies, steering content reviewed under the same policy as researcher ChatGPT use. → *Record:* deployment config: local execution, BYOK, telemetry opt-out for corpus contribution.
3. **Team parallel campaigns** → 6 concurrent streams across two pods on a shared GPU queue; each stream is a full 7-step campaign with its own constitution instantiation, fingerprinted metric, and ledger. **Org ledger** aggregates trial counts *per strategy family* — the DSR bookkeeping that was "aspirational" on her internal platform (persona pain 1) is now a standing query. → *Record:* per-stream ledgers + org-level ledger with family-level trial counts.

## Months 2–3 — stretching the power users

4. **Constitution editor (locked invariants)** → her senior researcher rewrites the steering sections (§49–52) to encode fund conventions and tightens Gate 3's floors beyond default. The editor allows all of it — but audit-gate and metric sections are locked for live campaigns (PoC rule 9), and every constitution edit is itself versioned and diffed. The power user is stretched, not bored: the constitution is a programmable rigor surface, not a config file. → *Record:* constitution version history with signed diffs.
5. **Seeded-violation self-test** → her validation group runs the gate harness against deliberately corrupted campaigns (planted lookahead, fabricated citation, truncated reasoning). Catch-rates land in the internal wiki next to the vendor's published scorecard — matching numbers. This is the trust moment for a 40-person shop: they measured the gates themselves (P5; answers survey §7c). → *Record:* internal gate-scorecard report from their own seeds.
6. **Cross-pod archive search** → "show every attempt on volatility-regime features, any pod, 12 months" returns kept *and discarded* trials with reasoning. A new hire's first week is reading the discard ledger of the strategy family she's joining — institutional memory that used to walk out the door (persona pain 3). → *Record:* search is read-only; the asset is the accumulated org ledger.
7. **Trial-count-corrected acceptance at family level** → the org ledger's family trial counts feed a stricter promotion rule: a pod's champion must clear the deflated threshold *at the family's cumulative N*, not the campaign's [D6][D7][P2]. No internal platform or vendor she evaluated does this [survey §6]. Committee adopts the deflated number as the standard pitch statistic. → *Record:* promotion rules in the org constitution; every committee deck now auto-includes ledger count + DSR.

## Month 4 — the stretch goals that keep her

8. **Retention policies** → immutable 7-year retention on ledgers, blobs, and checkpoints for any strategy that goes live; the allocator due-diligence answer becomes an export, not a scramble. → *Record:* retention configuration + immutability attestations per archive.
9. **Steering copilot with corpus priors** (Later-tier, her pull-forward request) → stall suggestions informed by what-worked-where priors. Elena's team opts *out* of contributing their ledgers to the shared corpus (A11 telemetry is consent-based) but still receives catalog updates; she understands the trade and negotiates corpus access as a contract term instead. The moat mechanics are transparent to the customer — and she still can't replicate them, because the corpus is other people's months of ledger (positioning.md §5.3). → *Record:* corpus participation flag = off, in deployment config.
10. **The roadmap conversation** → her two open demands are exactly the two honest gaps: BYO-endpoint steering (A9) and examiner-ready attestation packs (A10). Both are on the Later tier with prerequisites stated (features_prioritized #40–42). She signs Team for two pods now, with an option tied to the BYO-endpoint milestone — the deal structure honesty makes possible.

**What stretched her people:** programmable constitutions, family-level deflation, self-run gate audits, discard-ledger archaeology. **What we refused to pretend:** hosted-steering data flow, attestation status, corpus mechanics. The edge-high user is retained by the same property that converts the beachhead — the system tells the truth about itself.

## Recommended next

Build the org-ledger family-level trial accounting (beat 7) as the first Team-tier differentiator — it is the direct organizational scale-up of the acceptance-gate spine (features #1→#3→#19), reuses the same ledger machinery, and is the one capability Elena's internal platform provably lacks. Gate any Enterprise motion on the vendor-DD prerequisites (personas card 5): entity, security docs, escrow — no exceptions, no cold sales.
