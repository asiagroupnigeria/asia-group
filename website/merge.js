const fs = require('fs');
const path = require('path');

const aboutPath = path.resolve(__dirname, 'src/app/[locale]/about/page.tsx');
const leadershipPath = path.resolve(__dirname, 'src/app/[locale]/leadership/page.tsx');

let aboutContent = fs.readFileSync(aboutPath, 'utf8');
let leadershipContent = fs.readFileSync(leadershipPath, 'utf8');

// Extract the HISTORY TIMELINE section from about page
const timelineMatch = aboutContent.match(/\{\/\*\s*HISTORY TIMELINE\s*\*\/\}([\s\S]*?)<\/div>\s*\);\s*\}\s*$/);
const timelineJSX = timelineMatch ? timelineMatch[1] : '';

// Extract the useEffect from about page
const useEffectMatch = aboutContent.match(/useEffect\(\(\) => \{[\s\S]*?\}, \[\]\);/);
const useEffectCode = useEffectMatch ? useEffectMatch[0] : '';

// Extract the import { useEffect }
const hasUseEffectImport = aboutContent.includes("import { useEffect }");

// Replace the end of leadership component with the timeline JSX
let newAboutContent = leadershipContent;

// Replace component name
newAboutContent = newAboutContent.replace(/function LeadershipPage\(\)/, 'function AboutPage()');

// Insert imports and useEffect
if (hasUseEffectImport) {
    newAboutContent = newAboutContent.replace(/import React from 'react';/, "import React, { useEffect } from 'react';\nimport Link from 'next/link';");
}

newAboutContent = newAboutContent.replace(/export default function AboutPage\(\) \{/, `export default function AboutPage() {\n  ${useEffectCode}\n`);

// Insert the timeline before the closing div
newAboutContent = newAboutContent.replace(/<\/div>\s*\);\s*\}\s*$/, `\n      {/* HISTORY TIMELINE */}\n${timelineJSX}\n    </div>\n  );\n}\n`);

// Also update the page header in the leadership HTML to say "Our Story & Leadership"
newAboutContent = newAboutContent.replace(/<span style="color:var\(--white\);">Leadership<\/span>/, '<span style="color:var(--white);">Our Story &amp; Leadership</span>');
newAboutContent = newAboutContent.replace(/<h1 class="page-title">Visionary Leadership<br>Built for a Continent<\/h1>/, '<h1 class="page-title">Our Story &amp; Leadership<br>Built for a Continent</h1>');

fs.writeFileSync(aboutPath, newAboutContent);
console.log("Successfully merged leadership into about page.");

// Delete the leadership page to avoid redundancy
fs.rmSync(path.dirname(leadershipPath), { recursive: true, force: true });
console.log("Deleted leadership page directory.");
