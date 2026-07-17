const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf8');

// The multi_replace_file_content mangled .global-bg.
// The remaining code looks like:
// .global-bg {
//   transform: scale(1);
// }

const regex = /\.global-bg \{\s*transform: scale\(1\);\s*\}/;

const correctedCSS = `.global-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.global-bg--active {
  opacity: 1;
  transform: scale(1);
}`;

css = css.replace(regex, correctedCSS);

fs.writeFileSync('src/app/globals.css', css);
console.log('Fixed .global-bg css');
