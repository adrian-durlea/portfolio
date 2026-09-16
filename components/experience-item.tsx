import type { Experience } from "@/content/types";

type ExperienceItemProps = {
  experience: Experience;
};

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="border border-border p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold">{experience.position}</h2>
          <p className="text-sm text-muted">
            <a
              className="underline"
              href={experience.organizationUrl}
              target="_blank"
              rel="noreferrer"
            >
              {experience.organization}
            </a>
          </p>
        </div>
        <p className="text-sm text-muted">
          {experience.startDate} - {experience.endDate ?? "Present"}
        </p>
      </div>
      <p className="mt-4 leading-7 text-muted">{experience.description}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
        {experience.accomplishments.map((accomplishment) => (
          <li key={accomplishment}>{accomplishment}</li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {experience.technologies.map((technology) => (
          <span
            key={technology}
            className="border border-border px-2 py-1 text-xs text-muted"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}
