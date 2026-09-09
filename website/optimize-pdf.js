const fs = require('fs');
const filePath = 'C:/Users/SURFACE/Asia Group/asia-aspiar-catalogue/Asia Group Product Catalogue.html';
let html = fs.readFileSync(filePath, 'utf8');

// 1. Remove filter (This is the #1 cause of unoptimized/bitmap PDFs in Chrome)
html = html.replace(/filter:saturate\(0\.6\) contrast\(0\.85\) brightness\(1\.1\)/g, '');

// 2. Fix giant number opacity (This causes transparency groups which lag PDF readers)
html = html.replace(/color:var\(--ag-green-mid\);opacity:0\.25/g, 'color:#192D1A');

// 3. Fix text opacity in logistics
html = html.replace(/opacity:0\.75;/g, 'color:#666;');

fs.writeFileSync(filePath, html);
console.log("Optimized HTML for PDF generation");
