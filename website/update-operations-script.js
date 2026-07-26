const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/app/[locale]/operations/page.tsx');
let content = fs.readFileSync(file, 'utf8');

const data = [
  { sub: 'automobiles', badge: 'Automobiles', name: 'ASIA POWER AND ENERGY', addr: 'Kofar Ruwa Market, Along Northwest University Kano', manager: 'Kamal Ismail Salihu', title: 'Mr', staff: '5', cap: '700 automobiles and Spare PARTS', func: 'Sales of electric power bikes' },
  { sub: 'pharmacy', badge: 'Pharmacy', name: 'Asia Maisauki Pharma Co Ltd', addr: 'n0 b32 Block b, kano economic city', manager: 'Saddam', title: 'Pharmacist / Manager', staff: 'TBD', cap: '2500 cartons', func: 'Pharmacy Outlet' },
  { sub: 'wholesale', badge: 'Wholesale', name: 'Asia Group AA Plaza', addr: 'Yolawa Stree Singer Market', manager: 'Shuaibu Balarabe', title: 'Manager', staff: '30', cap: '5 containers', func: 'Sales' },
  { sub: 'wholesale', badge: 'Wholesale', name: 'Walai plaza', addr: 'N01 AA plaza Niger Street Kano', manager: 'Umar sulaiman Dan sarauniya', title: 'Manager', staff: '10', cap: 'TBD', func: 'Wholesale and Distribution' },
  { sub: 'wholesale', badge: 'Wholesale', name: 'Asia Airways', addr: 'No 7 Bank Road', manager: 'Muhammad Taallu', title: 'Manager', staff: '10', cap: '10,000 containers', func: 'Mega Distribution' },
  { sub: 'beverages', badge: 'Beverages', name: 'Asia Group Beverages', addr: 'No 11/12 Hamsan Plaza Bank Road', manager: 'Sani Mustapha Musa', title: 'Manager', staff: '72', cap: '50 containers', func: 'Beverages Distribution' },
  { sub: 'automobiles', badge: 'Automobiles', name: 'Asia automobiles, energy and power, beirut', addr: 'No.18 post office Road, kano state', manager: 'Abubakar Bala Muhammad', title: 'Manager', staff: '4', cap: '3 trailer', func: 'Sales and distribution of electric bikes and batteries' },
  { sub: 'phones', badge: 'Phones', name: 'Asia Accessories Post Office', addr: 'No 18 post office road, Beirut Kano', manager: 'ABBA sani', title: 'Manager', staff: '5', cap: '2 containers', func: 'Wholesale and retail' },
  { sub: 'automobiles', badge: 'Automobiles', name: 'Asia Automobile SG', addr: 'No.6667 Murtala muhd way,yankura Kano.', manager: 'Yusuf Khalifa ismail', title: 'Manager', staff: '10', cap: '10 container', func: 'Automobile Showroom' },
  { sub: 'wholesale', badge: 'Wholesale', name: 'Asia Toothpaste', addr: 'No 9 Gobirawa street, B line SG KANO', manager: 'Kamalu Garba umar', title: 'Manager', staff: '5', cap: '2 containers', func: 'Wholesale of toothpaste, mouth brush' },
  { sub: 'wholesale', badge: 'Wholesale', name: 'Asia Group SG2', addr: 'No 34C Mm way Sg opp Singa', manager: 'YAHAYA GAMBO albashir', title: 'Manager', staff: '36', cap: '100 containers', func: 'Wholesale Distribution' },
  { sub: 'cosmetics', badge: 'Cosmetics', name: 'Asia Cosmetics', addr: 'B14, Muhammad Nuhu, Gidan Gashash, Singa', manager: 'Sulaiman Kabir', title: 'Manager', staff: '5', cap: '3 containers', func: 'Cosmetics Distribution' },
  { sub: 'wholesale', badge: 'Wholesale', name: 'Asia provision', addr: 'no 21 g/babban gashi', manager: 'Ahmad Ismail', title: 'Manager', staff: '10', cap: '10 containers', func: 'Provision Wholesale' },
  { sub: 'phones', badge: 'Phones', name: 'Asia Accessories Mai Karami', addr: 'No 4 Mai karamin plaza, Niger Street', manager: 'Usman', title: 'Manager', staff: 'TBD', cap: 'TBD', func: 'Accessories Retail' },
  { sub: 'wholesale', badge: 'Wholesale', name: 'Asia SG1', addr: 'Murtala Muhammad way Kano', manager: 'Balarabe Auwalu', title: 'Manager', staff: 'TBD', cap: 'TBD', func: 'Wholesale Distribution' },
  { sub: 'wholesale', badge: 'Wholesale', name: 'Asia SG2', addr: 'Murtala Muhammad way Kano', manager: 'Yahaya Gambo', title: 'Manager', staff: 'TBD', cap: 'TBD', func: 'Wholesale Distribution' },
  { sub: 'wholesale', badge: 'Wholesale', name: 'aSIA pROVISION Gashash', addr: 'Singa', manager: 'Nasir Ibrahim', title: 'Manager', staff: 'TBD', cap: 'TBD', func: 'Provision Wholesale' },
  { sub: 'wholesale', badge: 'Wholesale', name: 'ASia fmgc CHatalas', addr: 'Singa', manager: 'Hashim Bashir Maidabino', title: 'Manager', staff: 'TBD', cap: 'TBD', func: 'FMCG Wholesale' },
  { sub: 'wholesale', badge: 'Wholesale', name: 'Head Office', addr: 'No. 46, Niger Street, Kano, Kano State,', manager: 'Abba Abubakar Isah', title: 'Manager', staff: 'TBD', cap: 'TBD', func: 'Head Office' }
];

