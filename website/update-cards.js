const fs = require('fs');
const path = require('path');

const csvPath = 'C:\\\\Users\\\\SURFACE\\\\Downloads\\\\ASIA Group of Companies Facility Profile & MD Interview Form (Responses) - Form responses 1.csv';
const tsxPath = path.join(__dirname, 'src/app/[locale]/operations/page.tsx');

const csvContent = fs.readFileSync(csvPath, 'utf8');

function parseCSV(text) {
    const result = [];
    let row = [];
    let inQuotes = false;
    let val = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === '"') {
            if (inQuotes && text[i + 1] === '"') {
                val += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            row.push(val);
            val = '';
        } else if (char === '\n' && !inQuotes) {
            row.push(val);
            result.push(row);
            row = [];
            val = '';
        } else if (char === '\r' && !inQuotes) {
            // ignore
        } else {
            val += char;
        }
    }
    if (val !== '' || row.length > 0) {
        row.push(val);
        result.push(row);
    }
    return result;
}

const rows = parseCSV(csvContent);

function formatPhone(phone) {
    if (!phone) return '';
    let p = phone.trim().replace(/\s+/g, '');
    if (p.startsWith('0')) {
        p = '+234 ' + p.substring(1);
    } else if (!p.startsWith('+')) {
        p = '+234 ' + p;
    }
    if (p.startsWith('+234') && p.length >= 14) {
      return p.slice(0, 4) + ' ' + p.slice(4, 7) + ' ' + p.slice(7, 10) + ' ' + p.slice(10);
    }
    return p;
}

function formatName(name) {
    if (!name) return '';
    return name.trim().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

function formatText(text) { return text ? text.trim() : ''; }

function formatAddress(address) {
  if (!address) return '';
  let formatted = address.split(' ').map(w => {
    if (!w) return '';
    return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
  }).join(' ');

  formatted = formatted.replace(/\b[nN]0\.?\s*/g, 'No. ');
  formatted = formatted.replace(/\b[Nn]o\.?\s*(?=\d)/g, 'No. ');
  formatted = formatted.replace(/\bKano\b/gi, 'Kano');
  formatted = formatted.replace(/\bBlock B\b/gi, 'Block B');
  formatted = formatted.replace(/\bAa Plaza\b/g, 'AA Plaza');
  formatted = formatted.replace(/\bMm Way\b/g, 'MM Way');
  formatted = formatted.replace(/\bSg\b/g, 'SG');
  formatted = formatted.replace(/\s*,\s*/g, ', ');
  return formatted;
}

function getSubData(subName, locName) {
    let sub = 'wholesale';
    let badge = 'Wholesale & Distribution';
    let subLower = (subName || '').toLowerCase() + ' ' + (locName || '').toLowerCase();
    
    if (subLower.includes('automobile') || subLower.includes('power')) { sub = 'automobiles'; badge = 'Asia Automobiles'; }
    else if (subLower.includes('pharma') || subLower.includes('phara') || subLower.includes('maisauki')) { sub = 'pharmacy'; badge = 'Asia Pharmacy'; }
    else if (subLower.includes('beverage')) { sub = 'beverages'; badge = 'Asia Beverages'; }
    else if (subLower.includes('phone') || subLower.includes('access')) { sub = 'phones'; badge = 'Asia Phones'; }
    else if (subLower.includes('cosmetic')) { sub = 'cosmetics'; badge = 'Asia Cosmetics'; }
    
    return { sub, badge };
}

const data = [];
const counts = {
  wholesale: { id: 'wholesale', label: 'Wholesale & Distribution', count: 0 },
  pharmacy: { id: 'pharmacy', label: 'Asia Pharmacy', count: 0 },
  automobiles: { id: 'automobiles', label: 'Asia Automobiles', count: 0 },
  beverages: { id: 'beverages', label: 'Asia Beverages', count: 0 },
  cosmetics: { id: 'cosmetics', label: 'Asia Cosmetics', count: 0 },
  phones: { id: 'phones', label: 'Asia Phones', count: 0 }
};
let allCount = 0;

for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    // REQUIRE timestamp row[0] to prevent dummy/duplicate rows at the bottom
    if (!row[0] || row[0].trim() === '') continue;
    if (row.length < 3 || !row[2]) continue;

    const { sub, badge } = getSubData(row[1], row[2]);
    const name = formatName(row[2]); // Format name properly
    const addr = formatAddress(row[3]);
    let cap = formatText(row[6]);
    const manager = formatName(row[9]);
    const title = formatText(row[10]);
    const phone = formatPhone(row[12]);
    
    const func = formatText(row[15]);
    const desc = formatText(row[20]) || formatText(row[21]) || formatText(row[15]);
    
    allCount++;
    if (counts[sub]) counts[sub].count++;
    
    data.push({ sub, badge, name, addr, manager, title, phone, cap, func, desc });
}

