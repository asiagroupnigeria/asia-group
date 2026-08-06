const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, 'src', 'app', '[locale]', 'businesses');
const dirs = fs.readdirSync(root).filter(d => fs.statSync(path.join(root, d)).isDirectory() && !d.startsWith('['));

const emojiMap = {
  // pharmaceuticals
  '✅': '<i class="ri-checkbox-circle-line"></i>',
  '🚚': '<i class="ri-truck-line"></i>',
  '🤝': '<i class="ri-hand-coin-line"></i>',
  '💊': '<i class="ri-capsule-line"></i>',
  '🩺': '<i class="ri-stethoscope-line"></i>',
  '🩹': '<i class="ri-first-aid-kit-line"></i>',
  '🌡️': '<i class="ri-thermometer-line"></i>',
  '🧴': '<i class="ri-flask-line"></i>',
  '🏥': '<i class="ri-hospital-line"></i>',
  '🏪': '<i class="ri-store-2-line"></i>',
  '🏨': '<i class="ri-hotel-line"></i>',
  '🏛️': '<i class="ri-government-line"></i>',
  '➕': '<i class="ri-add-line"></i>',
  // automobiles
  '🏗️': '<i class="ri-building-line"></i>',
  '🚛': '<i class="ri-truck-line"></i>',
  '⛽': '<i class="ri-gas-station-line"></i>',
  '🏭': '<i class="ri-building-3-line"></i>',
  '🌾': '<i class="ri-plant-line"></i>',
  // beverages
  '💧': '<i class="ri-drop-line"></i>',
  '🍎': '<i class="ri-apple-line"></i>',
  '🍹': '<i class="ri-goblet-line"></i>',
  '🥤': '<i class="ri-cup-line"></i>',
  '🌍': '<i class="ri-earth-line"></i>',
  '⚡': '<i class="ri-flashlight-line"></i>',
  '🏅': '<i class="ri-medal-line"></i>',
  '🏫': '<i class="ri-school-line"></i>',
  '🍽️': '<i class="ri-restaurant-line"></i>',
  // cosmetics
  '✨': '<i class="ri-sparkling-line"></i>',
  '🌿': '<i class="ri-leaf-line"></i>',
  '🛡️': '<i class="ri-shield-line"></i>',
  '💄': '<i class="ri-magic-line"></i>',
  '💇‍♀️': '<i class="ri-scissors-line"></i>',
  '🛁': '<i class="ri-showers-line"></i>',
  '👶': '<i class="ri-parent-line"></i>',
  '💅': '<i class="ri-magic-line"></i>',
  '🛍️': '<i class="ri-shopping-bag-line"></i>',
  '✂️': '<i class="ri-scissors-2-line"></i>',
  // phones
  '📱': '<i class="ri-smartphone-line"></i>',
  '🔋': '<i class="ri-battery-line"></i>',
  '🎧': '<i class="ri-headphone-line"></i>',
  '💻': '<i class="ri-macbook-line"></i>',
  '🔌': '<i class="ri-plug-line"></i>',
  '🎮': '<i class="ri-gamepad-line"></i>',
  '💼': '<i class="ri-briefcase-line"></i>',
  // wholesale
  '📦': '<i class="ri-archive-line"></i>',
  '🔄': '<i class="ri-loop-right-line"></i>',
  '📈': '<i class="ri-line-chart-line"></i>',
  '🛒': '<i class="ri-shopping-cart-line"></i>',
  '🍚': '<i class="ri-bowl-line"></i>',
  '🍅': '<i class="ri-restaurant-2-line"></i>',
  '🧼': '<i class="ri-drop-line"></i>',
  '🏠': '<i class="ri-home-line"></i>',
  '👨‍👩‍👧‍👦': '<i class="ri-group-line"></i>',
  '🏢': '<i class="ri-building-line"></i>',
  '🥫': '<i class="ri-takeaway-line"></i>',
  // random emojis that might appear
  '🔧': '<i class="ri-tools-line"></i>',
  '🚜': '<i class="ri-tractor-line"></i>'
};

for (const dir of dirs) {
  const pagePath = path.join(root, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;

  let content = fs.readFileSync(pagePath, 'utf8');

  // 1. Remove eyebrow, hero stats and breadcrumb
  content = content.replace(/<div class="breadcrumb">[\s\S]*?<\/div>/, '');
  content = content.replace(/<div class="sub-eyebrow">.*?<\/div>/, '');
  content = content.replace(/<div class="sub-hero-stats">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/, '</div>\n</section>');
  
  // Clean up CSS related to removed elements to ensure there's no leftover styles
  // (optional, but it keeps things clean)
  content = content.replace(/\.breadcrumb\s*{[^}]*}\s*/g, '');
  content = content.replace(/\.breadcrumb\s*a\s*{[^}]*}\s*/g, '');
  content = content.replace(/\.sub-eyebrow\s*{[^}]*}\s*/g, '');
  content = content.replace(/\.sub-eyebrow::before\s*{[^}]*}\s*/g, '');
  content = content.replace(/\.sub-hero-stats\s*{[^}]*}\s*/g, '');
  content = content.replace(/\.sub-stat\s*{[^}]*}\s*/g, '');
  content = content.replace(/\.sub-stat:last-child\s*{[^}]*}\s*/g, '');
  content = content.replace(/\.sub-stat-number\s*{[^}]*}\s*/g, '');
  content = content.replace(/\.sub-stat-label\s*{[^}]*}\s*/g, '');

  // 2. Replace emojis
  for (const [emoji, icon] of Object.entries(emojiMap)) {
    content = content.split(emoji).join(icon);
  }

  // 3. Put the video as the hero background of pharmacy subsidiary
  if (dir === 'pharmaceuticals') {
    const videoHtml = `
  <div class="sub-hero-bg">
    <video autoplay loop muted playsinline style="position:absolute; width:100%; height:100%; object-fit:cover; inset:0;">
      <source src="/media/asia-operation-cards/pharmacy.mp4" type="video/mp4" />
    </video>
  </div>`;
    content = content.replace(/<div class="sub-hero-bg"><\/div>/, videoHtml);
  }

  fs.writeFileSync(pagePath, content);
  console.log('Updated ' + dir);
}
