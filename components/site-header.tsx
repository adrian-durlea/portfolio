import Link from "next/link";
import { Container } from "@/components/container";
import { navigationItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="header-inner">
        <Link className="site-name" href="/#about">{siteConfig.name}<span className="text-accent">.</span></Link>
        <nav aria-label="Main navigation"><ul className="nav-links">{navigationItems.map(item => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></nav>
      </Container>
    </header>
  );
}
