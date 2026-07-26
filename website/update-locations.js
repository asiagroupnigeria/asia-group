const fs = require('fs');
const path = require('path');

function getSubInfo(subsidiary) {
  const s = (subsidiary || '').toLowerCase();
  if (s.includes('auto')) return { cls: 'automobiles', name: 'Asia Automobiles' };
  if (s.includes('pharm')) return { cls: 'pharmacy', name: 'Asia Pharmacy' };
  if (s.includes('wholesale') || s.includes('head office')) return { cls: 'wholesale', name: 'Wholesale & Distribution' };
  if (s.includes('bev')) return { cls: 'beverages', name: 'Asia Beverages' };
  if (s.includes('phone')) return { cls: 'phones', name: 'Asia Phones' };
  if (s.includes('cosmetic')) return { cls: 'cosmetics', name: 'Asia Cosmetics' };
  return { cls: 'wholesale', name: 'Wholesale & Distribution' };
}

function formatPhone(phone) {
  if (!phone) return '';
  phone = phone.replace(/\D/g, '');
  if (phone.startsWith('234')) phone = phone.substring(3);
  if (phone.startsWith('0')) phone = phone.substring(1);
  if (phone.length === 10) {
     return `+234 ${phone.substring(0,2)} ${phone.substring(2,5)} ${phone.substring(5)}`;
  }
  return `+234 ${phone}`;
}

function toTitleCase(str) {
  if (!str) return '';
  return str.toLowerCase().split(' ').map(word => {
    if (word.length === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

// Simple CSV parser
function parseCSV(content) {
  const lines = content.trim().split('\n');
  const result = [];
  for (let i = 1; i < lines.length; i++) { // Skip header
    const line = lines[i];
    const row = [];
    let inQuotes = false;
    let current = '';
    for (let char of line) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        row.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    row.push(current);
    result.push(row);
  }
  return result;
}

const csvContent = fs.readFileSync(path.join(__dirname, '..', 'asia mds location - Sheet1.csv'), 'utf8');
const rows = parseCSV(csvContent);

let htmlCards = '';

rows.forEach((row, index) => {
  const num = String(index + 1).padStart(2, '0');
  
  const rawSub = row[0] || '';
  const rawName = row[1] || '';
  const rawAddress = row[2] || '';
  // row[3] year, row[4] size, row[5] storage
  const rawProducts = row[6] || '';
  // row[7] throughput
  const rawManager = row[8] || '';
  const rawTitle = row[9] || 'Manager';
  // row[10] years
  const rawPhone = row[11] || '';

  const subInfo = getSubInfo(rawSub);
  const name = toTitleCase(rawName);
  let address = toTitleCase(rawAddress);
  // minor cleanup for addresses like "n0 b32" -> "No. B32"
  address = address.replace(/^n0 /i, 'No. ');
  
  const manager = toTitleCase(rawManager) || 'TBD';
  const title = toTitleCase(rawTitle);
  const phone = formatPhone(rawPhone);
  const desc = rawProducts ? rawProducts.trim().replace(/^"|"$/g, '') : '[ Description — TBD ]';
  const descOpacity = rawProducts ? '1' : '0.3';
  
  const roleDisplay = subInfo.name === 'Wholesale & Distribution' ? 'Distribution Hub' : subInfo.name;

  htmlCards += `
      <!-- LOCATION ${num} -->
      <div class="loc-card" data-subsidiary="${subInfo.cls}">
        <div class="loc-photo">
          <div class="loc-photo-img">
            <div class="loc-photo-placeholder">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="18" width="32" height="18" stroke="white" stroke-width="1.5"/><rect x="14" y="24" width="12" height="12" stroke="white" stroke-width="1.5"/><path d="M2 18L20 6L38 18" stroke="white" stroke-width="1.5"/></svg>
              <p>MEDIA: Location ${num}</p>
            </div>
          </div>
          <div class="loc-badge ${subInfo.cls}">${subInfo.name}</div>
          <div class="loc-number">${num}</div>
          <div class="loc-expand">
            <div class="loc-expand-title">Location ${num} — Management</div>
            <div class="loc-expand-md">${manager}</div>
            <div class="loc-expand-md-title">${title} ${phone ? '| ' + phone : ''}</div>
            <p class="loc-expand-desc" style="opacity: ${descOpacity};">${desc}</p>
          </div>
        </div>
        <div class="loc-body" style="padding-bottom: 24px;">
          <div class="loc-name">${name}</div>
          <div class="loc-role">${roleDisplay}</div>
          <div class="loc-address" style="margin-bottom: 0;">${address}</div>
        </div>
      </div>
`;
});

const pagePath = path.join(__dirname, 'src', 'app', '[locale]', 'operations', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// The grid is inside <div class="locations-grid" id="locations-grid">
const startTag = '<div class="locations-grid" id="locations-grid">';
const endTag = '</div>\n  </div>\n</section>';

const startIndex = pageContent.indexOf(startTag);
if (startIndex === -1) {
  console.error("Could not find start tag");
  process.exit(1);
}

// Find the corresponding end tag for the section
const sectionEndIndex = pageContent.indexOf(endTag, startIndex);
if (sectionEndIndex === -1) {
  console.error("Could not find end tag");
  process.exit(1);
}

// Find the </div> that closes locations-grid. 
// Looking at the original file:
/*
    <div class="locations-grid" id="locations-grid">
      ... locations ...
    </div>
  </div>
</section>
*/

const beforeStr = pageContent.substring(0, startIndex + startTag.length);
const afterStr = pageContent.substring(sectionEndIndex - 6); // Includes the closing </div> of locations-grid

const newPageContent = beforeStr + '\n' + htmlCards + '    ' + afterStr;

fs.writeFileSync(pagePath, newPageContent);
console.log("Successfully updated page.tsx with 19 locations.");
