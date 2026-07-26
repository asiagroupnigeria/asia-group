const fs = require('fs');
const path = require('path');

const opsPagePath = path.join(__dirname, 'src', 'app', '[locale]', 'operations', 'page.tsx');
let opsHtml = fs.readFileSync(opsPagePath, 'utf8');

const filterStartMarker = '<!-- ═══════════════════════════════ FILTER BAR ═══════════════════════════════ -->';
const stripStartMarker = '<!-- ═══════════════════════════════ STRIP ═══════════════════════════════ -->';

const filterStart = opsHtml.indexOf(filterStartMarker);
const stripStart = opsHtml.indexOf(stripStartMarker);

if (filterStart !== -1 && stripStart !== -1) {
  const beforeFilter = opsHtml.substring(0, filterStart).trim();
  const fromStrip = opsHtml.substring(stripStart);
  
  const newOpsHtml = beforeFilter + '` }} />\n\n      <LocationsGrid locations={locations} />\n\n      <div dangerouslySetInnerHTML={{ __html: `\n' + fromStrip;

  opsHtml = newOpsHtml;

  const importStatement = "import { LocationsGrid } from '@/components/operations/LocationsGrid';\nimport { locations } from '@/data/locations';\n";
  const lastImportIndex = opsHtml.lastIndexOf('import ');
  if (lastImportIndex !== -1) {
    const endOfLine = opsHtml.indexOf('\n', lastImportIndex);
    opsHtml = opsHtml.substring(0, endOfLine + 1) + importStatement + opsHtml.substring(endOfLine + 1);
  } else {
    opsHtml = importStatement + opsHtml;
  }

  const cssStartMarker = '/* ── LOCATIONS GRID & CARDS ── */';
  const cssEndMarker = '/* JS-driven filter hide */';
  const cssStart = opsHtml.indexOf(cssStartMarker);
  const cssEnd = opsHtml.indexOf(cssEndMarker);
  
  if (cssStart !== -1 && cssEnd !== -1) {
    const nextStyleTag = opsHtml.indexOf('` }} />', cssEnd);
    opsHtml = opsHtml.substring(0, cssStart) + opsHtml.substring(nextStyleTag);
  }

  fs.writeFileSync(opsPagePath, opsHtml);
  console.log('Successfully updated operations/page.tsx!');
} else {
  console.log('Could not find FILTER BAR or STRIP markers.');
}
