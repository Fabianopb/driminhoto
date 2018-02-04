import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import projectImage from '../assets/project-image.png';
import './ProjectsSection.css';

class ProjectsSection extends Component {
  render () {
    // const biography = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.';
    return (
      <div className='projects-section'>
        <div className='flex-1' hide-xs='true' />
        <div className='content'>
          <Divider horizontal><h2>Meus principais projetos</h2></Divider>
          <div className='projects-grid'>
            <div className='project-card'>
              <img src={projectImage} alt='project' />
              <div className='overlay'>
                <div>Nome do projeto</div>
              </div>
            </div>
            <div className='project-card'>
              <img src={projectImage} alt='project' />
              <div className='overlay'>
                <div>Nome do projeto</div>
              </div>
            </div>
            <div className='project-card'>
              <img src={projectImage} alt='project' />
              <div className='overlay'>
                <div>Nome do projeto</div>
              </div>
            </div>
            <div className='project-card'>
              <img src={projectImage} alt='project' />
              <div className='overlay'>
                <div>Nome do projeto</div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1' hide-xs='true' />
      </div>
    );
  }
}

export default ProjectsSection;
