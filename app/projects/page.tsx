import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering and software projects spanning web development, embedded systems, robotics, controls, automation, and mechatronics.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-12 sm:py-16">
      <PageHeader
        title="Projects"
        description="Project data lives in content/projects.ts so entries can be edited without touching page components."
      />
      <section className="mt-10 grid gap-5 lg:grid-cols-2" aria-label="Projects">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </Container>
  );
}
