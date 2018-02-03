import React, { Component } from 'react';
import './index.scss';

class App extends Component {
  render () {
    return (
      <div>
        <div className='top-bar'>Top bar</div>
        <div className='hero-section'>Hero</div>
        <div className='about-section'>About</div>
        <div className='skills-section'>Skills</div>
        <div className='projects-section'>Projects</div>
      </div>
    );
  }
}

export default App;
