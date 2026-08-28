# Market Structure, Buyer Behavior & Money Flows — Ascent

Researched 2026-08-27 via live web search. Every figure carries a source tag [Cn]; see Sources. Where analysts disagree, the range is reported. Analyst-report figures (AutoML, MLOps, agentic AI) should be treated as directional at best — see skepticism notes.

---

## Populations

### ML engineers & data scientists (the beachhead pool)

| Population | Estimate | Source & date |
|---|---|---|
| US data scientists (employed) | 245,900 (2024), projected 328,300 by 2034 (+33.5%, 4th-fastest-growing US occupation; ~23,400 openings/yr) | BLS Occupational Outlook / Employment Projections 2024–34 [C1][C2] |
| Global developers (all) | 47.2M total, 36.5M professional (early 2025); growth decelerating to ~10%/yr | SlashData Developer Population 2025 [C7] |
| Global data-science/ML-active developers | SlashData lists DS/ML among top developer focus areas but publishes no headline subset count; prior SlashData reports put ML/DS-engaged developers in the low double-digit millions. A defensible working range for *professionally active* ML/DS practitioners is **3–10M worldwide** (subset of 36.5M professionals; no single authoritative count exists — flagged as an estimate, not a citation) [C7] |
| Kaggle accounts | 23.29M registered accounts (Apr 2025); Kaggle markets "32M+ community" in 2026 — registered accounts vastly overstate active practitioners (active competitors historically <5% of accounts) | Kaggle / DataCamp [C6] |
| Stack Overflow survey base | 49,000+ respondents, 177 countries (2025); Python usage +7pts YoY driven by AI/DS; 84% use or plan to use AI tools; 51% of professionals use them daily | Stack Overflow Developer Survey 2025 [C3] |
| AI/ML specialist growth | AI & ML specialists among top-3 fastest-growing roles 2025–2030, projected +82% net growth; ~1.3M new AI roles already created (LinkedIn data via WEF) | WEF Future of Jobs 2025 [C4] |

### Quant researchers & funds (beachhead-high)

- Global hedge fund AUM: **$4.98T record (Q3 2025)**, ~$5.6T by Q2 2026 [C36]. Quant/systematic strategies growing fastest (~11.6% CAGR projected through 2031); AI/ML-capable funds captured $78.6B of net flows = 52% of total 2025 inflows [C36].
- Fund counts: no clean public total. Aurum's data engine tracks ~3,200 active hedge funds (~$2.85T AUM) [C36]; HFR historically tracked ~9,000+ funds including fund-of-funds. **Quant-focused funds: plausibly several hundred to ~2,000 worldwide**; an industry-wide headcount of quantitative researchers is *unfindable* in public sources. Anchor: WorldQuant alone ~1,000 employees with ~125+ PhD researchers [C40]. A defensible order-of-magnitude for quant researchers/PMs/quant devs globally is **tens of thousands (~30–80k)** — stated as inference, not citation.

### Academic / empirical researchers (edge-low, long tail)

- **8.85M full-time-equivalent researchers worldwide** (UNESCO, 2018 — latest global FTE figure; grew 13.7% 2014–2018, ~3x population growth). China 1.69M, US 1.38M, Japan 0.67M [C5]. A large fraction of these work in empirical/computational fields where "dataset + metric" applies (life sciences, physics, economics, engineering); even a conservative 25–40% slice gives **2–3.5M addressable empirical researchers**.

### Citizen data scientists

- Gartner has long projected citizen data scientists **growing 5x faster than trained data scientists** and out-producing them in volume of analysis [C39]. No credible absolute count exists — analyst firms deliberately avoid one. Treat as a directional multiplier on the professional population, not a number.

---

## Market size estimates (ranges, per analyst, with skepticism)

### AutoML (the category Ascent's PoC already beat on benchmark)

