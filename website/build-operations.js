const fs = require('fs');
const path = require('path');

const sourcePath = path.resolve(__dirname, '../files (2)/index.html');
const destDir = path.resolve(__dirname, 'src/app/[locale]/operations');
const destPath = path.resolve(destDir, 'page.tsx');

let html = fs.readFileSync(sourcePath, 'utf8');

// Extract CSS
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
let css = styleMatch ? styleMatch[1] : '';

// Remove root vars since they are in globals.css, but keep specific ones if needed.
css = css.replace(/:root\s*{[^}]*}/, '');

// Extract Body
let bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
let body = bodyMatch ? bodyMatch[1] : '';

// Remove Nav and Footer
body = body.replace(/<nav>[\s\S]*?<\/nav>/, '');
body = body.replace(/<div className="footer-mini">[\s\S]*?<\/div>/, ''); // Wait, not class= yet
body = body.replace(/<div class="footer-mini">[\s\S]*?<\/div>/, '');

// Remove section tags
body = body.replace(/<div class="section-tag">[\s\S]*?<\/div>/g, '');
// Remove <em> tags
body = body.replace(/<em([^>]*)>([\s\S]*?)<\/em>/g, '$2');

// Convert class to className
body = body.replace(/class=/g, 'className=');
body = body.replace(/for=/g, 'htmlFor=');

// Convert inline styles to objects
body = body.replace(/style="([^"]*)"/g, (match, p1) => {
  const styles = p1.split(';').filter(s => s.trim()).map(s => {
    let parts = s.split(':');
    let key = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
    let val = parts.slice(1).join(':').trim();
    // Quote string values, numbers can be quoted too for simplicity
    return `${key}: '${val}'`;
  });
  return `style={{ ${styles.join(', ')} }}`;
});

// Fix unclosed tags
body = body.replace(/<br>/g, '<br />');
body = body.replace(/<img([^>]*)>/g, (m, p1) => {
  if (p1.endsWith('/')) return m;
  return `<img${p1} />`;
});
body = body.replace(/<rect([^>]*)>/g, (m, p1) => `<rect${p1} />`);
body = body.replace(/<path([^>]*)>/g, (m, p1) => `<path${p1} />`);
body = body.replace(/<source([^>]*)>/g, (m, p1) => `<source${p1} />`);

const componentStr = `
import React from 'react';

export default function OperationsPage() {
  return (
    <div className="operations-page">
      <style dangerouslySetInnerHTML={{ __html: \`${css.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
      ${body}
    </div>
  );
}
`;

fs.mkdirSync(destDir, { recursive: true });
fs.writeFileSync(destPath, componentStr);
console.log('Operations page created successfully.');
