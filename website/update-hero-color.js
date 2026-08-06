const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, 'src', 'app', '[locale]', 'businesses');
const dirs = fs.readdirSync(root).filter(d => fs.statSync(path.join(root, d)).isDirectory() && !d.startsWith('['));

for (const dir of dirs) {
  const pagePath = path.join(root, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;

  let content = fs.readFileSync(pagePath, 'utf8');

  // Replace color:var(--text-main) with color:var(--white) in h1 rules
  // e.g. h1 { ... color:var(--text-main); ... }
  content = content.replace(/(h1\s*\{[^}]*color:\s*)var\(--text-main\)(;[^}]*\})/g, '$1var(--white)$2');

  fs.writeFileSync(pagePath, content);
  console.log('Updated ' + dir);
}
