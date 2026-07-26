const fs = require('fs');
const path = require('path');

const aboutPath = path.resolve(__dirname, 'src/app/[locale]/about/page.tsx');
let content = fs.readFileSync(aboutPath, 'utf8');

const scriptRegex = /<script>\s*([\s\S]*?)\s*<\/script>/;
const match = content.match(scriptRegex);

if (match) {
  const scriptContent = match[1];
  
  // Remove the script tag
  content = content.replace(match[0], '');
  
  // Inject the script content into the useEffect
  const useEffectEnd = '    return () => observer.disconnect();\n  }, []);';
  
  const newUseEffectEnd = `
    // Injected from prototype script
    ${scriptContent.replace(/\n/g, '\n    ')}
    
    return () => {
      observer.disconnect();
      if (typeof mdObs !== 'undefined') mdObs.disconnect();
    };
  }, []);`;
  
  content = content.replace(useEffectEnd, newUseEffectEnd);
  
  fs.writeFileSync(aboutPath, content);
  console.log("Fixed hydration error by moving script to useEffect.");
} else {
  console.log("Script tag not found.");
}
