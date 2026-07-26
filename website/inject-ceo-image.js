const fs = require('fs');
const path = require('path');

// Fix Leadership Page
const leadershipPath = path.resolve(__dirname, 'src/app/[locale]/leadership/page.tsx');
if (fs.existsSync(leadershipPath)) {
  let content = fs.readFileSync(leadershipPath, 'utf8');
  content = content.replace(
    /<div class="founder-portrait-placeholder">[\s\S]*?<\/div>/,
    '<img src="/media/leadership/alh-asia.jpeg" alt="Alhaji Sani Isah Abubakar" style="width:100%;height:100%;object-fit:cover;object-position:top;">'
  );
  fs.writeFileSync(leadershipPath, content);
  console.log('Fixed leadership page image');
}

// Fix CSR Page
const csrPath = path.resolve(__dirname, 'src/app/[locale]/csr/page.tsx');
if (fs.existsSync(csrPath)) {
  let content = fs.readFileSync(csrPath, 'utf8');
  content = content.replace(
    /<div class="ceo-avatar">SA<\/div>/,
    '<img src="/media/leadership/alh-asia.jpeg" class="ceo-avatar" alt="Alhaji Sani Isah Abubakar" style="object-fit:cover;">'
  );
  fs.writeFileSync(csrPath, content);
  console.log('Fixed CSR page image');
}
