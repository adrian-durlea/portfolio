export const siteConfig = {
  name: "Your Name",
  description:
    "Engineering and software portfolio focused on projects, technical experience, embedded systems, robotics, automation, and controls.",
  introduction:
    "Computer engineering student interested in software engineering, controls, robotics, embedded systems, mechatronics, and automation. This portfolio highlights technical projects and engineering experience.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com",
  links: {
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername",
    resume: "/resume.pdf",
  },
} as const;
