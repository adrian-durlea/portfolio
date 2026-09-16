import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { SkillCategory } from "@/components/skill-category";
import { skillCategories } from "@/content/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Programming, web, embedded systems, hardware, engineering, and development tool skills.",
};

export default function SkillsPage() {
  return (
    <Container className="py-12 sm:py-16">
      <PageHeader
        title="Skills"
        description="Grouped skill categories designed for engineering, software, controls, robotics, embedded, and automation applications."
      />
      <section className="mt-10 grid gap-5 md:grid-cols-2" aria-label="Skills">
        {skillCategories.map((category) => (
          <SkillCategory key={category.name} category={category} />
        ))}
      </section>
    </Container>
  );
}
