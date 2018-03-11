import React from 'react';
import { Divider } from 'semantic-ui-react';
import SectionLayout from './SectionLayout';
import projectImage from '../assets/project-image.png';
import styles from './ProjectsSection.css';

const projects = [
  {
    imageSrc: projectImage,
    name: 'Nome do projeto 1'
  },
  {
    imageSrc: projectImage,
    name: 'Nome do projeto 2'
  },
  {
    imageSrc: projectImage,
    name: 'Nome do projeto 3'
  },
  {
    imageSrc: projectImage,
    name: 'Nome do projeto 4'
  },
  {
    imageSrc: projectImage,
    name: 'Nome do projeto 5'
  }
];

const ProjectsSection = () => (
  <SectionLayout>
    <div className={styles.projectsSection}>
      <div className='flex-1' hide-xs='true' />
      <div className='content'>
        <Divider horizontal><h2>Principais projetos</h2></Divider>
        <div className='projects-grid'>
          {
            projects.map((project, index) =>
              <div key={index} className='project-card'>
                <img src={project.imageSrc} alt='project' />
                <div className='overlay'>
                  <div className='project-name'>{ project.name }</div>
                </div>
              </div>
            )
          }
        </div>
      </div>
      <div className='flex-1' hide-xs='true' />
    </div>
  </SectionLayout>
);

export default ProjectsSection;
