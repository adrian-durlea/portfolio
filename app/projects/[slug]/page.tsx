import type { Metadata } from "next";
import { ProjectGallery } from "@/components/project-gallery";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { projects } from "@/content/projects";

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  return project ? { title: project.title, description: project.shortDescription } : { title: "Project not found" };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  if (!project) notFound();
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <Container className="project-detail py-12 sm:py-20">
      <Link className="text-sm text-muted" href="/#projects">← All projects</Link>
      <header className="mt-14 max-w-3xl"><p className="eyebrow">{project.category}</p><h1 className="mt-4 text-4xl sm:text-6xl font-medium tracking-tight">{project.title}</h1><p className="mt-6 text-lg leading-8 text-muted">{project.shortDescription}</p></header>
      {project.award && <p className="mt-6 text-sm text-accent">{project.award}</p>}
      {(project.timeline || project.technologies.length > 0) && <div className="detail-meta">{project.timeline && <div><p className="eyebrow mb-3">Event</p><p className="text-sm">{project.timeline}</p></div>}{project.technologies.length > 0 && <div><p className="eyebrow mb-3">Tools & technologies</p><div className="flex flex-wrap gap-2">{project.technologies.map(technology => <span className="tag" key={technology}>{technology}</span>)}</div></div>}</div>}
      <ProjectGallery images={project.images} title={project.title} />
      <section className="max-w-3xl mt-12"><h2 className="text-2xl font-medium">Overview</h2><p className="mt-5 leading-8 text-muted">{project.detailedDescription}</p></section>
      {project.role && <section className="max-w-3xl mt-12"><h2 className="text-2xl font-medium">My contribution</h2><p className="mt-5 leading-8 text-muted">{project.role}</p></section>}
      {project.keyAccomplishments.length > 0 && <section className="max-w-3xl mt-12"><h2 className="text-2xl font-medium">Highlights</h2><ul className="mt-5 list-disc pl-5 space-y-4 leading-7 text-muted">{project.keyAccomplishments.map(item => <li key={item}>{item}</li>)}</ul></section>}
      <div className="flex flex-wrap gap-3 mt-10">{project.githubUrl && <a className="button" href={project.githubUrl} target="_blank" rel="noreferrer">View source ↗</a>}{project.demoUrl && <a className="button button-primary" href={project.demoUrl} target="_blank" rel="noreferrer">Live demo ↗</a>}{project.devpostUrl && <a className="button" href={project.devpostUrl} target="_blank" rel="noreferrer">Read on Devpost ↗</a>}</div>
      <div className="mt-20 pt-8 border-t border-border flex flex-wrap justify-between gap-4"><Link className="text-sm text-muted" href="/#projects">← Back to projects</Link><Link className="text-sm" href={`/projects/${nextProject.slug}`}>Next: {nextProject.title} →</Link></div>
    </Container>
  );
}
