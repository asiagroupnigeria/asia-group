const fs = require('fs');
const path = require('path');

const pageTsxPath = path.join(__dirname, 'src', 'app', '[locale]', 'page.tsx');
let pageTsxContent = fs.readFileSync(pageTsxPath, 'utf8');

const importStatement = "import { LocationsGrid } from '@/components/operations/LocationsGrid';\nimport { locations } from '@/data/locations';\n";
if (!pageTsxContent.includes('LocationsGrid')) {
  pageTsxContent = importStatement + pageTsxContent;
}

// Find the <div className="locations-grid">...</div> dangerouslySetInnerHTML block
const gridStartMarker = '<div className="locations-grid"';
const gridEndMarker = '<div className="lp-cta-row"';
const gridStartIndex = pageTsxContent.indexOf(gridStartMarker);
const gridEndIndex = pageTsxContent.indexOf(gridEndMarker);

if (gridStartIndex !== -1 && gridEndIndex !== -1) {
  const newGrid = `<LocationsGrid locations={locations.slice(0, 6)} hideFilter={true} />\n\n          `;
  pageTsxContent = pageTsxContent.substring(0, gridStartIndex) + newGrid + pageTsxContent.substring(gridEndIndex);
  fs.writeFileSync(pageTsxPath, pageTsxContent);
  console.log('Successfully updated homepage to use LocationsGrid!');
} else {
  console.log('Could not find locations-grid in homepage.');
}
