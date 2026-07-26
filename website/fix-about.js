const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'app', '[locale]', 'about', 'page.tsx');
let content = fs.readFileSync(file, 'utf8');

// Fix sticky hover by wrapping the hover styles in @media (hover: hover)
content = content.replace(
  /\.loc-md-card:hover \.loc-md-portrait img { transform: scale\(1\.05\); }/g,
  '@media (hover: hover) { .loc-md-card:hover .loc-md-portrait img { transform: scale(1.05); } }'
);
content = content.replace(
  /\.loc-md-card:hover \.loc-md-hover { opacity: 1; }/g,
  '@media (hover: hover) { .loc-md-card:hover .loc-md-hover { opacity: 1; } }'
);

// Remove placeholder text
const placeholderRegex = /<p style="font-size:13px;color:var\(--muted\);font-weight:300;">\s*\* All names and portraits to be inserted from field visit data\. Portraits recommended: consistent head-and-shoulders, same lighting and background treatment across all 19\.\s*<\/p>/;
content = content.replace(placeholderRegex, '');

// Update careers link
content = content.replace(
  /<a href="careers\.html" class="btn-primary">View Open Roles →<\/a>/g,
  '<a href="../careers" class="btn-primary">View Open Roles →</a>'
);

fs.writeFileSync(file, content);
console.log('Done fixing about page UI issues.');
