const fs = require('fs');
const path = require('path');

const files = [
  '../files (2)/index.html',
  '../files (2)/automobiles.html',
  '../files (2)/beverages.html',
  '../files (2)/cosmetics.html',
  '../files (2)/pharmaceuticals.html',
  '../files (2)/phones.html',
  '../files (2)/wholesale.html'
];

files.forEach(filePath => {
  const file = path.basename(filePath);
  const slug = file === 'index.html' ? 'operations' : file.replace('.html', '');
  const destDir = file === 'index.html' 
    ? path.resolve(__dirname, 'src/app/[locale]/operations')
    : path.resolve(__dirname, `src/app/[locale]/businesses/${slug}`);
  const destPath = path.resolve(destDir, 'page.tsx');

  let html = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8');

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

  // Remove section tags
  body = body.replace(/<div class="section-tag">[\s\S]*?<\/div>/g, '');
  
  // Remove <em> tags
  body = body.replace(/<em([^>]*)>([\s\S]*?)<\/em>/g, '$2');

  const componentName = slug.charAt(0).toUpperCase() + slug.slice(1) + 'Page';

  const componentStr = `
import React from 'react';

export default function ${componentName}() {
  return (
    <div className="${slug}-page">
      <style dangerouslySetInnerHTML={{ __html: \`${css.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
      <div dangerouslySetInnerHTML={{ __html: \`${body.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
    </div>
  );
}
`;

  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(destPath, componentStr);
  console.log(`${slug} page fixed successfully.`);
});
