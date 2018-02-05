import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import projectImage from '../assets/project-image.png';
import './ProjectsSection.css';

class ProjectsSection extends Component {
  render () {
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
    return (
      <div className='projects-section'>
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
    );
  }
}

export default ProjectsSection;