let html = '';
data.forEach((loc, idx) => {
  const num = (idx + 1).toString().padStart(2, '0');
  
  let figure1Lbl = 'Capacity';
  let figure3Lbl = 'Bays';
  if (loc.sub === 'pharmacy' || loc.sub === 'cosmetics' || loc.sub === 'phones') { figure1Lbl = 'SKUs'; figure3Lbl = 'Clients'; }
  if (loc.sub === 'automobiles') { figure1Lbl = 'Vehicles'; figure3Lbl = 'Brands'; }
  if (loc.sub === 'beverages') { figure1Lbl = 'Accounts'; figure3Lbl = 'Brands'; }
  
  const capVal = loc.cap ? loc.cap : 'TBD';
  const capClass = (capVal === 'TBD' || capVal === '[ T ]') ? 'loc-fig-val tbd' : 'loc-fig-val';
  
  const staffVal = loc.staff ? loc.staff : 'TBD';
  const staffClass = (staffVal === 'TBD' || staffVal === '[ # ]') ? 'loc-fig-val tbd' : 'loc-fig-val';

  html += `
      <!-- LOCATION ${num} -->
      <div class="loc-card" data-subsidiary="${loc.sub}">
        <div class="loc-photo">
          <div class="loc-photo-img">
            <div class="loc-photo-placeholder">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="18" width="32" height="18" stroke="white" stroke-width="1.5"/><rect x="14" y="24" width="12" height="12" stroke="white" stroke-width="1.5"/><path d="M2 18L20 6L38 18" stroke="white" stroke-width="1.5"/></svg>
              <p>MEDIA: Location ${num}</p>
            </div>
          </div>
          <div class="loc-badge ${loc.sub}">${loc.badge}</div>
          <div class="loc-number">${num}</div>
          <div class="loc-expand">
            <div class="loc-expand-title">Location ${num}</div>
            <div class="loc-expand-md">${loc.manager}</div>
            <div class="loc-expand-md-title">${loc.title}</div>
          </div>
        </div>
        <div class="loc-body">
          <div class="loc-name">${loc.name}</div>
          <div class="loc-role">${loc.func || 'Location'}</div>
          <div class="loc-address">${loc.addr || 'Kano, Kano State'}</div>
          <div class="loc-figures">
            <div class="loc-figure">
              <div class="${capClass}">${capVal}</div>
              <div class="loc-fig-lbl">${figure1Lbl}</div>
            </div>
            <div class="loc-figure">
              <div class="${staffClass}">${staffVal}</div>
              <div class="loc-fig-lbl">Staff</div>
            </div>
            <div class="loc-figure">
              <div class="loc-fig-val tbd">[ # ]</div>
              <div class="loc-fig-lbl">${figure3Lbl}</div>
            </div>
          </div>
        </div>
      </div>
`;
});

const startTag = '<div class="locations-grid" id="locations-grid">';
const endSearch = '</section>';

const startIndex = content.indexOf(startTag);
if (startIndex !== -1) {
  const endIndex = content.indexOf(endSearch, startIndex);
  if (endIndex !== -1) {
    const newContent = content.slice(0, startIndex) + startTag + '\\n' + html + '    </div>\\n  </div>\\n' + content.slice(endIndex);
    fs.writeFileSync(file, newContent);
    console.log('Successfully wrote to page.tsx');
  } else {
    console.log('Could not find end of section.');
  }
} else {
  console.log('Could not find start index.');
}
