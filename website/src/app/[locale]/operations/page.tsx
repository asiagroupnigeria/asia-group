"use client";
import React, { useEffect, useState } from 'react';
import { LocationsGrid } from '@/components/operations/LocationsGrid';
import { locations } from '@/data/locations';

export default function OperationsPage() {
  
  useEffect(() => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.loc-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        cards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-subsidiary') === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = '1';
          (e.target as HTMLElement).style.transform = 'translateY(0)';
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });

    cards.forEach((card, i) => {
      (card as HTMLElement).style.opacity = '0';
      (card as HTMLElement).style.transform = 'translateY(24px)';
      (card as HTMLElement).style.transition = `opacity 0.5s ease ${(i % 3) * 0.1}s, transform 0.5s ease ${(i % 3) * 0.1}s`;
      observer.observe(card);
    });
      }, []);

  return (
    <div className="operations-page">
      
      <style dangerouslySetInnerHTML={{ __html: `
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  
  html { scroll-behavior: smooth; }
  body { font-family: var(--font-body); background: #ffffff; color: var(--dark); overflow-x: hidden; }

  /* ── NAV ── */
  nav {
    position: fixed; top: 0; left: 0; right: 0; height: 80px;
    background: rgba(10,10,10,0.95); backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 60px; z-index: 1000;
  }
  .nav-back { display: flex; align-items: center; gap: 10px; font-family: var(--font-condensed); font-size: 12px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: color .2s; }
  .nav-back:hover { color: var(--white); }
  .nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; font-family: var(--font-condensed); font-size: 17px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--white); }
  .nav-logo img { height: 40px; }
  .nav-cta { font-family: var(--font-condensed); font-size: 12px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: var(--dark); background: var(--silver-light); padding: 10px 24px; text-decoration: none; }

  /* ── HERO ── */
  .hero {
    padding-top: 80px; height: 85vh; min-height: 600px;
    position: relative; display: flex; align-items: flex-end;
    overflow: hidden;
  }
  .hero-bg {
    position: absolute; inset: 0;
    /* MEDIA: Best aerial/drone shot of main Kano warehouse complex
       File: ../media/operations/kano-aerial-hero.jpg OR kano-drone.mp4
       Recommended: Highest-impact photograph across all 19 locations — drone preferred */
    background: linear-gradient(160deg, #071a09 0%, #0a0a0a 55%, #111a11 100%);
  }
  /* MEDIA VIDEO VERSION — uncomment when drone footage is ready:
  .hero-bg video { position:absolute;inset:0;width:100%;height:100%;object-fit:cover; } */
  .hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.2) 100%);
  }
  .hero-grid-lines {
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,255,255,0.018) 80px, rgba(255,255,255,0.018) 81px),
      repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,0.018) 80px, rgba(255,255,255,0.018) 81px);
  }
  .hero-content {
    position: relative; z-index: 2; padding: 0 60px 80px;
    max-width: 1300px; margin: 0 auto; width: 100%;
  }
  .breadcrumb { display: flex; align-items: center; gap: 10px; font-family: var(--font-condensed); font-size: 11px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); margin-bottom: 24px; }
  .breadcrumb a { color: var(--silver-light); text-decoration: none; }
  .hero-eyebrow { font-family: var(--font-condensed); font-size: 12px; font-weight: 600; letter-spacing: 0.3em; text-transform: uppercase; color: var(--silver-light); display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
  .hero-eyebrow::before { content: ''; display: block; width: 30px; height: 1px; background: var(--silver-light); }
  .hero-headline {
    font-family: var(--font-display); font-size: clamp(52px, 7.5vw, 110px);
    font-weight: 300; line-height: 0.95; color: var(--white); letter-spacing: -0.01em;
  }
  .hero-headline em { font-style: italic; color: var(--silver-light); }
  .hero-headline .line-2 { display: block; padding-left: clamp(60px, 8vw, 140px); }
  .hero-sub { font-size: 17px; font-weight: 300; line-height: 1.8; color: rgba(255,255,255,0.55); max-width: 540px; margin-top: 24px; }
  /* Stat band at bottom of hero */
  .hero-stat-band {
    position: absolute; bottom: 0; left: 0; right: 0; z-index: 2;
    display: flex; border-top: 1px solid rgba(255,255,255,0.07);
  }
  .hero-stat {
    flex: 1; padding: 24px 0; text-align: center;
    border-right: 1px solid rgba(255,255,255,0.07);
    background: rgba(10,10,10,0.82); backdrop-filter: blur(12px);
  }
  .hero-stat:last-child { border-right: none; }
  .hero-stat-n { font-family: var(--font-condensed); font-size: 30px; font-weight: 700; color: var(--silver-light); line-height: 1; }
  .hero-stat-l { font-size: 11px; font-weight: 400; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin-top: 6px; }

  /* ── FILTER BAR ── */
  .filter-bar { background: #f8f9fa; border-bottom: 1px solid rgba(0,0,0,0.06); position: sticky; top: 80px; z-index: 100; }
  .filter-bar-inner { max-width: 1300px; margin: 0 auto; padding: 0 60px; display: flex; align-items: center; gap: 0; overflow-x: auto; }
  .filter-btn {
    font-family: var(--font-condensed); font-size: 12px; font-weight: 600;
    letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted);
    padding: 18px 24px; background: none; border: none; border-bottom: 2px solid transparent;
    cursor: pointer; transition: color .2s, border-color .2s; white-space: nowrap;
    margin-bottom: -1px;
  }
  .filter-btn.active { color: var(--dark); border-bottom-color: var(--dark); }
  .filter-btn:hover { color: var(--dark); }
  .filter-count { font-size: 10px; background: rgba(0,0,0,0.05); border-radius: 99px; padding: 2px 7px; margin-left: 6px; color: var(--muted); }
  .filter-btn.active .filter-count { background: rgba(0,0,0,0.1); color: var(--dark); }

  /* ── LOCATIONS GRID ── */
  .locations-section { padding: 80px 60px 120px; background: #ffffff; }
  .locations-inner { max-width: 1300px; margin: 0 auto; }
  .locations-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 2px; background: rgba(0,0,0,0.04);
  }

  /* LOCATION CARD */
  .loc-card {
    background: #f8f9fa; overflow: hidden;
    display: flex; flex-direction: column;
    transition: background .25s;
    cursor: pointer;
  }
  .loc-card:hover { background: #ffffff; }
  /* Photography container */
  .loc-photo {
    position: relative; aspect-ratio: 1/1; overflow: hidden;
    /* MEDIA: Exterior photograph of this specific location
       Each card has a unique File path in its comment */
  }
  .loc-photo-img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform .5s ease;
    /* MEDIA: Replace background with actual <img> tag */
    background: var(--dark-3);
    display: flex; align-items: center; justify-content: center;
  }
  .loc-card:hover .loc-photo-img { transform: scale(1.04); }
  .loc-photo-placeholder {
    width: 100%; height: 100%;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 10px; padding: 20px; text-align: center;
  }
  .loc-photo-placeholder svg { opacity: 0.1; }
  .loc-photo-placeholder p { font-family: var(--font-condensed); font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.15); line-height: 1.6; }
  /* Subsidiary badge */
  .loc-badge {
    position: absolute; top: 14px; left: 14px;
    font-family: var(--font-condensed); font-size: 10px; font-weight: 700;
    letter-spacing: 0.12em; text-transform: uppercase;
    padding: 5px 10px; background: rgba(10,10,10,0.85);
    border: 1px solid rgba(255,255,255,0.1); color: var(--white);
    backdrop-filter: blur(6px);
  }
  .loc-badge.wholesale { border-color: rgba(76,175,80,0.5); color: var(--green-light); }
  .loc-badge.pharmacy  { border-color: rgba(79,193,172,0.5); color: #4DB6AC; }
  .loc-badge.automobiles { border-color: rgba(239,83,80,0.5); color: #EF5350; }
  .loc-badge.beverages  { border-color: rgba(66,165,245,0.5); color: #42A5F5; }
  .loc-badge.cosmetics  { border-color: rgba(206,147,216,0.5); color: #CE93D8; }
  .loc-badge.phones     { border-color: rgba(79,195,247,0.5); color: #4FC3F7; }
  /* Location number */
  .loc-number {
    position: absolute; bottom: 14px; right: 14px;
    font-family: var(--font-condensed); font-size: 28px; font-weight: 800;
    color: rgba(0,0,0,0.04); line-height: 1; pointer-events: none;
  }
  /* Card body */
  .loc-body { padding: 24px 24px 28px; flex: 1; display: flex; flex-direction: column; }
  .loc-name { font-family: var(--font-condensed); font-size: 17px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: var(--dark); margin-bottom: 4px; }
  .loc-role { font-size: 12px; color: var(--muted); font-weight: 400; letter-spacing: 0.06em; text-transform: uppercase; font-family: var(--font-condensed); margin-bottom: 14px; }
  .loc-address { font-size: 13px; color: rgba(0,0,0,0.5); font-weight: 300; line-height: 1.55; margin-bottom: 16px; }
  /* Key figures row */
  .loc-figures { display: flex; gap: 0; border: 1px solid rgba(0,0,0,0.06); margin-top: auto; }
  .loc-figure { flex: 1; padding: 12px 14px; border-right: 1px solid rgba(0,0,0,0.06); }
  .loc-figure:last-child { border-right: none; }
  .loc-fig-val { font-family: var(--font-condensed); font-size: 15px; font-weight: 700; color: var(--dark); line-height: 1; }
  .loc-fig-val.tbd { color: rgba(0,0,0,0.2); font-size: 12px; }
  .loc-fig-lbl { font-size: 9px; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 4px; }
  /* Expand overlay */
  .loc-expand {
    position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 80%);
    display: flex; flex-direction: column; justify-content: flex-end;
    padding: 16px; opacity: 0; transition: opacity .3s; pointer-events: none;
  }
  .loc-card:hover .loc-expand { opacity: 1; pointer-events: auto; }
  .loc-expand-title { font-family: var(--font-condensed); font-size: 13px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--silver-light); margin-bottom: 12px; }
  .loc-expand-md { font-size: 14px; color: var(--white); margin-bottom: 4px; font-weight: 500; }
  .loc-expand-md-title { font-size: 12px; color: var(--muted); margin-bottom: 16px; }
  .loc-expand-desc { font-size: 13px; font-weight: 300; line-height: 1.7; color: rgba(255,255,255,0.6); }

  /* ── MAP SECTION ── */
  .map-section { padding: 100px 60px; background: #f8f9fa; }
  .map-inner { max-width: 1300px; margin: 0 auto; }
  .map-header { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: end; margin-bottom: 48px; }
  .section-tag { font-family: var(--font-condensed); font-size: 11px; font-weight: 600; letter-spacing: 0.3em; text-transform: uppercase; color: var(--muted); display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
  .section-tag::before { content: ''; display: block; width: 30px; height: 1px; background: var(--muted); }
  h2 { font-family: var(--font-display); font-size: clamp(32px, 4vw, 52px); font-weight: 700; color: var(--dark); line-height: 1.1; }
  h2 em { font-style: normal; color: var(--muted); }
  .map-container {
    width: 100%; aspect-ratio: 16/7;
    /* MEDIA: Replace with embedded Google Map or custom Mapbox map
       Recommended: Dark-themed map, Kano centred, 19 custom green pins
       Each pin should be clickable, showing location name, type, and photo thumbnail
       Google Maps Embed URL:
       https://www.google.com/maps/embed?pb=... (generate in Google Maps with all 19 pins saved)
       OR use Mapbox GL JS for full custom styling matching site palette */
    background: #e9ecef; border: 1px solid rgba(0,0,0,0.06);
    display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;
  }
  .map-placeholder-inner { text-align: center; }
  .map-placeholder-inner svg { opacity: 0.08; margin-bottom: 20px; }
  .map-placeholder-inner h3 { font-family: var(--font-condensed); font-size: 15px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(0,0,0,0.4); margin-bottom: 8px; }
  .map-placeholder-inner p { font-family: var(--font-condensed); font-size: 11px; letter-spacing: 0.1em; color: rgba(0,0,0,0.3); line-height: 1.7; }
  /* Map pin legend */
  .map-legend { display: flex; gap: 24px; flex-wrap: wrap; margin-top: 20px; }
  .legend-item { display: flex; align-items: center; gap: 8px; font-family: var(--font-condensed); font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }
  .legend-dot { width: 10px; height: 10px; border-radius: 0; flex-shrink: 0; }

  /* ── PHOTO STRIP ── */
  .strip-section { overflow: hidden; background: #ffffff; }
  .strip-inner {
    display: flex; gap: 4px;
    /* Each strip image: 300px wide, full height */
  }
  .strip-photo {
    flex: 0 0 280px; height: 220px; position: relative; overflow: hidden;
    /* MEDIA: Best operational photography — interior warehouse, products, loading bays
       Files: ../media/operations/strip-[n].jpg (pick 8 best varied shots) */
    background: #e9ecef;
    display: flex; align-items: center; justify-content: center;
  }
  .strip-photo img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
  .strip-photo:hover img { transform: scale(1.06); }
  .strip-photo-placeholder { font-family: var(--font-condensed); font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(0,0,0,0.2); text-align: center; padding: 12px; }

  /* ── CAPACITY TABLE ── */
  .capacity-section { padding: 100px 60px; background: #f8f9fa; }
  .cap-inner { max-width: 1300px; margin: 0 auto; }
  .cap-table { width: 100%; margin-top: 48px; border: 1px solid rgba(0,0,0,0.06); border-collapse: collapse; }
  .cap-table th { font-family: var(--font-condensed); font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); padding: 14px 20px; text-align: left; border-bottom: 1px solid rgba(0,0,0,0.06); background: rgba(0,0,0,0.02); }
  .cap-table td { font-size: 13px; font-weight: 400; color: rgba(0,0,0,0.65); padding: 16px 20px; border-bottom: 1px solid rgba(0,0,0,0.04); vertical-align: middle; }
  .cap-table tr:last-child td { border-bottom: none; }
  .cap-table tr:hover td { background: rgba(0,0,0,0.02); }
  .cap-table .loc-name-cell { font-family: var(--font-condensed); font-size: 13px; font-weight: 700; letter-spacing: 0.04em; color: var(--dark); }
  .cap-table .tbd { color: rgba(0,0,0,0.2); font-style: normal; }
  .cap-total td { background: rgba(212,172,13,0.06); border-top: 1px solid rgba(212,172,13,0.2); font-weight: 700; color: var(--dark); font-family: var(--font-condensed); font-size: 14px; letter-spacing: 0.04em; }

  /* ── CTA ── */
  .cta-section { padding: 100px 60px; background: var(--green); }
  .cta-inner { max-width: 1300px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 40px; flex-wrap: wrap; }
  .cta-section h2 { color: var(--white); }
  .btn-primary { font-family: var(--font-condensed); font-size: 13px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: var(--dark); background: var(--silver-light); padding: 18px 48px; text-decoration: none; display: inline-block; white-space: nowrap; transition: background .2s; }
  .btn-primary:hover { background: var(--white); }
  .btn-outline { font-family: var(--font-condensed); font-size: 13px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: var(--white); border: 1px solid rgba(255,255,255,0.35); padding: 18px 48px; text-decoration: none; display: inline-block; white-space: nowrap; transition: all .2s; }
  .btn-outline:hover { border-color: var(--white); background: rgba(255,255,255,0.1); }

  .footer-mini { background: var(--black); border-top: 1px solid rgba(255,255,255,0.06); padding: 32px 60px; display: flex; align-items: center; justify-content: space-between; }
  .footer-mini p { font-size: 12px; color: rgba(255,255,255,0.2); font-weight: 300; }
  .footer-mini a { color: var(--silver-light); text-decoration: none; font-family: var(--font-condensed); font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1100px) {
    nav, .hero-content, .locations-section, .map-section, .capacity-section, .cta-section, .footer-mini { padding-left: 32px; padding-right: 32px; }
    .filter-bar-inner { padding-left: 32px; padding-right: 32px; }
  }
  @media (max-width: 900px) {
    nav, .hero-content, .locations-section, .map-section, .capacity-section, .cta-section, .footer-mini { padding-left: 24px; padding-right: 24px; }
    .filter-bar-inner { padding-left: 24px; }
    .locations-grid { grid-template-columns: 1fr 1fr; }
    .map-header { grid-template-columns: 1fr; gap: 32px; }
    .cta-inner { flex-direction: column; align-items: flex-start; }
    .hero-stat-band { flex-wrap: wrap; }
    .hero-stat { min-width: 50%; }
  }
  @media (max-width: 600px) {
    .hero-content { padding-left: 24px; padding-right: 24px; }
    .locations-grid { grid-template-columns: 1fr; }
    .cap-table { display: block; overflow-x: auto; }
  }

  /* JS-driven filter hide */
  .loc-card.hidden { display: none; }
` }} />
      <div dangerouslySetInnerHTML={{ __html: `



<!-- ═══════════════════════════════ HERO ═══════════════════════════════ -->
<section class="page-header">
  <div class="page-header__watermark" aria-hidden="true">OPERATIONS</div>
  <div class="inner">
    <h1 class="display-title">Scale Without<br>Compromise.</h1>
    <p class="page-header__desc">
      Operating 19 high-capacity facilities across Kano, Abuja, Niger, and Chad. Moving thousands of tonnes of commodities daily through Africa's most demanding trade routes.
    </p>
  </div>
</section>
` }} />


      <LocationsGrid locations={locations} />

      <div dangerouslySetInnerHTML={{ __html: `

<!-- ═══════════════════════════════ PHOTO STRIP ═══════════════════════════════ -->
<section class="strip-section">
  <div class="strip-inner">
    <!-- MEDIA: 8 best operational photographs — varied: interior, products, loading, team
         Files: ../media/operations/strip-01.jpg through strip-08.jpg
         Replace each .strip-photo with: <div class="strip-photo"><img src="../media/operations/strip-0N.jpg" alt="Asia Group Operations"></div> -->
    <div class="strip-photo"><div class="strip-photo-placeholder">MEDIA: Operations Strip 01<br>Interior warehouse</div></div>
    <div class="strip-photo"><div class="strip-photo-placeholder">MEDIA: Strip 02<br>Loading bay</div></div>
    <div class="strip-photo"><div class="strip-photo-placeholder">MEDIA: Strip 03<br>Product stacks</div></div>
    <div class="strip-photo"><div class="strip-photo-placeholder">MEDIA: Strip 04<br>Truck fleet</div></div>
    <div class="strip-photo"><div class="strip-photo-placeholder">MEDIA: Strip 05<br>Team at work</div></div>
    <div class="strip-photo"><div class="strip-photo-placeholder">MEDIA: Strip 06<br>Warehouse depth</div></div>
    <div class="strip-photo"><div class="strip-photo-placeholder">MEDIA: Strip 07<br>Product close-up</div></div>
    <div class="strip-photo"><div class="strip-photo-placeholder">MEDIA: Strip 08<br>Aerial or signage</div></div>
  </div>
</section>

<!-- ═══════════════════════════════ MAP ═══════════════════════════════ -->
` }} />
      <section className="map-section">
  <div className="map-inner">
    <div className="map-header">
      <div>
        
        <h2>19 Pins.<br/>One City.</h2>
      </div>
      <p style={{fontSize:'15px', fontWeight:300, lineHeight:1.85, color:'rgba(255,255,255,0.5)'}}>
        Every pin on this map is a staffed, operational facility. No other distribution company in Kano — or Northern Nigeria — commands this density. This is what market dominance looks like from above.
      </p>
    </div>
    <div className="map-container" id="kano-map-root" style={{minHeight: '600px'}}>
        <iframe src="https://www.google.com/maps/d/embed?mid=1-gnOIB3xUY8FlbXVRdkAs7kRuFe20-E&ehbc=2E312F&noprof=1" width="100%" height="600" style={{ border: 0 }}></iframe>
      </div>
    <div className="map-legend">
      <div className="legend-item"><div className="legend-dot" style={{background:'var(--green-light)'}}></div>Wholesale &amp; Distribution</div>
      <div className="legend-item"><div className="legend-dot" style={{background:'#4DB6AC'}}></div>Asia Pharmacy</div>
      <div className="legend-item"><div className="legend-dot" style={{background:'#EF5350'}}></div>Asia Automobiles</div>
      <div className="legend-item"><div className="legend-dot" style={{background:'#42A5F5'}}></div>Asia Beverages</div>
      <div className="legend-item"><div className="legend-dot" style={{background:'#CE93D8'}}></div>Asia Cosmetics</div>
      <div className="legend-item"><div className="legend-dot" style={{background:'#4FC3F7'}}></div>Asia Phones</div>
    </div>
  </div>
</section>
      <div dangerouslySetInnerHTML={{ __html: `



<!-- ═══════════════════════════════ CTA ═══════════════════════════════ -->
<section class="cta-section">
  <div class="cta-inner">
    <h2>Want to see an<br>Asia Group facility?</h2>
    <div style="display:flex;gap:16px;flex-wrap:wrap;">
      <a href="../index.html#contact" class="btn-primary">Book a Visit →</a>
      <a href="../index.html#contact" class="btn-outline">Distribution Enquiry</a>
    </div>
  </div>
</section>




` }} />
    </div>
  );
}
