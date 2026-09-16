import Image from "next/image";
import type { Project } from "@/content/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const leadImage = project.images[0];

  return (
    <article className="flex h-full flex-col border border-border p-5">
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
          <p className="text-sm font-medium text-muted">{project.category}</p>
          <h2 className="mt-1 text-xl font-semibold">{project.title}</h2>
        </div>
        <p className="shrink-0 text-right text-sm text-muted">
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
            className="border border-border px-2 py-1 text-xs text-muted"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
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
