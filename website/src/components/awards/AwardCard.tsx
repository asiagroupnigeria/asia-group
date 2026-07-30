import React from 'react';
import { AwardData } from '@/data/awards';

export function AwardCard({ award, index }: { award: AwardData; index: number }) {
  return (
    <div className={`award-card fade-up delay-${(index % 4) + 1}`}>
      <div className="award-image-container" style={{ marginBottom: '24px', overflow: 'hidden', width: '100%', aspectRatio: '1', background: 'var(--bg-muted)' }}>
        {award.image ? (
          <img src={award.image} alt={award.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.2)' }}>No Image</div>
        )}
      </div>
      <div className="award-issuer">{award.issuer}</div>
      <div className="award-name">{award.name}</div>
      <div className="award-year">{award.year}</div>
    </div>
  );
}