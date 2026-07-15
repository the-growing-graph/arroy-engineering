import { projects } from '@/lib/site-data';
import { notFound } from 'next/navigation';
import ProjectDetailClient from './client';

export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projects.find(x => x.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.scope };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  return <ProjectDetailClient slug={slug} />;
}
