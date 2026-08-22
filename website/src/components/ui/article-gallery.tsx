'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface ArticleGalleryProps {
  items: string[];
  title: string;
}

function GalleryMedia({ src, style, onClick }: { src: string; style?: React.CSSProperties; onClick?: () => void }) {
  if (src.endsWith('.mp4')) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        onClick={onClick}
        style={{ cursor: onClick ? 'pointer' : 'default', ...style }}
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default', ...style }}
    />
  );
}

export function ArticleGallery({ items, title }: ArticleGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex(i => (i === null ? null : (i - 1 + items.length) % items.length));
  }, [items.length]);

  const next = useCallback(() => {
    setLightboxIndex(i => (i === null ? null : (i + 1) % items.length));
  }, [items.length]);

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
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); }
    touchStartX.current = null;
  };

  if (!items.length) return null;

  return (
    <>
      <div style={{
        fontFamily: 'var(--font-condensed)',
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: 'var(--green)',
        marginBottom: '24px',
        marginTop: '56px',
      }}>
        Photo Gallery
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        marginTop: '24px',
      }}>
        {items.map((src, i) => (
          <div key={i} style={{ overflow: 'hidden', width: '100%', position: 'relative', borderRadius: 0 }}>
            <GalleryMedia
              src={src}
              onClick={() => open(i)}
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 0 }}
            />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <div style={{
            position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)',
            color: 'rgba(255,255,255,0.6)', fontSize: '13px', letterSpacing: '0.1em',
            fontFamily: 'var(--font-condensed)', pointerEvents: 'none',
          }}>
            {lightboxIndex + 1} / {items.length}
          </div>

          <button onClick={(e) => { e.stopPropagation(); close(); }} aria-label="Close"
            style={{ position: 'absolute', top: '16px', right: '20px', background: 'none', border: 'none', color: '#fff', fontSize: '32px', cursor: 'pointer', lineHeight: 1, opacity: 0.8 }}>
            ×
          </button>

          {items.length > 1 && (
            <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous"
              style={{ position: 'absolute', left: '16px', background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', fontSize: '28px', width: '48px', height: '48px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}>
              ‹
            </button>
          )}

          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '88vh' }}>
            {items[lightboxIndex].endsWith('.mp4') ? (
              <video key={lightboxIndex} autoPlay controls loop playsInline
                style={{ maxWidth: '90vw', maxHeight: '88vh', display: 'block', objectFit: 'contain' }}>
                <source src={items[lightboxIndex]} type="video/mp4" />
              </video>
            ) : (
              <img key={lightboxIndex} src={items[lightboxIndex]} alt={`${title} — photo ${lightboxIndex + 1}`}
                style={{ maxWidth: '90vw', maxHeight: '88vh', display: 'block', objectFit: 'contain' }} />
            )}
          </div>

          {items.length > 1 && (
            <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next"
              style={{ position: 'absolute', right: '16px', background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', fontSize: '28px', width: '48px', height: '48px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}>
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}
