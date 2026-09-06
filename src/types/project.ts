export interface ProjectLinks {
  site?: string;
  github?: string;
}

export interface Troubleshooting {
  problem: string;
  cause?: string;
  solution: string;
  result: string;
}

export interface Project {
  // JSON에는 없고 projects.ts에서 자동 생성
  id: number;

  // JSON 데이터
  title: string;
  subTitle: string;
  period: string;
  images: string[];
  skills: string[];
  links: ProjectLinks;
  team: string;
  work: string[];
  features: string[];
  troubleshooting: Troubleshooting[];

  // 카드 화면용으로 projects.ts에서 생성
  image: string;
  eyebrow: string;
  description: string[];
  featured: boolean;
}