'use client';

import { useEffect, useState, FormEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: ''
  });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', company: '', email: '', phone: '', enquiryType: '', message: '' });
  };

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header__watermark" aria-hidden="true">CONTACT</div>
        <div className="inner">
          <h1 className="display-title">
            Corporate<br />Enquiries
          </h1>
          <p className="page-header__desc">
            Connect with the Asia Group Global Headquarters. Direct your enquiries to the appropriate department for swift assistance regarding our operations, investments, or general information.
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
                {
                  icon: <i className="ri-map-pin-line"></i>,
                  label: 'Head Office',
                  value: 'No. 46, Niger Street\nAbubakar Rimi Market Area\nKano, Kano State, Nigeria'
                },
                {
                  icon: <i className="ri-phone-line"></i>,
                  label: 'Phone / WhatsApp',
                  value: '+234 701 000 0013\n+234 704 190 0942'
                },
                {
                  icon: <i className="ri-mail-line"></i>,
                  label: 'Email',
                  value: 'info@asiagroup.ng\npartnerships@asiagroup.ng\nexport@asiagroup.ng'
                },
                {
                  icon: <i className="ri-time-line"></i>,
                  label: 'Business Hours',
                  value: 'Monday – Friday: 8:00am – 5:00pm\nSaturday: 9:00am – 1:00pm (WAT)'
                },
              ].map((item, i) => (
                <div key={i} className="contact-info-row">
                  <div className="contact-info-row__icon">{item.icon}</div>
                  <div>
                    <div className="contact-info-row__label">{item.label}</div>
                    <div className="contact-info-row__value" style={{ whiteSpace: 'pre-line' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="fade-up delay-2">
            <div className="contact-form-wrap">
              <h3 className="contact-form-title">Send a Message</h3>

              {submitted ? (
                <div style={{ padding: '32px', backgroundColor: 'rgba(27,94,32,0.12)', border: '1px solid var(--green-light)', color: 'var(--green-light)' }}>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', marginBottom: '10px' }}>Message Sent Successfully!</h4>
                  <p style={{ opacity: 0.85 }}>Thank you for reaching out to Asia Group. Our team will get back to you within 24 business hours.</p>
                  <button
                    className="btn btn--outline"
                    style={{ marginTop: '20px', borderColor: 'var(--green-light)', color: 'var(--green-light)' }}
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required className="form-control" placeholder="Your full name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Company</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} className="form-control" placeholder="Organisation name" />
                    </div>
                  </div>
                  <div className="form-row" style={{ marginTop: '16px' }}>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-control" placeholder="your@company.com" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="form-control" placeholder="+234 800 000 0000" />
                    </div>
                  </div>
                  <div className="form-group form-group--full" style={{ marginTop: '16px' }}>
                    <label className="form-label">Nature of Enquiry *</label>
                    <select name="enquiryType" value={formData.enquiryType} onChange={handleChange} required className="form-control">
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
                    <label className="form-label">Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required className="form-control" rows={5} placeholder="Describe your enquiry, scale of requirement, or purpose of partnership..."></textarea>
                  </div>
                  <div className="form-footer">
                    <span className="form-note">We respond within 24 business hours</span>
                    <button type="submit" className="btn btn--primary">
                      Send Message →
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
