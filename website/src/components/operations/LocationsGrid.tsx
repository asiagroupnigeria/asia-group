'use client';

import React, { useState } from 'react';
import { LocationData } from '@/data/locations';
import { LocationCard } from './LocationCard';

interface LocationsGridProps {
  locations: LocationData[];
  hideFilter?: boolean;
}

export function LocationsGrid({ locations, hideFilter = false }: LocationsGridProps) {
  const [filter, setFilter] = useState('all');

  const filteredLocations = filter === 'all'
    ? locations
    : locations.filter(loc => loc.subsidiaryId === filter);

  // Group counts for the filter buttons
  const counts = locations.reduce((acc, loc) => {
    acc[loc.subsidiaryId] = (acc[loc.subsidiaryId] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const getCount = (subsidiaryId: string) => counts[subsidiaryId] || 0;

  return (
    <>
      {!hideFilter && (
        <div className="filter-bar">
          <div className="filter-bar-inner">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Locations <span className="filter-count">{locations.length}</span>
            </button>
            <button
              className={`filter-btn ${filter === 'wholesale' ? 'active' : ''}`}
              onClick={() => setFilter('wholesale')}
            >
              Wholesale & Distribution <span className="filter-count">{getCount('wholesale')}</span>
            </button>
            <button
              className={`filter-btn ${filter === 'automobiles' ? 'active' : ''}`}
              onClick={() => setFilter('automobiles')}
            >
              Asia Automobiles <span className="filter-count">{getCount('automobiles')}</span>
            </button>
            <button
              className={`filter-btn ${filter === 'phones' ? 'active' : ''}`}
              onClick={() => setFilter('phones')}
            >
              Asia Phones <span className="filter-count">{getCount('phones')}</span>
            </button>
            <button
              className={`filter-btn ${filter === 'cosmetics' ? 'active' : ''}`}
              onClick={() => setFilter('cosmetics')}
            >
              Asia Cosmetics <span className="filter-count">{getCount('cosmetics')}</span>
            </button>
            <button
              className={`filter-btn ${filter === 'pharmacy' ? 'active' : ''}`}
              onClick={() => setFilter('pharmacy')}
            >
              Asia Pharmacy <span className="filter-count">{getCount('pharmacy')}</span>
            </button>
            <button
              className={`filter-btn ${filter === 'beverages' ? 'active' : ''}`}
              onClick={() => setFilter('beverages')}
            >
              Asia Beverages <span className="filter-count">{getCount('beverages')}</span>
            </button>
          </div>
        </div>
      )}

      <section className={hideFilter ? '' : 'locations-section'}>
        <div className={hideFilter ? '' : 'locations-inner'}>
          <div className="locations-grid">
            {filteredLocations.map((loc) => (
              <LocationCard key={loc.id} location={loc} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
