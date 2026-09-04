import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import type { Project } from '../../types/project';

interface Props {
  project: Project;
  reverse?: boolean;
  onDetail: (project: Project) => void;
}

export default function ProjectCard({
  project,
  reverse = false,
  onDetail,
}: Props) {
  return (
    <motion.article
      className={`project-row ${reverse ? 'reverse' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65 }}
    >
      {/* 이미지 */}
      <motion.div
        className="art-wrap"
        initial={{
          opacity: 0,
          x: reverse ? 70 : -70,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="art">
          <div className="project-image-wrap">
            <img
              src={project.image}
              alt={`${project.title} 프로젝트`}
              className="project-image"
            />

            <span className="image-index">
              {String(project.id).padStart(2, '0')}
            </span>
          </div>
        </div>
      </motion.div>

      {/* 내용 */}
      <motion.div
        className="project-copy"
        initial={{
          opacity: 0,
          x: reverse ? -70 : 70,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="number">
          {String(project.id).padStart(2, '0')}
        </span>

        <h3>{project.title}</h3>

        <p className="project-subtitle">
          {project.subTitle}
        </p>

        <ul>
          {project.description.map((description, index) => (
            <li key={index}>
              {description}
            </li>
          ))}
        </ul>

        <p className="label">
          TECH STACK
        </p>

        <div className="tags">
          {project.skills.map((skill) => (
            <span key={skill}>
              {skill}
            </span>
          ))}
        </div>

        <div className="buttons">
          {project.links?.site && (
            <a
              href={project.links.site}
              target="_blank"
              rel="noopener noreferrer"
            >
              SITE
              <FiArrowUpRight />
            </a>
          )}

          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
              <FiGithub />
            </a>
          )}

          {/* 중요 */}
          <button
            type="button"
            className="detail-btn"
            onClick={() => {
              console.log('DETAIL CLICK:', project.title);
              onDetail(project);
            }}
          >
            DETAIL
            <FiArrowUpRight />
          </button>
        </div>
      </motion.div>
    </motion.article>
  );
}