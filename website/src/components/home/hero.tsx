'use client';

import React, { useEffect, useCallback, useState } from 'react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';

const slides = [
  {
    video: '/media/hero-video.mp4',
    poster: '/media/about-hero.jpg',
        title: <>Africa&apos;s Number One<br /><strong>Wholesale &amp; Distribution</strong> Conglomerate</>,
    desc: 'Powering commerce across four nations with trust, scale, and uncompromising vision.',
    ctas: [
      { text: 'Discover Our Story', href: '/about', type: 'primary' },
      { text: 'View Subsidiaries', href: '/businesses', type: 'outline' }
    ]
  },
  {
    image: '/media/hero-fmcg.jpg',
        title: <>Feeding &amp; Supplying<br /><strong>The Next Generation</strong> of Africa</>,
    desc: 'Unrivaled volume in sugar, rice, and detergents, connecting global brands to local markets.',
    ctas: [
      { text: 'Explore FMCG Division', href: '/businesses', type: 'primary' },
      { text: 'Partner With Us', href: '/contact', type: 'outline' }
    ]
  },
  {
    image: '/media/hero-logistics.jpg',
        title: <>Moving Continents<br /><strong>With Precision &amp; Power</strong></>,
    desc: 'A massive fleet ensuring seamless distribution across the hardest-to-reach borders.',
    ctas: [
      { text: 'View Logistics Network', href: '/businesses', type: 'primary' },
      { text: 'Learn More', href: '/about#operations', type: 'outline' }
    ]
  }
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  const resetAutoplay = useCallback(() => setResetKey(k => k + 1), []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) { emblaApi.scrollPrev(); resetAutoplay(); }
  }, [emblaApi, resetAutoplay]);

  const scrollNext = useCallback(() => {
    if (emblaApi) { emblaApi.scrollNext(); resetAutoplay(); }
  }, [emblaApi, resetAutoplay]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) { emblaApi.scrollTo(index); resetAutoplay(); }
  }, [emblaApi, resetAutoplay]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const intervalId = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 6000); // 6 seconds per slide
    return () => clearInterval(intervalId);
  }, [emblaApi, resetKey]);

  return (
    <section id="hero" className="hero" style={{ padding: 0 }}>
      {/* Carousel Viewport */}
      <div className="embla" ref={emblaRef} style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <div className="embla__container" style={{ display: 'flex', height: '100%' }}>
          {slides.map((slide, i) => (
            <div className="embla__slide" key={i} style={{ flex: '0 0 100%', minWidth: 0, position: 'relative' }}>
              
              {slide.video ? (
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  poster={slide.poster}
                  className="hero__bg"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
              ) : (
                <div 
                  className="hero__bg" 
                  style={{ backgroundImage: `url(${slide.image})` }} 
                />
              )}
              <div className="hero__grid" />
              <div className="hero__overlay" />

              <div className="hero__content-wrap" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className="hero__content">
                  
                  <h1 className="hero__title">{slide.title}</h1>
                  
                  <p className="hero__desc">{slide.desc}</p>

                  <div className="hero__ctas">
                    {slide.ctas.map((cta, j) => (
                      <Link key={j} href={cta.href} className={`btn btn--${cta.type}`}>
                        {cta.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <button 
        className="hero__control hero__control--prev"
        onClick={scrollPrev}
        aria-label="Previous slide"
      >
        <i className="ri-arrow-left-s-line"></i>
      </button>
      
      <button 
        className="hero__control hero__control--next"
        onClick={scrollNext}
        aria-label="Next slide"
      >
        <i className="ri-arrow-right-s-line"></i>
      </button>

      
      {/* Core Sectors Bar (Static overlay at bottom) */}
      <div className="hero__stats">
        {[
          { icon: <i className="ri-global-line"></i>, label: 'Global Brand Distribution' },
          { icon: <i className="ri-shopping-basket-line"></i>, label: 'FMCGs' },
          { icon: <i className="ri-building-4-line"></i>, label: 'Enterprise Wholesale' },
          { icon: <i className="ri-truck-line"></i>, label: 'Automotive & Consumer Tech' },
          { icon: <i className="ri-capsule-line"></i>, label: 'Pharmaceuticals' },
          { icon: <i className="ri-sparkling-line"></i>, label: 'Cosmetics' },
        ].map((sector, i) => (
          <div key={i} className="stat-bar-item">
            <div className="stat-bar-item__num" style={{ fontSize: '24px' }}>
              {sector.icon}
            </div>
            <div className="stat-bar-item__label">{sector.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
