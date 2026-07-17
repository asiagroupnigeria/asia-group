const fs = require('fs');

// 1. Update globals.css
let css = fs.readFileSync('src/app/globals.css', 'utf8');

// Carousel controls
css = css.replace(/\.hero__control \{\s*position: absolute;\s*top: 50%;\s*transform: translateY\(-50%\);\s*z-index: 10;\s*width: 50px;\s*height: 50px;\s*border-radius: 50%;\s*background: rgba\(10, 10, 10, 0\.2\);\s*backdrop-filter: blur\(8px\);\s*-webkit-backdrop-filter: blur\(8px\);\s*border: 1px solid var\(--border-color\);\s*color: var\(--text-main\);\s*font-size: 24px;\s*display: flex;\s*align-items: center;\s*justify-content: center;\s*cursor: pointer;\s*transition: background 0\.3s, border-color 0\.3s;\s*\}/, 
`.hero__control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--green);
  border: 1px solid var(--green);
  color: #FFFFFF;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s, border-color 0.3s;
}`);

css = css.replace(/\.hero__control:hover \{\s*background: rgba\(10, 10, 10, 0\.6\);\s*border-color: rgba\(255, 255, 255, 0\.3\);\s*\}/, 
`.hero__control:hover {
  background: var(--green-mid);
  border-color: var(--green-mid);
}`);

css = css.replace(/\.hero__dot--active \{\s*background: var\(--silver-light\);\s*\}/, 
`.hero__dot--active {
  background: var(--green);
}`);

// Nav element underline
css = css.replace(/\.nav__link::after \{\s*content: '';\s*position: absolute;\s*bottom: -4px;\s*left: 0;\s*right: 0;\s*height: 1px;\s*background: var\(--silver-light\);\s*transform: scaleX\(0\);\s*transition: transform 0\.3s;\s*\}/, 
`.nav__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--green);
  transform: scaleX(0);
  transition: transform 0.3s;
}`);

fs.writeFileSync('src/app/globals.css', css);

// 2. Update subsidiaries-grid.tsx
let tsx = fs.readFileSync('src/components/home/subsidiaries-grid.tsx', 'utf8');

tsx = tsx.replace(/background: hoveredIndex === null \s*\?\s*`linear-gradient\(to top, rgba\(255, 255, 255, 0\.95\) 0%, rgba\(255, 255, 255, 0\.3\) 100%\), url\(\$\{sub\.image\}\)` \s*:\s*'rgba\(255, 255, 255, 0\.2\)',/g, 
`background: hoveredIndex === null 
              ? 'var(--bg-main)' 
              : (hoveredIndex === i ? 'transparent' : 'rgba(255, 255, 255, 0.4)'),`);

tsx = tsx.replace(/backdropFilter: hoveredIndex !== null && hoveredIndex !== i \? 'blur\(8px\)' : 'none',/g, 
`backdropFilter: hoveredIndex !== null && hoveredIndex !== i ? 'blur(4px)' : 'none',`);

tsx = tsx.replace(/WebkitBackdropFilter: hoveredIndex !== null && hoveredIndex !== i \? 'blur\(8px\)' : 'none'/g, 
`WebkitBackdropFilter: hoveredIndex !== null && hoveredIndex !== i ? 'blur(4px)' : 'none'`);

fs.writeFileSync('src/components/home/subsidiaries-grid.tsx', tsx);

console.log('Script completed');
