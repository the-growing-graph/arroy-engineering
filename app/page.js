'use client';
import { Loader } from '@/components/site/loader';
import { Hero, TrustLogos } from '@/components/site/hero';
import {
  About, Services, Industries, WhyChoose, ProcessTimeline,
  Projects, Gallery, Stats, Certifications, Testimonials, FAQ, CTABanner,
} from '@/components/site/sections';
import { useQuote } from '@/lib/quote-context';

function App() {
  const { setOpen } = useQuote();
  const openQuote = () => setOpen(true);

  return (
    <main className="relative bg-[#050505] text-white overflow-hidden">
      <Loader />
      <Hero onQuote={openQuote} />
      <TrustLogos />
      <About />
      <Services />
      <Industries />
      <WhyChoose />
      <ProcessTimeline />
      <Projects />
      <Gallery />
      <Stats />
      <Certifications />
      <Testimonials />
      <FAQ />
      <CTABanner onQuote={openQuote} />
    </main>
  );
}

export default App;
