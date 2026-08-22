'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AwardData } from '@/data/awards';
import { AwardCard } from './AwardCard';

export function AwardsGrid({ awards }: { awards: AwardData[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const close = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex(i => (i === null ? null : (i - 1 + awards.length) % awards.length));
  }, [awards.length]);

  const next = useCallback(() => {
    setLightboxIndex(i => (i === null ? null : (i + 1) % awards.length));
  }, [awards.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex, next, prev]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <>
      <div className="awards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', marginTop: '48px' }}>
        {awards.map((award, i) => (
          <AwardCard key={award.id} award={award} index={i} onClick={() => setLightboxIndex(i)} />
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
          }}
        >
          {/* Index indicator */}
          <div style={{
            position: 'absolute',
            top: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(255,255,255,0.6)',
            fontSize: '13px',
            letterSpacing: '0.15em',
            fontFamily: 'var(--font-condensed)',
            pointerEvents: 'none',
            textTransform: 'uppercase',
          }}>
            {lightboxIndex + 1} / {awards.length}
          </div>

          {/* Close button */}
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '36px',
              cursor: 'pointer',
              lineHeight: 1,
              opacity: 0.8,
              zIndex: 10000,
            }}
          >
            ×
          </button>

          {/* Left Arrow */}
          {awards.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
              style={{
                position: 'absolute',
                left: '24px',
                background: 'rgba(255,255,255,0.08)',
                border: 'none',
                color: '#fff',
                fontSize: '28px',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(4px)',
                transition: 'background 0.2s',
                zIndex: 10000,
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
            >
              ‹
            </button>
          )}

          {/* Award Info (Bottom overlay) */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              width: '90%',
              maxWidth: '600px',
              pointerEvents: 'none',
            }}
          >
            <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--silver-light)' }}>
              {awards[lightboxIndex].issuer}
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#fff', marginTop: '6px' }}>
              {awards[lightboxIndex].name}
            </div>
            <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>
              Year: {awards[lightboxIndex].year}
            </div>
          </div>

          {/* Image display */}
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '70vh' }}>
            <img
              key={lightboxIndex}
              src={awards[lightboxIndex].image}
              alt={awards[lightboxIndex].name}
              style={{
                maxWidth: '90vw',
                maxHeight: '70vh',
                display: 'block',
                objectFit: 'contain',
                boxShadow: '0 0 80px rgba(0,0,0,0.9)',
                borderRadius: 0,
              }}
            />
          </div>

          {/* Right Arrow */}
          {awards.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
              style={{
                position: 'absolute',
                right: '24px',
                background: 'rgba(255,255,255,0.08)',
                border: 'none',
                color: '#fff',
                fontSize: '28px',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(4px)',
                transition: 'background 0.2s',
                zIndex: 10000,
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}