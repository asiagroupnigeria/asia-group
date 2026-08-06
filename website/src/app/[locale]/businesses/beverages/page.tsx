
import React from 'react';
import { LocationsGrid } from '@/components/operations/LocationsGrid';
import { locations } from '@/data/locations';

export default function BeveragesPage() {
  const subsidiaryLocations = locations.filter(loc => loc.subsidiaryId === 'beverages');

  return (
    <div className="beverages-page">
      <style dangerouslySetInnerHTML={{ __html: `
  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
  
  html{scroll-behavior:smooth;}body{font-family:var(--font-body);background:var(--bg-main);color:var(--text-main);overflow-x:hidden;}
  nav{position:fixed;top:0;left:0;right:0;height:80px;background:rgba(255,255,255,0.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(0,0,0,0.06);display:flex;align-items:center;justify-content:space-between;padding:0 60px;z-index:1000;}
  .nav-back{display:flex;align-items:center;gap:10px;font-family:var(--font-condensed);font-size:12px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-muted);text-decoration:none;transition:color .2s;}.nav-back:hover{color:var(--text-main);}
  .nav-logo{display:flex;align-items:center;gap:12px;text-decoration:none;font-family:var(--font-condensed);font-size:17px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-main);}.nav-logo img{height:40px;}
  .nav-cta{font-family:var(--font-condensed);font-size:12px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--white);background:var(--green);padding:10px 24px;text-decoration:none;}
  .sub-hero{padding-top:80px;min-height:70vh;position:relative;display:flex;align-items:flex-end;}
    .sub-hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,#081c2e 0%,#0A0A0A 60%);} 
    .sub-hero-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;filter:brightness(0.55);} 
    .overview-video{width:100%;height:100%;object-fit:cover;display:block;border:0;background:#000;}
  .sub-hero-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,10,10,1) 0%,rgba(10,10,10,0.4) 60%,transparent 100%);}
  .sub-hero-content{position:relative;z-index:2;padding:80px 60px;max-width:1300px;margin:0 auto;width:100%;}
  h1{font-family:var(--font-display);font-size:clamp(48px,6vw,88px);font-weight:bold;line-height:1.0;color:var(--white);max-width:800px;}h1 em{font-style:italic;color:var(--text-muted);}
  .sub-hero-desc{font-size:17px;font-weight:300;line-height:1.85;color:rgba(255,255,255,0.6);max-width:580px;margin-top:24px;}
  .section-tag{font-family:var(--font-condensed);font-size:11px;font-weight:600;letter-spacing:0.3em;text-transform:uppercase;color:var(--text-muted);display:flex;align-items:center;gap:12px;margin-bottom:20px;}.section-tag::before{content:'';display:block;width:30px;height:1px;background:var(--text-muted);}
  .content-section{padding:120px 60px;background:var(--bg-card);}
  .content-inner{max-width:1300px;margin:0 auto;}
  h2{font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:bold;color:var(--text-main);line-height:1.1;margin-bottom:16px;}h2 em{font-style:italic;color:var(--text-muted);}
  /* Headings on dark sections should be light for contrast */
  .content-section[style*="background:var(--dark)"] h2,
  section[style*="background:var(--dark)"] h2,
  [style*="background:var(--dark)"] h2 {
    color: var(--white);
  }
  .content-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;margin-top:60px;}
  .overview-text{font-size:15px;font-weight:300;line-height:1.85;color:rgba(0,0,0,0.55);}
  .overview-text p+p{margin-top:16px;}
  .overview-visual{aspect-ratio:4/3;background:var(--bg-muted);border:1px solid rgba(0,0,0,0.06);display:flex;align-items:center;justify-content:center;}
  .overview-visual p{font-family:var(--font-condensed);font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(0,0,0,0.15);text-align:center;padding:20px;}
  .brands-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:rgba(0,0,0,0.04);margin-top:60px;}
  .brand-card{background:var(--bg-main);padding:40px 32px;}
  .brand-icon{font-size:36px;margin-bottom:20px;display:block;}
  .brand-logo{height:48px;width:auto;display:block;margin-bottom:12px;}
  .brand-name{font-family:var(--font-condensed);font-size:18px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:var(--text-main);margin-bottom:8px;}
  .brand-parent{font-family:var(--font-condensed);font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:var(--text-muted);margin-bottom:12px;}
  .brand-desc{font-size:13px;line-height:1.7;color:rgba(0,0,0,0.45);font-weight:300;}
  .placeholder-note{font-size:12px;color:rgba(0,0,0,0.2);font-style:italic;margin-top:8px;}
  .clients-section{padding:120px 60px;background:var(--bg-main);}
  .client-types{display:grid;grid-template-columns:repeat(4,1fr);gap:2px;background:rgba(0,0,0,0.04);margin-top:60px;}
  .client-type{background:var(--bg-card);padding:36px 28px;}
  .ct-icon{font-size:28px;margin-bottom:16px;}
  .ct-name{font-family:var(--font-condensed);font-size:15px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:var(--text-main);margin-bottom:8px;}
  .ct-desc{font-size:13px;font-weight:300;line-height:1.65;color:rgba(0,0,0,0.45);}
  .ct-count{font-family:var(--font-condensed);font-size:22px;font-weight:700;color:var(--text-muted);margin-top:16px;}
  .cta-band{padding:100px 60px;background:var(--bg-card);}
  .cta-band-inner{max-width:1300px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:40px;flex-wrap:wrap;}
  .cta-band h2{color:var(--text-main);}
  .btn-primary{font-family:var(--font-condensed);font-size:13px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--bg-main);background:var(--text-muted);padding:18px 48px;text-decoration:none;display:inline-block;white-space:nowrap;transition:background .2s;}.btn-primary:hover{background:var(--text-main);}
  .footer-mini{background:var(--black);border-top:1px solid rgba(255,255,255,0.06);padding:32px 60px;display:flex;align-items:center;justify-content:space-between;}
  .footer-mini p{font-size:12px;color:rgba(255,255,255,0.2);font-weight:300;}
  .footer-mini a{color:var(--silver-light);text-decoration:none;font-family:var(--font-condensed);font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;}
  @media(max-width:900px){nav,.sub-hero-content,.content-section,.clients-section,.cta-band,.footer-mini{padding-left:24px;padding-right:24px;}.content-grid{grid-template-columns:1fr;gap:48px;}.brands-grid{grid-template-columns:1fr 1fr;}.client-types{grid-template-columns:1fr 1fr;}}
  @media(max-width:600px){.brands-grid,.client-types{grid-template-columns:1fr;}}` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<section class="sub-hero">
  <div class="sub-hero-bg"></div>
  <video class="sub-hero-video" autoplay muted loop playsinline>
    <source src="/media/beverages/Hero.mp4" type="video/mp4">
  </video>
  <div class="sub-hero-overlay"></div>
  <div class="sub-hero-content">
    
    
    <h1>Asia Beverages<br> Refreshing Africa,<br>One Delivery at a Time</h1>
    <p class="sub-hero-desc">Nigeria's preferred wholesale distributor for leading beverage brands — connecting manufacturers to retailers, hospitality groups, institutions, and bulk buyers across the region.</p>
    </div>
</section>

<section class="content-section">
  <div class="content-inner">
    
    <h2>Cold Chain Expertise.<br>Nationwide Reach.</h2>
    <div class="content-grid">
      <div class="overview-text">
        <!-- PLACEHOLDER: Full overview from Beverages MD session -->
        <p>Asia Beverages is the beverage distribution arm of Asia Group of Companies, operating as the authorised wholesale distributor for 7UP Bottling Company, Mamuda Group, and other leading beverage manufacturers across Northern Nigeria and beyond.</p>
        <p>Backed by Asia Group's extensive logistics infrastructure, cold chain capabilities, and deep trade relationships, Asia Beverages ensures beverage brands reach every corner of the market — from high-volume supermarkets to individual retail kiosks.</p>
        <p style="font-size:13px;color:rgba(255,255,255,0.3);margin-top:24px;">Full company overview, distribution volume figures, and client details to be confirmed with Beverages MD after session.</p>
      </div>
      <div class="overview-visual">
        <video class="overview-video" autoplay muted playsinline loop>
          <source src="/media/beverages/warehouse.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
</section>

<section class="content-section" style="background:var(--dark);">
  <div class="content-inner">
    
    <h2>The Brands Behind<br>the Thirst</h2>
    <!-- PLACEHOLDER: Full brand list and details from Beverages MD session -->
    <div class="brands-grid">
      <div class="brand-card">
        <img class="brand-logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pepsi_logo_2014.svg" alt="Pepsi logo" />
        <div class="brand-name">7UP / Pepsi Range</div>
        <div class="brand-parent">7UP Bottling Company Nigeria</div>
        <p class="brand-desc">7UP, Pepsi, Mirinda, Mountain Dew, Lipton (iced tea), Aquafina (bottled water).</p>
      </div>

      <div class="brand-card">
        <img class="brand-logo" src="/media/logos/partner-mamuda.svg" alt="Mamuda logo" />
        <div class="brand-name">Mamuda Beverages</div>
        <div class="brand-parent">Mamuda Group</div>
        <p class="brand-desc">Mamuda cola and fruit‑flavoured soft drinks, bottled juices and local SKUs sold across retail outlets.</p>
      </div>

      <div class="brand-card">
        <img class="brand-logo" src="https://upload.wikimedia.org/wikipedia/commons/4/49/Coca-Cola_logo.svg" alt="Coca-Cola logo" />
        <div class="brand-name">Coca‑Cola Portfolio</div>
        <div class="brand-parent">Coca‑Cola HBC / Coca‑Cola Nigeria</div>
        <p class="brand-desc">Coca‑Cola, Fanta, Sprite and sparkling mixers; bottled water and hydration SKUs for retail and food service.</p>
      </div>

      <div class="brand-card">
        <img class="brand-logo" src="/media/logos/partner-ara.svg" alt="Ara logo" />
        <div class="brand-name">Ara Beverages</div>
        <div class="brand-parent">Ara</div>
        <p class="brand-desc">Affordable soft drink variants and bottled water SKUs aimed at mass‑market retail.</p>
      </div>

      <div class="brand-card">
        <img class="brand-logo" src="/media/logos/partner-liv.svg" alt="Liv Water logo" />
        <div class="brand-name">Liv Water</div>
        <div class="brand-parent">Liv</div>
        <p class="brand-desc">Packaged bottled water in retail and bulk formats for events, offices and institutional supply.</p>
      </div>

      <div class="brand-card">
        <img class="brand-logo" src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Nestl%C3%A9_logo.svg" alt="Nestle logo" />
        <div class="brand-name">Nestlé Beverages</div>
        <div class="brand-parent">Nestlé</div>
        <p class="brand-desc">Nescafé, Milo, Nido/powdered milk products and bottled water ranges (select regional SKUs).</p>
      </div>

      <div class="brand-card">
        <img class="brand-logo" src="/media/logos/partner-cway.svg" alt="Cway logo" />
        <div class="brand-name">Cway</div>
        <div class="brand-parent">Cway</div>
        <p class="brand-desc">Cola, cream‑soda and fruit‑flavoured soft drinks commonly stocked by small retailers.</p>
      </div>

      <div class="brand-card">
        <img class="brand-logo" src="/media/logos/partner-halib.svg" alt="Halib logo" />
        <div class="brand-name">Halib</div>
        <div class="brand-parent">Halib</div>
        <p class="brand-desc">Dairy‑based drinks, powdered milk mixes and complementary beverage SKUs for retail.</p>
      </div>

      <div class="brand-card">
        <img class="brand-logo" src="/media/logos/partner-gofresh.svg" alt="Go Fresh logo" />
        <div class="brand-name">Go Fresh</div>
        <div class="brand-parent">Go Fresh</div>
        <p class="brand-desc">Ready‑to‑drink juices in mango, orange and mixed fruit SKUs for retail and horeca channels.</p>
      </div>

      <div class="brand-card" style="opacity:0.95;">
        <img class="brand-logo" src="/media/logos/partner-chivita.svg" alt="Chivita logo" />
        <div class="brand-name">Chivita</div>
        <div class="brand-parent">Chivita (Chi Limited)</div>
        <p class="brand-desc">Chivita 100% juices (orange, mango, apple) and value juice lines for retail and food service.</p>
      </div>

      <div class="brand-card">
        <img class="brand-logo" src="/media/logos/partner-maltina.svg" alt="Maltina logo" />
        <div class="brand-name">Maltina</div>
        <div class="brand-parent">Maltina (Beverage Company)</div>
        <p class="brand-desc">Malt beverage SKUs (ready‑to‑drink bottles and cartons) commonly sold in retail outlets.</p>
      </div>

      <div class="brand-card">
        <img class="brand-logo" src="/media/logos/partner-amstel.svg" alt="Amstel Malta logo" />
        <div class="brand-name">Amstel Malta</div>
        <div class="brand-parent">Amstel Malta</div>
        <p class="brand-desc">Amstel Malta ready‑to‑drink malt beverage SKUs for retail and event supply.</p>
      </div>

      <div class="brand-card">
        <img class="brand-logo" src="/media/logos/partner-bigi.svg" alt="Bigi logo" />
        <div class="brand-name">Bigi</div>
        <div class="brand-parent">Bigi</div>
        <p class="brand-desc">Bigi Cola, Bigi fruit‑flavoured sodas and mixer SKUs for informal retail channels.</p>
      </div>

      <div class="brand-card">
        <img class="brand-logo" src="/media/logos/partner-lacasera.svg" alt="La Casera logo" />
        <div class="brand-name">La Casera</div>
        <div class="brand-parent">La Casera</div>
        <p class="brand-desc">La Casera sparkling apple drink and fruit mixers for hospitality and retail.</p>
      </div>

      <div class="brand-card">
        <img class="brand-logo" src="/media/logos/partner-threecrowns.svg" alt="Three Crowns/Peak logo" />
        <div class="brand-name">Three Crowns / Peak</div>
        <div class="brand-parent">FrieslandCampina / Peak</div>
        <p class="brand-desc">Three Crowns and Peak UHT milk, plus powdered milk SKUs for retail and institutional buyers.</p>
      </div>

      <div class="brand-card">
        <img class="brand-logo" src="/media/logos/partner-verna.svg" alt="Verna/Eva logo" />
        <div class="brand-name">Verna / Eva Water</div>
        <div class="brand-parent">Packaged Water Brands</div>
        <p class="brand-desc">Verna and Eva bottled water SKUs in retail packs and bulk formats for events and offices.</p>
      </div>
    </div>
  </div>
</section>

<section class="clients-section">
  <div class="content-inner">
    
    <h2>Every Channel,<br>Every Customer</h2>
    <!-- PLACEHOLDER: Client numbers from Beverages MD session -->
    <div class="client-types">
      <div class="client-type">
        <div class="ct-icon"><i class="ri-store-2-line"></i></div>
        <div class="ct-name">Retail Stores &amp; Supermarkets</div>
        <p class="ct-desc">Formal retail from major supermarket chains to neighborhood shops. Consistent stock and reliable delivery windows.</p>
        <div class="ct-count"></div>
      </div>
      <div class="client-type">
        <div class="ct-icon"><i class="ri-hotel-line"></i></div>
        <div class="ct-name">Hospitality &amp; Food Service</div>
        <p class="ct-desc">Hotels, restaurants, fast food outlets, event centres, and catering companies requiring high-volume, reliable beverage supply.</p>
        <div class="ct-count"></div>
      </div>
      <div class="client-type">
        <div class="ct-icon"><i class="ri-school-line"></i></div>
        <div class="ct-name">Institutions &amp; Corporate</div>
        <p class="ct-desc">Schools, hospitals, factories, and corporate offices with recurring bulk beverage requirements supplied on contract terms.</p>
        <div class="ct-count"></div>
      </div>
      <div class="client-type">
        <div class="ct-icon"><i class="ri-shopping-cart-line"></i></div>
        <div class="ct-name">Bulk Buyers &amp; Sub-Distributors</div>
        <p class="ct-desc">Downstream distributors and bulk buyers operating in smaller markets served by Asia Beverages' wholesale pricing and logistics.</p>
        <div class="ct-count"></div>
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
      <p style="font-size:15px;font-weight:300;line-height:1.85;color:rgba(255,255,255,0.5);">Asia Beverages operates multiple beverages distribution and storage facilities across Kano. Every location is fully staffed, stocked, and ready to serve — from walk-in buyers to contract wholesale accounts.</p>
    </div>
    ` }} />

      <LocationsGrid locations={subsidiaryLocations} hideFilter={true} />

<div dangerouslySetInnerHTML={{ __html: `

    <div style="margin-top:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <p style="font-size:13px;color:var(--muted);font-weight:300;">* Location cards updated with real data and photographs after field visit sessions.</p>
      <a href="../operations/index.html" class="btn-primary" style="margin-top:24px; background:var(--white); color:#000;">View All 19 Asia Group Locations →</a>
    </div>
` }} />
  </div>
</section>
<div dangerouslySetInnerHTML={{ __html: `

<section class="cta-band">
  <div class="cta-band-inner">
    <h2>Bulk beverage orders<br>at competitive pricing?</h2>
    <a href="../index.html#contact" class="btn-primary">Enquire as a Buyer →</a>
  </div>
</section>

` }} />
    </div>
  );
}
