'use client';
import { Hero, TrustLogos } from '@/components/site/hero';
import {
  About, Services, Industries, WhyChoose,
  Stats, Testimonials, FAQ, CTABanner,
} from '@/components/site/sections';
import { useQuote } from '@/lib/quote-context';

function App() {
  const { setOpen } = useQuote();
  const openQuote = () => setOpen(true);

  return (
    <main className="relative bg-[#050505] text-white overflow-hidden">
      <Hero onQuote={openQuote} />
      <TrustLogos />
      <About />
      <Services />
      <Industries />
      <WhyChoose />
      <Stats />
      <Testimonials />
      {/* <FAQ /> */}
      <CTABanner onQuote={openQuote} />
    </main>
  );
}

export default App;
