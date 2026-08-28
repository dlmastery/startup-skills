# Founder story — dlmastery

*First person. Usable verbatim in applications and intros. Identity per A5: solo, technical, pseudonymous.*

I built an autonomous research system that ran 265+ experiments on a single problem, validated results across six unrelated domains, and logged every runner-executed trial, kept and discarded — and I never wrote a line of Python.

That sentence is the company.

For months I ran the whole proof of concept through pure natural-language steering: I told coding agents what to investigate, what protocol to hold, when to pivot, when to self-reflect on a stall — and the agents wrote every line of code. Fraud detection, EUR/USD signals, Higgs classification, medical-image OOD detection, face clustering, LLM training. Six domains, one protocol, zero hand-written Python — validated by my own runs, not yet by anyone else's. On a consumer Intel laptop that blue-screened under load more times than I counted — which is why the system checkpoints aggressively enough that a BSOD costs minutes, not campaigns. The laptop was not a constraint I overcame; it was a design input. If the loop survives my hardware, it runs on anyone's.

Somewhere in month two I understood what I was actually looking at. The agents never got tired, never ran out of ideas, never stopped executing. What they did instead was cheat — not maliciously, but the way every unsupervised optimizer cheats: leak a little future into a split, pick the lucky seed, fall in love with the metric instead of the truth. The same failure modes the literature later documented in every flagship autonomous-research system. And I noticed that everything I contributed as the human in the loop was some form of *no*: no, that split leaks; no, cite the paper or discard the idea; no, one change per experiment; no, the champion stands until something strictly beats it.

**Execution stopped being the bottleneck; discipline did.** That is the asymmetric insight this company is built on, and I have not seen anyone else act on it. The field keeps making agents more capable. Nobody is making them more honest. So I wrote the discipline down — all of it — into a binding constitution: the 7-step method, the three pre-commit gates, the purged splits, the fingerprinted metric, the rule that only strict improvements survive. The constitution is my judgment, externalized and enforceable. It is what a research advisor would be if a research advisor could be a file that never gets tired at 2am.

The proof it works isn't the champion numbers — I'm the first to say the flagship Sharpe is founder-reported and selected from 265+ trials, which is exactly the statistic the deflated Sharpe ratio exists to discount; we publish the corrected number ourselves, ledger attached, before anyone else computes it. The proof is the **steering log**. Every instruction I gave the system over months of operation fits in one readable file, and none of it is code. That log is the boundary of the human job: a technical lead steers; the constitution judges; the agent executes. Anyone who reads it understands the product in ten minutes, because the product is the log's counterparty.

Why am I the founder who wins the next ten years of this problem? Not because I can out-research the labs — I can't, and the plan doesn't require it. Three reasons:

1. **I've already run the factory.** Not designed it — operated it, for months, across six domains, through hardware failures and stalls and every way an autonomous loop finds to fool you. Every one of those failure modes is now a section in the constitution. A team starting today starts at my month zero.
2. **I hold the first ledger.** Every runner-executed trial is logged, kept and discarded; the completeness audit of that ledger (E2) is week-1 work. The moat this company compounds is exactly that corpus: trial ledgers with the discards, gate catch-rates, what-worked-where priors across domains. A fork can copy the constitution file in a day; it cannot backfill campaigns it never ran. Mine started months ago.
3. **I have nothing to protect but the standard.** The incumbents in this space sell benchmark headlines; deflating your own flagship number is structurally against their interests and native to mine. The brand this market will trust is the one that corrects itself first — and that posture is cheap for me and expensive for everyone else.

One practical note, because it always comes up: I work under the byline dlmastery. Where legal identity is required — accelerator forms, fund due diligence — this narrative maps to it; the byline stays dlmastery.

The 94,800 people who starred a minimal version of this loop — and then watched it go unmaintained — are the market telling us where the gap is. Fourteen of its sixteen notable forks ported the plumbing to new hardware. None added the science. I've spent months building nothing but the science.

Ideas, not clusters, are becoming the bottleneck of empirical research. When that finishes happening, every scientist with a laptop will run a research operating system, and it will need a conscience compiled in. I've already built the first one, steered it in plain English, and kept the receipts.
