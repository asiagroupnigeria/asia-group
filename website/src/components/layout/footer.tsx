'use client';

import Link from 'next/link';
export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2 text-white">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center font-bold text-sm">
              AG
            </div>
            <span className="font-bold text-lg tracking-tight">
              ASIA GROUP
            </span>
          </Link>
          <p className="text-sm text-slate-400">
            38 years serving 350M+ people. Zero compromise on trust, quality, or delivery.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-white font-semibold">Our Businesses</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/businesses/fmcg" className="hover:text-white transition-colors">FMCG & Distribution</Link></li>
            <li><Link href="/businesses/pharmaceuticals" className="hover:text-white transition-colors">Pharmaceuticals</Link></li>
            <li><Link href="/businesses/automobiles" className="hover:text-white transition-colors">Automobiles</Link></li>
            <li><Link href="/businesses/cosmetics" className="hover:text-white transition-colors">Cosmetics</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-semibold">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-semibold">Newsletter</h4>
          <p className="text-sm text-slate-400">Subscribe for insights and company news.</p>
          <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-slate-900 border border-slate-800 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:border-primary"
            />
            <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Asia Group of Companies Ltd. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
