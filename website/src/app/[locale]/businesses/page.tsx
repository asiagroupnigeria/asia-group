import Link from 'next/link';
import { getCollection } from '@/lib/cms';
import { FadeUpObserver } from '@/components/ui/fade-up-observer';

export default async function BusinessesPage() {
  // Fetch data from CMS
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

  const normalCards = businessesAll.filter(b => !b.is_promo);
  const promoCard = businessesAll.find(b => b.is_promo);

  const subsidiaryColors: Record<string, string> = {
    wholesale: 'var(--green-light, #4CAF50)',
    pharmacy: '#4DB6AC',
    automobiles: '#EF5350',
    beverages: '#42A5F5',
    cosmetics: '#CE93D8',
    phones: '#4FC3F7',
  };

  return (
    <div>
      <FadeUpObserver />
      
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header__watermark" aria-hidden="true">BUSINESSES</div>
        <div className="inner">
          <h1 className="display-title">
            Six Pillars of a<br />Diversified Empire
          </h1>
          <p className="page-header__desc">
            Each subsidiary leads its sector. Together they form the most vertically diversified distribution and commerce group in Northern Nigeria — and one of the largest on the continent.
          </p>
        </div>
      </section>

      {/* SUBSIDIARIES GRID */}
      <section className="section bg-dark-2">
        <div className="inner">
          <div className="grid-3">
            {normalCards.map((sub, i) => (
              <Link 
                key={i} 
                href={`/businesses/${sub.slug}`} 
                className="subsidiary-card fade-up delay-1"
                style={{ 
                  '--sub-color': subsidiaryColors[sub.slug] || 'var(--green-bright)',
                  backgroundImage: `url(${sub.hero_image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                } as React.CSSProperties}
              >
                <div style={{ marginTop: 'auto' }}>
                  <span className="subsidiary-card__num">{String(i + 1).padStart(2, '0')}</span>
                  {/* Using a generic icon, or we could add icon field to CMS */}
                  <span className="subsidiary-card__icon"><i className="ri-building-line"></i></span>
                  <div className="subsidiary-card__name">{sub.title}</div>
                  <div className="subsidiary-card__sector">{sub.tagline}</div>
                  <p className="subsidiary-card__desc">{sub.description}</p>
                </div>
                <div className="subsidiary-card__arrow">→</div>
              </Link>
            ))}

            {/* Promo card dynamically rendered to match homepage */}
            {promoCard && (
              <Link 
                href={`/businesses/${promoCard.slug}`} 
                className="subsidiary-card subsidiary-card--promo fade-up delay-2"
                style={{
                  background: `linear-gradient(to right, rgba(27, 94, 32, 0.75) 30%, rgba(27, 94, 32, 0.1) 100%), url(${promoCard.hero_image}) center/cover`
                }}
              >
                <div>
                  <div className="subsidiary-card__name">{promoCard.title}</div>
                  <div className="subsidiary-card__sector">{promoCard.tagline}</div>
                  <p className="subsidiary-card__desc">
                    {promoCard.description}
                  </p>
                </div>
                <div style={{ flexShrink: 0 }}>
                  <span className="btn btn--primary" style={{ whiteSpace: 'nowrap' }}>Explore Wholesale →</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>


    </div>
  );
}
