const fs = require('fs');
const aboutPage = fs.readFileSync('src/app/[locale]/about/page.tsx', 'utf8');
const mediaComments = aboutPage.match(/<!-- MEDIA:.*?-->/g);
console.log(mediaComments.join('\n'));
