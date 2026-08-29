// Build visuals/docmanifest.json — the reader's document list.
// Run from runs/<slug>/. Walks the whole tree so no artifact can be silently absent:
// the previous version listed a hardcoded set of directories and quietly dropped
// anything added later.
const fs = require('fs');
const path = require('path');

const SKIP_DIRS = new Set(['node_modules']);

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || SKIP_DIRS.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.md')) out.push(p.split(path.sep).join('/').replace(/^\.\//, ''));
  }
  return out;
}

// Display group for a path, and the order groups appear in the sidebar.
const ORDER = ['Brief', 'Research', 'Strategy', 'Product', 'Journeys', 'Tech', 'Architecture',
               'Techniques', 'Narrative', 'Validation', 'Financials', 'Visuals', 'Audit'];
function groupOf(p) {
  if (p.startsWith('product/journeys/')) return 'Journeys';
  if (p.startsWith('tech/architecture/')) return 'Architecture';
  if (p.startsWith('tech/techniques/')) return 'Techniques';
  const top = p.includes('/') ? p.split('/')[0] : null;
  const map = { research: 'Research', strategy: 'Strategy', product: 'Product', tech: 'Tech',
                narrative: 'Narrative', validation: 'Validation', financials: 'Financials',
                visuals: 'Visuals', audit: 'Audit', ingest: 'Ingest' };
  return top ? (map[top] || top) : 'Brief';
}

function titleOf(p) {
  try {
    const line = fs.readFileSync(p, 'utf8').split('\n').find(l => l.startsWith('# '));
    return line ? line.replace(/^#\s*/, '').trim() : path.basename(p);
  } catch { return path.basename(p); }
}

const docs = walk('.')
  .map(p => ({ g: groupOf(p), p, t: titleOf(p) }))
  .sort((a, b) => {
    const ga = ORDER.indexOf(a.g), gb = ORDER.indexOf(b.g);
    if (ga !== gb) return (ga < 0 ? 99 : ga) - (gb < 0 ? 99 : gb);
    return a.p.localeCompare(b.p);
  });

fs.writeFileSync('visuals/docmanifest.json', JSON.stringify(docs));
console.log(`docmanifest.json: ${docs.length} documents`);
const byGroup = {};
for (const d of docs) byGroup[d.g] = (byGroup[d.g] || 0) + 1;
console.log(Object.entries(byGroup).map(([g, n]) => `  ${g}: ${n}`).join('\n'));
