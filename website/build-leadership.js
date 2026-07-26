const fs = require('fs');
const path = require('path');

const destDir = path.resolve(__dirname, 'src/app/[locale]/leadership');
const destPath = path.resolve(destDir, 'page.tsx');
const sourcePath = path.resolve(__dirname, '../files (2)/asia-group-website/leadership/index.html');

let html = fs.readFileSync(sourcePath, 'utf8');

// Extract CSS
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
let css = styleMatch ? styleMatch[1] : '';
css = css.replace(/:root\s*{[^}]*}/, '');

// Extract Body
let bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
let body = bodyMatch ? bodyMatch[1] : '';

// Remove Nav and Footer
body = body.replace(/<nav>[\s\S]*?<\/nav>/, '');
body = body.replace(/<div class="footer-mini">[\s\S]*?<\/div>/, '');
body = body.replace(/<div className="footer-mini">[\s\S]*?<\/div>/, '');

// Remove section tags
body = body.replace(/<div class="section-tag">[\s\S]*?<\/div>/g, '');

// Remove <em> tags
body = body.replace(/<em([^>]*)>([\s\S]*?)<\/em>/g, '$2');

// Convert gold to silver
css = css.replace(/var\(--gold\)/g, 'var(--silver)');
css = css.replace(/var\(--gold-light\)/g, 'var(--silver-light)');
body = body.replace(/var\(--gold\)/g, 'var(--silver)');
body = body.replace(/var\(--gold-light\)/g, 'var(--silver-light)');

const componentStr = `
import React from 'react';

export default function LeadershipPage() {
  return (
    <div className="leadership-page">
      <style dangerouslySetInnerHTML={{ __html: \`${css.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
      <div dangerouslySetInnerHTML={{ __html: \`${body.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
    </div>
  );
}
`;

fs.mkdirSync(destDir, { recursive: true });
fs.writeFileSync(destPath, componentStr);
console.log('Leadership page replicated successfully.');
