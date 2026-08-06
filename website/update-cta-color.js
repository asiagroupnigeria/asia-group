const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, 'src', 'app', '[locale]', 'businesses');
const dirs = fs.readdirSync(root).filter(d => fs.statSync(path.join(root, d)).isDirectory() && !d.startsWith('['));

for (const dir of dirs) {
  const pagePath = path.join(root, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;

  let content = fs.readFileSync(pagePath, 'utf8');

  // Replace class="btn-primary" style="margin-top:24px;"
  content = content.replace(
    /class="btn-primary" style="margin-top:24px;"/g,
    'class="btn-primary" style="margin-top:24px; background:var(--white); color:#000;"'
  );

  fs.writeFileSync(pagePath, content);
  console.log('Updated ' + dir);
}
