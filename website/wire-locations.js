const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/SURFACE/Asia Group/website/src/app/[locale]/businesses';
const subsidiaries = {
  'automobiles': 'automobiles',
  'beverages': 'beverages',
  'cosmetics': 'cosmetics',
  'pharmaceuticals': 'pharmacy',
  'phones': 'phones',
  'wholesale': 'wholesale'
};

for (const [folder, subId] of Object.entries(subsidiaries)) {
  const filePath = path.join(baseDir, folder, 'page.tsx');
  if (!fs.existsSync(filePath)) continue;

  let p = fs.readFileSync(filePath, 'utf8');

  // Add imports if they don't exist
  if (!p.includes('LocationsGrid')) {
    const importStr = `import { LocationsGrid } from '@/components/operations/LocationsGrid';\nimport { locations } from '@/data/locations';\n`;
    
    // Find the end of imports
    let lastImportIdx = p.lastIndexOf('import ');
    if (lastImportIdx !== -1) {
      let nextNewline = p.indexOf('\n', lastImportIdx);
      p = p.substring(0, nextNewline + 1) + importStr + p.substring(nextNewline + 1);
    } else {
      p = importStr + p;
    }
  }

  // Find the start of the component to inject subsidiaryLocations
  const compStartRegex = /export\s+default\s+function\s+\w+\s*\([^)]*\)\s*\{/;
  const compMatch = p.match(compStartRegex);
  
  if (compMatch && !p.includes(`const subsidiaryLocations`)) {
    const injectPos = compMatch.index + compMatch[0].length;
    p = p.substring(0, injectPos) + `\n  const subsidiaryLocations = locations.filter(loc => loc.subsidiaryId === '${subId}');\n` + p.substring(injectPos);
  }

  // Find the grid to replace
  // It usually starts with <div style="display:grid;grid-template-columns:repeat(3,1fr);
  // and ends with </div> before <div style="margin-top:20px;
  
  // Let's use string indices to find the exact block safely
  const findStr1 = '<div style="display:grid;grid-template-columns:repeat(3,1fr);';
  const findStr2 = '<div style="margin-top:20px;display:flex;';
  
  const startIdx = p.indexOf(findStr1);
  const endIdx = p.indexOf(findStr2);
  
  if (startIdx !== -1 && endIdx !== -1) {
    // The actual end of the grid is the </div> right before endIdx
    const gridEndIdx = p.lastIndexOf('</div>', endIdx);
    
    if (gridEndIdx !== -1 && gridEndIdx > startIdx) {
      let beforeGrid = p.substring(0, startIdx);
      let afterGrid = p.substring(gridEndIdx + 6); // +6 for </div>
      
      beforeGrid = beforeGrid + '` }} />\n\n';
      afterGrid = '\n\n<div dangerouslySetInnerHTML={{ __html: `\n' + afterGrid;
      
      const reactJSX = `      <LocationsGrid locations={subsidiaryLocations} hideFilter={true} />`;
      
      p = beforeGrid + reactJSX + afterGrid;
    }
  }

  fs.writeFileSync(filePath, p);
  console.log(`Updated ${folder}`);
}
console.log('All done.');
