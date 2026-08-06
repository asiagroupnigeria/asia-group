const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, 'src', 'app', '[locale]', 'businesses');
const dirs = fs.readdirSync(root).filter(d => fs.statSync(path.join(root, d)).isDirectory() && !d.startsWith('['));

for (const dir of dirs) {
  const pagePath = path.join(root, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;

  let content = fs.readFileSync(pagePath, 'utf8');

  // 1. Make the hero text bold
  // Look for h1 { ... font-weight: 300; ... } or font-weight:300; and change to font-weight:700; or font-weight: bold;
  content = content.replace(/(h1\s*\{[^}]*font-weight:\s*)300(;[^}]*\})/g, '$1bold$2');
  content = content.replace(/(.sub-hero-title\s*\{[^}]*font-weight:\s*)300(;[^}]*\})/g, '$1bold$2');

  // 2. Remove hyphens/em-dashes from h1
  // We can just match the h1 tag and remove '—' or '-' from its contents.
  content = content.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (match, innerHtml) => {
    // Replace em dash, en dash, or hyphen
    const newInner = innerHtml.replace(/[—–-]/g, '').trim();
    return match.replace(innerHtml, newInner);
  });

  fs.writeFileSync(pagePath, content);
  console.log('Updated ' + dir);
}
