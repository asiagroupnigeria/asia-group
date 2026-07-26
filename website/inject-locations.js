const fs = require('fs');
const path = require('path');

const asiaHtmlPath = path.join('C:', 'Users', 'SURFACE', 'OneDrive', 'Desktop', 'asia.html');
const globalsCssPath = path.join(__dirname, 'src', 'app', 'globals.css');
const pageTsxPath = path.join(__dirname, 'src', 'app', '[locale]', 'page.tsx');

const htmlContent = fs.readFileSync(asiaHtmlPath, 'utf8');

// The CSS section is between lines 144 and 170 approx
const styleStart = htmlContent.indexOf('<style>');
const styleEnd = htmlContent.indexOf('</style>');
const cssBlock = htmlContent.substring(styleStart, styleEnd);

const cssStartMarker = '05 — 19 LOCATIONS PREVIEW';
const cssEndMarker = '06 — SUBSIDIARIES';
const cssStartIndex = cssBlock.indexOf(cssStartMarker);
const cssEndIndex = cssBlock.indexOf(cssEndMarker, cssStartIndex);

if (cssStartIndex !== -1 && cssEndIndex !== -1) {
  // Go back to the start of the comment block
  const actualStart = cssBlock.lastIndexOf('/* ', cssStartIndex);
  const actualEnd = cssBlock.lastIndexOf('/* ', cssEndIndex);
  const cssSnippet = cssBlock.substring(actualStart, actualEnd);
  fs.appendFileSync(globalsCssPath, '\n\n' + cssSnippet);
  console.log('Appended CSS to globals.css');
} else {
  console.log('Failed to extract CSS');
}

// HTML section
const bodyStart = htmlContent.indexOf('<body>');
const htmlBlock = htmlContent.substring(bodyStart);

const htmlStartIndex = htmlBlock.indexOf('<section id="locations-preview">');
const htmlEndIndex = htmlBlock.indexOf('<section id="subsidiaries">');

if (htmlStartIndex !== -1 && htmlEndIndex !== -1) {
  // Go back to the comment block above it
  const actualStart = htmlBlock.lastIndexOf('<!--', htmlStartIndex);
  const actualEnd = htmlBlock.lastIndexOf('<!--', htmlEndIndex);
  let jsxSnippet = htmlBlock.substring(actualStart, actualEnd);

  // Convert HTML to JSX
  jsxSnippet = jsxSnippet.replace(/class=/g, 'className=');
  jsxSnippet = jsxSnippet.replace(/<!--/g, '{/*').replace(/-->/g, '*/}');
  jsxSnippet = jsxSnippet.replace(/style="([^"]*)"/g, (match, styleStr) => {
    const rules = styleStr.split(';').filter(r => r.trim() !== '');
    const styleObjStr = rules.map(rule => {
      let [key, ...rest] = rule.split(':');
      let value = rest.join(':');
      if (!key || !value) return '';
      key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      value = value.trim();
      return `${key}: '${value}'`;
    }).filter(r => r).join(', ');
    return `style={{ ${styleObjStr} }}`;
  });
  jsxSnippet = jsxSnippet.replace(/href="operations\/index\.html"/g, 'href="/operations"');

  // Inject into page.tsx
  let pageTsxContent = fs.readFileSync(pageTsxPath, 'utf8');
  const injectMarker = '{/* ==================== SUBSIDIARIES ==================== */}';
  pageTsxContent = pageTsxContent.replace(injectMarker, jsxSnippet + '\n\n      ' + injectMarker);

  fs.writeFileSync(pageTsxPath, pageTsxContent);
  console.log('Successfully injected Locations Preview section HTML!');
} else {
  console.log('Failed to extract HTML');
}
