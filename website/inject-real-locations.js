const fs = require('fs');
const path = require('path');

const opsPagePath = path.join(__dirname, 'src', 'app', '[locale]', 'operations', 'page.tsx');
const pageTsxPath = path.join(__dirname, 'src', 'app', '[locale]', 'page.tsx');
const globalsCssPath = path.join(__dirname, 'src', 'app', 'globals.css');

const opsHtml = fs.readFileSync(opsPagePath, 'utf8');

// 1. Extract the 6 cards from operations/page.tsx
const startMarker = '<!-- LOCATION 01 -->';
const endMarker = '<!-- LOCATION 07 -->';
const startIndex = opsHtml.indexOf(startMarker);
const endIndex = opsHtml.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find locations 1 to 7 in operations/page.tsx');
  process.exit(1);
}

let cardsHtml = opsHtml.substring(startIndex, endIndex).trim();
// Fix image paths for homepage if needed (they are absolute /media/ so they are fine)

// 2. Extract CSS for loc-card from operations/page.tsx
// It starts around "/* ── LOCATIONS GRID & CARDS ── */" and ends around "/* JS-driven filter hide */"
const cssStartMarker = '/* ── LOCATIONS GRID & CARDS ── */';
const cssEndMarker = '/* JS-driven filter hide */';
const cssStartIndex = opsHtml.indexOf(cssStartMarker);
const cssEndIndex = opsHtml.indexOf(cssEndMarker);

if (cssStartIndex !== -1 && cssEndIndex !== -1) {
  const cssBlock = opsHtml.substring(cssStartIndex, cssEndIndex).trim();
  // Append to globals.css if not already there
  const globalsCss = fs.readFileSync(globalsCssPath, 'utf8');
  if (!globalsCss.includes('.loc-badge')) {
    fs.appendFileSync(globalsCssPath, '\n\n' + cssBlock);
  }
}

// 3. Inject into page.tsx
let pageTsxContent = fs.readFileSync(pageTsxPath, 'utf8');

// Find the lp-grid block to replace
const gridStartMarker = '<div className="lp-grid"';
const gridEndMarker = '<div className="lp-cta-row"';
const gridStartIndex = pageTsxContent.indexOf(gridStartMarker);
const gridEndIndex = pageTsxContent.indexOf(gridEndMarker);

if (gridStartIndex === -1 || gridEndIndex === -1) {
  console.error('Could not find lp-grid in page.tsx');
  process.exit(1);
}

// Replace it with the new grid
const newGrid = `<div className="locations-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: 'rgba(255,255,255,0.06)', marginBottom: '40px' }} dangerouslySetInnerHTML={{ __html: \`\n${cardsHtml}\n\` }}></div>\n\n          `;

pageTsxContent = pageTsxContent.substring(0, gridStartIndex) + newGrid + pageTsxContent.substring(gridEndIndex);

fs.writeFileSync(pageTsxPath, pageTsxContent);
console.log('Successfully injected real locations into homepage!');
