import React from 'react';
import { AwardData } from '@/data/awards';
import { AwardCard } from './AwardCard';

export function AwardsGrid({ awards }: { awards: AwardData[] }) {
  return (
    <div className="awards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', marginTop: '48px' }}>
      {awards.map((award, i) => (
        <AwardCard key={award.id} award={award} index={i} />
      ))}
    </div>
  );
}