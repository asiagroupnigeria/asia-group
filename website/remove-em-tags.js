const fs = require('fs');
const path = require('path');

// 1. Remove <em> tags across the codebase
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace <em> and </em> tags but keep the inner text
      const newContent = content.replace(/<em>(.*?)<\/em>/g, '$1');
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory('src/app');
processDirectory('src/components');

// 2. Fix promo card heading color
let css = fs.readFileSync('src/app/globals.css', 'utf8');
css = css.replace(/\.subsidiary-card--promo \.subsidiary-card__title/g, '.subsidiary-card--promo .subsidiary-card__name');
fs.writeFileSync('src/app/globals.css', css);

console.log('Script completed.');
