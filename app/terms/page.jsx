'use client';
import { PageHero } from '@/components/site/page-hero';
import { IMG } from '@/lib/site-data';

export default function TermsPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <PageHero
        eyebrow="Legal"
        image={IMG.about}
        crumbs={[{ label: 'Terms of Service' }]}
        title="Terms of Service"
        subtitle="Last Updated: July 16, 2026. Please read these Terms of Service carefully before using our website or services."
      />

      <section className="section max-w-content container-p py-16">
        <div className="max-w-3xl mx-auto space-y-8 text-white/70 leading-relaxed">
          <div>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using or accessing this site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">2. Intellectual Property Rights</h2>
            <p>
              All materials on this website, including but not limited to text, graphics, logos, images, and code, are the intellectual property of Arroyo Engineering & Infrastructure Pvt. Ltd. and are protected by applicable copyright and trademark laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">3. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. Under this license, you may not modify or copy the materials, use them for any commercial purpose, or attempt to decompile any software contained on the website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">4. Disclaimer & Limitations</h2>
            <p>
              The materials on our website are provided on an 'as is' basis. Arroyo Engineering makes no warranties, expressed or implied, and hereby disclaims all other warranties. In no event shall Arroyo Engineering or its suppliers be liable for any damages arising out of the use or inability to use the materials.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh, India.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
