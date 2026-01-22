
export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface Education {
  title: string;
  institution: string;
  date: string;
  extra?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}
