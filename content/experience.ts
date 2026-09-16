import type { Experience } from "@/content/types";

export const experiences: Experience[] = [
  {
    organization: "Example Engineering Team",
    position: "Software Engineering Intern",
    startDate: "May 2026",
    endDate: "Aug 2026",
    description:
      "Built and maintained internal software tools supporting engineering workflows, automation, and data visibility.",
    accomplishments: [
      "Implemented a typed React interface for monitoring engineering process data.",
      "Improved reliability of a data import workflow with validation and clearer error states.",
      "Collaborated with engineers to translate requirements into maintainable software features.",
    ],
    technologies: ["TypeScript", "React", "Python", "Git"],
    organizationUrl: "https://example.com",
  },
  {
    organization: "Example Robotics Club",
    position: "Controls / Embedded Systems Member",
    startDate: "Sep 2025",
    endDate: null,
    description:
      "Contributed to student robotics work involving sensing, control loops, microcontrollers, and mechanical integration.",
    accomplishments: [
      "Created firmware prototypes for sensor acquisition and actuator control.",
      "Tested control logic on hardware and documented behavior for future iteration.",
      "Worked across software, electrical, and mechanical constraints during integration.",
    ],
    technologies: ["C++", "Arduino", "MATLAB", "Oscilloscope"],
    organizationUrl: "https://example.com",
  },
];
