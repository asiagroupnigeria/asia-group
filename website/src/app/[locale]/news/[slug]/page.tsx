import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getEntryBySlug, getCollection } from '@/lib/cms';
import ReactMarkdown from 'react-markdown';
import { FadeUpObserver } from '@/components/ui/fade-up-observer';

interface Props {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  
  // Fetch specific article by slug
  const entry = getEntryBySlug('news', slug);
  
  if (!entry) {
    notFound();
  }

  const article = {
    title: entry.data.title,
    date: entry.data.date,
    category: entry.data.category,
    hero_image: entry.data.hero_image,
    excerpt: entry.data.excerpt,
    author: entry.data.author || 'Asia Group Communications',
    read_time: entry.data.read_time || 3
  };

  // Fetch related articles (same category, exclude current)
  const allNews = getCollection('news');
  let related = allNews.filter(doc => doc.slug !== slug && doc.data.category === article.category);
  
  // Fallback to any recent news if no exact category match
  if (related.length === 0) {
    related = allNews.filter(doc => doc.slug !== slug);
  }

  const relatedMapped = related.slice(0, 3).map(doc => ({
    slug: doc.slug,
    title: doc.data.title,
    category: doc.data.category,
    hero_image: doc.data.hero_image
  }));

  return (
    <div>
      {/* HERO */}
      <section className="article-hero">
        <div 
          className="article-hero-img" 
          style={{ 
            backgroundImage: `url(${article.hero_image})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        />
        <div className="article-hero-overlay"></div>
        <div className="article-hero-content">
          <div className="breadcrumb">
            <Link href="/">Asia Group</Link>
            <span style={{ margin: '0 10px' }}>/</span>
            <Link href="/news">News</Link>
            <span style={{ margin: '0 10px' }}>/</span>
            <span style={{ color: 'var(--white)' }}>{article.category}</span>
          </div>
          
          <div className="article-category mt-6">{article.category}</div>
          <h1 className="article-title mb-6">{article.title}</h1>
          
          <div className="article-meta mt-6 flex-wrap">
            <div className="meta-author">
              <div className="meta-avatar">AG</div>
              <div className="meta-author-info">
                <p>{article.author}</p>
              </div>
            </div>
            <div className="meta-divider"></div>
            <span className="meta-date">
              {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <div className="meta-divider"></div>
            <span className="meta-read-time">{article.read_time} min read</span>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="article-body-wrap">
        <div className="article-body-inner">
          <div className="article-body">
            <ReactMarkdown>{entry.content}</ReactMarkdown>
          </div>

          {/* TAGS + SHARE */}
          <div className="article-footer">
            <div className="article-tags">
              <Link href="/news" className="article-tag">{article.category}</Link>
              <Link href="/news" className="article-tag">News</Link>
              <Link href="/news" className="article-tag">Asia Group</Link>
            </div>
            <div className="share-row">
              <span className="share-label">Share:</span>
              <a href="#" className="share-btn" style={{ padding: '8px 12px', fontSize: '16px' }} aria-label="Share on LinkedIn"><i className="ri-linkedin-fill"></i></a>
              <a href="#" className="share-btn" style={{ padding: '8px 12px', fontSize: '16px' }} aria-label="Share on Twitter/X"><i className="ri-twitter-x-line"></i></a>
              <a href="#" className="share-btn" style={{ padding: '8px 12px', fontSize: '16px' }} aria-label="Share on WhatsApp"><i className="ri-whatsapp-line"></i></a>
              <a href="#" className="share-btn" style={{ padding: '8px 12px', fontSize: '16px' }} aria-label="Copy Link"><i className="ri-link"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      {relatedMapped.length > 0 && (
        <section className="related-section">
          <div className="related-inner">
            <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--green-light)', marginBottom: '16px' }}>
              More from Asia Group
            </div>
            <h2 className="display-title" style={{ fontSize: 'clamp(28px, 3vw, 44px)', color: 'var(--text-main)' }}>
              Related Stories
            </h2>
            <div className="related-grid">
              {relatedMapped.map((rel, i) => (
                <Link key={i} href={`/news/${rel.slug}`} className="related-card fade-up">
                  <div className="related-img" style={{ backgroundImage: `url(${rel.hero_image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  </div>
                  <div className="related-body">
                    <div className="related-cat">{rel.category}</div>
                    <div className="related-title">{rel.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FadeUpObserver />
    </div>
  );
}
