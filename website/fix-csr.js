const fs = require('fs');
const path = require('path');

const csrPath = path.resolve(__dirname, 'src/app/[locale]/csr/page.tsx');
let content = fs.readFileSync(csrPath, 'utf8');

// 1. Remove philosophy section
const philStart = content.indexOf('<!-- ═══ PHILOSOPHY ═══ -->');
const mealsStart = content.indexOf('<!-- ═══ DAILY MEALS DEEP DIVE ═══ -->');
if (philStart !== -1 && mealsStart !== -1) {
  content = content.slice(0, philStart) + content.slice(mealsStart);
}

// 2. Fix spacing before hero
content = content.replace(/\.hero\s*\{\s*padding-top:\s*80px;/g, '.hero { padding-top: 0px;');

// 3. Fix <em> tags in h1/h2
content = content.replace(/<h1 class="hero-headline">\s*Business as<br>Service to People\.\s*<\/h1>/, '<h1 class="hero-headline">\n      Business as<br><em>Service to People.</em>\n    </h1>');
content = content.replace(/<h2>4,000 Meals\.<br>Every Day\. Without Fail\.<\/h2>/, '<h2>4,000 Meals.<br><em>Every Day. Without Fail.</em></h2>');
content = content.replace(/<h2>Seen in the Field,<br>Not in a Report<\/h2>/, '<h2>Seen in the Field,<br><em>Not in a Report</em></h2>');
content = content.replace(/<h2>A Complete Commitment<br>to Community<\/h2>/, '<h2>A Complete Commitment<br><em>to Community</em></h2>');
content = content.replace(/<h2>Impact That Can<br>Be Measured<\/h2>/, '<h2>Impact That Can<br><em>Be Measured</em></h2>');
content = content.replace(/<h2>What People Say About<br>Asia Group's Impact<\/h2>/, `<h2>What People Say About<br><em>Asia Group's Impact</em></h2>`);
content = content.replace(/<h2>Support a Legacy<br>Being Built Daily<\/h2>/, '<h2>Support a Legacy<br><em>Being Built Daily</em></h2>');

// 4. Fix coloring in Impact section and CSS
// Change h2 em color to gold-light
content = content.replace(/h2 em \{ font-style: italic; color: var\(--silver-light\); \}/g, 'h2 em { font-style: italic; color: var(--gold-light); }');
// Change inline styles in Impact section
content = content.replace(/<div class="impact-n" style="color:var\(--silver-light\);">\[ # \]/g, '<div class="impact-n" style="color:var(--gold-light);">[ # ]');
content = content.replace(/<div class="impact-n" style="color:var\(--silver-light\);">\[ ₦B \]/g, '<div class="impact-n" style="color:var(--gold-light);">[ ₦B ]');

// Restore gold-light where appropriate
content = content.replace(/\.meal-time-n \{([^}]+)color: var\(--silver-light\);/g, '.meal-time-n {$1color: var(--gold-light);');
content = content.replace(/\.meal-event-time \{([^}]+)color: var\(--silver-light\);/g, '.meal-event-time {$1color: var(--gold-light);');
content = content.replace(/\.meals-annual-n \{([^}]+)color: var\(--silver-light\);/g, '.meals-annual-n {$1color: var(--gold-light);');
content = content.replace(/\.programme-metric-n \{([^}]+)color: var\(--silver-light\);/g, '.programme-metric-n {$1color: var(--gold-light);');
content = content.replace(/\.breadcrumb a \{ color: var\(--silver-light\);/g, '.breadcrumb a { color: var(--gold-light);');

fs.writeFileSync(csrPath, content);
console.log("Applied CSR fixes successfully.");
