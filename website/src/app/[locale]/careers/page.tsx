'use client';

import { useEffect, useState } from 'react';

export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState('All');

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

  const filters = ['All', 'Distribution', 'Pharmaceuticals', 'Automobiles', 'Corporate'];
  const jobs = [
    { dept: 'Distribution', title: 'Senior Logistics Coordinator', location: 'Kano, Nigeria', type: 'Full-time', urgent: true },
    { dept: 'Pharmaceuticals', title: 'Pharmaceutical Compliance Manager', location: 'Lagos, Nigeria', type: 'Full-time', urgent: false },
    { dept: 'Automobiles', title: 'Regional Sales Director', location: 'Niamey, Niger', type: 'Full-time', urgent: false },
    { dept: 'Corporate', title: 'Supply Chain Analyst', location: 'Kano, Nigeria', type: 'Full-time', urgent: false },
    { dept: 'Distribution', title: 'Fleet Manager', location: 'Kano, Nigeria', type: 'Full-time', urgent: false },
    { dept: 'Corporate', title: 'Financial Controller', location: 'Kano, Nigeria', type: 'Full-time', urgent: true },
  ];

  const filteredJobs = activeFilter === 'All' ? jobs : jobs.filter(j => j.dept === activeFilter);

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header__watermark" aria-hidden="true">CAREERS</div>
        <div className="inner">
          
          <h1 className="display-title">
            Build Africa&apos;s<br /><em>Biggest Story</em>
          </h1>
          <p className="page-header__desc">
            Join 8,000+ professionals dedicated to building the supply chain of Africa. We offer dynamic opportunities across logistics, FMCG, pharmaceuticals, automotive, and corporate services.
          </p>
        </div>
      </section>

      {/* WHY ASIA */}
      <section className="section bg-dark-2">
        <div className="inner">
          <div className="fade-up">
            
            <h2 className="section-title">
              More Than a Job.<br /><em>A Legacy.</em>
            </h2>
          </div>
          
          <div className="why-grid mt-4" style={{ marginTop: '60px' }}>
            {[
              { icon: <i className="ri-earth-line"></i>, title: 'Continental Scale', desc: 'Work on projects that impact 350M+ people across four nations and expanding.' },
              { icon: <i className="ri-team-line"></i>, title: 'Integrity First', desc: 'Join a culture built on 36 years of uncompromising trust and business ethics.' },
              { icon: <i className="ri-line-chart-line"></i>, title: 'Continuous Growth', desc: 'Access training programs and mobility across our 5+ business divisions.' },
              { icon: <i className="ri-lightbulb-line"></i>, title: 'Global Exposure', desc: 'Work with 30+ global brand principals including Nestlé, Cadbury, and Dangote.' },
            ].map((card, i) => (
              <div key={i} className={`why-card fade-up delay-${i + 1}`}>
                <div className="why-card__icon">{card.icon}</div>
                <div className="why-card__title">{card.title}</div>
                <p className="why-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOB LISTINGS */}
      <section className="section bg-dark">
        <div className="inner">
          <div className="fade-up" style={{ marginBottom: '48px' }}>
            
            <h2 className="section-title">
              Current <em>Opportunities</em>
            </h2>
          </div>

          {/* Filters */}
          <div className="jobs-filters">
            {filters.map((f) => (
              <button 
                key={f} 
                onClick={() => setActiveFilter(f)} 
                className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Jobs */}
          <div className="jobs-list">
            {filteredJobs.map((job, i) => (
              <a key={i} href="#" className="job-item">
                <div className="job-item__dept">{job.dept}</div>
                <div className="job-item__info">
                  <div className="job-item__title">{job.title}</div>
                  <div className="job-item__meta">
                    <span className="job-item__meta-item">📍 {job.location}</span>
                    <span className="job-item__meta-item">💼 {job.type}</span>
                  </div>
                </div>
                {job.urgent && (
                  <span className="job-badge job-badge--urgent">Urgent</span>
                )}
                <span className="job-arrow">→</span>
              </a>
            ))}
          </div>
          
          <p className="jobs-note">
            More positions being added — check back regularly or send an open application below.
          </p>
        </div>
      </section>

      {/* CULTURE */}
      <section className="section bg-green-mid">
        <div className="inner grid-2">
          <div className="fade-up">
            
            <h2 className="section-title">
              Built by <em>People,</em><br />for People.
            </h2>
            <p className="section-body section-body--muted mt-4">
              Our workplace reflects our values — discipline, trust, and ambition. We&apos;re a family built on mutual respect and a shared mission to transform Africa&apos;s commerce landscape.
            </p>
            
            <div className="culture-values">
              {[
                { title: 'Growth Culture', desc: 'Continuous learning and cross-divisional mobility.' },
                { title: 'Strong Ethics', desc: 'Integrity embedded at every level of the organisation.' },
                { title: 'Family Values', desc: 'A close-knit team that works and grows together.' },
                { title: 'Impact Driven', desc: 'Every role contributes to Africa\'s economic growth.' },
              ].map((v, i) => (
                <div key={i} className="culture-value">
                  <div className="culture-value__title">{v.title}</div>
                  <p className="culture-value__desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="fade-up delay-2 map-placeholder" style={{ aspectRatio: '4/3' }}>
            <p className="placeholder-text">
              Team / Workplace Photography<br />Placeholder
            </p>
          </div>
        </div>
      </section>

      {/* OPEN APPLICATION */}
      <section className="section bg-dark-2">
        <div className="inner">
          <div className="fade-up" style={{ marginBottom: '48px' }}>
            
            <h2 className="section-title">
              Don&apos;t See Your <em>Role?</em>
            </h2>
            <p className="section-body mt-4">
              We&apos;re always looking for exceptional talent. Send your CV and we&apos;ll reach out when the right opportunity arises.
            </p>
          </div>
          
          <div className="fade-up open-app-grid">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Your full name" />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-control" placeholder="+234 800 000 0000" />
            </div>
            <div className="form-group">
              <label className="form-label">Preferred Division</label>
              <input type="text" className="form-control" placeholder="e.g. Distribution, Pharmacy..." />
            </div>
            
            <div className="form-group form-group--full">
              <label className="form-label">Cover Note</label>
              <textarea className="form-control" rows={4} placeholder="Tell us about yourself and what value you can bring to Asia Group..." />
            </div>
            
            <div className="form-group form-group--full">
              <label className="form-label">CV / Resume</label>
              <div className="file-drop">
                <input type="file" />
                <span className="file-drop__icon">📎</span>
                <p className="file-drop__label">Click to upload or drag & drop your CV (PDF preferred)</p>
              </div>
            </div>
            
            <div className="form-group--full" style={{ marginTop: '8px' }}>
              <button type="submit" className="btn btn--primary">Submit Application →</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
