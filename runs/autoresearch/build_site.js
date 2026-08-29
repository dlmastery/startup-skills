// Build the multi-page run site from one shell, so nav, head and footer cannot
// drift between pages. Run from runs/<slug>/:  node build_site.js
const fs = require('fs');

const NAV = [
  { slug: 'index',    label: 'Home' },
  { slug: 'product',  label: 'Product' },
  { slug: 'evidence', label: 'Evidence' },
  { slug: 'pricing',  label: 'Pricing' },
  { slug: 'about',    label: 'About' },
];

const LOGO = `<svg viewBox="0 0 100 100" aria-hidden="true"><rect width="100" height="100" rx="22" fill="#0B0B12"/>`
  + `<path d="M20 74 L38 52 L54 62 L80 26" stroke="#4338CA" stroke-width="10" fill="none" stroke-linejoin="round" stroke-linecap="round"/></svg>`;

const shell = (page) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>${page.title}</title>
<meta name="description" content="${page.desc}">
<meta property="og:title" content="${page.title}">
<meta property="og:description" content="${page.desc}">
<meta property="og:type" content="website">
<meta property="og:image" content="visuals/hero/hero-ratchet.jpg">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='%230B0B12'/><path d='M20 74 L38 52 L54 62 L80 26' stroke='%234338CA' stroke-width='10' fill='none' stroke-linejoin='round' stroke-linecap='round'/></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="site.css">
</head>
<body>

<nav class="site">
  <div class="w">
    <a class="brand" href="index.html">${LOGO} Ascent</a>
    <div class="nl">
      ${NAV.filter(n => n.slug !== 'index').map(n =>
        `<a href="${n.slug}.html"${n.slug === page.slug ? ' class="on"' : ''}>${n.label}</a>`).join('\n      ')}
      <a href="pack.html">The pack</a>
    </div>
    <a class="btn" href="pack.html">Read the pack</a>
  </div>
</nav>

${page.body}

<div class="next">
  <div class="w">
    <span class="eyebrow">Keep reading</span>
    <div class="row">
      ${page.next.map(n => `<a href="${n.href}"><div class="k">${n.k}</div><div class="t">${n.t}</div><div class="d">${n.d}</div></a>`).join('\n      ')}
    </div>
  </div>
</div>

<footer>
  <div class="w">
    <div class="fl">
      <a href="index.html">Home</a><a href="product.html">Product</a><a href="evidence.html">Evidence</a>
      <a href="pricing.html">Pricing</a><a href="about.html">About</a><a href="pack.html">The pack</a>
      <a href="https://github.com/dlmastery/startup-skills">GitHub</a>
    </div>
    <p class="fine"><strong>Ascent</strong> is a demonstration run of the <span class="mono">startup-skills</span> artifact pipeline, generated 2026-08-28. It is a founder-artifact pack, not a funded company or a shipping product. All proof-of-concept metrics are founder-reported and reproducible from the source repository; none are independently verified. Roadmap items are tagged as such throughout and are not claimed as shipped. Upstream credit: the minimal research loop this work extends is Karpathy's <em>autoresearch</em>.</p>
  </div>
</footer>
</body>
</html>
`;

const PAGES = [
{ slug:'index', title:'Ascent — the autonomous ML research operating system',
  desc:'Ascent runs machine-learning experiments overnight on your own laptop and proves the results hold up. You get what it kept, what it threw away, and the evidence for both.',
  next:[
    {href:'product.html',k:'Product',t:'How the loop actually works',d:'The seven steps, the three checks that run before anything is kept, and what you see each morning.'},
    {href:'evidence.html',k:'Evidence',t:'Does it work?',d:'Six domains on one protocol, and an explicit list of what we do not claim.'},
    {href:'pricing.html',k:'Pricing',t:'What it costs',d:'About $3-12 a day of your own compute, and $125 a month for the layer that checks it.'},
  ],
  body:`
