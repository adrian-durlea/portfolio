import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ExperienceItem } from "@/components/experience-item";
import { PageHeader } from "@/components/page-header";
import { experiences } from "@/content/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Technical experience, engineering work, internships, and project-based accomplishments.",
};

export default function ExperiencePage() {
  return (
    <Container className="py-12 sm:py-16">
      <PageHeader
        title="Experience"
        description="A reusable experience timeline for internships, engineering roles, research, student teams, and technical involvement."
      />
      <section className="mt-10 space-y-6" aria-label="Experience timeline">
        {experiences.map((experience) => (
          <ExperienceItem
            key={`${experience.organization}-${experience.position}`}
            experience={experience}
          />
        ))}
      </section>
    </Container>
  );
}
