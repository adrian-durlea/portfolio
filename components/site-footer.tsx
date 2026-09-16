import { Container } from "@/components/container";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-3 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{siteConfig.name}</p>
        <p>Built with Next.js, TypeScript, React, and Tailwind CSS.</p>
      </Container>
    </footer>
  );
}
