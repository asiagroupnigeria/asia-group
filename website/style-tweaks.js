const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

// 1. Nav items darker
css = css.replace(/\.nav__link \{\s*font-family:[^}]*color:\s*var\(--text-light\);[^}]*\}/, (match) => {
  return match.replace(/color:\s*var\(--text-light\);/, 'color: var(--text-main);');
});

// 2. Hero secondary CTA green text
css = css.replace(/\.btn--outline \{\s*background:\s*transparent;\s*color:\s*var\(--text-main\);/, 
  `.btn--outline {\n  background: transparent;\n  color: var(--green);`);

// 3. Hero industry icons green
css = css.replace(/\.stat-bar-item__num \{\s*font-family:[^}]*color:\s*var\(--silver-light\);[^}]*\}/, (match) => {
  return match.replace(/color:\s*var\(--silver-light\);/, 'color: var(--green-light);');
});

// 4. Metrics numbers white & borders
css = css.replace(/\.numbers-grid \{\s*display: grid;\s*grid-template-columns: repeat\(4, 1fr\);\s*gap: 0;\s*border: 1px solid var\(--border-color\);\s*margin-top: 60px;\s*\}/, 
`.numbers-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 60px;
}`);

css = css.replace(/\.number-item \{\s*padding: 50px 40px;\s*border-right: 1px solid rgba\(255, 255, 255, 0\.12\);\s*border-bottom: 1px solid rgba\(255, 255, 255, 0\.08\);\s*position: relative;\s*\}/, 
`.number-item {
  padding: 50px 40px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
}`);

css = css.replace(/\.number-item__value \{[^}]*color:\s*var\(--text-muted\);[^}]*\}/, (match) => {
  return match.replace(/color:\s*var\(--text-muted\);/, 'color: #FFFFFF;');
});

css = css.replace(/\.number-item__label \{[^}]*color:\s*rgba\(255, 255, 255, 0\.7\);[^}]*\}/, (match) => {
  return match.replace(/color:\s*rgba\(255, 255, 255, 0\.7\);/, 'color: #FFFFFF;');
});

css = css.replace(/\.number-item__unit \{\s*font-family: var\(--font-condensed\);\s*font-size: 20px;\s*font-weight: 400;\s*\}/, 
`.number-item__unit {
  font-family: var(--font-condensed);
  font-size: 20px;
  font-weight: 400;
  color: #FFFFFF;
}`);

// 6. Core business card white title (Append to globals.css)
css += `\n
/* Core Business Card Promo */
.subsidiary-card--promo .subsidiary-card__title {
  color: #FFFFFF;
}
.subsidiary-card--promo .subsidiary-card__desc {
  color: rgba(255, 255, 255, 0.85);
}
.subsidiary-card--promo .subsidiary-card__num {
  color: rgba(255, 255, 255, 0.9);
}
`;

// 7. Footer higher contrast
css = css.replace(/\.footer__desc \{[^}]*color:\s*var\(--text-muted\);[^}]*\}/, (match) => {
  return match.replace(/color:\s*var\(--text-muted\);/, 'color: var(--text-main);');
});

css = css.replace(/\.footer__link \{[^}]*color:\s*var\(--text-muted\);[^}]*\}/, (match) => {
  return match.replace(/color:\s*var\(--text-muted\);/, 'color: var(--text-main); font-weight: 500;');
});

fs.writeFileSync('src/app/globals.css', css);

// 5. Update subsidiaries-grid.tsx
let tsx = fs.readFileSync('src/components/home/subsidiaries-grid.tsx', 'utf8');
tsx = tsx.replace(/'rgba\(255, 255, 255, 0\.65\)'/, "'rgba(255, 255, 255, 0.2)'");
tsx = tsx.replace(/blur\(6px\)/g, "blur(8px)");
fs.writeFileSync('src/components/home/subsidiaries-grid.tsx', tsx);

console.log('Script completed');
