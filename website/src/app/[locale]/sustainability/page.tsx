import { getTranslations } from 'next-intl/server';
import { Leaf, HandHeart, ShieldCheck, Activity, Globe } from 'lucide-react';

export default async function SustainabilityPage() {
  const t = await getTranslations('Navigation');

  return (
    <div className="container px-4 md:px-8 py-24 min-h-[70vh]">
      <div className="max-w-3xl mb-16 text-center mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          {t('sustainability')}
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Our 5-Pillar Framework ensures that as we build the supply chain of Africa, we also build resilient communities and a sustainable future.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {/* Pillar 1 */}
        <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
            <Globe className="h-7 w-7" />
          </div>
          <h3 className="text-2xl font-bold mb-3">1. Economic Resilience</h3>
          <p className="text-muted-foreground mb-6">Strengthening supply chain stability across 30+ countries, ensuring essential goods reach markets despite global disruptions.</p>
          {/* PLACEHOLDER: Animated Metric */}
          <div className="pt-6 border-t border-border mt-auto">
             <span className="block text-3xl font-extrabold text-primary mb-1">350M+</span>
             <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">People Connected</span>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
            <Activity className="h-7 w-7" />
          </div>
          <h3 className="text-2xl font-bold mb-3">2. Operational Excellence</h3>
          <p className="text-muted-foreground mb-6">Maximizing efficiency in logistics to reduce waste and optimize delivery timelines.</p>
          <div className="pt-6 border-t border-border mt-auto">
             <span className="block text-3xl font-extrabold text-primary mb-1">99.7%</span>
             <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">On-time Performance</span>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
            <HandHeart className="h-7 w-7" />
          </div>
          <h3 className="text-2xl font-bold mb-3">3. Social Empowerment</h3>
          <p className="text-muted-foreground mb-6">Investing directly into the communities we serve through food security programs and youth training initiatives.</p>
          <div className="pt-6 border-t border-border mt-auto">
             <span className="block text-3xl font-extrabold text-primary mb-1">4,000</span>
             <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Daily Meals Distributed</span>
          </div>
        </div>

        {/* Pillar 4 */}
        <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
            <Leaf className="h-7 w-7" />
          </div>
          <h3 className="text-2xl font-bold mb-3">4. Environmental Stewardship</h3>
          <p className="text-muted-foreground mb-6">Implementing fleet green initiatives and minimizing packaging waste across our FMCG division.</p>
          <div className="pt-6 border-t border-border mt-auto">
             <span className="block text-3xl font-extrabold text-primary mb-1">15%</span>
             <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Emissions Reduction Target</span>
          </div>
        </div>

        {/* Pillar 5 */}
        <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h3 className="text-2xl font-bold mb-3">5. Governance & Integrity</h3>
          <p className="text-muted-foreground mb-6">Maintaining an unblemished regulatory record through transparent practices and robust compliance frameworks.</p>
          <div className="pt-6 border-t border-border mt-auto">
             <span className="block text-3xl font-extrabold text-primary mb-1">Zero</span>
             <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Compliance Violations</span>
          </div>
        </div>
      </div>
      
      {/* Dynamic Sveltia CMS Section Placeholder */}
      <div className="p-8 md:p-12 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-border">
         <h2 className="text-2xl font-bold mb-8">Impact Reports</h2>
         <p className="text-muted-foreground mb-8">
           Detailed sustainability reports and impact stories will be dynamically loaded here from the Sveltia CMS 'Sustainability Metrics' collection.
         </p>
         <div className="grid md:grid-cols-2 gap-6">
            {/* These would be mapped from CMS data */}
            <div className="h-48 bg-card rounded-xl border border-border flex items-center justify-center">
              <span className="text-muted-foreground font-medium">CMS Data Placeholder</span>
            </div>
            <div className="h-48 bg-card rounded-xl border border-border flex items-center justify-center">
              <span className="text-muted-foreground font-medium">CMS Data Placeholder</span>
            </div>
         </div>
      </div>
    </div>
  );
}
