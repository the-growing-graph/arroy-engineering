'use client';
import { PageHero } from '@/components/site/page-hero';
import { IMG } from '@/lib/site-data';

export default function PrivacyPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <PageHero
        eyebrow="Legal"
        image={IMG.about}
        crumbs={[{ label: 'Privacy Policy' }]}
        title="Privacy Policy"
        subtitle="Last Updated: July 16, 2026. This Privacy Policy details how Arroyo Engineering & Infrastructure Pvt. Ltd. collects, stores, and uses data."
      />

      <section className="section max-w-content container-p py-16">
        <div className="max-w-3xl mx-auto space-y-8 text-white/70 leading-relaxed">
          <div>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">1. Information Collection</h2>
            <p>
              We collect information that you voluntarily provide to us when expressing an interest in obtaining information about us or our services, such as using the "Get Quote" form, subscribing to our newsletter, or contacting us directly via email or phone.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">2. Use of Information</h2>
            <p>
              We use the collected information for various purposes, including responding to inquiries, providing quote estimations, communicating project updates, sending occasional company announcements, and improving our website performance and user experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">3. Data Protection</h2>
            <p>
              We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please remember that no transmission over the internet is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">4. Sharing Your Data</h2>
            <p>
              We do not sell, rent, or trade your personal information with third parties. We may only share information when required by law or to protect legal rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">5. Contact Information</h2>
            <p>
              If you have questions or comments about this policy, you may email us at info@arroyoengineering.com or write to our office address at:
            </p>
            <p className="mt-2 font-semibold text-white">
              Arroyo Engineering & Infrastructure Pvt. Ltd.<br />
              B-25, Sector 58, Noida, UP, India
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
