export interface Project {
  id: string;
  title: string;
  description: string;
  url?: string;
  githubUrl?: string;
  tags: string[];
  type: 'dev' | 'design';
}

export interface Experience {
  company: string;
  role: string;
  description: string;
  period: string;
  url?: string;
  type: 'work' | 'education';
}

export interface SkillCategory {
  id: string;
  label: string;
  sublabel: string;
  color: 'orange' | 'lime';
  icon: 'layers' | 'layout';
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}