<header class="hero">
  <div class="w">
    <span class="eyebrow">Autonomous ML research</span>
    <h1>It runs the experiments while you sleep &mdash; and proves the result is <span class="hl">real</span>.</h1>
    <p class="lede">For researchers, quants and applied-ML engineers who have a dataset, a number they need to improve, and nobody to check their work at 2am. Ascent runs the experiments continuously on an ordinary laptop and keeps only what genuinely holds up.</p>
    <div class="cta">
      <a class="btn lg" href="product.html">See how it works</a>
      <a class="btn lg ghost" href="evidence.html">See the evidence</a>
    </div>
  </div>
  <div class="heroart">
    <img src="visuals/hero/hero-ratchet.jpg" width="1600" height="1067" alt="An ascending ridgeline of fine vertical strokes, each strictly higher than the last." loading="eager">
  </div>
</header>

<div class="proof">
  <div class="w">
    <div class="c"><div class="n">94,800</div><div class="l">people starred the minimal version of this loop in six months<span class="src">A1</span></div></div>
    <div class="c"><div class="n">0 of 16</div><div class="l">of its notable forks added any rigor<span class="src">A2</span></div></div>
    <div class="c"><div class="n">294</div><div class="l">published papers with documented data leakage<span class="src">D5</span></div></div>
    <div class="c"><div class="n">6</div><div class="l">domains validated on one protocol <em>(founder-reported)</em></div></div>
  </div>
</div>

<section>
  <div class="w">
    <span class="eyebrow">Why this exists</span>
    <h2>Most results that look good do not survive contact with reality.</h2>
    <p class="sub">Try enough ideas and one will look brilliant by luck alone. Careful researchers guard against that by hand &mdash; holding data back, checking the literature, refusing to keep something that only worked once. It is slow, unglamorous work, and at 2am nobody does it properly. That is not a character flaw. It is a workload problem, and it is the one nobody has automated.</p>
    <div class="g3">
      <div class="card"><div class="n">DOING IT BY HAND</div><h3>Careful, and far too slow</h3><p>A practitioner runs <b>one to three</b> experiments a day, and spends <b>38&ndash;45%</b> of their time building scaffolding rather than testing ideas.<span class="src">A39</span></p></div>
      <div class="card"><div class="n">AUTOMATING IT BADLY</div><h3>Fast, and quietly wrong</h3><p>Under independent review, <b>42%</b> of the best-known automated research system's experiments failed outright.<span class="src">A16</span></p></div>
      <div class="card"><div class="n">THE GAP</div><h3>Nobody automated the caution</h3><p>Plenty of tools run more experiments. None enforce the discipline that decides which results deserve to be believed.</p></div>
    </div>
  </div>
</section>

<section class="alt">
  <div class="w">
    <span class="eyebrow">How it works</span>
    <h2>Three steps, and one rule it cannot talk its way past.</h2>
    <div class="g3">
      <div class="card"><div class="n">STEP 1</div><h3>Point it at your data</h3><p>You give it a dataset and the single number you want to improve &mdash; an accuracy, a forecast error, a risk-adjusted return. Setup takes about twenty minutes and needs no ML engineering.</p></div>
      <div class="card"><div class="n">STEP 2</div><h3>It works overnight</h3><p>It forms a hypothesis, checks it against published research, changes <b>one thing</b>, measures, then keeps or discards. Then again, for as long as you let it &mdash; on your laptop, on your own API key.</p></div>
      <div class="card"><div class="n">STEP 3</div><h3>You get something defensible</h3><p>A result, the full record of how it was reached, and a package a skeptical colleague can re-run with a single command.</p></div>
    </div>
    <p class="sub" style="margin-top:32px"><b>The rule:</b> three automatic checks run <em>before</em> any result is recorded &mdash; that the data was split honestly, that the idea was grounded in real published work, and that the reasoning was written down. Fail one and the experiment is discarded. The system cannot override them, and neither can you.</p>
  </div>
</section>

