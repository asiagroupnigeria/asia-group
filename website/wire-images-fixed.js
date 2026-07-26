const fs = require('fs');
const path = require('path');

const opsPagePath = path.join(__dirname, 'src', 'app', '[locale]', 'operations', 'page.tsx');
if (fs.existsSync(opsPagePath)) {
  let opsPage = fs.readFileSync(opsPagePath, 'utf8');
  
  // Exact mappings based on user feedback and actual locations
  const opsMappings = {
    '01': 'automobiles-dantata.jpeg',
    '02': 'pharmacy.jpg',
    '03': 'aa-plaza.jpg',
    '04': 'walai-plazar.jpg',
    '05': 'airways.jpg',
    '06': 'beverages.jpg',
    '07': 'automobiles-post-office.jpg',
    '08': 'accessories-post-office.png',
    '09': null, // Automobile SG (Missing)
    '10': 'toothpaste.heic',
    '11': 'sg2.HEIC',
    '12': 'cosmetics-gashash.HEIC',
    '13': 'provision-dan-dago.heic', // babban gashi
    '14': 'accessories-mai-karami.jpg',
    '15': 'sg1.HEIC',
    '16': null, // Cosmetics SG (Missing)
    '17': 'provision-gashash.heic',
    '18': null, // Fmgc Chatalas (Missing)
    '19': 'niger-street.png'
  };

  const cards = opsPage.match(/<div class="loc-card".*?(?=<!-- LOCATION \d+ -->|<\/div>\s*<\/div>\s*<\/section>)/gs) || [];
  
  cards.forEach(card => {
    const numMatch = card.match(/<div class="loc-number">([^<]+)<\/div>/);
    if (!numMatch) return;
    const num = numMatch[1];
    
    const imgFile = opsMappings[num];
    let updatedCard = card;

    const svgPlaceholder = `<div class="loc-photo-placeholder">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="18" width="32" height="18" stroke="white" stroke-width="1.5"/><rect x="14" y="24" width="12" height="12" stroke="white" stroke-width="1.5"/><path d="M2 18L20 6L38 18" stroke="white" stroke-width="1.5"/></svg>
              <p>MEDIA: Location ${num}</p>
            </div>`;
    
    // Check if the card currently has an img or a placeholder
    const hasImg = card.match(/<img class="loc-photo-img" src="[^"]+" alt="[^"]+" \/>/);
    const hasPlaceholder = card.match(/<div class="loc-photo-placeholder">.*?<\/div>/s);
    
    const nameMatch = card.match(/<div class="loc-name">([^<]+)<\/div>/);
    const locName = nameMatch ? nameMatch[1] : `Location ${num}`;

    if (imgFile) {
      // Need to assign image
      const newImgBlock = `<img class="loc-photo-img" src="/media/asia-operation-cards/${imgFile}" alt="${locName}" />`;
      
      if (hasImg) {
        updatedCard = updatedCard.replace(/<img class="loc-photo-img" src="[^"]+" alt="[^"]+" \/>/, newImgBlock);
      } else if (hasPlaceholder) {
        // Find the wrapper <div class="loc-photo-img"> ... </div> and replace the inside, actually the placeholder is inside loc-photo-img.
        // Wait, the previous run replaced the whole <div class="loc-photo-img">...</div> with just <img class="loc-photo-img"...>
        // If it has a placeholder, it means it is:
        // <div class="loc-photo-img">
        //   <div class="loc-photo-placeholder">...</div>
        // </div>
        const placeholderBlock = /<div class="loc-photo-img">\s*<div class="loc-photo-placeholder">.*?<\/div>\s*<\/div>/s;
        updatedCard = updatedCard.replace(placeholderBlock, newImgBlock);
      }
    } else {
      // Need to revert to SVG if it has an image
      if (hasImg) {
        const revertBlock = `<div class="loc-photo-img">\n            ${svgPlaceholder}\n          </div>`;
        updatedCard = updatedCard.replace(/<img class="loc-photo-img" src="[^"]+" alt="[^"]+" \/>/, revertBlock);
      }
    }

    opsPage = opsPage.replace(card, updatedCard);
  });
  
  fs.writeFileSync(opsPagePath, opsPage);
  console.log('Operations page fixed successfully.');
}

// Fix MDs in About Page
const aboutPagePath = path.join(__dirname, 'src', 'app', '[locale]', 'about', 'page.tsx');
if (fs.existsSync(aboutPagePath)) {
  let aboutPage = fs.readFileSync(aboutPagePath, 'utf8');
  
  // Use a safer regex to match exec-card. The card ends with <span class="exec-subsidiary">...</span>\n        </div>\n      </div>
  const execRegex = /<div class="exec-card">[\s\S]*?<span class="exec-subsidiary">[^<]+<\/span>\s*<\/div>\s*<\/div>/g;
  const execs = aboutPage.match(execRegex) || [];
  
  const mappings = {
    'group-md': { file: 'ceo-sani-isah.jpg', name: 'Sani Isah' },
    'pharmacy-md': { file: 'Saddam-md-pharamacy.png', name: 'Saddam' },
    'automobiles-md': { file: 'Abubakar Bala Muhammad-md-automobile-post-office.png', name: 'Abubakar Bala Muhammad' },
    'beverages-md': { file: 'Sani Mustapha Musa-md-beverages.png', name: 'Sani Mustapha Musa' },
    'cosmetics-md': { file: 'Abdulaziz Yusuf-md-cosmetics-sg.png', name: 'Abdulaziz Yusuf' },
    'phones-md': { file: 'Abba Sani-md-accessories-post-office.png', name: 'Abba Sani' }
  };
  
  execs.forEach(exec => {
    let mappingKey = null;
    if (exec.includes('group-md.jpg')) mappingKey = 'group-md';
    else if (exec.includes('pharmacy-md.jpg')) mappingKey = 'pharmacy-md';
    else if (exec.includes('automobiles-md.jpg')) mappingKey = 'automobiles-md';
    else if (exec.includes('beverages-md.jpg')) mappingKey = 'beverages-md';
    else if (exec.includes('cosmetics-md.jpg')) mappingKey = 'cosmetics-md';
    else if (exec.includes('phones-md.jpg')) mappingKey = 'phones-md';
    
    if (mappingKey && mappings[mappingKey]) {
      const { file, name } = mappings[mappingKey];
      let updatedExec = exec;
      
      const newImgBlock = `<img src="/media/leadership/${file}" alt="${name}" style="width: 100%; height: 100%; object-fit: cover;" />`;
      
      // If it still has the placeholder
      if (updatedExec.includes('<div class="exec-portrait-placeholder">')) {
        updatedExec = updatedExec.replace(/<div class="exec-portrait-placeholder">[\s\S]*?<\/div>/, newImgBlock);
      } else if (updatedExec.includes('<img src=')) {
        updatedExec = updatedExec.replace(/<img src="[^"]+" alt="[^"]+" style="[^"]+" \/>/, newImgBlock);
      }
      
      // Replace name
      updatedExec = updatedExec.replace(/<div class="exec-name">[^<]+<\/div>/, `<div class="exec-name">${name}</div>`);
      
      aboutPage = aboutPage.replace(exec, updatedExec);
    }
  });
  
  fs.writeFileSync(aboutPagePath, aboutPage);
  console.log('About page MDs fixed successfully.');
}
