'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, ArrowRight, Phone, ChevronDown } from 'lucide-react';
import { ArroyoLogo } from './logo';
import { useQuote } from '@/lib/quote-context';
import { services } from '@/lib/site-data';
import { cn } from '@/lib/utils';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services', hasSub: true },
  { href: '/industries', label: 'Industries' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const pathname = usePathname();
  const { setOpen: setQuote } = useQuote();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setSubmenu(false); }, [pathname]);

  // Hide navbar entirely on admin routes
  if (pathname?.startsWith('/admin')) return null;

  const isActive = (href) => href === '/' ? pathname === '/' : pathname?.startsWith(href);

  return (
    <>
      <div className="hidden lg:block bg-black text-white/60 text-xs border-b border-white/5">
        <div className="max-w-content container-p py-2 flex items-center justify-between">
          <span>🇮🇳 Delivering Engineering Excellence Across India since 2007</span>
          <div className="flex items-center gap-5">
            <a href="tel:+919876543210" className="hover:text-white transition">+91 98765 43210</a>
            <a href="mailto:info@arroyoengineering.com" className="hover:text-white transition">info@arroyoengineering.com</a>
            <span className="text-amber-400/80">ISO 9001 · 14001 · OHSAS 18001</span>
          </div>
        </div>
      </div>

      <motion.header
        initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn('sticky top-0 z-50 transition-all duration-500', scrolled ? 'glass-strong border-b border-white/10' : 'bg-black/70 backdrop-blur-md border-b border-white/5')}
      >
        <div className="max-w-content container-p flex items-center justify-between h-[72px]">
          <ArroyoLogo size={44} />

          <nav className="hidden lg:flex items-center gap-1">
            {LINKS.map(l => l.hasSub ? (
              <div key={l.href} className="relative" onMouseEnter={() => setSubmenu(true)} onMouseLeave={() => setSubmenu(false)}>
                <Link href={l.href} className={cn('relative flex items-center gap-1 px-4 py-2 text-sm transition group',
                  isActive(l.href) ? 'text-white' : 'text-white/70 hover:text-white')}>
                  {l.label}
                  <ChevronDown className={cn('w-3.5 h-3.5 transition-transform', submenu && 'rotate-180')} />
                  <span className={cn('absolute left-4 right-6 -bottom-0.5 h-[2px] bg-gradient-to-r from-red-500 to-amber-400 origin-left transition-transform duration-300',
                    isActive(l.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100')} />
                </Link>
                <AnimatePresence>
                  {submenu && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[680px]">
                      <div className="glass-strong rounded-2xl border border-white/10 p-4 shadow-2xl">
                        <div className="grid grid-cols-2 gap-1">
                          {services.map((s) => (
                            <Link key={s.slug} href={`/services/${s.slug}`}
                              className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600/20 to-transparent border border-red-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:border-red-500 transition">
                                <s.icon className="w-4 h-4 text-red-400 group-hover:text-white transition" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm font-semibold text-white group-hover:text-red-400 transition truncate">{s.title}</div>
                                <div className="text-xs text-white/50 truncate">{s.tag} · EPC & Turnkey</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                          <div className="text-xs text-white/50">10 core services delivered PAN-India</div>
                          <Link href="/services" className="inline-flex items-center gap-2 text-xs font-semibold text-red-400 hover:text-red-300">
                            View all services <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={l.href} href={l.href}
                className={cn('relative px-4 py-2 text-sm transition group', isActive(l.href) ? 'text-white' : 'text-white/70 hover:text-white')}>
                {l.label}
                <span className={cn('absolute left-4 right-4 -bottom-0.5 h-[2px] bg-gradient-to-r from-red-500 to-amber-400 origin-left transition-transform duration-300',
                  isActive(l.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100')} />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+919876543210" className="hidden md:flex items-center gap-2 text-white/80 hover:text-white text-sm">
              <Phone className="w-4 h-4" /> +91 98765 43210
            </a>
            <button onClick={() => setQuote(true)}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(220,38,38,0.6)] transition-all hover:scale-[1.03]">
              Get Quote <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => setOpen(true)} className="lg:hidden text-white p-2"><Menu className="w-6 h-6" /></button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl lg:hidden overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <ArroyoLogo size={40} />
              <button onClick={() => setOpen(false)} className="p-2 text-white"><X className="w-6 h-6" /></button>
            </div>
            <nav className="flex flex-col p-6 gap-1">
              {LINKS.map((l, i) => l.hasSub ? (
                <div key={l.href}>
                  <button onClick={() => setMobileSubOpen(!mobileSubOpen)}
                    className="w-full flex items-center justify-between text-2xl font-display font-semibold text-white py-4 border-b border-white/5">
                    {l.label} <ChevronDown className={cn('w-5 h-5 transition-transform', mobileSubOpen && 'rotate-180')} />
                  </button>
                  {mobileSubOpen && (
                    <div className="pl-4 py-3 space-y-1">
                      {services.map(s => (
                        <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setOpen(false)}
                          className="flex items-center gap-3 py-2.5 text-white/80">
                          <s.icon className="w-4 h-4 text-red-500" /> {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <motion.div key={l.href} initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.05 * i }}>
                  <Link href={l.href} onClick={() => setOpen(false)}
                    className={cn('block text-2xl font-display font-semibold py-4 border-b border-white/5', isActive(l.href) ? 'text-red-500' : 'text-white')}>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <button onClick={() => { setOpen(false); setQuote(true); }} className="mt-6 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold">
                Get Free Quote
              </button>
              <a href="tel:+919876543210" className="mt-2 py-4 rounded-full border border-white/15 text-white font-semibold text-center">Call: +91 98765 43210</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
