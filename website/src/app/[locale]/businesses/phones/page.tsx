
import React from 'react';
import { LocationsGrid } from '@/components/operations/LocationsGrid';
import { locations } from '@/data/locations';

export default function PhonesPage() {
  const subsidiaryLocations = locations.filter(loc => loc.subsidiaryId === 'phones');

  return (
    <div className="phones-page">
      <style dangerouslySetInnerHTML={{ __html: `
  *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
  
  html{scroll-behavior:smooth;}body{font-family:var(--font-body);background:var(--bg-main);color:var(--text-main);overflow-x:hidden;}
  nav{position:fixed;top:0;left:0;right:0;height:80px;background:rgba(255,255,255,0.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(0,0,0,0.06);display:flex;align-items:center;justify-content:space-between;padding:0 60px;z-index:1000;}
  .nav-back{display:flex;align-items:center;gap:10px;font-family:var(--font-condensed);font-size:12px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-muted);text-decoration:none;transition:color .2s;}.nav-back:hover{color:var(--text-main);}
  .nav-logo{display:flex;align-items:center;gap:12px;text-decoration:none;font-family:var(--font-condensed);font-size:17px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-main);}.nav-logo img{height:40px;}
  .nav-cta{font-family:var(--font-condensed);font-size:12px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--white);background:var(--green);padding:10px 24px;text-decoration:none;}
  
  /* HERO */
  .sub-hero{padding-top:80px;min-height:70vh;position:relative;display:flex;align-items:flex-end;}
  .sub-hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,#021929 0%,#0A0A0A 60%);}
  .sub-hero-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;filter:brightness(0.88);}
  .sub-hero-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,10,10,0.65) 0%,rgba(10,10,10,0.15) 50%,transparent 100%);z-index:1;}
  .sub-hero-content{position:relative;z-index:2;padding:80px 60px;max-width:1300px;margin:0 auto;width:100%;}
  h1{font-family:var(--font-display);font-size:clamp(48px,6vw,88px);font-weight:800;line-height:1.0;color:var(--white);max-width:800px;text-transform:uppercase;text-shadow:0 4px 20px rgba(0,0,0,0.8);}
  h1 em{font-style:italic;color:var(--silver-light);}
  .sub-hero-desc{font-size:17px;font-weight:400;line-height:1.85;color:#FFFFFF;max-width:580px;margin-top:24px;text-shadow:0 2px 10px rgba(0,0,0,0.85);}
  .section-tag{font-family:var(--font-condensed);font-size:11px;font-weight:600;letter-spacing:0.3em;text-transform:uppercase;color:var(--text-muted);display:flex;align-items:center;gap:12px;margin-bottom:20px;}
  .section-tag::before{content:'';display:block;width:30px;height:1px;background:var(--text-muted);}
  
  /* OVERVIEW */
  section.pad{padding:120px 60px;}
  .inner{max-width:1300px;margin:0 auto;}
  .two-col{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;margin-top:60px;}
  .body-text{font-size:15px;font-weight:300;line-height:1.85;color:rgba(255,255,255,0.85);}
  .body-text p+p{margin-top:16px;}
  .media-box{aspect-ratio:4/3;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;overflow:hidden;}
  .overview-video{width:100%;height:100%;object-fit:cover;display:block;border:0;background:#000;}
  
  /* DARK SECTIONS CONTRAST */
  .pad[style*="background:var(--dark)"], .pad[style*="background:var(--dark-2)"] { color: var(--white); }
  .pad[style*="background:var(--dark)"] h2, .pad[style*="background:var(--dark-2)"] h2 {
    font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:800;color:#FFFFFF !important;line-height:1.1;margin-bottom:16px;text-transform:uppercase;
  }
  
  /* PRODUCT CATEGORIES */
  .cats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:60px;}
  .cat-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:0;padding:40px 32px;position:relative;overflow:hidden;transition:all .3s;display:flex;flex-direction:column;}
  .cat-card:hover{background:rgba(255,255,255,0.06);transform:translateY(-4px);box-shadow:0 12px 30px rgba(0,0,0,0.3);border-color:rgba(76,175,80,0.4);}
  .cat-icon{font-size:32px;margin-bottom:18px;display:block;color:var(--green-bright, #4CAF50);}
  .cat-name{font-family:var(--font-condensed);font-size:18px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:#FFFFFF;margin-bottom:8px;}
  .cat-desc{font-size:14px;line-height:1.7;color:rgba(255,255,255,0.75);font-weight:300;}
  .tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:16px;}
  .tag{font-family:var(--font-condensed);font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.9);border:1px solid rgba(255,255,255,0.18);background:rgba(255,255,255,0.05);padding:4px 10px;}
  
  /* WHY SECTION */
  .why-section{padding:120px 60px;background:#031422;border-top:1px solid rgba(255,255,255,0.08);border-bottom:1px solid rgba(255,255,255,0.08);}
  .why-inner{max-width:1300px;margin:0 auto;}
  .why-section h2{font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:800;color:#FFFFFF !important;line-height:1.1;margin-bottom:16px;text-transform:uppercase;}
  .why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:60px;}
  .why-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:0;padding:40px 32px;transition:all .3s;}
  .why-card:hover{background:rgba(255,255,255,0.06);transform:translateY(-4px);border-color:rgba(76,175,80,0.4);}
  .why-num{font-family:var(--font-condensed);font-size:12px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:var(--green-bright, #4CAF50);margin-bottom:12px;}
  .why-title{font-family:var(--font-condensed);font-size:18px;font-weight:700;letter-spacing:0.05em;color:#FFFFFF;margin-bottom:10px;text-transform:uppercase;}
  .why-desc{font-size:14px;font-weight:300;line-height:1.75;color:rgba(255,255,255,0.8);}
  
  /* STOCKISTS */
  .stockists-section{padding:120px 60px;background:var(--bg-main);border-top:1px solid var(--border-color);}
  .stockists-section h2{font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:800;color:var(--text-main);line-height:1.1;margin-bottom:16px;text-transform:uppercase;}
  .stockist-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:60px;}
  .stockist-card{background:var(--bg-card);border:1px solid var(--border-color);border-radius:0;padding:36px 28px;transition:all .3s;}
  .stockist-card:hover{background:var(--bg-muted);transform:translateY(-4px);box-shadow:0 12px 30px rgba(0,0,0,0.15);border-color:rgba(76,175,80,0.4);}
  .st-icon{font-size:28px;margin-bottom:16px;color:var(--green-bright, #4CAF50);}
  .st-name{font-family:var(--font-condensed);font-size:16px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-main);margin-bottom:8px;}
  .st-desc{font-size:14px;font-weight:300;line-height:1.7;color:var(--text-muted);}
  .st-count{font-family:var(--font-condensed);font-size:16px;font-weight:700;color:var(--green-bright, #4CAF50);margin-top:16px;}
  
  /* CTA */
  .cta-band{padding:100px 60px;background:var(--dark-2);border-top:1px solid rgba(255,255,255,0.08);}
  .cta-inner{max-width:1300px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:40px;flex-wrap:wrap;}
  .cta-band h2{font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:800;color:#FFFFFF;text-transform:uppercase;}
  .btn-primary{font-family:var(--font-condensed);font-size:13px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--white);background:var(--green);padding:18px 48px;text-decoration:none;display:inline-block;white-space:nowrap;transition:background .2s;}
  .btn-primary:hover{background:var(--green-light, #4CAF50);}
  .footer-mini{background:var(--black);border-top:1px solid rgba(255,255,255,0.06);padding:32px 60px;display:flex;align-items:center;justify-content:space-between;}
  .footer-mini p{font-size:12px;color:rgba(255,255,255,0.2);font-weight:300;}
  .footer-mini a{color:var(--silver-light);text-decoration:none;font-family:var(--font-condensed);font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;}
  @media(max-width:900px){nav,.sub-hero-content,section.pad,.why-section,.stockists-section,.cta-band,.footer-mini{padding-left:24px;padding-right:24px;}.two-col{grid-template-columns:1fr;gap:48px;}.cats-grid{grid-template-columns:1fr 1fr;}.why-grid{grid-template-columns:1fr;}.stockist-grid{grid-template-columns:1fr 1fr;}}
  @media(max-width:600px){.cats-grid,.stockist-grid{grid-template-columns:1fr;}}` }} />
      <div dangerouslySetInnerHTML={{ __html: `


<section class="sub-hero">
  <div class="sub-hero-bg"></div>
  <video class="sub-hero-video" autoplay muted loop playsinline>
    <source src="/media/phones/hero.mp4" type="video/mp4">
  </video>
  <div class="sub-hero-overlay"></div>
  <div class="sub-hero-content">
    <h1>Asia Phones<br>&amp; Accessories<br> Connecting Nigeria</h1>
    <p class="sub-hero-desc">Wholesale distributor of mobile phones and accessories into Northern Nigeria's fast-growing technology retail ecosystem — supplying thousands of stockists with the devices that connect a nation.</p>
  </div>
</section>

<section class="pad" style="background:var(--dark-2);">
  <div class="inner">
    <h2>Northern Nigeria's<br>Technology Wholesale Hub</h2>
    <div class="two-col">
      <div class="body-text">
        <p>Asia Phones &amp; Accessories is the consumer electronics and mobile distribution arm of Asia Group of Companies — serving as the wholesale conduit between global phone manufacturers and the thousands of phone retailers, market traders, and electronics stockists across Northern Nigeria.</p>
        <p>Nigeria is one of the world's most rapidly growing smartphone markets. With a young, mobile-first population and rising smartphone penetration, the demand for affordable, quality devices and accessories has never been greater. Asia Phones is positioned to serve this demand at scale.</p>
        <p>Leveraging Asia Group's proven distribution infrastructure, warehousing capability, and decades of market relationships, Asia Phones ensures availability, reliability, and competitive wholesale pricing across all device tiers.</p>
      </div>
      <div class="media-box">
        <video class="overview-video" autoplay muted loop playsinline>
          <source src="/media/phones/media.mp4" type="video/mp4">
        </video>
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
        <span class="cat-icon"><i class="ri-smartphone-line"></i></span>
        <div class="cat-name">Smartphones</div>
        <p class="cat-desc">Android smartphones across entry-level, mid-range, and flagship tiers. The core driver of Nigeria's fast-growing mobile retail trade.</p>
        <div class="tags">
          <span class="tag">Tecno</span>
          <span class="tag">Infinix</span>
          <span class="tag">Samsung</span>
          <span class="tag">Xiaomi</span>
          <span class="tag">Itel</span>
          <span class="tag">Oppo</span>
        </div>
      </div>

      <div class="cat-card">
        <span class="cat-icon"><i class="ri-device-line"></i></span>
        <div class="cat-name">Feature Phones</div>
        <p class="cat-desc">Durable, affordable feature phones with ultra-long battery life and torchlight functionality. Consistently high demand in rural and commercial trading centers.</p>
        <div class="tags">
          <span class="tag">Itel</span>
          <span class="tag">Tecno</span>
          <span class="tag">Nokia</span>
          <span class="tag">Gionee</span>
        </div>
      </div>

      <div class="cat-card">
        <span class="cat-icon"><i class="ri-headphone-line"></i></span>
        <div class="cat-name">Audio Accessories</div>
        <p class="cat-desc">Earphones, true wireless earbuds (TWS), Bluetooth neckbands, and portable wireless speakers with rapid stock turnover at retail level.</p>
        <div class="tags">
          <span class="tag">Oraimo</span>
          <span class="tag">JBL</span>
          <span class="tag">Awei</span>
          <span class="tag">Havit</span>
          <span class="tag">Sony</span>
        </div>
      </div>

      <div class="cat-card">
        <span class="cat-icon"><i class="ri-battery-line"></i></span>
        <div class="cat-name">Chargers &amp; Power Banks</div>
        <p class="cat-desc">Fast chargers, heavy-duty power banks (10,000mAh–40,000mAh), braided Type-C &amp; Lightning cables, and multi-socket adapters in steady year-round demand.</p>
        <div class="tags">
          <span class="tag">Oraimo</span>
          <span class="tag">Anker</span>
          <span class="tag">Romoss</span>
          <span class="tag">Baseus</span>
          <span class="tag">New Vision</span>
        </div>
      </div>

      <div class="cat-card">
        <span class="cat-icon"><i class="ri-shield-line"></i></span>
        <div class="cat-name">Phone Protection</div>
        <p class="cat-desc">Full-coverage 9D/11D tempered glass protectors, shockproof silicone cases, privacy filters, and camera lens guards for all top smartphone models.</p>
        <div class="tags">
          <span class="tag">9D Glass</span>
          <span class="tag">X-Level</span>
          <span class="tag">Nillkin</span>
          <span class="tag">GKK</span>
          <span class="tag">Armor Cases</span>
        </div>
      </div>

      <div class="cat-card">
        <span class="cat-icon"><i class="ri-wifi-line"></i></span>
        <div class="cat-name">Wearables &amp; Networking</div>
        <p class="cat-desc">Smart watches, fitness trackers, 4G/5G mobile broadband routers (MiFi), high-speed memory cards, flash drives, and display accessories.</p>
        <div class="tags">
          <span class="tag">Oraimo Watch</span>
          <span class="tag">SanDisk</span>
          <span class="tag">ZTE Routers</span>
          <span class="tag">Kingston</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="why-section">
  <div class="why-inner">
    
    <h2>The Advantage of<br>Asia's Distribution Power</h2>
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
        <div class="st-icon"><i class="ri-store-2-line"></i></div>
        <div class="st-name">Phone Shops &amp; Kiosks</div>
        <p class="st-desc">Independent phone retailers and kiosks in markets, shopping centres, and roadside locations across Northern Nigeria.</p>
      </div>
      <div class="stockist-card">
        <div class="st-icon"><i class="ri-shopping-cart-line"></i></div>
        <div class="st-name">Electronics Supermarkets</div>
        <p class="st-desc">Formal electronics retail chains and multi-brand stores requiring consistent wholesale supply across multiple locations.</p>
      </div>
      <div class="stockist-card">
        <div class="st-icon"><i class="ri-store-3-line"></i></div>
        <div class="st-name">Market Traders</div>
        <p class="st-desc">Open-market phone traders in Kano's Computer Village and electronics sections of major markets — high-volume, fast-moving accounts.</p>
      </div>
      <div class="stockist-card">
        <div class="st-icon"><i class="ri-earth-line"></i></div>
        <div class="st-name">Cross-Border Buyers</div>
        <p class="st-desc">Bulk buyers supplying Cameroon, Chad, Niger, and other neighbouring markets through Asia Group's established cross-border trade infrastructure.</p>
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
      <h2 style="font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:800;color:var(--white);line-height:1.1;text-transform:uppercase;">Find Us Near You</h2>
      <p style="font-size:15px;font-weight:300;line-height:1.85;color:rgba(255,255,255,0.8);">Asia Phones operates dedicated phones and accessories distribution hubs across Kano. Every location is fully staffed, stocked, and ready to serve — from walk-in buyers to contract wholesale accounts.</p>
    </div>
    ` }} />

      <LocationsGrid locations={subsidiaryLocations} hideFilter={true} />

<div dangerouslySetInnerHTML={{ __html: `

    <div style="margin-top:24px;display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:12px;">
      <a href="/operations" class="btn-primary" style="background:var(--white); color:#000; font-weight:700;">View All 19 Asia Group Locations →</a>
    </div>
` }} />
  </div>
</section>
<div dangerouslySetInnerHTML={{ __html: `

<section class="cta-band">
  <div class="cta-inner">
    <h2 style="font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:800;color:#FFFFFF;text-transform:uppercase;">Ready to stock the<br>latest devices?</h2>
    <a href="/#partner-cta" class="btn-primary">Enquire as a Stockist →</a>
  </div>
</section>

` }} />
    </div>
  );
}
