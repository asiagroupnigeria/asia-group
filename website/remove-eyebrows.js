const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function removeTags(content, classNames) {
  let newContent = '';
  let i = 0;
  
  while (i < content.length) {
    // Look for <div 
    let divMatch = content.slice(i).match(/<div\s+(className|class)="([^"]+)"/);
    if (!divMatch) {
      newContent += content.slice(i);
      break;
    }
    
    let matchIndex = i + divMatch.index;
    
    // Check if the class matches
    let classes = divMatch[2].split(/\s+/);
    if (classes.some(c => classNames.includes(c))) {
      // Append everything up to this div
      newContent += content.slice(i, matchIndex);
      
      // Parse the div and find its closing tag using a stack
      let stack = 0;
      let j = matchIndex;
      let inString = false;
      let stringChar = '';
      
      while (j < content.length) {
        // Simple string handling to avoid matching <div inside strings (though rare in JSX, good to be safe)
        if (!inString && (content[j] === '"' || content[j] === "'")) {
          inString = true;
          stringChar = content[j];
          j++;
          continue;
        }
        if (inString && content[j] === stringChar) {
          inString = false;
          j++;
          continue;
        }
        
        if (!inString && content.slice(j, j+4) === '<div') {
          stack++;
          j += 4;
          continue;
        }
        
        if (!inString && content.slice(j, j+6) === '</div>') {
          stack--;
          if (stack === 0) {
            j += 6;
            // Removed!
            break;
          }
          j += 6;
          continue;
        }
        
        j++;
      }
      
      i = j; // Advance past the div
    } else {
      // Not a match, just advance past the `<div ` so we don't match it again
      newContent += content.slice(i, matchIndex + 4);
      i = matchIndex + 4;
    }
  }
  
  return newContent;
}

const targetClasses = ['section-tag', 'hero__eyebrow', 'hero-eyebrow'];

walkDir(path.resolve(__dirname, 'src/app'), (filePath) => {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let oldContent = content;
    
    content = removeTags(content, targetClasses);
    
    if (content !== oldContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${filePath}`);
    }
  }
});
