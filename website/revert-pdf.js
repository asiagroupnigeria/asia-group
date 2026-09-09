const fs = require('fs');
const filePath = 'C:/Users/SURFACE/Asia Group/asia-aspiar-catalogue/Asia Group Product Catalogue.html';
let html = fs.readFileSync(filePath, 'utf8');

// Restore filter
html = html.replace(
    /alt="Aspira packaging line" style="width:100%;height:240px;object-fit:cover;"/g,
    'alt="Aspira packaging line" style="width:100%;height:240px;object-fit:cover;filter:saturate(0.6) contrast(0.85) brightness(1.1)"'
);
// In case the trailing semicolon or lack thereof was different
html = html.replace(
    /alt="Aspira packaging line" style="width:100%;height:240px;object-fit:cover"/g,
    'alt="Aspira packaging line" style="width:100%;height:240px;object-fit:cover;filter:saturate(0.6) contrast(0.85) brightness(1.1)"'
);

// Restore giant number opacity
html = html.replace(/color:#192D1A/g, 'color:var(--ag-green-mid);opacity:0.25');

// Restore text opacity
html = html.replace(/color:#666;/g, 'opacity:0.75;');

fs.writeFileSync(filePath, html);
console.log("Reverted optimization changes");
