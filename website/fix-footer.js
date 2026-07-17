const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

css = css.replace(/\.footer \{\s*background: var\(--black\);\s*border-top: 1px solid var\(--border-color\);\s*padding: 80px 60px 40px;\s*\}/, 
`.footer {
  background: var(--black);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 80px 60px 40px;
}`);

css = css.replace(/\.footer__top \{\s*display: grid;\s*grid-template-columns: 2fr 1fr 1fr 1fr 1fr;\s*gap: 60px;\s*padding-bottom: 60px;\s*border-bottom: 1px solid var\(--border-color\);\s*\}/, 
`.footer__top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 60px;
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}`);

css = css.replace(/\.footer__logo-name \{[^}]*color:\s*var\(--text-main\);[^}]*\}/, (m) => m.replace(/color:\s*var\(--text-main\);/, 'color: #FFFFFF;'));
css = css.replace(/\.footer__logo-sub \{[^}]*color:\s*var\(--text-muted\);[^}]*\}/, (m) => m.replace(/color:\s*var\(--text-muted\);/, 'color: rgba(255, 255, 255, 0.5);'));
css = css.replace(/\.footer__desc \{[^}]*color:\s*var\(--text-main\);[^}]*\}/, (m) => m.replace(/color:\s*var\(--text-main\);/, 'color: rgba(255, 255, 255, 0.6);'));
css = css.replace(/\.footer__col-title \{[^}]*color:\s*var\(--text-main\);[^}]*\}/, (m) => m.replace(/color:\s*var\(--text-main\);/, 'color: #FFFFFF;'));

css = css.replace(/\.footer__link \{[^}]*color:\s*var\(--text-main\);[^}]*\}/, (m) => m.replace(/color:\s*var\(--text-main\);\s*font-weight:\s*500;/, 'color: rgba(255, 255, 255, 0.6); font-weight: 300;'));
// Wait, in case my previous replace failed because of exact spacing, I'll use a more robust regex:
css = css.replace(/\.footer__link \{([\s\S]*?)\}/, (match, p1) => {
  let newP1 = p1.replace(/color:\s*var\(--text-main\);/g, 'color: rgba(255, 255, 255, 0.6);');
  newP1 = newP1.replace(/font-weight:\s*500;/g, 'font-weight: 300;');
  return `.footer__link {${newP1}}`;
});

css = css.replace(/\.footer__link:hover \{\s*color:\s*var\(--text-main\);\s*\}/, 
`.footer__link:hover {
  color: #FFFFFF;
}`);

css = css.replace(/\.footer__social \{([\s\S]*?)\}/, (match, p1) => {
  let newP1 = p1.replace(/border:\s*1px\s*solid\s*var\(--border-color\);/, 'border: 1px solid rgba(255, 255, 255, 0.2);');
  return `.footer__social {${newP1}}`;
});

css = css.replace(/\.footer__social:hover \{([\s\S]*?)\}/, (match, p1) => {
  let newP1 = p1.replace(/color:\s*var\(--text-main\);/, 'color: #FFFFFF;');
  return `.footer__social:hover {${newP1}}`;
});

css = css.replace(/\.footer__copy \{([\s\S]*?)\}/, (match, p1) => {
  let newP1 = p1.replace(/color:\s*rgba\(255, 255, 255, 0\.2\);/, 'color: rgba(255, 255, 255, 0.4);');
  return `.footer__copy {${newP1}}`;
});

css = css.replace(/\.footer__legal-link \{([\s\S]*?)\}/, (match, p1) => {
  let newP1 = p1.replace(/color:\s*rgba\(255, 255, 255, 0\.2\);/, 'color: rgba(255, 255, 255, 0.4);');
  return `.footer__legal-link {${newP1}}`;
});

fs.writeFileSync('src/app/globals.css', css);
console.log('Footer updated.');
