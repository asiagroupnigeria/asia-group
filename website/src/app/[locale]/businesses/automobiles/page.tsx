
import React from 'react';

export default function AutomobilesPage() {
  return (
    <div className="automobiles-page">
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

  .sub-hero { padding-top:80px; min-height:75vh; position:relative; display:flex; align-items:flex-end; }
  .sub-hero-bg {
    position:absolute; inset:0;
    /* MEDIA: Automobiles hero — truck lineup, vehicle fleet, industrial setting
       File: ../media/subsidiaries/automobiles-hero.jpg
       Recommended: SinoTruck lineup, fleet yard, or industrial operations */
    background: linear-gradient(135deg, #1a0a0a 0%, #0A0A0A 60%, #1a1209 100%);
  }
  .sub-hero-overlay { position:absolute; inset:0; background:linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.4) 60%, transparent 100%); }
  .sub-hero-content { position:relative; z-index:2; padding:80px 60px; max-width:1300px; margin:0 auto; width:100%; }
  .breadcrumb { display:flex; align-items:center; gap:10px; font-family:var(--font-condensed); font-size:11px; font-weight:500; letter-spacing:0.2em; text-transform:uppercase; color:var(--text-muted); margin-bottom:24px; }
  .breadcrumb a { color:var(--text-muted); text-decoration:none; }
  .sub-eyebrow { font-family:var(--font-condensed); font-size:12px; font-weight:600; letter-spacing:0.3em; text-transform:uppercase; color:var(--accent-light); display:flex; align-items:center; gap:12px; margin-bottom:20px; }
  .sub-eyebrow::before { content:''; display:block; width:30px; height:1px; background:var(--accent-light); }
  h1 { font-family:var(--font-display); font-size:clamp(48px,6vw,88px); font-weight:300; line-height:1.0; color:var(--text-main); max-width:800px; }
  h1 em { font-style:italic; color:var(--text-muted); }
  .sub-hero-desc { font-size:17px; font-weight:300; line-height:1.85; color:rgba(255,255,255,0.6); max-width:580px; margin-top:24px; }
  .sub-hero-stats { display:flex; gap:0; margin-top:48px; border:1px solid rgba(255,255,255,0.08); width:fit-content; }
  .sub-stat { padding:24px 40px; border-right:1px solid rgba(0,0,0,0.08); background:rgba(10,10,10,0.7); backdrop-filter:blur(10px); }
  .sub-stat:last-child { border-right:none; }
  .sub-stat-number { font-family:var(--font-condensed); font-size:28px; font-weight:700; color:var(--text-muted); line-height:1; }
  .sub-stat-label { font-family:var(--font-body); font-size:11px; font-weight:400; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); margin-top:6px; }
  .section-tag { font-family:var(--font-condensed); font-size:11px; font-weight:600; letter-spacing:0.3em; text-transform:uppercase; color:var(--text-muted); display:flex; align-items:center; gap:12px; margin-bottom:20px; }
  .section-tag::before { content:''; display:block; width:30px; height:1px; background:var(--text-muted); }

  /* BRANDS */
  .brands-section { padding:120px 60px; background:var(--bg-card); }
  .brands-inner { max-width:1300px; margin:0 auto; }
  .brands-grid { display:grid; grid-template-columns:1fr 1fr; gap:2px; background:rgba(0,0,0,0.04); margin-top:60px; }
  .brand-feature { background:var(--bg-main); padding:60px 52px; display:flex; flex-direction:column; position:relative; overflow:hidden; }
  .brand-feature::after { content:''; position:absolute; top:0; left:0; right:0; height:3px; }
  .brand-feature.sinot::after { background: #C0392B; }
  .brand-feature.mikano::after { background: var(--green-bright); }
  .brand-logo-area {
    height:80px;
    /* MEDIA: Replace with brand logo images
       File: ../media/logos/brand-sinотruck.svg and brand-mikano.svg */
    display:flex; align-items:center; margin-bottom:28px;
  }
  .brand-logo-text { font-family:var(--font-condensed); font-size:32px; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; }
  .brand-logo-text.sinot { color:rgba(192,57,43,0.8); }
  .brand-logo-text.mikano { color:rgba(76,175,80,0.8); }
  .brand-logo-sub { font-family:var(--font-condensed); font-size:11px; font-weight:600; letter-spacing:0.2em; text-transform:uppercase; color:var(--text-muted); margin-top:2px; }
  .brand-feature h3 { font-family:var(--font-display); font-size:30px; font-weight:400; color:var(--text-main); line-height:1.2; margin-bottom:16px; }
  .brand-feature p { font-size:14px; font-weight:300; line-height:1.8; color:rgba(0,0,0,0.5); }
  .brand-specs { margin-top:28px; display:grid; grid-template-columns:1fr 1fr; gap:1px; background:rgba(0,0,0,0.06); }
  .brand-spec { background:var(--bg-card); padding:16px 18px; }
  .brand-spec-value { font-family:var(--font-condensed); font-size:18px; font-weight:700; color:var(--text-muted); }
  .brand-spec-label { font-size:10px; color:var(--text-muted); letter-spacing:0.08em; text-transform:uppercase; margin-top:4px; }

  /* PRODUCT SHOWCASE */
  .products-section { padding:120px 60px; background:var(--bg-main); }
  .products-inner { max-width:1300px; margin:0 auto; }
  .vehicles-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; background:rgba(0,0,0,0.04); margin-top:60px; }
  .vehicle-card { background:var(--bg-card); overflow:hidden; }
  .vehicle-img {
    aspect-ratio:16/9;
    /* MEDIA: Vehicle product photos
       SinoTruck range: heavy duty trucks, dump trucks, tractor heads, tankers
       Mikano: generators, buses
       File: ../media/automobiles/[vehicle-model].jpg */
    background:var(--bg-muted); display:flex; align-items:center; justify-content:center;
    position:relative;
  }
  .vehicle-img p { font-family:var(--font-condensed); font-size:10px; letter-spacing:0.15em; text-transform:uppercase; color:rgba(0,0,0,0.15); text-align:center; padding:16px; }
  .vehicle-badge { position:absolute; top:14px; left:14px; background:rgba(10,10,10,0.8); color:var(--text-muted); font-family:var(--font-condensed); font-size:10px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; padding:5px 10px; border:1px solid rgba(212,172,13,0.3); }
  .vehicle-info { padding:24px 24px 28px; }
  .vehicle-brand { font-family:var(--font-condensed); font-size:10px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:var(--accent-light); margin-bottom:8px; }
  .vehicle-name { font-family:var(--font-condensed); font-size:17px; font-weight:700; letter-spacing:0.04em; color:var(--text-main); margin-bottom:8px; }
  .vehicle-desc { font-size:13px; font-weight:300; line-height:1.65; color:rgba(0,0,0,0.45); margin-bottom:16px; }
  .vehicle-specs-row { display:flex; gap:20px; flex-wrap:wrap; }
  .vehicle-spec { }
  .vehicle-spec-val { font-family:var(--font-condensed); font-size:14px; font-weight:700; color:var(--text-main); }
  .vehicle-spec-lbl { font-size:10px; color:var(--text-muted); letter-spacing:0.06em; text-transform:uppercase; margin-top:2px; }

  /* CLIENTS */
  .clients-section { padding:120px 60px; background:var(--bg-card); }
  .clients-inner { max-width:1300px; margin:0 auto; display:grid; grid-template-columns:1fr 1.2fr; gap:80px; align-items:start; }
  .clients-content h2 { font-family:var(--font-display); font-size:clamp(32px,4vw,52px); font-weight:300; color:var(--text-main); line-height:1.1; }
  .clients-content h2 em { font-style:italic; color:var(--text-muted); }
  .clients-content p { font-size:15px; font-weight:300; line-height:1.85; color:rgba(0,0,0,0.55); margin-top:16px; }
  .client-sectors { margin-top:36px; display:flex; flex-direction:column; gap:0; border:1px solid rgba(0,0,0,0.06); }
  .client-sector { display:flex; align-items:center; gap:20px; padding:20px 24px; border-bottom:1px solid rgba(0,0,0,0.04); }
  .client-sector:last-child { border-bottom:none; }
  .client-sector-icon { font-size:22px; flex-shrink:0; }
  .client-sector-name { font-family:var(--font-condensed); font-size:14px; font-weight:600; letter-spacing:0.06em; color:var(--text-main); flex:1; }
  .client-sector-count { font-family:var(--font-condensed); font-size:11px; font-weight:600; color:var(--text-muted); }
  .clients-visual {
    /* MEDIA: Client operations, vehicle in use, construction site or logistics
       File: ../media/subsidiaries/automobiles-inuse.jpg */
    aspect-ratio:4/3; background:var(--bg-muted); border:1px solid rgba(0,0,0,0.06);
    display:flex; align-items:center; justify-content:center;
  }
  .clients-visual p { font-family:var(--font-condensed); font-size:10px; letter-spacing:0.15em; text-transform:uppercase; color:rgba(0,0,0,0.15); text-align:center; padding:20px; }

  .cta-band { padding:100px 60px; background:var(--bg-muted); border-top:1px solid rgba(0,0,0,0.04); }
  .cta-band-inner { max-width:1300px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap; }
  .cta-band h2 { font-family:var(--font-display); font-size:clamp(32px,4vw,52px); font-weight:300; color:var(--text-main); }
  .cta-band h2 em { font-style:italic; color:var(--text-muted); }
  .btn-primary { font-family:var(--font-condensed); font-size:13px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:var(--bg-main); background:var(--text-muted); padding:18px 48px; text-decoration:none; display:inline-block; white-space:nowrap; transition:background 0.2s; }
  .btn-primary:hover { background:var(--text-main); }
  .footer-mini { background:var(--black); border-top:1px solid rgba(255,255,255,0.06); padding:32px 60px; display:flex; align-items:center; justify-content:space-between; }
  .footer-mini p { font-size:12px; color:rgba(255,255,255,0.2); font-weight:300; }
  .footer-mini a { color:var(--silver-light); text-decoration:none; font-family:var(--font-condensed); font-size:12px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; }

  @media (max-width:900px) {
    nav, .sub-hero-content, .brands-section, .products-section, .clients-section, .cta-band, .footer-mini { padding-left:24px; padding-right:24px; }
    .brands-grid { grid-template-columns:1fr; }
    .vehicles-grid { grid-template-columns:1fr 1fr; }
    .clients-inner { grid-template-columns:1fr; gap:48px; }
  }
  @media (max-width:600px) { .vehicles-grid { grid-template-columns:1fr; } }` }} />
      <div dangerouslySetInnerHTML={{ __html: `


