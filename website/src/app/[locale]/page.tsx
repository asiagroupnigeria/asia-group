import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, ShieldCheck, Truck, Package, Building2, Leaf, Factory, MapPin, Heart, Users, Newspaper } from 'lucide-react';

export default async function Home() {
  const t = await getTranslations('Home');

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/80 z-10" />
        <div className="absolute inset-0 bg-slate-900 bg-cover bg-center" />
        
        <div className="container relative z-20 px-4 md:px-8 flex flex-col items-center text-center mt-16">
          <div className="inline-flex items-center rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-sm font-medium text-primary-foreground mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Established 1988 — Kano, Nigeria
          </div>
          <h1 className="text-display-hero text-white max-w-5xl mb-6">
            Africa's <em className="text-primary not-italic font-bold">Number One</em> <br />
            Wholesale & Distribution Conglomerate
          </h1>
          <p className="text-body-large text-slate-300 max-w-2xl mb-10">
            From a single market stall in Abubakar Rimi Market to commanding over 30 global partnerships across four nations — Asia Group is the backbone of African trade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="text-sm tracking-widest uppercase h-14 px-10" asChild>
              <Link href="/about">Discover Our Story</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-sm tracking-widest uppercase h-14 px-10 bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white" asChild>
              <Link href="/businesses">View Subsidiaries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 1. SCALE OF OPERATIONS (Numbers Grid) */}
      <section className="bg-primary section-padding relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] lg:text-[20rem] font-bold text-white/5 whitespace-nowrap pointer-events-none select-none tracking-tighter">
          SCALE
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-subtle">
            {[
              { num: '36+', label: 'Years of Dominance' },
              { num: '30+', label: 'Global Partners' },
              { num: '4', label: 'Nations Served' },
              { num: '100K', label: 'Tonnes Distributed / Year' }
            ].map((stat, i) => (
              <div key={i} className="p-8 lg:p-12 border-subtle-right border-subtle-bottom lg:border-subtle-bottom-0 relative bg-primary/20 backdrop-blur-sm">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">{stat.num}</div>
                <div className="text-xs tracking-widest uppercase text-white/70 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. OUR COMPANIES (Subsidiaries Grid) */}
      <section className="bg-slate-900 w-full">
        <div className="container py-20">
          <h2 className="text-display-section text-white mb-4">Our Companies</h2>
          <p className="text-body-standard text-slate-400 max-w-2xl">Discover the divisions driving economic resilience across the continent.</p>
        </div>
        {/* Full-width Edge-to-Edge Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[1px] w-full bg-white/5 border-t border-b border-white/5">
          {[
            { name: 'Asia Distribution', sector: 'FMCG Wholesale', icon: <Truck className="h-8 w-8 mb-6" /> },
            { name: 'Asia Plastics', sector: 'Manufacturing', icon: <Package className="h-8 w-8 mb-6" /> },
            { name: 'Asia Logistics', sector: 'Transportation', icon: <Globe className="h-8 w-8 mb-6" /> },
            { name: 'Asia Agro', sector: 'Agriculture', icon: <Leaf className="h-8 w-8 mb-6" /> },
            { name: 'Asia Real Estate', sector: 'Property', icon: <Building2 className="h-8 w-8 mb-6" /> },
          ].map((sub, i) => (
            <Link href={`/businesses/${sub.name.toLowerCase().replace(' ', '-')}`} key={i} className="group block bg-slate-950 aspect-[3/4] p-8 md:p-10 relative overflow-hidden hover:bg-slate-900 transition-colors border-t-2 border-transparent hover:border-primary">
              <span className="text-xs tracking-widest text-slate-600 font-bold mb-8 block">0{i + 1}</span>
              <div className="text-white group-hover:text-primary transition-colors">
                {sub.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold uppercase text-white mb-2">{sub.name}</h3>
              <p className="text-xs text-primary uppercase tracking-widest">{sub.sector}</p>
              
              <div className="absolute bottom-8 right-8 h-12 w-12 border border-white/10 flex items-center justify-center text-white/30 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                <ArrowRight className="h-5 w-5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. GLOBAL PARTNERS */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-display-section text-slate-900 mb-4">Global Partners & Principals</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-10 bg-primary"></div>
              <p className="text-xs tracking-widest uppercase font-bold text-primary">Trusted By The Best</p>
              <div className="h-px w-10 bg-primary"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[1px] bg-slate-200 border-subtle">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-slate-50 aspect-square flex items-center justify-center p-8 hover:bg-white transition-colors">
                {/* PLACEHOLDER FOR REAL IMAGES */}
                <span className="text-xs uppercase tracking-widest text-slate-400 font-bold text-center">Partner Logo<br/>{i+1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GEOGRAPHIC PRESENCE */}
      <section className="section-padding bg-slate-950">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="aspect-square bg-slate-900 border-subtle flex items-center justify-center relative overflow-hidden">
               {/* PLACEHOLDER FOR MAP SVG */}
               <MapPin className="h-16 w-16 text-white/10" />
               <p className="absolute bottom-8 text-xs tracking-widest uppercase text-white/20">Interactive Map Visualization</p>
            </div>
            
            <div>
              <h2 className="text-display-section text-white mb-12">Operations Network</h2>
              <div className="flex flex-col border-subtle">
                {[
                  { country: 'Nigeria', status: 'Headquarters & Active', active: true },
                  { country: 'Niger Republic', status: 'Active Operations', active: true },
                  { country: 'Chad', status: 'Active Operations', active: true },
                  { country: 'Cameroon', status: 'Expanding', active: false },
                ].map((loc, i) => (
                  <div key={i} className="flex items-center p-6 border-subtle-bottom last:border-0 gap-6 bg-slate-900/50 hover:bg-slate-900 transition-colors">
                    <div className={`h-3 w-3 rounded-full flex-shrink-0 ${loc.active ? 'bg-primary' : 'bg-yellow-500'}`} />
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold uppercase tracking-wider text-white">{loc.country}</h4>
                    </div>
                    <div className={`text-xs tracking-widest uppercase font-semibold ${loc.active ? 'text-primary' : 'text-yellow-500'}`}>
                      {loc.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMMUNITY IMPACT (CSR) */}
      <section className="section-padding bg-slate-900">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
               <h2 className="text-display-section text-white mb-6">Beyond Business. <br/><em className="text-primary not-italic font-bold">Community Impact.</em></h2>
               <div className="flex items-baseline gap-4 my-10">
                 <span className="text-6xl md:text-7xl font-bold text-primary">4,000+</span>
                 <span className="text-sm tracking-widest uppercase text-slate-400 font-bold">Daily Meals Provided</span>
               </div>
               
               <div className="flex flex-col gap-4 mt-12">
                 <div className="flex gap-6 p-6 bg-slate-950 border-subtle items-start">
                    <Heart className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="text-sm uppercase tracking-widest text-white font-bold mb-2">Philanthropy</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">Daily feeding programs across Kano State, ensuring thousands have access to nutritious meals.</p>
                    </div>
                 </div>
                 <div className="flex gap-6 p-6 bg-slate-950 border-subtle items-start">
                    <Users className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="text-sm uppercase tracking-widest text-white font-bold mb-2">Job Creation</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">Empowering over 8,000 employees directly and indirectly across our supply chain network.</p>
                    </div>
                 </div>
               </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-square bg-slate-800 border-subtle flex items-center justify-center p-4 text-center text-xs tracking-widest text-white/20 uppercase">CSR Image 1</div>
              <div className="aspect-[1/2] row-span-2 bg-slate-800 border-subtle flex items-center justify-center p-4 text-center text-xs tracking-widest text-white/20 uppercase">CSR Image 2 (Tall)</div>
              <div className="aspect-square bg-slate-800 border-subtle flex items-center justify-center p-4 text-center text-xs tracking-widest text-white/20 uppercase">CSR Image 3</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEWS & MEDIA */}
      <section className="section-padding bg-slate-950">
        <div className="container">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <h2 className="text-display-section text-white">News & Insights</h2>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-slate-950 rounded-none uppercase tracking-widest text-xs h-12 px-8" asChild>
              <Link href="/news">View All News</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5 border-subtle">
            {[1, 2, 3].map((item, i) => (
              <Link href="/news" key={i} className="bg-slate-900 hover:bg-slate-800 transition-colors group">
                <div className="aspect-[16/9] bg-slate-950 flex items-center justify-center overflow-hidden relative">
                   <Newspaper className="h-10 w-10 text-white/10 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8 md:p-10">
                  <div className="text-xs uppercase tracking-widest text-primary font-bold mb-4">Press Release</div>
                  <h3 className="text-xl text-white font-medium leading-snug mb-4 group-hover:text-primary transition-colors">Asia Group Expands Logistics Fleet with 200 New SinoTrucks</h3>
                  <div className="text-xs text-slate-500">October 12, 2023</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
