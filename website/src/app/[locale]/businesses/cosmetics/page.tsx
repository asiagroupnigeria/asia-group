
import React from 'react';
import { LocationsGrid } from '@/components/operations/LocationsGrid';
import { locations } from '@/data/locations';

export default function CosmeticsPage() {
  const subsidiaryLocations = locations.filter(loc => loc.subsidiaryId === 'cosmetics');

  return (
    <div className="cosmetics-page">
      <style dangerouslySetInnerHTML={{ __html: `
  *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
  
  html{scroll-behavior:smooth;}body{font-family:var(--font-body);background:var(--bg-main);color:var(--text-main);overflow-x:hidden;}
  nav{position:fixed;top:0;left:0;right:0;height:80px;background:rgba(255,255,255,0.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(0,0,0,0.06);display:flex;align-items:center;justify-content:space-between;padding:0 60px;z-index:1000;}
  .nav-back{display:flex;align-items:center;gap:10px;font-family:var(--font-condensed);font-size:12px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-muted);text-decoration:none;transition:color .2s;}.nav-back:hover{color:var(--text-main);}
  .nav-logo{display:flex;align-items:center;gap:12px;text-decoration:none;font-family:var(--font-condensed);font-size:17px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-main);}.nav-logo img{height:40px;}
  .nav-cta{font-family:var(--font-condensed);font-size:12px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--white);background:var(--green);padding:10px 24px;text-decoration:none;}
  .sub-hero{padding-top:80px;min-height:70vh;position:relative;display:flex;align-items:flex-end;}
  .sub-hero-bg{position:absolute;inset:0;
  /* MEDIA: Cosmetics hero — beauty products, personal care display, retail shelf
     File: ../media/subsidiaries/cosmetics-hero.jpg
     Recommended: Elegant product display, warm/gold lighting */
  background:linear-gradient(135deg,#1a0a2e 0%,#0A0A0A 60%);}
    .sub-hero-media{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
  .sub-hero-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,10,10,1) 0%,rgba(10,10,10,0.4) 60%,transparent 100%);}
  .sub-hero-content{position:relative;z-index:2;padding:80px 60px;max-width:1300px;margin:0 auto;width:100%;}
  h1{font-family:var(--font-display);font-size:clamp(48px,6vw,88px);font-weight:bold;line-height:1.0;color:var(--white);max-width:800px;}h1 em{font-style:italic;color:var(--text-muted);}
  .sub-hero-desc{font-size:17px;font-weight:300;line-height:1.85;color:rgba(255,255,255,0.6);max-width:580px;margin-top:24px;}
  .section-tag{font-family:var(--font-condensed);font-size:11px;font-weight:600;letter-spacing:0.3em;text-transform:uppercase;color:var(--text-muted);display:flex;align-items:center;gap:12px;margin-bottom:20px;}.section-tag::before{content:'';display:block;width:30px;height:1px;background:var(--text-muted);}
  section.pad{padding:120px 60px;}
  .inner{max-width:1300px;margin:0 auto;}
  h2{font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:bold;color:var(--text-main);line-height:1.1;margin-bottom:16px;}h2 em{font-style:italic;color:var(--text-muted);}
  /* Ensure good contrast on dark section backgrounds */
  .pad[style*="background:var(--dark)"], .pad[style*="background:var(--dark-2)"], section[style*="background:var(--dark)"] {
    color: var(--white);
  }
  .pad[style*="background:var(--dark)"] h2, .pad[style*="background:var(--dark-2)"] h2 { color: var(--white); }
  .pad[style*="background:var(--dark)"] .body-text, .pad[style*="background:var(--dark-2)"] .body-text { color: rgba(255,255,255,0.9); }
  .pad[style*="background:var(--dark)"] .card-name, .pad[style*="background:var(--dark)"] .card-desc, .pad[style*="background:var(--dark-2)"] .card-name, .pad[style*="background:var(--dark-2)"] .card-desc { color: rgba(255,255,255,0.95); }
  .pad[style*="background:var(--dark)"] .tag, .pad[style*="background:var(--dark-2)"] .tag { color: rgba(255,255,255,0.85); border-color: rgba(255,255,255,0.12); background: rgba(255,255,255,0.03); }
  .pad[style*="background:var(--dark)"] .cards-grid .card-name,
  .pad[style*="background:var(--dark)"] .cards-grid .card-desc,
  .pad[style*="background:var(--dark)"] .cards-grid .card-sub,
  .pad[style*="background:var(--dark)"] .cards-grid .tag,
  .pad[style*="background:var(--dark)"] .cards-grid .card i,
  .pad[style*="background:var(--dark-2)"] .cards-grid .card-name,
  .pad[style*="background:var(--dark-2)"] .cards-grid .card-desc,
  .pad[style*="background:var(--dark-2)"] .cards-grid .card-sub,
  .pad[style*="background:var(--dark-2)"] .cards-grid .tag,
  .pad[style*="background:var(--dark-2)"] .cards-grid .card i {
    color: var(--text-main);
  }
  /* Market section uses muted background (light); keep text dark for readability */
  .market-section h2 { color: var(--text-main); }
  .two-col{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;margin-top:60px;}
  .body-text{font-size:15px;font-weight:300;line-height:1.85;color:rgba(0,0,0,0.55);}
  .body-text p+p{margin-top:16px;}
  .media-box{aspect-ratio:4/3;background:var(--bg-muted);border:1px solid rgba(0,0,0,0.06);display:flex;align-items:center;justify-content:center;}
  .media-box p{font-family:var(--font-condensed);font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(0,0,0,0.15);text-align:center;padding:20px;}
  .media-box img{width:100%;height:100%;object-fit:cover;display:block;}
  .cards-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:rgba(0,0,0,0.04);margin-top:60px;}
  .card{background:var(--bg-card);padding:40px 32px;transition:background .3s;}.card:hover{background:var(--bg-muted);}
  .card-icon{font-size:32px;margin-bottom:18px;display:block;}
  .card-name{font-family:var(--font-condensed);font-size:17px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:var(--text-main);margin-bottom:8px;}
  .card-sub{font-family:var(--font-condensed);font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:var(--text-muted);margin-bottom:12px;}
  .card-desc{font-size:13px;line-height:1.7;color:rgba(0,0,0,0.45);font-weight:300;}
  .tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px;}
  .tag{font-family:var(--font-condensed);font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:rgba(0,0,0,0.5);border:1px solid rgba(0,0,0,0.1);padding:4px 8px;}
  .cards-grid .card,
  .cards-grid .card * {
    color: #000 !important;
  }
  .cards-grid .card .tag {
    border-color: rgba(0,0,0,0.14) !important;
    background: transparent !important;
  }
  /* Market section with accent bg */
  .market-section{padding:120px 60px;background:var(--bg-muted);}
  .market-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2px;background:rgba(0,0,0,0.04);margin-top:60px;}
  .market-card{background:var(--bg-card);padding:32px 24px;}
  .market-icon{font-size:28px;margin-bottom:14px;}
  .market-name{font-family:var(--font-condensed);font-size:14px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-main);margin-bottom:8px;}
  .market-desc{font-size:13px;font-weight:300;line-height:1.65;color:rgba(0,0,0,0.45);}
  .market-count{font-family:var(--font-condensed);font-size:22px;font-weight:700;color:var(--text-muted);margin-top:14px;}
  .cta-band{padding:100px 60px;background:var(--bg-card);}
  .cta-inner{max-width:1300px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:40px;flex-wrap:wrap;}
  .btn-primary{font-family:var(--font-condensed);font-size:13px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--bg-main);background:var(--text-muted);padding:18px 48px;text-decoration:none;display:inline-block;white-space:nowrap;transition:background .2s;}.btn-primary:hover{background:var(--text-main);}
  .footer-mini{background:var(--black);border-top:1px solid rgba(255,255,255,0.06);padding:32px 60px;display:flex;align-items:center;justify-content:space-between;}
  .footer-mini p{font-size:12px;color:rgba(255,255,255,0.2);font-weight:300;}
  .footer-mini a{color:var(--silver-light);text-decoration:none;font-family:var(--font-condensed);font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;}
  @media(max-width:900px){nav,.sub-hero-content,section.pad,.market-section,.cta-band,.footer-mini{padding-left:24px;padding-right:24px;}.two-col{grid-template-columns:1fr;gap:48px;}.cards-grid{grid-template-columns:1fr 1fr;}.market-grid{grid-template-columns:1fr 1fr;}}
  @media(max-width:600px){.cards-grid,.market-grid{grid-template-columns:1fr;}}` }} />
      <div dangerouslySetInnerHTML={{ __html: `


<section class="sub-hero">
  <video class="sub-hero-media" autoplay muted loop playsinline preload="metadata">
    <source src="/media/cosmetics/Hero.mp4" type="video/mp4" />
  </video>
  <div class="sub-hero-overlay"></div>
  <div class="sub-hero-content">
    
    
    <h1>Asia Cosmetics<br> Beauty that Reaches<br>Every Home</h1>
    <p class="sub-hero-desc">Wholesale distribution of soaps, pommades, skincare, and personal care products from world-class brand principals to Nigeria's fast-growing consumer beauty market.</p>
    </div>
</section>

<section class="pad" style="background:var(--dark-2);">
  <div class="inner">
    
    <h2>Wholesale Beauty,<br>At Every Price Point</h2>
    <div class="two-col">
      <div class="body-text">
        <!-- PLACEHOLDER: Full overview from Cosmetics MD session -->
        <p>Asia Cosmetics is the beauty and personal care distribution arm of Asia Group of Companies — distributing soaps, pommades, skincare, hair care, and personal hygiene products from global and regional brand principals to Nigeria's vast consumer market.</p>
        <p>With deep market penetration in Northern Nigeria and the Asia Group's unparalleled logistics infrastructure behind it, Asia Cosmetics reaches wholesale buyers, retail chains, market distributors, and individual stockists at scale.</p>
        <p>Nigeria's beauty and personal care sector is one of Africa's fastest-growing consumer segments, and Asia Cosmetics is positioned at its distribution heart.</p>
      </div>
      <div class="media-box">
        <img src="/media/cosmetics/media1.jpg" alt="Asia Cosmetics product display" />
      </div>
    </div>
  </div>
</section>

<section class="pad" style="background:var(--dark);">
  <div class="inner">
    
    <h2>A Complete Beauty<br>Portfolio</h2>
    <!-- PLACEHOLDER: Full product category list and brand details from Cosmetics MD session -->
    <div class="cards-grid">
      <div class="card">
        <span class="card-icon"><i class="ri-flask-line"></i></span>
        <div class="card-name">Pommades &amp; Hair Care</div>
        <div class="card-sub">High-velocity SKU</div>
        <p class="card-desc">Hair creams, pommades, relaxers, and grooming products. One of the highest-velocity cosmetics categories in Northern Nigeria's consumer market.</p>
        <div class="tags"><span class="tag">PZ Cussons</span><span class="tag">SoftSheen‑Carson</span><span class="tag">DAX</span></div>
      </div>
      <div class="card">
        <span class="card-icon"><i class="ri-drop-line"></i></span>
        <div class="card-name">Soaps &amp; Body Wash</div>
        <div class="card-sub">Mass-market distribution</div>
        <p class="card-desc">Bar soaps, liquid soaps, antiseptic soaps, and body wash products for retail, institutional, and bulk buyers. Complementary to Asia Group's detergent dominance.</p>
        <div class="tags"><span class="tag">Unilever (Dove, Lux)</span><span class="tag">PZ Cussons (Imperial Leather)</span><span class="tag">Reckitt (Dettol)</span></div>
      </div>
      <div class="card">
        <span class="card-icon"><i class="ri-leaf-line"></i></span>
        <div class="card-name">Skincare &amp; Lotions</div>
        <div class="card-sub">Growing segment</div>
        <p class="card-desc">Body lotions, creams, moisturisers, and skincare ranges for the everyday consumer. Strong growth segment driven by rising disposable income and beauty awareness.</p>
        <div class="tags"><span class="tag">Nivea (Beiersdorf)</span><span class="tag">Vaseline</span><span class="tag">Olay (P&G)</span></div>
      </div>
      <div class="card">
        <span class="card-icon"><i class="ri-brush-line"></i></span>
        <div class="card-name">Oral Care</div>
        <div class="card-sub">Daily-use category</div>
        <p class="card-desc">Toothpaste, toothbrushes, mouthwash, and oral hygiene products. High-frequency purchase category distributed to pharmacies, supermarkets, and market traders.</p>
        <div class="tags"><span class="tag">Colgate‑Palmolive</span><span class="tag">P&G (Oral‑B)</span></div>
      </div>
      <div class="card">
        <span class="card-icon"><i class="ri-test-tube-line"></i></span>
        <div class="card-name">Feminine Hygiene</div>
        <div class="card-sub">Expanding category</div>
        <p class="card-desc">Sanitary pads, feminine hygiene products, and women's personal care range. Strategically aligned with the Group's planned manufacturing entry into pads production.</p>
        <div class="tags"><span class="tag">P&G (Always)</span><span class="tag">Local &amp; regional supply</span></div>
      </div>
    </div>
  </div>
</section>

<section class="market-section">
  <div class="inner">
    
    <h2>Every Shelf,<br>Every Stockist</h2>
    <!-- PLACEHOLDER: Channel volumes and account counts from Cosmetics MD -->
    <div class="market-grid">
      <div class="market-card">
        <div class="market-icon"><i class="ri-shopping-cart-line"></i></div>
        <div class="market-name">Retail &amp; Supermarkets</div>
        <p class="market-desc">Formal retail including supermarket chains and cosmetics specialty stores. Premium shelf placement for top-tier brands.</p>
        
      </div>
      <div class="market-card">
        <div class="market-icon"><i class="ri-store-2-line"></i></div>
        <div class="market-name">Open Market Traders</div>
        <p class="market-desc">Deep penetration into Kano's Abubakar Rimi Market and other open markets — the engine of Northern Nigeria's consumer goods economy.</p>
        
      </div>
      <div class="market-card">
        <div class="market-icon"><i class="ri-capsule-line"></i></div>
        <div class="market-name">Pharmacies &amp; Health Outlets</div>
        <p class="market-desc">Cross-sell with Asia Pharmacy network — personal care products distributed alongside pharmaceutical ranges to thousands of health outlets.</p>
        
      </div>
      <div class="market-card">
        <div class="market-icon"><i class="ri-building-line"></i></div>
        <div class="market-name">Wholesale Buyers</div>
        <p class="market-desc">Secondary wholesalers and sub-distributors purchasing in bulk for onward supply to smaller markets. Container-level transactions available.</p>
        
      </div>
    </div>
  </div>
</section>


<!-- ══ OUR LOCATIONS ══ -->
` }} />
<section style={{padding:'clamp(60px, 10vw, 100px) clamp(24px, 5vw, 60px)', background:'var(--dark)'}}>
  <div style={{maxWidth:'1300px', margin:'0 auto'}}>
      <div dangerouslySetInnerHTML={{ __html: `
    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 400px), 1fr));gap:40px;align-items:end;margin-bottom:48px;">
      <h2 style="font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:bold;color:var(--white);line-height:1.1;">Find Us Near You</h2>
      <p style="font-size:15px;font-weight:300;line-height:1.85;color:rgba(255,255,255,0.5);">Asia Cosmetics operates multiple cosmetics wholesale and retail outlets across Kano. Every location is fully staffed, stocked, and ready to serve — from walk-in buyers to contract wholesale accounts.</p>
    </div>
    ` }} />

      <LocationsGrid locations={subsidiaryLocations} hideFilter={true} />

<div dangerouslySetInnerHTML={{ __html: `

    <div style="margin-top:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <a href="../operations/index.html" class="btn-primary" style="margin-top:24px; background:var(--white); color:#000;">View All 19 Asia Group Locations →</a>
    </div>
` }} />
  </div>
</section>
<div dangerouslySetInnerHTML={{ __html: `

<section class="cta-band">
  <div class="cta-inner">
    <h2 style="font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:bold;color:var(--text-main);">Stock the brands<br>people actually want.</h2>
    <a href="../index.html#contact" class="btn-primary">Enquire as a Buyer →</a>
  </div>
</section>

` }} />
    </div>
  );
}
