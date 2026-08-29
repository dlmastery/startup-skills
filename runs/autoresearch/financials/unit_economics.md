# Unit economics — Ascent

> **What this is** — per-tier margins, CAC by channel with founder hours priced in, churn bands, LTV and payback, all recomputable from stated assumptions.
> **Why it exists** — it settles where the business is fragile and where it is not. At roughly 90% cash gross margin and payback under three months, neither COGS nor CAC can kill Ascent; what can is the conversion numerator, whether practitioners pay for experiments they did not run. So this file's job is to send diligence to the validation layer rather than to a spreadsheet argument.
> **How to read it** — section 1's BYOK zero-token line is load-bearing; a skeptic should attack the uncited 3-7%/mo churn band, across which LTV swings 2.3x.
> **Depends on / feeds** — inherits from [pricing.md](pricing.md) and [revenue_build.md](revenue_build.md); feeds [risk_matrix.md](risk_matrix.md), [comps_exits.md](comps_exits.md), [use_of_funds.md](use_of_funds.md).

Per-tier P&L, CAC by channel, payback, LTV. Everything recomputable: change any `(assumption)` and the arithmetic is shown. Binding architecture fact: **Pro is BYOK (A12) — token COGS sits on the user's card by construction**, which is the single most important line in this file.

## 1. Pro tier P&L (per user per month, at $125/mo)

| Line | $/user/mo | Basis |
|---|---|---|
| Revenue | 125.00 | pricing.md (mid of $100–150 band) |
| LLM token COGS | **~0** | BYOK (A12): the user's steering loop runs on the user's key at $3–12/day mid-tier, their bill [B18][B20][B22] |
| Steering-copilot inference (house-metered, capped) | 2.00–6.00 | (assumption: capped copilot allowance ≈ 0.5–1.5M tok/mo routed to Haiku-4.5/Flash-tier at $1/$5 and $0.75/$3.75 per Mtok [B18][B20]) |
| Hosting/infra (dashboards, catalog, bundle storage) | 2.00–5.00 | (assumption per task brief: standard SaaS infra at prosumer scale; storage-light — bundles are MB-scale) |
| Payment processing | ~3.90 | 2.9% + $0.30 (assumption: standard card rails) |
| **Cash COGS** | **7.90–14.90** | sum |
| **Cash gross margin** | **88–94%** — call it **~90%** | (125 − 14.9)/125 = 88.1%; (125 − 7.9)/125 = 93.7% |
| Support, imputed founder-hours | ~3.80–7.60 | (assumption: at 150 users, ~5 hrs/wk of the gtm.md §4 community budget is support ≈ 21.5 hrs/mo; imputed at **$53/hr** — the one pack-wide rate, from use_of_funds founder comp $110k/yr ÷ 2,080 hr — → $1,140/mo ÷ 150 ≈ $7.60, halving as the base doubles) |
| **Fully-loaded gross margin at 150 users (~mo 12–18)** | **82.0%** worst case | (125 − 14.90 − 7.60)/125 = 82.0%; best case (125 − 7.90 − 7.60)/125 = 87.6%. (Prior version printed 79.5% — an artifact of a $75/hr imputed rate; rate unified at $53/hr per use_of_funds comp) |
| **Fully-loaded gross margin at ~300+ users** | **≥85%** | support amortizes to $3.80/user at 300 → (125 − 14.90 − 3.80)/125 = 85.0% worst case; ≥85% is the steady-state claim, ~90% the cash claim — quote whichever matches the question asked, never blend them |

