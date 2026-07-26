\
const fs = require('fs');
const path = require('path');

const pageTsxPath = path.join(__dirname, 'src', 'app', '[locale]', 'page.tsx');
let content = fs.readFileSync(pageTsxPath, 'utf8');

const startMarker = '      {/* ══════════════════════════════════════════════════════\r\n     05 — 19 LOCATIONS PREVIEW';
const altStartMarker = '      {/* ══════════════════════════════════════════════════════\n     05 — 19 LOCATIONS PREVIEW';

let startIndex = content.indexOf(startMarker);
if (startIndex === -1) {
  startIndex = content.indexOf(altStartMarker);
}

const endMarker = '</section>\r\n\r\n\r\n\r\n      {/* ==================== SUBSIDIARIES';
const altEndMarker = '</section>\n\n\n\n      {/* ==================== SUBSIDIARIES';

let endIndex = content.indexOf(endMarker);
if (endIndex === -1) {
  endIndex = content.indexOf(altEndMarker);
}

if (startIndex !== -1 && endIndex !== -1) {
  const finalEndIndex = endIndex + endMarker.length > endIndex + altEndMarker.length && content.indexOf(endMarker) !== -1
    ? endIndex + '</section>\r\n\r\n\r\n\r\n'.length
    : endIndex + '</section>\n\n\n\n'.length;

  content = content.substring(0, startIndex) + '      {/* ==================== SUBSIDIARIES';
  fs.writeFileSync(pageTsxPath, content);
  console.log('Removed locations-preview section from page.tsx');
} else {
  console.log('Could not find markers to remove section.');
}