| Analyst | 2025 base | 2030 projection | CAGR |
|---|---|---|---|
| Mordor Intelligence | $2.59B | $15.98B | 43.9% [C8] |
| Knowledge Sourcing | $1.93B | $11.31B | 42.4% [C8] |
| Technavio | — | +$13.5B incremental 2025–29 | 44.8% [C10] |
| MarketDigits (2023) | $866M (2023) | $10.4–15.5B | 36.8–52.8% [C9] |

**Skepticism:** 2025 base estimates span 3x ($0.9B–$2.6B) and CAGRs of 42–53% are classic analyst-mill inflation — these firms sell reports, not audits. The honest read: AutoML is a **~$1–3B market today growing fast**, and its incumbent leaders (DataRobot, H2O) have visibly stalled — DataRobot's last primary raise was 2021 and both firms pivoted messaging to "agentic AI" in 2025, suggesting the classical-AutoML category itself is being cannibalized by exactly the agentic approach Ascent represents.

### MLOps (the adjacent tooling budget Ascent taps)

| Analyst | 2025 estimate | Out-year |
|---|---|---|
| Grand View | $2.19B (2024) | $16.6B by 2030, 40.5% CAGR [C11] |
| IMARC | $4.0B (2025) | — [C12] |
| Fortune Business Insights | $2.98B (2025) | — [C12] |
| SNS Insider | $1.84B (2025) | — [C12] |
| Precedence | $2.43B (2025) | $56.6B by 2035 [C12] |
| MarketsandMarkets | $1.1B (2022) | $5.9B by 2027, 41% CAGR [C12] |

**Skepticism:** same 2x+ spread on the base year. But this category has a real-money validation point analysts don't: **CoreWeave paid ~$1.7B for Weights & Biases (closed May 2025), which served 1,400+ organizations** [C34] — i.e., a real acquirer valued the experiment-tracking layer alone at ~$1.2M per customer org.

### Agentic AI (the narrative tide)

- MarketsandMarkets: AI agents **$7.84B (2025) → $52.62B (2030)**, 46.3% CAGR [C13].
- Grand View (enterprise-only): $2.6B (2024) → $24.5B (2030), 46.2% CAGR [C14].
- Gartner: agentic software spend **$1.08T by 2030** within a $5.95T AI forecast; supply-chain agentic software alone <$2B (2025) → $53B (2030) [C15].
- **Skepticism:** the trillion-dollar Gartner figure is a category-relabeling exercise (existing software re-badged "agentic"). Use the $25–55B-by-2030 band for anything investor-facing.

### AI developer tools / code assistants (proof the wedge buyer pays)

- Grand View: AI code assistants **$8.5B (2025) → $42.8B (2033)** [C16]; other analysts $4–5B (2025) → $12–15B (2027) [C16].
- Reality check that beats any analyst number: **Cursor went $1B ARR (Nov 2025) → $2B ARR (Mar 2026)**, 60% now enterprise, valuation $9.9B (Jun 2025) → $29.3B (Nov 2025) [C17]. This is the fastest developer-tool revenue ramp in history and the single strongest evidence that individual technical practitioners now buy $20–200/mo AI tools bottom-up at massive scale.

---

## Willingness-to-pay anchors

