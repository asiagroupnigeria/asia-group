const fs = require('fs');
const path = require('path');

const opsPagePath = path.join(__dirname, 'src', 'app', '[locale]', 'operations', 'page.tsx');
const pageTsxPath = path.join(__dirname, 'src', 'app', '[locale]', 'page.tsx');

const opsHtml = fs.readFileSync(opsPagePath, 'utf8');

// 1. Extract the 6 cards from operations/page.tsx
const startMarker = '<!-- LOCATION 01 -->';
const endMarker = '<!-- LOCATION 07 -->';
const startIndex = opsHtml.indexOf(startMarker);
const endIndex = opsHtml.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find locations 1 to 7 in operations/page.tsx');
  process.exit(1);
}

let cardsHtml = opsHtml.substring(startIndex, endIndex).trim();

const fullSection = `
      {/* ==================== 19 LOCATIONS PREVIEW ==================== */}
      <section id="locations-preview" style={{ padding: '120px 60px', background: 'var(--dark-2)' }}>
        <div className="lp-inner" style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div className="lp-header" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'end', marginBottom: '56px' }}>
            <div>
              <div className="section-tag" style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span style={{ display: 'block', width: '30px', height: '1px', background: 'var(--gold-light)' }}></span>
                19 Locations — Kano
              </div>
              <h2 className="section-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4.5vw, 64px)', fontWeight: 300, lineHeight: 1.1, color: 'var(--white)' }}>
                Every Warehouse.<br />Every Showroom.<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>All Operational.</em>
              </h2>
            </div>
            <div>
              <p className="section-body" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 300, lineHeight: 1.85 }}>
                No other distribution company in Northern Nigeria commands this density. Six subsidiaries, 19 dedicated locations — each with a named manager, a dedicated team, and direct stock access. This is what market dominance looks like on the ground.
              </p>
            </div>
          </div>

          <div className="locations-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: 'rgba(255,255,255,0.06)', marginBottom: '40px' }} dangerouslySetInnerHTML={{ __html: \`
\${cardsHtml}
          \` }}></div>

          <div className="lp-cta-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div className="lp-total" style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
              <div className="lp-total-num" style={{ fontFamily: 'var(--font-display)', fontSize: '52px', fontWeight: 600, color: 'var(--white)', lineHeight: 1 }}>19</div>
              <div className="lp-total-text" style={{ fontFamily: 'var(--font-condensed)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>Total Locations<br />Across Kano</div>
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/operations" className="btn btn-primary" style={{ fontFamily: 'var(--font-condensed)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--dark)', background: 'var(--gold-light)', padding: '16px 40px', textDecoration: 'none', display: 'inline-block' }}>Explore All 19 Locations →</Link>
            </div>
          </div>
        </div>
      </section>

`;

let pageTsxContent = fs.readFileSync(pageTsxPath, 'utf8');

// Find where to inject
const injectMarker = '{/* ==================== SUBSIDIARIES ==================== */}';
const injectIndex = pageTsxContent.indexOf(injectMarker);

if (injectIndex === -1) {
  console.error('Could not find injection point in page.tsx');
  process.exit(1);
}

pageTsxContent = pageTsxContent.substring(0, injectIndex) + fullSection + pageTsxContent.substring(injectIndex);

fs.writeFileSync(pageTsxPath, pageTsxContent);
console.log('Successfully safely injected locations preview section into page.tsx!');
