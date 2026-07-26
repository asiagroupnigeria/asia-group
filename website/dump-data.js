const fs = require('fs');
const opsPage = fs.readFileSync('src/app/[locale]/operations/page.tsx', 'utf8');

const cards = opsPage.match(/<div class="loc-card".*?(?=<!-- LOCATION \d+ -->|<\/div>\s*<\/div>\s*<\/section>)/gs) || [];
cards.forEach(card => {
  const numMatch = card.match(/<div class="loc-number">([^<]+)<\/div>/);
  const nameMatch = card.match(/<div class="loc-name">([^<]+)<\/div>/);
  const addrMatch = card.match(/<div class="loc-address".*?>([^<]+)<\/div>/);
  if (numMatch && nameMatch && addrMatch) {
    console.log(`${numMatch[1]}: ${nameMatch[1]} - ${addrMatch[1]}`);
  }
});

console.log('\n--- ABOUT MDs ---');
const aboutPage = fs.readFileSync('src/app/[locale]/about/page.tsx', 'utf8');
const execs = aboutPage.match(/<div class="exec-card">.*?<\/div>\s*<\/div>\s*<\/div>/gs) || [];
execs.forEach(exec => {
  const titleMatch = exec.match(/<div class="exec-title">([^<]+)<\/div>/);
  const nameMatch = exec.match(/<div class="exec-name">([^<]+)<\/div>/);
  if (titleMatch) {
    console.log(`Title: ${titleMatch[1]}, Name: ${nameMatch ? nameMatch[1] : 'N/A'}`);
    const imgMatch = exec.match(/<img[^>]+src="([^"]+)"/);
    if (imgMatch) {
      console.log(`  Img: ${imgMatch[1]}`);
    } else {
      console.log('  Img: NONE (SVG is still here)');
    }
  }
});
