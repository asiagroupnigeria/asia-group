const fs = require('fs');
const opsPage = fs.readFileSync('src/app/[locale]/operations/page.tsx', 'utf8');
const cards = opsPage.match(/<div class="loc-card".*?(?=<!-- LOCATION \d+ -->|<\/div>\s*<\/div>\s*<\/section>)/gs) || [];
if (cards.length > 0) {
  console.log(cards[0]);
}
