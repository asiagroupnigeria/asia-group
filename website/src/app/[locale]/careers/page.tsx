'use client';

import { useEffect, useState } from 'react';

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header__watermark" aria-hidden="true">CAREERS</div>
        <div className="inner">
          <h1 className="display-title">
            Build Africa&apos;s<br />Biggest Story
          </h1>
          <p className="page-header__desc">
            Join 8,000+ professionals dedicated to building the supply chain of Africa. We offer dynamic opportunities across logistics, FMCG, pharmaceuticals, automotive, and corporate services.
          </p>
        </div>
      </section>

      {/* OPEN APPLICATION */}
      <section className="section bg-dark-2">
        <div className="inner">
          <div className="fade-up" style={{ marginBottom: '48px' }}>
            <h2 className="section-title">
              Apply to Join Asia Group
            </h2>
            <p className="section-body mt-4">
              We&apos;re always looking for exceptional talent. Send your CV and we&apos;ll reach out when the right opportunity arises.
            </p>
          </div>

          {submitted ? (
            <div className="fade-up" style={{ padding: '40px', backgroundColor: 'rgba(27,94,32,0.12)', border: '1px solid var(--green-light)', color: 'var(--green-light)', maxWidth: '560px' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: '12px' }}>Application Received!</h4>
              <p style={{ opacity: 0.85 }}>Thank you for your interest in Asia Group. Our HR team will review your application and reach out if your profile matches our current or upcoming needs.</p>
              <button
                className="btn btn--outline"
                style={{ marginTop: '20px', borderColor: 'var(--green-light)', color: 'var(--green-light)' }}
                onClick={() => setSubmitted(false)}
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <div className="fade-up open-app-grid">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" placeholder="your@email.com" required />
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
                    <p className="file-drop__label">Click to upload or drag &amp; drop your CV (PDF preferred)</p>
                  </div>
                </div>

                <div className="form-group--full" style={{ marginTop: '8px' }}>
                  <button type="submit" className="btn btn--primary">Submit Application →</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
