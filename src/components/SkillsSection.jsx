import React, { Component } from 'react';
import { Divider, Rating } from 'semantic-ui-react';
import './SkillsSection.css';

class SkillsSection extends Component {
  render () {
    // const biography = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.';
    return (
      <div className='skills-section'>
        <div className='flex-1' hide-xs='true' />
        <div className='content'>
          <Divider horizontal><h2>Meus principais skills</h2></Divider>
          <div className='skills-container'>
            <div className='names'>
              <div>Solução de problemas</div>
              <div>Criação de textos</div>
              <div>Organização</div>
              <div>Design gráfico</div>
            </div>
            <div className='ratings'>
              <div className='stars'>
                <Rating defaultRating={5} maxRating={5} disabled icon='star' />
              </div>
              <div className='stars'>
                <Rating defaultRating={5} maxRating={5} disabled icon='star' />
              </div>
              <div className='stars'>
                <Rating defaultRating={4} maxRating={5} disabled icon='star' />
              </div>
              <div className='stars'>
                <Rating defaultRating={3} maxRating={5} disabled icon='star' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1' hide-xs='true' />
      </div>
    );
  }
}

export default SkillsSection;
