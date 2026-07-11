'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { Hero } from '@/components/home/hero';
import { SubsidiariesGrid } from '@/components/home/subsidiaries-grid';
import { AnimatedNumber } from '@/components/ui/animated-number';

export default function Home() {
  // Fade-up scroll animation
  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        if (el.isIntersecting) {
          el.target.classList.add('visible');
          observer.unobserve(el.target);
        }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>

      {/* ==================== HERO ==================== */}
      <Hero />



      {/* ==================== NUMBERS ==================== */}
      <section id="numbers" className="numbers-section">
        <div className="numbers-watermark" aria-hidden="true">SCALE</div>

        <div className="fade-up inner">

          <h2 className="section-title">
            Numbers That Define<br />a Continent&apos;s Trade
          </h2>
        </div>

        <div className="numbers-grid inner">
          {[
            { value: 100, suffix: 'K', unit: 'T', label: 'Tonnes of Detergent', desc: 'Distributed annually — the highest volume of any distributor on the African continent' },
            { value: 30, suffix: '', unit: '+', label: 'Global Brands Represented', desc: 'Including Nestlé, Cadbury, Olam, Dangote, SinoTruck, and PZ Cussons among others' },
            { value: 4, suffix: '', unit: '', label: 'Countries Active', desc: 'Nigeria, Cameroon, Chad, and Niger — with Central and East Africa expansion in progress' },
            { value: 8, suffix: 'K', unit: '', label: 'Staff Across Nigeria', desc: 'A dedicated workforce driving our operations and distribution network nationwide' },
            { value: 500, suffix: 'K+', unit: 'sq. ft.', label: 'Warehousing & Logistics Infrastructure', desc: 'State-of-the-art infrastructure powering our supply chain' },
            { value: 19, suffix: '', unit: '', label: 'Operating Locations Across Nigeria', desc: 'Strategic hubs spread across Nigeria ensuring seamless reach and efficiency' },
            { value: 3, suffix: '', unit: '', label: 'Decades of Generational Growth', desc: 'Building a legacy of commercial excellence and generational success since 1988' },
            { value: 4, suffix: 'K', unit: '', label: 'Daily Meals Served', desc: '2,000 afternoon and 2,000 evening meals provided daily to people across Kano' },
          ].map((item, i) => (
            <div key={i} className={`number-item fade-up delay-${(i % 4) + 1}`}>
              <div className="number-item__value">
                <AnimatedNumber value={item.value} duration={2} />{item.suffix}{item.unit && <span className="number-item__unit">{item.unit}</span>}
              </div>
              <div className="number-item__label">{item.label}</div>
              <div className="number-item__desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SUBSIDIARIES ==================== */}
      <section id="subsidiaries" className="section bg-dark-2">
        <div className="inner grid-2 grid-2--end" style={{ marginBottom: '80px' }}>
          <div>

            <h2 className="section-title">
              Six Pillars of a<br /><em>Diversified Empire</em>
            </h2>
          </div>
          <div>
            <p className="section-body">
              Each subsidiary leads its sector. Together they form the most vertically diversified distribution and commerce group in Northern Nigeria — and one of the largest on the continent.
            </p>
          </div>
        </div>

        <SubsidiariesGrid />

        <div className="inner" style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
          <Link href="/businesses" className="btn btn--outline" style={{ padding: '16px 40px' }}>
            View All Subsidiaries
          </Link>
        </div>
      </section>

      {/* ==================== PARTNERS ==================== */}
      <section id="partners" className="partners-section">
        <div className="partners-header">

          <h2 className="section-title section-title--dark">
            The World&apos;s Best<br /><em>Trust Asia Group</em>
          </h2>
          <p className="partners-desc">
            Over 30 of the world&apos;s most recognized manufacturers and conglomerates have chosen Asia Group as their distribution partner. When global brands need African reach, they come here.
          </p>
        </div>

        <div className="inner grid-6">
          {[
            { name: 'Olam International', src: '/media/logos/olam.svg' },
            { name: 'Nestlé Nigeria', src: '/media/logos/nestle.svg' },
            { name: 'Cadbury Nigeria', src: '/media/logos/cadbury.svg' },
            { name: 'Dangote Group', src: '/media/logos/dangote.svg' },
            { name: 'BUA Group', src: '/media/logos/bua.svg' },
            { name: 'SinoTruck Nigeria', src: '/media/logos/sinotruck.svg' },
            { name: 'Mikano Motors', src: '/media/logos/mikano.svg' },
            { name: '7UP Bottling Company', src: '/media/logos/7up.svg' },
            { name: 'EUROMEGA', src: '/media/logos/euromega.svg' },
            { name: 'Aspira', src: '/media/logos/aspira.svg' },
            { name: 'Mamuda Group', src: '/media/logos/mamuda.svg' },
            { name: 'Ammasco', src: '/media/logos/ammasco.svg' }
          ].map((partner, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 16px', borderRight: (i + 1) % 6 !== 0 ? '1px solid rgba(255,255,255,0.06)' : 'none', borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <img src={partner.src} alt={partner.name} style={{ width: '100%', maxWidth: '120px', opacity: 0.6, filter: 'grayscale(100%) brightness(200%)', transition: 'opacity 0.3s' }} onMouseEnter={e => e.currentTarget.style.opacity = '1'} onMouseLeave={e => e.currentTarget.style.opacity = '0.6'} />
            </div>
          ))}
        </div>
      </section>

      {/* ==================== OPERATIONS ==================== */}
      <section id="operations" className="section bg-dark">
        <div className="inner grid-2 grid-2--img grid-2--start">
          <div className="fade-up">

            <h2 className="section-title">
              Operating Across<br /><em>Four Nations.</em><br />Expanding to the World.
            </h2>
            <p className="section-body mt-4">
              Headquartered in Kano, Nigeria with operational footprint in Cameroon, Chad, and Niger — and active expansion into Central Africa, East Africa, Asia, Europe, and America.
            </p>

            <div className="locations-list mt-4">
              {[
                { country: 'Nigeria', status: 'HQ + Full Operations', active: true },
                { country: 'Cameroon', status: 'Active', active: true },
                { country: 'Chad', status: 'Active', active: true },
                { country: 'Niger Republic', status: 'Active', active: true },
                { country: 'Central Africa', status: 'Expanding', active: false },
                { country: 'East Africa', status: 'Expanding', active: false },
                { country: 'Asia · Europe · America', status: 'Coming Soon', active: false },
              ].map((loc, i) => (
                <div key={i} className="location-row">
                  <div className={`location-row__dot ${loc.active ? 'location-row__dot--active' : 'location-row__dot--expanding'}`} />
                  <div className="location-row__name">{loc.country}</div>
                  <div className={`location-row__status ${loc.active ? 'location-row__status--active' : 'location-row__status--expanding'}`}>{loc.status}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up delay-2">
            {/* Map placeholder */}
            <div className="map-placeholder">
              <p className="placeholder-text">
                Interactive Map of Operations<br /><br />
                Africa + Global Presence
              </p>
            </div>
            {/* Video placeholder */}
            <div className="video-placeholder">
              <p className="placeholder-text">
                Logistics / Warehouse Operations Cinematic
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* ==================== NEWS ==================== */}
      <section id="news" className="section bg-dark-2">
        <div className="inner grid-2 grid-2--end" style={{ marginBottom: '80px' }}>
          <div>

            <h2 className="section-title">Asia Group<br /><em>in the News</em></h2>
          </div>
          <div>
            <p className="section-body">
              Stay updated on our latest expansions, community initiatives, and corporate announcements across all our subsidiaries and operating regions.
            </p>
          </div>
        </div>

        <div className="inner grid-news">
          {/* Featured News */}
          <Link href="/news" className="news-card fade-up">
            <div className="news-card__image news-card__image--featured">
              <p className="placeholder-text">Featured News Image</p>
            </div>
            <div className="news-card__body">
              <div className="news-card__category">Corporate Expansion</div>
              <h3 className="news-card__title news-card__title--lg">Asia Group Announces Expansion into Central and East African Markets for 2025</h3>
              <div className="news-card__meta">July 15, 2026 · 5 min read</div>
            </div>
          </Link>

          {/* Secondary News Column */}
          <div className="flex-col gap-1" style={{ gap: '2px' }}>
            <Link href="/news" className="news-card fade-up delay-1" style={{ flex: 1 }}>
              <div className="news-card__image news-card__image--thumb">
                <p className="placeholder-text">Thumbnail</p>
              </div>
              <div className="news-card__body">
                <div className="news-card__category">Community</div>
                <h3 className="news-card__title news-card__title--sm">Daily Meal Distribution Programme Reaches 4,000 Milestone</h3>
                <div className="news-card__meta">June 28, 2026</div>
              </div>
            </Link>
            <Link href="/news" className="news-card fade-up delay-2" style={{ flex: 1 }}>
              <div className="news-card__body mt-auto">
                <div className="news-card__category">Partnerships</div>
                <h3 className="news-card__title news-card__title--sm">SinoTruck Renews Exclusive Distribution Agreement</h3>
                <div className="news-card__meta">June 10, 2026</div>
              </div>
            </Link>
          </div>

          {/* Third Column */}
          <div className="flex-col gap-1" style={{ gap: '2px' }}>
            <Link href="/news" className="news-card fade-up delay-3" style={{ flex: 1 }}>
              <div className="news-card__body mt-auto">
                <div className="news-card__category">Subsidiaries</div>
                <h3 className="news-card__title news-card__title--sm">Asia Pharmacy Opens New Logistics Hub in Kano</h3>
                <div className="news-card__meta">May 22, 2026</div>
              </div>
            </Link>
            <Link href="/news" className="news-card fade-up delay-4" style={{ flex: 1 }}>
              <div className="news-card__image news-card__image--thumb">
                <p className="placeholder-text">Thumbnail</p>
              </div>
              <div className="news-card__body">
                <div className="news-card__category">Awards</div>
                <h3 className="news-card__title news-card__title--sm">Chairman Honoured for Trade Excellence</h3>
                <div className="news-card__meta">April 15, 2026</div>
              </div>
            </Link>
          </div>
        </div>

        <div className="inner text-center mt-8" style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/news" className="btn btn--outline">View All News & Press →</Link>
        </div>
      </section>



    </div>
  );
}
