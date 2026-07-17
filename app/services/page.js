'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/site/page-hero';
import { services } from '@/lib/site-data';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { WhyChoose, ProcessTimeline, CTABanner } from '@/components/site/sections';
import { useQuote } from '@/lib/quote-context';

export default function ServicesPage() {
  const { setOpen } = useQuote();
  return (
    <main className="bg-[#050505] text-white">
      <PageHero eyebrow="What We Do" image={services[0].hero}
        crumbs={[{ label: 'Services' }]}
        title={<>Full-spectrum <span className="text-gradient-red">engineering services.</span></>}
        subtitle="Ten specialised engineering verticals — from a single retail fuel outlet to a 500-crore EPC package. Every service delivered by senior in-house talent with a modern equipment fleet." />

      <section className="section max-w-content container-p">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: (i % 3) * 0.06 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent hover-lift">
              <Link href={`/services/${s.slug}`}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={s.img} alt={s.title} fill sizes="(min-width:1024px) 30vw, 100vw" className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg">
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-red-500 transition-colors">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed line-clamp-3">{s.desc}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-red-400 transition">
                      Learn More <ArrowUpRight className="w-4 h-4" />
                    </span>
                    <span className="text-xs text-white/30">0{i + 1}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <CTABanner onQuote={() => setOpen(true)} />
    </main>
  );
}
