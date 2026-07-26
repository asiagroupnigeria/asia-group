const fs = require('fs');
const path = require('path');

const aboutPath = path.resolve(__dirname, 'src/app/[locale]/about/page.tsx');
let content = fs.readFileSync(aboutPath, 'utf8');

// The HTML starts inside <div dangerouslySetInnerHTML={{ __html: `
// and ends with ` }} />
// We need to find the split point, which is `<!-- EXECUTIVE TEAM -->`

const splitPoint = '<!-- EXECUTIVE TEAM -->';

// 1. Extract the HISTORY TIMELINE section (JSX)
const timelineRegex = /\{\/\*\s*HISTORY TIMELINE\s*\*\/\}([\s\S]*?)(?=\s*<\/div>\s*\);\s*\})/m;
const timelineMatch = content.match(timelineRegex);
if (!timelineMatch) {
  console.log("Timeline not found");
  process.exit(1);
}
const timelineJSX = timelineMatch[0];

// 2. Remove the timeline from the bottom
content = content.replace(timelineJSX, '');

// 3. Now we find the dangerouslySetInnerHTML block
const htmlBlockRegex = /<div dangerouslySetInnerHTML=\{\{ __html: `([\s\S]*?)` \}\} \/>/;
const htmlMatch = content.match(htmlBlockRegex);
if (!htmlMatch) {
  console.log("HTML block not found");
  process.exit(1);
}
const fullHtml = htmlMatch[1];

// 4. Split the HTML into two parts at <!-- EXECUTIVE TEAM -->
const parts = fullHtml.split(splitPoint);
if (parts.length !== 2) {
  console.log("Split point not found exactly once");
  process.exit(1);
}

const htmlPart1 = parts[0];
const htmlPart2 = splitPoint + parts[1];

// 5. Reconstruct the page
const newBody = `
      <div dangerouslySetInnerHTML={{ __html: \`${htmlPart1}\` }} />
      
      ${timelineJSX}

      <div dangerouslySetInnerHTML={{ __html: \`${htmlPart2}\` }} />
`;

content = content.replace(htmlMatch[0], newBody);

fs.writeFileSync(aboutPath, content);
console.log("Successfully reordered the timeline to be before the executive team.");
