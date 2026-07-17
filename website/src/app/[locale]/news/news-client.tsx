'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: string;
  hero_image: string;
  excerpt: string;
  featured: boolean;
  author: string;
  read_time: number;
}

export function NewsClient({ initialNews }: { initialNews: NewsItem[] }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filters = ['All', 'Corporate', 'Partnerships', 'Philanthropy', 'Expansion', 'Awards', 'Milestone', 'Operations', 'Leadership', 'Strategy'];

  // Only show articles that match the filter (or all if 'All' is selected)
  // Exclude 'Press Releases' because they have their own dedicated section at the bottom
  const filteredNews = initialNews.filter(n => 
    n.category !== 'Press Releases' && (activeFilter === 'All' || n.category === activeFilter)
  );

  // Featured is the most recent article that is explicitly marked as featured
  // If none is marked, fallback to the most recent article overall
  let featuredArticle = filteredNews.find(n => n.featured);
  if (!featuredArticle && filteredNews.length > 0) {
    featuredArticle = filteredNews[0];
  }

  // The rest of the articles go into the grid
  const gridArticles = filteredNews.filter(n => n !== featuredArticle);

  const CARDS_PER_PAGE = 12;
  const paginatedGridArticles = gridArticles.slice(0, currentPage * CARDS_PER_PAGE);
  const hasMore = paginatedGridArticles.length < gridArticles.length;

  // Press releases section specifically picks up "Press Releases" category regardless of the top filter
  const pressReleases = initialNews.filter(n => n.category === 'Press Releases');

  return (
    <div>
      <div className="filter-bar fade-up delay-2">
        <div className="filter-bar-inner">
          {filters.map(f => (
            <button 
              key={f} 
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => {
                setActiveFilter(f);
                setCurrentPage(1);
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* FEATURED ARTICLE */}
      {featuredArticle && (
        <section className="featured-section">
          <div key={featuredArticle.slug} className="featured-inner fade-up">
            <Link href={`/news/${featuredArticle.slug}`} className="featured-article">
              <div className="featured-img" style={{ backgroundImage: `url(${featuredArticle.hero_image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="featured-label">Featured</div>
              </div>
              <div className="featured-body">
                <div className="article-category">{featuredArticle.category}</div>
                <h2 className="article-title">{featuredArticle.title}</h2>
                <p className="article-excerpt">{featuredArticle.excerpt}</p>
                <div className="article-meta">
                  <span>{featuredArticle.category}</span>
                  <span>·</span>
                  <span>{new Date(featuredArticle.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>·</span>
                  <span>{featuredArticle.read_time} min read</span>
                </div>
                <span className="read-more">Read Full Story →</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ARTICLES GRID */}
      {gridArticles.length > 0 && (
        <section className="articles-section">
          <div className="articles-inner">
            <div key={activeFilter} className="articles-grid">
              {paginatedGridArticles.map((article, i) => (
                <Link key={article.slug} href={`/news/${article.slug}`} className={`article-card fade-up delay-${(i % 3) + 1}`}>
                  <div className="article-img" style={{ backgroundImage: `url(${article.hero_image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  </div>
                  <div className="article-body">
                    <div className="article-category">{article.category}</div>
                    <div className="article-title">{article.title}</div>
                    <p className="article-excerpt">{article.excerpt}</p>
                    <div className="article-meta" style={{ marginTop: 'auto' }}>
                      <span style={{ color: 'var(--green)' }}>{article.category}</span>
                      <span style={{ margin: '0 8px' }}>·</span>
                      <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {hasMore && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }} className="fade-up">
                <button 
                  className="btn btn--secondary"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setCurrentPage(prev => prev + 1)}
                >
                  Load More News
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* PRESS RELEASES (Always visible at the bottom) */}
      <section className="press-section">
        <div className="press-inner fade-up">
          <div className="label label--green mb-4">Official Announcements</div>
          <h2 className="display-title" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            Press Releases
          </h2>

          <div className="press-list mt-8">
            {pressReleases.map((pr, i) => (
              <Link key={pr.slug} href={`/news/${pr.slug}`} className="press-item">
                <div className="press-date">{new Date(pr.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                <div style={{ flex: 1 }}>
                  <span className="press-category">{pr.category}</span>
                  <div className="press-title">{pr.title}</div>
                  <p className="press-excerpt">{pr.excerpt}</p>
                </div>
                <div className="press-arrow">→</div>
              </Link>
            ))}
            {pressReleases.length === 0 && (
              <div className="press-item" style={{ pointerEvents: 'none' }}>
                <div style={{ flex: 1 }}>
                  <p className="press-excerpt">No press releases currently available.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* MEDIA KIT */}
      <section className="mediakit-section">
        <div className="mediakit-inner">
          <div className="mediakit-content fade-up">
            <div className="label label--white mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Press Resources
            </div>
            <h2 className="display-title" style={{ color: '#FFFFFF' }}>Download Our<br/>Media Kit</h2>
            <p className="section-body mt-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Official logos, photography, executive portraits, company fact sheets, and brand guidelines — available for accredited media and verified journalists.
            </p>
            <div className="mediakit-assets mt-8">
              <a href="#" className="asset-item">
                <div className="asset-icon">🖼️</div>
                <div>
                  <div className="asset-name">Logo Pack</div>
                  <div className="asset-desc">SVG, PNG, dark &amp; light variants (Placeholder)</div>
                </div>
                <span className="asset-dl">Download</span>
              </a>
              <a href="#" className="asset-item">
                <div className="asset-icon">📄</div>
                <div>
                  <div className="asset-name">Company Fact Sheet</div>
                  <div className="asset-desc">Key statistics, milestones, subsidiary overview (Placeholder)</div>
                </div>
                <span className="asset-dl">Download</span>
              </a>
              <a href="#" className="asset-item">
                <div className="asset-icon">📸</div>
                <div>
                  <div className="asset-name">Executive Portrait Photography</div>
                  <div className="asset-desc">High-res portraits for all executives (Placeholder)</div>
                </div>
                <span className="asset-dl">Download</span>
              </a>
              <a href="#" className="asset-item">
                <div className="asset-icon">📐</div>
                <div>
                  <div className="asset-name">Brand Guidelines</div>
                  <div className="asset-desc">Colors, typography, usage rules (Placeholder)</div>
                </div>
                <span className="asset-dl">Download</span>
              </a>
            </div>
          </div>
          <div className="mediakit-contact fade-up delay-2">
            <h3 style={{ color: '#fff', fontFamily: 'var(--font-condensed)', fontSize: '16px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>Media Enquiries</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: '1.75', fontWeight: 300 }}>
              For interview requests, photography licensing, press accreditation, or editorial enquiries, please contact the Asia Group Communications team.
            </p>
            <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: '1.75' }}>
              <strong style={{ color: '#fff' }}>[ Communications Contact Name — TBD ]</strong><br/>
              Head of Communications, Asia Group<br/>
              <a href="mailto:media@asiagroup.com.ng" style={{ color: 'var(--gold-light)', textDecoration: 'none' }}>[ media@asiagroup.com.ng — confirm ]</a><br/>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>[ Phone — TBD ]</span>
            </p>
            <a href="/contact" className="btn btn--primary mt-6" style={{ background: '#fff', color: 'var(--green)' }}>Send Media Enquiry →</a>
          </div>
        </div>
      </section>

    </div>
  );
}
