const fs = require('fs');
const file = 'src/app/[locale]/operations/page.tsx';
let content = fs.readFileSync(file, 'utf8');
console.log('locations-grid:', content.indexOf('locations-grid'));
console.log('<div class="locations-grid" id="locations-grid">:', content.indexOf('<div class="locations-grid" id="locations-grid">'));
console.log('</section> after that:', content.indexOf('</section>', content.indexOf('locations-grid')));