| Anchor | Price | What it anchors for Ascent | Source |
|---|---|---|---|
| GitHub Copilot | Free / $10 Pro / $39 Pro+ / $19 Business / $39 Enterprise per user/mo (usage-based AI credits from Jun 2026) | Floor for individual AI tooling | [C22] |
| Cursor Pro | $20/mo individual; Teams ~$40/user/mo; $2B ARR proves volume | Bottom-up dev AI spend | [C17][C21] |
| Claude (Anthropic) | Pro $20 / Max $100 / Max $200 per mo | The $100–200/mo "power individual" tier is now normalized | [C23] |
| ChatGPT (OpenAI) | Go $8 / Plus $20 / Pro $100 / Pro $200 per mo | Same normalization from the other side | [C23] |
| Devin (Cognition) | Pro $20 / Max $200 / Teams $80 per mo + usage (ACU) billing; teams budgeting $20 get invoiced $400 | Precedent for *autonomous agent* usage-based pricing — closest pricing comp to Ascent sessions | [C21] |
| W&B | Free personal / Pro from ~$35–50 per user/mo / Enterprise custom (reported ~$300+/unit/mo; SSO, audit logs gated to Enterprise) | Direct comp for the "practitioner → team → enterprise" ladder; note audit features are the enterprise gate for W&B too | [C18] |
| DataRobot | ~$100k–$500k/yr platform license; starts ~$100k/yr for 1–2 users; $1M+/yr for 100+ users | Ceiling for enterprise AutoML — what Ascent's Enterprise tier displaces | [C19] |
| H2O Driverless AI | ~$390k/3-yr enterprise license; mid-market 30-user deployments $250–550k/yr | Same ceiling, second data point | [C20] |
| Bloomberg Terminal | **$31,980/yr per seat (2025)**, ~$28.3k multi-terminal; 2-yr minimum contracts | The quant seat anchor: quants already pay ~$32k/seat/yr for an information edge; a research-automation seat priced at $5–20k/yr is cheap by comparison | [C24] |
| Quant fund data/tools budget | Basic quant fund tech+data infra $200k–500k/yr; typical alternative datasets $100–250k/yr each; "no budget if it makes money and is uncorrelated" | Quant funds pay for *edge per year*, not per seat — supports outcome-priced Enterprise deals | [C37][C38] |
| ML engineer (substitution anchor) | US average total comp **$279k** (levels.fyi 2025); Meta median $495K, Google $288K; senior Bay Area >$400k; fully loaded cost ≈ 1.25–1.4x comp → **$350k–550k/yr per senior ML engineer** | Ascent Pro at $200–500/mo = <0.2% of one engineer's loaded cost; Team at $50k/yr = ~10–15% of one engineer | [C25] |

**Pricing corridor implied:** individual $20–200/mo (fully normalized in 2026); team $80–500/user/mo; enterprise $100k–500k/yr (AutoML incumbents already collect this); quant vertical up to Bloomberg-seat territory ($30k+/seat/yr) if the audit/edge story lands.

---

## Funding climate & active theses (2025–2026)

### AI-for-science rounds — the money is already moving

| Company | Round | Amount / valuation | Date | Thesis funded |
|---|---|---|---|---|
| Periodic Labs (ex-OpenAI/Google Brain) | Seed (a16z lead; Bezos, Schmidt, Nvidia, DST) | **$300M seed**, ~$1B valuation | Oct 2025 | "AI scientists" + autonomous physical labs, starting with superconductors [C27] |
| Lila Sciences (Flagship) | Seed $200M (Mar 2025) → Series A $235M+ $115M ext. (Nvidia) | **$550M total**, >$1.3B valuation | Mar–Oct 2025 | "Scientific superintelligence" via autonomous wet labs [C28] |
| Sakana AI | Series B $135M (MUFG, Khosla, Lux, In-Q-Tel) | **$2.65B valuation**, ~$30M ARR reported | Nov 2025 | Nature-inspired models + AI Scientist; Japan-sovereign angle [C26] |
| FutureHouse | Philanthropic (Eric Schmidt, 5-yr commitment; Open Philanthropy, NSF) | ~$20M spent through 2024; nonprofit | 2023– | Semi-autonomous AI scientists for biology — deliberately non-commercial [C29] |

### Agentic devtools mega-rounds — the adjacent comp set

- **Cognition (Devin):** $400M at $10.2B (Sep 2025, Founders Fund) after acquiring Windsurf; then **$1B+ at $26B (May 2026)**; ARR $1M (Sep 2024) → $73M (Jun 2025) → 2x post-Windsurf [C30].
- **Anysphere (Cursor):** $2.3B Series D at $29.3B (Nov 2025); $2B ARR (Mar 2026) [C17].
- Agentic AI category funding: **$6.42B in 2025 (record)**; $2.66B across 44 rounds through Apr 2026 vs $1.09B same period prior year; average round size for late-2025/early-2026 closers hit **$155M**, ~2x the H1-2025 average — fewer, bigger, more conviction-priced bets [C33].

