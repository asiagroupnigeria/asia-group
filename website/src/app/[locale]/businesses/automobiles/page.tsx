
import React from 'react';
import { LocationsGrid } from '@/components/operations/LocationsGrid';
import { locations } from '@/data/locations';

export default function AutomobilesPage() {
  const subsidiaryLocations = locations.filter(loc => loc.subsidiaryId === 'automobiles');

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
  h1 { font-family:var(--font-display); font-size:clamp(48px,6vw,88px); font-weight:800; line-height:1.0; color:var(--white); max-width:800px; text-transform:uppercase; }
  h1 em { font-style:italic; color:var(--text-muted); }
  .sub-hero-desc { font-size:17px; font-weight:300; line-height:1.85; color:rgba(255,255,255,0.6); max-width:580px; margin-top:24px; }
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
    display:flex; align-items:center; margin-bottom:28px;
  }
  .brand-logo-text { font-family:var(--font-condensed); font-size:32px; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; }
  .brand-logo-text.sinot { color:rgba(192,57,43,0.9); }
  .brand-logo-text.mikano { color:rgba(76,175,80,0.9); }
  .brand-logo-sub { font-family:var(--font-condensed); font-size:11px; font-weight:600; letter-spacing:0.2em; text-transform:uppercase; color:var(--text-muted); margin-top:2px; }
  .brand-feature h3 { font-family:var(--font-display); font-size:28px; font-weight:800; color:var(--text-main); line-height:1.2; margin-bottom:16px; text-transform:uppercase; }
  .brand-feature p { font-size:14px; font-weight:300; line-height:1.8; color:rgba(0,0,0,0.5); }
  .brand-specs { margin-top:28px; display:grid; grid-template-columns:1fr 1fr; gap:1px; background:rgba(0,0,0,0.06); }
  .brand-spec { background:var(--bg-card); padding:16px 18px; }
  .brand-spec-value { font-family:var(--font-condensed); font-size:18px; font-weight:700; color:var(--green-bright, #4CAF50); }
  .brand-spec-label { font-size:10px; color:var(--text-muted); letter-spacing:0.08em; text-transform:uppercase; margin-top:4px; }

  /* PRODUCT SHOWCASE */
  .products-section { padding:120px 60px; background:var(--bg-main); }
  .products-inner { max-width:1300px; margin:0 auto; }
  .vehicles-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(360px, 1fr)); gap:24px; margin-top:60px; }
  .vehicle-card { background:var(--bg-card); border:1px solid var(--border-color); border-radius:0; overflow:hidden; display:flex; flex-direction:column; transition:all .3s; }
  .vehicle-card:hover { transform:translateY(-4px); box-shadow:0 12px 30px rgba(0,0,0,0.2); border-color:rgba(76,175,80,0.4); }
  .vehicle-img {
    aspect-ratio:16/9;
    background:var(--bg-muted); display:flex; align-items:center; justify-content:center;
    position:relative; border-bottom:1px solid var(--border-color);
  }
  .vehicle-img p { font-family:var(--font-condensed); font-size:10px; letter-spacing:0.15em; text-transform:uppercase; color:rgba(0,0,0,0.2); text-align:center; padding:16px; }
  .vehicle-badge { position:absolute; top:14px; left:14px; background:rgba(10,10,10,0.85); color:var(--green-bright, #4CAF50); font-family:var(--font-condensed); font-size:11px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; padding:6px 12px; border:1px solid rgba(76,175,80,0.3); }
  .vehicle-info { padding:24px 24px 28px; display:flex; flex-direction:column; flex:1; }
  .vehicle-brand { font-family:var(--font-condensed); font-size:11px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:var(--green-bright, #4CAF50); margin-bottom:8px; }
  .vehicle-name { font-family:var(--font-condensed); font-size:18px; font-weight:700; letter-spacing:0.04em; color:var(--text-main); margin-bottom:8px; text-transform:uppercase; }
  .vehicle-desc { font-size:13px; font-weight:300; line-height:1.65; color:rgba(0,0,0,0.55); margin-bottom:18px; flex:1; }
  .vehicle-specs-row { display:flex; gap:20px; flex-wrap:wrap; border-top:1px solid rgba(0,0,0,0.06); padding-top:14px; }
  .vehicle-spec { }
  .vehicle-spec-val { font-family:var(--font-condensed); font-size:14px; font-weight:700; color:var(--text-main); }
  .vehicle-spec-lbl { font-size:10px; color:var(--text-muted); letter-spacing:0.06em; text-transform:uppercase; margin-top:2px; }

  /* CLIENTS */
  .clients-section { padding:120px 60px; background:var(--bg-card); }
  .clients-inner { max-width:1300px; margin:0 auto; display:grid; grid-template-columns:1fr 1.2fr; gap:80px; align-items:start; }
  .clients-content h2 { font-family:var(--font-display); font-size:clamp(32px,4vw,52px); font-weight:800; color:var(--text-main); line-height:1.1; text-transform:uppercase; }
  .clients-content h2 em { font-style:italic; color:var(--text-muted); }
  .clients-content p { font-size:15px; font-weight:300; line-height:1.85; color:rgba(0,0,0,0.55); margin-top:16px; }
  .client-sectors { margin-top:36px; display:flex; flex-direction:column; gap:0; border:1px solid rgba(0,0,0,0.06); }
  .client-sector { display:flex; align-items:center; gap:20px; padding:20px 24px; border-bottom:1px solid rgba(0,0,0,0.04); }
  .client-sector:last-child { border-bottom:none; }
  .client-sector-icon { font-size:22px; flex-shrink:0; color:var(--green-bright, #4CAF50); }
  .client-sector-name { font-family:var(--font-condensed); font-size:14px; font-weight:600; letter-spacing:0.06em; color:var(--text-main); flex:1; }
  .client-sector-count { font-family:var(--font-condensed); font-size:11px; font-weight:600; color:var(--green-bright, #4CAF50); text-transform:uppercase; }
  .clients-visual {
    aspect-ratio:4/3; background:var(--bg-muted); border:1px solid rgba(0,0,0,0.06);
    display:flex; align-items:center; justify-content:center;
  }
  .clients-visual p { font-family:var(--font-condensed); font-size:10px; letter-spacing:0.15em; text-transform:uppercase; color:rgba(0,0,0,0.15); text-align:center; padding:20px; }

  .cta-band { padding:100px 60px; background:var(--bg-muted); border-top:1px solid rgba(0,0,0,0.04); }
  .cta-band-inner { max-width:1300px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap; }
  .cta-band h2 { font-family:var(--font-display); font-size:clamp(32px,4vw,52px); font-weight:800; color:var(--text-main); text-transform:uppercase; }
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
  <div class="sub-hero-bg">
    <video src="/media/automobile-videos/1 - Trim.mp4" autoplay muted loop playsinline style="width:100%; height:100%; object-fit:cover; position:absolute; inset:0;"></video>
  </div>
  <div class="sub-hero-overlay"></div>
  <div class="sub-hero-content">
    
    
    <h1>Asia Automobiles<br> Powering Africa's<br>Infrastructure</h1>
    <p class="sub-hero-desc">
      Authorised dealer and distributor for SinoTruck and Mikano Motors — supplying commercial trucks, generators, and industrial vehicles to Nigeria's construction, logistics, and energy sectors.
    </p>
    </div>
</section>

<section class="brands-section">
  <div class="brands-inner">
    <h2 style="font-family:var(--font-display); font-size:clamp(32px,4vw,52px); font-weight:800; color:var(--text-main); line-height:1.1; text-transform:uppercase;">
      World-Class Vehicles,<br>African Expertise
    </h2>
    <div class="brands-grid">
      <div class="brand-feature sinot">
        <div class="brand-logo-area">
          <div>
            <div class="brand-logo-text sinot">SINOTRUCK</div>
            <div class="brand-logo-sub">CNHTC — China National Heavy Duty Truck</div>
          </div>
        </div>
        <h3>Heavy-Duty Trucks for<br>Africa's Toughest Terrain</h3>
        <p>Asia Automobiles is the authorised SinoTruck partner for Northern Nigeria. SinoTruck is China's largest heavy-duty truck manufacturer, delivering indestructible commercial haulage, tippers, and tankers engineered for African infrastructure.</p>
        <div class="brand-specs">
          <div class="brand-spec">
            <div class="brand-spec-value">HOWO Range</div>
            <div class="brand-spec-label">Flagship Line</div>
          </div>
          <div class="brand-spec">
            <div class="brand-spec-value">371–420 HP</div>
            <div class="brand-spec-label">Engine Power</div>
          </div>
          <div class="brand-spec">
            <div class="brand-spec-value">10+ Configs</div>
            <div class="brand-spec-label">Chassis Variants</div>
          </div>
          <div class="brand-spec">
            <div class="brand-spec-value">10,000+ Units</div>
            <div class="brand-spec-label">Regional Deliveries</div>
          </div>
        </div>
      </div>

      <div class="brand-feature mikano">
        <div class="brand-logo-area">
          <div>
            <div class="brand-logo-text mikano">MIKANO MOTORS</div>
            <div class="brand-logo-sub">GWM Tank • Changan Auto • Maxus • Deepal</div>
          </div>
        </div>
        <h3>GWM Tank, Changan &amp; Maxus<br>Distributed by Mikano</h3>
        <p>Mikano Motors is the authorized Nigerian distributor for global automotive leaders including GWM (Tank 500), Changan Auto (UNI-K, CS95, Hunter), Deepal, and Maxus — delivering executive luxury SUVs, 4x4 pickups, and commercial fleets backed by industry-leading 6-year to 10-year warranties.</p>
        <div class="brand-specs">
          <div class="brand-spec">
            <div class="brand-spec-value">GWM &amp; Changan</div>
            <div class="brand-spec-label">Flagship Partners</div>
          </div>
          <div class="brand-spec">
            <div class="brand-spec-value">Up to 10 Yrs</div>
            <div class="brand-spec-label">Vehicle Warranty</div>
          </div>
          <div class="brand-spec">
            <div class="brand-spec-value">15+ Models</div>
            <div class="brand-spec-label">SUV, Pickup &amp; Sedan</div>
          </div>
          <div class="brand-spec">
            <div class="brand-spec-value">Nationwide</div>
            <div class="brand-spec-label">Parts &amp; Service Centers</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="products-section">
  <div class="products-inner">
    <h2 style="font-family:var(--font-display); font-size:clamp(32px,4vw,52px); font-weight:800; color:var(--text-main); line-height:1.1; text-transform:uppercase;">
      Selected Vehicle Lineup
    </h2>
    <p style="font-size:15px; font-weight:300; line-height:1.85; color:rgba(0,0,0,0.55); margin-top:12px; max-width:640px;">
      Explore premier SUVs, heavy commercial haulers, executive 4x4 pickups, and commercial fleet solutions distributed by Asia Automobiles.
    </p>

    <div class="vehicles-grid">
      <!-- 1. GWM TANK 500 -->
      <div class="vehicle-card">
        <div class="vehicle-img">
          <img src="/media/mikano-automobiles/GWM Tank 500 (Executive SUV).webp" alt="GWM Tank 500" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div class="vehicle-info">
          <div class="vehicle-name">GWM Tank 500 (Executive SUV)</div>
          <p class="vehicle-desc">Flagship 7-seater luxury off-road SUV powered by a 3.0T V6 turbocharged engine, 9-speed automatic transmission, intelligent 4WD with locking differentials, Nappa leather interior, and 10-Year / 1,000,000 km warranty.</p>
          <div class="vehicle-specs-row">
            <div class="vehicle-spec"><div class="vehicle-spec-val">350 HP / 500 Nm</div><div class="vehicle-spec-lbl">Power &amp; Torque</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">9-Speed AT 4WD</div><div class="vehicle-spec-lbl">Transmission</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">7 Seater</div><div class="vehicle-spec-lbl">Capacity</div></div>
          </div>
        </div>
      </div>

      <!-- 2. CHANGAN UNI-K -->
      <div class="vehicle-card">
        <div class="vehicle-img">
          <img src="/media/mikano-automobiles/Changan UNI-K Luxury SUV.jpg" alt="Changan UNI-K" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div class="vehicle-info">
          <div class="vehicle-name">Changan UNI-K Luxury SUV</div>
          <p class="vehicle-desc">Futuristic flagship crossover SUV featuring a 2.0L BlueCore TGDI engine, 8-speed Aisin automatic transmission, intelligent AWD, 21-inch alloy wheels, 12 Sony speakers, and 6-Year warranty.</p>
          <div class="vehicle-specs-row">
            <div class="vehicle-spec"><div class="vehicle-spec-val">233 HP / 400 Nm</div><div class="vehicle-spec-lbl">Power &amp; Torque</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">8-Speed Aisin AT</div><div class="vehicle-spec-lbl">Transmission</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">AWD System</div><div class="vehicle-spec-lbl">Drivetrain</div></div>
          </div>
        </div>
      </div>

      <!-- 3. CHANGAN CS95 PLUS -->
      <div class="vehicle-card">
        <div class="vehicle-img">
          <img src="/media/mikano-automobiles/Changan CS95 PLUS (7-Seater).jpeg" alt="Changan CS95 PLUS" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div class="vehicle-info">
          <div class="vehicle-name">Changan CS95 PLUS (7-Seater)</div>
          <p class="vehicle-desc">Full-size executive 3-row SUV delivering 2.0L Turbo BlueCore power, 4WD system, 3-zone automatic climate control, panoramic sunroof, and ventilated massaging front seats.</p>
          <div class="vehicle-specs-row">
            <div class="vehicle-spec"><div class="vehicle-spec-val">233 HP / 360 Nm</div><div class="vehicle-spec-lbl">Power &amp; Torque</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">6-Speed AT 4WD</div><div class="vehicle-spec-lbl">Transmission</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">7 Seater</div><div class="vehicle-spec-lbl">Capacity</div></div>
          </div>
        </div>
      </div>

      <!-- 4. CHANGAN HUNTER PLUS -->
      <div class="vehicle-card">
        <div class="vehicle-img">
          <img src="/media/mikano-automobiles/Changan Hunter PLUS Pickup.jpg" alt="Changan Hunter PLUS" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div class="vehicle-info">
          <div class="vehicle-name">Changan Hunter PLUS Pickup</div>
          <p class="vehicle-desc">Rugged 4x4 double-cabin pickup truck engineered for heavy-duty commercial utility and executive off-road performance, featuring 2.0L Turbo power, 8-speed AT, and 80L tank capacity.</p>
          <div class="vehicle-specs-row">
            <div class="vehicle-spec"><div class="vehicle-spec-val">233 HP / 390 Nm</div><div class="vehicle-spec-lbl">Power &amp; Torque</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">8-Speed AT 4WD</div><div class="vehicle-spec-lbl">Drivetrain</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">Double Cabin</div><div class="vehicle-spec-lbl">Body Style</div></div>
          </div>
        </div>
      </div>

      <!-- 5. DEEPAL G318 -->
      <div class="vehicle-card">
        <div class="vehicle-img">
          <img src="/media/mikano-automobiles/Deepal G318 All-Terrain SUV.jpg" alt="Deepal G318" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div class="vehicle-info">
          <div class="vehicle-name">Deepal G318 All-Terrain SUV</div>
          <p class="vehicle-desc">Cyberpunk-styled all-terrain hybrid SUV equipped with 1.5L Turbo range-extender powertrain, 35.07 kWh battery, Level 2 ADAS driver assistance, and roof-mounted auxiliary expedition lights.</p>
          <div class="vehicle-specs-row">
            <div class="vehicle-spec"><div class="vehicle-spec-val">1.5L Turbo EREV</div><div class="vehicle-spec-lbl">Powertrain</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">35.07 kWh</div><div class="vehicle-spec-lbl">Battery Capacity</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">Level 2 ADAS</div><div class="vehicle-spec-lbl">Safety Suite</div></div>
          </div>
        </div>
      </div>

      <!-- 6. MAXUS D90 MAX -->
      <div class="vehicle-card">
        <div class="vehicle-img">
          <img src="/media/mikano-automobiles/Maxus D90.jpg" alt="Maxus D90" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div class="vehicle-info">
          <div class="vehicle-name">Maxus D90 MAX (7-Seater)</div>
          <p class="vehicle-desc">Full-size executive off-road SUV powered by a 2.0L Bi-Turbo engine producing 257 HP and 410 Nm torque, 8-speed automatic, 4WD system, dual 12.3" LCD screens, and 5-Year warranty.</p>
          <div class="vehicle-specs-row">
            <div class="vehicle-spec"><div class="vehicle-spec-val">257 HP / 410 Nm</div><div class="vehicle-spec-lbl">Power &amp; Torque</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">8-Speed AT 4WD</div><div class="vehicle-spec-lbl">Transmission</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">7 Seater</div><div class="vehicle-spec-lbl">Capacity</div></div>
          </div>
        </div>
      </div>

      <!-- 7. MAXUS T90 -->
      <div class="vehicle-card">
        <div class="vehicle-img">
          <img src="/media/mikano-automobiles/Maxus T90 4x4 Double Cabin.jpg" alt="Maxus T90" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div class="vehicle-info">
          <div class="vehicle-name">Maxus T90 4x4 Double Cabin</div>
          <p class="vehicle-desc">High-performance luxury double-cabin pickup combining commercial load capacity with leather cabin luxury, 2.0L Bi-Turbo 257HP output, and 8-speed automatic transmission.</p>
          <div class="vehicle-specs-row">
            <div class="vehicle-spec"><div class="vehicle-spec-val">257 HP / 410 Nm</div><div class="vehicle-spec-lbl">Power &amp; Torque</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">8-Speed Automatic</div><div class="vehicle-spec-lbl">Transmission</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">4x4 Double Cabin</div><div class="vehicle-spec-lbl">Format</div></div>
          </div>
        </div>
      </div>

      <!-- 8. CHANGAN EADO PLUS -->
      <div class="vehicle-card">
        <div class="vehicle-img">
          <img src="/media/mikano-automobiles/Changan EADO PLUS Sedan.jpg" alt="Changan EADO PLUS" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div class="vehicle-info">
          <div class="vehicle-name">Changan EADO PLUS Sedan</div>
          <p class="vehicle-desc">Premium executive sedan featuring 1.5L Turbo BlueCore engine (170HP), 7-speed dual-clutch transmission, 13.2" touchscreen, leather ventilated seats, and fuel-efficient performance.</p>
          <div class="vehicle-specs-row">
            <div class="vehicle-spec"><div class="vehicle-spec-val">170 HP / 260 Nm</div><div class="vehicle-spec-lbl">Power &amp; Torque</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">7-Speed DCT</div><div class="vehicle-spec-lbl">Transmission</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">13.2" HD Touch</div><div class="vehicle-spec-lbl">Screen</div></div>
          </div>
        </div>
      </div>

      <!-- 9. SINOTRUCK HOWO TRACTOR HEAD -->
      <div class="vehicle-card">
        <div class="vehicle-img">
          <img src="/media/mikano-automobiles/HOWO 6x4 Prime Mover.webp" alt="HOWO 6x4 Prime Mover" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div class="vehicle-info">
          <div class="vehicle-name">HOWO 6x4 Prime Mover</div>
          <p class="vehicle-desc">Heavy-duty prime mover for long-haul interstate freight and cross-border transport corridors across West and Central Africa, built for maximum reliability on harsh roads.</p>
          <div class="vehicle-specs-row">
            <div class="vehicle-spec"><div class="vehicle-spec-val">371–420 HP</div><div class="vehicle-spec-lbl">Engine Power</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">50–70 Ton</div><div class="vehicle-spec-lbl">GCM Payload</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">6x4 Axle</div><div class="vehicle-spec-lbl">Drive</div></div>
          </div>
        </div>
      </div>

      <!-- 10. SINOTRUCK HOWO DUMP TRUCK -->
      <div class="vehicle-card">
        <div class="vehicle-img">
          <img src="/media/mikano-automobiles/HOWO Heavy Dump Truck.png" alt="HOWO Heavy Dump Truck" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div class="vehicle-info">
          <div class="vehicle-name">HOWO Heavy Dump Truck</div>
          <p class="vehicle-desc">Reinforced tipper truck engineered for mining, quarry operations, construction haulage, and major infrastructure earthmoving projects across Nigeria.</p>
          <div class="vehicle-specs-row">
            <div class="vehicle-spec"><div class="vehicle-spec-val">371 HP</div><div class="vehicle-spec-lbl">Engine Power</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">18–22 M³</div><div class="vehicle-spec-lbl">Bowl Capacity</div></div>
            <div class="vehicle-spec"><div class="vehicle-spec-val">Heavy Duty</div><div class="vehicle-spec-lbl">Chassis</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="clients-section">
  <div class="clients-inner">
    <div>
      <h2 style="font-family:var(--font-display); font-size:clamp(32px,4vw,52px); font-weight:800; color:var(--text-main); line-height:1.1; text-transform:uppercase;">
        Every Sector That<br>Moves Nigeria
      </h2>
      <p style="font-size:15px; font-weight:300; line-height:1.85; color:rgba(0,0,0,0.55); margin-top:16px; max-width:480px;">
        From construction companies building Nigeria's highways to logistics operators moving goods across four nations — Asia Automobiles supplies vehicle power and movement at scale.
      </p>
      <div class="client-sectors">
        <div class="client-sector">
          <div class="client-sector-icon"><i class="ri-building-line"></i></div>
          <div class="client-sector-name">Construction &amp; Civil Engineering</div>
          <div class="client-sector-count">Major Contractors</div>
        </div>
        <div class="client-sector">
          <div class="client-sector-icon"><i class="ri-truck-line"></i></div>
          <div class="client-sector-name">Logistics &amp; Haulage Operators</div>
          <div class="client-sector-count">Interstate Fleets</div>
        </div>
        <div class="client-sector">
          <div class="client-sector-icon"><i class="ri-gas-station-line"></i></div>
          <div class="client-sector-name">Petroleum &amp; Energy Marketers</div>
          <div class="client-sector-count">Downstream Supply</div>
        </div>
        <div class="client-sector">
          <div class="client-sector-icon"><i class="ri-government-line"></i></div>
          <div class="client-sector-name">Government &amp; Public Institutions</div>
          <div class="client-sector-count">Ministries &amp; Agencies</div>
        </div>
        <div class="client-sector">
          <div class="client-sector-icon"><i class="ri-building-3-line"></i></div>
          <div class="client-sector-name">Manufacturing &amp; Industrial Plants</div>
          <div class="client-sector-count">Factory Fleets</div>
        </div>
        <div class="client-sector">
          <div class="client-sector-icon"><i class="ri-plant-line"></i></div>
          <div class="client-sector-name">Agribusiness &amp; Farming Estates</div>
          <div class="client-sector-count">Agricultural Haulage</div>
        </div>
      </div>
    </div>
    <div class="clients-visual" style="position: relative; overflow: hidden;">
      <video src="/media/automobile-videos/2.mp4" autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0;"></video>
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
      <p style="font-size:15px;font-weight:300;line-height:1.85;color:rgba(255,255,255,0.8);">Asia Automobiles operates dedicated commercial vehicle showrooms and heavy equipment service facilities across Kano. Every location is fully staffed, stocked, and ready to serve — from walk-in buyers to corporate fleet accounts.</p>
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
  <div class="cta-band-inner">
    <h2>Ready to power your<br>fleet or operations?</h2>
    <a href="/#partner-cta" class="btn-primary">Request a Vehicle Quotation →</a>
  </div>
</section>

` }} />
    </div>
  );
}
