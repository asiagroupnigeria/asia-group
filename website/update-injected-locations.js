const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, 'src', 'app', '[locale]', 'businesses');
const dirs = fs.readdirSync(root).filter(d => fs.statSync(path.join(root, d)).isDirectory() && !d.startsWith('['));

for (const dir of dirs) {
  const pagePath = path.join(root, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;

  let content = fs.readFileSync(pagePath, 'utf8');

  // 1. Remove the eyebrow (the div with font-family:var(--font-condensed) just before the grid)
  content = content.replace(
    /<div style="font-family:var\(--font-condensed\);font-size:11px;font-weight:600;letter-spacing:0\.3em;text-transform:uppercase;color:var\(--silver-light\);display:flex;align-items:center;gap:12px;margin-bottom:20px;"><span style="display:block;width:30px;height:1px;background:var\(--silver-light\);"><\/span>[^<]*<\/div>\s*/g,
    ''
  );

  // 2. Make padding responsive
  content = content.replace(
    /padding:\s*'100px 60px'/g,
    "padding:'clamp(60px, 10vw, 100px) clamp(24px, 5vw, 60px)'"
  );

  // 3. Make grid responsive
  content = content.replace(
    /display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:end;margin-bottom:48px;/g,
    'display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 400px), 1fr));gap:40px;align-items:end;margin-bottom:48px;'
  );

  // 4. Update CTA button color to var(--accent-light) or var(--primary)
  // Current: color:var(--silver-light);
  // It's the "View All 19 Asia Group Locations →" link.
  content = content.replace(
    /<a href="\.\.\/operations\/index\.html" style="([^"]*?)color:var\(--silver-light\);([^"]*?)">View All 19 Asia Group Locations/g,
    '<a href="../operations/index.html" style="$1color:var(--accent-light);$2">View All 19 Asia Group Locations'
  );

  fs.writeFileSync(pagePath, content);
  console.log('Updated ' + dir);
}
