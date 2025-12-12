export interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Hard' | 'Soft';
  color: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export enum Section {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  SKILLS = 'SKILLS',
  PROJECTS = 'PROJECTS',
  CONTACT = 'CONTACT'
}