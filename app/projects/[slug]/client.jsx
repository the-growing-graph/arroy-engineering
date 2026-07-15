'use client';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/site/page-hero';
import { CTABanner } from '@/components/site/sections';
import { projects } from '@/lib/site-data';
import { MapPin, Calendar, IndianRupee, Building2, Clock, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useQuote } from '@/lib/quote-context';

export default function ProjectDetailClient({ slug }) {
  const { setOpen } = useQuote();
  const project = projects.find(p => p.slug === slug);
  if (!project) return null;
  const relatedRaw = projects.filter(p => p.slug !== slug && p.cat === project.cat).slice(0, 3);
  const related = relatedRaw.length ? relatedRaw : projects.filter(p => p.slug !== slug).slice(0, 3);
  const parts = project.title.split(' — ');

  return (
    <main className="bg-[#050505] text-white">
      <PageHero eyebrow={project.cat} image={project.img}
        crumbs={[{ label: 'Projects', href: '/projects' }, { label: project.title }]}
        title={<>{parts[0]} {parts[1] && <span className="text-gradient-red">{parts[1]}</span>}</>}
        subtitle={`${project.cat} · ${project.loc} · ${project.year}`} />

      <section className="section max-w-content container-p grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-8">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[16/10]">
            <Image src={project.gallery[0]} alt={project.title} fill sizes="66vw" priority className="object-cover" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {project.gallery.slice(1).map((g, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden border border-white/10 aspect-square">
                <Image src={g} alt="" fill sizes="25vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="font-display text-3xl font-bold text-white">Project Scope</h2>
            <p className="mt-4 text-white/70 leading-relaxed text-lg">{project.scope}</p>
          </div>

          <div className="mt-10">
            <h3 className="font-display text-2xl font-bold text-white mb-6">Highlights</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Delivered on committed milestones',
                'Zero lost-time incidents recorded',
                'Third-party quality certification',
                'Full compliance with statutory norms',
                'On-site QA/QC at every stage',
                'Post-handover defect liability support',
              ].map((h, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-24 space-y-4">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-red-400 mb-4">Project Snapshot</div>
              {[
                { icon: Building2, k: 'Client', v: project.client },
                { icon: MapPin, k: 'Location', v: project.loc },
                { icon: Calendar, k: 'Year', v: project.year },
                { icon: Clock, k: 'Duration', v: project.duration },
                { icon: IndianRupee, k: 'Contract Value', v: project.value },
              ].map((r, i) => (
                <div key={i} className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0">
                  <r.icon className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-widest text-white/50">{r.k}</div>
                    <div className="text-sm text-white font-medium">{r.v}</div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => setOpen(true)} className="w-full inline-flex items-center justify-center gap-2 px-4 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold">
              Discuss a similar project <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </aside>
      </section>

      <section className="section max-w-content container-p border-t border-white/5">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Related projects</h2>
          <Link href="/projects" className="text-red-400 hover:text-red-300 text-sm font-semibold inline-flex items-center gap-1">All projects <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map(r => (
            <Link key={r.slug} href={`/projects/${r.slug}`} className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] block">
              <Image src={r.img} alt={r.title} fill sizes="33vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-[10px] uppercase tracking-widest text-white/60">{r.cat}</div>
                <div className="font-display text-lg font-bold text-white">{r.title}</div>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-red-600 transition">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner onQuote={() => setOpen(true)} />
    </main>
  );
}
