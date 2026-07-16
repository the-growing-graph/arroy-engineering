'use client';
import { ArroyoLogo } from './logo';
import { Facebook, Linkedin, Instagram, Youtube, ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.118-2.905-6.993-1.876-1.875-4.357-2.906-6.995-2.907-5.438 0-9.864 4.426-9.868 9.87-.001 1.636.43 3.232 1.25 4.65l-.994 3.633 3.728-.977zm11.367-7.86c-.345-.172-2.039-1.006-2.353-1.12-.313-.115-.542-.172-.77.172-.228.344-.883 1.118-1.084 1.347-.2.228-.4.258-.745.086-1.087-.542-1.926-.999-2.694-2.316-.202-.345-.202-.56-.03-.73.156-.156.345-.4.517-.6.172-.2.229-.344.344-.573.114-.229.057-.429-.028-.6-.086-.172-.77-1.855-1.056-2.545-.278-.669-.559-.579-.77-.59-.199-.01-.427-.012-.656-.012-.228 0-.6.086-.913.43-.313.344-1.198 1.173-1.198 2.861 0 1.688 1.227 3.32 1.398 3.55.172.229 2.413 3.685 5.845 5.166.816.353 1.454.563 1.95.72.82.261 1.567.224 2.158.136.658-.098 2.039-.832 2.325-1.634.286-.801.286-1.49.201-1.635-.087-.144-.315-.23-.66-.402z"/>
  </svg>
);

const SOCIALS = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com', hoverClass: 'hover:bg-[#0a66c2] hover:border-[#0a66c2]' },
  { name: 'X', icon: XIcon, url: 'https://www.x.com', hoverClass: 'hover:bg-white hover:text-black hover:border-white' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com', hoverClass: 'hover:bg-[#1877f2] hover:border-[#1877f2]' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com', hoverClass: 'hover:bg-[#e1306c] hover:border-[#e1306c]' },
  { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com', hoverClass: 'hover:bg-[#ff0000] hover:border-[#ff0000]' },
  { name: 'WhatsApp', icon: WhatsAppIcon, url: 'https://www.whatsapp.com', hoverClass: 'hover:bg-[#25d366] hover:border-[#25d366]' }
];

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
              {SOCIALS.map((soc) => (
                <a key={soc.name} href={soc.url} target="_blank" rel="noopener noreferrer" 
                  className={`w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition duration-300 ${soc.hoverClass}`}>
                  <soc.icon className="w-4 h-4" />
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
              <div>Office Address: B-25, Sector 58, Noida, UP</div>
              <div>+91 98765 43210 · info@arroyoengineering.com</div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <div>© {new Date().getFullYear()} Arroyo Engineering & Infrastructure Pvt. Ltd. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
