const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

const startMarker = `  .lp-card-img {
    aspect-ratio: 4/3; transition: transform 0.5s ease; position: relative;
    /* MEDIA: Exterior photo of each division's flagship location */
    background: var(--dark-3); display: flex; align-items: center; justify-content: center;
  }`;

const endMarker = `}

/* Core Business Card Promo */`;

const replacement = `  .lp-card-img {
    aspect-ratio: 4/3; transition: transform 0.5s ease; position: relative;
    /* MEDIA: Exterior photo of each division's flagship location */
    background: var(--dark-3); display: flex; align-items: center; justify-content: center;
  }
  .lp-card-img-placeholder { font-family: var(--font-condensed); font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.12); text-align: center; padding: 12px; }
  .lp-card-div-bar { position: absolute; top: 0; left: 0; right: 0; height: 3px; }
  .lp-card-body { padding: 22px 22px 26px; }
  .lp-card-division { font-family: var(--font-condensed); font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 6px; }
  .lp-card-name { font-family: var(--font-condensed); font-size: 16px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: var(--white); margin-bottom: 4px; }
  .lp-card-address { font-size: 12px; color: rgba(255,255,255,0.4); font-weight: 300; margin-bottom: 14px; line-height: 1.5; }
  .lp-card-stat { font-family: var(--font-condensed); font-size: 14px; font-weight: 700; color: var(--gold-light); }
  .lp-card-stat-label { font-size: 10px; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 2px; }
  .lp-cta-row { display: flex; align-items: center; justify-content: space-between; margin-top: 40px; flex-wrap: wrap; gap: 16px; }
  .lp-total { display: flex; align-items: baseline; gap: 10px; }
  .lp-total-num { font-family: var(--font-display); font-size: 52px; font-weight: 600; color: var(--white); line-height: 1; }
  .lp-total-text { font-family: var(--font-condensed); font-size: 13px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }

/* Core Business Card Promo */`;

const startIdx = css.indexOf(startMarker);
const endIdx = css.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
    const before = css.substring(0, startIdx);
    const after = css.substring(endIdx + endMarker.length);
    fs.writeFileSync('src/app/globals.css', before + replacement + after);
    console.log('Successfully fixed globals.css!');
} else {
    console.log('Markers not found!');
    console.log('Start found?', startIdx !== -1);
    console.log('End found?', endIdx !== -1);
}
