import React, { Component } from 'react';
import TopBar from '../components/TopBar';
import HeroSection from '../components/HeroSection';
import './App.css';

class App extends Component {
  render () {
    return (
      <div>
        <TopBar />
        <HeroSection />
        <div className='about-section'>About</div>
        <div className='skills-section'>Skills</div>
        <div className='projects-section'>Projects</div>
        <div className='app-footer'>Footer</div>
      </div>
    );
  }
}

export default App;
