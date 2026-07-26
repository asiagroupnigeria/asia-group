const fs = require('fs');
const path = require('path');

const aboutPagePath = path.join(__dirname, 'src', 'app', '[locale]', 'about', 'page.tsx');
if (fs.existsSync(aboutPagePath)) {
  let aboutPage = fs.readFileSync(aboutPagePath, 'utf8');
  
  const execRegex = /<div class="exec-card">.*?<\/div>\s*<\/div>\s*<\/div>/gs;
  const execs = aboutPage.match(execRegex) || [];
  
  // Hand-picked top MDs from the leadership folder
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
    if (exec.includes('group-md')) mappingKey = 'group-md';
    else if (exec.includes('pharmacy-md')) mappingKey = 'pharmacy-md';
    else if (exec.includes('automobiles-md')) mappingKey = 'automobiles-md';
    else if (exec.includes('beverages-md')) mappingKey = 'beverages-md';
    else if (exec.includes('cosmetics-md')) mappingKey = 'cosmetics-md';
    else if (exec.includes('phones-md')) mappingKey = 'phones-md';
    
    if (mappingKey && mappings[mappingKey]) {
      const { file, name } = mappings[mappingKey];
      
      // Replace image placeholder
      const placeholderBlock = /<div class="exec-portrait-placeholder">.*?<\/div>/s;
      const newImgBlock = `<img src="/media/leadership/${file}" alt="${name}" style="width: 100%; height: 100%; object-fit: cover;" />`;
      let updatedExec = exec.replace(placeholderBlock, newImgBlock);
      
      // Replace name
      updatedExec = updatedExec.replace(/\[ Name — TBD \]/g, name);
      
      aboutPage = aboutPage.replace(exec, updatedExec);
    }
  });
  
  fs.writeFileSync(aboutPagePath, aboutPage);
  console.log('About page MDs updated successfully.');
}
