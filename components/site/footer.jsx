'use client';
import { ArroyoLogo } from './logo';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-content container-p pt-20 pb-8">
        <div className="grid lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          <div className="lg:col-span-4">
            <ArroyoLogo size={44} />
            <p className="mt-6 text-white/60 leading-relaxed max-w-sm">
              Arroyo Engineering & Infrastructure Pvt. Ltd. — delivering world-class EPC, civil, oil & gas, and infrastructure projects across India since 2007.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Linkedin, Twitter, Facebook, Instagram, Youtube].map((Ic, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-red-500 hover:bg-red-600 transition">
                  <Ic className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-white font-display font-semibold mb-5">Quick Links</div>
            <ul className="space-y-3 text-sm text-white/60">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-white transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="text-white font-display font-semibold mb-5">Services</div>
            <ul className="space-y-3 text-sm text-white/60">
              {['Fuel Stations', 'Oil & Gas', 'Civil', 'Roads', 'Bridges', 'EPC'].map(l => (
                <li key={l}><a href="#services" className="hover:text-white transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <div className="text-white font-display font-semibold mb-5">Newsletter</div>
            <p className="text-sm text-white/60 mb-4">Subscribe for company news, projects and industry insights.</p>
            <form className="flex items-center gap-2" onSubmit={(e) => { e.preventDefault(); }}>
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input type="email" placeholder="your@email.com" className="w-full pl-10 pr-4 py-3 rounded-full bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 focus:border-red-500/60 outline-none" />
              </div>
              <button className="px-5 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-semibold flex items-center gap-1.5">Subscribe <ArrowRight className="w-4 h-4" /></button>
            </form>
            <div className="mt-6 text-xs text-white/40 space-y-1">
              <div>Head Office: Level 12, Arroyo Tower, BKC, Mumbai 400051</div>
              <div>+91 98765 43210 · info@arroyoengineering.com</div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <div>© {new Date().getFullYear()} Arroyo Engineering & Infrastructure Pvt. Ltd. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
