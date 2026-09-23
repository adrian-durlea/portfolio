import { ProjectGallery } from "@/components/project-gallery";
import Link from "next/link";
import type { Project } from "@/content/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card-content">
        <div className="flex items-center justify-between gap-3"><p className="eyebrow">{project.category}</p><span className="project-arrow" aria-hidden="true">↗</span></div>
        <ProjectGallery images={project.images} title={project.title} compact />
        <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        {project.award && <p className="mb-3 text-xs text-accent">{project.award}</p>}
        <p className="text-sm leading-7 text-muted">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mt-6">{project.technologies.slice(0, 4).map(technology => <span className="tag" key={technology}>{technology}</span>)}</div>
        <div className="project-card-bottom"><span>{project.timeline ?? "Independent business"}</span><Link href={`/projects/${project.slug}`} className="text-foreground">View project →</Link></div>
      </div>
    </article>
  );
}
