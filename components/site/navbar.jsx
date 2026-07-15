'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { ArroyoLogo } from './logo';
import { cn } from '@/lib/utils';

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar({ onQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top strip */}
      <div className="hidden lg:block bg-black text-white/60 text-xs border-b border-white/5">
        <div className="max-w-content container-p py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span>🇮🇳 Delivering Engineering Excellence Across India since 2007</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:+919876543210" className="hover:text-white transition">+91 98765 43210</a>
            <a href="mailto:info@arroyoengineering.com" className="hover:text-white transition">info@arroyoengineering.com</a>
            <span className="text-amber-400/80">ISO 9001 · 14001 · OHSAS 18001</span>
          </div>
        </div>
      </div>

      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 1.4 }}
        className={cn(
          'fixed top-0 lg:top-[34px] left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'lg:top-0' : ''
        )}
      >
        <div className={cn(
          'transition-all duration-500',
          scrolled ? 'glass-strong border-b border-white/10' : 'bg-transparent'
        )}>
          <div className="max-w-content container-p flex items-center justify-between h-[72px]">
            <a href="#home" className="flex items-center"><ArroyoLogo size={38} /></a>

            <nav className="hidden lg:flex items-center gap-1">
              {LINKS.map(l => (
                <a key={l.href} href={l.href}
                   className="relative px-4 py-2 text-sm text-white/80 hover:text-white transition group">
                  {l.label}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-[2px] bg-gradient-to-r from-red-500 to-amber-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a href="tel:+919876543210" className="hidden md:flex items-center gap-2 text-white/80 hover:text-white text-sm">
                <Phone className="w-4 h-4" /> +91 98765 43210
              </a>
              <button onClick={onQuote}
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(220,38,38,0.6)] transition-all hover:shadow-[0_15px_40px_-10px_rgba(220,38,38,0.8)] hover:scale-[1.03]">
                Get Quote <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => setOpen(true)} className="lg:hidden text-white p-2">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl lg:hidden">
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <ArroyoLogo size={36} />
              <button onClick={() => setOpen(false)} className="p-2 text-white"><X className="w-6 h-6" /></button>
            </div>
            <nav className="flex flex-col p-6 gap-1">
              {LINKS.map((l, i) => (
                <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                  className="text-2xl font-display font-semibold text-white py-4 border-b border-white/5">
                  {l.label}
                </motion.a>
              ))}
              <button onClick={() => { setOpen(false); onQuote?.(); }}
                className="mt-6 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold">
                Get Free Quote
              </button>
              <a href="tel:+919876543210" className="mt-2 py-4 rounded-full border border-white/15 text-white font-semibold text-center">
                Call: +91 98765 43210
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
