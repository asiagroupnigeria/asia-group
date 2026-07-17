'use client';

import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup, Graticule, Sphere } from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';

const geoUrl = '/media/world-110m.json';

const activeCountries = ["Nigeria", "Cameroon", "Chad", "Niger"];
const expandingCountries = [
  "Central African Rep.", "Dem. Rep. Congo", "Kenya", "Uganda", "Tanzania", 
  "United Arab Emirates", "Saudi Arabia", "Germany", "United Kingdom", 
  "United States of America", "South Africa"
];

// Mapping of country name to its specific status to show in tooltip
const getStatus = (name: string, isActive: boolean) => {
  if (name === "Nigeria") return "HQ & Full Operations";
  if (isActive) return "Active Distribution";
  return "Expanding";
};

export function InteractiveMap() {
  const [hoveredRegion, setHoveredRegion] = useState<{ name: string, status: string, isActive: boolean } | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showControls, setShowControls] = useState(false);
  const [position, setPosition] = useState({ coordinates: [15, 20] as [number, number], zoom: 1.8 });

  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
  };

  const handleMoveEnd = (pos: { coordinates: [number, number], zoom: number }) => {
    setPosition(pos);
  };

  return (
    <div 
      className="interactive-map map-container" 
      style={{ 
        position: 'relative', 
        width: '100%', 
        overflow: 'hidden'
      }}
      onMouseMove={(e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
      }}
      onMouseEnter={() => setShowControls(true)}
      onTouchStart={() => setShowControls(true)}
      onMouseLeave={() => {
        setHoveredRegion(null);
        setShowControls(false);
      }}
    >
      <ComposableMap 
        projection="geoEqualEarth"
        style={{ width: '100%', height: '100%' }}
      >
        <ZoomableGroup 
          center={position.coordinates} 
          zoom={position.zoom} 
          onMoveEnd={handleMoveEnd}
          filterZoomEvent={(e: any) => {
            // Disable scroll wheel zooming, require explicit interaction
            return e.type !== 'wheel';
          }}
        >
          {/* Render Sphere (Waters) UNDERNEATH the landmasses */}
          <Sphere stroke="rgba(255, 255, 255, 0.1)" strokeWidth={0.5} fill="#000000" />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name = geo.properties.name;
                const isActive = activeCountries.includes(name);
                const isExpanding = expandingCountries.includes(name);
                
                let fillColor = "var(--green)"; // Default land color
                if (isActive) fillColor = "#FFFFFF"; // Highest contrast for active
                else if (isExpanding) fillColor = "#A5D6A7"; // Distinctly lighter green for expanding

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={fillColor}
                    stroke="#000000" // Black borders to contrast with green land
                    strokeWidth={0.5}
                    style={{
                      default: { outline: 'none', transition: 'fill 0.3s' },
                      hover: { fill: isActive ? '#F0F0F0' : isExpanding ? '#C8E6C9' : '#388E3C', outline: 'none', cursor: (isActive || isExpanding) ? 'pointer' : 'default' },
                      pressed: { outline: 'none' }
                    }}
                    onMouseEnter={() => {
                      if (isActive || isExpanding) {
                        setHoveredRegion({ 
                          name, 
                          status: getStatus(name, isActive), 
                          isActive
                        });
                      }
                    }}
                    onMouseLeave={() => {
                      setHoveredRegion(null);
                    }}
                  />
                );
              })
            }
          </Geographies>
          
          {/* Render Graticule ON TOP of Geographies, with pointer-events: none so they don't block hovers */}
          <Graticule step={[20, 20]} stroke="#FFFFFF" strokeOpacity={0.35} style={{ pointerEvents: 'none', strokeWidth: 1.5 }} fill="none" />
        </ZoomableGroup>
      </ComposableMap>

      {/* Floating HTML Tooltip relative to the viewport (cursor) */}
      <AnimatePresence>
        {hoveredRegion && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'fixed',
              left: mousePos.x,
              top: mousePos.y,
              transform: 'translate(-50%, -120%)',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--border-color)',
              padding: '12px 16px',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              pointerEvents: 'none',
              zIndex: 9999,
              minWidth: '180px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <i className={hoveredRegion.isActive ? 'ri-map-pin-2-fill' : 'ri-globe-line'} style={{ color: 'var(--green-bright)' }}></i>
              <strong style={{ fontFamily: 'var(--font-condensed)', fontSize: '14px', letterSpacing: '0.05em', color: 'var(--text-main)', textTransform: 'uppercase' }}>
                {hoveredRegion.name}
              </strong>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 500 }}>
              {hoveredRegion.status}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Manual Zoom Controls */}
      <div style={{ 
        position: 'absolute', bottom: '24px', right: '24px', display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 10,
        opacity: showControls ? 1 : 0,
        pointerEvents: showControls ? 'auto' : 'none',
        transition: 'opacity 0.3s ease'
      }}>
        <button 
          onClick={handleZoomIn}
          style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--green)', color: '#FFF', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
        >
          +
        </button>
        <button 
          onClick={handleZoomOut}
          style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--green)', color: '#FFF', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
        >
          -
        </button>
      </div>
    </div>
  );
}
