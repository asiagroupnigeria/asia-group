
import React from 'react';
import { LocationsGrid } from '@/components/operations/LocationsGrid';
import { locations } from '@/data/locations';

export default function PharmaceuticalsPage() {
  const subsidiaryLocations = locations.filter(loc => loc.subsidiaryId === 'pharmacy');

  return (
    <div className="pharmaceuticals-page">
      <style dangerouslySetInnerHTML={{ __html: `
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  
  html { scroll-behavior: smooth; }
  body { font-family: var(--font-body); background: var(--bg-main); color: var(--text-main); overflow-x: hidden; }

  nav { position:fixed; top:0; left:0; right:0; height:80px; background:rgba(255,255,255,0.95); backdrop-filter:blur(20px); border-bottom:1px solid rgba(0,0,0,0.06); display:flex; align-items:center; justify-content:space-between; padding:0 60px; z-index:1000; }
  .nav-back { display:flex; align-items:center; gap:10px; font-family:var(--font-condensed); font-size:12px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:var(--text-muted); text-decoration:none; transition:color 0.2s; }
  .nav-back:hover { color:var(--text-main); }
  .nav-logo { display:flex; align-items:center; gap:12px; text-decoration:none; font-family:var(--font-condensed); font-size:17px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:var(--text-main); }
  .nav-logo img { height:40px; }
  .nav-cta { font-family:var(--font-condensed); font-size:12px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:var(--white); background:var(--green); padding:10px 24px; text-decoration:none; }

  .sub-hero { padding-top:80px; min-height:70vh; position:relative; display:flex; align-items:flex-end; }
  .sub-hero-bg {
    position:absolute; inset:0;
    /* MEDIA: Asia Pharmacy hero — pharmacy environment, healthcare setting, or product display
       File: ../media/subsidiaries/pharmacy-hero.jpg
       Recommended: Clean, clinical-feeling environment; white/teal tones; product displays */
    background: linear-gradient(135deg, #012727 0%, #0A0A0A 60%);
  }
  .sub-hero-overlay { position:absolute; inset:0; background:linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.4) 60%, transparent 100%); }
  .sub-hero-content { position:relative; z-index:2; padding:80px 60px; max-width:1300px; margin:0 auto; width:100%; }
  h1 { font-family:var(--font-display); font-size:clamp(48px,6vw,88px); font-weight:800; line-height:1.0; color:var(--white); max-width:800px; text-transform:uppercase; }
  h1 em { font-style:italic; color:var(--text-muted); }
  .sub-hero-desc { font-size:17px; font-weight:300; line-height:1.85; color:rgba(255,255,255,0.6); max-width:580px; margin-top:24px; }
  .section-tag { font-family:var(--font-condensed); font-size:11px; font-weight:600; letter-spacing:0.3em; text-transform:uppercase; color:var(--text-muted); display:flex; align-items:center; gap:12px; margin-bottom:20px; }
  .section-tag::before { content:''; display:block; width:30px; height:1px; background:var(--text-muted); }

  /* OVERVIEW */
  .overview-section { padding:120px 60px; background:var(--bg-card); }
  .overview-inner { max-width:1300px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:start; }
  .overview-content h2 { font-family:var(--font-display); font-size:clamp(32px,4vw,52px); font-weight:800; color:var(--text-main); line-height:1.1; text-transform:uppercase; }
  .overview-content h2 em { font-style:italic; color:var(--text-muted); }
  .overview-content p { font-size:15px; font-weight:300; line-height:1.85; color:rgba(0,0,0,0.55); margin-top:16px; }
  .overview-visual {
    /* MEDIA: Pharmacy interior, product display, or operations image
       File: ../media/subsidiaries/pharmacy-interior.jpg */
    aspect-ratio:4/3; background:var(--bg-muted); border:1px solid rgba(0,0,0,0.06);
    display:flex; align-items:center; justify-content:center;
  }
  .overview-visual p { font-family:var(--font-condensed); font-size:10px; letter-spacing:0.15em; text-transform:uppercase; color:rgba(0,0,0,0.15); text-align:center; padding:20px; }
  .pillars { display:flex; flex-direction:column; gap:0; border:1px solid rgba(0,0,0,0.06); margin-top:40px; }
  .pillar { display:flex; gap:20px; padding:20px 24px; border-bottom:1px solid rgba(0,0,0,0.04); }
  .pillar:last-child { border-bottom:none; }
  .pillar-icon { font-size:22px; flex-shrink:0; }
  .pillar h4 { font-family:var(--font-condensed); font-size:13px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:var(--text-main); margin-bottom:5px; }
  .pillar p { font-size:13px; line-height:1.65; color:var(--text-muted); font-weight:300; }

  /* PRODUCT CATEGORIES */
  .categories-section { padding:120px 60px; background:var(--bg-main); }
  .categories-inner { max-width:1300px; margin:0 auto; }
  .categories-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; background:rgba(0,0,0,0.04); margin-top:60px; }
  .category-card { background:var(--bg-card); padding:40px 32px; position:relative; overflow:hidden; transition:background 0.3s; }
  .category-card:hover { background:var(--bg-muted); }
  .category-card::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:var(--accent); transform:scaleX(0); transform-origin:left; transition:transform 0.4s; }
  .category-card:hover::before { transform:scaleX(1); }
  .cat-icon { font-size:32px; margin-bottom:18px; display:block; }
  .cat-name { font-family:var(--font-condensed); font-size:18px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase; color:var(--text-main); margin-bottom:10px; }
  .cat-desc { font-size:13px; line-height:1.7; color:rgba(0,0,0,0.45); font-weight:300; }
  .cat-brands { display:flex; flex-wrap:wrap; gap:6px; margin-top:16px; }
  .brand-tag { font-family:var(--font-condensed); font-size:10px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:rgba(0,0,0,0.5); border:1px solid rgba(0,0,0,0.1); padding:4px 8px; }

  /* REACH */
  .reach-section { padding:120px 60px; background:var(--accent); position:relative; overflow:hidden; }
  .reach-section::before { content:'HEALTHCARE'; position:absolute; right:-20px; top:50%; transform:translateY(-50%); font-family:var(--font-condensed); font-size:200px; font-weight:800; color:rgba(255,255,255,0.04); pointer-events:none; white-space:nowrap; }
  .reach-inner { max-width:1300px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
  .reach-content h2 { font-family:var(--font-display); font-size:clamp(32px,4vw,52px); font-weight:800; color:var(--white); line-height:1.1; text-transform:uppercase; }
  .reach-content h2 em { font-style:italic; color:var(--silver-light); }
  .reach-content p { font-size:15px; font-weight:300; line-height:1.85; color:rgba(255,255,255,0.65); margin-top:16px; max-width:460px; }
  .reach-clients { display:flex; flex-direction:column; gap:0; border:1px solid rgba(255,255,255,0.15); margin-top:40px; }
  .reach-client { display:flex; align-items:center; gap:16px; padding:18px 24px; border-bottom:1px solid rgba(255,255,255,0.08); background:rgba(0,0,0,0.15); }
  .reach-client:last-child { border-bottom:none; }
  .reach-client-icon { font-size:18px; flex-shrink:0; }
  .reach-client-name { font-family:var(--font-condensed); font-size:14px; font-weight:600; letter-spacing:0.06em; color:var(--white); flex:1; }
  .reach-client-count { font-family:var(--font-condensed); font-size:12px; font-weight:600; color:var(--silver-light); letter-spacing:0.08em; }
  .reach-visual {
    /* MEDIA: Pharmacy distribution or hospital supply photography
       File: ../media/subsidiaries/pharmacy-distribution.jpg */
    aspect-ratio:1; background:rgba(0,0,0,0.2); border:1px solid rgba(255,255,255,0.1);
    display:flex; align-items:center; justify-content:center;
  }
  .reach-visual p { font-family:var(--font-condensed); font-size:10px; letter-spacing:0.15em; text-transform:uppercase; color:rgba(255,255,255,0.2); text-align:center; padding:20px; }

  .cta-band { padding:100px 60px; background:var(--bg-muted); }
  .cta-band-inner { max-width:1300px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap; }
  .cta-band h2 { font-family:var(--font-display); font-size:clamp(32px,4vw,52px); font-weight:800; color:var(--text-main); text-transform:uppercase; }
  .cta-band h2 em { font-style:italic; color:var(--text-muted); }
  .btn-primary { font-family:var(--font-condensed); font-size:13px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:var(--bg-main); background:var(--text-muted); padding:18px 48px; text-decoration:none; display:inline-block; white-space:nowrap; transition:background 0.2s; }
  .btn-primary:hover { background:var(--text-main); }
  .btn-outline { font-family:var(--font-condensed); font-size:13px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:var(--text-main); border:1px solid rgba(0,0,0,0.3); padding:18px 48px; text-decoration:none; display:inline-block; white-space:nowrap; transition:all 0.2s; }
  .btn-outline:hover { border-color:var(--text-main); background:rgba(0,0,0,0.06); }
  .footer-mini { background:var(--black); border-top:1px solid rgba(255,255,255,0.06); padding:32px 60px; display:flex; align-items:center; justify-content:space-between; }
  .footer-mini p { font-size:12px; color:rgba(255,255,255,0.2); font-weight:300; }
  .footer-mini a { color:var(--silver-light); text-decoration:none; font-family:var(--font-condensed); font-size:12px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; }

  @media (max-width:900px) {
    nav, .sub-hero-content, .overview-section, .categories-section, .reach-section, .cta-band, .footer-mini { padding-left:24px; padding-right:24px; }
    .overview-inner, .reach-inner { grid-template-columns:1fr; gap:48px; }
    .categories-grid { grid-template-columns:1fr 1fr; }
  }
  @media (max-width:600px) { .categories-grid { grid-template-columns:1fr; } }` }} />
      <div dangerouslySetInnerHTML={{ __html: `


<section class="sub-hero">
  
  <div class="sub-hero-bg">
    <video autoplay loop muted playsinline style="position:absolute; width:100%; height:100%; object-fit:cover; inset:0;">
      <source src="/media/asia-operation-cards/pharmacy.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="sub-hero-overlay"></div>
  <div class="sub-hero-content">
    
    
    <h1>Asia Pharmacy<br> Trusted Health,<br>Delivered at Scale</h1>
    <p class="sub-hero-desc">
      Wholesale pharmaceutical distribution connecting Nigeria's hospitals, clinics, retail pharmacies, and healthcare institutions to quality-assured medicines and healthcare products.
    </p>
    </div>
</section>

<section class="overview-section">
  <div class="overview-inner">
    <div class="overview-content">
      
      <h2>Bridging Manufacturers<br>to Healthcare at Every Level</h2>
      <p>Asia Pharmacy is the pharmaceutical distribution arm of Asia Group of Companies, supplying quality-assured medicines, OTC products, and healthcare consumables to hospitals, clinics, retail pharmacies, and institutional buyers across Northern Nigeria and beyond.</p>
      <p style="margin-top:16px;">Backed by the infrastructure, relationships, and financial strength of the Asia Group, Asia Pharmacy operates with the trust and reliability that healthcare supply chains demand — where a missed delivery is never just a business inconvenience.</p>
      <div class="pillars">
        <div class="pillar">
          <div class="pillar-icon"><i class="ri-checkbox-circle-line"></i></div>
          <div>
            <h4>Quality Assurance</h4>
            <p>All products sourced from NAFDAC-registered manufacturers. Cold chain and ambient storage maintained to international standards.</p>
          </div>
        </div>
        <div class="pillar">
          <div class="pillar-icon"><i class="ri-truck-line"></i></div>
          <div>
            <h4>Reliable Supply Chain</h4>
            <p>Consistent stock availability and on-time delivery to healthcare institutions. Critical supply continuity even during market disruptions.</p>
          </div>
        </div>
        <div class="pillar">
          <div class="pillar-icon"><i class="ri-hand-coin-line"></i></div>
          <div>
            <h4>Trusted by Institutions</h4>
            <p>Long-term supply agreements with Aminu Kano Teaching Hospital (AKTH), National Orthopaedic Hospital Dala, state healthcare authorities, and major regional pharmacy networks across Northern Nigeria.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="overview-visual">
      <img src="/media/asia-operation-cards/pharmacy-operations.jpg" alt="Pharmacy Operations" style="width:100%; height:100%; object-fit:cover;" />
    </div>
  </div>
</section>

<section class="categories-section">
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
</section>

<section class="reach-section">
  <div class="reach-inner">
    <div class="reach-content">
      
      <h2>Serving Healthcare<br>at Every Level</h2>
      <p>From major teaching hospitals to community health centres, from large pharmacy chains to independent dispensaries — Asia Pharmacy serves the full spectrum of Nigeria's healthcare system.</p>
    </div>
    <div class="reach-visual">
      <img src="/media/asia-operation-cards/pharmacy-operations-2.jpg" alt="Distribution and Hospital Supply" style="width:100%; height:100%; object-fit:cover;" />
    </div>
  </div>
</section>


<!-- ══ OUR LOCATIONS ══ -->
` }} />
<section style={{padding:'clamp(60px, 10vw, 100px) clamp(24px, 5vw, 60px)', background:'var(--dark)'}}>
  <div style={{maxWidth:'1300px', margin:'0 auto'}}>
    <div dangerouslySetInnerHTML={{ __html: `
    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 400px), 1fr));gap:40px;align-items:end;margin-bottom:48px;">
      <h2 style="font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:800;color:var(--white);line-height:1.1;text-transform:uppercase;">Find Us Near You</h2>
      <p style="font-size:15px;font-weight:300;line-height:1.85;color:rgba(255,255,255,0.5);">Asia Pharmacy operates over 15 pharmacy outlets and distribution points across Kano. Every location is fully staffed, stocked, and ready to serve — from walk-in buyers to contract wholesale accounts.</p>
    </div>
    ` }} />

      <LocationsGrid locations={subsidiaryLocations} hideFilter={true} />

<div dangerouslySetInnerHTML={{ __html: `

    <div style="margin-top:24px;display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:12px;">
      <a href="/operations" class="btn-primary" style="background:var(--white); color:#000;">View All 19 Asia Group Locations →</a>
    </div>
` }} />
  </div>
</section>
<div dangerouslySetInnerHTML={{ __html: `

<section class="cta-band">
  <div class="cta-band-inner">
    <h2>Need pharmaceutical<br>supply at scale?</h2>
    <div style="display:flex; gap:16px; flex-wrap:wrap;">
      <a href="../index.html#contact" class="btn-primary">Enquire as a Buyer →</a>
      <a href="../index.html#contact" class="btn-outline">Become a Supply Partner</a>
    </div>
  </div>
</section>

` }} />
    </div>
  );
}
