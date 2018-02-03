import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render () {
    return (
      <div>
        <div className='top-bar'>Top bar</div>
        <div className='hero-section'>Hero</div>
        <div className='about-section'>About</div>
        <div className='skills-section'>Skills</div>
        <div className='projects-section'>Projects</div>
        <div className='app-footer'>Footer</div>
      </div>
    );
  }
}

export default App;
