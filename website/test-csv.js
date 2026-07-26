const fs = require('fs');
const text = fs.readFileSync('C:\\\\Users\\\\SURFACE\\\\Downloads\\\\ASIA Group of Companies Facility Profile & MD Interview Form (Responses) - Form responses 1.csv', 'utf8');
function parseCSV(text) {
  const result = [];
  let row = [];
  let inQuotes = false;
  let val = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === '"') {
      if (inQuotes && text[i + 1] === '"') { val += '"'; i++; } else { inQuotes = !inQuotes; }
    } else if (char === ',' && !inQuotes) { row.push(val); val = ''; }
    else if (char === '\n' && !inQuotes) { row.push(val); result.push(row); row = []; val = ''; }
    else if (char === '\r' && !inQuotes) { }
    else { val += char; }
  }
  if (val !== '' || row.length > 0) { row.push(val); result.push(row); }
  return result;
}
const rows = parseCSV(text);
console.log('Length:', rows[0].length);
rows[0].forEach((h, i) => console.log(i + ': ' + h.substring(0, 80).replace(/\n/g, ' ')));
