import React from 'react';
import { LocationData } from '@/data/locations';

interface LocationCardProps {
  location: LocationData;
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="loc-card" data-subsidiary={location.subsidiaryId}>
      <div className="loc-photo">
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
        <div className={`loc-badge ${location.subsidiaryId}`}>
          {location.subsidiaryName}
        </div>
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
        <div className="loc-name">{location.name}</div>
        <div className="loc-role">{location.role}</div>
        <div
          className="loc-address"
          style={{ marginBottom: 0 }}
          dangerouslySetInnerHTML={{ __html: location.address.replace(/\n/g, '<br/>') }}
        ></div>
      </div>
    </div>
  );
}
