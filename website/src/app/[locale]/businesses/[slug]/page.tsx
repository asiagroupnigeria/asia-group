import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Mock data to simulate Sveltia CMS output for V1 scaffolding
const businessData = {
  'fmcg': { title: 'FMCG & Distribution', metric: '100,000 tonnes', metricLabel: 'Annual Distribution' },
  'pharmaceuticals': { title: 'Pharmaceuticals', metric: '100%', metricLabel: 'NAFDAC Certified' },
  'automobiles': { title: 'Automobiles', metric: '24/7', metricLabel: 'Support' },
  'cosmetics': { title: 'Cosmetics', metric: '50+', metricLabel: 'Product Lines' },
  'telecom': { title: 'Phones & Accessories', metric: '10M+', metricLabel: 'Devices Sold' },
};

export default async function BusinessMicrosite({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = businessData[slug as keyof typeof businessData];
  
  if (!data) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-900/50 z-10" />
        {/* PLACEHOLDER: specific business unit image e.g. /public/media/images/business/{slug}-hero.webp */}
        <div className="container relative z-20 px-4 md:px-8 pt-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">{data.title}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-8">
            Detailed overview of our {data.title} division. Content managed dynamically via Sveltia CMS.
          </p>
          <div className="inline-flex flex-col bg-card/10 backdrop-blur-md border border-white/10 rounded-xl p-6">
            <span className="text-3xl font-bold text-primary mb-1">{data.metric}</span>
            <span className="text-sm text-slate-300 uppercase tracking-wider">{data.metricLabel}</span>
          </div>
        </div>
      </section>

      {/* Overview & Grid */}
      <section className="py-24 container px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Division Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              This section is populated directly from the Markdown body field in the Sveltia CMS 'Businesses' collection.
              It details the strategic importance of the division, the regional reach, and the operational capacity.
            </p>
          </div>
          <div className="bg-muted rounded-2xl flex items-center justify-center p-8 border border-border">
            <span className="text-muted-foreground font-medium">Supply Chain Flowchart Placeholder</span>
          </div>
        </div>

        {/* Categories Placeholder */}
        <div className="mb-24">
           <h2 className="text-3xl font-bold mb-8">Product Categories</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {[1,2,3,4].map(i => (
               <div key={i} className="aspect-square bg-card rounded-2xl border border-border flex items-center justify-center hover:border-primary transition-colors cursor-pointer">
                 <span className="text-muted-foreground">Category {i}</span>
               </div>
             ))}
           </div>
        </div>
        
        {/* CTA */}
        <div className="bg-primary/5 rounded-3xl p-12 border border-primary/10 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Partner with {data.title}</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Join our distribution network or become a supplier. We are constantly expanding our portfolio to serve Africa better.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
