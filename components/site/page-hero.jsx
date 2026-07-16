'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export function PageHero({ eyebrow, title, subtitle, image, crumbs = [] }) {
  return (
    <section className="relative pt-[30px] md:pt-[45px] pb-6 md:pb-8 overflow-hidden bg-black">
      {image && (
        <div className="absolute inset-0 -z-10">
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
          <div className="absolute inset-0 grid-bg opacity-30" />
        </div>
      )}
      <div className="absolute -left-40 top-20 w-[500px] h-[500px] rounded-full bg-red-600/15 blur-[130px]" />

      <div className="relative max-w-content container-p">
        {crumbs.length > 0 && (
          <motion.nav initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5" />
                {c.href ? <Link href={c.href} className="hover:text-white transition">{c.label}</Link> : <span className="text-white/80">{c.label}</span>}
              </span>
            ))}
          </motion.nav>
        )}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] uppercase tracking-[0.25em] text-white/70">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> {eyebrow}
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display mt-5 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.02] max-w-4xl">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-white/60 leading-relaxed">
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
