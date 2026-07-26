const fs = require('fs');
const path = require('path');

const opsImagesDir = path.join(__dirname, 'public', 'media', 'asia-operation-cards');
const opsImages = fs.existsSync(opsImagesDir) ? fs.readdirSync(opsImagesDir) : [];

function getOpsImage(cardStr) {
  const s = cardStr.toLowerCase();
  for (const img of opsImages) {
    const i = img.toLowerCase();
    
    // Explicit hints from the filenames vs the HTML card contents
    if (s.includes('aa plaza') && i.includes('aa-plaza')) return img;
    if (s.includes('mai karami') && i.includes('mai-karami')) return img;
    if (s.includes('accessories') && s.includes('post office') && i.includes('accessories-post-office')) return img;
    if (s.includes('airways') && i.includes('airways')) return img;
    if (s.includes('automobiles') && s.includes('post office') && i.includes('automobiles-post-office')) return img;
    if (s.includes('power and energy') && i.includes('automobiles-dantata')) return img;
    if (s.includes('beverages') && i.includes('beverages')) return img;
    if (s.includes('cosmetics') && s.includes('gashash') && i.includes('cosmetics-gashash')) return img;
    if (s.includes('cosmetics sg') && i.includes('sg1')) return img; // fallback for Cosmetics SG? Or maybe there's no explicit one
    if (s.includes('head office') && i.includes('niger-street')) return img;
    if (s.includes('pharma') && i.includes('pharmacy')) return img;
    if (s.includes('provision gashash') && i.includes('provision-gashash')) return img;
    if (s.includes('babban') && i.includes('provision-dan-dago')) return img;
    if (s.includes('sg1') && i.includes('sg1')) return img;
    if (s.includes('sg2') && !s.includes('cosmetics sg') && i.includes('sg2')) return img;
    if (s.includes('toothpaste') && i.includes('toothpaste')) return img;
    if (s.includes('walai') && i.includes('walai-plazar')) return img;
  }
  
  return null;
}

const opsPagePath = path.join(__dirname, 'src', 'app', '[locale]', 'operations', 'page.tsx');
if (fs.existsSync(opsPagePath)) {
  let opsPage = fs.readFileSync(opsPagePath, 'utf8');
  
  let newOpsPage = opsPage;
  const cards = opsPage.match(/<div class="loc-card".*?(?=<!-- LOCATION \d+ -->|<\/div>\s*<\/div>\s*<\/section>)/gs) || [];
  
  cards.forEach(card => {
    const nameMatch = card.match(/<div class="loc-name">([^<]+)<\/div>/);
    if (nameMatch) {
      const locName = nameMatch[1];
      const imgFile = getOpsImage(card);
      
      if (imgFile) {
        const placeholderBlock = /<div class="loc-photo-img">.*?<\/div>\s*<\/div>/s;
        const newBlock = `<img class="loc-photo-img" src="/media/asia-operation-cards/${imgFile}" alt="${locName}" />`;
        const updatedCard = card.replace(placeholderBlock, newBlock);
        newOpsPage = newOpsPage.replace(card, updatedCard);
      }
    }
  });
  
  fs.writeFileSync(opsPagePath, newOpsPage);
  console.log('Operations page updated with images.');
}

const leadImagesDir = path.join(__dirname, 'public', 'media', 'leadership');
const leadImages = fs.existsSync(leadImagesDir) ? fs.readdirSync(leadImagesDir) : [];

function getLeadImage(mdName, title) {
  const n = mdName.toLowerCase().replace(/[^a-z0-9]/g, '');
  const t = title.toLowerCase();
  
  if (t.includes('ceo') || t.includes('group managing director')) {
    if (leadImages.includes('ceo-sani-isah.jpg')) return 'ceo-sani-isah.jpg'; 
  }
  
  if (mdName.toLowerCase().includes('khadija') && leadImages.includes('khadija.jpeg')) return 'khadija.jpeg';
  if (mdName.toLowerCase().includes('khalid') && leadImages.includes('khalid.jpeg')) return 'khalid.jpeg';
  if (mdName.toLowerCase().includes('alh') && leadImages.includes('alh-asia.jpeg')) return 'alh-asia.jpeg';
  
  for (const img of leadImages) {
    if (img === 'alh-asia.jpeg' || img === 'ceo-sani-isah.jpg' || img === 'khadija.jpeg' || img === 'khalid.jpeg' || img === 'chief-secretary.png') continue;
    
    const imgName = img.split('-md-')[0].toLowerCase().replace(/[^a-z0-9]/g, '');
    if (n === imgName || n.includes(imgName) || imgName.includes(n)) {
      return img;
    }
  }
  
  // Try matching subsidiary in the image name if name match fails
  const t2 = mdName + ' ' + title;
  for (const img of leadImages) {
    if (img.includes('-md-')) {
      const hint = img.split('-md-')[1].replace(/\.[^/.]+$/, "").replace(/-/g, ' ').toLowerCase();
      if (t2.toLowerCase().includes(hint)) {
        return img;
      }
    }
  }
  
  return null;
}

const aboutPagePath = path.join(__dirname, 'src', 'app', '[locale]', 'about', 'page.tsx');
if (fs.existsSync(aboutPagePath)) {
  let aboutPage = fs.readFileSync(aboutPagePath, 'utf8');
  
  const execs = aboutPage.match(/<div class="exec-card">.*?<\/div>\s*<\/div>/gs) || [];
  
  execs.forEach(exec => {
    const nameMatch = exec.match(/<div class="exec-name">([^<]+)<\/div>/);
    const titleMatch = exec.match(/<div class="exec-title">([^<]+)<\/div>/);
    
    if (nameMatch && titleMatch) {
      const name = nameMatch[1].replace(/\[|\]|—|TBD/g, '').trim();
      const title = titleMatch[1];
      
      let imgFile = getLeadImage(name, title);
      
      if (imgFile) {
        const placeholderBlock = /<div class="exec-portrait-placeholder">.*?<\/div>/s;
        const newBlock = `<img src="/media/leadership/${imgFile}" alt="${name}" style="width: 100%; height: 100%; object-fit: cover;" />`;
        const updatedExec = exec.replace(placeholderBlock, newBlock);
        aboutPage = aboutPage.replace(exec, updatedExec);
      }
    }
  });
  
  fs.writeFileSync(aboutPagePath, aboutPage);
  console.log('About page updated with MD images.');
}
