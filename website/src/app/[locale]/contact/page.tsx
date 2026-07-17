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
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    let endpoint = '/api/inquiries/general';
    let payload: any = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    if (formData.enquiryType === 'Investment / Business Partnership') {
      endpoint = '/api/inquiries/investment';
      payload.organization = formData.company;
      payload.interest = formData.enquiryType;
    } else if (formData.enquiryType === 'Bulk Purchase / Trade Enquiry' || formData.enquiryType === 'Distribution Partnership') {
      endpoint = '/api/inquiries/export';
      payload.company = formData.company || 'Not provided';
      payload.country = 'Not provided'; // We could add a country field, but hardcoding for now if missing
      payload.product_categories = [formData.enquiryType];
      payload.volume_estimate = 'To be discussed';
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', company: '', email: '', phone: '', enquiryType: '', message: '' });
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Failed to submit inquiry. Please try again.');
    }
  };

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header__watermark" aria-hidden="true">CONTACT</div>
        <div className="inner">
          <h1 className="display-title">
            Partner With<br />Africa&apos;s Best
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
              
              {status === 'success' ? (
                <div style={{ padding: '24px', backgroundColor: 'rgba(76, 175, 80, 0.1)', border: '1px solid #4CAF50', borderRadius: '8px', color: '#4CAF50' }}>
                  <h4 style={{ marginBottom: '8px' }}>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out to Asia Group. Our team will get back to you shortly.</p>
                  <button className="btn btn--outline" style={{ marginTop: '16px', borderColor: '#4CAF50', color: '#4CAF50' }} onClick={() => setStatus('idle')}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {status === 'error' && (
                    <div style={{ padding: '12px', marginBottom: '16px', backgroundColor: 'rgba(244, 67, 54, 0.1)', border: '1px solid #F44336', borderRadius: '4px', color: '#F44336' }}>
                      {errorMessage}
                    </div>
                  )}
                  
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
                    <button type="submit" disabled={status === 'loading'} className="btn btn--primary">
                      {status === 'loading' ? 'Sending...' : 'Send Message →'}
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
