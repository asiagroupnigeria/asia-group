const fs = require('fs');
const path = require('path');

const opsPagePath = path.join(__dirname, 'src', 'app', '[locale]', 'operations', 'page.tsx');
let opsHtml = fs.readFileSync(opsPagePath, 'utf8');

const startMarker = '<LocationsGrid locations={locations} />';
const endMarker = '<!-- ═══════════════════════════════ PHOTO STRIP ═══════════════════════════════ -->';

const startIndex = opsHtml.indexOf(startMarker);
const endIndex = opsHtml.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const before = opsHtml.substring(0, startIndex + startMarker.length);
  const after = opsHtml.substring(endIndex);
  
  // We need to insert a dangerouslySetInnerHTML opening block right before the PHOTO STRIP
  const middle = '\n\n      <div dangerouslySetInnerHTML={{ __html: `\n\n';
  
  opsHtml = before + middle + after;
  fs.writeFileSync(opsPagePath, opsHtml);
  console.log('Successfully cleaned up operations/page.tsx!');
} else {
  console.log('Markers not found!');
  console.log('startMarker found:', startIndex !== -1);
  console.log('endMarker found:', endIndex !== -1);
}
