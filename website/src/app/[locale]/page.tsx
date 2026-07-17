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

  const newsDocs = getCollection('news');
  const news = newsDocs.map(doc => ({
    slug: doc.slug,
    title: doc.data.title,
    date: doc.data.date,
    category: doc.data.category,
    hero_image: doc.data.hero_image,
    excerpt: doc.data.excerpt,
    featured: doc.data.featured || false,
    author: doc.data.author || 'Asia Group Communications',
    read_time: doc.data.read_time || 3
  })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const businessesDocs = getCollection('businesses');
  const businessesAll = businessesDocs
    .map(doc => ({
      slug: doc.data.slug,
      title: doc.data.title,
      tagline: doc.data.tagline,
      description: doc.data.description,
      hero_image: doc.data.hero_image,
      order: doc.data.order,
      published: doc.data.published,
      is_promo: doc.data.is_promo || false
    }))
    .filter(b => b.published)
    .sort((a, b) => a.order - b.order);

  const normalCards = businessesAll.filter(b => !b.is_promo).slice(0, 3);
  const promoCard = businessesAll.find(b => b.is_promo);
  const businesses = [...normalCards, ...(promoCard ? [promoCard] : [])];

  const partnersDocs = getCollection('partners');
  let partners = partnersDocs.map(doc => doc.data).sort((a, b) => a.order - b.order);

  // Duplicate logos to fill 4 lines (24 slots) as placeholders
  if (partners.length > 0) {
    const originalPartners = [...partners];
    while (partners.length < 24) {
      partners = [...partners, ...originalPartners].slice(0, 24);
    }
  }

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
          {news[0] && (
            <Link href={`/news/${news[0].slug}`} className="news-card fade-up">
              <div className="news-card__image news-card__image--featured" style={{ backgroundImage: `url(${news[0].hero_image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              </div>
              <div className="news-card__body">
                <div className="news-card__category">{news[0].category}</div>
                <h3 className="news-card__title news-card__title--lg">{news[0].title}</h3>
                <div className="news-card__meta">
                  {new Date(news[0].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · {news[0].read_time} min read
                </div>
              </div>
            </Link>
          )}

          {/* Secondary News Column */}
          <div className="flex flex-col h-full" style={{ gap: '2px' }}>
            {news[1] && (
              <Link href={`/news/${news[1].slug}`} className="news-card fade-up delay-1" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="news-card__image news-card__image--thumb" style={{ backgroundImage: `url(${news[1].hero_image})`, backgroundSize: 'cover', backgroundPosition: 'center', aspectRatio: '16/9' }}>
                </div>
                <div className="news-card__body mt-auto">
                  <div className="news-card__category">{news[1].category}</div>
                  <h3 className="news-card__title news-card__title--sm">{news[1].title}</h3>
                  <div className="news-card__meta">
                    {new Date(news[1].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </Link>
            )}
            {news[2] && (
              <Link href={`/news/${news[2].slug}`} className="news-card fade-up delay-2" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="news-card__image news-card__image--thumb" style={{ backgroundImage: `url(${news[2].hero_image})`, backgroundSize: 'cover', backgroundPosition: 'center', aspectRatio: '16/9' }}>
                </div>
                <div className="news-card__body mt-auto">
                  <div className="news-card__category">{news[2].category}</div>
                  <h3 className="news-card__title news-card__title--sm">{news[2].title}</h3>
                  <div className="news-card__meta">
                    {new Date(news[2].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Third Column */}
          <div className="flex flex-col h-full" style={{ gap: '2px' }}>
            {news[3] && (
              <Link href={`/news/${news[3].slug}`} className="news-card fade-up delay-3" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="news-card__image news-card__image--thumb" style={{ backgroundImage: `url(${news[3].hero_image})`, backgroundSize: 'cover', backgroundPosition: 'center', aspectRatio: '16/9' }}>
                </div>
                <div className="news-card__body mt-auto">
                  <div className="news-card__category">{news[3].category}</div>
                  <h3 className="news-card__title news-card__title--sm">{news[3].title}</h3>
                  <div className="news-card__meta">
                    {new Date(news[3].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </Link>
            )}
            {news[4] && (
              <Link href={`/news/${news[4].slug}`} className="news-card fade-up delay-4" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="news-card__image news-card__image--thumb" style={{ backgroundImage: `url(${news[4].hero_image})`, backgroundSize: 'cover', backgroundPosition: 'center', aspectRatio: '16/9' }}>
                </div>
                <div className="news-card__body mt-auto">
                  <div className="news-card__category">{news[4].category}</div>
                  <h3 className="news-card__title news-card__title--sm">{news[4].title}</h3>
                  <div className="news-card__meta">
                    {new Date(news[4].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>

        <div className="inner text-center mt-8" style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/news" className="btn btn--outline">View All News & Press →</Link>
        </div>
      </section>

    </div>
  );
}
