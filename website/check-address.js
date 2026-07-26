const f = require('fs').readFileSync('src/app/[locale]/operations/page.tsx', 'utf8');
const lines = f.split('\n');
for(let i=0; i<lines.length; i++) {
  if(lines[i].includes('class="loc-address"')) {
    console.log(lines[i].trim());
  }
}
