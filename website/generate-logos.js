const fs = require('fs');

const partners = [
  { file: 'olam.svg', text: 'OLAM' },
  { file: 'nestle.svg', text: 'Nestlé' },
  { file: 'cadbury.svg', text: 'Cadbury' },
  { file: 'dangote.svg', text: 'DANGOTE' },
  { file: 'bua.svg', text: 'BUA GROUP' },
  { file: 'sinotruck.svg', text: 'SINOTRUK' },
  { file: 'mikano.svg', text: 'MIKANO' },
  { file: '7up.svg', text: '7UP' },
  { file: 'euromega.svg', text: 'EUROMEGA' },
  { file: 'aspira.svg', text: 'ASPIRA' },
  { file: 'mamuda.svg', text: 'MAMUDA' },
  { file: 'ammasco.svg', text: 'AMMASCO' }
];

partners.forEach(p => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60">
  <text x="50%" y="50%" fill="currentColor" font-family="sans-serif" font-weight="bold" font-size="24" text-anchor="middle" dominant-baseline="middle" letter-spacing="2">
    ${p.text}
  </text>
</svg>`;
  fs.writeFileSync('public/media/logos/' + p.file, svg);
});
console.log('SVGs generated');
