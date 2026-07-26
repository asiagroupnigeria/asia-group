const fs = require('fs');
const path = require('path');

const opsPagePath = path.join(__dirname, 'src', 'app', '[locale]', 'operations', 'page.tsx');
let opsHtml = fs.readFileSync(opsPagePath, 'utf8');

const importStatement = "import { LocationsGrid } from '@/components/operations/LocationsGrid';\nimport { locations } from '@/data/locations';\n";
if (!opsHtml.includes('LocationsGrid')) {
  const lastImportIndex = opsHtml.lastIndexOf('import ');
  if (lastImportIndex !== -1) {
    const endOfLine = opsHtml.indexOf('\n', lastImportIndex);
    opsHtml = opsHtml.substring(0, endOfLine + 1) + importStatement + opsHtml.substring(endOfLine + 1);
  } else {
    opsHtml = importStatement + opsHtml;
  }
}

// Remove script tags from the bottom
const scriptStart = opsHtml.lastIndexOf('<script>');
const scriptEnd = opsHtml.lastIndexOf('</script>');
if (scriptStart !== -1 && scriptEnd !== -1) {
  opsHtml = opsHtml.substring(0, scriptStart) + opsHtml.substring(scriptEnd + 9);
}

// Remove CSS from style block
const cssStartMarker = '/* ── LOCATIONS GRID & CARDS ── */';
const cssEndMarker = '/* JS-driven filter hide */';
const cssStart = opsHtml.indexOf(cssStartMarker);
const cssEnd = opsHtml.indexOf(cssEndMarker);

if (cssStart !== -1 && cssEnd !== -1) {
  const nextStyleTag = opsHtml.indexOf('` }} />', cssEnd);
  if (nextStyleTag !== -1) {
    opsHtml = opsHtml.substring(0, cssStart) + opsHtml.substring(nextStyleTag);
  }
}

fs.writeFileSync(opsPagePath, opsHtml);
console.log('Fixed imports in operations/page.tsx');
