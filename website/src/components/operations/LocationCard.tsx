import React from 'react';
import { LocationData } from '@/data/locations';

interface LocationCardProps {
  location: LocationData;
}

export function LocationCard({ location }: LocationCardProps) {
  const subsidiaryColors: Record<string, string> = {
    wholesale: 'var(--green-light, #4CAF50)',
    pharmacy: '#4DB6AC',
    automobiles: '#EF5350',
    beverages: '#42A5F5',
    cosmetics: '#CE93D8',
    phones: '#4FC3F7',
  };

  const subColor = subsidiaryColors[location.subsidiaryId] || 'var(--green-light, #4CAF50)';

  return (
    <div className="loc-card" data-subsidiary={location.subsidiaryId}>
      <div className="loc-photo">
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: subColor, zIndex: 10 }}></div>
        {location.image ? (
          <img
            className="loc-photo-img"
            src={location.image}
            alt={location.name}
          />
        ) : (
          <div className="loc-photo-img">
            <div className="loc-photo-placeholder">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect x="4" y="18" width="32" height="18" stroke="white" strokeWidth="1.5" />
                <rect x="14" y="24" width="12" height="12" stroke="white" strokeWidth="1.5" />
                <path d="M2 18L20 6L38 18" stroke="white" strokeWidth="1.5" />
              </svg>
              <p>MEDIA: {location.name}</p>
            </div>
          </div>
        )}
        {/* loc-badge removed to match asia.html design */}
        <div className="loc-number">{location.id}</div>
        <div className="loc-expand">
          <div className="loc-expand-title">Location {location.id} — Management</div>
          <div className="loc-expand-md">{location.manager.name}</div>
          <div className="loc-expand-md-title">{location.manager.titleAndPhone}</div>
          <p className="loc-expand-desc" style={{ opacity: 1 }}>
            {location.products}
          </p>
        </div>
      </div>
      <div className="loc-body" style={{ paddingBottom: '24px' }}>
        <div style={{
          fontFamily: 'var(--font-condensed)',
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '6px',
          color: subColor
        }}>
          {location.subsidiaryName}
        </div>
        <div className="loc-name" style={{ fontFamily: 'var(--font-condensed)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em', color: 'var(--text-main)' }}>{location.name}</div>
        <div
          className="loc-address"
          style={{ marginBottom: 0 }}
          dangerouslySetInnerHTML={{ __html: location.address.replace(/\n/g, '<br/>') }}
        ></div>
      </div>
    </div>
  );
}
