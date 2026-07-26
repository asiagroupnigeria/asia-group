const fs = require('fs');
const path = require('path');
const tsxPath = path.join(__dirname, 'src/app/[locale]/operations/page.tsx');

let f = fs.readFileSync(tsxPath, 'utf8');

// The portal has to be removed
f = f.replace('{mapContainer && createPortal(<InteractiveKanoMap />, mapContainer)}', '');
f = f.replace(/const \[mapContainer.*?;\n?/, '');
f = f.replace(/setMapContainer.*?;\n?/, '');
f = f.replace('import { createPortal } from \'react-dom\';\n', '');

// Find the boundaries of dangerouslySetInnerHTML 
// The string starts somewhere around `<div dangerouslySetInnerHTML={{ __html: \``
const htmlStartMarker = '<div dangerouslySetInnerHTML={{ __html: `';
const startIdx = f.indexOf(htmlStartMarker);
if (startIdx === -1) throw new Error("Could not find start marker");

const mapSectionStart = f.indexOf('<section class="map-section">', startIdx);
const mapSectionEnd = f.indexOf('</section>', mapSectionStart) + '</section>'.length;

const beforeMapHTML = f.slice(startIdx + htmlStartMarker.length, mapSectionStart);

// Process Map Section to JSX
let mapHTML = f.slice(mapSectionStart, mapSectionEnd);
mapHTML = mapHTML.replace(/class=/g, 'className=');
// Convert basic styles
mapHTML = mapHTML.replace(/style="font-size:15px;font-weight:300;line-height:1.85;color:rgba\(255,255,255,0\.5\);"/g, "style={{fontSize:'15px', fontWeight:300, lineHeight:1.85, color:'rgba(255,255,255,0.5)'}}");
mapHTML = mapHTML.replace(/style="min-height: 600px;"/g, "style={{minHeight: '600px'}}");
mapHTML = mapHTML.replace(/style="background:var\(--green-light\)"/g, "style={{background:'var(--green-light)'}}");
mapHTML = mapHTML.replace(/style="background:#4DB6AC"/g, "style={{background:'#4DB6AC'}}");
mapHTML = mapHTML.replace(/style="background:#EF5350"/g, "style={{background:'#EF5350'}}");
mapHTML = mapHTML.replace(/style="background:#42A5F5"/g, "style={{background:'#42A5F5'}}");
mapHTML = mapHTML.replace(/style="background:#CE93D8"/g, "style={{background:'#CE93D8'}}");
mapHTML = mapHTML.replace(/style="background:#4FC3F7"/g, "style={{background:'#4FC3F7'}}");

// Insert the InteractiveKanoMap component inside the map container
mapHTML = mapHTML.replace(/<div className="map-container" id="kano-map-root" style=\{\{minHeight: '600px'\}\}><\/div>/, 
  `<div className="map-container" id="kano-map-root" style={{minHeight: '600px'}}>
        <InteractiveKanoMap />
      </div>`
);

const afterMapHTML = f.slice(mapSectionEnd, f.lastIndexOf('` }} />'));

const newContent = 
f.slice(0, startIdx) +
`<div dangerouslySetInnerHTML={{ __html: \`${beforeMapHTML}\` }} />
      ${mapHTML}
      <div dangerouslySetInnerHTML={{ __html: \`${afterMapHTML}\` }} />
    </div>
  );
}
`;

fs.writeFileSync(tsxPath, newContent);
console.log('Successfully refactored page to mix JSX and HTML.');
