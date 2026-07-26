const fs = require('fs');
const path = require('path');

const opsPagePath = path.join(__dirname, 'src', 'app', '[locale]', 'operations', 'page.tsx');
let opsHtml = fs.readFileSync(opsPagePath, 'utf8');

// The file has a massive dangerouslySetInnerHTML.
// Let's replace the grid with the component.
const filterStartStr = '<!-- ═══════════════════════════════ FILTER BAR ═══════════════════════════════ -->';
const stripStartStr = '<!-- ═══════════════════════════════ STRIP ═══════════════════════════════ -->';

const fStart = opsHtml.indexOf(filterStartStr);
const sStart = opsHtml.indexOf(stripStartStr);

if (fStart !== -1 && sStart !== -1) {
  const beforeFilter = opsHtml.substring(0, fStart).trim();
  const fromStrip = opsHtml.substring(sStart);
  
  // Close the backticks, add the component, open backticks
  const componentStr = '` }}\n      />\n      <LocationsGrid locations={locations} />\n      <div dangerouslySetInnerHTML={{ __html: `\n';
  
  opsHtml = beforeFilter + '\n' + componentStr + fromStrip;

  // Add imports
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

  // Remove the CSS block (optional, but it's now in globals.css so we don't need to duplicate it)
  // And the vanilla JS filter script at the bottom.
  const scriptStart = opsHtml.lastIndexOf('<script>');
  const scriptEnd = opsHtml.lastIndexOf('</script>');
  if (scriptStart !== -1 && scriptEnd !== -1) {
    opsHtml = opsHtml.substring(0, scriptStart) + opsHtml.substring(scriptEnd + 9);
  }

  fs.writeFileSync(opsPagePath, opsHtml);
  console.log('Successfully updated operations/page.tsx with LocationsGrid!');
} else {
  console.log('Failed to find markers.');
}
