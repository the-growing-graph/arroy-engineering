'use client';
import { Hero, TrustLogos } from '@/components/site/hero';
import {
  About, Services, WhyChoose,
  Stats, Testimonials, ProcessTimeline, FAQ, CTABanner,
} from '@/components/site/sections';
import { useQuote } from '@/lib/quote-context';

function App() {
  const { setOpen } = useQuote();
  const openQuote = () => setOpen(true);

  return (
    <main className="relative bg-[#050505] text-white overflow-hidden">
      <Hero onQuote={openQuote} />
      <About />
      <Services />
      <ProcessTimeline />
      <Testimonials />
      <CTABanner onQuote={openQuote} />
    </main>
  );
}

export default App;
