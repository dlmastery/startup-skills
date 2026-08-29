# Ascent — UX Specification (12 key screens)

> **What this is** — A text spec for twelve screens plus the global patterns and copy rules every Ascent surface obeys.
> **Why it exists** — The honesty conventions live or die in the interface: here a raw metric without its trial count is a lint error, every gate chip must resolve to verdict text, and the dashboard is settled as a local web app whose static HTML export is read-only.
> **How to read it** — Global patterns, then screens 4, 6, 5, 8. Attack the tier tags: kernel capability must exist as CLI output before any screen renders it.
> **Depends on / feeds** — Renders [features_flagship.md](features_flagship.md) under [features_prioritized.md](features_prioritized.md) tiers and [positioning](../strategy/positioning.md) §4; feeds the [journeys](journeys/day_in_life.md) and [visuals](../visuals/image_prompts.md).

Text spec; visuals belong to startup-visuals. Product feel in one sentence: **a laboratory notebook that cannot be falsified, read like a trading terminal, steered like a chat.** Global rules first, then screens. Copy discipline everywhere per positioning.md §4: "shows you the evidence," never "proves"; raw metrics never render without their trial count; internal vocabulary (constitution, super-folds, reasoning blob) always glossed on first use per surface; PoC-derived exemplar numbers labeled founder-reported (A6).

