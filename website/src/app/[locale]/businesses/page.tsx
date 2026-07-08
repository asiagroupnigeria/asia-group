import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { ArrowRight, Package, Truck, Activity, Droplet, MonitorSmartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default async function BusinessesHubPage() {
  const t = await getTranslations('Navigation');

  return (
    <div className="container px-4 md:px-8 py-24 min-h-[70vh]">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          {t('businesses')}
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          From pharmaceuticals to automotive, our business divisions are the arteries of African commerce. With scalable infrastructure, we are continually expanding to meet the continent's growing demands.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* FMCG Division */}
        <Link href="/businesses/fmcg" className="group block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="aspect-[4/3] bg-muted relative overflow-hidden flex items-center justify-center">
            {/* PLACEHOLDER: FMCG Warehouse Image */}
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
            <Package className="h-16 w-16 text-muted-foreground opacity-50" />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">FMCG & Distribution</h3>
            <p className="text-muted-foreground mb-6">Distributing over 100,000 tonnes of essentials annually across the Sahel.</p>
            <span className="text-primary font-medium inline-flex items-center">
              Explore Division <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        {/* Pharmaceuticals Division */}
        <Link href="/businesses/pharmaceuticals" className="group block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="aspect-[4/3] bg-muted relative overflow-hidden flex items-center justify-center">
            {/* PLACEHOLDER: Pharmaceuticals Image */}
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
            <Activity className="h-16 w-16 text-muted-foreground opacity-50" />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Pharmaceuticals</h3>
            <p className="text-muted-foreground mb-6">Delivering certified excellence and combating counterfeit drugs.</p>
            <span className="text-primary font-medium inline-flex items-center">
              Explore Division <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        {/* Automotive Division */}
        <Link href="/businesses/automobiles" className="group block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="aspect-[4/3] bg-muted relative overflow-hidden flex items-center justify-center">
            {/* PLACEHOLDER: Automotive Image */}
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
            <Truck className="h-16 w-16 text-muted-foreground opacity-50" />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Automobiles</h3>
            <p className="text-muted-foreground mb-6">Engineering the future of mobility with partners like Geely and Mikano.</p>
            <span className="text-primary font-medium inline-flex items-center">
              Explore Division <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        {/* Cosmetics Division */}
        <Link href="/businesses/cosmetics" className="group block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="aspect-[4/3] bg-muted relative overflow-hidden flex items-center justify-center">
            {/* PLACEHOLDER: Cosmetics Image */}
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
            <Droplet className="h-16 w-16 text-muted-foreground opacity-50" />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Cosmetics</h3>
            <p className="text-muted-foreground mb-6">Premium beauty and personal care products for the African market.</p>
            <span className="text-primary font-medium inline-flex items-center">
              Explore Division <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
        
        {/* Telecom Division */}
        <Link href="/businesses/telecom" className="group block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="aspect-[4/3] bg-muted relative overflow-hidden flex items-center justify-center">
            {/* PLACEHOLDER: Telecom Image */}
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
            <MonitorSmartphone className="h-16 w-16 text-muted-foreground opacity-50" />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Phones & Accessories</h3>
            <p className="text-muted-foreground mb-6">Connecting communities with reliable technology infrastructure.</p>
            <span className="text-primary font-medium inline-flex items-center">
              Explore Division <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

      </div>

      {/* Expansion Infrastructure Notice */}
      <div className="mt-24 p-8 md:p-12 bg-primary/5 rounded-3xl border border-primary/10 text-center">
         <h3 className="text-2xl font-bold mb-4">Poised for Expansion</h3>
         <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
           Our infrastructure is currently supporting 8 more emerging sectors. As Asia Group grows, our digital architecture scales seamlessly.
         </p>
         <Button asChild>
            <Link href="/contact">Partner on New Ventures</Link>
         </Button>
      </div>

    </div>
  );
}