Contrast that must appear in every investor conversation: a **hosted** flat-rate Pro would carry $90–360/mo of token COGS per heavy user ($3–12/day × 30) against $125 revenue — negative margin on exactly the best users. BYOK is why this tier works at all (A12's whole rationale).

## 2. Team tier P&L (hosted runs — the metered piece)

Per hosted campaign (assumption: 5-day run, mid-tier routing, one mid-GPU instance):

| Line | $ | Basis |
|---|---|---|
| Steering tokens | 15–60 | $3–12/day × 5 days, mid-tier [B18][B20]; frontier-routed escalations push to $100–300 ($20–60/day, capability_table §3) |
| Backbone compute (hosted GPU) | 120–480 | (assumption: $1–4/GPU-hr spot→on-demand × 24 hr/day × 5 days at ~50% duty cycle). Note the user-side alternative is ≈ electricity (~$1/day) on their own laptop [B26–B28] — hosted runs are a convenience purchase, priced as one |
| **Campaign COGS** | **135–540** | sum |
| Billed at cost × 1.3–1.5 | 175–810 | pricing.md §4 (Devin ACU precedent [C21]) |
| **Hosted-run gross margin** | **23–33% of billed** | passthrough + margin, by construction — never a loss-maker, never the margin story |
| Team base + seats ($750/mo base) | ~90% GM | same cost structure as Pro |

Blended Team GM at $9–12k ACV: base ~90% GM dominates unless a team runs >5 hosted campaigns/mo — usage growth dilutes percentage margin while growing absolute dollars. Correct and intended: flat rigor layer carries margin; metered compute carries scale.

## 3. CAC by channel (hypothesis + basis, per gtm.md §3)

| Channel | Cash CAC | Founder-time CAC (imputed $53/hr, the pack-wide rate) | Basis |
|---|---|---|---|
| OSS-organic (issue answers, maintained fork) | ~$0 | ~$150–250/convert early: 15–20 hrs/wk × 8 wks ≈ 140 hrs × $53 ≈ $7,400 against first 30–50 converts | gtm.md ch. 1; falls toward ~$0 as content compounds |
| Bundle/content loop | ~$0 cash | $50–200/signup-equivalent | gtm.md ch. 2 (assumption: devtool content CAC with existing audience); permanent assets, reproductions compound |
| Pre-order/design-partner cohort | <$300 blended | included above | gtm.md ch. 3 (assumption: ≤2 months Pro revenue, self-serve devtool norm) |
| Team pull-through | ~$0 (product-led) | sales-assist hours only | gate-line conversion [C31][C18] |
| Audit-led enterprise (yr 2+) | $10–25k/deal | founder-led, 3–9 mo cycle | gtm.md ch. 5 (assumption); fine against $100k+ ACV [C19] |

**Blended planning CAC for Pro: $150–300** (assumption: mix of the first three channels, weighted to organic).

## 4. Retention, LTV, payback

**Churn is unknown pre-launch — flagged, not hidden.** Planning band: **3–7%/mo** (assumption: prosumer devtools comparables band; no public churn disclosures exist for the closest comps, so this is a corridor, not a citation). Recompute freely:

| Monthly churn | Avg lifetime | LTV = $125 × life × 90% GM | LTV/CAC at $300 | Payback = $300 ÷ ($125 × 0.90) |
|---|---|---|---|---|
| 3% | 33 mo | **$3,700** | 12.3x | **2.7 mo** |
| 5% (plan) | 20 mo | **$2,250** | 7.5x | 2.7 mo |
| 7% | 14 mo | **$1,600** | 5.3x | 2.7 mo |

Payback under 3 months at every churn point because CAC is organic-dominated; the model's fragility is **not** CAC or margin — it is the numerator of conversion (trust), which is exactly the riskiest assumption (validation layer). Annual-plan mix (pricing.md: ~2 months free) trades ~15% of revenue for churn insurance; worth it below the 5% point, revisit with data.

## 5. The cost-curve argument (margin trajectory)

1. Capability-per-dollar falls **~40–50x/yr** (median ~50x, ~40x on PhD-science tasks [B16]; GPT-4-class down ~214x in 40 months [B17]) — so the *same* steering quality costs the BYOK user less every quarter, making Pro feel cheaper against a flat price Ascent keeps.
2. **Frontier list prices are flat-to-rising** (GPT-5.5 doubled Apr 2026; Gemini Flash doubles Jan 2027; Fable 5 at $10/$50 is 2x its predecessor [B18][B19][B21]) — so the loop must route routine steps to mid-tier models. The constitution's model-routing policy is thus a *margin feature*, and the calibration corpus (A11) compounds it: better priors → fewer wasted experiments → fewer tokens per kept improvement.
3. Net: Ascent's house COGS (capped copilot inference) deflates with the curve while revenue is flat-priced → **contribution margin rises structurally over time**; the user's own BYOK bill deflates too, widening the value gap the price sits in. The only cost line that grows is hosted-run GPU passthrough, which is billed as passthrough.

## 6. Contribution margin trajectory (summary)

| Phase | Pro GM | Blended contribution after CAC amortization |
|---|---|---|
| 150 users (~mo 20, revenue_build §4) | 82.0% fully-loaded (support-heavy) | positive from month 3 of each cohort |
| ~500 users (stage 2) | ~88–90% | support amortized, copilot cost falling with curve |
| Stage 3+ | 90%+ | usage revenue dilutes % margin, grows $ margin — report both, never just the percentage |