**Tier labels:** every screen below is tagged with its feature tier from features_prioritized.md — **[Kernel]** (trust-test kernel #1–9, CLI-first, no new UI), **[Launch]** (launch tranche #10–23), **[Next]**, **[Later]**. Kernel-tier capability always exists as CLI/file output before any screen renders it.

**Dashboard architecture (decision, resolves static-vs-interactive):** the dashboard is a **local web app served by `ascent dashboard`** (matching the PoC's local Python server); interactive controls (drag, filters, live refresh) run against that local server. **Self-contained static HTML is the EXPORT format** — what goes into bundles and gets mailed to a reviewer — and export snapshots are read-only. Stated once here; applies to screens 2, 4–8, 12.

**Kernel-tier signature moment:** the ledger trial-counter header — **"Trial 218 — 9 kept, 209 discarded"** — rendered identically in CLI output, dashboard header, and bundle cover. It is the product's honesty in one line, and it ships in the kernel (ledger #1–2), unlike the animating deflated-threshold curve, which arrives with the acceptance gate (Next, #25).

**Global patterns**
- **Evidence chips:** every experiment row carries three gate chips (G1 data-integrity, G2 citation, G3 reasoning) + fingerprint chip. Chips are never decorative — every chip clicks through to the underlying verdict text or hash. Deterministic checks render solid; LLM-screened checks render outlined with the tooltip "screen, not guarantee" [D33][survey §4.4].
- **The honesty pair:** any headline metric renders as `raw · deflated over N trials`. One value alone is a lint error in the design system.
- **Local-first:** all screens are views of the local `ascent dashboard` web app (see Dashboard architecture above); static self-contained HTML is the export/bundle snapshot format; hosted sync is read-only mirroring, flagged with a "what leaves this machine" link (A9).
- **Theme:** light/dark; dense tables; monospace for hashes/configs.

---

## 1. Instantiation Wizard — [Launch #11]
- **Purpose:** turn "dataset + metric" into a runnable constitution-governed campaign in ≤20 min (activation funnel; PRD decision 3).
- **Primary action:** *Next* through 12 steps → **Generate campaign**.
- **Hierarchy:** one question per step, plain-language; right rail live-previews what the answer changes in the constitution ("your donor-disjointness answer → §12 Data Integrity, GroupKFold"). Final review step lists the 52 sections with the adapted ones highlighted.
- **States:** *Empty* — sample datasets offered (the six PoC domains as templates). *Loading* — generation progress narrated by artifact ("writing splits config…"). *Error* — un-mappable metric/constraint answers escalate to "describe it in a sentence" free-text, which drafts a section for user confirmation; never silently guesses.
- **Micro-interactions:** each completed step stamps into `autoresearch_setup_answers.json` immediately (abandon-safe); back-navigation shows diffs, not resets.

## 2. Split Builder — [Launch #13; verification stamp itself is Kernel #6, CLI-first]
- **Purpose:** make leakage-proof evaluation visible and verifiable (P1) — the screen that replaces a week of harness work.
- **Primary action:** **Verify splits** → runs `validate_no_overlap()` and stamps the manifest.
- **Hierarchy:** (1) timeline/grouping diagram of the user's actual data with purge/embargo/label-horizon bands drawn to scale; (2) parameter panel (fold count, buffer sizes, grouping key); (3) verification stamp zone.
- **States:** *Empty* — protocol picker with one-line "when to use" per split type. *Loading* — fold construction progress on large data. *Error* — overlap found renders the offending rows/dates highlighted on the diagram itself, with the count ("14 rows overlap fold 3's embargo").
- **Micro-interactions:** dragging an embargo band edge live-updates the excluded-row count; the green stamp animates once and then becomes a permanent manifest chip. Scope tooltip on the stamp: "verifies temporal/overlap leakage only — semantic checks run at Gate 1" [D5][survey §4.3].

## 3. Constitution Editor — [Next #31]
- **Purpose:** power-user surface for the 52-section protocol; safe customization without rigor loss.
- **Primary action:** **Save section** (versioned).
- **Hierarchy:** left nav grouped by the eight blocks (paper App. A.1: Startup §1–8 … Steering §49–52); center editor; right rail shows which components enforce this section ("§30 enforced by core/runner.py pre-launch check").
- **States:** *Empty* — n/a (always instantiated). *Loading* — n/a (local file). *Error/locked* — gate/metric sections in a live campaign render read-only with the banner "Locked while campaign live — the agent can't change this either" (PoC rule 9).
- **Micro-interactions:** every save produces a diff entry in the constitution version history; hovering a locked section shows *why* it's locked and when it unlocks.

## 4. Campaign Dashboard (home) — [Launch #10]
- **Purpose:** the daily technical-lead surface; the paper's App. B.1 feature table is the spec baseline.
- **Primary action:** open an experiment row (drill to screen 5).
- **Hierarchy:** (1) header strip: campaign name, trial counter ("Trial 243 — 11 kept, 232 discarded"), champion honesty-pair, spend today, last checkpoint time; (2) stall-detector/divergence banner zone (amber/red only when firing); (3) sortable experiment table (composite, test/val, timestamp, commit hash, gate chips); (4) metric/equity curves with regime shading + drawdown overlay; (5) per-fold heatmap; (6) champion panel; (7) export buttons (CSV/JSON, full ledger).
- **States:** *Empty* — pre-first-experiment: shows the constitution summary and "the agent is reading your checkpoint" status. *Loading* — table renders from JSONL incrementally, newest first. *Error* — runner crash surfaces as a checkpoint-age alert ("last checkpoint 22 min ago — resume?") with one-click `ascent resume`.
- **Micro-interactions:** sorting persists; the champion row is pinned and highlighted; hovering a heatmap cell previews that fold's metric history; the stall banner embeds its suggested steering prompts as one-tap inserts into the console (App. B.3).

## 5. Experiment Detail / Reasoning Blob — [Launch #10/#23]
- **Purpose:** one experiment's complete evidence — the anti-black-box view.
- **Primary action:** none destructive; **Copy citation set** / **Open in ledger**.
- **Hierarchy:** 7-step accordion in loop order: Diagnose (with links to the heatmap cells it cites) → Ground (citations with verified ticks and resolving links) → Hypothesize (the one change, diffed config, quantitative prediction) → Execute (duration, seed, hardware log) → Analyze (prediction vs. outcome, discrepancy note) → Document (full blob) → Checkpoint (verdict + composite delta + fingerprint).
- **States:** *Empty* — n/a. *Loading* — instant (local JSON). *Error* — a `TODO-REWRITE` sentinel (PoC fallback behavior) renders as an explicit amber "auto-fallback annotation — reasoning was reconstructed, treat as incomplete"; honesty preserved in the UI, never papered over.
- **Micro-interactions:** the prediction and the outcome render side-by-side with the delta; discarded experiments show their rejection reason first (rejection is information, not shame — the ledger philosophy).

## 6. Trial Ledger & DSR Panel — [Launch #16; ledger export + offline DSR script are Kernel #1/#2/#7; threshold-curve chart is Next #25]
- **Purpose:** the honest denominator made navigable; Marcus's conversion surface.
- **Primary action:** **Export ledger** (CSV/JSON) / filter.
- **Hierarchy:** (1) DSR header: "Champion X raw · Y deflated over N trials," with an expandable one-paragraph explanation of deflation citing [D6][D7] in plain language; (2) acceptance-threshold curve chart: the deflated keep-threshold rising with N, kept trials plotted above it, near-misses below; (3) full ledger table with kept/discarded toggle and gate-verdict filters.
- **States:** *Empty* — "No trials yet — the ledger starts with experiment 1 and never forgets." *Loading* — incremental. *Error* — ledger integrity check failure (hash chain broken) is a red full-width banner; this is the one screen where an error state is a five-alarm event by design.
- **Micro-interactions:** clicking a rejection card shows the threshold math inline ("observed +0.09 < threshold +0.14 at N=163"); the threshold curve animates when N increments — the product's signature moment (features_flagship #2).

## 7. Winner Archive / Champion Bundle — [bundle + reproduce are Kernel #3/#5; this browsing UI is Launch]
- **Purpose:** the portable trust artifact; browsing and exporting champions.
- **Primary action:** **Export bundle** / **Copy reproduce command**.
- **Hierarchy:** (1) bundle card: honesty-pair, date, fingerprint set (data/config/blob hashes in monospace); (2) 14-section audit report as navigable sections (exec summary, feature importance, calibration, drift, error attribution, limitations, deployment checklist — PoC `generate_audit_report` order); (3) confirmation evidence: multi-seed spread, CPCV distribution plot; (4) reproduction log + attestation list.
- **States:** *Empty* — "No champions yet — current best is the baseline; see the ledger for attempts." *Loading* — bundle assembly progress when a new champion lands. *Error* — automatic post-archive rerun mismatch renders the bundle with a red "reproduction failed — do not distribute" seal; the bundle is quarantined, not deleted.
- **Micro-interactions:** the export dialog itemizes exactly what leaves the machine (champions + run logs; "your discard ledger is never included" — A11); copy-reproduce-command puts `ascent reproduce <id>` on the clipboard with a toast.

## 8. Steering Console — [Launch #18]
- **Purpose:** the single human input channel (constitution §49–52); chat-shaped, log-backed.
- **Primary action:** **Send steering** (one text box).
- **Hierarchy:** (1) input box with ghost text "High-level direction only — e.g. 'pivot to new dataset', 'self-reflect on stall'"; (2) steering log as a timeline, each entry showing its descendant experiments count and their aggregate outcome; (3) suggested prompts from the stall detector.
- **States:** *Empty* — explains the technical-lead model in three lines. *Loading* — "incorporating into next hypothesis…" status until the next Diagnose blob cites the entry. *Error* — low-level instructions ("set lr=3e-4") get a soft push-back: "This is a code-level instruction — the constitution asks for direction, not implementation. Send anyway as a hypothesis suggestion?" (paper ablation: low-level steering slowed convergence — founder-reported).
- **Micro-interactions:** each sent entry immediately renders its permanent log position ("steering #23 — will seed the next hypothesis"); descendant counts tick up live over the following hours.

## 9. SOTA Catalog — [Next #30]
- **Purpose:** literature-grounded backbone/recipe feed (P3); the Pro subscription's visible recurring value.
- **Primary action:** **Queue for campaign** (adds a catalog entry to the Hypothesize candidate pool).
- **Hierarchy:** (1) "new this month" strip; (2) task-family filter matched to the user's active campaigns; (3) entry cards: backbone, verified citation (tick + link), claimed regime of applicability, provenance note.
- **States:** *Empty* — OSS users see the static seed catalog with "updated monthly on Pro." *Loading* — feed sync. *Error* — an entry whose citation fails re-verification is auto-pulled and shows a tombstone ("removed pending citation re-verification") — the catalog eats its own gate-cooking.
- **Micro-interactions:** queueing an entry shows where it entered the campaign's candidate pool; entries the user's campaigns already tried link to those ledger rows ("you tried this — discarded at trial 87").

## 10. Settings — BYOK & Routing — [minimal single-OS key path is Kernel #8; this full screen is Launch #19/#20]
- **Purpose:** key management, model routing, spend control (A12, P10).
- **Primary action:** **Save routing profile**.
- **Hierarchy:** (1) keys panel (OS-keychain badge, "never transmitted to Ascent" note); (2) routing matrix: loop step × model tier, with presets Economy/Balanced/Frontier-reasoning; (3) spend meter: today/month, per-step and per-model breakdown, $/day projection band; (4) telemetry panel: corpus contribution opt-in with a plain-language description of exactly what is shared (discard ledgers + gate stats) and what never is.
- **States:** *Empty* — first-run key setup with per-provider deep links. *Loading* — key validation ping. *Error* — invalid/exhausted key shows which campaigns pause and the checkpoint-safe status ("runs halted at checkpoint — nothing lost").
- **Micro-interactions:** changing a routing cell live-updates the projected $/day; the "what leaves this machine" link is present here and in every export dialog (A9 honesty rule).

## 11. Team — Campaigns & Org Ledger — [Later #43–#46]
- **Purpose:** Elena's surface — parallel streams, family-level trial accounting, shared archive search.
- **Primary action:** **Search archive** / open a stream.
- **Hierarchy:** (1) stream grid: per-campaign status cards (trial counter, champion honesty-pair, stall state, owner); (2) org ledger roll-up: trial counts per strategy family with family-level deflated thresholds; (3) archive search across all pods' bundles and ledgers (kept + discarded), faceted by domain/backbone/date/owner.
- **States:** *Empty* — single-user orgs see "your ledger is already org-ready — add a teammate." *Loading* — federated search across stream stores. *Error* — an unreachable stream (laptop offline) renders grey with last-checkpoint age, never as data loss.
- **Micro-interactions:** search results open directly into screen 5 for any experiment, any pod; family threshold changes (as N grows) are annotated on each family's timeline — promotion goalposts visibly, correctly, rising [P2].

## 12. Mobile Dashboard (read-only) — [Launch: phone-friendly view of the local `ascent dashboard` app; hosted read-only mirror is Next #33]
- **Purpose:** the 6:55 am phone check (paper App. B.3); monitor, never operate.
- **Primary action:** none — deliberately. A **"remind me at my desk"** button is the only write, queuing a note to the desktop steering console.
- **Hierarchy:** (1) per-campaign cards: trial delta overnight, kept count, champion honesty-pair, spend; (2) stall/divergence banners; (3) last-checkpoint freshness.
- **States:** *Empty* — "no campaigns running." *Loading* — cached-then-refresh (hosted read-only mirror; "what leaves this machine" link, A9). *Error* — stale mirror shows data age prominently rather than failing.
- **Micro-interactions:** pull-to-refresh; banner taps expand the suggested steering text but the send control is visibly disabled with "steer from your desk — read-only by design" (bias-avoidance is a feature, not a limitation; paper ablation on low-level/hasty steering).

---

## The micro-interactions that carry the product's feel (cross-screen top 6)

1. **The trial-counter header** (global, Kernel) — "Trial 218 — 9 kept, 209 discarded," identical in CLI, dashboard, and bundle cover: the honesty signature that ships first.
2. **The rising threshold animation** (screen 6, Next #25) — rigor getting stricter as evidence accumulates is the brand in one motion, once the acceptance gate lands.
3. **Gate chips that always resolve to text** (global) — nothing green is unexplainable; nothing red is hidden.
4. **The honesty pair** (global) — raw · deflated · N, everywhere, without exception.
5. **"What leaves this machine"** (screens 7, 10, 12) — the A9/A11 data-flow truth one tap away from every export and sync.
6. **Rejection cards that teach** (screens 5, 6) — every discard explains itself; the user gets a methods education as exhaust.

## Recommended next

Spec-to-build order (screens follow the CLI kernel — features_prioritized #1–9 ship with no new UI first): screens 4 → 6 → 5 → 8 (dashboard, ledger/DSR, experiment detail, steering) — they cover the daily loop and the trust spine and all read from records the PoC already writes. Screen 1 (wizard) next as the activation funnel. Screens 11–12 wait for Team demand and hosted-sync infrastructure respectively. Hand this file plus features_flagship.md to startup-visuals for the collage pass.