<section>
  <div class="w">
    <span class="eyebrow">Who it is for</span>
    <h2>One system, three very different users.</h2>
    <div class="g3">
      <div class="card"><div class="n">THE DOMAIN SCIENTIST</div><h3>You have the data, not the ML team</h3><p>A biologist with an interesting dataset and no machine-learning depth. The system supplies the method &mdash; and catches the mistakes a lab engineer would have caught.</p></div>
      <div class="card"><div class="n">THE SOLO QUANT</div><h3>You can already climb the hill</h3><p>What you cannot do is referee yourself at midnight on the fortieth variant of a signal. That is the part being automated.</p></div>
      <div class="card"><div class="n">THE RESEARCH LEAD</div><h3>You have to prove it to someone</h3><p>You are buying the audit trail: who ran what, on which data, and why the result was believed. The reconstruction meeting stops happening.</p></div>
    </div>
  </div>
</section>

<section class="alt">
  <div class="w">
    <span class="eyebrow">What you actually get</span>
    <h2>Four things, every morning.</h2>
    <div class="g2">
      <div class="card"><div class="n">01</div><h3>What it kept</h3><p>The improvements that survived every check, each strictly better than what came before it.</p></div>
      <div class="card"><div class="n">02</div><h3>What it threw away</h3><p>Everything discarded, and why &mdash; usually far more than it kept. That pile is what makes the kept results mean anything.</p></div>
      <div class="card"><div class="n">03</div><h3>A package you can hand over</h3><p>Configuration, data splits, reasoning and results, re-runnable by someone who has no reason to trust you.</p></div>
      <div class="card"><div class="n">04</div><h3>The honest version of the number</h3><p>Corrected for how many things were tried before it appeared. That correction is explained next.</p></div>
    </div>
  </div>
</section>

<section>
  <div class="w">
    <span class="eyebrow">Why you should believe it</span>
    <h2>If you try 265 things, the best one flatters you.</h2>
    <p class="sub">This is the part every backtest gets wrong. Try enough ideas and the winner looks impressive even when nothing real is happening underneath. Statisticians have a correction for exactly this, and it needs one input almost nobody bothers to keep: <b>how many things were actually tried</b>, failures included. Ascent keeps that count on every experiment &mdash; which is what lets it publish the discounted number rather than the flattering one.</p>
    <div class="ledger">
      <div class="k">Our own flagship result, with our own correction applied</div>
      <div class="v"><b>+6.52 raw</b> (founder-reported) &middot; deflated: week-1 work &middot; N=265+ trials</div>
      <div class="n">Every competitor leads with their best number. We lead with the discount on ours and attach the ledger that lets you check it. A competitor cannot copy that without giving up their best slide.</div>
    </div>
    <div class="g3" style="margin-top:34px">
      <div class="card"><div class="n">01 &mdash; THE GAP</div><h3>Empirically unfilled</h3>
        <p>The minimal loop drew <b>94,800</b> stars, then lost its maintainer. Of sixteen notable forks, <b>none</b> added rigor.<span class="src">A2</span></p>
        <p><a href="evidence.html" style="color:var(--accent);font-weight:600">See the evidence &rarr;</a></p></div>
      <div class="card"><div class="n">02 &mdash; THE MECHANISM</div><h3>Built, running, measured</h3>
        <p>Turning off one check raised invalid experiments <b>42%</b> and produced <b>3</b> leakage incidents. The discipline is worth its overhead.</p>
        <p><a href="product.html" style="color:var(--accent);font-weight:600">See the product &rarr;</a></p></div>
      <div class="card"><div class="n">03 &mdash; THE ECONOMICS</div><h3>Margin is architectural</h3>
        <p>Users pay their own compute bill directly, so it never touches our margin: <b>82.0%</b> gross at 150 users.</p>
        <p><a href="pricing.html" style="color:var(--accent);font-weight:600">See pricing &rarr;</a></p></div>
    </div>
    <div class="note"><b>What would prove us wrong:</b> that practitioners will not trust &mdash; or pay for &mdash; experiments they did not run themselves. It is the riskiest thing we believe, and a 15-practitioner trust test in the first 90 days exists to settle it before anything hosted gets built.</div>
  </div>
</section>

