
import React from 'react';
import { LocationsGrid } from '@/components/operations/LocationsGrid';
import { locations } from '@/data/locations';

export default function WholesalePage() {
  const subsidiaryLocations = locations.filter(loc => loc.subsidiaryId === 'wholesale');
  return (
    <div className="wholesale-page">
      <style dangerouslySetInnerHTML={{
        __html: `
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  
  html { scroll-behavior: smooth; }
  body { font-family: var(--font-body); background: var(--bg-main); color: var(--text-main); overflow-x: hidden; }

  nav {
    position: fixed; top: 0; left: 0; right: 0; height: 80px;
    background: rgba(255,255,255,0.95); backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(0,0,0,0.06);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 60px; z-index: 1000;
  }
  .nav-back {
    display: flex; align-items: center; gap: 10px;
    font-family: var(--font-condensed); font-size: 12px; font-weight: 600;
    letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-muted);
    text-decoration: none; transition: color 0.2s;
  }
  .nav-back:hover { color: var(--text-main); }
  .nav-logo {
    display: flex; align-items: center; gap: 12px; text-decoration: none;
    font-family: var(--font-condensed); font-size: 17px; font-weight: 700;
    letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-main);
  }
  .nav-logo img { height: 40px; }
  .nav-cta {
    font-family: var(--font-condensed); font-size: 12px; font-weight: 600;
    letter-spacing: 0.15em; text-transform: uppercase; color: var(--white);
    background: var(--green); padding: 10px 24px; text-decoration: none;
  }

  /* HERO */
  .sub-hero {
    padding-top: 80px; min-height: 75vh; position: relative;
    display: flex; align-items: flex-end; overflow: hidden;
  }
  .sub-hero-bg {
    position: absolute; inset: 0;
    overflow: hidden;
  }
  .sub-hero-video {
    width: 100%; height: 100%; object-fit: cover;
    opacity: 1;
  }
  .sub-hero-content {
    position: relative; z-index: 2; padding: 80px 60px;
    max-width: 1300px; margin: 0 auto; width: 100%;
  }
  .sub-breadcrumb {
    display: flex; align-items: center; gap: 10px;
    font-family: var(--font-condensed); font-size: 11px; font-weight: 600;
    letter-spacing: 0.2em; text-transform: uppercase; color: var(--white);
    margin-bottom: 24px; text-shadow: 0 2px 8px rgba(0,0,0,0.8);
  }
  .sub-breadcrumb a { color: var(--white); text-decoration: none; text-shadow: 0 2px 8px rgba(0,0,0,0.8); }
  .sub-hero-title {
    font-family: var(--font-display); font-size: clamp(48px, 6vw, 88px);
    font-weight: 800; line-height: 1.0; color: var(--white); max-width: 800px;
    text-shadow: 0 4px 20px rgba(0,0,0,0.8);
    text-transform: uppercase;
  }
  .sub-hero-title em { font-style: italic; color: var(--silver-light); }
  .sub-hero-desc {
    font-size: 17px; font-weight: 400; line-height: 1.85;
    color: #FFFFFF; max-width: 580px; margin-top: 24px;
    text-shadow: 0 2px 12px rgba(0,0,0,0.85);
  }

  /* PRODUCTS */
  .products-section { padding: 120px 60px; background: var(--bg-card); }
  .products-inner { max-width: 1300px; margin: 0 auto; }
  .section-tag {
    font-family: var(--font-condensed); font-size: 11px; font-weight: 600;
    letter-spacing: 0.3em; text-transform: uppercase; color: var(--text-muted);
    display: flex; align-items: center; gap: 12px; margin-bottom: 20px;
  }
  .section-tag::before { content:''; display:block; width:30px; height:1px; background: var(--text-muted); }
  .section-title {
    font-family: var(--font-display); font-size: clamp(36px, 4vw, 56px);
    font-weight: 800; line-height: 1.1; color: var(--text-main); margin-bottom: 60px;
    text-transform: uppercase;
  }
  .section-title em { font-style: italic; color: var(--text-muted); }
  .products-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .product-card {
    background: var(--bg-main); padding: 44px 32px 36px;
    position: relative; overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm, 4px);
    display: flex; flex-direction: column;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .product-card:hover {
    background: var(--bg-muted);
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.25);
    border-color: rgba(76, 175, 80, 0.4);
  }
  .product-card::before {
    content:''; position:absolute; top:0; left:0; right:0; height:3px;
    background: var(--green-bright, #4CAF50); transform: scaleX(0); transform-origin: left;
    transition: transform 0.4s;
  }
  .product-card:hover::before { transform: scaleX(1); }
  .product-icon { font-size: 36px; margin-bottom: 20px; display: block; color: var(--green-bright, #4CAF50); }
  .product-name {
    font-family: var(--font-condensed); font-size: 20px; font-weight: 700;
    letter-spacing: 0.05em; text-transform: uppercase; color: var(--text-main); margin-bottom: 8px;
  }
  .product-volume {
    font-family: var(--font-display); font-size: 28px; font-weight: 700;
    color: var(--text-main); margin-bottom: 6px; line-height: 1;
  }
  .product-volume-note { font-size: 12px; color: var(--green-light, #81C784); margin-bottom: 16px; font-weight: 500; }
  .product-desc { font-size: 13px; line-height: 1.7; color: var(--text-muted); font-weight: 300; flex-grow: 1; }
  /* brand tags */
  .product-brands { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 20px; }
  .brand-tag {
    font-family: var(--font-condensed); font-size: 10px; font-weight: 600;
    letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--text-muted); border: 1px solid var(--border-color);
    background: rgba(255,255,255,0.03);
    padding: 4px 10px; border-radius: 2px;
  }

  /* LOGISTICS */
  .logistics-section { padding: 120px 60px; background: var(--green); overflow: hidden; position: relative; }
  .logistics-inner { max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
  .logistics-visual {
    aspect-ratio: 4/3; background: rgba(0,0,0,0.25);
    border: 1px solid rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center;
    border-radius: 4px; overflow: hidden; position: relative;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  }
  .logistics-video {
    width: 100%; height: 100%; object-fit: cover;
  }
  .logistics-content .section-tag { color: rgba(255,255,255,0.7); }
  .logistics-content .section-tag::before { background: rgba(255,255,255,0.4); }
  .logistics-content .section-title { color: var(--white); }
  .logistics-list { margin-top: 32px; display: flex; flex-direction: column; gap: 0; border: 1px solid rgba(255,255,255,0.12); border-radius: 4px; overflow: hidden; }
  .logistics-item {
    display: flex; align-items: flex-start; gap: 20px; padding: 20px 24px;
    border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.15);
  }
  .logistics-item:last-child { border-bottom: none; }
  .logistics-item-icon { font-size: 20px; flex-shrink: 0; color: var(--silver-light, #81C784); }
  .logistics-item-title { font-family: var(--font-condensed); font-size: 14px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--white); margin-bottom: 4px; }
  .logistics-item-desc { font-size: 13px; color: rgba(255,255,255,0.7); font-weight: 300; line-height: 1.5; }

  /* PRINCIPALS */
  .principals-section { padding: 120px 60px; background: var(--bg-card); border-top: 1px solid var(--border-color); }
  .principals-inner { max-width: 1300px; margin: 0 auto; }
  .principals-section .section-tag { color: var(--green-light, #4CAF50); }
  .principals-section .section-tag::before { background: var(--green-light, #4CAF50); }
  .principals-section .section-title { color: var(--text-main); }
  .principals-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 16px; margin-top: 60px;
  }
  .principal-item {
    background: var(--bg-main); padding: 36px 24px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm, 4px);
    display: flex; align-items: center; justify-content: center;
    flex-direction: column; gap: 14px; transition: all 0.3s ease;
  }
  .principal-item:hover {
    background: var(--bg-muted);
    border-color: rgba(76, 175, 80, 0.4);
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(0,0,0,0.2);
  }
  .principal-logo-box {
    width: 100%; height: 64px;
    display: flex; align-items: center; justify-content: center;
    padding: 6px;
  }
  .principal-logo-box img {
    max-width: 140px; max-height: 52px; width: auto; height: auto; object-fit: contain;
    filter: brightness(0.95);
    transition: transform 0.2s ease;
  }
  .principal-item:hover .principal-logo-box img {
    transform: scale(1.05);
  }
  .principal-name {
    font-family: var(--font-condensed); font-size: 14px; font-weight: 700;
    letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-main); text-align: center;
  }
  .principal-category {
    font-size: 11px; color: var(--text-muted); text-align: center; font-weight: 400;
  }

  /* CTA BAND */
  .cta-band { padding: 100px 60px; background: var(--bg-card); border-top: 1px solid var(--border-color); }
  .cta-band-inner {
    max-width: 1300px; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between;
    gap: 40px; flex-wrap: wrap;
  }
  .cta-band h2 { font-family: var(--font-display); font-size: clamp(32px, 4vw, 56px); font-weight: 800; color: var(--text-main); text-transform: uppercase; }
  .cta-band h2 em { font-style: italic; color: var(--text-muted); }
  .btn-primary {
    font-family: var(--font-condensed); font-size: 13px; font-weight: 600;
    letter-spacing: 0.15em; text-transform: uppercase; color: var(--white);
    background: var(--green); padding: 18px 48px; text-decoration: none;
    display: inline-block; white-space: nowrap; transition: background 0.2s;
  }
  .btn-primary:hover { background: var(--green-light, #4CAF50); }
  .btn-outline {
    font-family: var(--font-condensed); font-size: 13px; font-weight: 600;
    letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-main);
    border: 1px solid var(--border-color); padding: 18px 48px;
    text-decoration: none; display: inline-block; white-space: nowrap;
    transition: border-color 0.2s, background 0.2s;
  }
  .btn-outline:hover { border-color: var(--text-main); background: rgba(255,255,255,0.06); }
  .btn-locations {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: var(--font-condensed); font-size: 12px; font-weight: 600;
    letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-main);
    background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border-color);
    padding: 12px 28px; border-radius: 4px; text-decoration: none;
    transition: all 0.25s ease;
  }
  .btn-locations:hover {
    background: rgba(76, 175, 80, 0.12);
    border-color: var(--green-bright, #4CAF50);
    color: var(--green-bright, #4CAF50);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  }

  @media (max-width: 900px) {
    nav, .sub-hero-content, .products-section, .logistics-section,
    .principals-section, .cta-band { padding-left: 24px; padding-right: 24px; }
    .products-grid { grid-template-columns: 1fr; }
    .logistics-inner { grid-template-columns: 1fr; }
    .principals-grid { grid-template-columns: 1fr 1fr; }
    .cta-band-inner { flex-direction: column; align-items: flex-start; }
  }` }} />
      <div dangerouslySetInnerHTML={{
        __html: `

<!-- HERO -->
<section class="sub-hero">
  <div class="sub-hero-bg">
    <video autoplay muted loop playsinline class="sub-hero-video">
      <source src="/media/wholesale/hero-video.mp4" type="video/mp4">
    </video>
  </div>
  <div class="sub-hero-content">
    <div class="sub-breadcrumb">
      <a href="/">Asia Group</a> &nbsp;/&nbsp; <a href="/businesses">Businesses</a> &nbsp;/&nbsp; Wholesale
    </div>
    
    <h1 class="sub-hero-title">Africa's #1<br>
      Wholesale &amp;<br>Distribution Engine</h1>
    <p class="sub-hero-desc">
      The largest detergent distributor on the African continent. Moving millions of tonnes of essential goods every year across Nigeria and beyond — powered by an unmatched logistics network and 36 years of trusted relationships.
    </p>
  </div>
</section>

<!-- PRODUCTS -->
<section class="products-section">
  <div class="products-inner">
    
    <h2 class="section-title">Everything a Nation<br>Needs to Thrive</h2>
    <div class="products-grid">

      <div class="product-card">
        <span class="product-icon"><i class="ri-flask-line"></i></span>
        <div class="product-name">Detergents &amp; Soaps</div>
        <div class="product-volume">100,000<span style="font-size:18px;"> T/yr</span></div>
        <div class="product-volume-note">Africa's highest distribution volume</div>
        <p class="product-desc">OMO, Ariel, Sunlight, and full Aspira Nigeria product portfolio. Distributed wholesale to major stockists, retailers, and cross-border buyers.</p>
        <div class="product-brands">
          <span class="brand-tag">PZ Cussons</span>
          <span class="brand-tag">Aspira (Viva)</span>
          <span class="brand-tag">Unilever</span>
          <span class="brand-tag">Procter &amp; Gamble</span>
        </div>
      </div>

      <div class="product-card">
        <span class="product-icon"><i class="ri-cake-3-line"></i></span>
        <div class="product-name">Sugar</div>
        <div class="product-volume">85,000<span style="font-size:18px;"> T/yr</span></div>
        <div class="product-volume-note">Bulk industrial &amp; retail supply</div>
        <p class="product-desc">Bulk refined sugar and granulated bags distributed to food manufacturers, industrial bakeries, retail distributors, and regional markets across the Sahel corridor.</p>
        <div class="product-brands">
          <span class="brand-tag">Dangote Sugar</span>
          <span class="brand-tag">BUA Sugar</span>
          <span class="brand-tag">Golden Penny Sugar</span>
        </div>
      </div>

      <div class="product-card">
        <span class="product-icon"><i class="ri-plant-line"></i></span>
        <div class="product-name">Rice</div>
        <div class="product-volume">65,000<span style="font-size:18px;"> T/yr</span></div>
        <div class="product-volume-note">Direct mill-to-market distribution</div>
        <p class="product-desc">Premium parboiled and local long-grain rice brands distributed at scale across Northern Nigeria, Cameroon, Chad, and Niger.</p>
        <div class="product-brands">
          <span class="brand-tag">Olam Agri (Mama's Pride)</span>
          <span class="brand-tag">Dangote Rice</span>
          <span class="brand-tag">WACOT (Big Bull)</span>
          <span class="brand-tag">BUA Rice</span>
        </div>
      </div>

      <div class="product-card">
        <span class="product-icon"><i class="ri-blaze-line"></i></span>
        <div class="product-name">Seasoning &amp; Condiments</div>
        <div class="product-volume">40,000<span style="font-size:18px;"> T/yr</span></div>
        <div class="product-volume-note">High-frequency culinary distribution</div>
        <p class="product-desc">Bouillon cubes, table salt, tomato pastes, and culinary spices from leading food manufacturers supplied wholesale to all commercial centres.</p>
        <div class="product-brands">
          <span class="brand-tag">Nestlé (Maggi)</span>
          <span class="brand-tag">TGI Group (Terra)</span>
          <span class="brand-tag">GBfoods (Gino)</span>
          <span class="brand-tag">Promasidor (Onga)</span>
          <span class="brand-tag">Unilever (Royco)</span>
        </div>
      </div>

      <div class="product-card">
        <span class="product-icon"><i class="ri-cup-line"></i></span>
        <div class="product-name">Pommades &amp; Body Care</div>
        <div class="product-volume">30,000<span style="font-size:18px;"> T/yr</span></div>
        <div class="product-volume-note">Northern regional market leader</div>
        <p class="product-desc">Petroleum jelly, hair creams, skin balms, and personal care wholesale. Deep market penetration across Northern Nigeria's high-demand consumer hubs.</p>
        <div class="product-brands">
          <span class="brand-tag">PZ Cussons (Robb)</span>
          <span class="brand-tag">EUROMEGA</span>
          <span class="brand-tag">Unilever (Vaseline)</span>
        </div>
      </div>

      <div class="product-card">
        <span class="product-icon"><i class="ri-shopping-basket-line"></i></span>
        <div class="product-name">Flour &amp; Grains</div>
        <div class="product-volume">95,000<span style="font-size:18px;"> T/yr</span></div>
        <div class="product-volume-note">Bakeries &amp; commercial mill supply</div>
        <p class="product-desc">Premium wheat flour, semolina, pasta, and whole grains distributed to commercial bakeries, food processors, and wholesale merchants across the North.</p>
        <div class="product-brands">
          <span class="brand-tag">Dangote Flour</span>
          <span class="brand-tag">BUA Foods</span>
          <span class="brand-tag">Flour Mills of Nigeria</span>
          <span class="brand-tag">Olam Agri (Crown Flour)</span>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- LOGISTICS -->
<section class="logistics-section">
  <div class="logistics-inner">
    <div class="logistics-visual">
      <video autoplay muted loop playsinline class="logistics-video">
        <source src="/media/wholesale/2nd-Media.mp4" type="video/mp4">
      </video>
    </div>
    <div class="logistics-content">
      
      <h2 class="section-title" style="color: var(--white);">Built to Move<br>at Scale</h2>
      <p style="font-size:16px; font-weight:300; line-height:1.8; color:rgba(255,255,255,0.75); margin-top:20px; max-width:480px;">
        Decades of logistics experience, a dedicated heavy fleet, and deep trade-route knowledge make Asia Group the distribution partner of choice across West and Central Africa.
      </p>
      <div class="logistics-list">
        <div class="logistics-item">
          <div class="logistics-item-icon"><i class="ri-truck-line"></i></div>
          <div>
            <div class="logistics-item-title">Dedicated Truck Fleet</div>
            <div class="logistics-item-desc">Owned and contracted long-haul fleet covering primary distribution routes, inter-state corridors, and cross-border transport.</div>
          </div>
        </div>
        <div class="logistics-item">
          <div class="logistics-item-icon"><i class="ri-map-pin-line"></i></div>
          <div>
            <div class="logistics-item-title">Cross-Border Trade Corridors</div>
            <div class="logistics-item-desc">Established trade routes connecting Nigeria into Cameroon, Chad, and Niger with established customs clearance and freight security.</div>
          </div>
        </div>
        <div class="logistics-item">
          <div class="logistics-item-icon"><i class="ri-archive-line"></i></div>
          <div>
            <div class="logistics-item-title">Last-Mile Distribution</div>
            <div class="logistics-item-desc">Extensive network of sub-distributors, wholesale stockists, and retail agents ensuring product availability in all key markets.</div>
          </div>
        </div>
        <div class="logistics-item">
          <div class="logistics-item-icon"><i class="ri-timer-line"></i></div>
          <div>
            <div class="logistics-item-title">High-Throughput Handling</div>
            <div class="logistics-item-desc">High-speed loading bays and experienced handling teams managing continuous dispatch of hundreds of tonnes daily without delays.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PRINCIPALS (FMCG DIVISION PARTNERS) -->
<section class="principals-section">
  <div class="principals-inner">
    <h2 class="section-title">Trusted by the<br>World's Best Brands</h2>
    <div class="principals-grid">

      <div class="principal-item">
        <div class="principal-logo-box">
          <img src="/media/logos/pzcussons-real.svg" alt="PZ Cussons" />
        </div>
        <div class="principal-name">PZ Cussons</div>
        <div class="principal-category">Detergents &amp; Personal Care</div>
      </div>

      <div class="principal-item">
        <div class="principal-logo-box">
          <img src="/media/logos/aspira-real.svg" alt="Aspira Nigeria" />
        </div>
        <div class="principal-name">Aspira Nigeria</div>
        <div class="principal-category">Detergents &amp; Soaps</div>
      </div>

      <div class="principal-item">
        <div class="principal-logo-box">
          <img src="/media/logos/nestle-real.svg" alt="Nestlé Nigeria" />
        </div>
        <div class="principal-name">Nestlé Nigeria</div>
        <div class="principal-category">Food, Seasoning &amp; Nutrition</div>
      </div>

      <div class="principal-item">
        <div class="principal-logo-box">
          <img src="/media/logos/dangote-real.png" alt="Dangote Group" />
        </div>
        <div class="principal-name">Dangote Group</div>
        <div class="principal-category">Sugar, Flour &amp; Salt</div>
      </div>

      <div class="principal-item">
        <div class="principal-logo-box">
          <img src="/media/logos/bua-real.webp" alt="BUA Foods" />
        </div>
        <div class="principal-name">BUA Foods</div>
        <div class="principal-category">Sugar, Flour &amp; Foods</div>
      </div>

      <div class="principal-item">
        <div class="principal-logo-box">
          <img src="/media/logos/olam-real.svg" alt="Olam Agri" />
        </div>
        <div class="principal-name">Olam Agri</div>
        <div class="principal-category">Rice, Grains &amp; Commodities</div>
      </div>

      <div class="principal-item">
        <div class="principal-logo-box">
          <img src="/media/logos/cadbury-real.svg" alt="Cadbury Nigeria" />
        </div>
        <div class="principal-name">Cadbury Nigeria</div>
        <div class="principal-category">Food &amp; Confectionery</div>
      </div>

      <div class="principal-item">
        <div class="principal-logo-box">
          <img src="/media/logos/euromega-real.png" alt="EUROMEGA" />
        </div>
        <div class="principal-name">EUROMEGA</div>
        <div class="principal-category">Pommades &amp; Body Care</div>
      </div>

    </div>
  </div>
</section>

<!-- ══ OUR LOCATIONS ══ -->
` }} />
      <section style={{ padding: 'clamp(60px, 10vw, 100px) clamp(24px, 5vw, 60px)', background: 'var(--bg-main)', borderTop: '1px solid var(--border-color)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div dangerouslySetInnerHTML={{
            __html: `
    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 400px), 1fr));gap:40px;align-items:end;margin-bottom:48px;">
      <h2 style="font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:800;color:var(--text-main);line-height:1.1;text-transform:uppercase;">Every Location,<br>Ready to Serve You</h2>
      <p style="font-size:15px;font-weight:300;line-height:1.85;color:var(--text-muted);">Asia Group's wholesale and distribution facilities span key commercial hubs across Northern Nigeria — each with dedicated loading bays, trained staff, and direct stock access to all product categories.</p>
    </div>
    ` }} />
          <LocationsGrid locations={subsidiaryLocations} hideFilter={true} />
          <div dangerouslySetInnerHTML={{
            __html: `
    <div style="margin-top:24px;display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:16px;">
      <a href="/operations" class="btn-locations">View All 19 Locations →</a>
    </div>
    ` }} />
        </div>
      </section>
      <div dangerouslySetInnerHTML={{
        __html: `
<!-- CTA -->
<section class="cta-band">
  <div class="cta-band-inner">
    <h2>Ready to distribute<br>across Africa?</h2>
    <div style="display:flex; gap:16px; flex-wrap:wrap;">
      <a href="/#partner-cta" class="btn-primary">Enquire as a Buyer →</a>
      <a href="/#partner-cta" class="btn-outline">Become a Principal Partner</a>
    </div>
  </div>
</section>
` }} />
    </div>
  );
}
