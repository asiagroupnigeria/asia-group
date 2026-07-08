import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default async function NewsPage() {
  const t = await getTranslations('Navigation');

  return (
    <div className="container px-4 md:px-8 py-24 min-h-[70vh]">
      <div className="max-w-4xl mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          {t('news')}
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Stay updated with the latest announcements, market insights, and regional expansions from Asia Group.
        </p>
      </div>

      {/* Featured Article */}
      <div className="mb-16">
         <h2 className="text-2xl font-bold mb-6">Featured Story</h2>
         <div className="group relative bg-card rounded-3xl border border-border overflow-hidden grid md:grid-cols-2 shadow-sm hover:shadow-md transition-all">
            <div className="bg-muted aspect-[4/3] md:aspect-auto flex items-center justify-center">
              <span className="text-muted-foreground">Featured Image Placeholder</span>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary mb-4 w-fit">
                Press Release
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                Asia Group Expands FMCG Distribution Network into Chad and Niger
              </h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                Strengthening our commitment to the Sahel region, we are proud to announce the opening of three new strategic distribution hubs...
              </p>
              <Button className="w-fit" variant="outline">Read Full Story</Button>
            </div>
         </div>
      </div>

      {/* Grid of Articles */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="group hover:border-primary/50 transition-colors cursor-pointer flex flex-col">
            <div className="aspect-video bg-muted border-b border-border flex items-center justify-center">
               <span className="text-sm text-muted-foreground">Thumbnail</span>
            </div>
            <CardHeader>
              <div className="text-xs text-muted-foreground mb-2">October {i + 10}, 2026 • Market Insight</div>
              <CardTitle className="group-hover:text-primary transition-colors">Strategic Partnership with Global Brands Renewed</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground text-sm line-clamp-2">
                A detailed look into how our continuous commitment to zero compliance violations has secured long-term...
              </p>
            </CardContent>
            <CardFooter>
              <span className="text-primary text-sm font-medium">Read Article →</span>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Button variant="outline" size="lg">Load More Articles</Button>
      </div>
    </div>
  );
}
