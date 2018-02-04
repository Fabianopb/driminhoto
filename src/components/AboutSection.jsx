import React, { Component } from 'react';
import './AboutSection.css';
import avatar from '../assets/avatar.png';

class AboutSection extends Component {
  render () {
    const biography = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.';
    return (
      <div className='about-section'>
        <div className='flex-1' hide-xs='true' />
        <div className='content'>
          <div className='photo-container'>
            <img src={avatar} />
          </div>
          <div className='description'>
            <h2 className='title'>Olá</h2>
            <div className='biography'>{ biography }</div>
          </div>
        </div>
        <div className='flex-1' hide-xs='true' />
      </div>
    );
  }
}

export default AboutSection;
