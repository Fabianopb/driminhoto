import React, { Component } from 'react';
import { Divider, Rating } from 'semantic-ui-react';
import './SkillsSection.css';

class SkillsSection extends Component {
  render () {
    const skills = [
      {
        name: 'Solução de problemas',
        rating: 5
      },
      {
        name: 'Criação de textos',
        rating: 5
      },
      {
        name: 'Organização',
        rating: 4
      },
      {
        name: 'Design gráfico',
        rating: 3
      }
    ];
    return (
      <div className='skills-section'>
        <div className='flex-1' hide-xs='true' />
        <div className='content'>
          <Divider horizontal><h2>Principais skills</h2></Divider>
          <div className='skills-container'>
            <div className='names'>
              { skills.map((skill, index) => <div key={index}>{ skill.name }</div>) }
            </div>
            <div className='ratings'>
              {
                skills.map((skill, index) =>
                  <div key={index} className='stars'>
                    <Rating defaultRating={skill.rating} maxRating={5} disabled icon='star' />
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div className='flex-1' hide-xs='true' />
      </div>
    );
  }
}

export default SkillsSection;
