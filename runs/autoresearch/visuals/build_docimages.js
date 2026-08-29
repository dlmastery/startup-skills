// Build visuals/docimages.json: which rendered visuals belong to which artifact.
// Run from runs/<slug>/. Resolves bare filenames in the manifest's source column
// against the whole run tree, not just the top-level directories.
const fs = require('fs');
const path = require('path');

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name.startsWith('.')) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.md')) out.push(p.replace(/\\/g, '/'));
  }
  return out;
}

const allDocs = walk('.').map(p => p.replace(/^\.\//, ''));
const byBase = {};
for (const p of allDocs) (byBase[path.basename(p)] = byBase[path.basename(p)] || []).push(p);

const imgs = {};
for (const f of fs.readdirSync('visuals/images').filter(f => /\.png$/i.test(f))) imgs[f.slice(0, 3)] = f;

const man = fs.readFileSync('visuals/visual_manifest.md', 'utf8');
const docImg = {};
for (const line of man.split('\n')) {
  const m = line.match(/^\| (V\d\d) \|([^|]*)\|([^|]*)\|([^|]*)\|/);
  if (!m) continue;
  const id = m[1];
  if (!imgs[id]) continue;
  const title = m[2].trim();
  const targets = new Set();
  for (const ref of (m[4].match(/[A-Za-z0-9_\/]+\.md/g) || [])) {
    const clean = ref.replace(/^\.\//, '');
    if (allDocs.includes(clean)) { targets.add(clean); continue; }
    const base = path.basename(clean);
    // unique basename match anywhere in the tree (D04.md -> tech/architecture/D04.md)
    if (byBase[base] && byBase[base].length === 1) targets.add(byBase[base][0]);
    else if (byBase[base]) {
      const hit = byBase[base].find(p => p.endsWith('/' + clean)) || byBase[base][0];
      targets.add(hit);
    }
  }
  for (const t of targets) (docImg[t] = docImg[t] || []).push({ id, file: imgs[id], title });
}

fs.writeFileSync('visuals/docimages.json', JSON.stringify(docImg));
const placements = Object.values(docImg).flat().length;
console.log(`docimages.json: ${Object.keys(docImg).length} documents, ${placements} placements`);
const bare = allDocs.filter(d => !docImg[d] && !/^(visuals\/|audit\/|README\.md)/.test(d));
console.log(`still unillustrated (content docs): ${bare.length}`);
bare.forEach(b => console.log('   ' + b));
