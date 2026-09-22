export const siteConfig = {
  name: "Adrian Durlea",
  description: "Adrian Durlea is a Mechatronics & Robotics Engineering student at Queen's University, building across software, electronics, and interactive systems.",
  introduction: "I’m a Mechatronics & Robotics Engineering student at Queen’s University. I enjoy bringing software and hardware together, from rocket avionics and VR experiments to thoughtful, accessible web apps.",
  education: "Bachelor of Mechatronics & Robotics Engineering",
  university: "Queen’s University",
  educationPeriod: "2025 – Present",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  links: {
    email: "adriandurlea23@gmail.com",
    github: "https://github.com/BeepBoopEatPoop",
    linkedin: "https://www.linkedin.com/in/adrian-durlea-337ba52a9",
    devpost: "https://devpost.com/adriandurlea23",
    resume: "/resume.pdf",
  },
} as const;
