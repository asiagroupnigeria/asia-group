'use client';

import Link from 'next/link';
import { useEffect } from 'react';

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
    <div>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header__watermark" aria-hidden="true">ABOUT</div>
        <div className="inner">
          
          <h1 className="display-title">
            Built on <em>Trust.</em><br />Scaled by <em>Vision.</em>
          </h1>
          <p className="page-header__desc">
            From ₦20,000 and a market stall to commanding Africa&apos;s most powerful distribution network — this is the story of Asia Group of Companies.
          </p>
        </div>
      </section>

      {/* ABOUT / ORIGIN STORY */}
      <section className="section bg-dark">
        <div className="inner grid-2">
          <div className="fade-up about-visual">
            <div className="about-image">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" style={{ opacity: 0.15 }}>
                <rect x="8" y="28" width="44" height="24" stroke="white" strokeWidth="2"/>
                <rect x="22" y="36" width="16" height="16" stroke="white" strokeWidth="2"/>
                <path d="M4 28L30 8L56 28" stroke="white" strokeWidth="2"/>
              </svg>
              <p className="about-image__placeholder">CEO Portrait / Flagship Warehouse</p>
            </div>
            <div className="about-badge">Est. 1988</div>
            <div className="about-accent">
              <div style={{ textAlign: 'center' }}>
                <div className="about-accent__rank">#1</div>
                <div className="about-accent__label">Detergent Distributor<br />in Africa</div>
              </div>
            </div>
          </div>

          <div className="fade-up delay-2" style={{ paddingRight: '20px' }}>
            
            <h2 className="section-title">Built on <em>Trust,</em><br />Scaled by <em>Vision</em></h2>
            <p className="section-body mt-4">
              Asia Group of Companies began with nothing more than a young man&apos;s ambition, ₦20,000 in capital, and a stall at Abubakar Rimi Market. Alhaji Sani Isah Abubakar started selling polythene bags after school — and never stopped building.
            </p>
            <blockquote className="quote">
              &ldquo;We want to build a legacy — a company that will stand the test of time, benefit our generation and future generations, and grow together with everyone involved.&rdquo;
            </blockquote>
            <div className="about-author">
              <div className="about-author__avatar">SA</div>
              <div>
                <p className="about-author__name">Alhaji Sani Isah Abubakar (Asia)</p>
                <p className="about-author__role">Founder &amp; Group Chairman</p>
              </div>
            </div>
            
            <div className="pillars-grid">
              {[
                { icon: <i className="ri-team-line"></i>, title: 'Trust & Integrity', desc: 'Our defining differentiator in a continent of 1.4B people and growing commerce.' },
                { icon: <i className="ri-earth-line"></i>, title: 'Pan-African Reach', desc: 'Nigeria, Cameroon, Chad, Niger — with expansion into Central & East Africa underway.' },
                { icon: <i className="ri-building-4-line"></i>, title: 'Vertical Integration', desc: 'From wholesale to pharmaceuticals, automobiles, cosmetics, and beverages.' },
                { icon: <i className="ri-line-chart-line"></i>, title: 'Legacy Building', desc: 'Manufacturing expansion planned — Pampas, pads, and detergent production.' },
              ].map((p, i) => (
                <div key={i} className="pillar">
                  <div className="pillar__icon">{p.icon}</div>
                  <h4 className="pillar__title">{p.title}</h4>
                  <p className="pillar__desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section bg-dark-2">
        <div className="inner">
          <div className="grid-2 grid-2--end" style={{ marginBottom: '80px' }}>
            <div>
              
              <h2 className="section-title">Leadership<br /><em>That Builds</em></h2>
            </div>
            <p className="section-body">
              Every subsidiary is led by a seasoned executive. Together they represent decades of industry experience and the next generation of Africa&apos;s business leadership.
            </p>
          </div>

          <div className="grid-4">
            {[
              { name: 'Alhaji Sani Isah Abubakar', title: 'Founder & Group Chairman', badge: 'Founder & Chairman', green: true, bio: 'Started business at junior secondary school age in 1988 with ₦20,000. Built Africa\'s #1 detergent distribution empire across 4 nations in 36 years.' },
              { name: '[ Name — TBD ]', title: 'Group Managing Director', bio: 'Bio to be filled after executive session.' },
              { name: '[ Name — TBD ]', title: 'MD, Asia Pharmacy', bio: 'Bio to be filled after executive session.' },
              { name: '[ Name — TBD ]', title: 'MD, Asia Automobiles', bio: 'Bio to be filled after executive session.' },
            ].map((leader, i) => (
              <div key={i} className={`leader-card fade-up delay-${i + 1}`}>
                <div className={`leader-card__photo ${leader.green ? 'leader-card__photo--green' : 'leader-card__photo--dark'}`}>
                  {leader.badge && <div className="leader-card__badge">{leader.badge}</div>}
                  <div className="flex-col gap-2 flex-1 relative">
                    <div className="aspect-square bg-black border border-white/10 flex items-center justify-center overflow-hidden relative">
                      <img src="/media/leadership/ceo-sani-isah.jpg" alt="Alhaji Sani Isah" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="leader-card__overlay">
                      <p className="leader-card__bio">{leader.bio}</p>
                    </div>
                  </div>
                </div>
                <div className="leader-card__body">
                  <div className="leader-card__name">{leader.name}</div>
                  <div className="leader-card__title">{leader.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="section bg-off-white">
        <div className="inner">
          <div className="fade-up" style={{ marginBottom: '80px' }}>
            
            <h2 className="section-title section-title--dark">From a Market Stall<br /><em>to a Continental Empire</em></h2>
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
                <div className={`timeline__dot ${item.gold ? 'timeline__dot--gold' : 'timeline__dot--green'}`} />
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
    </div>
  );
}
