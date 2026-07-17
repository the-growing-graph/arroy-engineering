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
      <Contact />
      <FAQ />
    </main>
  );
}