<section class="alt">
  <div class="w">
    <span class="eyebrow">Get started</span>
    <h2>Read the whole argument, with its sources attached.</h2>
    <p class="sub">Sixty-four documents covering research, strategy, product, architecture, validation and financials &mdash; every claim tagged to where it came from, and every gap named rather than hidden.</p>
    <div class="cta">
      <a class="btn lg" href="pack.html">Open the pack</a>
      <a class="btn lg ghost" href="pricing.html">See pricing</a>
    </div>
  </div>
</section>` },

{ slug:'product', title:'Product — Ascent', desc:'A binding constitution enforces a seven-step method with three programmatic pre-commit gates. See what the system produces each morning.',
  next:[
    {href:'evidence.html',k:'Evidence',t:'Does it actually work?',d:'Six domains, the ablation that measures the gates, and what we do not claim.'},
    {href:'pricing.html',k:'Pricing',t:'What it costs to run',d:'BYOK economics: $3–12/day of your own tokens, $125/mo for the rigor layer.'},
    {href:'pack.html#product/ux_spec.md',k:'Deep dive',t:'The full UX specification',d:'Twelve screens, the micro-interactions, and which tier each belongs to.'},
  ],
  body:`
<header class="phead">
  <div class="w">
    <span class="eyebrow">Product</span>
    <h1>A constitution enforces what a tired human skips.</h1>
    <p class="lede">A binding 52-section protocol governs every experiment. Three programmatic checks run before any commit — not linting, not advice: an experiment that fails a gate never enters the champion line. Refusal is the default state.</p>
  </div>
</header>

<section>
  <div class="w">
    <span class="eyebrow">The loop</span>
    <h2>Seven steps, enforced on every experiment</h2>
    <div class="loop">
      <span class="chip">Diagnose</span><span class="sep">→</span><span class="chip k">Literature-ground</span><span class="sep">→</span>
      <span class="chip">Hypothesize</span><span class="sep">→</span><span class="chip">Execute</span><span class="sep">→</span>
      <span class="chip">Analyze</span><span class="sep">→</span><span class="chip">Document</span><span class="sep">→</span><span class="chip">Checkpoint</span>
    </div>
    <div class="g3">
      <div class="card"><div class="n">GATE 1</div><h3>Data integrity</h3><p>Purged and embargoed super-folds. <span class="mono">validate_no_overlap()</span> runs programmatically and the runner refuses to launch on any overlap.<span class="src">D8</span></p></div>
      <div class="card"><div class="n">GATE 2</div><h3>Citation rigor</h3><p>Every reference verified against live indexes before compute is spent. Ungated fabrication rates run <b>14–95%</b>; a refused experiment costs a message, not a GPU-hour.<span class="src">D35</span></p></div>
      <div class="card"><div class="n">GATE 3</div><h3>Reasoning completeness</h3><p>The agent may not, by contract, write a result row. The runner writes what actually happened.<span class="src">D33</span></p></div>
    </div>
    <div class="note"><b>One bypass, and it is visible.</b> The single override writes a sentinel tag into the run log, so an auditor grepping for it finds every experiment that went around a gate. The fingerprint makes the metric <b>tamper-evident, not tamper-refusing</b><span class="rm">ROADMAP</span> and "monotonic" always means monotonic <b>in the composite proxy</b>.</div>
    <div class="band">
      <img src="visuals/hero/hero-gates.jpg" width="1600" height="1067" alt="Three translucent panes with a beam passing through, emerging clarified." loading="lazy">
      <div class="cap">What passes is not what survived review — it is what was never allowed to enter.</div>
    </div>
  </div>
</section>

