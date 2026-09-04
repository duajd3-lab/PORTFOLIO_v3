import { useState } from 'react';
import { motion } from 'framer-motion';

import { projects } from '../../data/projects';
import type { Project } from '../../types/project';

import ProjectCard from './ProjectCard';
import Popup from './Popup';

import './Project.scss';

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const main = projects.filter(
    (project) => project.featured
  );

  const subs = projects.filter(
    (project) => !project.featured
  );

  // DETAIL 클릭
  const handleDetail = (project: Project) => {
    console.log('팝업 열기:', project);

    setSelectedProject(project);
  };

  // 팝업 닫기
  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section
        id="projects"
        className="projects"
      >
        <div className="project-inner">

          {/* SECTION TITLE */}

          <motion.div
            className="section-kicker"
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <small>
              03 / SELECTED WORK
            </small>

            <h2>
              PROJECT
            </h2>
          </motion.div>


          {/* MAIN PROJECTS */}

          <div className="main-projects">

            {main.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                reverse={index % 2 === 1}
                onDetail={handleDetail}
              />
            ))}

          </div>


          {/* SUB PROJECTS */}

          {subs.length > 0 && (
            <div className="sub-grid">

              {subs.map((project, index) => (
                <motion.div
                  className="sub-card"
                  key={project.id}
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
                  }}
                  transition={{
                    delay: index * 0.12,
                  }}
                >
                  <ProjectCard
                    project={project}
                    onDetail={handleDetail}
                  />

                </motion.div>
              ))}

            </div>
          )}

        </div>
      </section>


      {/* ===============================
          POPUP

          중요:
          projects section 바깥에 위치
      =============================== */}

      {selectedProject && (
        <Popup
          item={selectedProject}
          onClose={handleClose}
        />
      )}
    </>
  );
}