import { siteConfig } from "@/content/site";

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${siteConfig.links.email}`,
    value: siteConfig.links.email,
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    value: siteConfig.links.linkedin,
  },
  {
    label: "GitHub",
    href: siteConfig.links.github,
    value: siteConfig.links.github,
  },
];

export function ContactLinks() {
  return (
    <ul className="schematic-panel divide-y divide-border">
      {contactLinks.map((link) => (
        <li key={link.label} className="px-5 py-5">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
            {link.label}
          </p>
          <a
            className="mt-1 block break-words text-base font-medium underline"
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
          >
            {link.value}
          </a>
        </li>
      ))}
    </ul>
  );
}
