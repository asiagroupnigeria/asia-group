'use client';

import React, { useEffect, useCallback, useState } from 'react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';

export interface HeroSlide {
  title: string;
  subtitle: string;
  background_media: string;
  is_video: boolean;
  cta_1_text?: string;
  cta_1_link?: string;
  cta_2_text?: string;
  cta_2_link?: string;
}

interface HeroProps {
  slides: HeroSlide[];
}

export function Hero({ slides }: HeroProps) {
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
              
              {slide.is_video ? (
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="hero__bg"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                >
                  <source src={slide.background_media} type="video/mp4" />
                </video>
              ) : (
                <div 
                  className="hero__bg" 
                  style={{ backgroundImage: `url(${slide.background_media})` }} 
                />
              )}
              <div className="hero__grid" />
              <div className="hero__overlay" />

              <div className="hero__content-wrap" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className="hero__content">
                  
                  <h1 className="hero__title" dangerouslySetInnerHTML={{ __html: slide.title }} />
                  
                  <p className="hero__desc">{slide.subtitle}</p>

                  <div className="hero__ctas">
                    {slide.cta_1_text && slide.cta_1_link && (
                      <Link href={slide.cta_1_link} className="btn btn--primary">
                        {slide.cta_1_text}
                      </Link>
                    )}
                    {slide.cta_2_text && slide.cta_2_link && (
                      <Link href={slide.cta_2_link} className="btn btn--outline">
                        {slide.cta_2_text}
                      </Link>
                    )}
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
