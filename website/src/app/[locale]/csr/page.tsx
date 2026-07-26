
import React from 'react';

export default function CSRPage() {
  return (
    <div className="csr-page">
      <style dangerouslySetInnerHTML={{ __html: `
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  
  html { scroll-behavior: smooth; }
  body { font-family: var(--font-body); background: var(--dark); color: var(--white); overflow-x: hidden; }

  nav { position: fixed; top: 0; left: 0; right: 0; height: 80px; background: rgba(10,10,10,0.95); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: space-between; padding: 0 60px; z-index: 1000; }
  .nav-back { display: flex; align-items: center; gap: 10px; font-family: var(--font-condensed); font-size: 12px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: color .2s; }
  .nav-back:hover { color: var(--white); }
  .nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; font-family: var(--font-condensed); font-size: 17px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--white); }
  .nav-logo img { height: 40px; }
  .nav-cta { font-family: var(--font-condensed); font-size: 12px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: var(--dark); background: var(--silver-light); padding: 10px 24px; text-decoration: none; }

  /* ── HERO ── */
  .hero { padding-top: 0px; min-height: 80vh; position: relative; display: flex; align-items: flex-end; overflow: hidden; }
  .hero-bg {
    position: absolute; inset: 0;
    /* MEDIA: Community/philanthropy hero — the daily meal programme in action
       File: ../media/csr/hero-meal-distribution.jpg
       Recommended: Wide shot of food being served, or aerial of community gathering
       This should be warm, human, and emotionally resonant — different tone from warehouse shots */
    background: linear-gradient(160deg, #0a1a0a 0%, #0a0a0a 50%, #1a1a08 100%);
  }
  .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.6) 55%, rgba(10,10,10,0.25) 100%); }
  .hero-content { position: relative; z-index: 2; padding: 0 60px 80px; max-width: 1300px; margin: 0 auto; width: 100%; }
  .breadcrumb { display: flex; align-items: center; gap: 10px; font-family: var(--font-condensed); font-size: 11px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); margin-bottom: 24px; }
  .breadcrumb a { color: var(--gold-light); text-decoration: none; }
  .hero-eyebrow { font-family: var(--font-condensed); font-size: 12px; font-weight: 600; letter-spacing: 0.3em; text-transform: uppercase; color: var(--silver-light); display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
  .hero-eyebrow::before { content: ''; display: block; width: 30px; height: 1px; background: var(--silver-light); }
  .hero-headline { font-family: var(--font-display); font-size: clamp(52px, 7vw, 96px); font-weight: 300; line-height: 1.0; color: var(--white); }
  .hero-headline em { font-style: italic; color: var(--silver-light); }
  .hero-sub { font-size: 17px; font-weight: 300; line-height: 1.8; color: rgba(255,255,255,0.6); max-width: 560px; margin-top: 24px; }
  /* Rolling meal counter */
  .meal-counter-wrap { display: flex; align-items: baseline; gap: 14px; margin-top: 40px; }
  .meal-number { font-family: var(--font-display); font-size: clamp(72px, 10vw, 120px); font-weight: 600; color: var(--green-light); line-height: 1; }
  .meal-label-col { display: flex; flex-direction: column; gap: 4px; padding-bottom: 8px; }
  .meal-label-top { font-family: var(--font-condensed); font-size: 14px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.8); }
  .meal-label-sub { font-family: var(--font-body); font-size: 13px; color: rgba(255,255,255,0.4); font-weight: 300; }
  .meal-breakdown { display: flex; gap: 0; margin-top: 16px; border: 1px solid rgba(255,255,255,0.08); width: fit-content; }
  .meal-time { padding: 12px 24px; border-right: 1px solid rgba(255,255,255,0.08); background: rgba(10,10,10,0.7); backdrop-filter: blur(10px); }
  .meal-time:last-child { border-right: none; }
  .meal-time-n { font-family: var(--font-condensed); font-size: 22px; font-weight: 700; color: var(--gold-light); }
  .meal-time-l { font-size: 11px; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 4px; }

  /* ── PHILOSOPHY ── */
  .philosophy-section { padding: 120px 60px; background: var(--dark-2); }
  .philosophy-inner { max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; }
  .section-tag { font-family: var(--font-condensed); font-size: 11px; font-weight: 600; letter-spacing: 0.3em; text-transform: uppercase; color: var(--silver-light); display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
  .section-tag::before { content: ''; display: block; width: 30px; height: 1px; background: var(--silver-light); }
  h2 { font-family: var(--font-display); font-size: clamp(32px, 4vw, 52px); font-weight: 300; color: var(--white); line-height: 1.1; }
  h2 em { font-style: italic; color: var(--gold-light); }
  .body-text { font-size: 15px; font-weight: 300; line-height: 1.85; color: rgba(255,255,255,0.55); }
  .body-text p + p { margin-top: 16px; }
  .phil-quote { font-family: var(--font-display); font-size: clamp(20px, 2.5vw, 28px); font-weight: 400; font-style: italic; color: rgba(255,255,255,0.85); line-height: 1.5; border-left: 3px solid var(--silver-light); padding-left: 28px; margin: 32px 0; }
  .ceo-sig { display: flex; align-items: center; gap: 16px; margin-top: 32px; }
  .ceo-avatar { width: 56px; height: 56px; border-radius: 50%; background: var(--green); border: 2px solid var(--silver-light); display: flex; align-items: center; justify-content: center; font-family: var(--font-condensed); font-size: 18px; font-weight: 700; color: var(--silver-light); flex-shrink: 0;
    /* MEDIA: Replace with <img src="../media/leadership/ceo-thumb.jpg" style="width:56px;height:56px;border-radius:50%;object-fit:cover;"> */ }
  .ceo-sig-name { font-family: var(--font-condensed); font-size: 14px; font-weight: 600; letter-spacing: 0.05em; color: var(--white); }
  .ceo-sig-title { font-size: 12px; color: var(--muted); margin-top: 3px; }
  /* Photo mosaic */
  .phil-mosaic { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: auto auto; gap: 4px; }
  .mosaic-photo { background: var(--dark-3); display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative; }
  .mosaic-photo.tall { grid-row: span 2; }
  .mosaic-photo img { width: 100%; height: 100%; object-fit: cover; }
  .mosaic-placeholder { font-family: var(--font-condensed); font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.15); text-align: center; padding: 20px; }
  .mosaic-photo { aspect-ratio: 1; }
  .mosaic-photo.tall { aspect-ratio: auto; }

  /* ── DAILY MEALS DEEP DIVE ── */
  .meals-section { padding: 0; background: var(--green); overflow: hidden; }
  .meals-split { display: grid; grid-template-columns: 1fr 1fr; }
  .meals-photo-side {
    /* MEDIA: Primary meal distribution photography — community gathering, food service
       File: ../media/csr/meal-programme-main.jpg
       Recommended: Warm, authentic — people receiving food, long queues, community spirit */
    background: var(--green-mid); min-height: 600px; position: relative; overflow: hidden;
    display: flex; align-items: center; justify-content: center;
  }
  .meals-photo-placeholder { font-family: var(--font-condensed); font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.2); text-align: center; padding: 40px; }
  .meals-content-side { padding: 80px 60px; display: flex; flex-direction: column; justify-content: center; }
  .meals-content-side .section-tag { color: rgba(255,255,255,0.6); }
  .meals-content-side .section-tag::before { background: rgba(255,255,255,0.3); }
  .meals-content-side h2 { color: var(--white); }
  .meals-content-side .body-text { color: rgba(255,255,255,0.65); }
  .meals-timeline { margin-top: 40px; display: flex; flex-direction: column; gap: 0; border: 1px solid rgba(255,255,255,0.15); }
  .meal-event { display: flex; gap: 20px; padding: 20px 24px; border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.15); }
  .meal-event:last-child { border-bottom: none; }
  .meal-event-time { font-family: var(--font-condensed); font-size: 22px; font-weight: 700; color: var(--gold-light); min-width: 80px; line-height: 1; padding-top: 2px; }
  .meal-event-info h4 { font-family: var(--font-condensed); font-size: 14px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--white); margin-bottom: 5px; }
  .meal-event-info p { font-size: 13px; font-weight: 300; line-height: 1.6; color: rgba(255,255,255,0.55); }
  /* Annual counter */
  .meals-annual { display: flex; gap: 0; border: 1px solid rgba(255,255,255,0.15); margin-top: 32px; }
  .meals-annual-stat { flex: 1; padding: 20px 24px; border-right: 1px solid rgba(255,255,255,0.12); background: rgba(0,0,0,0.2); }
  .meals-annual-stat:last-child { border-right: none; }
  .meals-annual-n { font-family: var(--font-condensed); font-size: 28px; font-weight: 700; color: var(--gold-light); }
  .meals-annual-l { font-size: 11px; color: rgba(255,255,255,0.5); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 5px; }

  /* ── CSR PHOTO GALLERY ── */
  .gallery-section { padding: 100px 60px; background: var(--dark); }
  .gallery-inner { max-width: 1300px; margin: 0 auto; }
  .gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: auto auto; gap: 4px; margin-top: 48px; }
  .gallery-photo { background: var(--dark-3); overflow: hidden; position: relative; aspect-ratio: 1; cursor: pointer; }
  .gallery-photo.wide { grid-column: span 2; aspect-ratio: 2/1; }
  .gallery-photo.tall { grid-row: span 2; aspect-ratio: 1/2; }
  .gallery-photo img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
  .gallery-photo:hover img { transform: scale(1.05); }
  .gallery-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
  .gallery-placeholder p { font-family: var(--font-condensed); font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.12); text-align: center; padding: 16px; }
  .gallery-photo-label { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(10,10,10,0.9), transparent); padding: 20px 16px 12px; opacity: 0; transition: opacity .3s; }
  .gallery-photo:hover .gallery-photo-label { opacity: 1; }
  .gallery-photo-label p { font-family: var(--font-condensed); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.7); }

  /* ── OTHER PROGRAMMES ── */
  .programmes-section { padding: 100px 60px; background: var(--dark-2); }
  .programmes-inner { max-width: 1300px; margin: 0 auto; }
  .programmes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: rgba(255,255,255,0.04); margin-top: 60px; }
  .programme-card { background: var(--dark); padding: 48px 36px; }
  .programme-photo {
    width: 100%; aspect-ratio: 16/9; background: var(--dark-3); margin-bottom: 28px;
    display: flex; align-items: center; justify-content: center; overflow: hidden;
    /* MEDIA: Programme-specific photography — each card has its own recommended image */
  }
  .programme-photo img { width: 100%; height: 100%; object-fit: cover; }
  .programme-photo-placeholder { font-family: var(--font-condensed); font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.12); text-align: center; padding: 16px; }
  .programme-icon { font-size: 32px; margin-bottom: 16px; display: block; }
  .programme-name { font-family: var(--font-condensed); font-size: 18px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--white); margin-bottom: 8px; }
  .programme-status { font-family: var(--font-condensed); font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--green-light); margin-bottom: 16px; display: inline-block; border: 1px solid rgba(76,175,80,0.25); padding: 4px 10px; }
  .programme-status.pending { color: rgba(212,172,13,0.6); border-color: rgba(212,172,13,0.2); }
  .programme-desc { font-size: 14px; font-weight: 300; line-height: 1.75; color: rgba(255,255,255,0.5); }
  .programme-metric { margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.06); }
  .programme-metric-n { font-family: var(--font-condensed); font-size: 28px; font-weight: 700; color: var(--gold-light); line-height: 1; }
  .programme-metric-l { font-size: 11px; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 4px; }

  /* ── IMPACT NUMBERS ── */
  .impact-section { padding: 100px 60px; background: var(--dark-3); position: relative; overflow: hidden; }
  .impact-bg-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: var(--font-condensed); font-size: 260px; font-weight: 800; color: rgba(255,255,255,0.02); white-space: nowrap; pointer-events: none; letter-spacing: -0.04em; }
  .impact-inner { max-width: 1300px; margin: 0 auto; position: relative; z-index: 1; }
  .impact-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border: 1px solid rgba(255,255,255,0.06); margin-top: 60px; }
  .impact-stat { padding: 48px 36px; border-right: 1px solid rgba(255,255,255,0.06); }
  .impact-stat:last-child { border-right: none; }
  .impact-n { font-family: var(--font-display); font-size: clamp(48px, 5vw, 72px); font-weight: 600; color: var(--green-light); line-height: 1; }
  .impact-l { font-family: var(--font-condensed); font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-top: 10px; }
  .impact-d { font-size: 13px; font-weight: 300; line-height: 1.6; color: rgba(255,255,255,0.3); margin-top: 8px; }

  /* ── TESTIMONIALS ── */
  .testimonials-section { padding: 100px 60px; background: var(--dark); }
  .testimonials-inner { max-width: 1300px; margin: 0 auto; }
  .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: rgba(255,255,255,0.04); margin-top: 60px; }
  .testimonial-card { background: var(--dark-2); padding: 40px 32px; }
  .testimonial-quote-mark { font-family: var(--font-display); font-size: 80px; font-weight: 600; color: rgba(212,172,13,0.2); line-height: 0.7; margin-bottom: 20px; }
  .testimonial-quote { font-family: var(--font-display); font-size: clamp(16px, 1.8vw, 20px); font-weight: 400; font-style: italic; color: rgba(255,255,255,0.8); line-height: 1.6; margin-bottom: 28px; }
  .testimonial-person { display: flex; align-items: center; gap: 14px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.06); }
  .testimonial-avatar { width: 48px; height: 48px; border-radius: 50%; background: var(--dark-3); border: 1px solid rgba(255,255,255,0.1); flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: var(--font-condensed); font-size: 14px; font-weight: 700; color: var(--muted);
    /* MEDIA: Testimonial person portrait — ../media/csr/testimonial-[n]-thumb.jpg */ }
  .testimonial-name { font-family: var(--font-condensed); font-size: 13px; font-weight: 700; letter-spacing: 0.05em; color: var(--white); }
  .testimonial-role { font-size: 12px; color: var(--muted); margin-top: 3px; }

  /* ── PARTNER IN IMPACT ── */
  .partner-cta { padding: 100px 60px; background: var(--green); }
  .partner-cta-inner { max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
  .partner-cta-content h2 { color: var(--white); font-size: clamp(36px, 5vw, 64px); }
  .partner-cta-content p { font-size: 16px; font-weight: 300; line-height: 1.85; color: rgba(255,255,255,0.65); margin-top: 20px; max-width: 440px; }
  .partner-cta-actions { display: flex; flex-direction: column; gap: 14px; }
  .btn-primary { font-family: var(--font-condensed); font-size: 13px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: var(--dark); background: var(--silver-light); padding: 18px 48px; text-decoration: none; display: inline-block; white-space: nowrap; transition: background .2s; text-align: center; }
  .btn-primary:hover { background: var(--white); }
  .btn-outline { font-family: var(--font-condensed); font-size: 13px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: var(--white); border: 1px solid rgba(255,255,255,0.35); padding: 18px 48px; text-decoration: none; display: inline-block; white-space: nowrap; transition: all .2s; text-align: center; }
  .btn-outline:hover { border-color: var(--white); background: rgba(255,255,255,0.1); }

  .footer-mini { background: var(--black); border-top: 1px solid rgba(255,255,255,0.06); padding: 32px 60px; display: flex; align-items: center; justify-content: space-between; }
  .footer-mini p { font-size: 12px; color: rgba(255,255,255,0.2); font-weight: 300; }
  .footer-mini a { color: var(--silver-light); text-decoration: none; font-family: var(--font-condensed); font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }

  /* fade in */
  .fade-up { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .fade-up.visible { opacity: 1; transform: translateY(0); }

  @media (max-width: 1100px) { nav, .hero-content, .philosophy-section, .meals-content-side, .gallery-section, .programmes-section, .impact-section, .testimonials-section, .partner-cta, .footer-mini { padding-left: 32px; padding-right: 32px; } }
  @media (max-width: 900px) {
    nav, .hero-content, .philosophy-section, .gallery-section, .programmes-section, .impact-section, .testimonials-section, .partner-cta, .footer-mini { padding-left: 24px; padding-right: 24px; }
    .philosophy-inner, .partner-cta-inner { grid-template-columns: 1fr; gap: 48px; }
    .meals-split { grid-template-columns: 1fr; }
    .meals-photo-side { min-height: 300px; }
    .meals-content-side { padding: 48px 24px; }
    .gallery-grid { grid-template-columns: 1fr 1fr; }
    .gallery-photo.wide { grid-column: span 2; }
    .gallery-photo.tall { grid-row: span 1; aspect-ratio: 1; }
    .programmes-grid { grid-template-columns: 1fr; }
    .impact-grid { grid-template-columns: 1fr 1fr; }
    .testimonials-grid { grid-template-columns: 1fr; }
    .meal-breakdown { flex-wrap: wrap; }
  }
  @media (max-width: 600px) {
    .gallery-grid { grid-template-columns: 1fr; }
    .gallery-photo.wide, .gallery-photo.tall { grid-column: span 1; grid-row: span 1; aspect-ratio: 16/9; }
    .impact-grid { grid-template-columns: 1fr; }
    .phil-mosaic { grid-template-columns: 1fr; }
    .mosaic-photo.tall { aspect-ratio: 16/9; grid-row: span 1; }
  }
` }} />
      <div dangerouslySetInnerHTML={{ __html: `



<!-- ═══ HERO ═══ -->
<section class="hero">
  <div class="hero-bg">
    <!-- MEDIA: Meal distribution or community photography — warm, human
         File: ../media/csr/hero-community.jpg -->
  </div>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <div class="breadcrumb"><a href="../index.html">Asia Group</a><span>/</span><span style="color:var(--white);">Community Impact</span></div>
    
    <h1 class="hero-headline">
      Business as<br><em>Service to People.</em>
    </h1>
    <p class="hero-sub">
      For Alhaji Sani Isah Abubakar, success is measured not only in trade volumes — but in lives touched. Asia Group's philanthropy is not an afterthought. It is woven into the daily fabric of operations.
    </p>
    <div class="meal-counter-wrap">
      <div class="meal-number">4,000</div>
      <div class="meal-label-col">
        <div class="meal-label-top">Free Meals</div>
        <div class="meal-label-sub">Served Every Single Day</div>
        <div class="meal-label-sub">to the people of Kano</div>
      </div>
    </div>
    <div class="meal-breakdown">
      <div class="meal-time"><div class="meal-time-n">2,000</div><div class="meal-time-l">Afternoon</div></div>
      <div class="meal-time"><div class="meal-time-n">2,000</div><div class="meal-time-l">Evening</div></div>
      <div class="meal-time"><div class="meal-time-n">365</div><div class="meal-time-l">Days a Year</div></div>
      <div class="meal-time"><div class="meal-time-n">[ Yr ]</div><div class="meal-time-l">Running Since</div></div>
    </div>
  </div>
</section>

<!-- ═══ DAILY MEALS DEEP DIVE ═══ -->
<section class="meals-section">
  <div class="meals-split">
    <div class="meals-photo-side">
      <!-- MEDIA: Replace this div with full meal distribution photography
           File: ../media/csr/meal-programme-main.jpg
           For best effect: <img src="../media/csr/meal-programme-main.jpg" style="width:100%;height:100%;object-fit:cover;">
           Recommended: Long queue, food being served, warm community scene -->
      <div class="meals-photo-placeholder">
        MEDIA PLACEHOLDER<br><br>
        Daily Meal Distribution Photography<br><br>
        Recommended: Wide shot of food being<br>
        served to community members<br><br>
        This is the most emotionally powerful<br>
        image on the entire website — choose carefully
      </div>
    </div>
    <div class="meals-content-side">
      
      <h2>4,000 Meals.<br><em>Every Day. Without Fail.</em></h2>
      <div class="body-text" style="margin-top: 20px; color: rgba(255,255,255,0.65);">
        <p>Asia Group's daily feeding programme is one of the most consistent and significant acts of private philanthropy in Northern Nigeria. Every single day — without disruption, without publicity — 4,000 meals are prepared and distributed to people in Kano.</p>
        <p>The programme runs in two sessions: 2,000 meals in the afternoon and 2,000 meals in the evening. Those who come are fed. No questions asked. No conditions attached.</p>
      </div>
      <div class="meals-timeline">
        <div class="meal-event">
          <div class="meal-event-time">Noon</div>
          <div class="meal-event-info">
            <h4>Afternoon Distribution</h4>
            <p>2,000 meals prepared and served. Open to all community members — labourers, market traders, students, and the food insecure.</p>
          </div>
        </div>
        <div class="meal-event">
          <div class="meal-event-time">Eve</div>
          <div class="meal-event-info">
            <h4>Evening Distribution</h4>
            <p>A further 2,000 meals distributed as the day closes. Ensuring that no one in the community sleeps without a meal from Asia Group's programme.</p>
          </div>
        </div>
        <div class="meal-event">
          <!-- PLACEHOLDER: Confirm start year of daily feeding programme from CEO interview -->
          <div class="meal-event-time" style="font-size:16px;color:rgba(212,172,13,0.5);">[ Yr ]</div>
          <div class="meal-event-info">
            <h4>Programme Started</h4>
            <p>The daily feeding programme has been running continuously since [ year — confirm with Chairman ]. Uninterrupted, every day.</p>
          </div>
        </div>
      </div>
      <div class="meals-annual">
        <div class="meals-annual-stat">
          <div class="meals-annual-n">1.46M+</div>
          <div class="meals-annual-l">Meals Per Year</div>
        </div>
        <div class="meals-annual-stat">
          <!-- PLACEHOLDER: Confirm cumulative total from start year -->
          <div class="meals-annual-n">[ M+ ]</div>
          <div class="meals-annual-l">Total Since Start</div>
        </div>
        <div class="meals-annual-stat">
          <!-- PLACEHOLDER: Confirm approximate annual cost -->
          <div class="meals-annual-n">[ ₦M ]</div>
          <div class="meals-annual-l">Annual Investment</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ PHOTO GALLERY ═══ -->
<section class="gallery-section">
  <div class="gallery-inner">
    
    <h2>Seen in the Field,<br><em>Not in a Report</em></h2>
    <!--
    PHOTOGRAPHY DIRECTION FOR GALLERY:
    Capture 8–10 authentic community moments across:
    - Meal distribution (queues, serving, eating, community gathering)
    - Children/youth (educational or community activities)
    - Elderly beneficiaries (dignity, respect)
    - Asia Group staff/volunteers on the ground
    - Programme setup (food preparation, logistics)
    - Community leaders or religious figures (if appropriate and with permission)

    Every photograph should feel authentic — not staged. Real people, real moments.
    -->
    <div class="gallery-grid">
      <div class="gallery-photo wide">
        <!-- MEDIA: Wide community gathering shot — the best panoramic CSR photo
             File: ../media/csr/gallery/community-wide.jpg -->
        <div class="gallery-placeholder"><p>MEDIA: Wide community gathering<br>Best panoramic CSR photograph</p></div>
        <div class="gallery-photo-label"><p>Community — Kano</p></div>
      </div>
      <div class="gallery-photo">
        <!-- MEDIA: File: ../media/csr/gallery/meal-serving.jpg -->
        <div class="gallery-placeholder"><p>MEDIA: Food being served</p></div>
        <div class="gallery-photo-label"><p>Daily Meal Programme</p></div>
      </div>
      <div class="gallery-photo">
        <!-- MEDIA: File: ../media/csr/gallery/beneficiary-portrait.jpg -->
        <div class="gallery-placeholder"><p>MEDIA: Beneficiary portrait</p></div>
        <div class="gallery-photo-label"><p>Community Member</p></div>
      </div>
      <div class="gallery-photo tall">
        <!-- MEDIA: Tall portrait — staff member or volunteer in programme
             File: ../media/csr/gallery/volunteer-portrait.jpg -->
        <div class="gallery-placeholder"><p>MEDIA: Programme<br>volunteer / staff<br>portrait (tall)</p></div>
        <div class="gallery-photo-label"><p>Asia Group Team</p></div>
      </div>
      <div class="gallery-photo">
        <!-- MEDIA: File: ../media/csr/gallery/food-preparation.jpg -->
        <div class="gallery-placeholder"><p>MEDIA: Food preparation</p></div>
        <div class="gallery-photo-label"><p>Meal Preparation</p></div>
      </div>
      <div class="gallery-photo">
        <!-- MEDIA: File: ../media/csr/gallery/queue-or-crowd.jpg -->
        <div class="gallery-placeholder"><p>MEDIA: Distribution queue or crowd</p></div>
        <div class="gallery-photo-label"><p>Daily Distribution</p></div>
      </div>
      <div class="gallery-photo">
        <!-- MEDIA: File: ../media/csr/gallery/youth-or-children.jpg -->
        <div class="gallery-placeholder"><p>MEDIA: Youth / children programme</p></div>
        <div class="gallery-photo-label"><p>Youth Engagement</p></div>
      </div>
      <div class="gallery-photo">
        <!-- MEDIA: File: ../media/csr/gallery/community-leader.jpg -->
        <div class="gallery-placeholder"><p>MEDIA: Community leader or elder</p></div>
        <div class="gallery-photo-label"><p>Community Leadership</p></div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ OTHER PROGRAMMES ═══ -->
<section class="programmes-section">
  <div class="programmes-inner">
    
    <h2>A Complete Commitment<br><em>to Community</em></h2>
    <!-- PLACEHOLDER: All programme details below are template structures.
         Fill with confirmed programme names, descriptions, reach figures, and photography
         from CEO interview and CSR team session. Add or remove cards as needed. -->
    <div class="programmes-grid">
      <div class="programme-card">
        <div class="programme-photo">
          <!-- MEDIA: Meal programme photography
               File: ../media/csr/programme-meals.jpg -->
          <div class="programme-photo-placeholder">MEDIA: Daily Meals Programme</div>
        </div>
        <span class="programme-icon">🍽️</span>
        <div class="programme-name">Daily Feeding Programme</div>
        <span class="programme-status">Active — Daily</span>
        <p class="programme-desc">4,000 free meals served daily to the people of Kano — 2,000 in the afternoon and 2,000 in the evening. One of the largest private food security initiatives in Northern Nigeria, running continuously since [ year ].</p>
        <div class="programme-metric">
          <div class="programme-metric-n">4,000</div>
          <div class="programme-metric-l">Meals Per Day</div>
        </div>
      </div>

      <div class="programme-card">
        <div class="programme-photo">
          <!-- MEDIA: Education/scholarship photography
               File: ../media/csr/programme-education.jpg
               Recommended: Students, scholarship presentation, school environment -->
          <div class="programme-photo-placeholder">MEDIA: Education Programme</div>
        </div>
        <span class="programme-icon">🎓</span>
        <div class="programme-name">Education &amp; Scholarships</div>
        <!-- PLACEHOLDER: Confirm programme status and details with Chairman -->
        <span class="programme-status pending">Details — To Be Confirmed</span>
        <p class="programme-desc">Asia Group's commitment to education includes [ scholarship programme details, school support initiatives, and youth empowerment activities — to be confirmed with Group Chairman in CEO interview session ].</p>
        <div class="programme-metric">
          <div class="programme-metric-n">[ # ]</div>
          <div class="programme-metric-l">Students Supported</div>
        </div>
      </div>

      <div class="programme-card">
        <div class="programme-photo">
          <!-- MEDIA: Healthcare outreach photography
               File: ../media/csr/programme-healthcare.jpg
               Recommended: Medical outreach, free clinic, medicine distribution -->
          <div class="programme-photo-placeholder">MEDIA: Healthcare Programme</div>
        </div>
        <span class="programme-icon">🏥</span>
        <div class="programme-name">Healthcare Access</div>
        <span class="programme-status pending">Details — To Be Confirmed</span>
        <p class="programme-desc">Through Asia Pharmacy and the Group's healthcare network, Asia Group supports [ healthcare access initiatives — free medical outreach, medicine donations, community health campaigns — to be confirmed with Chairman and Pharmacy MD ].</p>
        <div class="programme-metric">
          <div class="programme-metric-n">[ # ]</div>
          <div class="programme-metric-l">Beneficiaries Reached</div>
        </div>
      </div>

      <div class="programme-card">
        <div class="programme-photo">
          <!-- MEDIA: Islamic/religious CSR photography
               File: ../media/csr/programme-religious.jpg
               Recommended: Mosque support, Ramadan programme, community worship -->
          <div class="programme-photo-placeholder">MEDIA: Community &amp; Religious Support</div>
        </div>
        <span class="programme-icon">🕌</span>
        <div class="programme-name">Community &amp; Religious Support</div>
        <span class="programme-status pending">Details — To Be Confirmed</span>
        <p class="programme-desc">[ Religious community support activities — mosque contributions, Ramadan programmes, Eid distributions, and other faith-community initiatives — to be confirmed with Chairman in CEO interview ].</p>
        <div class="programme-metric">
          <div class="programme-metric-n">[ # ]</div>
          <div class="programme-metric-l">Communities Reached</div>
        </div>
      </div>

      <div class="programme-card">
        <div class="programme-photo">
          <!-- MEDIA: Youth empowerment / entrepreneurship photography
               File: ../media/csr/programme-youth.jpg -->
          <div class="programme-photo-placeholder">MEDIA: Youth Empowerment</div>
        </div>
        <span class="programme-icon">💼</span>
        <div class="programme-name">Youth Empowerment</div>
        <span class="programme-status pending">Details — To Be Confirmed</span>
        <p class="programme-desc">[ Youth skills training, apprenticeship, entrepreneurship support, and employment creation initiatives — to be confirmed. Note: Asia Group's 19 locations employ hundreds of young people across Kano — this itself is a youth empowerment story. ]</p>
        <div class="programme-metric">
          <div class="programme-metric-n">[ # ]</div>
          <div class="programme-metric-l">Young People Employed</div>
        </div>
      </div>

      <div class="programme-card">
        <div class="programme-photo">
          <!-- MEDIA: Infrastructure / community development photography
               File: ../media/csr/programme-infrastructure.jpg
               Recommended: Road, borehole, community facility built by Asia Group -->
          <div class="programme-photo-placeholder">MEDIA: Infrastructure &amp; Development</div>
        </div>
        <span class="programme-icon">🏗️</span>
        <div class="programme-name">Infrastructure &amp; Development</div>
        <span class="programme-status pending">Details — To Be Confirmed</span>
        <p class="programme-desc">[ Community infrastructure contributions — roads, boreholes, public facilities, market infrastructure — to be confirmed with Chairman. Many major traders in Kano have made significant physical contributions to market and community infrastructure. ]</p>
        <div class="programme-metric">
          <div class="programme-metric-n">[ # ]</div>
          <div class="programme-metric-l">Projects Completed</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ IMPACT NUMBERS ═══ -->
<section class="impact-section">
  <div class="impact-bg-text" aria-hidden="true">IMPACT</div>
  <div class="impact-inner">
    
    <h2>Impact That Can<br><em>Be Measured</em></h2>
    <!-- PLACEHOLDER: All figures below to be confirmed from CEO interview and CSR team -->
    <div class="impact-grid">
      <div class="impact-stat">
        <div class="impact-n">1.46M<span style="font-size:32px;">+</span></div>
        <div class="impact-l">Meals Per Year</div>
        <p class="impact-d">Based on 4,000 meals × 365 days. Cumulative total from programme start to be confirmed.</p>
      </div>
      <div class="impact-stat">
        <div class="impact-n" style="color:var(--gold-light);">[ # ]</div>
        <div class="impact-l">Students Supported</div>
        <p class="impact-d">Scholarship and education programme beneficiaries — to be confirmed with Chairman.</p>
      </div>
      <div class="impact-stat">
        <div class="impact-n" style="color:var(--gold-light);">[ # ]</div>
        <div class="impact-l">Communities Reached</div>
        <p class="impact-d">Distinct communities benefitting from Asia Group's combined CSR programmes — to be confirmed.</p>
      </div>
      <div class="impact-stat">
        <div class="impact-n" style="color:var(--gold-light);">[ ₦B ]</div>
        <div class="impact-l">Total CSR Investment</div>
        <p class="impact-d">Cumulative investment in community programmes since the founding of the daily feeding programme — to be estimated with Finance team.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══ TESTIMONIALS ═══ -->
<section class="testimonials-section">
  <div class="testimonials-inner">
    
    <h2>What People Say About<br><em>Asia Group's Impact</em></h2>
    <!-- PLACEHOLDER: All testimonials to be collected from community members, local leaders,
         religious figures, and beneficiaries during or after field visits.
         Collect: name, role/position, photograph (with permission), quote (Hausa or English).
         These are among the most powerful content on the entire website. -->
    <div class="testimonials-grid">
      <div class="testimonial-card">
        <div class="testimonial-quote-mark">"</div>
        <div class="testimonial-quote">
          <!-- PLACEHOLDER: Real quote from community leader, beneficiary, or religious figure -->
          [ Direct quote from a community member, traditional leader, religious figure, or long-term beneficiary of the daily meal programme — to be collected during or after field visits. Hausa or English, translated if needed. ]
        </div>
        <div class="testimonial-person">
          <div class="testimonial-avatar">
            <!-- MEDIA: Portrait thumbnail — ../media/csr/testimonial-1-thumb.jpg -->
          </div>
          <div>
            <div class="testimonial-name">[ Name — TBD ]</div>
            <div class="testimonial-role">[ Title / Role — e.g. Community Leader, Kano ]</div>
          </div>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-quote-mark">"</div>
        <div class="testimonial-quote">[ Quote from a second community voice — a market trader, a beneficiary family member, or a local government official who has witnessed the programme — to be collected. ]</div>
        <div class="testimonial-person">
          <div class="testimonial-avatar"></div>
          <div><div class="testimonial-name">[ Name — TBD ]</div><div class="testimonial-role">[ Role — TBD ]</div></div>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-quote-mark">"</div>
        <div class="testimonial-quote">[ Quote from a third voice — ideally a religious or traditional authority who can speak to the Chairman's character and community standing, lending external validation to the CSR narrative. ]</div>
        <div class="testimonial-person">
          <div class="testimonial-avatar"></div>
          <div><div class="testimonial-name">[ Name — TBD ]</div><div class="testimonial-role">[ Role — TBD ]</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ PARTNER CTA ═══ -->
<section class="partner-cta" id="partner-cta">
  <div class="partner-cta-inner">
    <div class="partner-cta-content">
      
      <h2>Support a Legacy<br><em>Being Built Daily</em></h2>
      <p>Whether you are a corporation seeking a CSR partnership, a donor looking to scale community impact, or an organisation aligned with food security and community empowerment — Asia Group welcomes your partnership.</p>
    </div>
    <div class="partner-cta-actions">
      <a href="../index.html#contact" class="btn-primary">Discuss a Partnership →</a>
      <a href="../news/index.html" class="btn-outline">Read Our Impact Stories</a>
    </div>
  </div>
</section>



<script>
  const fadeEls = document.querySelectorAll('.fade-up');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => obs.observe(el));
</script>
` }} />
    </div>
  );
}