<section class="alt">
  <div class="w">
    <span class="eyebrow">What you see</span>
    <h2>The trial ledger is the demo</h2>
    <p class="sub">Not a dashboard of green numbers. A laboratory notebook that cannot be falsified — read like a trading terminal, steered like a chat.</p>
    <div style="margin-top:34px">
      <div class="mom"><h3>Trial ledger, discards included</h3>
        <p>An append-only log records every experiment — kept <em>and</em> discarded — with seed, config, git commit and gate verdicts.<span class="src">D6</span></p>
        <div class="see">Trial 218 of this campaign — 9 kept, 209 discarded. Nothing is ever quietly deleted.</div></div>
      <div class="mom"><h3>Deflated-statistic panel</h3>
        <p>The deflated Sharpe ratio, computed from the true ledger count, beside every raw champion figure.<span class="src">D7</span></p>
        <div class="see">Sharpe +6.52 raw · deflated X over 265 trials — full ledger attached.</div></div>
      <div class="mom"><h3>Super-fold split builder</h3>
        <p>Purge, embargo and label-horizon buffers drawn on your actual dates.<span class="src">D8</span></p>
        <div class="see">0 overlapping rows across 7 folds — verified.</div></div>
      <div class="mom"><h3>Goodhart divergence monitor</h3>
        <p>Tracks the composite proxy against each raw target metric and alerts when they diverge.<span class="src">D31</span></p>
        <div class="see">Composite up 4% over last 30 trials; raw test AUC flat — review metric weights or steer.</div></div>
      <div class="mom"><h3>Trial-count-corrected acceptance gate<span class="rm">ROADMAP</span></h3>
        <p>The keep/discard threshold rises with ledger count. No published system has this gate — the proof of concept included.</p>
        <div class="see">Improvement +0.011 &lt; deflated threshold +0.019 at N=218 trials — discarded; logged to ledger.</div></div>
    </div>
  </div>
</section>` },

{ slug:'evidence', title:'Evidence — Ascent', desc:'Six domains on one protocol, the ablation that measures the gates, and an explicit list of what we do not claim.',
  next:[
    {href:'pricing.html',k:'Pricing',t:'The economics',d:'Why BYOK makes margin architectural rather than a pricing hope.'},
    {href:'about.html',k:'About',t:'Why this founder',d:'265+ experiments across six domains, and not a line of hand-written Python.'},
    {href:'pack.html#tech/not_vaporware.md',k:'Deep dive',t:'The honesty ledger',d:'What the story implies and the repository lacks, listed by name.'},
  ],
  body:`
<header class="phead">
  <div class="w">
    <span class="eyebrow">Evidence</span>
    <h1>Six domains, one protocol, full ledgers.</h1>
    <p class="lede">All results are <strong>founder-reported</strong>, single-seed in most domains, on public datasets with contamination caveats, and reproducible from the repository — not independently verified. That framing is binding on every artifact we publish.<span class="src a">A6</span></p>
  </div>
</header>

<section>
  <div class="w">
    <div class="tw">
      <table>
        <thead><tr><th>Domain</th><th>Result</th><th>Trials</th></tr></thead>
        <tbody>
          <tr><td>EUR/USD signals</td><td class="n">Sharpe +6.52 <span style="font-family:var(--sans);color:var(--muted)">— raw, pre-deflation</span></td><td class="n">265+</td></tr>
          <tr><td>QQQ signals</td><td class="n">Composite Sharpe +1.32 · PSR 0.997</td><td class="n">216+</td></tr>
          <tr><td>Higgs classification</td><td class="n">AUROC ≈ 0.8675+</td><td class="n">—</td></tr>
          <tr><td>PathMNIST OOD</td><td class="n">AUC 0.997</td><td class="n">—</td></tr>
          <tr><td>Olivetti faces</td><td class="n">Conditional ARI 0.874</td><td class="n">—</td></tr>
          <tr><td>Fraud detection</td><td class="n">AUC 0.6097 <span style="font-family:var(--sans);color:var(--muted)">vs AutoGluon 0.522 / H2O 0.518</span></td><td class="n">—</td></tr>
        </tbody>
      </table>
    </div>
    <div class="g2">
      <div class="card"><div class="n">ABLATION</div><h3>The rigor layer pays for its overhead</h3><p>Removing the citation gate spiked invalid experiments <b>42%</b> and produced <b>3</b> leakage incidents the gated arm did not. <em>One task, one seed, founder-reported.</em></p></div>
      <div class="card"><div class="n">SCOPE</div><h3>What we do not claim</h3><p>Attestation packs, BYO-endpoint, fingerprint <em>refusal</em> and the acceptance gate are roadmap<span class="rm">ROADMAP</span> — named as such everywhere, never sold as shipped.</p></div>
    </div>
    <div class="band">
      <img src="visuals/hero/hero-ledger.jpg" width="1600" height="1067" alt="A dense grid of faint cells with a scattered few glowing — kept results among the discarded." loading="lazy">
      <div class="cap">Trial 218 — 9 kept, 209 discarded. The denominator every honest statistic needs.</div>
    </div>
  </div>
