'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/site/page-hero';
import { projects, projectCategories, IMG } from '@/lib/site-data';
import { MapPin, Calendar, IndianRupee, ArrowUpRight } from 'lucide-react';
import { CTABanner, Testimonials } from '@/components/site/sections';
import { useQuote } from '@/lib/quote-context';

export default function ProjectsPage() {
  const [active, setActive] = useState('All');
  const { setOpen } = useQuote();
  const list = active === 'All' ? projects : projects.filter(p => p.cat === active);

  return (
    <main className="bg-[#050505] text-white">
      <PageHero eyebrow="Featured Projects" image={IMG.bridge1}
        crumbs={[{ label: 'Projects' }]}
        title={<>A portfolio built on <span className="text-gradient-red">delivery.</span></>}
        subtitle="Over 850 projects delivered across fuel stations, oil & gas, roads, bridges and industrial construction. Filter by sector or explore individual case studies." />

      <section className="section max-w-content container-p">
        <div className="flex flex-wrap gap-2 mb-10">
          {projectCategories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${active === cat ? 'bg-red-600 text-white border-red-600 shadow-[0_10px_30px_-10px_rgba(220,38,38,0.6)]' : 'bg-white/5 text-white/70 border-white/10 hover:border-white/20 hover:text-white'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <motion.div key={p.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: (i % 3) * 0.06 }}>
              <Link href={`/projects/${p.slug}`}
                className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] block">
                <Image src={p.img} alt={p.title} fill sizes="(min-width:1024px) 30vw, 100vw" className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-white/10 border border-white/20 backdrop-blur-md text-white">{p.cat}</div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-tight">{p.title}</h3>
                  <div className="flex items-center gap-4 mt-3 text-xs text-white/70">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {p.loc}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {p.year}</span>
                    <span className="flex items-center gap-1"><IndianRupee className="w-3 h-3" /> {p.value.replace('₹', '')}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-500 transition">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <Testimonials />
      <CTABanner onQuote={() => setOpen(true)} />
    </main>
  );
}
