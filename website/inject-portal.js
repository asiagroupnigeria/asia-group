const fs = require('fs');
const path = require('path');
const tsxPath = path.join(__dirname, 'src/app/[locale]/operations/page.tsx');

let content = fs.readFileSync(tsxPath, 'utf8');

// 1. Add imports for useState, createPortal and InteractiveKanoMap
if (!content.includes('import { useState } from \'react\'')) {
  content = content.replace('import React, { useEffect } from \'react\';', 'import React, { useEffect, useState } from \'react\';\nimport { createPortal } from \'react-dom\';\nimport { InteractiveKanoMap } from \'@/components/operations/interactive-kano-map\';');
}

// 2. Add state and setter for map container
if (!content.includes('const [mapContainer, setMapContainer] = useState')) {
  const useEffectStart = content.indexOf('useEffect(() => {');
  content = content.slice(0, useEffectStart) + 'const [mapContainer, setMapContainer] = useState<HTMLElement | null>(null);\n\n  ' + content.slice(useEffectStart);
}

// 3. Set the map container inside useEffect
if (!content.includes('setMapContainer(document.getElementById(\'kano-map-root\'))')) {
  const useEffectEnd = content.indexOf('}, []);');
  content = content.slice(0, useEffectEnd) + '  setMapContainer(document.getElementById(\'kano-map-root\'));\n  ' + content.slice(useEffectEnd);
}

// 4. Update the HTML placeholder to have id="kano-map-root"
content = content.replace(/<div class="map-container">[\s\S]*?<div class="map-legend">/, '<div class="map-container" id="kano-map-root" style="min-height: 600px;"></div>\n    <div class="map-legend">');

// 5. Add the portal rendering
if (!content.includes('createPortal(<InteractiveKanoMap />')) {
  content = content.replace('<div className="operations-page">', '<div className="operations-page">\n      {mapContainer && createPortal(<InteractiveKanoMap />, mapContainer)}');
}

fs.writeFileSync(tsxPath, content);
console.log('Successfully injected React portal for Kano Map.');
