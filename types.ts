export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface SkillDetail {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: (string | SkillDetail)[];
}

export interface Education {
  school: string;
  degree: string;
  year?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; 
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SKILLS = 'skills',
  WORKS = 'works',
  CONTACT = 'contact',
}