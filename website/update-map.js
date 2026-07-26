const fs = require('fs');
const path = require('path');
const tsxPath = path.join(__dirname, 'src/app/[locale]/operations/page.tsx');

let content = fs.readFileSync(tsxPath, 'utf8');

const mapHTML = `
      <!-- MEDIA: Embed your Google My Maps here -->
      <!-- 1. Go to https://www.google.com/maps/d/ -->
      <!-- 2. Create a new map, add pins for your 19 locations -->
      <!-- 3. Click "Share", make it public -->
      <!-- 4. Click the 3 dots next to the map title -> "Embed on my site" -->
      <!-- 5. Paste the <iframe> code below, replacing this placeholder -->
      <div class="map-placeholder-inner">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M32 8C22.06 8 14 16.06 14 26c0 14 18 30 18 30s18-16 18-30c0-9.94-8.06-18-18-18zm0 24a6 6 0 110-12 6 6 0 010 12z" stroke="white" stroke-width="1.5"/></svg>
        <h3>Kano Operations Map</h3>
        <p>Google Maps Selected<br>
        Create a "Google My Maps" with your 19 locations, set it to public,<br>
        and embed the <b>&lt;iframe&gt;</b> code in <code>src/app/[locale]/operations/page.tsx</code> replacing this placeholder.</p>
      </div>
`;

content = content.replace(/<div class="map-placeholder-inner">[\s\S]*?<\/div>/, mapHTML.trim());

fs.writeFileSync(tsxPath, content);
console.log('Map instructions updated.');
