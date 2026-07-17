const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

// The multi_replace_file_content tool mangled the CSS between .subsidiary-card::before and .subsidiary-card--promo.
// I need to use a regex to replace that whole mangled section with the correct CSS.

const regex = /\.subsidiary-card::before \{[\s\S]*?border-color: var\(--text-muted\);\s*\}/;

const correctedCSS = `.subsidiary-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--green-bright);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s;
}

.subsidiary-card:hover::before {
  transform: scaleX(1);
}

.subsidiary-card__num {
  font-family: var(--font-condensed);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 24px;
  display: block;
}

.subsidiary-card__icon {
  font-size: 32px;
  margin-bottom: 20px;
  display: block;
  color: #FFFFFF;
}

.subsidiary-card__name {
  font-family: var(--font-condensed);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-bottom: 6px;
}

.subsidiary-card__sector {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.subsidiary-card__desc {
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
}

.subsidiary-card__arrow {
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}

.subsidiary-card:hover .subsidiary-card__arrow {
  background: var(--silver-light);
  color: var(--dark);
  border-color: var(--text-muted);
}`;

css = css.replace(regex, correctedCSS);

fs.writeFileSync('src/app/globals.css', css);
console.log('Repaired subsidiary card CSS');
