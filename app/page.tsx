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
      <section className="border-b border-border bg-background/55">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_360px] lg:items-center">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Engineering portfolio / Rev A
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              {siteConfig.introduction}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="border border-accent bg-accent px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-background hover:bg-transparent hover:text-accent"
                href={siteConfig.links.resume}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
              <a
                className="border border-border bg-surface px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-foreground hover:border-accent hover:text-accent"
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="border border-border bg-surface px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-foreground hover:border-accent hover:text-accent"
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="schematic-panel p-5" aria-label="Portfolio schematic">
            <div className="mb-5 flex items-center justify-between font-mono text-xs uppercase tracking-[0.14em] text-accent">
              <span>System Map</span>
              <span>Static</span>
            </div>
            <div className="space-y-4">
              {[
                "Projects",
                "Experience",
                "Skills",
                "Resume",
                "Contact",
              ].map((node, index) => (
                <div key={node} className="flex items-center gap-3">
                  <span className="h-2 w-2 border border-accent bg-background" />
                  <span className="h-px flex-1 bg-border" />
                  <span className="w-28 border border-border bg-background/70 px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-muted">
                    {String(index + 1).padStart(2, "0")} {node}
                  </span>
                </div>
              ))}
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
              <div key={category.name} className="schematic-panel p-5">
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
