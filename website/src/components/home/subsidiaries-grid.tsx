'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const subsidiaries = [
  { 
    num: '01', 
    icon: <i className="ri-capsule-line"></i>, 
    name: 'Asia Pharmacy', 
    sector: 'Pharmaceutical Distribution', 
    desc: 'Wholesale pharmaceutical distribution supplying hospitals, clinics, and retail pharmacies across the region with quality-assured medicines and healthcare products.', 
    href: '/businesses/pharmaceuticals',
    image: '/media/about-hero.jpg' 
  },
  { 
    num: '02', 
    icon: <i className="ri-cup-line"></i>, 
    name: 'Asia Beverages', 
    sector: 'Beverages Distribution', 
    desc: 'Distributor for leading beverage brands including 7UP Bottling Company, connecting manufacturers to retailers, hospitality groups, and bulk buyers across Nigeria.', 
    href: '/businesses/beverages',
    image: '/media/hero-fmcg.jpg' 
  },
  { 
    num: '03', 
    icon: <i className="ri-truck-line"></i>, 
    name: 'Asia Automobiles', 
    sector: 'Commercial Vehicles & Logistics', 
    desc: 'Authorised partner for SinoTruck and Mikano Motors, supplying commercial trucks, generators, and industrial vehicles to construction, logistics, and industrial clients.', 
    href: '/businesses/automobiles',
    image: '/media/hero-logistics.jpg' 
  }
];

export function SubsidiariesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="inner grid-3" style={{ position: 'relative', zIndex: 1, marginBottom: '40px' }}>
      
      {/* Expanding Global Backgrounds */}
      {subsidiaries.map((sub, i) => (
        <div 
          key={`bg-${i}`}
          className={`global-bg ${hoveredIndex === i ? 'global-bg--active' : ''}`}
          style={{ backgroundImage: `url(${sub.image})` }}
        />
      ))}

      {/* Main Grid Cards */}
      {subsidiaries.map((sub, i) => (
        <Link 
          key={i} 
          href={sub.href} 
          className="subsidiary-card"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            background: hoveredIndex === null 
              ? `linear-gradient(to top, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.3) 100%), url(${sub.image})` 
              : 'rgba(10, 10, 10, 0.3)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backdropFilter: hoveredIndex !== null && hoveredIndex !== i ? 'blur(3px)' : 'none',
            WebkitBackdropFilter: hoveredIndex !== null && hoveredIndex !== i ? 'blur(3px)' : 'none'
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
          zIndex: 2,
          background: 'linear-gradient(to right, rgba(27, 94, 32, 0.95) 30%, rgba(27, 94, 32, 0.3) 100%), url(/media/hero-fmcg.jpg) center/cover'
        }}
      >
        <div>
          <span className="subsidiary-card__num">CORE BUSINESS</span>
          <div className="subsidiary-card__name">Asia Wholesale &amp; Distribution</div>
          <div className="subsidiary-card__sector">Sugar · Rice · Detergent · Seasoning · Soap · Flour</div>
          <p className="subsidiary-card__desc">
            The engine that started it all — and still the most powerful. Africa&apos;s #1 detergent distributor, moving 100,000 tonnes annually and commanding logistics across four nations and expanding.
          </p>
        </div>
        <div>
          <span className="btn btn--primary" style={{ whiteSpace: 'nowrap' }}>Explore Wholesale →</span>
        </div>
      </Link>
    </div>
  );
}
