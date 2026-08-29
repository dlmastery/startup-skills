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
  desc:'Point Ascent at your dataset and metric. It runs literature-grounded, audit-gated experiments for days on a commodity laptop and hands you the evidence behind every kept result.',
  next:[
    {href:'product.html',k:'Product',t:'How the loop actually works',d:'The seven steps, the three pre-commit gates, and what you see each morning.'},
    {href:'evidence.html',k:'Evidence',t:'Six domains, one protocol',d:'Every result, framed as founder-reported, with what we deliberately do not claim.'},
    {href:'pack.html',k:'The pack',t:'All 64 documents',d:'Research, strategy, tech, financials — rendered, sourced and cross-linked.'},
  ],
  body:`
<header class="hero">
  <div class="w">
    <span class="eyebrow">Autonomous ML research operating system</span>
    <h1>Improves your metric around the clock. Shows you the <span class="hl">evidence</span>.</h1>
    <p class="lede">Point Ascent at your dataset and your metric. It runs literature-grounded, audit-gated experiments for days on a commodity laptop, keeps only strict improvements, and hands you a fingerprinted, one-command-reproducible bundle for every kept champion.</p>
    <div class="cta">
      <a class="btn lg" href="product.html">See how it works</a>
      <a class="btn lg ghost" href="pack.html">Read the full pack</a>
    </div>
    <div class="ledger">
      <div class="k">The number we lead with is the one our own audit discounts</div>
      <div class="v"><b>+6.52 raw</b> (founder-reported) · deflated: week-1 work · N=265+ trials</div>
      <div class="n">A champion selected from 265+ trials is exactly what the deflated Sharpe ratio exists to discount. So we publish the corrected number ourselves, ledger attached, before anyone else computes it.</div>
    </div>
  </div>
  <div class="heroart">
    <img src="visuals/hero/hero-ratchet.jpg" width="1600" height="1067" alt="An ascending ridgeline of fine vertical strokes, each strictly higher than the last." loading="eager">
  </div>
</header>

<div class="proof">
  <div class="w">
    <div class="c"><div class="n">94,800</div><div class="l">stars on the loop nobody maintains<span class="src">A1</span></div></div>
    <div class="c"><div class="n">0 of 16</div><div class="l">notable forks that added any rigor<span class="src">A2</span></div></div>
    <div class="c"><div class="n">6</div><div class="l">domains validated on one protocol</div></div>
    <div class="c"><div class="n">82.0%</div><div class="l">gross margin at 150 users, by construction</div></div>
  </div>
</div>

<section>
  <div class="w">
    <span class="eyebrow">The argument</span>
    <h2>Three things have to be true. All three are checkable.</h2>
    <p class="sub">Every number in this pack carries its source tag. Where a figure is founder-reported or assumed, it says so at the point of use.</p>
    <div class="g3">
      <div class="card"><div class="n">01 — THE GAP</div><h3>Empirically unfilled</h3>
        <p><b>94,800</b> stars and <b>13,400</b> forks in six months; no active maintainer since 2026-03-26.<span class="src">A1</span></p>
        <p><b>0 of 16</b> curated forks added rigor. The sustained-campaign × audit-gated quadrant has no occupant.</p>
        <p><a href="evidence.html" style="color:var(--accent);font-weight:600">See the evidence →</a></p></div>
      <div class="card"><div class="n">02 — THE MECHANISM</div><h3>Built, running, measured</h3>
        <p>Removing the citation gate raised invalid experiments <b>42%</b> and produced <b>3</b> leakage incidents.</p>
        <p>Three gates run <b>before commit</b>. A failing experiment never enters the champion line.</p>
        <p><a href="product.html" style="color:var(--accent);font-weight:600">See the product →</a></p></div>
      <div class="card"><div class="n">03 — THE ECONOMICS</div><h3>Margin is architectural</h3>
        <p>BYOK puts token COGS on the user's card: <b>82.0%</b> gross margin at 150 users.</p>
        <p><b>$125/mo</b> against <b>$1,100/day</b> of the practitioner's own time.<span class="src">C25</span></p>
        <p><a href="pricing.html" style="color:var(--accent);font-weight:600">See pricing →</a></p></div>
    </div>
    <div class="note"><b>What would falsify all three:</b> practitioners will not trust — or pay for — experiments they did not run themselves. That is the pack's declared riskiest assumption, and a 15-practitioner trust test in the first 90 days exists to settle it before any hosted product gets built.</div>
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