</section>

<section class="alt">
  <div class="w">
    <span class="eyebrow">The gap</span>
    <h2>The demand is proven. The supply walked away.</h2>
    <div class="g3">
      <div class="card"><div class="n">DEMAND</div><h3>94,800 stars in six months</h3><p>13,400 forks on the minimal loop — and no active maintainer since 2026-03-26.<span class="src">A1</span></p></div>
      <div class="card"><div class="n">SUPPLY</div><h3>0 of 16 forks added rigor</h3><p>Fourteen are hardware ports or translations; roughly one is a domain extension.<span class="src">A2</span></p></div>
      <div class="card"><div class="n">FIELD</div><h3>294 papers, 17 fields</h3><p>Documented data leakage in published, peer-reviewed work — the failure the gates exist to prevent.<span class="src">D5</span></p></div>
    </div>
  </div>
</section>` },

{ slug:'pricing', title:'Pricing — Ascent', desc:'Bring your own key: token costs sit on the user\&rsquo;s card by construction, so gross margin is 82% at 150 users.',
  next:[
    {href:'product.html',k:'Product',t:'What you get for it',d:'The gates, the ledger, and the five moments that define the product.'},
    {href:'pack.html#financials/unit_economics.md',k:'Deep dive',t:'Unit economics in full',d:'CAC, payback, LTV bands and the sensitivity that moves them.'},
    {href:'about.html',k:'About',t:'Who is building this',d:'The founder-market fit argument, stated without decoration.'},
  ],
  body:`
<header class="phead">
  <div class="w">
    <span class="eyebrow">Pricing</span>
    <h1>Bring your own key, so tokens never touch our margin.</h1>
    <p class="lede">A 24/7 steering loop on mid-tier models costs <span class="mono">$3–12/day</span> of your own tokens — against a conservative <span class="mono">$1,100/day</span> for your own time. BYOK is the architecture, not a discount gimmick.<span class="src a">A12</span></p>
  </div>
</header>

<section>
  <div class="w">
    <div class="tiers">
      <div class="tier"><div class="tn">Free — OSS core</div><div class="tp">$0</div>
        <ul><li>Full loop, constitution, gates, super-folds</li><li>Laptop-native, BYOK</li><li>Complete for a solo run — the trust channel, not a crippled trial</li></ul></div>
      <div class="tier hi"><div class="tn">Pro — BYOK</div><div class="tp">$125<small>per month · $100–150 band</small></div>
        <ul><li>Hosted campaign dashboards</li><li>SOTA catalog subscription</li><li>Deflation reports on demand</li><li>Champion-bundle publishing</li><li>Steering copilot, metered and capped</li></ul></div>
      <div class="tier"><div class="tn">Team</div><div class="tp">$500–1k<small>per month + usage</small></div>
        <ul><li>Parallel research streams</li><li>Shared winner archives</li><li>Hosted runs at cost × 1.3–1.5</li></ul></div>
      <div class="tier"><div class="tn">Enterprise<span class="rm">YEAR 2+</span></div><div class="tp">$100k+<small>per year</small></div>
        <ul><li>Audit-trail retention SLAs</li><li>On-prem / VPC, source escrow</li><li>Priced now to anchor the corridor — <em>not sold now</em></li></ul></div>
    </div>
    <div class="note"><b>Why a hosted flat rate would break:</b> it would carry <b>$90–360/mo</b> of token COGS against <b>$125</b> of revenue — negative margin on exactly the heaviest, best users. BYOK inverts that: the heaviest user is the happiest customer, not the most expensive one.</div>
  </div>
