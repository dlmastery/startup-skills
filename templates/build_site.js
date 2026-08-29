// TEMPLATE — multi-page run site builder. Copy to runs/<slug>/, fill CONFIG and
// PAGES, then: node build_site.js
//
// Why a builder rather than five hand-written files: head, nav and footer live in
// one shell, so pages cannot drift apart and adding a page is one array entry.
// Pair with templates/site.css (copy alongside; every page links it).
const fs = require('fs');

// ─── CONFIG — the only brand-specific block ──────────────────────────────────
const CONFIG = {
  brand: 'BRAND',                                   // company name in nav and footer
  accent: '#4338CA',                                // must match --accent in site.css
  ink: '#0B0B12',
  heroImage: 'visuals/hero/hero-1.jpg',             // og:image and home hero
  repo: 'https://github.com/OWNER/REPO',
  // Footer disclosure. Keep the honesty framing: say what this is and is not.
  disclosure: '<strong>BRAND</strong> is a demonstration run of an artifact pipeline. '
    + 'It is a founder-artifact pack, not a funded company or a shipping product. All '
    + 'proof-of-concept metrics are founder-reported and reproducible from the source '
    + 'repository; none are independently verified. Roadmap items are tagged as such.',
};

// Standard page set. Home routes; each interior page does exactly one job.
const NAV = [
  { slug: 'index',    label: 'Home' },
  { slug: 'product',  label: 'Product' },
  { slug: 'evidence', label: 'Evidence' },
  { slug: 'pricing',  label: 'Pricing' },
  { slug: 'about',    label: 'About' },
];

const LOGO = `<svg viewBox="0 0 100 100" aria-hidden="true"><rect width="100" height="100" rx="22" fill="${CONFIG.ink}"/>`
  + `<path d="M20 74 L38 52 L54 62 L80 26" stroke="${CONFIG.accent}" stroke-width="10" fill="none" stroke-linejoin="round" stroke-linecap="round"/></svg>`;

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
<meta property="og:image" content="${CONFIG.heroImage}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="site.css">
</head>
<body>

<nav class="site">
  <div class="w">
    <a class="brand" href="index.html">${LOGO} ${CONFIG.brand}</a>
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
      ${NAV.map(n => `<a href="${n.slug}.html">${n.label}</a>`).join('')}<a href="pack.html">The pack</a>
      <a href="${CONFIG.repo}">GitHub</a>
    </div>
    <p class="fine">${CONFIG.disclosure}</p>
  </div>
</footer>
</body>
</html>
`;

// ─── PAGES ───────────────────────────────────────────────────────────────────
// Home follows the researched anatomy in startup-website's SKILL.md, in this
// order, and does not get reordered to be clever:
//   hero (OUTCOME headline + who it is for + ONE cta + visual)
//   -> proof strip (within the first two scrolls)
//   -> why this exists (the problem in human terms, no jargon, no product yet)
//   -> how it works (three steps + the one rule)
//   -> who it is for  -> what you actually get
//   -> why you should believe it   <-- domain vocabulary is earned HERE, not before
//   -> get started
const PAGES = [
  { slug: 'index', title: 'TITLE', desc: 'DESCRIPTION',
    next: [{ href: 'product.html', k: 'Product', t: '...', d: '...' }],
    body: `<!-- hero, proof, problem, how, who, what-you-get, why-believe, cta -->` },
  { slug: 'product',  title: 'Product — BRAND',  desc: '...', next: [], body: `` },
  { slug: 'evidence', title: 'Evidence — BRAND', desc: '...', next: [], body: `` },
  { slug: 'pricing',  title: 'Pricing — BRAND',  desc: '...', next: [], body: `` },
  { slug: 'about',    title: 'About — BRAND',    desc: '...', next: [], body: `` },
];

let n = 0;
for (const page of PAGES) { fs.writeFileSync(`${page.slug}.html`, shell(page)); n++; }
console.log(`built ${n} pages: ${PAGES.map(p => p.slug + '.html').join(', ')}`);

// Verify: walk every href/src in the generated pages and assert the target exists.
// Exclude pack.html — template literals in its embedded script look like links.
let bad = 0, checked = 0;
for (const page of PAGES) {
  const s = fs.readFileSync(`${page.slug}.html`, 'utf8');
  for (const m of s.matchAll(/(?:href|src)="([^"#][^"]*?)"/g)) {
    const t = m[1].split('#')[0];
    if (!t || /^(https?:|data:|mailto:)/.test(t)) continue;
    checked++;
    if (!fs.existsSync(t)) { console.log(`  BROKEN ${page.slug}.html -> ${t}`); bad++; }
  }
}
console.log(`${checked} local refs checked, ${bad} broken`);
