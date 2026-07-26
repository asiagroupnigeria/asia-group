const fs = require('fs');
const path = require('path');
const tsxPath = path.join(__dirname, 'src/app/[locale]/operations/page.tsx');

let f = fs.readFileSync(tsxPath, 'utf8');

function formatAddress(address) {
  // Title case by default
  let formatted = address.split(' ').map(w => {
    if (!w) return '';
    return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
  }).join(' ');

  // Fix specific typos like n0, N0, no.18 -> No. 18
  formatted = formatted.replace(/\b[nN]0\.?\s*/g, 'No. ');
  formatted = formatted.replace(/\b[Nn]o\.?\s*(?=\d)/g, 'No. ');
  
  // Fix specific words
  formatted = formatted.replace(/\bKano\b/gi, 'Kano');
  formatted = formatted.replace(/\bBlock B\b/gi, 'Block B');
  formatted = formatted.replace(/\bAa Plaza\b/g, 'AA Plaza');
  formatted = formatted.replace(/\bMm Way\b/g, 'MM Way');
  formatted = formatted.replace(/\bSg\b/g, 'SG');
  
  // Fix spacing around commas
  formatted = formatted.replace(/\s*,\s*/g, ', ');

  return formatted;
}

const regex = /<div class="loc-address"[^>]*>(.*?)<\/div>/g;

f = f.replace(regex, (match, p1) => {
  const clean = formatAddress(p1);
  return match.replace(p1, clean);
});

fs.writeFileSync(tsxPath, f);
console.log('Addresses formatted successfully.');