</section>

<section class="alt">
  <div class="w">
    <span class="eyebrow">The substitution</span>
    <h2>One-tenth of one loaded working day, per month.</h2>
    <div class="g3">
      <div class="card"><div class="n">YOUR TOKENS</div><h3>$3–12 / day</h3><p>Mid-tier routed, on your own key. All-frontier routing would run $20–60/day — the frontier slice is deliberately thin.</p></div>
      <div class="card"><div class="n">YOUR TIME</div><h3>$1,100 / day</h3><p>Conservative loaded cost of the practitioner this replaces a fraction of.<span class="src">C25</span></p></div>
      <div class="card"><div class="n">MARGIN</div><h3>82.0% → ≥85%</h3><p>Fully-loaded gross margin at 150 users, rising past 300. Architectural, not aspirational.</p></div>
    </div>
  </div>
</section>` },

{ slug:'about', title:'About — Ascent', desc:'The founder ran the research factory for months before naming the company: six domains, zero hand-written Python, every trial logged.',
  next:[
    {href:'pack.html#narrative/founder_story.md',k:'Deep dive',t:'The founder story in full',d:'First person, and usable verbatim in applications and intros.'},
    {href:'evidence.html',k:'Evidence',t:'The results, framed honestly',d:'Six domains and an explicit list of what is not claimed.'},
    {href:'pack.html',k:'The pack',t:'All 64 documents',d:'Every claim on this site traces to one of them.'},
  ],
  body:`
<header class="phead">
  <div class="w">
    <span class="eyebrow">About</span>
    <h1>Execution stopped being the bottleneck. Discipline did.</h1>
  </div>
</header>

<section>
  <div class="w">
    <blockquote class="quote">I ran 265+ experiments across six domains, logged every trial kept and discarded, and <span>never wrote a line of Python.</span></blockquote>
    <p class="sub" style="margin-top:26px">Every instruction given to the system over months fits in one readable file, and none of it is code. Somewhere in month two the pattern became obvious: everything the human contributed was some form of <em>no</em> — no, that split leaks; no, cite the paper or discard the idea; no, one change per experiment; no, the champion stands until something strictly beats it.</p>
    <p class="sub">The field keeps making agents more capable. Nobody is making them more honest. So the discipline got written down — all of it — into a constitution that never gets tired at 2am.</p>
    <div class="band">
      <img src="visuals/hero/hero-folds.jpg" width="1600" height="1067" alt="Stratified bands separated by deliberate empty gutters that never let one touch another." loading="lazy">
      <div class="cap">Purged and embargoed splits: train = data − union(val + test + buffers). Leakage made structurally impossible, not merely checked for.</div>
    </div>
  </div>
</section>

<section class="alt">
  <div class="w">
    <span class="eyebrow">Why now</span>
    <h2>The loop did not exist as a dependable capability 18 months ago.</h2>
    <div class="g3">
      <div class="card"><div class="n">HORIZON</div><h3>~12h at 50% reliability</h3><p>Agent task horizons by mid-2026, doubling roughly every four months.<span class="src">B2</span></p></div>
      <div class="card"><div class="n">DIVISION</div><h3>Agents 4× at 2 hours</h3><p>Humans win 2× at 32 hours. Execution is theirs; judgment is ours.<span class="src">B4</span></p></div>
      <div class="card"><div class="n">COST</div><h3>~40–50× / year</h3><p>Fall in cost per unit of capability, which makes a 24/7 steering loop a line item rather than a project.<span class="src">B16</span></p></div>
    </div>
  </div>
</section>` },
];

let n = 0;
for (const page of PAGES) { fs.writeFileSync(`${page.slug}.html`, shell(page)); n++; }
console.log(`built ${n} pages: ${PAGES.map(p => p.slug + '.html').join(', ')}`);
