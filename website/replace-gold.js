const fs = require('fs');
const path = require('path');

const dirs = [
  'src/app/[locale]/operations',
  'src/app/[locale]/businesses/automobiles',
  'src/app/[locale]/businesses/beverages',
  'src/app/[locale]/businesses/cosmetics',
  'src/app/[locale]/businesses/pharmaceuticals',
  'src/app/[locale]/businesses/phones',
  'src/app/[locale]/businesses/wholesale'
];

dirs.forEach(dir => {
  const filePath = path.resolve(__dirname, dir, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/var\(--gold\)/g, 'var(--silver)');
    content = content.replace(/var\(--gold-light\)/g, 'var(--silver-light)');
    fs.writeFileSync(filePath, content);
    console.log(`Replaced gold with silver in ${dir}/page.tsx`);
  }
});