### What theses VCs are actually funding right now

Per 2026 deal-flow analyses [C33]: investors reward **measurable workflow replacement** (a named budget line the agent eats), **execution infrastructure and "control points"** (the layer everything else must pass through), and **verifiable outcomes**; they've grown allergic to generic agent wrappers and broad autonomy claims without a proof environment. First checks are large when the team + category + control-point story is credible, regardless of stage label.

**Fit for Ascent:** the constitution + audit gates *are* a control-point thesis (nothing ships without passing the gates), the metric delta *is* the measurable outcome, and the replaced workflow is a named budget line (ML engineer iteration time at $350–550k/yr loaded [C25]). The AI-for-science rounds above prove appetite at the top of the market — but all of them (Periodic, Lila, Sakana) are **capital-intensive, cloud/wet-lab, elite-team plays**. Nobody has raised on the *laptop-native, practitioner-priced, rigor-first* version of the thesis. That is either white space or a signal VCs think the bottom of the market is a feature, not a company — the Karpathy signal argues for white space: **autoresearch hit ~86k stars by Jun 2026 (66k in the first month, released Mar 7 2026) and then went dormant after Mar 26 with 185 open issues/PRs accumulating** [C35] — massive proven demand, abandoned supply.

---

## Buyer behavior & open-core evidence

### How ML/quant practitioners adopt tools

- **Bottom-up, individual-first is now the dominant motion:** 84% of surveyed developers use or plan to use AI tools; 51% of professionals daily [C3]. Cursor reached $200M ARR with **zero marketing spend**, then flipped to 60% enterprise revenue [C17] — the canonical path is: individual adopts free/cheap → expenses $20–200/mo → team standardizes → enterprise contract. W&B ran the same play a generation earlier (free for individuals/academics → 1,400+ paying orgs → $1.7B exit [C34][C18]).
- **Trust is the gating variable, and it's falling for raw AI:** 46% of developers distrust AI output accuracy, up from 31% a year earlier [C3]. This is directly supportive of Ascent's core bet — the market's stated blocker is *verifiability*, which is exactly what audit gates/fingerprints sell.
- **Quant funds buy edge, not seats:** budgets are outcome-elastic ("no budget if it makes money and is uncorrelated" [C38]); typical dataset spend $100–250k/yr per source [C37]; Bloomberg's $32k/seat [C24] shows per-seat tolerance. Procurement is fast when a backtest/audit trail is demonstrable.

### Open-core conversion benchmarks

- Freemium with sales-assist (GitLab-style): **5–7% free→paid is good, 10–15% great** [C31].
- Pure self-serve: **3–8%** [C31].
- Open-source-specific funnels (Scarf): hosted SaaS converts **1–5% of active users**; enterprise licenses **0.01–0.1% of users** but at orders-of-magnitude higher ACV [C32].
- Structural pattern (GitLab, HashiCorp, W&B): monetization gates land on **collaboration, hosting, and compliance/audit features** — SSO, audit logs, retention [C31][C18]. Ascent's planned gates (hosted dashboards, shared archives, audit-trail retention/attestation) sit exactly on the historically-proven gate line.

**Bottom-up sizing sketch (ingredients, not a claim):** 86k starred users of the free minimal loop [C35] → apply OSS hosted-SaaS conversion of 1–5% [C32] → 900–4,300 paying individuals at $50–200/mo = **$0.5M–$10M ARR from the existing demand pool alone**, before any team/enterprise motion; one enterprise/quant deal at DataRobot-displacement pricing ($100k+ [C19]) equals ~100 individual subscriptions.

---

## Sources

