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
    <ul className="divide-y divide-border border-y border-border">
      {contactLinks.map((link) => (
        <li key={link.label} className="py-5">
          <p className="text-sm font-medium text-muted">{link.label}</p>
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
