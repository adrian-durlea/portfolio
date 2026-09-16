import Link from "next/link";
import { Container } from "@/components/container";
import { ExperienceItem } from "@/components/experience-item";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/content/experience";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { skillCategories } from "@/content/skills";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);
  const selectedExperience = experiences.slice(0, 2);

  return (
    <>
      <section className="border-b border-border">
        <Container className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-muted">
              Engineering portfolio
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              {siteConfig.introduction}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background"
                href={siteConfig.links.resume}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
              <a
                className="rounded-md border border-border px-4 py-2 text-sm font-medium"
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="rounded-md border border-border px-4 py-2 text-sm font-medium"
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Container className="space-y-16 py-12 sm:py-16">
        <section aria-labelledby="featured-projects">
          <SectionHeading
            id="featured-projects"
            title="Featured Projects"
            description="A starting point for engineering, controls, robotics, embedded, and software work."
            action={<Link href="/projects">View all projects</Link>}
          />
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section aria-labelledby="selected-experience">
          <SectionHeading
            id="selected-experience"
            title="Selected Experience"
            description="Internships, roles, and technical involvement can be edited in the content files."
            action={<Link href="/experience">View all experience</Link>}
          />
          <div className="mt-6 space-y-5">
            {selectedExperience.map((experience) => (
              <ExperienceItem
                key={`${experience.organization}-${experience.position}`}
                experience={experience}
              />
            ))}
          </div>
        </section>

        <section aria-labelledby="skills-overview">
          <SectionHeading
            id="skills-overview"
            title="Skills & Technologies"
            description="Grouped by practical engineering and software categories."
            action={<Link href="/skills">View skills</Link>}
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <div key={category.name} className="border border-border p-5">
                <h3 className="font-medium">{category.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {category.skills.slice(0, 5).join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