<section class="sub-hero">
  <div class="sub-hero-bg"></div>
  <div class="sub-hero-overlay"></div>
  <div class="sub-hero-content">
    <div class="breadcrumb">
      <a href="../index.html">Asia Group</a><span>/</span>
      <a href="../index.html#subsidiaries">Subsidiaries</a><span>/</span>
      <span style="color:var(--white);">Asia Automobiles</span>
    </div>
    <div class="sub-eyebrow">Commercial Vehicles &amp; Industrial Equipment</div>
    <h1>Asia Automobiles<br>— Powering Africa's<br>Infrastructure</h1>
    <p class="sub-hero-desc">
      Authorised dealer and distributor for SinoTruck and Mikano Motors — supplying commercial trucks, generators, and industrial vehicles to Nigeria's construction, logistics, and energy sectors.
    </p>
    <div class="sub-hero-stats">
      <div class="sub-stat">
        <div class="sub-stat-number">2</div>
        <div class="sub-stat-label">Global Principals</div>
      </div>
      <div class="sub-stat">
        <!-- PLACEHOLDER: Units sold / fleet clients from Automobiles MD session -->
        <div class="sub-stat-number">[ # ]</div>
        <div class="sub-stat-label">Units Delivered</div>
      </div>
      <div class="sub-stat">
        <div class="sub-stat-number">[ # ]</div>
        <div class="sub-stat-label">Fleet Clients</div>
      </div>
    </div>
  </div>
</section>

<section class="brands-section">
  <div class="brands-inner">
    
    <h2 style="font-family:var(--font-display); font-size:clamp(32px,4vw,52px); font-weight:300; color:var(--white); line-height:1.1;">
      World-Class Vehicles,<br>African Expertise
    </h2>
    <div class="brands-grid">
      <div class="brand-feature sinot">
        <div class="brand-logo-area">
          <!-- MEDIA: SinoTruck logo — File: ../media/logos/sinotruck-logo.svg -->
          <div>
            <div class="brand-logo-text sinot">SINOTRUCK</div>
            <div class="brand-logo-sub">CNHTC — China National Heavy Duty Truck</div>
          </div>
        </div>
        <h3>Heavy-Duty Trucks for<br>Africa's Toughest Terrain</h3>
        <p>Asia Automobiles is the authorised SinoTruck dealer for Northern Nigeria and the surrounding region. SinoTruck is China's largest heavy-duty truck manufacturer, producing world-class commercial vehicles built for the demands of African infrastructure, logistics, and construction.</p>
        <div class="brand-specs">
          <div class="brand-spec">
            <div class="brand-spec-value">HOWO</div>
            <div class="brand-spec-label">Flagship Range</div>
          </div>
          <div class="brand-spec">
            <div class="brand-spec-value">[ T ]</div>
            <div class="brand-spec-label">Max Load Capacity</div>
          </div>
          <div class="brand-spec">
            <div class="brand-spec-value">[ # ]</div>
            <div class="brand-spec-label">Models Available</div>
          </div>
          <div class="brand-spec">
            <div class="brand-spec-value">[ # ]</div>
            <div class="brand-spec-label">Units Delivered</div>
          </div>
        </div>
      </div>
      <div class="brand-feature mikano">
        <div class="brand-logo-area">
          <!-- MEDIA: Mikano Motors logo — File: ../media/logos/mikano-logo.svg -->
          <div>
            <div class="brand-logo-text mikano">MIKANO</div>
            <div class="brand-logo-sub">Mikano International — Power &amp; Vehicles</div>
          </div>
        </div>
        <h3>Power Solutions &amp;<br>Commercial Vehicles</h3>
        <p>Mikano Motors is one of Nigeria's most trusted names in generators, buses, and commercial vehicles. Asia Automobiles distributes Mikano's full range across Northern Nigeria — powering homes, factories, and fleets that run the region's economy.</p>
        <div class="brand-specs">
          <div class="brand-spec">
            <div class="brand-spec-value">Generators</div>
            <div class="brand-spec-label">Core Product</div>
          </div>
          <div class="brand-spec">
            <div class="brand-spec-value">[ kVA ]</div>
            <div class="brand-spec-label">Range (Min-Max)</div>
          </div>
          <div class="brand-spec">
            <div class="brand-spec-value">[ # ]</div>
            <div class="brand-spec-label">Models Available</div>
          </div>
          <div class="brand-spec">
            <div class="brand-spec-value">[ # ]</div>
            <div class="brand-spec-label">Units Delivered</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="products-section">
  <div class="products-inner">
    
    <h2 style="font-family:var(--font-display); font-size:clamp(32px,4vw,52px); font-weight:300; color:var(--white); line-height:1.1;">
      Built for Industry,<br>Delivered for Africa
    </h2>
    <!-- PLACEHOLDER: All vehicle models, specifications, and pricing to be confirmed with Automobiles MD -->
    <div class="vehicles-grid">
      <div class="vehicle-card">
        <div class="vehicle-img">
          <!-- MEDIA: SinoTruck HOWO tractor head
               File: ../media/automobiles/sinotruck-howo-tractor.jpg -->
          <div class="vehicle-badge">SinoTruck</div>
          <p>MEDIA: HOWO Tractor Head</p>
        </div>
        <div class="vehicle-info">
          <div class="vehicle-brand">SinoTruck</div>
          <div class="vehicle-name">HOWO Tractor Head</div>
          <p class="vehicle-desc">High-power articulated tractor for long-haul freight. Ideal for logistics operators, haulage companies, and cross-border trade routes across West and Central Africa.</p>
          <div class="vehicle-specs-row">
            <div class="vehicle-spec"><div class="vehicle-spec-val">[ HP ]</div><div class="vehicle-spec-lbl">Engine Power</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">[ T ]</div><div class="vehicle-spec-lbl">Payload</div></div>
          </div>
        </div>
      </div>
      <div class="vehicle-card">
        <div class="vehicle-img">
          <!-- MEDIA: SinoTruck dump truck
               File: ../media/automobiles/sinotruck-dump.jpg -->
          <div class="vehicle-badge">SinoTruck</div>
          <p>MEDIA: Dump Truck</p>
        </div>
        <div class="vehicle-info">
          <div class="vehicle-brand">SinoTruck</div>
          <div class="vehicle-name">HOWO Dump Truck</div>
          <p class="vehicle-desc">Heavy-duty dump truck for construction, mining, and quarrying. Trusted by Nigeria's leading construction and infrastructure companies.</p>
          <div class="vehicle-specs-row">
            <div class="vehicle-spec"><div class="vehicle-spec-val">[ HP ]</div><div class="vehicle-spec-lbl">Engine Power</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">[ M³ ]</div><div class="vehicle-spec-lbl">Bowl Capacity</div></div>
          </div>
        </div>
      </div>
      <div class="vehicle-card">
        <div class="vehicle-img">
          <!-- MEDIA: SinoTruck tanker truck
               File: ../media/automobiles/sinotruck-tanker.jpg -->
          <div class="vehicle-badge">SinoTruck</div>
          <p>MEDIA: Tanker Truck</p>
        </div>
        <div class="vehicle-info">
          <div class="vehicle-brand">SinoTruck</div>
          <div class="vehicle-name">HOWO Tanker</div>
          <p class="vehicle-desc">Fuel and water tanker trucks for petroleum marketers, government water agencies, and industrial users requiring bulk liquid transport solutions.</p>
          <div class="vehicle-specs-row">
            <div class="vehicle-spec"><div class="vehicle-spec-val">[ L ]</div><div class="vehicle-spec-lbl">Tank Capacity</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">[ HP ]</div><div class="vehicle-spec-lbl">Engine Power</div></div>
          </div>
        </div>
      </div>
      <div class="vehicle-card">
        <div class="vehicle-img">
          <!-- MEDIA: Mikano generator set
               File: ../media/automobiles/mikano-generator.jpg -->
          <div class="vehicle-badge">Mikano</div>
          <p>MEDIA: Mikano Generator Set</p>
        </div>
        <div class="vehicle-info">
          <div class="vehicle-brand">Mikano Motors</div>
          <div class="vehicle-name">Industrial Generator Sets</div>
          <p class="vehicle-desc">Commercial and industrial generator sets from 10kVA to [X]MVA. Powering factories, hospitals, shopping centres, and institutions across Northern Nigeria.</p>
          <div class="vehicle-specs-row">
            <div class="vehicle-spec"><div class="vehicle-spec-val">10kVA+</div><div class="vehicle-spec-lbl">Starting Range</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">[ kVA ]</div><div class="vehicle-spec-lbl">Maximum Rating</div></div>
          </div>
        </div>
      </div>
      <div class="vehicle-card">
        <div class="vehicle-img">
          <!-- MEDIA: Mikano bus or passenger vehicle
               File: ../media/automobiles/mikano-bus.jpg -->
          <div class="vehicle-badge">Mikano</div>
          <p>MEDIA: Mikano Bus</p>
        </div>
        <div class="vehicle-info">
          <div class="vehicle-brand">Mikano Motors</div>
          <div class="vehicle-name">Commercial Buses</div>
          <p class="vehicle-desc">Passenger and commercial buses for transport operators, corporate fleets, schools, and government transport authorities across the Northern region.</p>
          <div class="vehicle-specs-row">
            <div class="vehicle-spec"><div class="vehicle-spec-val">[ Seats ]</div><div class="vehicle-spec-lbl">Capacity Range</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">[ # ]</div><div class="vehicle-spec-lbl">Models</div></div>
          </div>
        </div>
      </div>
      <div class="vehicle-card" style="opacity:0.4;">
        <div class="vehicle-img"><p>MEDIA: Additional Model</p></div>
        <div class="vehicle-info">
          <div class="vehicle-brand">[ Brand — TBD ]</div>
          <div class="vehicle-name">Additional Models</div>
          <p class="vehicle-desc">Full vehicle range and specifications to be confirmed with Automobiles MD after data session. Additional models, variants, and new product lines to be added.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="clients-section">
  <div class="clients-inner">
    <div>
      
      <h2 style="font-family:var(--font-display); font-size:clamp(32px,4vw,52px); font-weight:300; color:var(--white); line-height:1.1;">
        Every Sector That<br>Moves Nigeria
      </h2>
      <p style="font-size:15px; font-weight:300; line-height:1.85; color:rgba(255,255,255,0.55); margin-top:16px; max-width:480px;">
        From construction companies building Nigeria's roads to logistics operators moving goods across four nations — Asia Automobiles serves every industry that needs power and movement at scale.
      </p>
      <!-- PLACEHOLDER: Specific client names and sector breakdowns to be confirmed with Automobiles MD -->
      <div class="client-sectors">
        <div class="client-sector">
          <div class="client-sector-icon">🏗️</div>
          <div class="client-sector-name">Construction &amp; Infrastructure</div>
          <div class="client-sector-count">[ # ] clients</div>
        </div>
        <div class="client-sector">
          <div class="client-sector-icon">🚛</div>
          <div class="client-sector-name">Logistics &amp; Haulage Operators</div>
          <div class="client-sector-count">[ # ] clients</div>
        </div>
        <div class="client-sector">
          <div class="client-sector-icon">⛽</div>
          <div class="client-sector-name">Petroleum &amp; Energy Companies</div>
          <div class="client-sector-count">[ # ] clients</div>
        </div>
        <div class="client-sector">
          <div class="client-sector-icon">🏛️</div>
          <div class="client-sector-name">Government &amp; Public Institutions</div>
          <div class="client-sector-count">[ # ] clients</div>
        </div>
        <div class="client-sector">
          <div class="client-sector-icon">🏭</div>
          <div class="client-sector-name">Manufacturing &amp; Industrial</div>
          <div class="client-sector-count">[ # ] clients</div>
        </div>
        <div class="client-sector">
          <div class="client-sector-icon">🌾</div>
          <div class="client-sector-name">Agribusiness &amp; Farming</div>
          <div class="client-sector-count">[ # ] clients</div>
        </div>
      </div>
    </div>
    <div class="clients-visual">
      <!-- MEDIA: Client in action — truck on site, vehicle being operated
           File: ../media/subsidiaries/automobiles-inuse.jpg -->
      <p>MEDIA PLACEHOLDER<br>Vehicle in Operation<br>Recommended: Truck on highway or construction site</p>
    </div>
  </div>
</section>


<!-- ══ OUR LOCATIONS ══ -->
<section style="padding:100px 60px;background:var(--dark);">
  <div style="max-width:1300px;margin:0 auto;">
    <div style="font-family:var(--font-condensed);font-size:11px;font-weight:600;letter-spacing:0.3em;text-transform:uppercase;color:var(--silver-light);display:flex;align-items:center;gap:12px;margin-bottom:20px;"><span style="display:block;width:30px;height:1px;background:var(--silver-light);"></span>Asia Automobiles Locations Across Kano</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:end;margin-bottom:48px;">
      <h2 style="font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:300;color:var(--white);line-height:1.1;">Find Us Near You</h2>
      <p style="font-size:15px;font-weight:300;line-height:1.85;color:rgba(255,255,255,0.5);">Asia Automobiles operates [ # ] vehicle showrooms and service yards across Kano. Every location is fully staffed, stocked, and ready to serve — from walk-in buyers to contract wholesale accounts.</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:rgba(255,255,255,0.04);">

      <!-- Location card — replicate for each Asia Automobiles location. Fill from field visit data. -->
      <div style="background:var(--dark-2);overflow:hidden;">
        <!-- MEDIA: File: ../media/locations/0N-[slug]-exterior.jpg -->
        <div style="aspect-ratio:16/9;background:var(--dark-3);display:flex;align-items:center;justify-content:center;">
          <p style="font-family:var(--font-condensed);font-size:9px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.12);text-align:center;padding:12px;">MEDIA: Location Exterior</p>
        </div>
        <div style="padding:20px 20px 24px;">
          <div style="font-family:var(--font-condensed);font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#EF5350;margin-bottom:6px;">Asia Automobiles — Location [ N ]</div>
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
  <div class="cta-band-inner">
    <h2>Ready to power your<br>fleet or operations?</h2>
    <a href="../index.html#contact" class="btn-primary">Request a Vehicle Quotation →</a>
  </div>
</section>

` }} />
    </div>
  );
}
