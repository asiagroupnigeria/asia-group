const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/SURFACE/Asia Group/website/src/app/[locale]/businesses';
const subsidiaries = ['automobiles', 'beverages', 'cosmetics', 'pharmaceuticals', 'phones', 'wholesale'];

for (const folder of subsidiaries) {
  const filePath = path.join(baseDir, folder, 'page.tsx');
  if (!fs.existsSync(filePath)) continue;

  let p = fs.readFileSync(filePath, 'utf8');

  // Look for the broken section open
  const brokenSectionOpen = `<section style="padding:100px 60px;background:var(--dark);">
  <div style="max-width:1300px;margin:0 auto;">`;
  
  if (p.includes(brokenSectionOpen)) {
    // 1. We replace the open with `}} />\n<section style={{padding:'100px 60px', background:'var(--dark)'}}>\n<div style={{maxWidth:'1300px', margin:'0 auto'}}>\n<div dangerouslySetInnerHTML={{ __html: \``
    
    let replacementOpen = `\` }} />
<section style={{padding:'100px 60px', background:'var(--dark)'}}>
  <div style={{maxWidth:'1300px', margin:'0 auto'}}>
    <div dangerouslySetInnerHTML={{ __html: \``;
    
    p = p.replace(brokenSectionOpen, replacementOpen);
  }

  // Look for the broken section close which is currently inside the SECOND dangerouslySetInnerHTML
  const brokenSectionClose = `  </div>
</section>`;
  
  // We need to replace the last occurrence of this in the file (which is after LocationsGrid)
  // Actually, we can just replace it with `\` }} />\n  </div>\n</section>\n<div dangerouslySetInnerHTML={{ __html: \``
  
  // Let's find where LocationsGrid is
  const locGridIdx = p.indexOf('<LocationsGrid');
  if (locGridIdx !== -1) {
    // Find the NEXT brokenSectionClose after LocationsGrid
    const closeIdx = p.indexOf(brokenSectionClose, locGridIdx);
    if (closeIdx !== -1) {
      let beforeClose = p.substring(0, closeIdx);
      let afterClose = p.substring(closeIdx + brokenSectionClose.length);
      
      let replacementClose = `\` }} />
  </div>
</section>
<div dangerouslySetInnerHTML={{ __html: \``;

      p = beforeClose + replacementClose + afterClose;
    }
  }

  fs.writeFileSync(filePath, p);
  console.log(`Fixed hydration error in ${folder}`);
}
console.log('All done.');
