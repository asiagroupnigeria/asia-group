const fs = require('fs');
const path = require('path');

const opsPagePath = path.join(__dirname, 'src', 'app', '[locale]', 'operations', 'page.tsx');
const pageTsxPath = path.join(__dirname, 'src', 'app', '[locale]', 'page.tsx');

const opsHtml = fs.readFileSync(opsPagePath, 'utf8');

// 1. Extract the 6 cards from operations/page.tsx
const startMarker = '<!-- LOCATION 01 -->';
const endMarker = '<!-- LOCATION 07 -->';
const startIndex = opsHtml.indexOf(startMarker);
const endIndex = opsHtml.indexOf(endMarker);

const cardsHtml = opsHtml.substring(startIndex, endIndex).trim();

// 2. Fix page.tsx
let pageTsxContent = fs.readFileSync(pageTsxPath, 'utf8');
pageTsxContent = pageTsxContent.replace('${cardsHtml}', cardsHtml);

fs.writeFileSync(pageTsxPath, pageTsxContent);
console.log('Fixed cardsHtml reference!');
