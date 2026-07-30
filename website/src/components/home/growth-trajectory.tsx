import React from 'react';

export function GrowthTrajectory() {
  return (
    <section id="expansion">
      <div className="exp-inner">
        <div className="exp-header fade-up">
          <div>
            {/* Section tag removed per requirements */}
            <h2 className="section-title">Where We Are<br />Going Next</h2>
          </div>
          <p className="section-body" style={{ color: 'rgba(0,0,0,0.6)' }}>
            Asia Group does not stand still. The same ambition that built Africa&apos;s #1 detergent distribution empire from ₦20,000 is now aimed at the continent — and beyond.
          </p>
        </div>
        <div className="exp-phases">
          <div className="exp-phase active fade-up d1">
            <div className="exp-phase-num" aria-hidden="true">1</div>
            <div className="exp-phase-tag">Phase 1 — Active Now</div>
            <div className="exp-phase-title">Four-Nation Dominance</div>
            <div className="exp-items">
              <div className="exp-item">Nigeria — 19 Kano locations + head office operations</div>
              <div className="exp-item">Cameroon — Active cross-border distribution</div>
              <div className="exp-item">Chad — Active operations</div>
              <div className="exp-item">Niger Republic — Active operations</div>
              <div className="exp-item">30+ global brand partnerships in operation</div>
            </div>
          </div>
          <div className="exp-phase progress fade-up d2">
            <div className="exp-phase-num" aria-hidden="true">2</div>
            <div className="exp-phase-tag">Phase 2 — In Progress</div>
            <div className="exp-phase-title">Central & East Africa</div>
            <div className="exp-items">
              <div className="exp-item">Central Africa entry — DRC, Gabon, Congo</div>
              <div className="exp-item">East Africa expansion — Kenya, Tanzania, Ethiopia</div>
              <div className="exp-item">Regional distribution hubs per market</div>
              <div className="exp-item">New principal partnerships in target markets</div>
            </div>
          </div>
          <div className="exp-phase planned fade-up d3">
            <div className="exp-phase-num" aria-hidden="true">3</div>
            <div className="exp-phase-tag">Phase 3 — Planned</div>
            <div className="exp-phase-title">Manufacturing & Global</div>
            <div className="exp-items">
              <div className="exp-item">Pampas, pads & detergent manufacturing facilities</div>
              <div className="exp-item">Trade offices in Asia, Europe, and America</div>
              <div className="exp-item">Direct global manufacturer sourcing</div>
              <div className="exp-item">Asia Group as a global trade infrastructure brand</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}