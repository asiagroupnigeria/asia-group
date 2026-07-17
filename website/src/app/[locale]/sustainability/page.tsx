'use client';

import { useEffect } from 'react';

export default function SustainabilityPage() {
  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        if (el.isIntersecting) { el.target.classList.add('visible'); observer.unobserve(el.target); }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header__watermark" aria-hidden="true">IMPACT</div>
        <div className="inner">
          
          <h1 className="display-title">
            Business as<br />Service to People
          </h1>
          <p className="page-header__desc">
            For Alhaji Sani Isah, success is measured not only in trade volumes — but in lives touched. Asia Group&apos;s philanthropy is woven into its daily operations, not an afterthought.
          </p>
        </div>
      </section>

      {/* IMPACT METRIC */}
      <section className="numbers-section">
        <div className="numbers-watermark" aria-hidden="true">IMPACT</div>
        <div className="inner grid-2 grid-2--img grid-2--start">
          <div className="fade-up">
            
            <div className="csr-stat" style={{ marginBottom: '12px' }}>
              <div className="csr-stat__number" style={{ fontSize: 'clamp(72px, 8vw, 120px)' }}>4,000</div>
              <div className="csr-stat__unit" style={{ fontSize: '20px' }}>Meals<br />Daily</div>
            </div>
            <p className="section-body section-body--muted" style={{ marginBottom: '24px' }}>
              2,000 afternoon meals · 2,000 evening meals — provided every single day to the people of Kano. One of the largest private food security initiatives in Northern Nigeria.
            </p>
            
            <div className="grid-2" style={{ gap: '1px', background: 'var(--bg-muted)', border: '1px solid var(--border-color)' }}>
              {[{ n: '2,000', l: 'Afternoon Meals' }, { n: '2,000', l: 'Evening Meals' }, { n: '365', l: 'Days a Year' }, { n: 'Kano', l: 'State, Nigeria' }].map((s, i) => (
                <div key={i} style={{ background: 'var(--bg-main)', padding: '20px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '28px', fontWeight: 700, color: '#EF5350' }}>{s.n}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="fade-up delay-2 csr-photo-grid">
            <div className="csr-photo csr-photo--tall">
              <img src="/media/community-impact.jpg" alt="Daily Meal Distribution" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="csr-photo csr-photo--square">
              <p className="placeholder-text">Community Impact</p>
            </div>
            <div className="csr-photo csr-photo--square">
              <p className="placeholder-text">Education Initiative</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="section bg-dark-2">
        <div className="inner">
          <div className="fade-up" style={{ marginBottom: '60px' }}>
            
            <h2 className="section-title">How We Give Back</h2>
          </div>
          
          <div className="flex-col" style={{ gap: '2px', border: '1px solid var(--border-color)', background: 'var(--bg-muted)' }}>
            {[
              { icon: <i className="ri-restaurant-line"></i>, title: 'Daily Meal Programme', status: 'Active', desc: '4,000 free meals served every day across Kano — 2,000 afternoon and 2,000 evening. One of the largest private food security initiatives in Northern Nigeria, running continuously year-round.' },
              { icon: <i className="ri-graduation-cap-line"></i>, title: 'Education & Scholarships', status: 'TBC', desc: 'Details to be confirmed — scholarship programmes, school support initiatives, and youth empowerment details to be provided after executive data session.', muted: true },
              { icon: <i className="ri-hospital-line"></i>, title: 'Healthcare Access', status: 'TBC', desc: 'Details to be confirmed — healthcare CSR programmes, free medical outreach, and Asia Pharmacy community initiatives to be provided.', muted: true },
              { icon: <i className="ri-briefcase-line"></i>, title: 'Youth Employment', status: 'TBC', desc: 'Details to be confirmed — apprenticeship programmes, vocational training, and youth employment schemes run by Asia Group of Companies.', muted: true },
            ].map((prog, i) => (
              <div key={i} className={`fade-up delay-${i + 1} flex-row`} style={{ gap: '28px', padding: '40px', background: 'var(--bg-main)', opacity: prog.muted ? 0.5 : 1, borderBottom: i < 3 ? '1px solid var(--border-color)' : 'none' }}>
                <div style={{ fontSize: '32px', flexShrink: 0 }}>{prog.icon}</div>
                <div style={{ flex: 1 }}>
                  <div className="flex-row items-center" style={{ gap: '12px', marginBottom: '10px' }}>
                    <h3 style={{ fontFamily: 'var(--font-condensed)', fontSize: '18px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-main)' }}>{prog.title}</h3>
                    <span style={{ 
                      fontFamily: 'var(--font-condensed)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', 
                      padding: '4px 10px', 
                      background: prog.status === 'Active' ? 'rgba(76,175,80,0.2)' : 'rgba(239,83,80,0.15)', 
                      color: prog.status === 'Active' ? '#4CAF50' : '#EF5350' 
                    }}>{prog.status}</span>
                  </div>
                  <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#888888', fontWeight: 300 }}>{prog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
