import { getTranslations } from 'next-intl/server';
import { Globe, ShieldCheck, Truck, BarChart3, Image as ImageIcon } from 'lucide-react';

export default async function AboutUsPage() {
  const t = await getTranslations('Navigation');

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      
      {/* 1. OUR FOUNDATION */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Visual Column */}
            <div className="relative">
               <div className="aspect-[4/5] bg-slate-800 border-subtle flex flex-col items-center justify-center p-8 text-center">
                 <ImageIcon className="h-16 w-16 text-white/10 mb-4" />
                 <p className="text-xs uppercase tracking-widest text-white/20">MEDIA PLACEHOLDER<br/>CEO Portrait / Flagship Warehouse</p>
               </div>
               
               <div className="absolute top-8 -left-6 bg-primary text-primary-foreground px-6 py-4 text-xs tracking-widest uppercase font-bold shadow-2xl">
                 Est. 1988
               </div>
               
               <div className="absolute -bottom-8 -right-8 w-48 aspect-square bg-slate-800 border-subtle flex flex-col items-center justify-center p-6 shadow-2xl">
                 <div className="text-5xl font-bold text-primary mb-2">#1</div>
                 <div className="text-xs tracking-widest uppercase text-white/60 text-center font-semibold">Detergent Distributor<br/>in Africa</div>
               </div>
            </div>
            
            {/* Content Column */}
            <div>
              <div className="inline-flex items-center gap-4 mb-6">
                 <div className="h-px w-8 bg-primary"></div>
                 <span className="text-xs uppercase tracking-widest font-bold text-primary">Our Foundation</span>
              </div>
              <h2 className="text-display-section text-white mb-8">Building the <em className="text-primary not-italic font-bold">Backbone</em> of Trade</h2>
              
              <blockquote className="text-2xl md:text-3xl font-heading font-medium italic text-white/80 border-l-4 border-primary pl-6 my-10 leading-snug">
                "We didn't just build a company—we built a legacy. Starting with polythene bags and a vision, we transformed a local trader's dream into Africa's most trusted distribution powerhouse."
              </blockquote>
              
              <div className="grid grid-cols-2 gap-[1px] bg-white/10 border-subtle mt-12">
                {[
                  { title: 'Gateway to the Sahel', desc: 'Connecting 350M+ people.', icon: <Globe className="h-5 w-5 text-primary mb-3" /> },
                  { title: 'Legacy of Trust', desc: '38 years of integrity.', icon: <ShieldCheck className="h-5 w-5 text-primary mb-3" /> },
                  { title: 'Total Logistics', desc: '99.7% on-time delivery.', icon: <Truck className="h-5 w-5 text-primary mb-3" /> },
                  { title: 'Economic Engine', desc: 'Driving local growth.', icon: <BarChart3 className="h-5 w-5 text-primary mb-3" /> },
                ].map((pillar, i) => (
                  <div key={i} className="p-6 bg-slate-900 hover:bg-slate-800 transition-colors">
                    {pillar.icon}
                    <h4 className="text-sm tracking-widest uppercase font-bold text-white mb-2">{pillar.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. THE TEAM BEHIND THE EMPIRE (Leadership) */}
      <section className="section-padding bg-slate-950">
        <div className="container">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
             <h2 className="text-display-section text-white max-w-2xl">The Team Behind the Empire</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5 border-subtle">
             {[
               { name: 'Alhaji (Dr.) Sani Isah Abubakar', title: 'Founder & Chairman', isFounder: true },
               { name: 'Executive Name', title: 'Chief Executive Officer', isFounder: false },
               { name: 'Executive Name', title: 'Chief Operating Officer', isFounder: false },
               { name: 'Executive Name', title: 'Chief Financial Officer', isFounder: false },
             ].map((leader, i) => (
               <div key={i} className="bg-slate-900 group relative block overflow-hidden cursor-pointer">
                 <div className="aspect-[3/4] bg-slate-950 flex flex-col items-center justify-center relative border-b border-white/5">
                    <ImageIcon className="h-10 w-10 text-white/10 mb-4" />
                    <p className="text-[10px] tracking-widest uppercase text-white/20 text-center px-4">Portrait<br/>Placeholder</p>
                    
                    {leader.isFounder && (
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold z-10">
                        Founder
                      </div>
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-20">
                      <p className="text-xs text-white/90 leading-relaxed">Brief biography or key achievements hover text placeholder.</p>
                    </div>
                 </div>
                 <div className="p-6 relative z-30 bg-slate-900 group-hover:bg-slate-800 transition-colors">
                   <h3 className="text-base uppercase tracking-widest font-bold text-white mb-1">{leader.name}</h3>
                   <p className="text-xs text-primary">{leader.title}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>
      
      {/* 3. 36 YEARS OF EXCELLENCE (History Timeline) */}
      <section className="section-padding bg-slate-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-display-section text-slate-900 mb-6">36 Years of Excellence</h2>
            <p className="text-body-standard text-slate-500">A journey of trust, resilience, and unyielding ambition.</p>
          </div>
          
          <div className="relative pl-8 md:pl-20">
             {/* Vertical Line */}
             <div className="absolute top-0 bottom-0 left-0 md:left-4 w-[2px] bg-gradient-to-b from-primary to-slate-300"></div>
             
             {[
               { year: '1988', title: 'The Genesis', desc: 'Founded in Kano, Nigeria, beginning with a focus on trading basic commodities and polythene products in Abubakar Rimi Market.' },
               { year: '2000', title: 'Strategic Partnerships', desc: 'Expanded into FMCG wholesale, establishing the first of many long-lasting relationships with global manufacturing giants.' },
               { year: '2015', title: 'Regional Expansion', desc: 'Crossed borders to establish a dominant logistics and distribution network serving the broader Sahel region.' },
               { year: 'Present', title: 'Africa\'s Leading Conglomerate', desc: 'Operating across 30+ countries with a diversified portfolio spanning automotive, pharmaceuticals, cosmetics, and telecom.' },
             ].map((era, i) => (
               <div key={i} className="relative mb-16 last:mb-0 grid md:grid-cols-[120px_1fr] gap-4 md:gap-12 items-start">
                  <div className="absolute -left-[39px] md:-left-[23px] top-2 w-4 h-4 bg-primary border-[3px] border-slate-50 rounded-full"></div>
                  <div className="text-3xl md:text-4xl font-bold text-primary leading-none mt-1">{era.year}</div>
                  <div>
                    <h3 className="text-lg uppercase tracking-widest font-bold text-slate-900 mb-3">{era.title}</h3>
                    <p className="text-body-standard text-slate-600">{era.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
}
