'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, ArrowUp, X } from 'lucide-react';

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/919876543210?text=Hi%20Arroyo%20Engineering%2C%20I%20would%20like%20a%20quote."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 group"
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500/50 blur-md animate-ping" />
        <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_15px_40px_-10px_rgba(16,185,129,0.7)] transition-transform group-hover:scale-110">
          <MessageCircle className="w-6 h-6" />
        </span>
      </a>

      <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-3">
        <AnimatePresence>
          {open && (
            <>
              <motion.a initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                href="tel:+919876543210" className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-strong text-white text-sm border border-white/10">
                <Phone className="w-4 h-4 text-red-500" /> +91 98765 43210
              </motion.a>
              <motion.a initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ delay: 0.05 }}
                href="mailto:info@arroyoengineering.com" className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-strong text-white text-sm border border-white/10">
                <Mail className="w-4 h-4 text-amber-400" /> Email us
              </motion.a>
            </>
          )}
        </AnimatePresence>
        <button onClick={() => setOpen(o => !o)} className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl hover:scale-105 transition">
          {open ? <X className="w-5 h-5" /> : <Phone className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {show && (
          <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-24 right-6 z-40 w-11 h-11 rounded-full bg-black/80 border border-white/15 backdrop-blur-md text-white flex items-center justify-center hover:bg-red-600 hover:border-red-500 transition"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export function QuotePopup({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[90] bg-black/85 backdrop-blur-md flex items-center justify-center p-4" onClick={onClose}>
      <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-lg w-full rounded-3xl border border-white/10 bg-gradient-to-b from-[#111] to-black p-8">
        <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white"><X className="w-4 h-4" /></button>
        <div className="text-[11px] uppercase tracking-[0.3em] text-red-500 font-semibold">Fast Track</div>
        <h3 className="font-display mt-2 text-3xl font-bold text-white leading-tight">Get a quote in 24 hours.</h3>
        <p className="mt-3 text-white/60">Share your project details and a senior estimator will call you back within one business day.</p>
        <a href="#contact" onClick={onClose} className="mt-6 inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold">
          Fill Quote Form
        </a>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <a href="tel:+919876543210" className="px-4 py-3 rounded-full border border-white/10 bg-white/5 text-white text-center text-sm">Call Now</a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="px-4 py-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-center text-sm">WhatsApp</a>
        </div>
      </motion.div>
    </div>
  );
}
