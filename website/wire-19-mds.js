const fs = require('fs');
const path = require('path');

const aboutPagePath = path.join(__dirname, 'src', 'app', '[locale]', 'about', 'page.tsx');
if (!fs.existsSync(aboutPagePath)) process.exit(1);

let aboutPage = fs.readFileSync(aboutPagePath, 'utf8');

const locMDs = [
  { num: '01', name: 'Kamal Ismail Salihu', loc: 'Asia Power And Energy', role: 'Branch Manager', sub: 'automobiles', img: 'Kamal Ismail Salihu-md-automobiles-kofar-ruwa.png' },
  { num: '02', name: 'Saddam', loc: 'Asia Maisauki Pharma Co Ltd', role: 'Branch Pharmacist / Manager', sub: 'pharmacy', img: 'Saddam-md-pharamacy.png' },
  { num: '03', name: 'Shuaibu Balarabe', loc: 'Asia Group Aa Plaza', role: 'Branch Manager', sub: 'wholesale', img: 'Shuaibu Balarabe-md-aa-plaza.png' },
  { num: '04', name: 'Umar Sulaiman Dan Sarauniya', loc: 'Walai Plaza', role: 'Branch Manager', sub: 'wholesale', img: 'Umar Sulaiman Dan Sarauniya-md-walai-plaza.png' },
  { num: '05', name: 'Muhammad Taallu', loc: 'Asia Airways', role: 'Branch Manager', sub: 'wholesale', img: 'Muhammad Taallu-md-air-ways.png' },
  { num: '06', name: 'Sani Mustapha Musa', loc: 'Asia Group Beverages', role: 'Branch Manager', sub: 'beverages', img: 'Sani Mustapha Musa-md-beverages.png' },
  { num: '07', name: 'Abubakar Bala Muhammad', loc: 'Asia Automobiles, Energy And Power, Beirut', role: 'Branch Manager', sub: 'automobiles', img: 'Abubakar Bala Muhammad-md-automobile-post-office.png' },
  { num: '08', name: 'Abba Sani', loc: 'Asia Accessories Post Office', role: 'Branch Manager', sub: 'phones', img: 'Abba Sani-md-accessories-post-office.png' },
  { num: '09', name: "Yusuf Khalifa Isma'il", loc: 'Asia Automobile Sg', role: 'Branch Manager', sub: 'automobiles', img: 'Yusuf Khalifa Isma\'il-md-automobiles-mm-way.png' },
  { num: '10', name: 'Kamalu Garba Umar', loc: 'Asia Toothpaste', role: 'Branch Manager', sub: 'wholesale', img: 'Kamalu Garba Umar-md-toothpaste.png' },
  { num: '11', name: 'Yahaya Gambo Albashir', loc: 'Asia Group Sg2', role: 'Branch Manager', sub: 'wholesale', img: 'Yahaya Gambo Albashir-md-sg2.png' },
  { num: '12', name: 'Sulaiman Kabir', loc: 'Asia Cosmetics', role: 'Branch Manager', sub: 'cosmetics', img: 'Sulaiman Kabir-md-cosmetics-gashash.png' },
  { num: '13', name: 'Ahmad Ismail', loc: 'Asia Provision', role: 'Branch Manager', sub: 'wholesale', img: 'Ahmad Ismail-md-provision-babban-gashi.png' },
  { num: '14', name: 'Usman', loc: 'Asia Accessories Mai Karami', role: 'Branch Manager', sub: 'phones', img: 'Usman-md-acessories-mai-karami.png' },
  { num: '15', name: 'Balarabe Auwalu', loc: 'Asia Sg1', role: 'Branch Manager', sub: 'wholesale', img: 'Balarabe Auwalu-md-sg1.png' },
  { num: '16', name: 'Abdulaziz Yusuf', loc: 'Asia Cosmetics SG', role: 'Branch Manager', sub: 'cosmetics', img: 'Abdulaziz Yusuf-md-cosmetics-sg.png' },
  { num: '17', name: 'Nasir Ibrahim', loc: 'Asia Provision Gashash', role: 'Branch Manager', sub: 'wholesale', img: 'Nasir Ibrahim-md-provision-gashash.png' },
  { num: '18', name: 'Hashim Bashir Maidabino', loc: 'Asia Fmgc Chatalas', role: 'Branch Manager', sub: 'wholesale', img: 'Hashim Bashir Maidabino-md-fmgc-chatalas.png' },
  { num: '19', name: 'Abba Sani Isah', loc: 'Head Office', role: 'Branch Manager', sub: 'wholesale', img: 'abba-sani-isah-md-main-branch.png' },
];

let generatedCards = '';
locMDs.forEach(md => {
  generatedCards += `
    <!-- MD ${md.num} -->
    <div class="loc-md-card" data-div="${md.sub}">
      <div class="loc-md-portrait">
        <img src="/media/leadership/${md.img}" alt="${md.name}" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="loc-md-hover">
          <div class="loc-md-hover-loc">${md.loc}</div>
          <div class="loc-md-hover-role">${md.role}</div>
        </div>
      </div>
      <div class="loc-md-label">
        <div class="loc-md-name">${md.name}</div>
        <div class="loc-md-loc">${md.loc}</div>
      </div>
    </div>
`;
});

const gridRegex = /<div class="location-mds-grid"[^>]*>.*?<\/div><!-- \/location-mds-grid -->/s;
const newGridBlock = `<div class="location-mds-grid" id="loc-mds-grid">${generatedCards}  </div><!-- /location-mds-grid -->`;

aboutPage = aboutPage.replace(gridRegex, newGridBlock);
fs.writeFileSync(aboutPagePath, aboutPage);
console.log('19 Loc MDs injected into about page successfully!');
