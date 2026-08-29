# Mission, vision, values — Ascent

> **What this is** — the mission (one sentence, true today), the ten-year vision, five values stated as trade-offs, and the "why we exist" underneath them.
> **Why it exists** — [../strategy/positioning.md](../strategy/positioning.md) defines Ascent against a competitive set that, by its own admission, changes within 12–24 months. The day a funded incumbent ships a "research mode", that file is void and someone still must decide what to do next week. This is what remains: the standard the company is run to when the map is out of date.
> **How to read it** — §3's true-today test, then §5. Attack §5: a value with no cost is decoration, so each carries a breach condition.
> **Depends on / feeds** — inherits [../BRIEF.md](../BRIEF.md), [founder_story.md](founder_story.md), [../ASSUMPTIONS.md](../ASSUMPTIONS.md); feeds [one_pager.md](one_pager.md), [../strategy/sales_roadmap.md](../strategy/sales_roadmap.md), [../validation/pivot_log.md](../validation/pivot_log.md).

---

## 1. This is not positioning

| | Positioning ([../strategy/positioning.md](../strategy/positioning.md)) | Mission (this file) |
|---|---|---|
| Defined | **Relative** — against a competitive set on two axes | **Absolute** — independent of who else exists |
| Audience | A buyer choosing between options | Anyone inside the company deciding something the plan does not cover |
| Lifespan | Expires when the set changes — self-dated at **12–24 months** | Does not move |
| Test of a good one | It makes the alternative look like the wrong shape of thing | It still decides a hard call on the day the quadrant fills |

Both are needed and neither substitutes. The check that keeps them distinct: **the mission below contains no comparison, no competitor, and no claim of uniqueness.** If a rival shipped the identical product tomorrow, every word of §3 would still be true and still be a guide.

---

## 2. Why we exist

The field has spent three years making research agents more **capable** and almost nothing making them more **honest**. That asymmetry is not an oversight; it is what the incentives pay for. Capability is demonstrable in a demo and honesty is only demonstrable in its absence.

The evidence that the gap is real, and not a founder's framing:

| Finding | Source |
|---|---|
| Data leakage documented in at least **294 papers across 17 fields** — produced by humans with discipline, not by agents | [D5] |
| CMU found **four recurring failure modes** in flagship open-source AI-scientist systems — benchmark mis-selection, data leakage, metric misuse, post-hoc selection bias — "easily overlooked in practice" | [A46] |
| **42% experiment failure rate** measured in the most famous autonomous research system | [A16] |
| **46% of developers distrust AI output accuracy**, up from 31% a year earlier | [C3] |
| Of the 16 notable forks of the most-starred agentic research loop (94,800 stars, 13,400 forks), **14 are hardware ports, 0 add rigor** | [A1][A2] |

The last row is the one that decides a company exists. Ninety-five thousand people wanted the loop badly enough to star it and nobody built the layer that makes its output believable — not because it is hard to imagine, but because rigor engineering is unglamorous work that produces no demo.

**We exist to do that unglamorous work and make it the default.** The founder's own account of arriving at it: everything a human contributes to an autonomous loop turns out to be a form of *no* — no, that split leaks; no, cite the paper or discard the idea; no, one change per experiment; no, the champion stands until something strictly beats it ([founder_story.md](founder_story.md)). Execution stopped being the bottleneck. Discipline became it. So the discipline got written down.

---

## 3. Mission — true today

> **Ascent writes down the discipline that keeps an autonomous research loop from fooling its operator, gives it away, and builds the infrastructure that proves a result was earned.**

A mission that is aspirational is a vision with the wrong label. Each clause below is checkable against what exists right now:

