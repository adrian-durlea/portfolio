export type ProjectImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  demoUrl?: string;
  devpostUrl?: string;
  role?: string;
  award?: string;
  images: ProjectImage[];
  timeline?: string;
  keyAccomplishments: string[];
  featured: boolean;
};

export type Experience = {
  organization: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string;
  accomplishments: string[];
  technologies: string[];
  organizationUrl?: string;
};

export type SkillCategory = {
  name: string;
  skills: string[];
};
