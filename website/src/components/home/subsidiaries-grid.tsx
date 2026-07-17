'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export interface BusinessProp {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  hero_image: string;
}

interface SubsidiariesGridProps {
  businesses: BusinessProp[];
}

export function SubsidiariesGrid({ businesses }: SubsidiariesGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="inner grid-3" style={{ position: 'relative', zIndex: 1, marginBottom: '40px' }}>
      
      {/* Expanding Global Backgrounds */}
      {businesses.map((sub, i) => (
        <div 
          key={`bg-${i}`}
          className={`global-bg ${hoveredIndex === i ? 'global-bg--active' : ''}`}
          style={{ backgroundImage: `url(${sub.hero_image})` }}
        />
      ))}

      {/* Main Grid Cards */}
      {businesses.map((sub, i) => (
        <Link 
          key={i} 
          href={`/businesses/${sub.slug}`} 
          className="subsidiary-card"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            background: hoveredIndex === null 
              ? `url(${sub.hero_image})` 
              : (hoveredIndex === i ? 'transparent' : 'rgba(255, 255, 255, 0.15)'),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backdropFilter: hoveredIndex !== null && hoveredIndex !== i ? 'blur(4px)' : 'none',
            WebkitBackdropFilter: hoveredIndex !== null && hoveredIndex !== i ? 'blur(4px)' : 'none'
          }}
        >
          <div style={{ marginTop: 'auto' }}>
            <span className="subsidiary-card__num">{String(i + 1).padStart(2, '0')}</span>
            {/* Keeping a generic icon for now, could be dynamic in the future */}
            <span className="subsidiary-card__icon"><i className="ri-building-line"></i></span>
            <div className="subsidiary-card__name">{sub.title}</div>
            <div className="subsidiary-card__sector">{sub.tagline}</div>
            <p className="subsidiary-card__desc">{sub.description}</p>
          </div>
          <div className="subsidiary-card__arrow">→</div>
        </Link>
      ))}

      {/* Promo card */}
      <Link 
        href="/businesses/euromega" 
        className="subsidiary-card subsidiary-card--promo" 
        style={{ 
          zIndex: 2,
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
        <div>
          <span className="btn btn--primary" style={{ whiteSpace: 'nowrap' }}>Explore Wholesale →</span>
        </div>
      </Link>
    </div>
  );
}
