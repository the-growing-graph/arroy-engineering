'use client';
import { PageHero } from '@/components/site/page-hero';
import { Contact } from '@/components/site/contact';
import { CTABanner, FAQ } from '@/components/site/sections';
import { IMG } from '@/lib/site-data';
import { useQuote } from '@/lib/quote-context';

export default function ContactPage() {
  const { setOpen } = useQuote();
  return (
    <main className="bg-[#050505] text-white">
      <PageHero eyebrow="Get In Touch" image={IMG.refinery2}
        crumbs={[{ label: 'Contact' }]}
        title={<>Talk to our <span className="text-gradient-red">project experts.</span></>}
        subtitle="Share your project brief — a senior estimator will call you back within 24 business hours with a preliminary scope and budget." />
      <Contact />
      <FAQ />
      <CTABanner onQuote={() => setOpen(true)} />
    </main>
  );
}
