import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, ArrowRight } from 'lucide-react';

export default async function CareersPage() {
  const t = await getTranslations('Navigation');

  return (
    <div className="container px-4 md:px-8 py-24 min-h-[70vh]">
      <div className="max-w-4xl mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          {t('careers')}
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Join 8,000+ professionals dedicated to building the supply chain of Africa. We offer dynamic opportunities across logistics, FMCG, pharmaceuticals, automotive, and corporate services.
        </p>
      </div>

      <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 mb-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Asia Group?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          We believe in nurturing local talent and empowering our workforce with global best practices. Our scale offers unparalleled career growth and cross-border experience.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
           <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
             <h3 className="text-lg font-bold mb-2 text-primary">Continental Scale</h3>
             <p className="text-sm text-muted-foreground">Work on projects that impact 350M+ people across 30+ countries.</p>
           </div>
           <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
             <h3 className="text-lg font-bold mb-2 text-primary">Integrity First</h3>
             <p className="text-sm text-muted-foreground">Join a culture that prides itself on zero compliance violations.</p>
           </div>
           <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
             <h3 className="text-lg font-bold mb-2 text-primary">Continuous Growth</h3>
             <p className="text-sm text-muted-foreground">Access training programs and mobility across our 5+ business divisions.</p>
           </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
        {/* Placeholder for Sveltia CMS dynamic listings */}
        <div className="space-y-4">
          {[
            { title: "Senior Logistics Coordinator", div: "FMCG Distribution", loc: "Kano, Nigeria" },
            { title: "Pharmaceutical Compliance Manager", div: "Pharmaceuticals", loc: "Lagos, Nigeria" },
            { title: "Regional Sales Director", div: "Automobiles", loc: "Niamey, Niger" },
            { title: "Supply Chain Analyst", div: "Corporate HQ", loc: "Kano, Nigeria" },
          ].map((job, i) => (
            <div key={i} className="group bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:shadow-sm">
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                   <span className="flex items-center"><Briefcase className="mr-1 h-4 w-4" /> {job.div}</span>
                   <span className="flex items-center"><MapPin className="mr-1 h-4 w-4" /> {job.loc}</span>
                </div>
              </div>
              <Button variant="ghost" className="group-hover:bg-primary/10 group-hover:text-primary">
                View Details <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-12 p-8 border-t border-border">
         <p className="text-muted-foreground mb-4">Don't see a perfect fit? Send your CV to our talent pool.</p>
         <Button variant="outline" asChild>
           <a href="mailto:careers@asiagroup.ng">careers@asiagroup.ng</a>
         </Button>
      </div>

    </div>
  );
}
