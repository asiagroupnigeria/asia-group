'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function ContactPage() {
  const t = useTranslations('Navigation');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Placeholder for actual Sveltia CMS collection submission logic
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! Your inquiry has been received.");
    }, 1500);
  };

  return (
    <div className="container px-4 md:px-8 py-24 min-h-[70vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Contact & Investor Relations
        </h1>
        <p className="text-muted-foreground text-lg mb-12">
          Reach out to our teams across West, Central, and East Africa for partnerships, investor inquiries, or general questions.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Send an Inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
                <Input id="name" required placeholder="Dr. Sani Abubakar" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
                <Input id="email" type="email" required placeholder="sani@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number <span className="text-destructive">*</span></Label>
                <Input id="phone" type="tel" required placeholder="+234 800 000 0000" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="organization">Organization</Label>
                <Input id="organization" placeholder="Your Company Name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="interest">Area of Interest <span className="text-destructive">*</span></Label>
                <Select required>
                  <SelectTrigger id="interest">
                    <SelectValue placeholder="Select an area..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="financial">Financial Reports / Investor Relations</SelectItem>
                    <SelectItem value="partnerships">Supplier / Distribution Partnerships</SelectItem>
                    <SelectItem value="careers">Career Opportunities</SelectItem>
                    <SelectItem value="general">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" className="min-h-[100px]" />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Headquarters</h3>
              <p className="text-muted-foreground mb-1">Asia Group of Companies Ltd.</p>
              <p className="text-muted-foreground mb-1">Kano, Nigeria</p>
              <p className="text-muted-foreground mb-4">West Africa</p>
              <a href="mailto:contact@asiagroup.ng" className="text-primary font-medium hover:underline block mb-1">
                contact@asiagroup.ng
              </a>
              <a href="tel:+2340000000000" className="text-primary font-medium hover:underline block">
                +234 (0) 000 000 0000
              </a>
            </div>

            <div id="investors" className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-border">
               <h3 className="text-xl font-bold mb-2">Investor Relations</h3>
               <p className="text-sm text-muted-foreground mb-4">
                 Three decades of growth. Zero regulatory violations. 30+ global partnerships. Your confidence in Africa's supply chain is our accountability.
               </p>
               <p className="text-sm text-muted-foreground">
                 Select "Financial Reports" in the form to request access to our latest disclosures and performance metrics.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
