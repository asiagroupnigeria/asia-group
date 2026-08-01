'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function LeadershipPage() {
  useEffect(() => {
    const filterBtns = document.querySelectorAll('.div-pill');
    const cards = document.querySelectorAll('.loc-md-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-div-filter');
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        cards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-div') === filter) {
            (card as HTMLElement).style.display = 'block';
          } else {
            (card as HTMLElement).style.display = 'none';
          }
        });
      });
    });
    
    const fadeEls = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        if (el.isIntersecting) {
          el.target.classList.add('visible');
          observer.unobserve(el.target);
        }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="leadership-page">
      <style dangerouslySetInnerHTML={{ __html: `
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  
  html { scroll-behavior: smooth; }
  body { font-family: var(--font-body); background: var(--dark); color: var(--white); overflow-x: hidden; }

  nav {
    position: fixed; top: 0; left: 0; right: 0; height: 80px;
    background: rgba(10,10,10,0.95); backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 60px; z-index: 1000;
  }
  .nav-back { display:flex; align-items:center; gap:10px; font-family:var(--font-condensed); font-size:12px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:var(--muted); text-decoration:none; transition:color 0.2s; }
  .nav-back:hover { color: var(--white); }
  .nav-logo { display:flex; align-items:center; gap:12px; text-decoration:none; font-family:var(--font-condensed); font-size:17px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:var(--white); }
  .nav-logo img { height:40px; }
  .nav-cta { font-family:var(--font-condensed); font-size:12px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:var(--dark); background:var(--silver-light); padding:10px 24px; text-decoration:none; }

  /* FOUNDER FEATURE */
  .founder-section { padding: 0 60px 80px; background: var(--dark); }
  .founder-inner { max-width: 1300px; margin: 0 auto; }
  .founder-card {
    display: grid; grid-template-columns: 1fr 1fr;
    background: var(--dark-2); border: 1px solid rgba(255,255,255,0.06);
    overflow: hidden;
  }
  .founder-portrait {
    /* MEDIA: Full portrait of Alhaji Sani Isah Abubakar — PRIORITY ASSET
       File: media/leadership/ceo-portrait.jpg
       Recommended: Professional 3/4 or full-length portrait, formal or field setting */
    background: var(--green);
    display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 16px;
    aspect-ratio: 4/5; position: relative;
  }
  .founder-portrait-placeholder {
    text-align: center; padding: 32px;
  }
  .founder-portrait-placeholder svg { opacity: 0.15; margin-bottom: 16px; }
  .founder-portrait-placeholder p {
    font-family: var(--font-condensed); font-size: 11px; letter-spacing: 0.2em;
    text-transform: uppercase; color: rgba(255,255,255,0.25); line-height: 1.7;
  }
  .founder-badge {
    position: absolute; top: 24px; left: 24px;
    background: var(--silver-light); color: var(--dark);
    font-family: var(--font-condensed); font-size: 10px; font-weight: 700;
    letter-spacing: 0.12em; text-transform: uppercase; padding: 6px 12px;
  }
  .founder-content { padding: 64px 60px; display: flex; flex-direction: column; justify-content: center; }
  .founder-name { font-family: var(--font-display); font-size: 40px; font-weight: 500; color: var(--white); line-height: 1.2; margin-bottom: 6px; }
  .founder-title { font-family: var(--font-condensed); font-size: 13px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: var(--silver-light); margin-bottom: 32px; }
  .founder-bio { font-size: 16px; font-weight: 300; line-height: 1.9; color: rgba(255,255,255,0.6); }
  .founder-quote {
    font-family: var(--font-display); font-size: 22px; font-weight: 400; font-style: italic;
    color: rgba(255,255,255,0.85); line-height: 1.5;
    border-left: 3px solid var(--silver-light); padding-left: 24px; margin: 32px 0;
  }
  .founder-facts { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: rgba(255,255,255,0.06); margin-top: 32px; }
  .founder-fact { background: var(--dark); padding: 20px 24px; }
  .founder-fact-value { font-family: var(--font-condensed); font-size: 24px; font-weight: 700; color: var(--silver-light); line-height: 1; }
  .founder-fact-label { font-size: 11px; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 5px; }

  /* EXECUTIVE TEAM */
  .executives-section { padding: 100px 60px; background: var(--dark-2); }
  .executives-inner { max-width: 1300px; margin: 0 auto; }
  .executives-intro { max-width: 600px; margin-bottom: 60px; }
  .executives-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: rgba(255,255,255,0.04); }
  .exec-card { background: var(--dark); overflow: hidden; }
  .exec-portrait {
    aspect-ratio: 3/4; position: relative; overflow: hidden;
    /* MEDIA: Individual executive portrait
       Files: media/leadership/[exec-name].jpg
       Recommended: Consistent lighting, formal or business-casual, same background tone across all cards */
    background: var(--dark-3);
    display: flex; align-items: center; justify-content: center;
  }
  .exec-portrait-placeholder { text-align: center; padding: 24px; }
  .exec-portrait-placeholder svg { opacity: 0.1; margin-bottom: 12px; }
  .exec-portrait-placeholder p { font-family: var(--font-condensed); font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.15); line-height: 1.7; }
  .exec-hover {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(27,94,32,0.6) 0%, transparent 70%);
    opacity: 0; transition: opacity 0.3s;
    display: flex; align-items: flex-end; padding: 24px;
  }
  .exec-card:hover .exec-hover { opacity: 1; }
  .exec-hover-bio { font-size: 12px; line-height: 1.65; color: rgba(255,255,255,0.95); font-weight: 300; }
  .exec-info { padding: 24px 24px 28px; border-top: 1px solid rgba(255,255,255,0.04); }
  .exec-name { font-family: var(--font-condensed); font-size: 17px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--white); margin-bottom: 5px; }
  .exec-title { font-size: 12px; color: var(--silver-light); font-weight: 400; letter-spacing: 0.06em; margin-bottom: 12px; }
  .exec-subsidiary { display: inline-block; font-family: var(--font-condensed); font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.35); border: 1px solid rgba(255,255,255,0.1); padding: 4px 10px; }

  /* BOARD */
  .board-section { padding: 100px 60px; background: var(--dark); }
  .board-inner { max-width: 1300px; margin: 0 auto; }
  .board-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; background: rgba(255,255,255,0.04); margin-top: 60px; }
  .board-card { background: var(--dark-2); padding: 32px 28px 28px; }
  .board-avatar { width: 64px; height: 64px; border-radius: 50%;
    /* MEDIA: Board member headshot (circular) — File: media/leadership/board-[name].jpg */
    background: var(--dark-3); border: 2px solid rgba(255,255,255,0.08);
    display: flex; align-items: center; justify-content: center; margin-bottom: 20px;
    font-family: var(--font-condensed); font-size: 18px; font-weight: 700; color: var(--muted);
  }
  .board-name { font-family: var(--font-condensed); font-size: 15px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--white); margin-bottom: 5px; }
  .board-title { font-size: 12px; color: var(--silver-light); font-weight: 400; margin-bottom: 14px; }
  .board-bio { font-size: 13px; line-height: 1.7; color: var(--muted); font-weight: 300; }

  /* CTA */
  .cta-band { padding: 100px 60px; background: var(--green); }
  .cta-band-inner { max-width: 1300px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 40px; flex-wrap: wrap; }
  .cta-band h2 { font-family: var(--font-display); font-size: clamp(32px, 4vw, 56px); font-weight: 700; color: var(--white); }
  .cta-band h2 em { font-style: italic; color: var(--silver-light); }
  .btn-primary { font-family:var(--font-condensed); font-size:13px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:var(--dark); background:var(--silver-light); padding:18px 48px; text-decoration:none; display:inline-block; white-space:nowrap; transition: background 0.2s; }
  .btn-primary:hover { background: var(--white); }

  .footer-mini { background: var(--black); border-top: 1px solid rgba(255,255,255,0.06); padding: 32px 60px; display: flex; align-items: center; justify-content: space-between; }
  .footer-mini p { font-size: 12px; color: rgba(255,255,255,0.2); font-weight: 300; }
  .footer-mini a { color: var(--silver-light); text-decoration: none; font-family: var(--font-condensed); font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }

  @media (max-width: 1000px) {
    .founder-card { grid-template-columns: 1fr; }
    .founder-portrait { min-height: 400px; }
    .founder-content { padding: 40px 32px; }
    .executives-grid { grid-template-columns: 1fr 1fr; }
    .board-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 700px) {
    nav, .page-header, .founder-section, .executives-section, .board-section, .cta-band, .footer-mini { padding-left: 24px; padding-right: 24px; }
    .executives-grid, .board-grid { grid-template-columns: 1fr; }
    .founder-facts { grid-template-columns: 1fr 1fr; }
  }

  /* ── LOCATION MDs TIER ── */
  .location-mds-section { padding: 100px 60px; background: var(--dark-2); }
  .location-mds-intro { max-width: 1300px; margin: 0 auto 56px; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: end; }
  .location-mds-grid { max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: repeat(5, 1fr); gap: 2px; background: rgba(255,255,255,0.04); }
  .loc-md-card { background: var(--dark); overflow: hidden; position: relative; }
  .loc-md-portrait {
    aspect-ratio: 1; overflow: hidden; position: relative;
    /* MEDIA: Individual location MD portrait — circular crop displayed square
       Each card has its own file path in the comment */
    background: var(--dark-3);
    display: flex; align-items: center; justify-content: center;
  }
  .loc-md-portrait img { width: 100%; height: 100%; object-fit: cover; object-position: top; transition: transform .4s; }
  @media (hover: hover) { .loc-md-card:hover .loc-md-portrait img { transform: scale(1.05); } }
  .loc-md-placeholder { text-align: center; padding: 16px; }
  .loc-md-placeholder svg { opacity: 0.1; margin-bottom: 8px; }
  .loc-md-placeholder p { font-family: var(--font-condensed); font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.12); line-height: 1.6; }
  /* Subsidiary colour bar at top of each card */
  .loc-md-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; z-index: 2; }
  .loc-md-card[data-div="wholesale"]::before   { background: #4CAF50; }
  .loc-md-card[data-div="pharmacy"]::before    { background: #4DB6AC; }
  .loc-md-card[data-div="automobiles"]::before { background: #EF5350; }
  .loc-md-card[data-div="beverages"]::before   { background: #42A5F5; }
  .loc-md-card[data-div="cosmetics"]::before   { background: #CE93D8; }
  .loc-md-card[data-div="phones"]::before      { background: #4FC3F7; }
  /* Hover overlay with location info */
  .loc-md-hover {
    position: absolute; inset: 0; 
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
    display: flex; flex-direction: column; justify-content: flex-end;
    padding: 16px; opacity: 0; transition: opacity .3s; pointer-events: none;
  }
  @media (hover: hover) { .loc-md-card:hover .loc-md-hover { opacity: 1; } }
  .loc-md-hover-loc { font-family: var(--font-condensed); font-size: 9px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--white); margin-bottom: 4px; }
  .loc-md-hover-role { font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.85); line-height: 1.5; }
  /* Card label below portrait */
  .loc-md-label { padding: 14px 14px 16px; border-top: 1px solid rgba(255,255,255,0.04); }
  .loc-md-name { font-family: var(--font-condensed); font-size: 12px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: var(--white); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .loc-md-loc { font-size: 11px; color: var(--muted); font-weight: 300; margin-top: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  /* Division filter pills */
  .div-filter { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 40px; }
  .div-pill { font-family: var(--font-condensed); font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; padding: 7px 16px; border: 1px solid rgba(255,255,255,0.12); color: var(--muted); background: none; cursor: pointer; transition: all .2s; }
  .div-pill.active, .div-pill:hover { color: var(--white); border-color: rgba(255,255,255,0.4); background: rgba(255,255,255,0.05); }
  .loc-md-card.hidden { display: none; }

  @media (max-width: 1200px) { .location-mds-grid { grid-template-columns: repeat(4, 1fr); } }
  @media (max-width: 900px)  {
    .location-mds-section { padding-left: 24px; padding-right: 24px; }
    .location-mds-intro { grid-template-columns: 1fr; gap: 32px; }
    .location-mds-grid { grid-template-columns: repeat(3, 1fr); }
  }
  @media (max-width: 600px)  { .location-mds-grid { grid-template-columns: repeat(2, 1fr); } }
` }} />
      
      {/* PAGE HEADER */}
      <div dangerouslySetInnerHTML={{ __html: `
        <section class="page-header">
          <div class="page-header__watermark" aria-hidden="true">LEADERSHIP</div>
          <div class="inner">
            <h1 class="display-title">
              The Minds Behind<br>The Machine
            </h1>
            <p class="page-header__desc">
              Meet the executive team and 19 location managers who drive Asia Group's daily operations across four nations.
            </p>
          </div>
        </section>
      ` }} />

      <div dangerouslySetInnerHTML={{ __html: `
        <!-- EXECUTIVE TEAM -->
<section class="executives-section">
  <div class="executives-inner">
    <div class="executives-intro">
      
      <h2 style="font-family:var(--font-display); font-size: clamp(32px,4vw,52px); font-weight:300; color:var(--white); line-height:1.1;">
        The Executives Who<br>Run the Machine
      </h2>
      <p style="font-size:15px; font-weight:300; line-height:1.85; color:rgba(255,255,255,0.5); margin-top:16px;">
        Each subsidiary is led by a dedicated Managing Director with deep sector expertise. Together they form an executive team that has commanded Africa's most dominant distribution group for decades.
      </p>
    </div>

    <div class="executives-grid">

      <!-- PLACEHOLDER EXECUTIVE CARDS — Complete after sessions with each subsidiary MD -->
      <!-- Template for each card:
        Name, Title, Subsidiary, 2-3 sentence bio, Portrait image path
        Recommended: Consistent portrait style — formal, dark or white background, shoulders-up
      -->

      <div class="exec-card">
        <div class="exec-portrait">
          <!-- MEDIA: Group MD portrait — File: media/leadership/group-md.jpg -->
          <img src="/media/leadership/ceo-sani-isah.jpg" alt="Sani Isah" style="width: 100%; height: 100%; object-fit: cover;" />
          <div class="exec-hover"></div>
        </div>
        <div class="exec-info">
          <div class="exec-name">Sani Isah</div>
          <div class="exec-title">Group Managing Director</div>
          <span class="exec-subsidiary">Asia Group</span>
        </div>
      </div>

      <div class="exec-card">
        <div class="exec-portrait">
          <img src="/media/leadership/khalid.jpeg" alt="Khalid Sabiu Sulaiman" style="width: 100%; height: 100%; object-fit: cover;" />
          <div class="exec-hover"></div>
        </div>
        <div class="exec-info">
          <div class="exec-name">Khalid Sabiu Sulaiman</div>
          <div class="exec-title">Market Development Officer</div>
          <span class="exec-subsidiary">Asia Group</span>
        </div>
      </div>

      <div class="exec-card">
        <div class="exec-portrait">
          <img src="/media/leadership/khadija.jpeg" alt="Khadija Sabiu Sulaiman" style="width: 100%; height: 100%; object-fit: cover;" />
          <div class="exec-hover"></div>
        </div>
        <div class="exec-info">
          <div class="exec-name">Khadija Sabiu Sulaiman</div>
          <div class="exec-title">Head Of Expansion</div>
          <span class="exec-subsidiary">Asia Group</span>
        </div>
      </div>

      <div class="exec-card">
        <div class="exec-portrait">
          <img src="/media/leadership/abba-sani-isah-md-main-branch.png" alt="Abba Sani Isah" style="width: 100%; height: 100%; object-fit: cover;" />
          <div class="exec-hover"></div>
        </div>
        <div class="exec-info">
          <div class="exec-name">Abba Sani Isah</div>
          <div class="exec-title">Managing Director</div>
          <span class="exec-subsidiary">Asia Wholesale</span>
        </div>
      </div>

      <div class="exec-card">
        <div class="exec-portrait">
          <!-- MEDIA: Asia Pharmacy MD portrait — File: media/leadership/pharmacy-md.jpg -->
          <img src="/media/leadership/Saddam-md-pharamacy.png" alt="Saddam" style="width: 100%; height: 100%; object-fit: cover;" />
          <div class="exec-hover"></div>
        </div>
        <div class="exec-info">
          <div class="exec-name">Saddam</div>
          <div class="exec-title">Managing Director</div>
          <span class="exec-subsidiary">Asia Pharmacy</span>
        </div>
      </div>

      <div class="exec-card">
        <div class="exec-portrait">
          <!-- MEDIA: Asia Automobiles MD portrait — File: media/leadership/automobiles-md.jpg -->
          <img src="/media/leadership/Abubakar Bala Muhammad-md-automobile-post-office.png" alt="Abubakar Bala Muhammad" style="width: 100%; height: 100%; object-fit: cover;" />
          <div class="exec-hover"></div>
        </div>
        <div class="exec-info">
          <div class="exec-name">Abubakar Bala Muhammad</div>
          <div class="exec-title">Managing Director</div>
          <span class="exec-subsidiary">Asia Automobiles</span>
        </div>
      </div>

      <div class="exec-card">
        <div class="exec-portrait">
          <!-- MEDIA: Asia Beverages MD portrait — File: media/leadership/beverages-md.jpg -->
          <img src="/media/leadership/Sani Mustapha Musa-md-beverages.png" alt="Sani Mustapha Musa" style="width: 100%; height: 100%; object-fit: cover;" />
          <div class="exec-hover"></div>
        </div>
        <div class="exec-info">
          <div class="exec-name">Sani Mustapha Musa</div>
          <div class="exec-title">Managing Director</div>
          <span class="exec-subsidiary">Asia Beverages</span>
        </div>
      </div>

      <div class="exec-card">
        <div class="exec-portrait">
          <!-- MEDIA: Asia Cosmetics MD portrait — File: media/leadership/cosmetics-md.jpg -->
          <img src="/media/leadership/Abdulaziz Yusuf-md-cosmetics-sg.png" alt="Abdulaziz Yusuf" style="width: 100%; height: 100%; object-fit: cover;" />
          <div class="exec-hover"></div>
        </div>
        <div class="exec-info">
          <div class="exec-name">Abdulaziz Yusuf</div>
          <div class="exec-title">Managing Director</div>
          <span class="exec-subsidiary">Asia Cosmetics</span>
        </div>
      </div>

      <div class="exec-card">
        <div class="exec-portrait">
          <!-- MEDIA: Asia Phones MD portrait — File: media/leadership/phones-md.jpg -->
          <img src="/media/leadership/Abba Sani-md-accessories-post-office.png" alt="Abba Sani" style="width: 100%; height: 100%; object-fit: cover;" />
          <div class="exec-hover"></div>
        </div>
        <div class="exec-info">
          <div class="exec-name">Abba Sani</div>
          <div class="exec-title">Managing Director</div>
          <span class="exec-subsidiary">Asia Phones &amp; Accessories</span>
        </div>
      </div>

      <!-- Additional executive slots — CFO, COO, Heads of Operations, Regional Heads, etc. -->
      <!-- Each follows the same card template above — fill after executive data sessions -->

    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     LOCATION MANAGEMENT — 19 MDs
     ══════════════════════════════════════════════ -->
<section class="location-mds-section">
  <div class="location-mds-intro">
    <div>
      
      <h2 style="font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:300;color:var(--white);line-height:1.1;">
        19 Locations.<br>19 Leaders.
      </h2>
    </div>
    <div>
      <p style="font-size:15px;font-weight:300;line-height:1.85;color:rgba(255,255,255,0.5);">
        Every Asia Group location is led by a dedicated manager — accountable, experienced, and trusted by the Chairman. This is the management layer that runs Africa's most dominant distribution network on the ground, every day.
      </p>
      <!-- Division filter -->
      <div class="div-filter" style="margin-top:24px;">
        <button class="div-pill active" data-div-filter="all">All Locations</button>
        <button class="div-pill" data-div-filter="wholesale">Wholesale</button>
        <button class="div-pill" data-div-filter="pharmacy">Pharmacy</button>
        <button class="div-pill" data-div-filter="automobiles">Automobiles</button>
        <button class="div-pill" data-div-filter="beverages">Beverages</button>
        <button class="div-pill" data-div-filter="cosmetics">Cosmetics</button>
        <button class="div-pill" data-div-filter="phones">Phones</button>
      </div>
    </div>
  </div>

  <!--
  ═══════════════════════════════════════════════════════════════════
  LOCATION MD CARD INSTRUCTIONS:
  - data-div: wholesale | pharmacy | automobiles | beverages | cosmetics | phones
  - MEDIA comment: unique portrait path for each MD
  - loc-md-name: Full name from MD interview form
  - loc-md-loc: Location name (e.g. "Kano Central Hub")
  - loc-md-hover-loc: Location name again (in overlay)
  - loc-md-hover-role: 1-line role description
  All 19 cards follow the exact same structure — fill from field visit data.
  ═══════════════════════════════════════════════════════════════════
  -->
  <div class="location-mds-grid" id="loc-mds-grid">
    <!-- MD 01 -->
    <div class="loc-md-card" data-div="automobiles">
      <div class="loc-md-portrait">
        <img src="/media/leadership/Kamal Ismail Salihu-md-automobiles-kofar-ruwa.png" alt="Kamal Ismail Salihu" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="loc-md-hover">
          <div class="loc-md-hover-loc">Asia Power And Energy</div>
          <div class="loc-md-hover-role">Branch Manager</div>
        </div>
      </div>
      <div class="loc-md-label">
        <div class="loc-md-name">Kamal Ismail Salihu</div>
        <div class="loc-md-loc">Asia Power And Energy</div>
      </div>
    </div>

    <!-- MD 02 -->
    <div class="loc-md-card" data-div="pharmacy">
      <div class="loc-md-portrait">
        <img src="/media/leadership/Saddam-md-pharamacy.png" alt="Saddam" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="loc-md-hover">
          <div class="loc-md-hover-loc">Asia Maisauki Pharma Co Ltd</div>
          <div class="loc-md-hover-role">Branch Pharmacist / Manager</div>
        </div>
      </div>
      <div class="loc-md-label">
        <div class="loc-md-name">Saddam</div>
        <div class="loc-md-loc">Asia Maisauki Pharma Co Ltd</div>
      </div>
    </div>

    <!-- MD 03 -->
    <div class="loc-md-card" data-div="wholesale">
      <div class="loc-md-portrait">
        <img src="/media/leadership/Shuaibu Balarabe-md-aa-plaza.png" alt="Shuaibu Balarabe" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="loc-md-hover">
          <div class="loc-md-hover-loc">Asia Group Aa Plaza</div>
          <div class="loc-md-hover-role">Branch Manager</div>
        </div>
      </div>
      <div class="loc-md-label">
        <div class="loc-md-name">Shuaibu Balarabe</div>
        <div class="loc-md-loc">Asia Group Aa Plaza</div>
      </div>
    </div>

    <!-- MD 04 -->
    <div class="loc-md-card" data-div="wholesale">
      <div class="loc-md-portrait">
        <img src="/media/leadership/Umar Sulaiman Dan Sarauniya-md-walai-plaza.png" alt="Umar Sulaiman Dan Sarauniya" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="loc-md-hover">
          <div class="loc-md-hover-loc">Walai Plaza</div>
          <div class="loc-md-hover-role">Branch Manager</div>
        </div>
      </div>
      <div class="loc-md-label">
        <div class="loc-md-name">Umar Sulaiman Dan Sarauniya</div>
        <div class="loc-md-loc">Walai Plaza</div>
      </div>
    </div>

    <!-- MD 05 -->
    <div class="loc-md-card" data-div="wholesale">
      <div class="loc-md-portrait">
        <img src="/media/leadership/Muhammad Taallu-md-air-ways.png" alt="Muhammad Taallu" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="loc-md-hover">
          <div class="loc-md-hover-loc">Asia Airways</div>
          <div class="loc-md-hover-role">Branch Manager</div>
        </div>
      </div>
      <div class="loc-md-label">
        <div class="loc-md-name">Muhammad Taallu</div>
        <div class="loc-md-loc">Asia Airways</div>
      </div>
    </div>

    <!-- MD 06 -->
    <div class="loc-md-card" data-div="beverages">
      <div class="loc-md-portrait">
        <img src="/media/leadership/Sani Mustapha Musa-md-beverages.png" alt="Sani Mustapha Musa" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="loc-md-hover">
          <div class="loc-md-hover-loc">Asia Group Beverages</div>
          <div class="loc-md-hover-role">Branch Manager</div>
        </div>
      </div>
      <div class="loc-md-label">
        <div class="loc-md-name">Sani Mustapha Musa</div>
        <div class="loc-md-loc">Asia Group Beverages</div>
      </div>
    </div>

    <!-- MD 07 -->
    <div class="loc-md-card" data-div="automobiles">
      <div class="loc-md-portrait">
        <img src="/media/leadership/Abubakar Bala Muhammad-md-automobile-post-office.png" alt="Abubakar Bala Muhammad" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="loc-md-hover">
          <div class="loc-md-hover-loc">Asia Automobiles, Energy And Power, Beirut</div>
          <div class="loc-md-hover-role">Branch Manager</div>
        </div>
      </div>
      <div class="loc-md-label">
        <div class="loc-md-name">Abubakar Bala Muhammad</div>
        <div class="loc-md-loc">Asia Automobiles, Energy And Power, Beirut</div>
      </div>
    </div>

    <!-- MD 08 -->
    <div class="loc-md-card" data-div="phones">
      <div class="loc-md-portrait">
        <img src="/media/leadership/Abba Sani-md-accessories-post-office.png" alt="Abba Sani" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="loc-md-hover">
          <div class="loc-md-hover-loc">Asia Accessories Post Office</div>
          <div class="loc-md-hover-role">Branch Manager</div>
        </div>
      </div>
      <div class="loc-md-label">
        <div class="loc-md-name">Abba Sani</div>
        <div class="loc-md-loc">Asia Accessories Post Office</div>
      </div>
    </div>

    <!-- MD 09 -->
    <div class="loc-md-card" data-div="automobiles">
      <div class="loc-md-portrait">
        <img src="/media/leadership/Yusuf Khalifa Isma'il-md-automobiles-mm-way.png" alt="Yusuf Khalifa Isma'il" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="loc-md-hover">
          <div class="loc-md-hover-loc">Asia Automobile Sg</div>
          <div class="loc-md-hover-role">Branch Manager</div>
        </div>
      </div>
      <div class="loc-md-label">
        <div class="loc-md-name">Yusuf Khalifa Isma'il</div>
        <div class="loc-md-loc">Asia Automobile Sg</div>
      </div>
    </div>

    <!-- MD 10 -->
    <div class="loc-md-card" data-div="wholesale">
      <div class="loc-md-portrait">
        <img src="/media/leadership/Kamalu Garba Umar-md-toothpaste.png" alt="Kamalu Garba Umar" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="loc-md-hover">
          <div class="loc-md-hover-loc">Asia Toothpaste</div>
          <div class="loc-md-hover-role">Branch Manager</div>
        </div>
      </div>
      <div class="loc-md-label">
        <div class="loc-md-name">Kamalu Garba Umar</div>
        <div class="loc-md-loc">Asia Toothpaste</div>
      </div>
    </div>

    <!-- MD 11 -->
    <div class="loc-md-card" data-div="wholesale">
      <div class="loc-md-portrait">
        <img src="/media/leadership/Yahaya Gambo Albashir-md-sg2.png" alt="Yahaya Gambo Albashir" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="loc-md-hover">
          <div class="loc-md-hover-loc">Asia Group Sg2</div>
          <div class="loc-md-hover-role">Branch Manager</div>
        </div>
      </div>
      <div class="loc-md-label">
        <div class="loc-md-name">Yahaya Gambo Albashir</div>
        <div class="loc-md-loc">Asia Group Sg2</div>
      </div>
    </div>

    <!-- MD 12 -->
    <div class="loc-md-card" data-div="cosmetics">
      <div class="loc-md-portrait">
        <img src="/media/leadership/Sulaiman Kabir-md-cosmetics-gashash.png" alt="Sulaiman Kabir" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="loc-md-hover">
          <div class="loc-md-hover-loc">Asia Cosmetics</div>
          <div class="loc-md-hover-role">Branch Manager</div>
        </div>
      </div>
      <div class="loc-md-label">
        <div class="loc-md-name">Sulaiman Kabir</div>
        <div class="loc-md-loc">Asia Cosmetics</div>
      </div>
    </div>

    <!-- MD 13 -->
    <div class="loc-md-card" data-div="wholesale">
      <div class="loc-md-portrait">
        <img src="/media/leadership/Ahmad Ismail-md-provision-babban-gashi.png" alt="Ahmad Ismail" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="loc-md-hover">
          <div class="loc-md-hover-loc">Asia Provision</div>
          <div class="loc-md-hover-role">Branch Manager</div>
        </div>
      </div>
      <div class="loc-md-label">
        <div class="loc-md-name">Ahmad Ismail</div>
        <div class="loc-md-loc">Asia Provision</div>
      </div>
    </div>

    <!-- MD 14 -->
    <div class="loc-md-card" data-div="phones">
      <div class="loc-md-portrait">
        <img src="/media/leadership/Usman-md-acessories-mai-karami.png" alt="Usman" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="loc-md-hover">
          <div class="loc-md-hover-loc">Asia Accessories Mai Karami</div>
          <div class="loc-md-hover-role">Branch Manager</div>
        </div>
      </div>
      <div class="loc-md-label">
        <div class="loc-md-name">Usman</div>
        <div class="loc-md-loc">Asia Accessories Mai Karami</div>
      </div>
    </div>

    <!-- MD 15 -->
    <div class="loc-md-card" data-div="wholesale">
      <div class="loc-md-portrait">
        <img src="/media/leadership/Balarabe Auwalu-md-sg1.png" alt="Balarabe Auwalu" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="loc-md-hover">
          <div class="loc-md-hover-loc">Asia Sg1</div>
          <div class="loc-md-hover-role">Branch Manager</div>
        </div>
      </div>
      <div class="loc-md-label">
        <div class="loc-md-name">Balarabe Auwalu</div>
        <div class="loc-md-loc">Asia Sg1</div>
      </div>
    </div>

    <!-- MD 16 -->
    <div class="loc-md-card" data-div="cosmetics">
      <div class="loc-md-portrait">
        <img src="/media/leadership/Abdulaziz Yusuf-md-cosmetics-sg.png" alt="Abdulaziz Yusuf" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="loc-md-hover">
          <div class="loc-md-hover-loc">Asia Cosmetics SG</div>
          <div class="loc-md-hover-role">Branch Manager</div>
        </div>
      </div>
      <div class="loc-md-label">
        <div class="loc-md-name">Abdulaziz Yusuf</div>
        <div class="loc-md-loc">Asia Cosmetics SG</div>
      </div>
    </div>

    <!-- MD 17 -->
    <div class="loc-md-card" data-div="wholesale">
      <div class="loc-md-portrait">
        <img src="/media/leadership/Nasir Ibrahim-md-provision-gashash.png" alt="Nasir Ibrahim" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="loc-md-hover">
          <div class="loc-md-hover-loc">Asia Provision Gashash</div>
          <div class="loc-md-hover-role">Branch Manager</div>
        </div>
      </div>
      <div class="loc-md-label">
        <div class="loc-md-name">Nasir Ibrahim</div>
        <div class="loc-md-loc">Asia Provision Gashash</div>
      </div>
    </div>

    <!-- MD 18 -->
    <div class="loc-md-card" data-div="wholesale">
      <div class="loc-md-portrait">
        <img src="/media/leadership/Hashim Bashir Maidabino-md-fmgc-chatalas.png" alt="Hashim Bashir Maidabino" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="loc-md-hover">
          <div class="loc-md-hover-loc">Asia Fmgc Chatalas</div>
          <div class="loc-md-hover-role">Branch Manager</div>
        </div>
      </div>
      <div class="loc-md-label">
        <div class="loc-md-name">Hashim Bashir Maidabino</div>
        <div class="loc-md-loc">Asia Fmgc Chatalas</div>
      </div>
    </div>

    <!-- MD 19 -->
    <div class="loc-md-card" data-div="wholesale">
      <div class="loc-md-portrait">
        <img src="/media/leadership/abba-sani-isah-md-main-branch.png" alt="Abba Sani Isah" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="loc-md-hover">
          <div class="loc-md-hover-loc">Head Office</div>
          <div class="loc-md-hover-role">Branch Manager</div>
        </div>
      </div>
      <div class="loc-md-label">
        <div class="loc-md-name">Abba Sani Isah</div>
        <div class="loc-md-loc">Head Office</div>
      </div>
    </div>
  </div><!-- /location-mds-grid -->

  <div style="max-width:1300px;margin:32px auto 0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;">
    
    <a href="../operations/index.html" style="font-family:var(--font-condensed);font-size:12px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--silver-light);text-decoration:none;">
      View All 19 Locations →
    </a>
  </div>
</section>


      ` }} />
    
      <div dangerouslySetInnerHTML={{ __html: `
        <!-- BOARD OF DIRECTORS -->
<section class="board-section">
  <div class="board-inner">
    
    <h2 style="font-family:var(--font-display); font-size:clamp(32px,4vw,52px); font-weight:300; color:var(--white); line-height:1.1;">
      Board of Directors
    </h2>
    <p style="font-size:15px; font-weight:300; line-height:1.8; color:rgba(255,255,255,0.5); max-width:560px; margin-top:16px;">
      Asia Group's Board provides strategic oversight and governance across all subsidiaries. Members bring diverse expertise in finance, trade, law, and public affairs.
    </p>
    <!-- PLACEHOLDER: Board of Directors details to be confirmed with legal/company secretary
         Required: Full names, titles, brief bios, headshots (circular format)
    -->
    <div class="board-grid">
      <div class="board-card">
        <div class="board-avatar">
          <!-- MEDIA: Board member headshot (circular) -->
          SA
        </div>
        <div class="board-name">Alhaji Sani Isah Abubakar</div>
        <div class="board-title">Chairman of the Board</div>
        <p class="board-bio">Founder and visionary behind Asia Group. 36+ years of entrepreneurial leadership in wholesale distribution, cross-border trade, and philanthropy.</p>
      </div>

      <!-- PLACEHOLDER: Remaining board members — complete after company secretary session -->
      <div class="board-card" style="opacity:0.4;">
        <div class="board-avatar">—</div>
        <div class="board-name">[ Director — TBD ]</div>
        <div class="board-title">Non-Executive Director</div>
        
      </div>
      <div class="board-card" style="opacity:0.4;">
        <div class="board-avatar">—</div>
        <div class="board-name">[ Director — TBD ]</div>
        <div class="board-title">Non-Executive Director</div>
        
      </div>
      <div class="board-card" style="opacity:0.4;">
        <div class="board-avatar">—</div>
        <div class="board-name">[ Director — TBD ]</div>
        <div class="board-title">Independent Director</div>
        
      </div>
    </div>
  </div>
</section>
      `}} />
</div>
  );
}
