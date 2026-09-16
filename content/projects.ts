import type { Project } from "@/content/types";

export const projects: Project[] = [
  {
    slug: "autonomous-robot-placeholder",
    title: "Autonomous Robot Prototype",
    shortDescription:
      "Placeholder for a robotics project involving sensing, controls, and embedded software.",
    detailedDescription:
      "Replace this with the problem, system architecture, hardware/software stack, and testing approach. Include constraints such as latency, sensor noise, power, or mechanical integration.",
    technologies: ["C++", "ROS", "Python", "PID Control", "CAD"],
    category: "Robotics",
    githubUrl: "https://github.com/yourusername/project-repo",
    demoUrl: "",
    images: [],
    startDate: "Jan 2026",
    endDate: "Apr 2026",
    keyAccomplishments: [
      "Designed a modular control pipeline for sensing, planning, and actuation.",
      "Validated behavior through bench testing and iterative tuning.",
      "Documented hardware constraints and future integration tasks.",
    ],
    featured: true,
  },
  {
    slug: "embedded-data-logger-placeholder",
    title: "Embedded Data Logger",
    shortDescription:
      "Placeholder for an embedded systems project focused on sensor acquisition and storage.",
    detailedDescription:
      "Use this entry for firmware, board-level debugging, peripheral interfaces, and data handling details. Add measurable results such as sampling rate, memory use, or power budget.",
    technologies: ["C", "STM32", "I2C", "SPI", "UART"],
    category: "Embedded Systems",
    githubUrl: "https://github.com/yourusername/project-repo",
    demoUrl: "",
    images: [],
    startDate: "Sep 2025",
    endDate: "Dec 2025",
    keyAccomplishments: [
      "Captured sensor data from multiple peripherals with typed packet formats.",
      "Created a repeatable test procedure for firmware validation.",
      "Reduced debugging time through serial logging and clear hardware notes.",
    ],
    featured: true,
  },
  {
    slug: "portfolio-site-placeholder",
    title: "Engineering Portfolio Website",
    shortDescription:
      "A static-first portfolio architecture built with Next.js, TypeScript, React, and Tailwind CSS.",
    detailedDescription:
      "This project demonstrates content-driven architecture, reusable components, static rendering, SEO metadata, and a deployment-ready structure for Vercel.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    category: "Web Development",
    githubUrl: "https://github.com/yourusername/portfolio",
    demoUrl: "",
    images: [],
    startDate: "Sep 2026",
    endDate: null,
    keyAccomplishments: [
      "Separated content from presentation for projects, experience, and skills.",
      "Configured semantic routes, metadata, robots.txt, and sitemap support.",
      "Kept the frontend intentionally minimal for future visual refinement.",
    ],
    featured: false,
  },
];
