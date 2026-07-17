const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

// 1. subsidiary-card
css = css.replace(/\.subsidiary-card \{\s*background: var\(--bg-main\);\s*padding: 50px 40px 40px;\s*position: relative;\s*overflow: hidden;\s*text-decoration: none;\s*display: flex;\s*flex-direction: column;\s*transition: background 0\.3s, opacity 0\.5s;\s*min-height: 600px;\s*\}/, 
`.subsidiary-card {
  background: var(--bg-main);
  padding: 50px 40px 40px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  transition: background 0.3s, opacity 0.5s, transform 0.4s, box-shadow 0.4s;
  min-height: 600px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 20px rgba(27, 94, 32, 0.05);
}`);

css = css.replace(/\.subsidiary-card:hover \{\s*background: var\(--bg-muted\);\s*\}/, 
`.subsidiary-card:hover {
  background: var(--bg-muted);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(27, 94, 32, 0.1);
}`);

// 2. number-item__desc
css = css.replace(/color:\s*rgba\(255,\s*255,\s*255,\s*0\.4\);/, 'color: var(--text-muted);');

// 3. stat-bar-item__num and label
css = css.replace(/\.stat-bar-item__num \{[^}]*\}/, (m) => m.replace(/color:\s*var\(--text-muted\);/, 'color: var(--silver-light);'));
css = css.replace(/\.stat-bar-item__label \{[^}]*\}/, (m) => m.replace(/color:\s*var\(--text-muted\);/, 'color: var(--silver-light);'));

// 4. culture-value, file-drop, programmes, impact
css = css.replace(/background:\s*rgba\(255,\s*255,\s*255,\s*0\.12\);/g, 'background: var(--bg-muted);');
css = css.replace(/background:\s*rgba\(0,\s*0,\s*0,\s*0\.15\);/g, 'background: var(--bg-main);');
css = css.replace(/color:\s*rgba\(255,\s*255,\s*255,\s*0\.55\);/g, 'color: var(--text-muted);');
css = css.replace(/border:\s*1px\s*dashed\s*rgba\(255,\s*255,\s*255,\s*0\.12\);/g, 'border: 1px dashed var(--border-color);');
css = css.replace(/border-color:\s*rgba\(255,\s*255,\s*255,\s*0\.25\);/g, 'border-color: var(--green);');
css = css.replace(/background:\s*rgba\(255,\s*255,\s*255,\s*0\.03\);/g, 'background: var(--bg-muted);');
css = css.replace(/border-bottom:\s*1px\s*solid\s*rgba\(255,\s*255,\s*255,\s*0\.04\);/g, 'border-bottom: 1px solid var(--border-color);');
css = css.replace(/border:\s*1px\s*solid\s*rgba\(255,\s*255,\s*255,\s*0\.12\);/g, 'border: 1px solid var(--border-color);');
css = css.replace(/color:\s*rgba\(255,\s*255,\s*255,\s*0\.5\);/g, 'color: var(--text-muted);');

fs.writeFileSync('src/app/globals.css', css);
console.log('Fixes applied successfully!');
