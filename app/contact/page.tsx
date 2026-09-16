import type { Metadata } from "next";
import { ContactLinks } from "@/components/contact-links";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact links for engineering internship, software, robotics, automation, embedded, and controls opportunities.",
};

export default function ContactPage() {
  return (
    <Container className="py-12 sm:py-16">
      <PageHeader
        title="Contact"
        description="Use these links for internship, project, or recruiting conversations. A contact form can be added later without changing the page structure."
      />
      <section className="mt-10 max-w-2xl">
        <ContactLinks />
      </section>
    </Container>
  );
}