| Clause | True today because | Honest limit |
|---|---|---|
| *writes down the discipline* | A binding 52-section constitution governs every experiment, enforcing the 7-step method (Diagnose → Literature-ground → Hypothesize → Execute → Analyze → Document → Checkpoint) across six validated domains [../BRIEF.md](../BRIEF.md) | Founder-operated only; zero external users (A4) |
| *keeps a loop from fooling its operator* | Three programmatic pre-commit audit gates, purge/embargo super-folds, and a SHA-256-fingerprinted composite metric are implemented and running in the PoC | **Gate catch-rates are unmeasured** — E6, ≥50 seeded violations per gate class, is a prerequisite, not a result. The mid-run fingerprint comparison that would make the metric tamper-*refusing* rather than tamper-*evident* is **[ROADMAP]** (feature #24) |
| *gives it away* | The constitution ships open source and is the channel, not the moat (A11) | — |
| *builds the infrastructure that proves a result was earned* | Winner archives, the trial ledger, `ascent reproduce` and the offline DSR script are the trust-test kernel, in build | Refusal ledger does not exist yet (feature #2); nothing is independently verified |

One clause is deliberately absent: **"and sells it."** Ascent is pre-revenue with zero external users (A4), and a mission that asserts a business model the company has not yet demonstrated would fail its own honesty standard on the first line.

---

## 4. Vision — 2036

> **In ten years, an empirical claim arrives with a reproducible bundle attached, and it is the absence of one that draws the question.** A lone scientist with a laptop routinely produces publication-grade, fully audited experimental results. Research operating systems are as unremarkable as version control, and "ideas, not clusters, are the bottleneck" has stopped being a slogan and become an operating fact.

| What would have to be true | Current status |
|---|---|
| Long-horizon agent capability keeps improving and stays cheap enough to run continuously | Trending: capability-per-dollar falls ~40–50×/yr, though frontier list prices are flat-to-rising [B16][B18][B19] — which is why model routing is a design commitment, not an optimization |
| Rigor becomes a *default* rather than a differentiator — including in systems we do not build | This is the vision winning, not losing. If every research agent ships gates in 2036, the mission succeeded and the company's value moved to the corpus, the catalog and the reproduction network (A11) |
| Verification is cheap enough that a reader actually reruns things | Requires the reproduction network to exist at scale; today it is a registry ping (feature #9) |
| Practitioners will act on results they did not produce | **Unproven — the pack's #1 riskiest assumption**, under test as E1 |

**What would falsify the vision:** if the field settles on unverified agent output as acceptable — the way it largely settled on unreproducible papers — then rigor becomes a compliance checkbox owned by incumbents rather than a practitioner norm, and the ten-year picture is wrong even if the company succeeds commercially. That outcome is worth naming because it is the one where winning the market and losing the mission happen simultaneously.

---

## 5. Values — five trade-offs, each with a price and a breach condition

A value that costs nothing is a decoration. Each of these is stated as a trade the company has already agreed to make, with the cost it accepts, the observable test that it meant it, and the condition under which it has been breached. **Breaches are recorded in [../validation/pivot_log.md](../validation/pivot_log.md), never edited away** — the same rule the experiment board applies to thresholds.

### V1 — Publish the corrected number before someone else computes it

**The trade:** we take the weaker headline in exchange for the claim that survives contact with a skeptic.
**The cost we accept:** the flagship EUR/USD result — test Sharpe +6.52, founder-reported and reproducible from the repo, not independently verified — was selected from 265+ trials, which is precisely the statistic the deflated Sharpe ratio exists to discount [D6][D7]. We publish the deflated figure with the true trial count as the headline. If it is weak, we lead with the fraud-vs-AutoGluon result instead and demote our best number to a methodology showcase — a decision pre-committed *before* seeing it ([../strategy/positioning.md §4.2](../strategy/positioning.md)).
**What it is not:** humility. It is a pricing strategy for credibility with a buyer who will discount a raw number anyway, and who buys the discounting itself.
**Test:** raw and deflated appear together, with the trial ledger, in every public bundle, without exception.
**Breach:** any bundle ships carrying only the raw figure.

### V2 — Refuse rather than impress

**The trade:** the system says no and loses the experiment, rather than producing a result it cannot evidence.
**The cost we accept:** refusals make demos worse. A competitor's system will always appear to do more, because it does not stop. We additionally spend build time on a **refusal ledger** (feature #2) — a JSONL of experiments the gates blocked — which no customer has ever asked for and which exists to make our own denominator honest.
**Test:** refused experiments are counted in the public denominator, not silently dropped.
**Breach:** a demo or bundle that reports kept improvements without the refusals and discards behind them.

### V3 — The crown jewels ship in the channel

**The trade:** the constitution — the single most valuable artifact the company owns, and the thing everyone would pay for — is open, complete and free, permanently. We monetize the ledger, the infrastructure, the catalog and the attestation service. **We never monetize the standard.**
**The cost we accept:** anyone can fork the file in a day, and we say so out loud — the defensible window is honestly 12–24 months, not indefinite (A11, [../strategy/positioning.md §5.1](../strategy/positioning.md)). A closed constitution would be an easier business and a self-refuting product: "trust me, it's audited" cannot be sold to a population where 46% distrust AI output [C3].
**Test:** no rigor capability ever migrates from the free core to a paid tier.
**Breach:** a gate, a split protocol, or an acceptance rule moves behind a paywall.

### V4 — Scope every claim to what was measured — in the room where it costs us

**The trade:** **[ROADMAP]** stays attached to unshipped capabilities in live sales conversations, not only in documents.
**The cost we accept:** we decline deals we could talk our way into, and they are the largest ones available. The four vetoes we cannot satisfy — BYO-endpoint steering, retention SLAs, compliance attestations, vendor DD — are precisely what fund and enterprise buyers ask for ([../validation/decision_making_unit.md §4](../validation/decision_making_unit.md)). We say no and log the decline. We say "runs on X and Y", never "LLM-agnostic validated", when the evidence is a two-stack existence proof (E7).
**Test:** the disqualification rules in [../strategy/sales_roadmap.md §6](../strategy/sales_roadmap.md) are executed, and declined conversations are logged with the reason.
**Breach:** an attestation, a retention SLA, or independent verification is claimed before it exists.

### V5 — When capacity binds, the community is paid before the company is

**The trade:** when the founder is over capacity, paid-signal work slips first — before community maintenance, and never at the expense of the trust test.
**The cost we accept:** revenue arrives later. The $99 pre-order gate slides rather than the issue-answering workstream. The reasoning is not generosity: the channel decays without maintenance, and the project that proved this market's demand died of exactly that cost — maintainerless since 2026-03-26 with ~185 open issues and PRs filed into it anyway [A1][C35].
**Test:** the slip rule in [../strategy/gtm.md §4](../strategy/gtm.md) is executed as written when weeks 5–10 run hot.
**Breach:** the community workstream is cut to protect a revenue date.

---

## 6. What we will not do

| We will not | Because |
|---|---|
| **Sell autonomy** | Autonomy is what the skeptical buyer is afraid of. We sell the gates. Third-party evidence carries the inversion: humans with discipline already produce leakage at published scale [D5], and the CMU failure modes occur precisely where automation lacks gates [A46] |
| **Compete on benchmark headlines** | Public benchmarks carry contamination up to 45% on popular sets [D37][D38] and conflate model, scaffold and budget. Winning there would prove nothing we claim |
| **Build a "lite" fork** | One system serves the domain scientist, the quant and the fund; the constitution adapts rigor and vocabulary per domain. A simplified tier for less sophisticated users would mean shipping less rigor to the people least able to supply it themselves |
| **Chase enterprise revenue before we can pass diligence** | A pseudonymous solo founder fails vendor risk today (A5). Selling into a veto we cannot clear spends the one resource with no substitute — founder-weeks — on a deal that cannot close |
| **Claim verification we do not have** | Every PoC number is framed founder-reported, reproducible from the repo, not independently verified (A6), until a stranger reproduces it |

---

## 7. Recommended next 3

1. **Put V1 to its first real test by computing the deflated EUR/USD number before any bundle ships.** It is the value most likely to be quietly abandoned, because it is the only one whose cost is paid up front and in public, and the pre-committed fallback (lead with fraud-vs-AutoGluon) only counts as a commitment if it is decided before the number is known.
2. **Add the breach conditions to the pivot log as standing rows now, while none of them has been breached.** A value with an observable breach condition and no place to record it is still a decoration; five empty rows cost nothing and make the first breach visible instead of arguable.
3. **Use §3's true-today table as the honesty check on every outbound artifact.** Three of its four clauses carry a named limit — unmeasured gate catch-rates, a tamper-evident rather than tamper-refusing metric, no independent verification — and those three limits are exactly the claims a pitch deck rounds up. The table is short enough to re-read before each publication and specific enough to stop it.
