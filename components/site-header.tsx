import Link from "next/link";
import { Container } from "@/components/container";
import { navigationItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <Container className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link className="font-semibold" href="/">
          {siteConfig.name}
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-foreground" href={item.href}>
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
