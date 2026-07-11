const fs = require('fs');

const files = [
  'src/app/globals.css',
  'src/components/home/hero.tsx',
  'src/app/[locale]/careers/page.tsx',
  'src/app/[locale]/page.tsx',
  'src/app/[locale]/sustainability/page.tsx',
  'src/app/[locale]/news/page.tsx',
  'src/app/[locale]/contact/page.tsx',
  'src/app/[locale]/businesses/page.tsx',
  'src/app/[locale]/about/page.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  if (file.endsWith('.tsx')) {
    // Remove <div className="section-tag...">...</div>
    content = content.replace(/<div className="section-tag[^"]*">.*?<\/div>\n?/g, '');
    
    // Remove multi-line partners-eyebrow
    content = content.replace(/<div className="partners-eyebrow">[\s\S]*?<\/div>\n?/g, '');

    // For hero.tsx, remove eyebrow from slides and JSX
    if (file.includes('hero.tsx')) {
      content = content.replace(/eyebrow:\s*'.*?',\n?/g, '');
      content = content.replace(/<div className="hero__eyebrow">[\s\S]*?<\/div>\n?/g, '');
      content = content.replace(/<div className="hero__dots">[\s\S]*?<\/div>\n?/g, '');
    }
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log('Processed', file);
}
