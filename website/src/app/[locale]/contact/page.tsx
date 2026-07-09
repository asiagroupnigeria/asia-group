'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('Navigation');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! Your inquiry has been received.");
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <section className="section-padding bg-slate-900">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Information */}
            <div>
              <div className="inline-flex items-center gap-4 mb-6">
                 <div className="h-px w-8 bg-primary"></div>
                 <span className="text-xs uppercase tracking-widest font-bold text-primary">Get In Touch</span>
              </div>
              <h1 className="text-display-section text-white mb-12">Let's Build the <em className="text-primary not-italic font-bold">Future</em> Together</h1>
              
              <div className="flex flex-col border-t border-white/10">
                 {[
                   { icon: <MapPin className="h-5 w-5 text-primary mt-1" />, label: 'Headquarters', value: 'Asia Group of Companies Ltd.\nKano, Nigeria\nWest Africa' },
                   { icon: <Mail className="h-5 w-5 text-primary mt-1" />, label: 'Email Us', value: 'contact@asiagroup.ng\ninvestors@asiagroup.ng' },
                   { icon: <Phone className="h-5 w-5 text-primary mt-1" />, label: 'Call Us', value: '+234 (0) 800 000 0000\n+234 (0) 900 000 0000' },
                   { icon: <Clock className="h-5 w-5 text-primary mt-1" />, label: 'Hours', value: 'Monday - Saturday: 8:00 AM - 6:00 PM\nSunday: Closed' },
                 ].map((info, i) => (
                   <div key={i} className="flex gap-6 py-8 border-b border-white/10">
                      {info.icon}
                      <div>
                        <h4 className="text-xs tracking-widest uppercase font-bold text-slate-500 mb-2">{info.label}</h4>
                        <p className="text-body-standard text-white whitespace-pre-line">{info.value}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-slate-950 p-8 md:p-12 border-subtle">
               <h3 className="text-2xl font-heading text-white mb-8">Send an Inquiry</h3>
               
               <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                 <div className="grid md:grid-cols-2 gap-6">
                   <div className="flex flex-col gap-2">
                     <label htmlFor="name" className="text-[10px] tracking-widest uppercase font-bold text-slate-500">Full Name *</label>
                     <input id="name" required className="bg-slate-900 border border-white/10 text-white p-4 font-light focus:outline-none focus:border-primary transition-colors w-full" placeholder="John Doe" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label htmlFor="email" className="text-[10px] tracking-widest uppercase font-bold text-slate-500">Email Address *</label>
                     <input id="email" type="email" required className="bg-slate-900 border border-white/10 text-white p-4 font-light focus:outline-none focus:border-primary transition-colors w-full" placeholder="john@example.com" />
                   </div>
                 </div>
                 
                 <div className="grid md:grid-cols-2 gap-6">
                   <div className="flex flex-col gap-2">
                     <label htmlFor="phone" className="text-[10px] tracking-widest uppercase font-bold text-slate-500">Phone Number *</label>
                     <input id="phone" type="tel" required className="bg-slate-900 border border-white/10 text-white p-4 font-light focus:outline-none focus:border-primary transition-colors w-full" placeholder="+234 800 000 0000" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label htmlFor="organization" className="text-[10px] tracking-widest uppercase font-bold text-slate-500">Organization</label>
                     <input id="organization" className="bg-slate-900 border border-white/10 text-white p-4 font-light focus:outline-none focus:border-primary transition-colors w-full" placeholder="Company Name" />
                   </div>
                 </div>
                 
                 <div className="flex flex-col gap-2">
                   <label htmlFor="interest" className="text-[10px] tracking-widest uppercase font-bold text-slate-500">Area of Interest *</label>
                   <select id="interest" required className="bg-slate-900 border border-white/10 text-white p-4 font-light focus:outline-none focus:border-primary transition-colors w-full appearance-none rounded-none">
                      <option value="" disabled selected>Select an area...</option>
                      <option value="financial">Financial Reports / Investor Relations</option>
                      <option value="partnerships">Supplier / Distribution Partnerships</option>
                      <option value="careers">Career Opportunities</option>
                      <option value="general">General Inquiry</option>
                   </select>
                 </div>
                 
                 <div className="flex flex-col gap-2">
                   <label htmlFor="message" className="text-[10px] tracking-widest uppercase font-bold text-slate-500">Message</label>
                   <textarea id="message" className="bg-slate-900 border border-white/10 text-white p-4 font-light focus:outline-none focus:border-primary transition-colors w-full min-h-[160px] resize-y" placeholder="How can we help you?"></textarea>
                 </div>
                 
                 <div className="flex items-center justify-between mt-4">
                   <p className="text-xs text-slate-500 font-light max-w-[200px]">By submitting this form, you agree to our privacy policy.</p>
                   <Button type="submit" disabled={isSubmitting} className="uppercase tracking-widest text-xs h-12 px-8 rounded-none">
                     {isSubmitting ? "Sending..." : "Submit Inquiry"}
                   </Button>
                 </div>
               </form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
