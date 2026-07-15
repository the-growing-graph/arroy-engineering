'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/site/page-hero';
import { ProcessTimeline, CTABanner } from '@/components/site/sections';
import { services } from '@/lib/site-data';
import { ArrowUpRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { useQuote } from '@/lib/quote-context';

export default function ServiceDetailClient({ slug }) {
  const { setOpen } = useQuote();
  const service = services.find(s => s.slug === slug);
  if (!service) return null;
  const related = services.filter(s => s.slug !== slug).slice(0, 3);
  const Icon = service.icon;
  const parts = service.title.split(' ');
  return (
    <main className="bg-[#050505] text-white">
      <PageHero eyebrow={service.tag} image={service.hero}
        crumbs={[{ label: 'Services', href: '/services' }, { label: service.title }]}
        title={<>{parts.slice(0, -1).join(' ')} <span className="text-gradient-red">{parts.slice(-1)}</span></>}
        subtitle={service.desc} />

      <section className="section max-w-content container-p grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center shadow-[0_15px_40px_-10px_rgba(220,38,38,0.5)]">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-red-400">Service Overview</div>
              <div className="font-display text-2xl font-bold text-white">{service.title}</div>
            </div>
          </div>

          <p className="text-lg text-white/70 leading-relaxed">{service.overview}</p>

          <div className="mt-10">
            <h3 className="font-display text-2xl font-bold text-white mb-6">Our Capabilities</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.capabilities.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-red-500/40 transition">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">{c}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {service.deliverables.map((d, i) => (
              <div key={i} className="p-5 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent">
                <div className="font-display text-2xl font-bold text-white">{d.k}</div>
                <div className="text-xs uppercase tracking-widest text-white/50 mt-1">{d.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold shadow-[0_15px_40px_-10px_rgba(220,38,38,0.6)] hover:scale-[1.03] transition">
              Request Quote for {service.tag} <ArrowRight className="w-4 h-4" />
            </button>
            <a href="tel:+919876543210" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 bg-white/5 text-white font-semibold hover:bg-white/10 transition">
              Call an estimator
            </a>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5]">
              <Image src={service.img} alt={service.title} fill sizes="33vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/70">In focus</div>
                <div className="font-display text-2xl font-bold text-white mt-1">Delivered by senior engineers</div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-red-400 mb-3">Talk to us</div>
              <div className="font-display text-xl font-bold text-white">Need a quick estimate?</div>
              <p className="text-sm text-white/60 mt-2">Share your requirements. A senior estimator will call you back within 24 business hours.</p>
              <button onClick={() => setOpen(true)} className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white text-black font-semibold">
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </button>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <a href="tel:+919876543210" className="px-3 py-2.5 text-xs rounded-full border border-white/10 text-white text-center">Call</a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="px-3 py-2.5 text-xs rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-center">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessTimeline />

      <section className="section max-w-content container-p border-t border-white/5">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Related services</h2>
          <Link href="/services" className="text-red-400 hover:text-red-300 text-sm font-semibold inline-flex items-center gap-1">All services <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map(r => (
            <Link key={r.slug} href={`/services/${r.slug}`} className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] block">
              <Image src={r.img} alt={r.title} fill sizes="33vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60">{r.tag}</div>
                  <div className="font-display text-lg font-bold text-white">{r.title}</div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner onQuote={() => setOpen(true)} />
    </main>
  );
}
