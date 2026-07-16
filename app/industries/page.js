'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/site/page-hero';
import { industries, IMG } from '@/lib/site-data';
import { CTABanner, FAQ } from '@/components/site/sections';
import { ArrowUpRight } from 'lucide-react';
import { useQuote } from '@/lib/quote-context';

export default function IndustriesPage() {
  const { setOpen } = useQuote();
  return (
    <main className="bg-[#050505] text-white">
      <PageHero eyebrow="Industries We Serve" image={IMG.industry2}
        crumbs={[{ label: 'Industries' }]}
        title={<>Powering India&apos;s <span className="text-gradient-gold">critical sectors.</span></>}
        subtitle="From national oil companies and highway authorities to private industrial conglomerates — Arroyo delivers to the toughest specifications across eight core industries." />

      <section className="section max-w-content container-p">
        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((ind, i) => (
            <motion.div key={ind.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 2) * 0.06 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/9]">
              <Image src={ind.img} alt={ind.name} fill sizes="50vw" className="object-cover opacity-45 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-500 transition">
                  <ind.icon className="w-6 h-6 text-white" />
                </div>
                <div className="max-w-md">
                  <div className="font-display text-3xl font-bold text-white">{ind.name}</div>
                  <p className="text-white/70 mt-2">{ind.desc}</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-red-400 hover:text-red-300">
                    Discuss requirement <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FAQ />
      <CTABanner onQuote={() => setOpen(true)} />
    </main>
  );
}
