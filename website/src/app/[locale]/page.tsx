import Link from 'next/link';
import { InteractiveMap } from '@/components/home/interactive-map';
import { Hero } from '@/components/home/hero';
import { SubsidiariesGrid } from '@/components/home/subsidiaries-grid';
import { AnimatedNumber } from '@/components/ui/animated-number';
import { FadeUpObserver } from '@/components/ui/fade-up-observer';
import { getCollection } from '@/lib/cms';

export default async function Home() {
  // Fetch data from CMS
  const heroSlidesDocs = getCollection('hero_slides');
  const heroSlides = heroSlidesDocs.map(doc => doc.data).sort((a, b) => a.order - b.order);

  const metricsDocs = getCollection('metrics');
  const metrics = metricsDocs.map(doc => doc.data).sort((a, b) => a.order - b.order);

  const businessesDocs = getCollection('businesses');
  const businesses = businessesDocs
    .map(doc => ({
      slug: doc.data.slug,
      title: doc.data.title,
      tagline: doc.data.tagline,
      description: doc.data.description,
      hero_image: doc.data.hero_image,
      order: doc.data.order,
      published: doc.data.published
    }))
    .filter(b => b.published)
    .sort((a, b) => a.order - b.order);

  const partnersDocs = getCollection('partners');
  const partners = partnersDocs.map(doc => doc.data).sort((a, b) => a.order - b.order);

  return (
    <div>
      <FadeUpObserver />

      {/* ==================== HERO ==================== */}
      <Hero slides={heroSlides} />

      {/* ==================== NUMBERS ==================== */}
      <section id="numbers" className="numbers-section">
        <div className="numbers-watermark" aria-hidden="true">SCALE</div>

        <div className="fade-up inner">
          <h2 className="section-title">
            Numbers That Define<br />a Continent&apos;s Trade
          </h2>
        </div>

        <div className="numbers-grid inner">
          {metrics.map((item, i) => (
            <div key={i} className={`number-item fade-up delay-${(i % 4) + 1}`}>
              <div className="number-item__value">
                <AnimatedNumber value={item.value} duration={2} />{item.suffix}{item.unit && <span className="number-item__unit">{item.unit}</span>}
              </div>
              <div className="number-item__label">{item.label}</div>
              <div className="number-item__desc">{item.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SUBSIDIARIES ==================== */}
      <section id="subsidiaries" className="section bg-dark-2">
        <div className="inner grid-2 grid-2--end" style={{ marginBottom: '80px' }}>
          <div>
            <h2 className="section-title">
              Six Pillars of a<br />Diversified Empire
            </h2>
          </div>
          <div>
            <p className="section-body">
              Each subsidiary leads its sector. Together they form the most vertically diversified distribution and commerce group in Northern Nigeria — and one of the largest on the continent.
            </p>
          </div>
        </div>

        <SubsidiariesGrid businesses={businesses} />

        <div className="inner" style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
          <Link href="/businesses" className="btn btn--outline" style={{ padding: '16px 40px' }}>
            View All Subsidiaries
          </Link>
        </div>
      </section>

      {/* ==================== PARTNERS ==================== */}
      <section id="partners" className="partners-section">
        <div className="inner grid-2 grid-2--end" style={{ marginBottom: '80px' }}>
          <div className="fade-up">
            <h2 className="section-title section-title--dark">
              The World&apos;s Best<br />Trust Asia Group
            </h2>
          </div>
          <div className="fade-up delay-1">
            <p className="section-body" style={{ color: 'var(--text-muted)' }}>
              Over 30 of the world&apos;s most recognized manufacturers and conglomerates have chosen Asia Group as their distribution partner. When global brands need African reach, they come here.
            </p>
          </div>
        </div>

        <div className="inner grid-6">
          {partners.map((partner, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 16px', borderRight: (i + 1) % 6 !== 0 ? '1px solid var(--border-color)' : 'none', borderBottom: i < partners.length - 6 ? '1px solid var(--border-color)' : 'none', height: '120px' }}>
              <img src={partner.logo} alt={partner.name} style={{ maxWidth: '140px', maxHeight: '60px', width: 'auto', height: 'auto', objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </section>

      {/* ==================== OPERATIONS ==================== */}
      <section id="operations" className="section bg-dark" style={{ backgroundColor: '#000000' }}>
        <div className="inner grid-2 grid-2--start" style={{ marginBottom: '40px' }}>
          <div className="fade-up">
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              Operating Across<br />Four Nations. Expanding to the World.
            </h2>
          </div>
          <div className="fade-up delay-1">
            <p className="section-body" style={{ color: '#A0AABF' }}>
              Headquartered in Kano, Nigeria with operational footprint in Cameroon, Chad, and Niger — and active expansion into Central Africa, East Africa, Asia, Europe, and America.
            </p>
          </div>
        </div>

        <div className="fade-up delay-2" style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
          <InteractiveMap />
        </div>
      </section>

      {/* ==================== NEWS ==================== */}
      <section id="news" className="section bg-dark-2">
        <div className="inner grid-2 grid-2--end" style={{ marginBottom: '80px' }}>
          <div>
            <h2 className="section-title">Asia Group<br />in the News</h2>
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
