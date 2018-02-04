import React, { Component } from 'react';
import './HeroSection.css';

class HeroSection extends Component {
  render () {
    const heroDescription = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.';
    return (
      <div className='hero-section'>
        <div className='flex-1' hide-xs='true' />
        <div className='content'>
          <div className='description'>{ heroDescription }</div>
          <div className='button-container'>
            <div className='button'>PROJETOS</div>
          </div>
        </div>
        <div className='flex-1' hide-xs='true' />
      </div>
    );
  }
}

export default HeroSection;
