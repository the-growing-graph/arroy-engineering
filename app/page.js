'use client';
import { useState } from 'react';
import { Loader } from '@/components/site/loader';
import { Navbar } from '@/components/site/navbar';
import { Hero, TrustLogos } from '@/components/site/hero';
import {
  About, Services, Industries, WhyChoose, ProcessTimeline,
  Projects, Gallery, Stats, Certifications, Testimonials, FAQ, CTABanner,
} from '@/components/site/sections';
import { Contact } from '@/components/site/contact';
import { Footer } from '@/components/site/footer';
import { FloatingButtons, QuotePopup } from '@/components/site/floating';

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const onQuote = () => setQuoteOpen(true);

  return (
    <main className="relative bg-[#050505] text-white overflow-hidden">
      <Loader />
      <Navbar onQuote={onQuote} />
      <Hero onQuote={onQuote} />
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
      <CTABanner onQuote={onQuote} />
      <Contact />
      <Footer />
      <FloatingButtons />
      <QuotePopup open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </main>
  );
}

export default App;
