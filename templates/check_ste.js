#!/usr/bin/env node
// check_ste.js — lint markdown prose against the ASD-STE100 rules this pack binds.
//
// Usage:  node templates/check_ste.js <file-or-dir> [...more] [--strict] [--top N]
//         --strict   exit 1 when any file has violations (for gates)
//         --top N    show the N worst lines per file (default 5)
//
// What it checks (heuristics, not a parser — a clean report is necessary, not sufficient):
//   LONG      sentence longer than 25 words (STE rule 4.1 descriptive cap; procedures cap at 20)
//   DASH      em dash / en dash / spaced hyphen used inside prose (STE 8.x: dashes only introduce list items)
//   SEMI      semicolon in prose (not an STE punctuation mark)
//   PASSIVE   be-verb + past participle (STE 3.5: use the active voice)
//   ING       -ing verb form (STE 3.4: no gerunds or present participles; technical names are exempt)
//   MODAL     should / would / could / may / might (STE approved modals are can, must, will)
//   SLOP      generated-text tells: "delve", "leverage", "not just X but Y", "in today's", rhetorical questions...
//   PARA      paragraph with more than 6 sentences (STE 6.2)
//   CLUSTER   four or more capitalised or long nouns in a row (STE 2.1: max three nouns in a cluster)
//
// Skipped: headings, tables, code and mermaid fences, HTML, links' URLs, front matter, list markers.
// Words listed in BRIEF.md §Vocabulary are technical names and may be passed via --vocab <file> to
// exempt them from ING and CLUSTER.

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const strict = args.includes("--strict");
const topIdx = args.indexOf("--top");
const TOP = topIdx >= 0 ? parseInt(args[topIdx + 1], 10) || 5 : 5;
const vocabIdx = args.indexOf("--vocab");
const vocabFile = vocabIdx >= 0 ? args[vocabIdx + 1] : null;
const targets = args.filter((a, i) => !a.startsWith("--") && args[i - 1] !== "--top" && args[i - 1] !== "--vocab");

if (targets.length === 0) {
  console.error("usage: node check_ste.js <file-or-dir> [...] [--strict] [--top N] [--vocab BRIEF.md]");
  process.exit(2);
}

// -ing words that are nouns/prepositions/adjectives in ordinary English, not verb forms.
const ING_ALLOW = new Set([
  "thing", "things", "nothing", "something", "anything", "everything", "during", "morning", "evening",
  "king", "ring", "string", "strings", "spring", "wing", "wings", "sing", "bring", "swing", "sting",
  "meeting", "meetings", "building", "buildings", "funding", "pricing", "training", "marketing",
  "engineering", "onboarding", "billing", "learning", "reading", "writing", "setting", "settings",
  "ceiling", "sibling", "siblings", "finding", "findings", "opening", "warning", "warnings", "rating",
  "ratings", "listing", "listings", "heading", "headings", "landing", "streaming", "ranking", "rankings",
  "modeling", "modelling", "testing", "tooling", "scaling", "staffing", "hiring", "bearing", "being",
  "willing", "ongoing", "existing", "following", "underlying", "remaining", "leading", "missing",
  "boarding", "ending", "beginning", "offering", "offerings", "holding", "holdings", "clothing",
  "according", "including", "regarding", "notwithstanding", "everything", "outstanding",
  // standard startup/finance technical names (references/writing-style.md §3)
  "positioning", "meaning", "timing", "spending", "forecasting", "benchmarking", "licensing", "advertising",
  "manufacturing", "underwriting", "messaging", "branding", "planning", "budgeting", "coaching", "tutoring", "coding",
]);

