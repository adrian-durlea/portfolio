import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";

export function ProjectCard({ project }: { project: Project }) {
  const leadImage = project.images[0];
  return (
    <article className="project-card">
      <Link className="project-card-link" href={`/projects/${project.slug}`}>
        <div className="flex items-center justify-between gap-3"><p className="eyebrow">{project.category}</p><span className="project-arrow" aria-hidden="true">↗</span></div>
        {leadImage ? <Image className="mt-6 aspect-video w-full rounded-lg object-cover" src={leadImage.src} alt={leadImage.alt} width={leadImage.width ?? 1200} height={leadImage.height ?? 675} /> : null}
        <h3>{project.title}</h3>
        {project.award && <p className="mb-3 text-xs text-accent">{project.award}</p>}
        <p className="text-sm leading-7 text-muted">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mt-6">{project.technologies.slice(0, 4).map(technology => <span className="tag" key={technology}>{technology}</span>)}</div>
        <div className="project-card-bottom"><span>{project.timeline ?? "Just for fun"}</span><span className="text-foreground">View project →</span></div>
      </Link>
    </article>
  );
}
