const fs = require('fs');
const path = require('path');

const csvPath = 'C:\\\\Users\\\\SURFACE\\\\Downloads\\\\ASIA Group of Companies Facility Profile & MD Interview Form (Responses) - Form responses 1.csv';
const tsxPath = path.join(__dirname, 'src/app/[locale]/operations/page.tsx');

const csvContent = fs.readFileSync(csvPath, 'utf8');

// A robust CSV parser for this script
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
        } else if (char === '\\n' && !inQuotes) {
            row.push(val);
            result.push(row);
            row = [];
            val = '';
        } else if (char === '\\r' && !inQuotes) {
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
const headers = rows[0];

// The indices based on headers:
// 1: Subsidiary
// 2: Official Location Name
// 3: Full Address
// 6: Storage Capacity
// 9: MD / Branch Manager Name
// 10: Official Title
// 12: Direct Phone
// 14: Staffing Breakdown (has newlines, usually just a number followed by text, or just a number in the first part)
// 15: Primary Facility Function
// 20: Strategic Significance

function formatPhone(phone) {
    if (!phone) return '';
    let p = phone.trim().replace(/\\s+/g, '');
    if (p.startsWith('0')) {
        p = '+234 ' + p.substring(1);
    } else if (!p.startsWith('+')) {
        p = '+234 ' + p;
    }
    // format as +234 XXX XXX XXXX
    if (p.startsWith('+234') && p.length >= 14) {
      return p.slice(0, 4) + ' ' + p.slice(4, 7) + ' ' + p.slice(7, 10) + ' ' + p.slice(10);
    }
    return p;
}

function formatName(name) {
    if (!name) return '';
    return name.trim().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

function formatText(text) {
    if (!text) return '';
    return text.trim();
}

function getSubData(subName) {
    let sub = 'wholesale';
    let badge = 'Wholesale';
    let subLower = (subName || '').toLowerCase();
    
    if (subLower.includes('automobile') || subLower.includes('power')) { sub = 'automobiles'; badge = 'Automobiles'; }
    else if (subLower.includes('pharma')) { sub = 'pharmacy'; badge = 'Pharmacy'; }
    else if (subLower.includes('beverage')) { sub = 'beverages'; badge = 'Beverages'; }
    else if (subLower.includes('phone') || subLower.includes('access')) { sub = 'phones'; badge = 'Phones'; }
    else if (subLower.includes('cosmetic')) { sub = 'cosmetics'; badge = 'Cosmetics'; }
    
    return { sub, badge };
}

const data = [];
for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (row.length < 3 || !row[2]) continue; // Skip empty rows

    const { sub, badge } = getSubData(row[1]);
    const name = formatText(row[2]);
    const addr = formatText(row[3]);
    let cap = formatText(row[6]);
    const manager = formatName(row[9]);
    const title = formatText(row[10]);
    const phone = formatPhone(row[12]);
    
    // Extract just the number from staffing breakdown
    let staffRaw = formatText(row[14]);
    let staffMatch = staffRaw.match(/\\d+/);
    let staff = staffMatch ? staffMatch[0] : '';
    
    const func = formatText(row[15]);
    const desc = formatText(row[20]); // Strategic Significance
    
    data.push({ sub, badge, name, addr, manager, title, phone, staff, cap, func, desc });
}

let html = '';
data.forEach((loc, idx) => {
  const num = (idx + 1).toString().padStart(2, '0');
  
  let figure1Lbl = 'Capacity';
  let figure3Lbl = 'Bays';
  if (loc.sub === 'pharmacy' || loc.sub === 'cosmetics' || loc.sub === 'phones') { figure1Lbl = 'SKUs'; figure3Lbl = 'Clients'; }
  if (loc.sub === 'automobiles') { figure1Lbl = 'Vehicles'; figure3Lbl = 'Brands'; }
  if (loc.sub === 'beverages') { figure1Lbl = 'Accounts'; figure3Lbl = 'Brands'; }
  
  const capVal = loc.cap ? loc.cap : 'TBD';
  const capClass = (capVal === 'TBD' || capVal === '[ T ]') ? 'loc-fig-val tbd' : 'loc-fig-val';
  
  const staffVal = loc.staff ? loc.staff : 'TBD';
  const staffClass = (staffVal === 'TBD' || staffVal === '[ # ]') ? 'loc-fig-val tbd' : 'loc-fig-val';

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
        <div class="loc-body">
          <div class="loc-name">${loc.name}</div>
          <div class="loc-role">${loc.func || 'Distribution Hub'}</div>
          <div class="loc-address">${loc.addr || 'Kano, Kano State'}</div>
          <div class="loc-figures">
            <div class="loc-figure">
              <div class="${capClass}">${capVal}</div>
              <div class="loc-fig-lbl">${figure1Lbl}</div>
            </div>
            <div class="loc-figure">
              <div class="${staffClass}">${staffVal}</div>
              <div class="loc-fig-lbl">Staff</div>
            </div>
            <div class="loc-figure">
              <div class="loc-fig-val tbd">[ # ]</div>
              <div class="loc-fig-lbl">${figure3Lbl}</div>
            </div>
          </div>
        </div>
      </div>
`;
});

let content = fs.readFileSync(tsxPath, 'utf8');
const startTag = '<div class="locations-grid" id="locations-grid">';
const endSearch = '</section>';

const startIndex = content.indexOf(startTag);
if (startIndex !== -1) {
  const endIndex = content.indexOf(endSearch, startIndex);
  if (endIndex !== -1) {
    const newContent = content.slice(0, startIndex) + startTag + '\\n' + html + '    </div>\\n  </div>\\n' + content.slice(endIndex);
    fs.writeFileSync(tsxPath, newContent);
    console.log('Successfully wrote to page.tsx with updated descriptions and phone numbers.');
  } else {
    console.log('Could not find end of section.');
  }
} else {
  console.log('Could not find start index.');
}
