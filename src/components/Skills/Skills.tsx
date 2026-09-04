import { motion } from 'framer-motion';
import './Skills.scss';

interface SkillGroup {
  title: string;
  icons?: {
    src: string;
    alt: string;
  }[];
  sections: {
    name: string;
    descriptions: string[];
  }[];
}

const skillGroups: SkillGroup[] = [
  {
    title: 'FRONTEND',
    icons: [
      { src: '/svg/html.svg', alt: 'HTML5' },
      { src: '/svg/css.svg', alt: 'CSS3' },
      { src: '/svg/js.svg', alt: 'JavaScript' },
      { src: '/svg/react.svg', alt: 'React' },
      { src: '/svg/next.svg', alt: 'Next.js' },
    ],
    sections: [
      {
        name: 'HTML5 / CSS3 / JavaScript',
        descriptions: [
          '시맨틱 마크업을 기반으로 구조적인 웹 페이지를 구현할 수 있습니다.',
          '반응형 웹과 사용자 인터랙션 구현 경험이 있습니다.',
          '유지보수를 고려한 구조와 스타일 설계가 가능합니다.',
        ],
      },
      {
        name: 'React / Next.js',
        descriptions: [
          '컴포넌트 기반 구조 설계와 재사용 중심 개발이 가능합니다.',
          'React Router를 활용한 SPA 구성 경험이 있습니다.',
          'Next.js 기반 프로젝트 개발 경험이 있습니다.',
        ],
      },
    ],
  },

  {
    title: 'UI / UX',
    icons: [
      { src: '/svg/sass.svg', alt: 'SCSS' },
      { src: '/svg/figma.svg', alt: 'Figma' },
    ],
    sections: [
      {
        name: 'SCSS / Figma',
        descriptions: [
          'SCSS를 활용한 공통 스타일 관리와 반응형 UI 구현이 가능합니다.',
          'Figma를 활용해 UI 구조를 파악하고 디자인을 웹 화면으로 구현할 수 있습니다.',
          '사용자 흐름과 화면 구조를 고려한 인터페이스 구현을 중요하게 생각합니다.',
        ],
      },
    ],
  },

  {
    title: 'COLLABORATION',
    icons: [
      { src: '/svg/git.svg', alt: 'Git' },
      { src: '/svg/vercel.svg', alt: 'Vercel' },
    ],
    sections: [
      {
        name: 'Git / GitHub / Vercel',
        descriptions: [
          'Git을 활용한 브랜치 관리와 버전 관리 경험이 있습니다.',
          'GitHub를 통한 팀 프로젝트 협업 경험이 있습니다.',
          'Vercel을 활용한 프론트엔드 프로젝트 배포 경험이 있습니다.',
        ],
      },
    ],
  },

  {
    title: 'STATE & DATA',
    sections: [
      {
        name: 'Axios / REST API / Firebase / MongoDB',
        descriptions: [
          'Axios와 Fetch API를 활용한 비동기 데이터 처리 경험이 있습니다.',
          'REST API 기반 서비스 연동과 데이터 흐름을 이해하고 있습니다.',
          'Firebase Authentication과 MongoDB를 활용한 프로젝트 경험이 있습니다.',
        ],
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-inner">
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <small>02 / WHAT I USE</small>
          <h2>SKILLS</h2>

          <p>
            사용자 경험을 구현하기 위해 필요한 기술을 학습하고,
            <br />
            프로젝트에 직접 적용하며 경험을 쌓아가고 있습니다.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-card"
              key={group.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="skill-card-top">
                <div>
                  <span className="skill-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3>{group.title}</h3>
                </div>

                {group.icons && (
                  <div className="skill-icons">
                    {group.icons.map((icon) => (
                      <div className="skill-icon" key={icon.alt}>
                        <img
                          src={icon.src}
                          alt={icon.alt}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="skill-content">
                {group.sections.map((section) => (
                  <div
                    className="skill-section"
                    key={section.name}
                  >
                    <h4>{section.name}</h4>

                    <ul>
                      {section.descriptions.map((description) => (
                        <li key={description}>
                          {description}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}