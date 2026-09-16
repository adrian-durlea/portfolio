import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About the engineering focus, technical interests, and background behind this portfolio.",
};

export default function AboutPage() {
  return (
    <Container className="py-12 sm:py-16">
      <PageHeader
        title="About"
        description="A concise engineering-focused profile. Replace this copy with your specific background, interests, and goals."
      />
      <section className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-muted">
        <p>
          {siteConfig.name} is a computer engineering student building across
          software, embedded systems, controls, automation, and robotics.
        </p>
        <p>
          This page is intentionally structured as editable static content. Add
          your program, year, technical interests, coursework, certifications,
          and the kinds of roles you are targeting.
        </p>
        <p>
          Keep the focus on engineering judgment: what you have built, what
          constraints you worked within, what tools you used, and what measurable
          outcomes came from the work.
        </p>
      </section>
    </Container>
  );
}
