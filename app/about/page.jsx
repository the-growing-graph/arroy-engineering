'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/site/page-hero';
import { Stats, Certifications, WhyChoose, ProcessTimeline, CTABanner } from '@/components/site/sections';
import { IMG, milestones } from '@/lib/site-data';
import { Target, Eye, Sparkles, Award, Building2, Users, Handshake } from 'lucide-react';
import { useQuote } from '@/lib/quote-context';


export default function AboutPage() {
  const { setOpen } = useQuote();
  return (
    <main className="bg-[#050505] text-white">
      <PageHero eyebrow="About Arroyo" image={IMG.about}
        crumbs={[{ label: 'About' }]}
        title={<>Two decades of building <span className="text-gradient-red">India&#39;s infrastructure.</span></>}
        subtitle="Founded in 2007, Arroyo Engineering & Infrastructure Pvt. Ltd. is a full-service EPC contractor delivering complex engineering projects for India’s most demanding industrial and public-sector clients." />

      {/* Company snapshot */}
      <section className="section max-w-content container-p grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-7">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">A story of engineering excellence.</h2>
          <div className="mt-6 space-y-4 text-white/70 leading-relaxed">
            <p>Arroyo Engineering was founded in 2007 by a small team of Mumbai-based civil engineers with a simple conviction: India deserved a construction company that combined the technical rigour of global EPC majors with the flexibility of a nimble Indian firm. Eighteen years later, that conviction is now the foundation of one of India’s most trusted mid-market EPC contractors.</p>
            <p>Today we operate through 8 regional offices with a 240-strong engineering team, a fleet of 180+ heavy machines and active projects in 40+ cities across 18+ states. We have delivered over 850 projects for public-sector oil companies, national highway authorities, private industrial conglomerates and state governments.</p>
            <p>What differentiates Arroyo is not scale alone — it is a culture. A culture where safety is the first agenda in every review, quality is not negotiable, and delivery timelines are contractual promises we take personally. That culture is what allows us to say, credibly, that we build the backbone of tomorrow’s India.</p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-10">
            {[
              { icon: Target, k: 'Mission', v: 'Deliver world-class engineering that powers Indian industry — safely, on time and to global quality benchmarks.' },
              { icon: Eye, k: 'Vision', v: 'To be India’s most trusted EPC and infrastructure partner across oil, gas, roads, bridges and industrial projects.' },
              { icon: Sparkles, k: 'Values', v: 'Safety · Quality · Integrity · On-Time Delivery · Respect · Continuous Improvement.' },
            ].map((v, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <v.icon className="w-5 h-5 text-red-500 mb-3" />
                <div className="text-white font-semibold">{v.k}</div>
                <p className="text-xs text-white/60 mt-2 leading-relaxed">{v.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5]">
            <Image src={IMG.ceo} alt="About Arroyo" fill sizes="40vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>
          <div className="absolute -left-4 top-10 glass-strong rounded-2xl p-5 max-w-[220px] border border-white/10">
            <div className="text-xs uppercase tracking-widest text-white/50 mb-1">Founded</div>
            <div className="font-display text-3xl font-bold text-white">2007</div>
            <div className="text-xs text-white/60 mt-1">Mumbai, India</div>
          </div>
          <div className="absolute -right-4 bottom-16 glass-strong rounded-2xl p-5 max-w-[240px] border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <Image src={IMG.ceo} alt="CEO" width={40} height={40} className="rounded-full object-cover" />
              <div>
                <div className="text-white text-sm font-semibold">Mr. Chandra Sheikhar</div>
                <div className="text-[10px] text-white/50 uppercase tracking-widest">Founder & CEO</div>
              </div>
            </div>
            <p className="text-xs text-white/70 italic">&quot;We build the backbone of tomorrow&apos;s India.&quot;</p>
          </div>
        </div>
      </section>

      {/* Milestones timeline */}
      {/* <section className="section bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-content container-p">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] uppercase tracking-[0.25em] text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Our Journey
            </div>
            <h2 className="font-display mt-5 text-4xl md:text-5xl font-bold text-white">From 12 engineers to <span className="text-gradient-red">India-wide impact.</span></h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-red-500/40 to-transparent -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div key={m.y} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className={`md:grid md:grid-cols-2 md:gap-10 items-center ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <div className={i % 2 ? 'md:text-left' : 'md:text-right'}>
                    <div className="font-display text-4xl md:text-5xl font-bold text-gradient-red">{m.y}</div>
                    <h3 className="mt-2 font-display text-xl md:text-2xl font-bold text-white">{m.t}</h3>
                    <p className="mt-2 text-white/60">{m.d}</p>
                  </div>
                  <div className="hidden md:flex items-center relative">
                    <div className="w-4 h-4 rounded-full bg-red-500 ring-4 ring-red-500/20 mx-auto" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Leadership */}
      <section className="section max-w-content container-p">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] uppercase tracking-[0.25em] text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Leadership
          </div>
          <h2 className="font-display mt-5 text-4xl md:text-5xl font-bold text-white">Engineered by <span className="text-gradient-red">experienced leaders.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { n: 'Mr. Chandra Sheikhar', r: 'Founder & CEO', b: 'Visionary business leader with over two decades of expertise in executing complex civil engineering, infrastructure, and turnkey EPC projects.', img: IMG.ceo },
            { n: 'Manas Padhan', r: 'Director & Business Strategist', b: 'Dynamic entrepreneur and business leader with diversified interests across mining, finance, petroleum retailing, and infrastructure development.', img: '/manas_pradhan.png' },
            { n: 'Soumitinjaya Mahakud', r: 'Director — Operations & Manufacturing', b: 'Seasoned business leader with extensive experience in cement manufacturing, industrial plant operations, project execution, and supply chain.', img: '/somitanjaya_mahakud.png' },
          ].map((p, i) => (
            <motion.div key={p.n} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={p.img} alt={p.n} fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>
              <div className="p-5">
                <div className="font-display text-lg font-bold text-white">{p.n}</div>
                <div className="text-xs uppercase tracking-widest text-red-400 mt-1">{p.r}</div>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{p.b}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <WhyChoose />
      {/* <ProcessTimeline /> */}
      <CTABanner onQuote={() => setOpen(true)} />
    </main>
  );
}
