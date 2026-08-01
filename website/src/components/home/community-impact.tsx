import React from 'react';
import Link from 'next/link';

export function CommunityImpact() {
  return (
    <section id="csr">
      <div className="csr-inner">
        <div className="csr-visual-grid fade-up d1">
          <div className="csr-img tall">
            <img src="/media/community-impact.jpg" alt="Community Meal Program" />
          </div>
          <div className="csr-img">
            <img src="/media/about-hero.jpg" alt="Youth Beneficiary" />
          </div>
          <div className="csr-img">
            <img src="/media/hero-logistics.jpg" alt="Local Impact" />
          </div>
        </div>
        <div className="fade-up d2">
          {/* Section tag removed per requirements */}
          <h2 className="section-title">Business as<br />Service to People</h2>
          <p className="section-body" style={{ marginTop: '20px' }}>
            For Aaia Group, success is not only measured in trade volumes, it is measured in lives touched. Asia Group&apos;s philanthropy is woven into the daily fabric of operations, not an afterthought.
          </p>
          <div className="csr-meal-counter">
            <div className="csr-meal-number">1.46M</div>
            <div className="csr-meal-unit">Meals<br />Annually</div>
          </div>
          <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginBottom: '8px' }}>
            1.46 million free meals served every year to the people of Kano
          </p>
          <div className="csr-programs">
            <div className="csr-program">
              <div className="csr-program-icon"><i className="ri-restaurant-line"></i></div>
              <div>
                <h4>Daily Meal Programme</h4>
                <p>1.46 million free meals served annually across Kano — one of the largest private food security initiatives in Northern Nigeria.</p>
              </div>
            </div>
            <div className="csr-program" style={{ opacity: 0.5 }}>
              <div className="csr-program-icon"><i className="ri-book-read-line"></i></div>
              <div>
                <h4>Education & Scholarships</h4>
                <p>Scholarship programmes, school support, and youth empowerment initiatives across our operating regions.</p>
              </div>
            </div>
            <div className="csr-program" style={{ opacity: 0.5 }}>
              <div className="csr-program-icon"><i className="ri-heart-pulse-line"></i></div>
              <div>
                <h4>Healthcare Access</h4>
                <p>Community healthcare initiatives through Asia Pharmacy and strategic outreach programmes.</p>
              </div>
            </div>
          </div>
          <div className="csr-cta-row" style={{ marginTop: '32px' }}>
            <Link href="/csr" className="btn-primary">Our Full Community Story →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}