- [C1] BLS Occupational Outlook Handbook: Data Scientists — https://www.bls.gov/ooh/math/data-scientists.htm — accessed 2026-08-27 — 245,900 (2024) → 328,300 (2034), +33.5%, 23,400 openings/yr.
- [C2] BLS Employment Projections 2024–34 Summary — https://www.bls.gov/news.release/ecopro.nr0.htm — accessed 2026-08-27 — data scientist 4th-fastest-growing occupation.
- [C3] Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/ — accessed 2026-08-27 — 49k+ respondents/177 countries; 84% AI-tool use; 46% distrust AI accuracy (up from 31%).
- [C4] WEF Future of Jobs Report 2025 (via search synthesis) — https://onlinedegrees.sandiego.edu/machine-learning-engineer-career/ — accessed 2026-08-27 — AI/ML specialists +82% projected growth 2025–30; 1.3M AI roles created (LinkedIn data).
- [C5] UNESCO UIS R&D data / 2021 Science Report — https://uis.unesco.org/en/news/rd-data-release — accessed 2026-08-27 — 8.854M FTE researchers worldwide (2018); country breakdown.
- [C6] Kaggle account statistics — https://www.datacamp.com/blog/what-is-kaggle and https://labelyourdata.com/articles/machine-learning/kaggle-datasets — accessed 2026-08-27 — 23.29M accounts (Apr 2025); 32M+ claimed 2026.
- [C7] SlashData Global Developer Population Trends 2025 — https://www.slashdata.co/post/global-developer-population-trends-2025-how-many-developers-are-there — accessed 2026-08-27 — 47.2M developers, 36.5M professional.
- [C8] Mordor Intelligence AutoML Market — https://www.mordorintelligence.com/industry-reports/automated-machine-learning-market — accessed 2026-08-27 — $2.59B (2025) → $15.98B (2030), 43.9% CAGR; Knowledge Sourcing alternative $1.93B → $11.31B.
- [C9] MarketDigits AutoML press release — https://www.globenewswire.com/news-release/2023/12/19/2798312/0/en/ — accessed 2026-08-27 — $10.38B by 2030, 36.76% CAGR (2023 vintage).
- [C10] Technavio AutoML Market 2025–29 — https://www.technavio.com/report/automl-market-industry-analysis — accessed 2026-08-27 — +$13.5B incremental, 44.8% CAGR.
- [C11] Grand View Research MLOps — https://www.grandviewresearch.com/industry-analysis/mlops-market-report — accessed 2026-08-27 — $2.19B (2024) → $16.6B (2030), 40.5% CAGR.
- [C12] MLOps base-year range: IMARC $4.0B, Fortune BI $2.98B, SNS $1.84B, Precedence $2.43B (all 2025), MarketsandMarkets $1.1B (2022) → $5.9B (2027) — respective report pages incl. https://www.imarcgroup.com/mlops-market, https://www.precedenceresearch.com/mlops-market — accessed 2026-08-27.
- [C13] MarketsandMarkets AI Agents Market — https://www.marketsandmarkets.com/Market-Reports/ai-agents-market-15761548.html — accessed 2026-08-27 — $7.84B (2025) → $52.62B (2030), 46.3% CAGR.
- [C14] Grand View Enterprise Agentic AI — https://www.grandviewresearch.com/industry-analysis/enterprise-agentic-ai-market-report — accessed 2026-08-27 — $2.6B (2024) → $24.5B (2030).
- [C15] Gartner agentic forecasts — https://www.gartner.com/en/newsroom/press-releases/2026-04-07-gartner-forecasts-supply-chain-management-software-with-agentic-ai-will-grow-to-53-billion-in-spend-by-2030 and https://softwarestrategiesblog.com/2026/08/05/gartner-5-95-trillion-ai-forecast-chatbot-era-2027-deadline/ — accessed 2026-08-27 — $53B SCM-agentic by 2030; $1.08T agentic software within $5.95T AI spend.
- [C16] Grand View AI Code Assistants Market — https://www.grandviewresearch.com/industry-analysis/ai-code-assistants-market-report — accessed 2026-08-27 — $8.5B (2025) → $42.8B (2033).
- [C17] Cursor/Anysphere metrics — https://research.contrary.com/company/cursor and https://www.digitalapplied.com/blog/cursor-ai-2b-revenue-enterprise-coding-market-leader — accessed 2026-08-27 — $2B ARR (Mar 2026), $1B ARR (Nov 2025), $2.3B Series D at $29.3B; 60% enterprise revenue; $200M ARR with zero marketing.
- [C18] W&B pricing — https://wandb.ai/site/pricing/ and https://www.vendr.com/marketplace/weights-biases — accessed 2026-08-27 — Pro from ~$35–50/user/mo; Enterprise custom (~$300+/unit/mo reported); SSO/audit-logs enterprise-gated.
- [C19] DataRobot pricing — https://www.vendr.com/marketplace/datarobot and https://www.itqlick.com/datarobot/pricing — accessed 2026-08-27 — $100k–500k/yr typical; $1M+/yr large deployments.
- [C20] H2O Driverless AI pricing — https://www.saasworthy.com/product/h2o-driverless-ai/pricing and https://www.oreateai.com/blog/demystifying-h2o-driverless-ai-pricing-what-you-need-to-know/ — accessed 2026-08-27 — ~$390k/3-yr license; $250–550k/yr mid-market deployments.
- [C21] Devin pricing 2026 — https://amux.io/blog/ai-coding-tools-pricing-2026/ and https://brainroad.com/devin-pricing-in-2026-real-cost-hidden-spend-and-alternatives/ — accessed 2026-08-27 — Free/Pro $20/Max $200/Teams $80/mo (Apr 2026 lineup); usage overruns common ($20 budget → $400 invoices).
- [C22] GitHub Copilot pricing — https://pecollective.com/tools/github-copilot-pricing/ — accessed 2026-08-27 — Free/$10 Pro/$39 Pro+/$19 Business/$39 Enterprise; usage-based AI credits from Jun 2026.
- [C23] Claude & ChatGPT consumer tiers — https://intuitionlabs.ai/articles/claude-pricing-plans-api-costs and https://www.cnbc.com/2026/04/09/openai-chatgpt-pro-subscription-anthropic-claude-code.html — accessed 2026-08-27 — Claude $20/$100/$200; ChatGPT $8/$20/$100/$200.
- [C24] Bloomberg Terminal cost — https://godeldiscount.com/blog/bloomberg-terminal-cost-2026 and https://www.thepricer.org/how-much-does-bloomberg-terminal-cost/ — accessed 2026-08-27 — $31,980/yr single seat (2025, +6.5% YoY); ~$28.3k multi-terminal; volume $20–22k.
- [C25] Levels.fyi ML engineer compensation — https://www.levels.fyi/t/software-engineer/title/machine-learning-engineer — accessed 2026-08-27 — US average total comp $279k; Meta median $495k; Google $288k.
- [C26] Sakana AI Series B — https://siliconangle.com/2025/11/17/sakana-ai-lands-135m-2-635b-valuation-accelerate-frontier-research-applied-ai-japan/ and https://getlatka.com/companies/sakana.ai — accessed 2026-08-27 — $135M at $2.65B post (Nov 2025); ~$30M ARR reported.
- [C27] Periodic Labs seed — https://siliconangle.com/2025/10/01/periodic-labs-raises-300m-accelerate-scientific-research-ai/ — accessed 2026-08-27 — $300M seed, a16z lead, ~$1B valuation, Oct 2025.
- [C28] Lila Sciences funding — https://www.lila.ai/news/announcing-the-close-of-our-series-a and https://www.hpcwire.com/2025/09/15/lila-sciences-nabs-235-million-to-build-scientific-superintelligence/ — accessed 2026-08-27 — $200M seed (Mar 2025) + $235M Series A + $115M ext. = $550M total, >$1.3B valuation.
- [C29] FutureHouse funding — https://www.futurehouse.org/about and https://techcrunch.com/2025/05/01/futurehouse-releases-ai-tools-it-claims-can-accelerate-science — accessed 2026-08-27 — Schmidt-funded 501(c)(3), ~$20M spend through 2024, 5-yr commitment.
- [C30] Cognition funding — https://www.cnbc.com/2025/09/08/cognition-valued-at-10point2-billion-two-months-after-windsurf-.html and https://www.idlen.io/news/cognition-devin-25-billion-valuation-windsurf-vibe-coding-april-2026/ — accessed 2026-08-27 — $400M at $10.2B (Sep 2025); $1B+ at $26B (May 2026); ARR $1M → $73M in 9 months.
- [C31] Lenny's Newsletter free-to-paid benchmarks — https://www.lennysnewsletter.com/p/what-is-a-good-free-to-paid-conversion — accessed 2026-08-27 — sales-assist 5–7% good / 10–15% great; self-serve 3–8%.
- [C32] Scarf Open Source Business Metrics Guide — https://about.scarf.sh/post/the-open-source-business-metrics-guide/ — accessed 2026-08-27 — hosted SaaS 1–5% of active users; enterprise 0.01–0.1%.
- [C33] Agentic AI funding trend analyses — https://agentmarketcap.ai/blog/2026/04/08/agentic-ai-funding-velocity-2026-sector-map-vertical-distribution and https://newmarketpitch.com/blogs/news/agentic-ai-funding-analysis — accessed 2026-08-27 — $6.42B in 2025; $2.66B/44 rounds through Apr 2026; $155M avg late rounds; control-point/measurable-outcome theses.
- [C34] CoreWeave–W&B acquisition — https://www.coreweave.com/news/coreweave-to-acquire-weights-biases---industry-leading-ai-developer-platform-for-building-and-deploying-ai-applications and https://pitchbook.com/news/articles/coreweave-acquires-ai-developer-platform-weights-biases — accessed 2026-08-27 — ~$1.7B, closed May 5 2025; 1,400+ customer orgs.
- [C35] Karpathy autoresearch repo trajectory — https://github.com/karpathy/autoresearch and https://o-mega.ai/articles/karpathy-autoresearch-complete-2026-guide — accessed 2026-08-27 — released Mar 7 2026; 66k stars in month one; ~86.2k stars by Jun 2026; dormant since Mar 26 2026 with 185 open issues/PRs. (Note: brief cites 78k+ stars/11k forks — both figures are consistent with the repo's mid-2026 range.)
- [C36] Hedge fund industry size — https://www.cnbc.com/2025/10/24/hedge-fund-assets-reach-5-trillion-as-quarterly-capital-flows-soar.html and https://coinlaw.io/hedge-fund-industry-statistics/ — accessed 2026-08-27 — $4.98T Q3 2025 record; quant strategies fastest-growing; AI/ML funds took 52% of 2025 inflows ($78.6B); Aurum tracks ~3,200 active funds.
- [C37] Quant fund cost structure — https://viprasol.com/blog/quantitative-hedge-fund/ and https://www.tommasomariaricci.com/blog/ai-for-hedge-funds — accessed 2026-08-27 — basic quant fund tech+data $200–500k/yr; AI budget split (compute 20–30%, talent 30–40%, vendor licenses 15–25%).
- [C38] The Financial Revolutionist, "Do hedge funds have data budgets?" — https://thefr.com/news/do-hedge-funds-have-data-budgets — accessed 2026-08-27 — datasets mostly <$100k/yr, many $100–250k; outcome-elastic budgets.
- [C39] Gartner citizen data science guidance — https://www.gartner.com/smarterwithgartner/how-to-use-citizen-data-scientists-to-maximize-your-da-strategy — accessed 2026-08-27 — citizen data scientists growing 5x faster than data scientists.
- [C40] WorldQuant — https://en.m.wikipedia.org/wiki/WorldQuant — accessed 2026-08-27 — ~1,000 employees; 125 PhD researchers (2017) — scale anchor for quant researcher headcount.
