'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function BusinessesPage() {
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

  const subsidiaries = [
    { num: '01', icon: <i className="ri-capsule-line"></i>, name: 'Asia Pharmacy', sector: 'Pharmaceutical Distribution', desc: 'Wholesale pharmaceutical distribution supplying hospitals, clinics, and retail pharmacies across the region with quality-assured medicines and healthcare products.', href: '/businesses/pharmaceuticals', image: '/media/about-hero.jpg' },
    { num: '02', icon: <i className="ri-cup-line"></i>, name: 'Asia Beverages', sector: 'Beverages Distribution', desc: 'Distributor for leading beverage brands including 7UP Bottling Company, connecting manufacturers to retailers, hospitality groups, and bulk buyers across Nigeria.', href: '/businesses/beverages', image: '/media/hero-fmcg.jpg' },
    { num: '03', icon: <i className="ri-truck-line"></i>, name: 'Asia Automobiles', sector: 'Commercial Vehicles & Logistics', desc: 'Authorised partner for SinoTruck and Mikano Motors, supplying commercial trucks, generators, and industrial vehicles to construction, logistics, and industrial clients.', href: '/businesses/automobiles', image: '/media/hero-logistics.jpg' },
    { num: '04', icon: <i className="ri-sparkling-line"></i>, name: 'Asia Cosmetics', sector: 'Beauty & Personal Care', desc: 'Distribution of soaps, pommades, skincare and personal care products from global and regional brand principals to Nigeria\'s rapidly growing consumer market.', href: '/businesses/cosmetics', image: '/media/community-impact.jpg' },
    { num: '05', icon: <i className="ri-smartphone-line"></i>, name: 'Asia Phones & Accessories', sector: 'Technology & Consumer Electronics', desc: 'Wholesale distribution of mobile phones and accessories into Northern Nigeria\'s fast-growing technology retail ecosystem, serving thousands of stockists.', href: '/businesses/phones', image: '/media/about-hero.jpg' },
  ];

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header__watermark" aria-hidden="true">BUSINESSES</div>
        <div className="inner">
          
          <h1 className="display-title">
            Six Pillars of a<br />Diversified Empire
          </h1>
          <p className="page-header__desc">
            Each subsidiary leads its sector. Together they form the most vertically diversified distribution and commerce group in Northern Nigeria — and one of the largest on the continent.
          </p>
        </div>
      </section>

      {/* SUBSIDIARIES GRID */}
      <section className="section bg-dark-2">
        <div className="inner">
          <div className="grid-3">
            {subsidiaries.map((sub, i) => (
              <Link 
                key={i} 
                href={sub.href} 
                className="subsidiary-card"
                style={{ 
                  background: `url(${sub.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div style={{ marginTop: 'auto' }}>
                  <span className="subsidiary-card__num">{sub.num}</span>
                  <span className="subsidiary-card__icon">{sub.icon}</span>
                  <div className="subsidiary-card__name">{sub.name}</div>
                  <div className="subsidiary-card__sector">{sub.sector}</div>
                  <p className="subsidiary-card__desc">{sub.desc}</p>
                </div>
                <div className="subsidiary-card__arrow">→</div>
              </Link>
            ))}

            {/* Promo card */}
            <Link 
              href="/businesses/wholesale" 
              className="subsidiary-card subsidiary-card--promo"
              style={{
                background: 'linear-gradient(to right, rgba(27, 94, 32, 0.95) 30%, rgba(27, 94, 32, 0.3) 100%), url(/media/hero-fmcg.jpg) center/cover'
              }}
            >
              <div>
                <div className="subsidiary-card__name">Asia Wholesale &amp; Distribution</div>
                <div className="subsidiary-card__sector">Sugar · Rice · Detergent · Seasoning · Soap · Flour</div>
                <p className="subsidiary-card__desc">
                  The engine that started it all — and still the most powerful. Africa&apos;s #1 detergent distributor, moving 100,000 tonnes annually and commanding logistics across four nations and expanding.
                </p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <span className="btn btn--primary" style={{ whiteSpace: 'nowrap' }}>Explore Wholesale →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNERS STRIP */}
      <section className="section bg-dark">
        <div className="inner">
          <div className="partners-header" style={{ marginBottom: '48px' }}>
            
            <h2 className="section-title">Brands That Trust Asia Group</h2>
          </div>

          <div className="partners-strip">
            {['Olam International','Nestlé Nigeria','Cadbury Nigeria','Dangote Group','BUA Group','PZ Cussons','SinoTruck','Mikano Motors','7UP Bottling Co.','EUROMEGA','Aspira','Mamuda Group','Ammasco'].map((name, i) => (
              <div key={i} className="partners-strip__item">
                <span className="partners-strip__name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
