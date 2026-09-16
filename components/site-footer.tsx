import { Container } from "@/components/container";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background/70">
      <Container className="flex flex-col gap-3 py-6 font-mono text-xs uppercase tracking-[0.12em] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="text-accent">{siteConfig.name}</p>
        <p>Built with Next.js, TypeScript, React, and Tailwind CSS.</p>
      </Container>
    </footer>
  );
}
