const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, 'src', 'app', '[locale]', 'businesses');
const dirs = fs.readdirSync(root).filter(d => fs.statSync(path.join(root, d)).isDirectory() && !d.startsWith('['));

const emojiMap = {
  '🍶': '<i class="ri-cup-line"></i>',
  '🪥': '<i class="ri-brush-line"></i>',
  '🧪': '<i class="ri-test-tube-line"></i>',
  '📟': '<i class="ri-device-line"></i>',
  '🏬': '<i class="ri-store-3-line"></i>',
  '🍬': '<i class="ri-cake-3-line"></i>',
  '🧂': '<i class="ri-blaze-line"></i>',
  '🌽': '<i class="ri-plant-line"></i>',
  '🇳🇬': '<i class="ri-flag-line"></i>', // handle the flag sequence
  '🇳': '', // clean up partials
  '🇬': '',
  '🗺': '<i class="ri-map-pin-line"></i>',
  '⏱': '<i class="ri-timer-line"></i>',
  '🗺️': '<i class="ri-map-pin-line"></i>', // with variation selector
  '⏱️': '<i class="ri-timer-line"></i>'
};

for (const dir of dirs) {
  const pagePath = path.join(root, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;

  let content = fs.readFileSync(pagePath, 'utf8');

  // Replace remaining emojis
  for (const [emoji, icon] of Object.entries(emojiMap)) {
    content = content.split(emoji).join(icon);
  }

  // Handle variation selectors left over (if any generic one is there)
  content = content.replace(/\uFE0F/g, '');

  fs.writeFileSync(pagePath, content);
  console.log('Updated ' + dir);
}
