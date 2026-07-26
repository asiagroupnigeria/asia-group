const fs = require('fs');
const path = require('path');

const files = [
  'automobiles.html',
  'beverages.html',
  'cosmetics.html',
  'pharmaceuticals.html',
  'phones.html',
  'wholesale.html'
];

files.forEach(file => {
  const slug = file.replace('.html', '');
  const sourcePath = path.resolve(__dirname, '../files (2)/' + file);
  const destDir = path.resolve(__dirname, `src/app/[locale]/businesses/${slug}`);
  const destPath = path.resolve(destDir, 'page.tsx');

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
  body = body.replace(/<div className="footer-mini">[\s\S]*?<\/div>/, '');
  body = body.replace(/<div class="footer-mini">[\s\S]*?<\/div>/, '');

  // Remove section tags
  body = body.replace(/<div class="section-tag">[\s\S]*?<\/div>/g, '');
  body = body.replace(/<div className="section-tag">[\s\S]*?<\/div>/g, '');
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

  const componentName = slug.charAt(0).toUpperCase() + slug.slice(1) + 'Page';

  const componentStr = `
import React from 'react';

export default function ${componentName}() {
  return (
    <div className="${slug}-page">
      <style dangerouslySetInnerHTML={{ __html: \`${css.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
      ${body}
    </div>
  );
}
`;

  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(destPath, componentStr);
  console.log(`${slug} page created successfully.`);
});
