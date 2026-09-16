import Link from "next/link";
import { Container } from "@/components/container";
import { navigationItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background/85 backdrop-blur">
      <Container className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link
          className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-accent"
          href="/"
        >
          {siteConfig.name}
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-accent" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
