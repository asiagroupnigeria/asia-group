const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, 'src', 'app', '[locale]', 'businesses');
const dirs = fs.readdirSync(root).filter(d => fs.statSync(path.join(root, d)).isDirectory() && !d.startsWith('['));

for (const dir of dirs) {
  const pagePath = path.join(root, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;

  let content = fs.readFileSync(pagePath, 'utf8');

  // Replace the inline style link with a btn-primary class
  content = content.replace(
    /<a href="\.\.\/operations\/index\.html" style="[^"]*?">View All 19 Asia Group Locations →<\/a>/g,
    '<a href="../operations/index.html" class="btn-primary" style="margin-top:24px;">View All 19 Asia Group Locations →</a>'
  );

  fs.writeFileSync(pagePath, content);
  console.log('Updated ' + dir);
}
