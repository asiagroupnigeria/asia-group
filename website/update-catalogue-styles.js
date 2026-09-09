const fs = require('fs');
const filePath = 'C:/Users/SURFACE/Asia Group/asia-aspiar-catalogue/Asia Group Product Catalogue.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove all em dashes + space (either &mdash; or actual dashes)
content = content.replace(/&mdash;\s*/g, '');
content = content.replace(/—\s*/g, '');

// 2. Make the products card size be truncated at the end of product information rather than full page length
// Update CSS
content = content.replace(
    '.product-page-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;flex:1}',
    '.product-page-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;flex:1;align-content:start}'
);
content = content.replace(
    '.product-page-grid--single{display:grid;grid-template-columns:1fr;gap:24px;flex:1}',
    '.product-page-grid--single{display:grid;grid-template-columns:1fr;gap:24px;flex:1;align-content:start}'
);
content = content.replace(
    '.sku-card{background:#F5F4F0;border-radius:0;padding:20px;display:flex;flex-direction:column;gap:10px;height:100%}',
    '.sku-card{background:#F5F4F0;border-radius:0;padding:20px;display:flex;flex-direction:column;gap:10px;height:auto}'
);

// 3. Put Aspira logo and make logos container bigger in cover pages
// Page 1 Cover
const coverLogoOld = `<div style="display:flex;align-items:center;gap:14px">
    <img src="../catalogue-products-images/asia-group-logo.png" alt="Asia Group" style="width:64px;height:64px;border-radius:50%;object-fit:cover;background:#fff">
    <div style="font-family:var(--font-heading);font-size:17px;letter-spacing:0.04em">ASIA GROUP OF COMPANIES</div>
  </div>`;
const coverLogoNew = `<div style="display:flex;align-items:center;gap:24px">
    <img src="../catalogue-products-images/asia-group-logo.png" alt="Asia Group" style="width:110px;height:110px;border-radius:50%;object-fit:cover;background:#fff">
    <div style="font-size:32px;color:rgba(255,255,255,0.2)">&times;</div>
    <img src="../catalogue-products-images/aspira-logo.png" alt="Aspira" style="width:110px;height:110px;border-radius:50%;object-fit:contain;background:#fff;padding:8px">
    <div style="font-family:var(--font-heading);font-size:24px;letter-spacing:0.04em;margin-left:12px;color:var(--ag-off-white)">ASIA GROUP &amp; ASPIRA</div>
  </div>`;
content = content.replace(coverLogoOld, coverLogoNew);

// Back Cover
const backCoverOld = `    <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:20px">
      <div style="display:flex;align-items:center;gap:14px">
        <img src="../catalogue-products-images/asia-group-logo.png" alt="Asia Group" style="width:52px;height:52px;border-radius:50%;object-fit:cover;background:#fff">
        <div>
          <div class="h-display" style="font-size:26px;color:var(--ag-off-white)">ASIA GROUP</div>
          <div style="font-size:12px;color:var(--ag-light)">Major &amp; Largest Distributor of Aspira Products in Nigeria &amp; Africa</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:14px">
        <img src="../catalogue-products-images/aspira-logo.png" alt="Aspira" style="width:52px;height:52px;border-radius:50%;object-fit:contain;background:#fff;padding:4px">
        <div>
          <div class="h-display" style="font-size:26px;color:var(--ag-off-white)">ASPIRA</div>
          <div style="font-size:12px;color:var(--ag-light)">A Lee Group of Companies subsidiary &middot; Kano, Nigeria &middot; Est. 2009</div>
        </div>
      </div>
    </div>`;
const backCoverNew = `    <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:20px">
      <div style="display:flex;align-items:center;gap:20px">
        <img src="../catalogue-products-images/asia-group-logo.png" alt="Asia Group" style="width:84px;height:84px;border-radius:50%;object-fit:cover;background:#fff">
        <div>
          <div class="h-display" style="font-size:32px;color:var(--ag-off-white)">ASIA GROUP</div>
          <div style="font-size:14px;color:var(--ag-light)">Major &amp; Largest Distributor of Aspira Products in Nigeria &amp; Africa</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:20px">
        <img src="../catalogue-products-images/aspira-logo.png" alt="Aspira" style="width:84px;height:84px;border-radius:50%;object-fit:contain;background:#fff;padding:6px">
        <div>
          <div class="h-display" style="font-size:32px;color:var(--ag-off-white)">ASPIRA</div>
          <div style="font-size:14px;color:var(--ag-light)">A Lee Group of Companies subsidiary &middot; Kano, Nigeria &middot; Est. 2009</div>
        </div>
      </div>
    </div>`;
content = content.replace(backCoverOld, backCoverNew);

fs.writeFileSync(filePath, content);
console.log('Update Complete.');