const SLOP = [
  [/\bdelv(e|es|ed|ing)\b/i, "delve"],
  [/\bleverag(e|es|ed|ing)\b/i, "leverage"],
  [/\bseamless(ly)?\b/i, "seamless"],
  [/\brevolutioni[sz]e|\brevolutionary\b/i, "revolutionary"],
  [/\bgame-?changing\b/i, "game-changing"],
  [/\bcutting-edge\b/i, "cutting-edge"],
  [/\bsupercharg/i, "supercharge"],
  [/\bunlock(s|ed|ing)?\b/i, "unlock"],
  [/\bempower(s|ed|ing|ment)?\b/i, "empower"],
  [/\belevat(e|es|ed|ing)\b/i, "elevate"],
  [/\bharness(es|ed|ing)? the\b/i, "harness"],
  [/\btapestry\b/i, "tapestry"],
  [/\btestament to\b/i, "testament"],
  [/\bin today'?s\b/i, "in today's"],
  [/\bnot (just|only|merely) \w+[^.]{0,60}\bbut\b/i, "not just X but Y"],
  [/\bit'?s not (about )?\w+[^.]{0,40}[,;]\s*it'?s\b/i, "it's not X, it's Y"],
  [/\bat its core\b/i, "at its core"],
  [/\bcrucially\b|\bimportantly\b|\bnotably\b|\barguably\b|\bessentially\b/i, "throat-clearing adverb"],
  [/\bstands? (as|out as)\b|\bserves? as\b/i, "stands as / serves as"],
  [/\bfoster(s|ed|ing)?\b/i, "foster"],
  [/\bnavigat(e|es|ed|ing) the\b/i, "navigate the"],
  [/\brobust(ly|ness)?\b/i, "robust"],
  [/\bholistic\b/i, "holistic"],
  [/\bsynerg/i, "synergy"],
  [/\bparadigm\b/i, "paradigm"],
  [/\bbest-in-class\b|\bworld-class\b|\bstate-of-the-art\b/i, "best-in-class"],
  [/\?\s*$/, "rhetorical question"],
];

const MODAL = /\b(should|would|could|may|might)\b/i;
const PASSIVE = /\b(is|are|was|were|be|been|being)\s+(\w+ed|\w+en|built|made|done|seen|shown|known|given|taken|written|found|held|kept|left|lost|met|paid|put|read|run|sent|set|sold|spent|told|won|drawn|driven|chosen|proven|hidden|forgotten)\b/i;
const CLUSTER = /\b(?:[A-Z][a-z]+\s+){3,}[A-Z][a-z]+\b/;

let vocab = new Set();
if (vocabFile && fs.existsSync(vocabFile)) {
  const src = fs.readFileSync(vocabFile, "utf8");
  const m = src.match(/##\s*Vocabulary[\s\S]*?(?=\n##\s|$)/i);
  if (m) for (const w of m[0].toLowerCase().match(/[a-z][a-z-]+/g) || []) vocab.add(w);
}

function collect(p, out) {
  const st = fs.statSync(p);
  if (st.isDirectory()) {
    for (const n of fs.readdirSync(p)) {
      if (n === "node_modules" || n.startsWith(".")) continue;
      collect(path.join(p, n), out);
    }
  } else if (/\.(md|markdown)$/i.test(p)) out.push(p);
}

function proseLines(text) {
  const lines = text.split(/\r?\n/);
  const out = [];
  let inFence = false, inFront = false, inHtml = false;
  lines.forEach((raw, i) => {
    const t = raw.trim();
    if (i === 0 && t === "---") { inFront = true; return; }
    if (inFront) { if (t === "---") inFront = false; return; }
    if (/^(```|~~~)/.test(t)) { inFence = !inFence; return; }
    if (inFence) return;
    if (/^<!--/.test(t)) { if (!/-->/.test(t)) inHtml = true; return; }
    if (inHtml) { if (/-->/.test(t)) inHtml = false; return; }
    if (t === "" || /^#/.test(t) || /^\|/.test(t) || /^<[a-z!/]/i.test(t) || /^!\[/.test(t) || /^\[.*\]:\s*\S+$/.test(t)) {
      out.push({ n: i + 1, text: "", blank: true });
      return;
    }
    let s = t.replace(/^([-*+]|\d+[.)])\s+/, "")           // list markers
             .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")      // links → text
             .replace(/`[^`]*`/g, "CODE")                  // inline code
             .replace(/\*\*|__|(?<!\w)[*_](?!\s)|(?<!\s)[*_](?!\w)/g, "") // emphasis
             .replace(/\([^)]*\)/g, "");                   // parentheticals (source tags etc.)
    out.push({ n: i + 1, text: s, blank: false, isList: /^([-*+]|\d+[.)])\s+/.test(t) });
  });
  return out;
}

function sentences(s) {
  return s.split(/(?<=[.!?])\s+(?=[A-Z"'“(])/).map(x => x.trim()).filter(Boolean);
}

function lint(file) {
  const text = fs.readFileSync(file, "utf8");
  const lines = proseLines(text);
  const issues = [];
  let para = [];
  const flushPara = () => {
    if (para.length === 0) return;
    const count = para.reduce((a, l) => a + sentences(l.text).length, 0);
    if (count > 6 && !para[0].isList) issues.push({ code: "PARA", n: para[0].n, msg: `${count} sentences in one paragraph (max 6)` });
    para = [];
  };
  for (const l of lines) {
    if (l.blank) { flushPara(); continue; }
    para.push(l);
    const t = l.text;
    if (/[—–]|\s-\s/.test(t)) issues.push({ code: "DASH", n: l.n, msg: "dash inside prose" });
    if (/;/.test(t)) issues.push({ code: "SEMI", n: l.n, msg: "semicolon" });
    if (MODAL.test(t)) issues.push({ code: "MODAL", n: l.n, msg: `non-approved modal "${t.match(MODAL)[1]}" (use can / must / will)` });
    const pm = t.match(PASSIVE);
    if (pm) issues.push({ code: "PASSIVE", n: l.n, msg: `passive "${pm[0]}"` });
    for (const w of t.match(/\b[A-Za-z][a-z]+ing\b/g) || []) {
      const lw = w.toLowerCase();
      if (!ING_ALLOW.has(lw) && !vocab.has(lw) && lw.length > 5) { issues.push({ code: "ING", n: l.n, msg: `-ing form "${w}"` }); break; }
    }
    for (const [re, name] of SLOP) if (re.test(t)) issues.push({ code: "SLOP", n: l.n, msg: name });
    const cm = t.match(CLUSTER);
    if (cm && !vocab.has(cm[0].toLowerCase())) issues.push({ code: "CLUSTER", n: l.n, msg: `noun cluster "${cm[0]}"` });
    for (const s of sentences(t)) {
      const wc = s.split(/\s+/).filter(Boolean).length;
      if (wc > 25) issues.push({ code: "LONG", n: l.n, msg: `${wc}-word sentence (max 25)` });
    }
  }
  flushPara();
  const prose = lines.filter(l => !l.blank).length;
  return { file, issues, prose };
}

const files = [];
for (const t of targets) collect(t, files);
if (files.length === 0) { console.error("no markdown files found"); process.exit(2); }

const totals = {};
let grand = 0, grandProse = 0;
const perFile = [];
for (const f of files) {
  const r = lint(f);
  perFile.push(r);
  grand += r.issues.length; grandProse += r.prose;
  for (const i of r.issues) totals[i.code] = (totals[i.code] || 0) + 1;
}
perFile.sort((a, b) => b.issues.length - a.issues.length);

for (const r of perFile) {
  if (r.issues.length === 0) continue;
  const byCode = {};
  for (const i of r.issues) byCode[i.code] = (byCode[i.code] || 0) + 1;
  const summary = Object.entries(byCode).sort((a, b) => b[1] - a[1]).map(([c, n]) => `${c}:${n}`).join(" ");
  console.log(`${path.relative(process.cwd(), r.file)}  ${r.issues.length} issues / ${r.prose} prose lines  [${summary}]`);
  const shown = r.issues.slice().sort((a, b) => a.n - b.n).slice(0, TOP);
  for (const i of shown) console.log(`   L${i.n} ${i.code.padEnd(8)} ${i.msg}`);
}
const rate = grandProse ? (grand / grandProse).toFixed(2) : "0";
console.log(`\n${files.length} files, ${grandProse} prose lines, ${grand} issues (${rate} per prose line)`);
console.log("by rule: " + Object.entries(totals).sort((a, b) => b[1] - a[1]).map(([c, n]) => `${c}=${n}`).join("  "));
if (strict && grand > 0) process.exit(1);
