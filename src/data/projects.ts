import projectData from './project.json';

import type {
  Project,
  ProjectLinks,
  Troubleshooting,
} from '../types/project';


interface ProjectJson {
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
}


const data = projectData as ProjectJson[];


export const projects: Project[] =
  data.map((project, index) => ({
    ...project,

    /* JSON에는 없는 값 자동 생성 */
    id: index + 1,

    /*
      카드 대표 이미지
      Swiper에서는 images 전체 사용
    */
    image: project.images[0],

    /*
      카드 위 작은 영문/설명
      일단 subTitle 재활용
    */
    eyebrow: project.subTitle,

    /*
      ProjectCard의 설명 부분에서는
      features 중 앞 2개만 사용
    */
    description:
      project.features.slice(0, 2),

    /*
      앞 3개를 메인 프로젝트로
      Weather Mood
      StorePilot
      PORTFOLIO
    */
    featured: index < 3,
  }));