const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'src', 'app', '[locale]', 'businesses', 'pharmaceuticals', 'page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

const correctCategoriesSection = `<section class="categories-section">
  <div class="categories-inner">
    
    <h2 style="font-family:var(--font-display); font-size:clamp(32px,4vw,52px); font-weight:bold; color:var(--text-main); line-height:1.1;">
      A Complete Healthcare Portfolio
    </h2>
    
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
    </div>
  </div>
</section>`;

const correctReachSection = `<section class="reach-section">
  <div class="reach-inner">
    <div class="reach-content">
      
      <h2>Serving Healthcare<br>at Every Level</h2>
      <p>From major teaching hospitals to community health centres, from large pharmacy chains to independent dispensaries — Asia Pharmacy serves the full spectrum of Nigeria's healthcare system.</p>
      
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
      </div>
    </div>
    <div class="reach-visual">
      <img src="/media/asia-operation-cards/pharmacy-operations-2.jpg" alt="Distribution and Hospital Supply" style="width:100%; height:100%; object-fit:cover;" />
    </div>
  </div>
</section>`;

// Replace from <section class="categories-section"> to the closing </section> just before <section class="reach-section">
content = content.replace(/<section class="categories-section">[\s\S]*?<\/section>\s*<section class="reach-section">/, correctCategoriesSection + '\n\n<section class="reach-section">');

// Replace from <section class="reach-section"> to the closing </section> just before <!-- ══ OUR LOCATIONS ══ -->
content = content.replace(/<section class="reach-section">[\s\S]*?<\/section>\s*(?=<!-- ══ OUR LOCATIONS ══ -->)/, correctReachSection + '\n\n\n');

fs.writeFileSync(pagePath, content);
console.log('Fixed pharmacy page layout');
