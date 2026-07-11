'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function NewsPage() {
  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        if (el.isIntersecting) { el.target.classList.add('visible'); observer.unobserve(el.target); }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const articles = [
    { featured: true, category: 'Corporate', title: 'Asia Group Announces Expansion into Central and East Africa — New Logistics Infrastructure to Serve 8 Additional Markets', meta: 'Press Release · [ Date — TBD ]' },
    { featured: false, category: 'Philanthropy', title: '4,000 Meals a Day: How Asia Group\'s Daily Feeding Programme Is Transforming Kano', meta: 'CSR Report · [ Date — TBD ]' },
    { featured: false, category: 'Business', title: 'Chairman Alhaji Sani Isah Speaks on Building Africa\'s Most Trusted Distribution Company', meta: 'CEO Interview · [ Date — TBD ]' },
    { featured: false, category: 'Corporate', title: 'Asia Automobiles Signs New Partnership with SinoTruck for Expanded Fleet Supply to West Africa', meta: 'Press Release · [ Date — TBD ]' },
    { featured: false, category: 'Philanthropy', title: 'Asia Group Launches Scholarship Fund for Secondary School Students in Kano State', meta: 'CSR Report · [ Date — TBD ]' },
    { featured: false, category: 'Business', title: 'Asia Pharmacy Expands into 12 New States, Becoming Nigeria\'s Largest Independent Pharmaceutical Distributor', meta: 'Business Update · [ Date — TBD ]' },
  ];

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header__watermark" aria-hidden="true">NEWS</div>
        <div className="inner">
          
          <h1 className="display-title">
            Latest from<br /><em>Asia Group</em>
          </h1>
          <p className="page-header__desc">
            Stay updated with the latest announcements, market insights, expansion news, and community impact stories from Asia Group of Companies.
          </p>
        </div>
      </section>

      {/* NEWS GRID */}
      <section className="section bg-dark-2">
        <div className="inner">
          <div className="grid-news-page">
            {articles.map((article, i) => (
              <Link key={i} href="#" className={`news-card fade-up delay-${(i % 3) + 1}`}>
                <div className={`news-card__image ${article.featured ? 'news-card__image--featured' : 'news-card__image--thumb'}`}>
                  <p className="placeholder-text">Media Placeholder</p>
                </div>
                <div className="news-card__body">
                  <div className="news-card__category">{article.category}</div>
                  <div className={`news-card__title ${article.featured ? 'news-card__title--lg' : 'news-card__title--sm'}`}>{article.title}</div>
                  <div className="news-card__meta">{article.meta}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section bg-dark">
        <div className="inner">
          
          <div className="news-categories mt-4">
            {['All News', 'Press Releases', 'CSR & Philanthropy', 'Business Updates', 'CEO Interviews', 'Expansion News'].map((cat, i) => (
              <button key={i} className={`category-btn ${i === 0 ? 'active' : ''}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
