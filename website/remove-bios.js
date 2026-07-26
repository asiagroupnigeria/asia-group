const fs = require('fs');
const path = require('path');

const aboutPagePath = path.join(__dirname, 'src', 'app', '[locale]', 'about', 'page.tsx');
let aboutPage = fs.readFileSync(aboutPagePath, 'utf8');

// The text is `<div class="exec-hover"><p class="exec-hover-bio">Full biography to be added after executive interview session.</p></div>`
// Replace it globally with `<div class="exec-hover"></div>` to keep the hover overlay but no text
aboutPage = aboutPage.replace(/<div class="exec-hover"><p class="exec-hover-bio">Full biography to be added after executive interview session.<\/p><\/div>/g, '<div class="exec-hover"></div>');

// Also remove from board members if they exist: `<p class="board-bio">Profile to be completed after board documentation session with company secretary.</p>`
aboutPage = aboutPage.replace(/<p class="board-bio">Profile to be completed after board documentation session with company secretary.<\/p>/g, '');

fs.writeFileSync(aboutPagePath, aboutPage);
console.log('Removed biography placeholder texts');
