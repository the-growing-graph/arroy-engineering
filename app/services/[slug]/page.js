import { services } from '@/lib/site-data';
import { notFound } from 'next/navigation';
import ServiceDetailClient from './client';

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = services.find(x => x.slug === slug);
  if (!s) return {};
  return { title: s.title, description: s.desc };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) notFound();
  return <ServiceDetailClient slug={slug} />;
}
