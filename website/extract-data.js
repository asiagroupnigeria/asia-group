const fs = require('fs');
const path = require('path');

const opsPagePath = path.join(__dirname, 'src', 'app', '[locale]', 'operations', 'page.tsx');
const globalsCssPath = path.join(__dirname, 'src', 'app', 'globals.css');
const locationsTsPath = path.join(__dirname, 'src', 'data', 'locations.ts');

const opsHtml = fs.readFileSync(opsPagePath, 'utf8');

// 1. Move CSS to globals.css
const cssStartMarker = '/* ── LOCATIONS GRID & CARDS ── */';
const cssEndMarker = '/* JS-driven filter hide */';
const cssStartIndex = opsHtml.indexOf(cssStartMarker);
const cssEndIndex = opsHtml.indexOf(cssEndMarker);

if (cssStartIndex !== -1 && cssEndIndex !== -1) {
  const cssBlock = opsHtml.substring(cssStartIndex, cssEndIndex).trim();
  const globalsCss = fs.readFileSync(globalsCssPath, 'utf8');
  if (!globalsCss.includes('.loc-badge')) {
    fs.appendFileSync(globalsCssPath, '\n\n' + cssBlock);
    console.log('Appended loc CSS to globals.css');
  }
}

// 2. Extract Data
const gridStartMarker = 'id="locations-grid"';
const gridStartIndex = opsHtml.indexOf(gridStartMarker);

if (gridStartIndex === -1) {
  console.error('Could not find locations grid');
  process.exit(1);
}

const gridHtml = opsHtml.substring(gridStartIndex); // just read to EOF for regex matching

const locRegex = /<div class="loc-card" data-subsidiary="([^"]+)">[\s\S]*?<img class="loc-photo-img" src="([^"]+)" alt="([^"]+)" \/>[\s\S]*?<div class="loc-badge[^"]*">([^<]+)<\/div>[\s\S]*?<div class="loc-number">([^<]+)<\/div>[\s\S]*?<div class="loc-expand-title">([^<]+)<\/div>[\s\S]*?<div class="loc-expand-md">([^<]*)<\/div>[\s\S]*?<div class="loc-expand-md-title">([^<]*)<\/div>[\s\S]*?<p class="loc-expand-desc"[^>]*>([\s\S]*?)<\/p>[\s\S]*?<div class="loc-name">([^<]+)<\/div>[\s\S]*?<div class="loc-role">([^<]+)<\/div>[\s\S]*?<div class="loc-address"[^>]*>([\s\S]*?)<\/div>/g;

let match;
const locations = [];

// Fallback regex for location 9 which has no real img tag but an svg
const loc9Regex = /<div class="loc-card" data-subsidiary="([^"]+)">[\s\S]*?<div class="loc-badge[^"]*">([^<]+)<\/div>[\s\S]*?<div class="loc-number">09<\/div>[\s\S]*?<div class="loc-expand-title">([^<]+)<\/div>[\s\S]*?<div class="loc-expand-md">([^<]*)<\/div>[\s\S]*?<div class="loc-expand-md-title">([^<]*)<\/div>[\s\S]*?<p class="loc-expand-desc"[^>]*>([\s\S]*?)<\/p>[\s\S]*?<div class="loc-name">([^<]+)<\/div>[\s\S]*?<div class="loc-role">([^<]+)<\/div>[\s\S]*?<div class="loc-address"[^>]*>([\s\S]*?)<\/div>/;

while ((match = locRegex.exec(gridHtml)) !== null) {
  locations.push({
    id: match[5].trim(),
    subsidiaryId: match[1].trim(),
    subsidiaryName: match[4].trim(),
    image: match[2].trim(),
    name: match[10].trim(),
    role: match[11].trim(),
    address: match[12].trim().replace(/<br>/g, '\n'),
    manager: {
      name: match[7].trim(),
      titleAndPhone: match[8].trim()
    },
    products: match[9].trim()
  });
}

// Manually fetch location 9 if missed
if (!locations.find(l => l.id === '09')) {
    const m9 = gridHtml.match(loc9Regex);
    if (m9) {
        locations.push({
            id: '09',
            subsidiaryId: m9[1].trim(),
            subsidiaryName: m9[2].trim(),
            image: '', // Needs placeholder handling
            name: m9[7].trim(),
            role: m9[8].trim(),
            address: m9[9].trim().replace(/<br>/g, '\n'),
            manager: {
                name: m9[4].trim(),
                titleAndPhone: m9[5].trim()
            },
            products: m9[6].trim()
        });
    }
}

// Sort by ID
locations.sort((a, b) => parseInt(a.id) - parseInt(b.id));

const tsContent = `export interface LocationManager {
  name: string;
  titleAndPhone: string;
}

export interface LocationData {
  id: string;
  subsidiaryId: string;
  subsidiaryName: string;
  image: string;
  name: string;
  role: string;
  address: string;
  manager: LocationManager;
  products: string;
}

export const locations: LocationData[] = ${JSON.stringify(locations, null, 2)};
`;

fs.mkdirSync(path.dirname(locationsTsPath), { recursive: true });
fs.writeFileSync(locationsTsPath, tsContent);
console.log('Successfully extracted ' + locations.length + ' locations data to src/data/locations.ts');
