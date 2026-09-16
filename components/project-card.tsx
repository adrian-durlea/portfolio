import Image from "next/image";
import type { Project } from "@/content/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const leadImage = project.images[0];

  return (
    <article className="schematic-panel flex h-full flex-col p-5">
      {leadImage ? (
        <Image
          className="mb-5 aspect-[16/9] w-full border border-border object-cover"
          src={leadImage.src}
          alt={leadImage.alt}
          width={leadImage.width ?? 1200}
          height={leadImage.height ?? 675}
        />
      ) : null}

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
            {project.category}
          </p>
          <h2 className="mt-1 text-xl font-semibold">{project.title}</h2>
        </div>
        <p className="shrink-0 text-right font-mono text-xs text-muted">
          {project.startDate}
          {project.endDate ? ` - ${project.endDate}` : ""}
        </p>
      </div>

      <p className="mt-4 leading-7 text-muted">{project.shortDescription}</p>
      <p className="mt-3 text-sm leading-6 text-muted">
        {project.detailedDescription}
      </p>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
        {project.keyAccomplishments.map((accomplishment) => (
          <li key={accomplishment}>{accomplishment}</li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="border border-border bg-accent-soft/40 px-2 py-1 font-mono text-xs text-accent"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-4 font-mono text-xs font-medium uppercase tracking-[0.12em] text-accent">
        {project.githubUrl ? (
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        ) : null}
        {project.demoUrl ? (
          <a href={project.demoUrl} target="_blank" rel="noreferrer">
            Live demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
