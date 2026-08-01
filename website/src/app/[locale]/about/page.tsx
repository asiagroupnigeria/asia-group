'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { InteractiveMap } from '@/components/home/interactive-map';
import { AwardsGrid } from '@/components/awards/AwardsGrid';
import { awardsData } from '@/data/awards';
import { GrowthTrajectory } from '@/components/home/growth-trajectory';

export default function AboutPage() {
  useEffect(() => {
    

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
      
      <div dangerouslySetInnerHTML={{ __html: `



<section class="page-header">
  <div class="page-header__watermark" aria-hidden="true">HERITAGE</div>
  <div class="inner">
    <h1 class="display-title">Our Story &amp; Leadership<br>Built for a Continent</h1>
    <p class="page-header__desc">
      A founder who built from nothing, executives who lead with depth, and a board that steers with wisdom. Meet the individuals carrying Asia Group toward its next chapter.
    </p>
  </div>
</section>

<!-- FOUNDER -->
<section class="founder-section">
  <div class="founder-inner">
    <div class="founder-card">
      <div class="founder-portrait">
        <div class="founder-badge">Founder &amp; Group Chairman</div>
        <!-- MEDIA: CEO/Founder full portrait — HIGHEST PRIORITY ASSET
             Replace the placeholder below with:
             <img src="../media/leadership/ceo-sani-isah.jpg" style="width:100%;height:100%;object-fit:cover;object-position:top;">
             Recommended: Professional portrait, 3:4 aspect ratio, formal or company setting -->
        <img src="/media/leadership/alh-asia.jpeg" alt="Alhaji Sani Isah Abubakar" style="width:100%;height:100%;object-fit:cover;object-position:top;">
      </div>
      <div class="founder-content">
        <h2 class="founder-name">Alhaji Sani Isah<br>Abubakar (Asia)</h2>
        <div class="founder-title">Founder &amp; Group Chairman — Asia Group of Companies Ltd</div>
        <!-- PLACEHOLDER: Full bio to be written after detailed founder interview session -->
        <p class="founder-bio">
          One of Northern Nigeria's most remarkable entrepreneurial stories began at Abubakar Rimi Market in 1988. A young man — still attending school — started with ₦20,000 and a stall selling polythene bags. Within years, he had pivoted into sugar, then into detergent distribution, forging a partnership with PZ Cussons that would become the foundation of an empire.
        </p>
        <blockquote class="founder-quote">
          "We want to build a legacy — a company that will stand the test of time, benefit our generation and future generations, and grow together with everyone involved."
        </blockquote>
        <p class="founder-bio">
          Today, Alhaji Sani Isah oversees Africa's largest detergent distribution operation, a group of five distinct subsidiaries, operations in four countries, and a philanthropic programme feeding 4,000 people in Kano every single day. His defining philosophy: Trust and Integrity above all else.
        </p>
        <!-- PLACEHOLDER: Additional biography sections to be written after CEO interview:
          - Early life and education (Western + Islamic)
          - Key business turning points
          - Philosophy on trade and Africa's potential
          - Vision for the next 10 years
          - Personal life and community role
        -->
      </div>
    </div>
  </div>
</section>

` }} />
      
      {/* HISTORY TIMELINE */}



      {/* HISTORY TIMELINE */}
      <section className="section bg-off-white">
        <div className="inner">
          <div className="fade-up" style={{ marginBottom: '80px' }}>
            <h2 className="section-title section-title--dark">From a Market Stall<br />to a Continental Empire</h2>
          </div>

          <div className="fade-up delay-1 timeline">
            {[
              { year: '1988', title: 'The Beginning', content: 'Alhaji Sani Isah Abubakar, still in junior secondary school, starts trading polythene bags at Abubakar Rimi Market in Kano with ₦20,000 capital.', gold: false },
              { year: '1990s', title: 'Expansion into Sugar & Detergents', content: 'The business pivots into sugar trading, then detergent distribution. A partnership with PZ Cussons marks the beginning of Asia Group\'s rise to continental prominence.', gold: false },
              { year: '2003', title: 'Multi-Location Expansion', content: 'Operations expand across multiple locations within Abubakar Rimi Market and beyond. Distribution footprint begins to grow beyond Kano.', gold: true },
              { year: '2010s', title: 'Subsidiary Formation', content: 'Formal incorporation of Asia Pharmacy, Asia Beverages, Asia Automobiles, Asia Cosmetics, and Asia Phones & Accessories as distinct subsidiary businesses.', gold: true },
              { year: '2019', title: 'Head Office & Regional Dominance', content: 'Formal Head Office established. Asia Group recognised as the leading distribution partner for Nestlé, Cadbury, Olam, Dangote Group, BUA Group, and others.', gold: true },
              { year: '2024+', title: 'Continental & Global Expansion', content: 'Expansion into Central and East Africa underway. Plans for global presence in Asia, Europe, and America. Manufacturing ambitions announced.', gold: true },
            ].map((item, i) => (
              <div key={i} className="timeline__item">
                <div className="timeline__dot timeline__dot--green" />
                <div className="timeline__year">{item.year}</div>
                <div>
                  <h3 className="timeline__title">{item.title}</h3>
                  <p className="timeline__desc">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== OPERATIONS ==================== */}
      <section id="operations" className="section bg-dark" style={{ backgroundColor: '#000000', paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="inner grid-2 grid-2--start" style={{ marginBottom: '40px' }}>
          <div className="fade-up">
            <h2 className="section-title" style={{ color: '#FFFFFF', fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4.5vw, 64px)', fontWeight: 700, lineHeight: 1.1 }}>
              Operating Across<br />Four Nations. Expanding to the World.
            </h2>
          </div>
          <div className="fade-up delay-1">
            <p className="section-body" style={{ color: '#A0AABF', fontSize: '16px', lineHeight: 1.85, fontWeight: 300 }}>
              Headquartered in Kano, Nigeria with operational footprint in Cameroon, Chad, and Niger — and active expansion into Central Africa, East Africa, Asia, Europe, and America.
            </p>
          </div>
        </div>

        <div className="fade-up delay-2" style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
          <InteractiveMap />
        </div>
      </section>

      {/* ==================== AWARDS & RECOGNITION ==================== */}
      <section id="awards" className="section" style={{ background: '#ffffff', paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="inner">
          <div className="fade-up" style={{ maxWidth: '800px' }}>
            <h2 className="section-title" style={{ color: '#000000' }}>
              Validated by<br />Independent Authority
            </h2>
            <p className="section-body" style={{ color: 'rgba(0,0,0,0.7)', marginTop: '24px' }}>
              Trust and Integrity are not self-descriptions — they are verdicts rendered by decades of industry partners, trade bodies, and the communities Asia Group serves.
            </p>
          </div>
          
          <AwardsGrid awards={awardsData} />
        </div>
      </section>

      {/* ==================== GROWTH TRAJECTORY ==================== */}
      <GrowthTrajectory />

      {/* ==================== CTA ==================== */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <h2>Join a team building<br />Africa&apos;s legacy.</h2>
          <Link href="/careers" className="btn-primary">View Open Roles →</Link>
        </div>
      </section>

    </div>
  );
}
