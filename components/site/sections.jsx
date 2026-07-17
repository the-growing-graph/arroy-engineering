'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { services, industries, whyChoose, processSteps, projects, projectCategories, stats, testimonials, faqs, IMG } from '@/lib/site-data';
import { ArrowRight, ArrowUpRight, Star, ChevronDown, MapPin, Calendar, IndianRupee, Sparkles, Target, Rocket, Eye, Quote } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } },
};

function SectionHeader({ eyebrow, title, subtitle, center, light }) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-3xl mb-14`}>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${light ? 'border-black/10 bg-black/5 text-black/70' : 'border-white/10 bg-white/5 text-white/70'} text-[11px] uppercase tracking-[0.25em]`}>
        <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> {eyebrow}
      </motion.div>
      <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} transition={{ delay: 0.05 }}
        className={`font-display mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${light ? 'text-black' : 'text-white'}`}>
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} transition={{ delay: 0.1 }}
          className={`mt-5 text-lg ${light ? 'text-black/60' : 'text-white/60'} leading-relaxed`}>
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section relative bg-[#050505]">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="relative max-w-content container-p grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader eyebrow="About Arroyo" title={<>Two decades of building <span className="text-gradient-red">India&#39;s infrastructure.</span></>}
            subtitle="Founded in 2007, Arroyo Engineering & Infrastructure Pvt. Ltd. is a full-service EPC contractor delivering complex engineering projects for India’s most demanding industrial and public-sector clients." />

          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              { icon: Target, k: 'Mission', v: 'Deliver world-class engineering that powers Indian industry.' },
              { icon: Eye, k: 'Vision', v: 'To be India’s most trusted EPC and infrastructure partner.' },
              { icon: Sparkles, k: 'Values', v: 'Safety · Quality · Integrity · On-Time Delivery.' },
            ].map((v, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.05 * i }}
                className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-red-500/40 transition">
                <v.icon className="w-5 h-5 text-red-500 mb-3" />
                <div className="text-white font-semibold">{v.k}</div>
                <p className="text-sm text-white/60 mt-1 leading-relaxed">{v.v}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition">
              Read More <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm border-b border-white/20 pb-1">
              Talk to our leadership team
            </Link>
          </div>
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="relative">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5]">
            <Image src={IMG.about} alt="About Arroyo" fill sizes="(min-width:1024px) 40vw, 90vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>
          {/* Floating stat cards */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="absolute -left-4 top-10 glass-strong rounded-2xl p-5 max-w-[220px] border border-white/10">
            <div className="text-xs uppercase tracking-widest text-white/50 mb-1">Founded</div>
            <div className="font-display text-3xl font-bold text-white">2007</div>
            <div className="text-xs text-white/60 mt-1">Mumbai, India</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="absolute -right-4 bottom-14 glass-strong rounded-2xl p-5 max-w-[240px] border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <Image src={IMG.ceo} alt="CEO" width={40} height={40} className="rounded-full object-cover" />
              <div>
                <div className="text-white text-sm font-semibold">Mr. Chandra Sheikhar</div>
                <div className="text-[10px] text-white/50 uppercase tracking-widest">Founder & CEO</div>
              </div>
            </div>
            <p className="text-xs text-white/70 italic leading-relaxed">&quot;We don&apos;t just build structures. We build the backbone of tomorrow&apos;s India.&quot;</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="section relative bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-content container-p">
        <SectionHeader center eyebrow="What We Do" title={<>Full-spectrum <span className="text-gradient-red">engineering services.</span></>}
          subtitle="From concept to commissioning, Arroyo delivers turnkey engineering across ten specialised verticals — backed by senior in-house talent and modern equipment." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={fadeUp} transition={{ delay: (i % 3) * 0.08 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent hover-lift">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={s.img} alt={s.title} fill sizes="(min-width:1024px) 30vw, 100vw" className="object-cover group-hover:scale-110 transition-transform duration-[1.2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white group-hover:text-red-500 transition-colors">{s.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <Link href={`/services/${s.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-red-400 transition">
                    Learn More <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <span className="text-xs text-white/30">0{i + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section id="industries" className="section relative bg-black">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-content container-p">
        <SectionHeader center eyebrow="Industries We Serve" title={<>Powering India&apos;s <span className="text-gradient-gold">critical sectors.</span></>} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <motion.div key={ind.name} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: (i % 4) * 0.06 }}
              className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10 cursor-pointer">
              <Image src={ind.img} alt={ind.name} fill sizes="25vw" className="object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="w-11 h-11 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-500 transition">
                  <ind.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-white">{ind.name}</div>
                  <div className="h-[2px] w-8 bg-red-500 mt-2 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section className="section relative bg-[#0a0a0a]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-blue-700/10 blur-[120px] rounded-full" />
      </div>
      <div className="relative max-w-content container-p">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Why Choose Arroyo" title={<>Built on trust. Delivered with <span className="text-gradient-red">precision.</span></>}
              subtitle="Clients choose Arroyo for the same reason India’s largest projects do — uncompromising quality, engineered safety and a track record of on-time delivery." />
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {whyChoose.map((w, i) => (
              <motion.div key={w.title} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: (i % 4) * 0.06 }}
                className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-red-500/40 transition">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-red-600/20 to-transparent border border-red-500/30 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:border-red-500 transition">
                  <w.icon className="w-5 h-5 text-red-400 group-hover:text-white transition" />
                </div>
                <div className="font-display text-lg font-bold text-white">{w.title}</div>
                <p className="text-sm text-white/60 mt-1.5 leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessTimeline() {
  return (
    <section className="section relative bg-black">
      <div className="relative max-w-content container-p">
        <SectionHeader center eyebrow="Our Process" title={<>From <span className="text-gradient-red">blueprint to handover.</span></>} subtitle="A structured 7-stage delivery framework refined over 850+ successful projects." />

        <div className="relative">
          <div className="absolute left-0 right-0 top-16 h-[2px] hidden lg:block bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
            {processSteps.map((step, i) => (
              <motion.div key={step.n} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.08 }}
                className="relative">
                <div className="relative z-10 w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center font-display font-bold text-white shadow-[0_10px_30px_-8px_rgba(220,38,38,0.7)]">
                  {step.n}
                </div>
                <div className="mt-4 text-center">
                  <div className="font-display font-bold text-white text-lg">{step.title}</div>
                  <p className="text-xs text-white/50 mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const [active, setActive] = useState('All');
  const list = active === 'All' ? projects : projects.filter(p => p.cat === active);

  return (
    <section id="projects" className="section relative bg-[#050505]">
      <div className="relative max-w-content container-p">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] uppercase tracking-[0.25em] text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Featured Projects
            </div>
            <h2 className="font-display mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              A portfolio built on <span className="text-gradient-red">delivery.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {projectCategories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${active === cat ? 'bg-red-600 text-white border-red-600 shadow-[0_10px_30px_-10px_rgba(220,38,38,0.6)]' : 'bg-white/5 text-white/70 border-white/10 hover:border-white/20 hover:text-white'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <motion.div key={p.title + i} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={fadeUp} transition={{ delay: (i % 3) * 0.08 }}>
              <Link href={`/projects/${p.slug}`}
                className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] block">
                <Image src={p.img} alt={p.title} fill sizes="(min-width:1024px) 30vw, 100vw" className="object-cover group-hover:scale-110 transition-transform duration-[1.2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
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
      </div>
    </section>
  );
}

export function Gallery() {
  const imgs = [IMG.refinery1, IMG.bridge1, IMG.industry1, IMG.refinery3, IMG.bridge2, IMG.machine1, IMG.refinery4, IMG.industry2, IMG.bridge4, IMG.refinery5, IMG.machine3, IMG.bridge3];
  const [lb, setLb] = useState(null);
  return (
    <section className="section relative bg-black">
      <div className="relative max-w-content container-p">
        <SectionHeader center eyebrow="Site Gallery" title={<>Where <span className="text-gradient-red">engineering</span> meets scale.</>} />
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {imgs.map((src, i) => (
            <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: (i % 4) * 0.06 }}
              className={`relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer group border border-white/10 ${i % 3 === 0 ? 'aspect-[4/5]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[3/4]'}`}
              onClick={() => setLb(src)}>
              <Image src={src} alt="Gallery" fill sizes="25vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {lb && (
        <div className="fixed inset-0 z-[80] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6" onClick={() => setLb(null)}>
          <div className="relative max-w-5xl w-full aspect-[16/10]">
            <Image src={lb} alt="Lightbox" fill className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}

function Counter({ n, suffix }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const dur = 1600;
        const t0 = performance.now();
        const step = (t) => {
          const p = Math.min((t - t0) / dur, 1);
          setVal(Math.floor(p * n));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [n]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-red-950 via-black to-blue-950 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0">
        <Image src={IMG.refinery2} alt="" fill className="object-cover opacity-20" />
      </div>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative max-w-content container-p">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-[11px] uppercase tracking-[0.25em] text-white/80">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Numbers that matter
          </div>
          <h2 className="font-display mt-5 text-4xl md:text-5xl font-bold text-white">Two decades. One promise. <span className="text-gradient-gold">Excellence.</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((s, i) => (
            <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.06 }}
              className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-white">
                <Counter n={s.n} suffix={s.suffix} />
              </div>
              <div className="text-xs uppercase tracking-widest text-white/60 mt-2">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  const certs = [
    { name: 'ISO 9001:2015', k: 'Quality Management' },
    { name: 'ISO 14001', k: 'Environmental' },
    { name: 'OHSAS 18001', k: 'Safety Standards' },
    { name: 'NHAI Empanelled', k: 'Highway Authority' },
    { name: 'HPCL Approved', k: 'Fuel Retail EPC' },
    { name: 'IOCL Vendor', k: 'Oil Terminals' },
  ];
  return (
    <section className="section relative bg-[#0a0a0a]">
      <div className="relative max-w-content container-p">
        <SectionHeader center eyebrow="Certifications & Compliance" title={<>Built to the highest <span className="text-gradient-gold">international standards.</span></>} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {certs.map((c, i) => (
            <motion.div key={c.name} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center hover:bg-white/[0.05] hover:border-amber-500/40 transition">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-400/20 to-transparent border border-amber-500/30 flex items-center justify-center">
                <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
              </div>
              <div className="font-display text-sm md:text-base font-bold text-white">{c.name}</div>
              <div className="text-[11px] uppercase tracking-widest text-white/50 mt-1">{c.k}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="relative w-[360px] md:w-[440px] lg:w-[520px] flex-shrink-0 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-7 md:p-9 hover:border-red-500/40 hover:from-white/[0.08] transition-all duration-500 group">
      <Quote className="w-10 h-10 text-red-600/70 mb-4 group-hover:scale-110 group-hover:text-red-500 transition-transform" />
      <div className="flex items-center gap-1 mb-3">
        {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
      </div>
      <p className="font-display text-lg md:text-xl font-medium text-white/95 leading-snug line-clamp-5">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center text-white font-display font-bold text-lg flex-shrink-0">
          {t.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{t.name}</div>
          <div className="text-xs text-white/55">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  // Duplicate list several times to make the marquee feel truly endless
  const loop = [...testimonials, ...testimonials, ...testimonials];
  return (
    <section className="section relative bg-black overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-content container-p">
        <SectionHeader center eyebrow="Client Voices" title={<>Loved by <span className="text-gradient-red">India&#39;s biggest names.</span></>}
          subtitle="Real feedback from the leaders of India's largest oil, infrastructure and industrial operators." />
      </div>

      {/* Marquee track */}
      <div className="relative mt-4 group">
        {/* Left & right gradient shadow masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20" />

        <div className="flex marquee-track-slow gap-6 py-6 will-change-transform">
          {loop.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>

        {/* Second row - reverse direction for that premium double-marquee feel */}
        <div className="flex marquee-track-slow-reverse gap-6 py-6 will-change-transform">
          {[...testimonials.slice().reverse(), ...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((t, i) => (
            <TestimonialCard key={`r-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section relative bg-[#050505]">
      <div className="relative max-w-content container-p grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow="FAQ" title={<>Frequently asked <span className="text-gradient-red">questions.</span></>} subtitle="Everything you need to know about working with Arroyo Engineering." />
          <Link href="/contact" className="inline-flex items-center gap-2 text-white/80 border-b border-white/20 pb-1">
            Have another question? Talk to us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="lg:col-span-7 space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className={`rounded-2xl border transition ${open === i ? 'border-red-500/40 bg-white/[0.03]' : 'border-white/10 bg-white/[0.02]'}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4">
                <span className="font-display text-base md:text-lg font-semibold text-white">{f.q}</span>
                <ChevronDown className={`w-5 h-5 text-white/60 transition-transform ${open === i ? 'rotate-180 text-red-500' : ''}`} />
              </button>
              {open === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="px-5 md:px-6 pb-5 md:pb-6 text-white/70 leading-relaxed">
                  {f.a}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTABanner({ onQuote }) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image src={IMG.bridge1} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50" />
      </div>
      <div className="relative max-w-content container-p text-center">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
          Let&apos;s build something<br />
          <span className="text-gradient-red">extraordinary</span> together.
        </motion.h2>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
          className="mt-6 max-w-2xl mx-auto text-white/70 text-lg">
          From a single fuel station to a 200-crore EPC package — we deliver every project with the same discipline.
        </motion.p>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button onClick={onQuote} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-[1.03] transition">
            Get Free Quote <ArrowRight className="w-4 h-4" />
          </button>
          <a href="tel:+919876543210" className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/25 bg-white/5 backdrop-blur-md text-white font-semibold hover:bg-white/10 transition">
            Call Now: +91 98765 43210
          </a>
        </motion.div>
      </div>
    </section>
  );
}
