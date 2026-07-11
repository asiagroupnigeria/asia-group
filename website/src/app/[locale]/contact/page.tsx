'use client';

import { useEffect } from 'react';

export default function ContactPage() {
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
        <div className="page-header__watermark" aria-hidden="true">CONTACT</div>
        <div className="inner">
          
          <h1 className="display-title">
            Partner With<br /><em>Africa&apos;s Best</em>
          </h1>
          <p className="page-header__desc">
            Whether you&apos;re a global manufacturer seeking African distribution reach, an investor exploring partnership, or a buyer requiring container-scale quantities — Asia Group is your partner.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section bg-dark">
        <div className="inner grid-2 grid-2--start">
          {/* Info */}
          <div className="fade-up">
            <div className="contact-info">
              {[
                { icon: <i className="ri-map-pin-line"></i>, label: 'Head Office', value: 'Abubakar Rimi Market Area\nKano State, Nigeria\n(Full address — to be confirmed)' },
                { icon: <i className="ri-phone-line"></i>, label: 'Phone / WhatsApp', value: '[ Corporate Telephone — TBD ]\n[ WhatsApp Business — TBD ]' },
                { icon: <i className="ri-mail-line"></i>, label: 'Email', value: '[ info@asiagroup.com.ng ]\n[ partnerships@asiagroup.com.ng ]' },
                { icon: <i className="ri-time-line"></i>, label: 'Business Hours', value: 'Monday – Friday: 8:00am – 5:00pm\nSaturday: 9:00am – 1:00pm (WAT)' },
              ].map((item, i) => (
                <div key={i} className="contact-info-row">
                  <div className="contact-info-row__icon">{item.icon}</div>
                  <div>
                    <div className="contact-info-row__label">{item.label}</div>
                    <div className="contact-info-row__value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="fade-up delay-2">
            <div className="contact-form-wrap">
              <h3 className="contact-form-title">Send a Message</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" placeholder="Your full name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <input type="text" className="form-control" placeholder="Organisation name" />
                  </div>
                </div>
                <div className="form-row" style={{ marginTop: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-control" placeholder="your@company.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" placeholder="+234 800 000 0000" />
                  </div>
                </div>
                <div className="form-group form-group--full" style={{ marginTop: '16px' }}>
                  <label className="form-label">Nature of Enquiry</label>
                  <select className="form-control">
                    <option value="">Select an option</option>
                    <option>Distribution Partnership</option>
                    <option>Bulk Purchase / Trade Enquiry</option>
                    <option>Investment / Business Partnership</option>
                    <option>Asia Pharmacy — Products / Supply</option>
                    <option>Asia Automobiles — Vehicle Enquiry</option>
                    <option>Asia Beverages — Distribution</option>
                    <option>Asia Cosmetics — Partnership</option>
                    <option>Asia Phones &amp; Accessories</option>
                    <option>Media / Press</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div className="form-group form-group--full" style={{ marginTop: '16px' }}>
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows={5} placeholder="Describe your enquiry, scale of requirement, or purpose of partnership..."></textarea>
                </div>
                <div className="form-footer">
                  <span className="form-note">We respond within 24 business hours</span>
                  <button type="submit" className="btn btn--primary">Send Message →</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
