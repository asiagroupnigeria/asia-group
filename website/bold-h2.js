const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, 'src', 'app', '[locale]', 'businesses');
const dirs = fs.readdirSync(root).filter(d => !d.startsWith('[') && fs.statSync(path.join(root, d)).isDirectory());

for (const dir of dirs) {
  const pagePath = path.join(root, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;

  let content = fs.readFileSync(pagePath, 'utf8');

  // Replace CSS block h2 rules
  content = content.replace(/(h2\s*\{[^}]*font-weight:\s*)300(;[^}]*\})/g, '$1bold$2');
  // Replace inline h2 styles
  content = content.replace(/(<h2[^>]*style="[^"]*font-weight:\s*)300([^"]*")/g, '$1bold$2');

  fs.writeFileSync(pagePath, content);
  console.log('Updated ' + dir);
}
