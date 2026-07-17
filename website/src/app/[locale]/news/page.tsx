import { getCollection } from '@/lib/cms';
import { NewsClient } from './news-client';
import { FadeUpObserver } from '@/components/ui/fade-up-observer';

export default async function NewsPage() {
  // Fetch data from CMS
  const newsDocs = getCollection('news');
  const newsData = newsDocs.map(doc => ({
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

  return (
    <div>
      <FadeUpObserver />
      
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header__watermark" aria-hidden="true">MEDIA</div>
        <div className="inner fade-up">
          <div className="breadcrumb">
            <a href="/">Asia Group</a>
            <span style={{ margin: '0 10px' }}>/</span>
            <span style={{ color: 'var(--text-main)' }}>News &amp; Media</span>
          </div>
          <div className="label label--green mb-4 mt-6">Latest News</div>
          <h1 className="display-title" style={{ fontSize: 'clamp(48px, 6vw, 88px)' }}>
            News &amp; <em>Media</em>
          </h1>
        </div>
      </section>

      <NewsClient initialNews={newsData} />
    </div>
  );
}