let html = '';
data.forEach((loc, idx) => {
  const num = (idx + 1).toString().padStart(2, '0');
  
  html += `
      <!-- LOCATION ${num} -->
      <div class="loc-card" data-subsidiary="${loc.sub}">
        <div class="loc-photo">
          <div class="loc-photo-img">
            <div class="loc-photo-placeholder">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="18" width="32" height="18" stroke="white" stroke-width="1.5"/><rect x="14" y="24" width="12" height="12" stroke="white" stroke-width="1.5"/><path d="M2 18L20 6L38 18" stroke="white" stroke-width="1.5"/></svg>
              <p>MEDIA: Location ${num}</p>
            </div>
          </div>
          <div class="loc-badge ${loc.sub}">${loc.badge}</div>
          <div class="loc-number">${num}</div>
          <div class="loc-expand">
            <div class="loc-expand-title">Location ${num} — Management</div>
            <div class="loc-expand-md">${loc.manager || '[ MD Name — TBD ]'}</div>
            <div class="loc-expand-md-title">${loc.title || 'Branch Manager'} ${loc.phone ? ' | ' + loc.phone : ''}</div>
            ${loc.desc ? `<p class="loc-expand-desc">${loc.desc}</p>` : `<p class="loc-expand-desc" style="opacity: 0.3;">[ Description — TBD ]</p>`}
          </div>
        </div>
        <div class="loc-body" style="padding-bottom: 24px;">
          <div class="loc-name">${loc.name}</div>
          <div class="loc-role">${loc.func || 'Distribution Hub'}</div>
          <div class="loc-address" style="margin-bottom: 0;">${loc.addr || 'Kano, Kano State'}</div>
        </div>
      </div>
`;
});

// Sort tabs by count descending
const sortedTabs = Object.values(counts).sort((a, b) => b.count - a.count);

let filterHtml = `
<div class="filter-bar">
  <div class="filter-bar-inner">
    <button class="filter-btn active" data-filter="all">All Locations <span class="filter-count">${allCount}</span></button>
${sortedTabs.map(tab => `    <button class="filter-btn" data-filter="${tab.id}">${tab.label} <span class="filter-count">${tab.count}</span></button>`).join('\n')}
  </div>
</div>
`;

let content = fs.readFileSync(tsxPath, 'utf8');

// Replace filter bar
content = content.replace(/<div class="filter-bar">[\s\S]*?<\/div>\s*<\/div>/, filterHtml.trim());

// Replace locations grid
const startTag = '<div class="locations-grid" id="locations-grid">';
// We only want to replace up to the closing tag of the locations-grid wrapper, NOT the whole section since JSX is after it.
// The structure is <div class="locations-grid"> ... </div>\n</div>\n</section>
const startIndex = content.indexOf(startTag);
if (startIndex !== -1) {
  // Find the exact end of the locations grid
  const endMarker = '</div>\n    </div>\n  </section>';
  const endSectionIdx = content.indexOf('</section>', startIndex);
  
  content = content.slice(0, startIndex) + startTag + '\n' + html + '    </div>\n  </div>\n' + content.slice(endSectionIdx);
}

fs.writeFileSync(tsxPath, content);
console.log('Successfully rebuilt cards with strict timestamp filter and sorted tabs.');
