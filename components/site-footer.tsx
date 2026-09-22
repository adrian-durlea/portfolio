import { Container } from "@/components/container";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return <footer className="border-t border-border"><Container className="flex flex-wrap gap-4 justify-between py-7 text-xs text-muted"><p>© {new Date().getFullYear()} {siteConfig.name}</p><Link href="/#about">Back to top ↑</Link></Container></footer>;
}
