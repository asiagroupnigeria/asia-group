
import React from 'react';

export default function PhonesPage() {
  return (
    <div className="phones-page">
      <style dangerouslySetInnerHTML={{ __html: `
  *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
  
  html{scroll-behavior:smooth;}body{font-family:var(--font-body);background:var(--bg-main);color:var(--text-main);overflow-x:hidden;}
  nav{position:fixed;top:0;left:0;right:0;height:80px;background:rgba(255,255,255,0.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(0,0,0,0.06);display:flex;align-items:center;justify-content:space-between;padding:0 60px;z-index:1000;}
  .nav-back{display:flex;align-items:center;gap:10px;font-family:var(--font-condensed);font-size:12px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-muted);text-decoration:none;transition:color .2s;}.nav-back:hover{color:var(--text-main);}
  .nav-logo{display:flex;align-items:center;gap:12px;text-decoration:none;font-family:var(--font-condensed);font-size:17px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-main);}.nav-logo img{height:40px;}
  .nav-cta{font-family:var(--font-condensed);font-size:12px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--white);background:var(--green);padding:10px 24px;text-decoration:none;}
  .sub-hero{padding-top:80px;min-height:70vh;position:relative;display:flex;align-items:flex-end;}
  .sub-hero-bg{position:absolute;inset:0;
  /* MEDIA: Phones hero — tech retail, phone displays, market electronics stalls
     File: ../media/subsidiaries/phones-hero.jpg
     Recommended: Bright, modern tech retail environment or phone product display */
  background:linear-gradient(135deg,#021929 0%,#0A0A0A 60%);}
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
  h2{font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:300;color:var(--text-main);line-height:1.1;margin-bottom:16px;}
  h2 em{font-style:italic;color:var(--text-muted);}
  .two-col{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;margin-top:60px;}
  .body-text{font-size:15px;font-weight:300;line-height:1.85;color:rgba(0,0,0,0.55);}
  .body-text p+p{margin-top:16px;}
  .media-box{aspect-ratio:4/3;background:var(--bg-muted);border:1px solid rgba(0,0,0,0.06);display:flex;align-items:center;justify-content:center;}
  .media-box p{font-family:var(--font-condensed);font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(0,0,0,0.15);text-align:center;padding:20px;}
  /* Product categories */
  .cats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:rgba(0,0,0,0.04);margin-top:60px;}
  .cat-card{background:var(--bg-card);padding:40px 32px;position:relative;overflow:hidden;transition:background .3s;}.cat-card:hover{background:var(--bg-muted);}
  .cat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--accent);transform:scaleX(0);transform-origin:left;transition:transform .4s;}.cat-card:hover::before{transform:scaleX(1);}
  .cat-icon{font-size:32px;margin-bottom:18px;display:block;}
  .cat-name{font-family:var(--font-condensed);font-size:17px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:var(--text-main);margin-bottom:8px;}
  .cat-desc{font-size:13px;line-height:1.7;color:rgba(0,0,0,0.45);font-weight:300;}
  .tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px;}
  .tag{font-family:var(--font-condensed);font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:rgba(0,0,0,0.5);border:1px solid rgba(0,0,0,0.1);padding:4px 8px;}
  /* Why section */
  .why-section{padding:120px 60px;background:var(--accent);}
  .why-inner{max-width:1300px;margin:0 auto;}
  .why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:rgba(0,0,0,0.12);margin-top:60px;}
  .why-card{background:rgba(0,0,0,0.2);padding:40px 32px;}
  .why-num{font-family:var(--font-condensed);font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:var(--text-muted);margin-bottom:12px;}
  .why-title{font-family:var(--font-condensed);font-size:17px;font-weight:700;letter-spacing:0.05em;color:var(--text-main);margin-bottom:10px;}
  .why-desc{font-size:13px;font-weight:300;line-height:1.7;color:rgba(0,0,0,0.6);}
  /* Stockists */
  .stockists-section{padding:120px 60px;background:var(--bg-card);}
  .stockist-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2px;background:rgba(0,0,0,0.04);margin-top:60px;}
  .stockist-card{background:var(--bg-main);padding:32px 24px;}
  .st-icon{font-size:26px;margin-bottom:14px;}
  .st-name{font-family:var(--font-condensed);font-size:14px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-main);margin-bottom:8px;}
  .st-desc{font-size:13px;font-weight:300;line-height:1.65;color:rgba(0,0,0,0.45);}
  .st-count{font-family:var(--font-condensed);font-size:22px;font-weight:700;color:var(--text-muted);margin-top:14px;}
  .cta-band{padding:100px 60px;background:var(--bg-main);}
  .cta-inner{max-width:1300px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:40px;flex-wrap:wrap;}
  .btn-primary{font-family:var(--font-condensed);font-size:13px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--bg-main);background:var(--text-muted);padding:18px 48px;text-decoration:none;display:inline-block;white-space:nowrap;transition:background .2s;}.btn-primary:hover{background:var(--text-main);}
  .footer-mini{background:var(--black);border-top:1px solid rgba(255,255,255,0.06);padding:32px 60px;display:flex;align-items:center;justify-content:space-between;}
  .footer-mini p{font-size:12px;color:rgba(255,255,255,0.2);font-weight:300;}
  .footer-mini a{color:var(--silver-light);text-decoration:none;font-family:var(--font-condensed);font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;}
  @media(max-width:900px){nav,.sub-hero-content,section.pad,.why-section,.stockists-section,.cta-band,.footer-mini{padding-left:24px;padding-right:24px;}.two-col{grid-template-columns:1fr;gap:48px;}.cats-grid{grid-template-columns:1fr 1fr;}.why-grid{grid-template-columns:1fr;}.stockist-grid{grid-template-columns:1fr 1fr;}}
  @media(max-width:600px){.cats-grid,.stockist-grid{grid-template-columns:1fr;}}` }} />
      <div dangerouslySetInnerHTML={{ __html: `


<section class="sub-hero">
  <div class="sub-hero-bg"></div>
  <div class="sub-hero-overlay"></div>
  <div class="sub-hero-content">
    <div class="breadcrumb"><a href="../index.html">Asia Group</a><span>/</span><a href="../index.html#subsidiaries">Subsidiaries</a><span>/</span><span style="color:var(--white);">Asia Phones &amp; Accessories</span></div>
    <div class="sub-eyebrow">Consumer Electronics &amp; Mobile Distribution</div>
    <h1>Asia Phones<br>&amp; Accessories<br>— Connecting Nigeria</h1>
    <p class="sub-hero-desc">Wholesale distributor of mobile phones and accessories into Northern Nigeria's fast-growing technology retail ecosystem — supplying thousands of stockists with the devices that connect a nation.</p>
    <div class="sub-hero-stats">
      <div class="sub-stat"><div class="sub-stat-number">[ # ]</div><div class="sub-stat-label">Retail Stockists</div></div>
      <div class="sub-stat"><div class="sub-stat-number">[ # ]</div><div class="sub-stat-label">Device Brands</div></div>
      <div class="sub-stat"><div class="sub-stat-number">[ # ]</div><div class="sub-stat-label">SKUs Distributed</div></div>
    </div>
  </div>
</section>

<section class="pad" style="background:var(--dark-2);">
  <div class="inner">
    
    <h2>Northern Nigeria's<br>Technology Wholesale Hub</h2>
    <div class="two-col">
      <div class="body-text">
        <!-- PLACEHOLDER: Full overview from Phones MD session -->
        <p>Asia Phones &amp; Accessories is the consumer electronics and mobile distribution arm of Asia Group of Companies — serving as the wholesale conduit between global phone manufacturers and the thousands of phone retailers, market traders, and electronics stockists across Northern Nigeria.</p>
        <p>Nigeria is one of the world's most rapidly growing smartphone markets. With a young, mobile-first population and rising smartphone penetration, the demand for affordable, quality devices and accessories has never been greater. Asia Phones is positioned to serve this demand at scale.</p>
        <p>Leveraging Asia Group's proven distribution infrastructure, warehousing capability, and decades of market relationships, Asia Phones ensures availability, reliability, and competitive wholesale pricing across all device tiers.</p>
        <p style="font-size:13px;color:rgba(255,255,255,0.25);margin-top:24px;">Volume figures, brand list, and specific stockist numbers to be confirmed with Phones MD after data session.</p>
      </div>
      <div class="media-box">
        <!-- MEDIA: Phone retail or wholesale distribution
             File: ../media/subsidiaries/phones-warehouse.jpg
             Recommended: Electronics retail environment, phone display wall, or wholesale warehouse -->
        <p>MEDIA PLACEHOLDER<br>Phones / Electronics Retail or Warehouse<br>Recommended: Bright, tech-forward environment</p>
      </div>
    </div>
  </div>
</section>

<section class="pad" style="background:var(--dark);">
  <div class="inner">
    
    <h2>Devices &amp; Accessories<br>for Every Buyer</h2>
    <!-- PLACEHOLDER: Full product and brand list from Phones MD session -->
    <div class="cats-grid">
      <div class="cat-card">
        <span class="cat-icon">📱</span>
        <div class="cat-name">Smartphones</div>
        <p class="cat-desc">Android smartphones across all price tiers — entry-level, mid-range, and premium. The primary driver of Nigeria's mobile retail market. Brand list to be confirmed with MD.</p>
        <div class="tags"><span class="tag">[ Brands — TBD ]</span><span class="tag">Android</span></div>
      </div>
      <div class="cat-card">
        <span class="cat-icon">📟</span>
        <div class="cat-name">Feature Phones</div>
        <p class="cat-desc">Durable, affordable feature phones for markets where connectivity matters more than computing power. Strong demand in rural and semi-urban markets across Northern Nigeria.</p>
        <div class="tags"><span class="tag">[ Brands — TBD ]</span></div>
      </div>
      <div class="cat-card">
        <span class="cat-icon">🎧</span>
        <div class="cat-name">Audio Accessories</div>
        <p class="cat-desc">Earphones, headphones, Bluetooth speakers, and audio accessories. High-margin accessory category with fast stock turnover at retail level.</p>
        <div class="tags"><span class="tag">[ Brands — TBD ]</span></div>
      </div>
      <div class="cat-card">
        <span class="cat-icon">🔋</span>
        <div class="cat-name">Chargers &amp; Power Banks</div>
        <p class="cat-desc">Essential accessories in Nigeria's energy-constrained market. Chargers, power banks, cables, and adapters in consistently high demand across all market segments.</p>
        <div class="tags"><span class="tag">[ Brands — TBD ]</span></div>
      </div>
      <div class="cat-card">
        <span class="cat-icon">🛡️</span>
        <div class="cat-name">Phone Protection</div>
        <p class="cat-desc">Cases, screen protectors, tempered glass, and device protection accessories. High-velocity retail item with strong attach rate at point of sale.</p>
        <div class="tags"><span class="tag">[ Brands — TBD ]</span></div>
      </div>
      <div class="cat-card" style="opacity:0.4;border:1px dashed rgba(255,255,255,0.08);">
        <span class="cat-icon" style="opacity:0.4;">➕</span>
        <div class="cat-name" style="color:var(--muted);">Additional Categories</div>
        <p class="cat-desc">Smart watches, tablets, Wi-Fi routers, and further accessories to be confirmed with Phones MD. Full product catalogue coming after data session.</p>
      </div>
    </div>
  </div>
</section>

<section class="why-section">
  <div class="why-inner">
    
    <h2 style="color:var(--white);">The Advantage of<br>Asia's Distribution Power</h2>
    <div class="why-grid">
      <div class="why-card">
        <div class="why-num">01 — Price</div>
        <div class="why-title">Competitive Wholesale Pricing</div>
        <p class="why-desc">Asia Group's purchasing scale and direct manufacturer relationships translate into better wholesale prices than smaller distributors can offer — improving stockist margins.</p>
      </div>
      <div class="why-card">
        <div class="why-num">02 — Stock</div>
        <div class="why-title">Reliable Availability</div>
        <p class="why-desc">Backed by Asia Group's warehousing infrastructure, Asia Phones maintains deep stock positions on fast-moving devices and accessories — minimising out-of-stock situations for retailers.</p>
      </div>
      <div class="why-card">
        <div class="why-num">03 — Trust</div>
        <div class="why-title">36 Years of Reliable Trade</div>
        <p class="why-desc">Every Asia Group subsidiary carries the founding values of Trust and Integrity. Retailers who stock with Asia Phones know they receive genuine products, accurate quantities, and honest dealing.</p>
      </div>
    </div>
  </div>
</section>

<section class="stockists-section">
  <div class="inner">
    
    <h2>Every Channel<br>That Sells Technology</h2>
    <!-- PLACEHOLDER: Stockist numbers from Phones MD session -->
    <div class="stockist-grid">
      <div class="stockist-card">
        <div class="st-icon">🏪</div>
        <div class="st-name">Phone Shops &amp; Kiosks</div>
        <p class="st-desc">Independent phone retailers and kiosks in markets, shopping centres, and roadside locations across Northern Nigeria.</p>
        <div class="st-count">[ # ] stockists</div>
      </div>
      <div class="stockist-card">
        <div class="st-icon">🛒</div>
        <div class="st-name">Electronics Supermarkets</div>
        <p class="st-desc">Formal electronics retail chains and multi-brand stores requiring consistent wholesale supply across multiple locations.</p>
        <div class="st-count">[ # ] accounts</div>
      </div>
      <div class="stockist-card">
        <div class="st-icon">🏬</div>
        <div class="st-name">Market Traders</div>
        <p class="st-desc">Open-market phone traders in Kano's Computer Village and electronics sections of major markets — high-volume, fast-moving accounts.</p>
        <div class="st-count">[ # ] traders</div>
      </div>
      <div class="stockist-card">
        <div class="st-icon">🌍</div>
        <div class="st-name">Cross-Border Buyers</div>
        <p class="st-desc">Bulk buyers supplying Cameroon, Chad, Niger, and other neighbouring markets through Asia Group's established cross-border trade infrastructure.</p>
        <div class="st-count">[ # ] buyers</div>
      </div>
    </div>
  </div>
</section>


<!-- ══ OUR LOCATIONS ══ -->
<section style="padding:100px 60px;background:var(--dark);">
  <div style="max-width:1300px;margin:0 auto;">
    <div style="font-family:var(--font-condensed);font-size:11px;font-weight:600;letter-spacing:0.3em;text-transform:uppercase;color:var(--silver-light);display:flex;align-items:center;gap:12px;margin-bottom:20px;"><span style="display:block;width:30px;height:1px;background:var(--silver-light);"></span>Asia Phones Locations Across Kano</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:end;margin-bottom:48px;">
      <h2 style="font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:300;color:var(--white);line-height:1.1;">Find Us Near You</h2>
      <p style="font-size:15px;font-weight:300;line-height:1.85;color:rgba(255,255,255,0.5);">Asia Phones operates [ # ] phones and accessories distribution hubs across Kano. Every location is fully staffed, stocked, and ready to serve — from walk-in buyers to contract wholesale accounts.</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:rgba(255,255,255,0.04);">

      <!-- Location card — replicate for each Asia Phones location. Fill from field visit data. -->
      <div style="background:var(--dark-2);overflow:hidden;">
        <!-- MEDIA: File: ../media/locations/0N-[slug]-exterior.jpg -->
        <div style="aspect-ratio:16/9;background:var(--dark-3);display:flex;align-items:center;justify-content:center;">
          <p style="font-family:var(--font-condensed);font-size:9px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.12);text-align:center;padding:12px;">MEDIA: Location Exterior</p>
        </div>
        <div style="padding:20px 20px 24px;">
          <div style="font-family:var(--font-condensed);font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#4FC3F7;margin-bottom:6px;">Asia Phones — Location [ N ]</div>
          <div style="font-family:var(--font-condensed);font-size:16px;font-weight:700;letter-spacing:0.04em;color:var(--white);margin-bottom:4px;">[ Location Name — TBD ]</div>
          <div style="font-size:12px;color:rgba(255,255,255,0.4);font-weight:300;margin-bottom:14px;">[ Address — TBD ]<br>Kano, Kano State</div>
          <div style="display:flex;gap:0;border:1px solid rgba(255,255,255,0.06);">
            <div style="flex:1;padding:10px 12px;border-right:1px solid rgba(255,255,255,0.06);"><div style="font-family:var(--font-condensed);font-size:15px;font-weight:700;color:rgba(255,255,255,0.3);">[ # ]</div><div style="font-size:9px;color:var(--muted);letter-spacing:0.08em;text-transform:uppercase;margin-top:3px;">Staff</div></div>
            <div style="flex:1;padding:10px 12px;border-right:1px solid rgba(255,255,255,0.06);"><div style="font-family:var(--font-condensed);font-size:15px;font-weight:700;color:rgba(255,255,255,0.3);">[ # ]</div><div style="font-size:9px;color:var(--muted);letter-spacing:0.08em;text-transform:uppercase;margin-top:3px;">Clients</div></div>
            <div style="flex:1;padding:10px 12px;"><div style="font-family:var(--font-condensed);font-size:13px;font-weight:600;color:rgba(255,255,255,0.3);">[ MD ]</div><div style="font-size:9px;color:var(--muted);letter-spacing:0.08em;text-transform:uppercase;margin-top:3px;">Manager</div></div>
          </div>
        </div>
      </div>

      <!-- Placeholder cards — remove and replace with real cards as field data arrives -->
      <div style="background:var(--dark-2);overflow:hidden;opacity:0.3;border:1px dashed rgba(255,255,255,0.06);">
        <div style="aspect-ratio:16/9;background:var(--dark-3);display:flex;align-items:center;justify-content:center;"><p style="font-family:var(--font-condensed);font-size:9px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.1);text-align:center;padding:12px;">MEDIA: Location [ N ]</p></div>
        <div style="padding:20px;"><div style="font-family:var(--font-condensed);font-size:16px;font-weight:700;color:rgba(255,255,255,0.2);">[ TBD ]</div><div style="font-size:12px;color:rgba(255,255,255,0.2);margin-top:4px;">[ Address — TBD ]</div></div>
      </div>
      <div style="background:var(--dark-2);overflow:hidden;opacity:0.3;border:1px dashed rgba(255,255,255,0.06);">
        <div style="aspect-ratio:16/9;background:var(--dark-3);display:flex;align-items:center;justify-content:center;"><p style="font-family:var(--font-condensed);font-size:9px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.1);text-align:center;padding:12px;">MEDIA: Location [ N ]</p></div>
        <div style="padding:20px;"><div style="font-family:var(--font-condensed);font-size:16px;font-weight:700;color:rgba(255,255,255,0.2);">[ TBD ]</div><div style="font-size:12px;color:rgba(255,255,255,0.2);margin-top:4px;">[ Address — TBD ]</div></div>
      </div>
    </div>
    <div style="margin-top:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <p style="font-size:13px;color:var(--muted);font-weight:300;">* Location cards updated with real data and photographs after field visit sessions.</p>
      <a href="../operations/index.html" style="font-family:var(--font-condensed);font-size:12px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--silver-light);text-decoration:none;">View All 19 Asia Group Locations →</a>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="cta-inner">
    <h2 style="font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:300;color:var(--white);">Ready to stock the<br>latest devices?</h2>
    <a href="../index.html#contact" class="btn-primary">Enquire as a Stockist →</a>
  </div>
</section>

` }} />
    </div>
  );
}
