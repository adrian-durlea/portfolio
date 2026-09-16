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
  images: ProjectImage[];
  startDate: string;
  endDate: string | null;
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
  organizationUrl: string;
};

export type SkillCategory = {
  name: string;
  skills: string[];
};
