'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { ArrowRight, Play, ShieldCheck, Award, Building2, PlayCircle } from 'lucide-react';
import { IMG } from '@/lib/site-data';

export function Hero({ onQuote }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <Image src={IMG.hero} alt="Arroyo Engineering site" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="noise-overlay" />
      </motion.div>

      {/* Decorative glow */}
      <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] rounded-full bg-red-600/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-10 w-[400px] h-[400px] rounded-full bg-blue-700/20 blur-[120px]" />

      <motion.div style={{ opacity }} className="relative max-w-content container-p w-full pt-[30px] pb-18">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-xs uppercase tracking-[0.2em] text-white/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Trusted EPC · Oil & Gas · Infrastructure
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.75, duration: 0.8 }}
              className="font-display mt-6 text-[42px] sm:text-6xl md:text-7xl lg:text-[88px] font-bold leading-[1.02] tracking-tighter text-white">
              Engineering<br />
              Excellence That<br />
              <span className="text-gradient-red">Builds Tomorrow.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.95, duration: 0.7 }}
              className="mt-7 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">
              Arroyo Engineering & Infrastructure delivers world-class EPC, civil, oil & gas, fuel station, road and bridge projects across India — on time, on budget, at global quality standards.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.1, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4">
              <button onClick={onQuote}
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold shadow-[0_20px_50px_-15px_rgba(220,38,38,0.7)] transition-all hover:shadow-[0_25px_60px_-15px_rgba(220,38,38,0.9)] hover:scale-[1.03]">
                Get Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
              <a href="#services"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold hover:bg-white/10 transition">
                <PlayCircle className="w-5 h-5 text-amber-400" />
                Explore Services
              </a>
            </motion.div>

            {/* Trust bullets */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3, duration: 0.8 }}
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
              {[
                { k: '850+', v: 'Projects Delivered' },
                { k: '18+', v: 'Years Experience' },
                { k: '42', v: 'Cities Covered' },
                { k: 'ISO', v: 'Certified' },
              ].map((s, i) => (
                <div key={i} className="border-l border-white/15 pl-4">
                  <div className="font-display text-2xl md:text-3xl font-bold text-white">{s.k}</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">{s.v}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="text-xs uppercase tracking-[0.3em] text-white/40">Scroll</div>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent">
            <motion.div animate={{ y: [0, 64, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-[1px] h-6 bg-red-500" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function TrustLogos() {
  const logos = ['HPCL', 'IOCL', 'BPCL', 'Reliance', 'NHAI', 'L&T', 'ONGC', 'GAIL', 'Tata Steel', 'Adani', 'JSW', 'Vedanta', 'PWD', 'Aditya Birla'];
  return (
    <section className="relative border-y border-white/5 bg-black py-10 overflow-hidden">
      <div className="max-w-content container-p mb-6 flex items-center justify-center gap-4">
        <div className="h-[1px] w-10 bg-white/20" />
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Trusted by leading organisations</p>
        <div className="h-[1px] w-10 bg-white/20" />
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
        <div className="flex marquee-track whitespace-nowrap">
          {[...logos, ...logos].map((name, i) => (
            <div key={i} className="px-10 py-6 flex items-center justify-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-white/40 hover:text-white/90 transition-colors duration-300 tracking-tight">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
