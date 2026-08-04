
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
  .sub-hero-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,10,10,1) 0%,rgba(10,10,10,0.4) 60%,transparent 100%);}
  .sub-hero-content{position:relative;z-index:2;padding:80px 60px;max-width:1300px;margin:0 auto;width:100%;}
  .breadcrumb{display:flex;align-items:center;gap:10px;font-family:var(--font-condensed);font-size:11px;font-weight:500;letter-spacing:0.2em;text-transform:uppercase;color:var(--text-muted);margin-bottom:24px;}.breadcrumb a{color:var(--text-muted);text-decoration:none;}
  h1{font-family:var(--font-display);font-size:clamp(48px,6vw,88px);font-weight:300;line-height:1.0;color:var(--text-main);max-width:800px;}h1 em{font-style:italic;color:var(--text-muted);}
  .sub-eyebrow{font-family:var(--font-condensed);font-size:12px;font-weight:600;letter-spacing:0.3em;text-transform:uppercase;color:var(--accent-light);display:flex;align-items:center;gap:12px;margin-bottom:20px;}.sub-eyebrow::before{content:'';display:block;width:30px;height:1px;background:var(--accent-light);}
  .sub-hero-desc{font-size:17px;font-weight:300;line-height:1.85;color:rgba(255,255,255,0.6);max-width:580px;margin-top:24px;}
  .sub-hero-stats{display:flex;gap:0;margin-top:48px;border:1px solid rgba(255,255,255,0.08);width:fit-content;}
  .sub-stat{padding:24px 40px;border-right:1px solid rgba(0,0,0,0.08);background:rgba(10,10,10,0.7);backdrop-filter:blur(10px);}.sub-stat:last-child{border-right:none;}
  .sub-stat-number{font-family:var(--font-condensed);font-size:28px;font-weight:700;color:var(--text-muted);line-height:1;}
  .sub-stat-label{font-family:var(--font-body);font-size:11px;font-weight:400;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-muted);margin-top:6px;}
  .section-tag{font-family:var(--font-condensed);font-size:11px;font-weight:600;letter-spacing:0.3em;text-transform:uppercase;color:var(--text-muted);display:flex;align-items:center;gap:12px;margin-bottom:20px;}.section-tag::before{content:'';display:block;width:30px;height:1px;background:var(--text-muted);}
  section.pad{padding:120px 60px;}
  .inner{max-width:1300px;margin:0 auto;}
  h2{font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:300;color:var(--text-main);line-height:1.1;margin-bottom:16px;}h2 em{font-style:italic;color:var(--text-muted);}
  .two-col{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;margin-top:60px;}
  .body-text{font-size:15px;font-weight:300;line-height:1.85;color:rgba(0,0,0,0.55);}
  .body-text p+p{margin-top:16px;}
  .media-box{aspect-ratio:4/3;background:var(--bg-muted);border:1px solid rgba(0,0,0,0.06);display:flex;align-items:center;justify-content:center;}
  .media-box p{font-family:var(--font-condensed);font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(0,0,0,0.15);text-align:center;padding:20px;}
  .cards-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:rgba(0,0,0,0.04);margin-top:60px;}
  .card{background:var(--bg-card);padding:40px 32px;transition:background .3s;}.card:hover{background:var(--bg-muted);}
  .card-icon{font-size:32px;margin-bottom:18px;display:block;}
  .card-name{font-family:var(--font-condensed);font-size:17px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:var(--text-main);margin-bottom:8px;}
  .card-sub{font-family:var(--font-condensed);font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:var(--text-muted);margin-bottom:12px;}
  .card-desc{font-size:13px;line-height:1.7;color:rgba(0,0,0,0.45);font-weight:300;}
  .tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px;}
  .tag{font-family:var(--font-condensed);font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:rgba(0,0,0,0.5);border:1px solid rgba(0,0,0,0.1);padding:4px 8px;}
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
  <div class="sub-hero-bg"></div>
  <div class="sub-hero-overlay"></div>
  <div class="sub-hero-content">
    <div class="breadcrumb"><a href="../index.html">Asia Group</a><span>/</span><a href="../index.html#subsidiaries">Subsidiaries</a><span>/</span><span style="color:var(--white);">Asia Cosmetics</span></div>
    <div class="sub-eyebrow">Beauty &amp; Personal Care Distribution</div>
    <h1>Asia Cosmetics<br>— Beauty that Reaches<br>Every Home</h1>
    <p class="sub-hero-desc">Wholesale distribution of soaps, pommades, skincare, and personal care products from world-class brand principals to Nigeria's fast-growing consumer beauty market.</p>
    <div class="sub-hero-stats">
      <div class="sub-stat"><div class="sub-stat-number">[ # ]</div><div class="sub-stat-label">Product SKUs</div></div>
      <div class="sub-stat"><div class="sub-stat-number">[ # ]</div><div class="sub-stat-label">Retail Accounts</div></div>
      <div class="sub-stat"><div class="sub-stat-number">[ # ]</div><div class="sub-stat-label">Brand Principals</div></div>
    </div>
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
        <p style="font-size:13px;color:rgba(255,255,255,0.25);margin-top:24px;">Volume figures, specific brand list, and client details to be confirmed with Cosmetics MD after data session.</p>
      </div>
      <div class="media-box">
        <!-- MEDIA: Beauty products display or distribution
             File: ../media/subsidiaries/cosmetics-display.jpg
             Recommended: Elegant product arrangement or retail shelf environment -->
        <p>MEDIA PLACEHOLDER<br>Cosmetics Product Display<br>or Distribution Environment</p>
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
        <span class="card-icon">🧴</span>
        <div class="card-name">Pommades &amp; Hair Care</div>
        <div class="card-sub">High-velocity SKU</div>
        <p class="card-desc">Hair creams, pommades, relaxers, and grooming products. One of the highest-velocity cosmetics categories in Northern Nigeria's consumer market.</p>
        <div class="tags"><span class="tag">PZ Cussons</span><span class="tag">EUROMEGA</span><span class="tag">[ + TBD ]</span></div>
      </div>
      <div class="card">
        <span class="card-icon">🧼</span>
        <div class="card-name">Soaps &amp; Body Wash</div>
        <div class="card-sub">Mass-market distribution</div>
        <p class="card-desc">Bar soaps, liquid soaps, antiseptic soaps, and body wash products for retail, institutional, and bulk buyers. Complementary to Asia Group's detergent dominance.</p>
        <div class="tags"><span class="tag">PZ Cussons</span><span class="tag">[ + TBD ]</span></div>
      </div>
      <div class="card">
        <span class="card-icon">🌿</span>
        <div class="card-name">Skincare &amp; Lotions</div>
        <div class="card-sub">Growing segment</div>
        <p class="card-desc">Body lotions, creams, moisturisers, and skincare ranges for the everyday consumer. Strong growth segment driven by rising disposable income and beauty awareness.</p>
        <div class="tags"><span class="tag">[ Brands — TBD ]</span></div>
      </div>
      <div class="card">
        <span class="card-icon">🪥</span>
        <div class="card-name">Oral Care</div>
        <div class="card-sub">Daily-use category</div>
        <p class="card-desc">Toothpaste, toothbrushes, mouthwash, and oral hygiene products. High-frequency purchase category distributed to pharmacies, supermarkets, and market traders.</p>
        <div class="tags"><span class="tag">[ Brands — TBD ]</span></div>
      </div>
      <div class="card">
        <span class="card-icon">🧪</span>
        <div class="card-name">Feminine Hygiene</div>
        <div class="card-sub">Expanding category</div>
        <p class="card-desc">Sanitary pads, feminine hygiene products, and women's personal care range. Strategically aligned with the Group's planned manufacturing entry into pads production.</p>
        <div class="tags"><span class="tag">[ Brands — TBD ]</span></div>
      </div>
      <div class="card" style="opacity:0.4;border:1px dashed rgba(255,255,255,0.08);">
        <span class="card-icon" style="opacity:0.4;">➕</span>
        <div class="card-name" style="color:var(--muted);">Additional Categories</div>
        <div class="card-sub" style="color:var(--muted);">To Be Confirmed</div>
        <p class="card-desc">Further product categories and brands to be confirmed with Cosmetics MD after data session. Perfumes, deodorants, and baby care likely additions.</p>
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
        <div class="market-icon">🛒</div>
        <div class="market-name">Retail &amp; Supermarkets</div>
        <p class="market-desc">Formal retail including supermarket chains and cosmetics specialty stores. Premium shelf placement for top-tier brands.</p>
        <div class="market-count">[ # ] accounts</div>
      </div>
      <div class="market-card">
        <div class="market-icon">🏪</div>
        <div class="market-name">Open Market Traders</div>
        <p class="market-desc">Deep penetration into Kano's Abubakar Rimi Market and other open markets — the engine of Northern Nigeria's consumer goods economy.</p>
        <div class="market-count">[ # ] stockists</div>
      </div>
      <div class="market-card">
        <div class="market-icon">💊</div>
        <div class="market-name">Pharmacies &amp; Health Outlets</div>
        <p class="market-desc">Cross-sell with Asia Pharmacy network — personal care products distributed alongside pharmaceutical ranges to thousands of health outlets.</p>
        <div class="market-count">[ # ] accounts</div>
      </div>
      <div class="market-card">
        <div class="market-icon">🏢</div>
        <div class="market-name">Wholesale Buyers</div>
        <p class="market-desc">Secondary wholesalers and sub-distributors purchasing in bulk for onward supply to smaller markets. Container-level transactions available.</p>
        <div class="market-count">[ # ] buyers</div>
      </div>
    </div>
  </div>
</section>


<!-- ══ OUR LOCATIONS ══ -->
` }} />
<section style={{padding:'100px 60px', background:'var(--dark)'}}>
  <div style={{maxWidth:'1300px', margin:'0 auto'}}>
    <div dangerouslySetInnerHTML={{ __html: `
    <div style="font-family:var(--font-condensed);font-size:11px;font-weight:600;letter-spacing:0.3em;text-transform:uppercase;color:var(--silver-light);display:flex;align-items:center;gap:12px;margin-bottom:20px;"><span style="display:block;width:30px;height:1px;background:var(--silver-light);"></span>Asia Cosmetics Locations Across Kano</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:end;margin-bottom:48px;">
      <h2 style="font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:300;color:var(--white);line-height:1.1;">Find Us Near You</h2>
      <p style="font-size:15px;font-weight:300;line-height:1.85;color:rgba(255,255,255,0.5);">Asia Cosmetics operates [ # ] cosmetics wholesale and retail outlets across Kano. Every location is fully staffed, stocked, and ready to serve — from walk-in buyers to contract wholesale accounts.</p>
    </div>
    ` }} />

      <LocationsGrid locations={subsidiaryLocations} hideFilter={true} />

<div dangerouslySetInnerHTML={{ __html: `

    <div style="margin-top:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <p style="font-size:13px;color:var(--muted);font-weight:300;">* Location cards updated with real data and photographs after field visit sessions.</p>
      <a href="../operations/index.html" style="font-family:var(--font-condensed);font-size:12px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--silver-light);text-decoration:none;">View All 19 Asia Group Locations →</a>
    </div>
` }} />
  </div>
</section>
<div dangerouslySetInnerHTML={{ __html: `

<section class="cta-band">
  <div class="cta-inner">
    <h2 style="font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:300;color:var(--white);">Stock the brands<br>people actually want.</h2>
    <a href="../index.html#contact" class="btn-primary">Enquire as a Buyer →</a>
  </div>
</section>

` }} />
    </div>
  );
}
