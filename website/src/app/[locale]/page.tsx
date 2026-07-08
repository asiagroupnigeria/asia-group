import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, ShieldCheck, Truck } from 'lucide-react';

export default async function Home() {
  const t = await getTranslations('Home');

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* PLACEHOLDER: 4K Cinematic Video - Kano Warehouse Drone Footage
            Size: 1920x1080, MP4 format
            Duration: 15-20 seconds (looping)
            Location: /public/media/videos/hero-warehouse-drone.mp4
            Fallback: High-res warehouse image with green overlay
            Tone: Professional, scale-communicating, early morning light
        */}
        <div className="absolute inset-0 bg-slate-950/80 z-10" /> {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900 bg-cover bg-center" />
        
        <div className="container relative z-20 px-4 md:px-8 flex flex-col items-center text-center mt-16">
          <div className="inline-flex items-center rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-sm font-medium text-primary-foreground mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Present in 30+ countries across Africa
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-4xl tracking-tight leading-tight mb-6">
            We Build the <span className="text-primary">Supply Chain</span> of Africa
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
            38 years serving 350 million people. Zero compromise on trust, quality, or delivery. From the markets of Kano to the capitals of the Sahel, Asia Group is the backbone of essential commerce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="text-base h-14 px-8" asChild>
              <Link href="/about">Discover Our Impact <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base h-14 px-8 bg-transparent text-white border-white hover:bg-white hover:text-slate-950" asChild>
              <Link href="/contact#investors">Investor Relations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 3 NARRATIVE PILLARS */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Core Pillars</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The foundation that allows us to move 100,000 tonnes of essentials annually.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gateway to the Sahel</h3>
              <p className="text-muted-foreground mb-6">From Lagos to Niamey: The trade artery connecting 350M+ people across West, Central, and East Africa.</p>
              <Link href="/businesses" className="text-primary font-medium inline-flex items-center hover:underline">
                Explore Our Network <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Legacy of Trust</h3>
              <p className="text-muted-foreground mb-6">38 years of unwavering integrity with Nestlé, Dangote, BUA, Geely, and 30+ global partners.</p>
              <Link href="/about#leadership" className="text-primary font-medium inline-flex items-center hover:underline">
                Meet Our Leadership <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Total Logistics Solution</h3>
              <p className="text-muted-foreground mb-6">Port to doorstep: 24-hour delivery with 99.7% on-time performance across our dedicated fleet.</p>
              <Link href="/contact" className="text-primary font-medium inline-flex items-center hover:underline">
                Partner With Us <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE METRICS DASHBOARD */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 md:divide-x divide-primary-foreground/20">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold mb-2">1M+</span>
              <span className="text-primary-foreground/80 font-medium">Tonnes Distributed Annually</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold mb-2">30+</span>
              <span className="text-primary-foreground/80 font-medium">Global Partners</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold mb-2">350M+</span>
              <span className="text-primary-foreground/80 font-medium">People Served</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold mb-2">8,000+</span>
              <span className="text-primary-foreground/80 font-medium">Employees</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* OUR BUSINESSES GRID - To be expanded further */}
      <section className="py-24">
        <div className="container px-4 md:px-8 text-center">
           <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">Our Businesses</h2>
           <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">Discover the divisions driving economic resilience across the continent.</p>
           {/* Add cards here using standard UI practices later in implementation */}
           <Button size="lg" variant="outline" asChild>
              <Link href="/businesses">View All Divisions</Link>
           </Button>
        </div>
      </section>

    </div>
  );
}
