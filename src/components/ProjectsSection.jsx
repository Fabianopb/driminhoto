import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';
import SectionLayout from './SectionLayout';
import styles from './ProjectsSection.module.scss';

const ProjectsSection = ({projects}) => (
  <SectionLayout>
    <div className={styles.projectsSection}>
      <div className='flex-1' hide-xs='true' />
      <div className={styles.content}>
        <Divider horizontal><h2>Principais projetos</h2></Divider>
        <div className={styles.projectsGrid}>
          {
            projects.map((project, index) =>
              <div key={index} className={styles.projectCard}>
                <img src={project.imageSrc} alt='project' />
                <div className={styles.overlay}>
                  <div className={styles.projectName}>{ project.name }</div>
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

ProjectsSection.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectsSection;
