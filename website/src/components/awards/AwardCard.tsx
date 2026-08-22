'use client';
import React from 'react';
import { AwardData } from '@/data/awards';

interface AwardCardProps {
  award: AwardData;
  index: number;
  onClick: () => void;
}

export function AwardCard({ award, index, onClick }: AwardCardProps) {
  return (
    <div className={`award-card fade-up delay-${(index % 4) + 1}`}>
      <div
        className="award-image-container"
        onClick={onClick}
        style={{
          marginBottom: '16px',
          overflow: 'hidden',
          width: '100%',
          aspectRatio: '3/4',
          background: 'var(--bg-muted)',
          cursor: 'pointer',
          position: 'relative',
          borderRadius: 0,
        }}
      >
        {award.image ? (
          <>
            <img
              src={award.image}
              alt={award.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, transition: 'transform 0.4s ease' }}
              onMouseOver={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'; }}
              onMouseOut={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
            />
            <div style={{
              position: 'absolute', inset: 0, background: 'rgba(0,0,0,0)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.3s',
              color: '#fff', opacity: 0,
              borderRadius: 0,
            }}
              onMouseOver={e => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,0,0,0.25)';
                (e.currentTarget as HTMLDivElement).style.opacity = '1';
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,0,0,0)';
                (e.currentTarget as HTMLDivElement).style.opacity = '0';
              }}
            >
              <i className="ri-zoom-in-line" style={{ fontSize: '2rem' }}></i>
            </div>
          </>
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.2)', borderRadius: 0 }}>No Image</div>
        )}
      </div>
      <div className="award-issuer">{award.issuer}</div>
      <div className="award-name">{award.name}</div>
      <div className="award-year">{award.year}</div>
    </div>
  );
}