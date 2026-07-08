import { getTranslations } from 'next-intl/server';

export default async function AboutUsPage() {
  const t = await getTranslations('Navigation');

  return (
    <div className="container px-4 md:px-8 py-24 min-h-[60vh]">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
        {t('about')}
      </h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            To build the most reliable and efficient supply chain infrastructure across Africa, ensuring the unbroken delivery of essential goods from global partners to local markets.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            For 38 years, we have maintained a record of zero compromise on trust, driven by our commitment to integrity, excellence, and the communities we serve.
          </p>
        </div>

        <div className="bg-card p-8 rounded-2xl border border-border">
          <h3 className="text-xl font-bold mb-4" id="leadership">Leadership</h3>
          {/* PLACEHOLDER: Portrait - Dr. Sani Isah Abubakar
              Size: 500x600, headshot format
              Location: /public/media/images/leadership/ceo-portrait.webp
              Studio lighting, professional business attire, warm expression
          */}
          <div className="aspect-square bg-muted rounded-xl mb-6 relative overflow-hidden flex items-center justify-center">
             <span className="text-muted-foreground font-medium">Portrait Placeholder</span>
          </div>
          <h4 className="text-lg font-bold">Alhaji (Dr.) Sani Isah Abubakar</h4>
          <p className="text-primary font-medium mb-4">Founder & Chairman</p>
          <p className="text-sm text-muted-foreground">
            "Alhaji (Dr.) Sani Isah Abubakar didn't just build a company—he built a legacy. Starting with polythene bags and a vision, he transformed a local trader's dream into Africa's most trusted distribution powerhouse."
          </p>
        </div>
      </div>
      
      {/* Timeline component can be expanded here */}
      <div className="mt-24">
         <h2 className="text-3xl font-bold mb-12 text-center">Our Legacy</h2>
         <div className="w-full max-w-4xl mx-auto border-l-2 border-primary/20 pl-8 space-y-12">
            <div className="relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[41px] top-1"></div>
              <h3 className="text-xl font-bold text-primary mb-2">1988</h3>
              <p className="text-muted-foreground text-lg">Founded in Kano, Nigeria, beginning with a focus on trading basic commodities and polythene products.</p>
            </div>
            <div className="relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[41px] top-1"></div>
              <h3 className="text-xl font-bold text-primary mb-2">2005</h3>
              <p className="text-muted-foreground text-lg">Major expansion into FMCG distribution, forging foundational partnerships with global brands.</p>
            </div>
            <div className="relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[41px] top-1"></div>
              <h3 className="text-xl font-bold text-primary mb-2">Present</h3>
              <p className="text-muted-foreground text-lg">Operating across 30+ countries with a diversified portfolio spanning automotive, pharmaceuticals, cosmetics, and telecom.</p>
            </div>
         </div>
      </div>
    </div>
  );
}
