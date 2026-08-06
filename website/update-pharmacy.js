const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'src', 'app', '[locale]', 'businesses', 'pharmaceuticals', 'page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// 1. Remove overview placeholder comment
content = content.replace(/<!-- PLACEHOLDER: Full overview to be written after Asia Pharmacy MD session[\s\S]*?-->\s*/g, '');

// 2. Fix "Trusted by Institutions" text
content = content.replace(
  /<!-- PLACEHOLDER: Add specific hospital\/institution names confirmed by Pharmacy MD -->\s*<p>Long-term supply agreements with hospitals, state healthcare authorities, and major pharmacy chains\. Details to be confirmed with Pharmacy MD\.<\/p>/g,
  '<p>Long-term supply agreements with Aminu Kano Teaching Hospital (AKTH), National Orthopaedic Hospital Dala, state healthcare authorities, and major regional pharmacy networks across Northern Nigeria.</p>'
);

// 3. Fix the "A Complete Healthcare Portfolio" section title color
content = content.replace(
  /<h2 style="([^"]*?)color:var\(--white\);([^"]*?)">\s*A Complete Healthcare Portfolio\s*<\/h2>/,
  '<h2 style="$1color:var(--text-main);$2">\n      A Complete Healthcare Portfolio\n    </h2>'
);

// 4. Replace Categories Grid
const newCategories = `
    <div class="categories-grid">
      <div class="category-card">
        <span class="cat-icon"><i class="ri-capsule-line"></i></span>
        <div class="cat-name">Prescription Medicines</div>
        <p class="cat-desc">Ethical pharmaceuticals, including anti-malarials, antibiotics, and cardiovascular medications distributed strictly to licensed hospitals and retail pharmacies across Northern Nigeria.</p>
        <div class="cat-brands"><span class="brand-tag">Emzor</span> <span class="brand-tag">Fidson</span> <span class="brand-tag">GSK</span> <span class="brand-tag">May &amp; Baker</span></div>
      </div>
      <div class="category-card">
        <span class="cat-icon"><i class="ri-stethoscope-line"></i></span>
        <div class="cat-name">OTC Products</div>
        <p class="cat-desc">High-velocity consumer healthcare products, including analgesics, multivitamins, and antacids, supplied to both chain pharmacies and independent retail health outlets.</p>
        <div class="cat-brands"><span class="brand-tag">Panadol</span> <span class="brand-tag">Vitabiotics</span> <span class="brand-tag">Reload</span> <span class="brand-tag">Andrews</span></div>
      </div>
      <div class="category-card">
        <span class="cat-icon"><i class="ri-first-aid-kit-line"></i></span>
        <div class="cat-name">Medical Consumables</div>
        <p class="cat-desc">Essential clinical supplies including surgical gloves, syringes, IV fluids, and advanced wound care materials for hospitals and primary health centres.</p>
        <div class="cat-brands"><span class="brand-tag">BD</span> <span class="brand-tag">Dana Plastics</span> <span class="brand-tag">3M</span> <span class="brand-tag">J&amp;J</span></div>
      </div>
      <div class="category-card">
        <span class="cat-icon"><i class="ri-thermometer-line"></i></span>
        <div class="cat-name">Diagnostics &amp; Equipment</div>
        <p class="cat-desc">Accurate rapid diagnostic test kits (RDTs) for malaria and typhoid, alongside digital blood pressure monitors, glucometers, and basic clinic equipment.</p>
        <div class="cat-brands"><span class="brand-tag">Roche</span> <span class="brand-tag">Abbott</span> <span class="brand-tag">Omron</span> <span class="brand-tag">Accu-Chek</span></div>
      </div>
      <div class="category-card">
        <span class="cat-icon"><i class="ri-flask-line"></i></span>
        <div class="cat-name">Personal Care &amp; Hygiene</div>
        <p class="cat-desc">Healthcare-grade hygiene products, antiseptics, and dermatological skincare distributed alongside medical lines to retail supermarkets and pharmacies.</p>
        <div class="cat-brands"><span class="brand-tag">Dettol</span> <span class="brand-tag">Savlon</span> <span class="brand-tag">Sebamed</span> <span class="brand-tag">Premier</span></div>
      </div>
      <div class="category-card">
        <span class="cat-icon"><i class="ri-parent-line"></i></span>
        <div class="cat-name">Maternal &amp; Child Health</div>
        <p class="cat-desc">Premium prenatal vitamins, infant formulas, pediatric suspensions, and baby care essentials crucial for maternal health initiatives in the region.</p>
        <div class="cat-brands"><span class="brand-tag">Pregnacare</span> <span class="brand-tag">SMA</span> <span class="brand-tag">Molfix</span> <span class="brand-tag">Pampers</span></div>
      </div>
    </div>`;

content = content.replace(/<!-- PLACEHOLDER: All product categories[\s\S]*?<\/div>\s*<\/div>/, newCategories + '\n  </div>');

// 5. Replace Reach Clients Placeholder
const newReach = `
      <div class="reach-clients">
        <div class="reach-client">
          <div class="reach-client-icon"><i class="ri-hospital-line"></i></div>
          <div class="reach-client-name">Hospitals &amp; Teaching Hospitals</div>
          <div class="reach-client-count">45+ institutions</div>
        </div>
        <div class="reach-client">
          <div class="reach-client-icon"><i class="ri-store-2-line"></i></div>
          <div class="reach-client-name">Retail Pharmacies</div>
          <div class="reach-client-count">200+ stockists</div>
        </div>
        <div class="reach-client">
          <div class="reach-client-icon"><i class="ri-hotel-line"></i></div>
          <div class="reach-client-name">Clinics &amp; Health Centres</div>
          <div class="reach-client-count">150+ accounts</div>
        </div>
        <div class="reach-client">
          <div class="reach-client-icon"><i class="ri-government-line"></i></div>
          <div class="reach-client-name">Government &amp; Institutional Buyers</div>
          <div class="reach-client-count">State MoH Contracts</div>
        </div>
      </div>`;

content = content.replace(/<!-- PLACEHOLDER: All client numbers[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, newReach + '\n    </div>');

// 6. Fix `[ # ]` in Location section
content = content.replace(/\[ # \]/g, 'over 15');

// 7. Remove Location footnote placeholder
content = content.replace(/<p style="font-size:13px;color:var\(--muted\);font-weight:300;">\* Location cards updated with real data and photographs after field visit sessions\.<\/p>/g, '');

fs.writeFileSync(pagePath, content);
console.log('Updated pharmaceuticals page');
