const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

// 1. Define new semantic tokens in :root
const newRoot = `
  /* Semantic Tokens */
  --bg-main: #FFFFFF;
  --bg-card: #F9FAF9;
  --bg-muted: #F2F4F2;
  --text-main: #111814;
  --text-muted: #555555;
  --text-light: #777777;
  --border-color: rgba(27, 94, 32, 0.15);
`;

css = css.replace(':root {', ':root {' + newRoot);

// 2. Replace hardcoded dark mode variables with semantic ones
css = css.replace(/background:\s*var\(--dark\)/g, 'background: var(--bg-main)');
css = css.replace(/background:\s*var\(--dark-2\)/g, 'background: var(--bg-card)');
css = css.replace(/background:\s*var\(--dark-3\)/g, 'background: var(--bg-muted)');
css = css.replace(/color:\s*var\(--white\)/g, 'color: var(--text-main)');
css = css.replace(/color:\s*var\(--silver-light\)/g, 'color: var(--text-muted)');
css = css.replace(/color:\s*var\(--light\)/g, 'color: var(--text-light)');
css = css.replace(/color:\s*var\(--muted\)/g, 'color: var(--text-muted)');
css = css.replace(/color:\s*var\(--silver\)/g, 'color: var(--text-muted)');

// 3. Fix nav specifically
css = css.replace(/background:\s*rgba\(10, 10, 10, 0\.92\)/g, 'background: rgba(255, 255, 255, 0.95)');
css = css.replace(/background:\s*rgba\(10, 10, 10, 0\.15\)/g, 'background: rgba(255, 255, 255, 0.85)');

// 4. Fix translucent white borders to dark borders
css = css.replace(/rgba\(255, 255, 255, 0\.06\)/g, 'var(--border-color)');
css = css.replace(/rgba\(255, 255, 255, 0\.05\)/g, 'var(--border-color)');
css = css.replace(/rgba\(255, 255, 255, 0\.1\)/g, 'var(--border-color)');

// 5. Fix btn--primary color (it was changed to text-main, we need it to be white)
css = css.replace(/\.btn--primary \{[^}]*\}/g, (match) => {
  return match.replace(/color:\s*var\(--text-main\)/g, 'color: var(--white)');
});

// 6. Fix hero text color (needs to remain white)
css = css.replace(/\.hero \{[^}]*\}/g, (match) => {
  return match.replace(/color:\s*var\(--text-main\)/g, 'color: var(--white)');
});
css = css.replace(/\.hero__title \{[^}]*\}/g, (match) => {
  return match.replace(/color:\s*var\(--text-main\)/g, 'color: var(--white)');
});
css = css.replace(/\.hero__desc \{[^}]*\}/g, (match) => {
  return match.replace(/color:\s*var\(--text-muted\)/g, 'color: rgba(255,255,255,0.8)');
});

// 7. Tailwind compatibility variables
css = css.replace(/--background:\s*var\(--dark\)/, '--background: var(--bg-main)');
css = css.replace(/--foreground:\s*var\(--white\)/, '--foreground: var(--text-main)');
css = css.replace(/--card:\s*var\(--dark-2\)/, '--card: var(--bg-card)');
css = css.replace(/--card-foreground:\s*var\(--white\)/, '--card-foreground: var(--text-main)');
css = css.replace(/--popover:\s*var\(--dark-2\)/, '--popover: var(--bg-card)');
css = css.replace(/--popover-foreground:\s*var\(--white\)/, '--popover-foreground: var(--text-main)');

// 8. Fix specific layout wrappers that use --dark
css = css.replace(/\.bg-dark \{[^}]*\}/, '.bg-dark { background: var(--bg-main); }');
css = css.replace(/\.bg-dark-2 \{[^}]*\}/, '.bg-dark-2 { background: var(--bg-card); }');
css = css.replace(/\.bg-dark-3 \{[^}]*\}/, '.bg-dark-3 { background: var(--bg-muted); }');


fs.writeFileSync('src/app/globals.css', css);
console.log('Migration complete!');
