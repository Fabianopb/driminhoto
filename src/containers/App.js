import React, { Component } from 'react';
import TopBar from '../components/TopBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import './App.css';

class App extends Component {
  render () {
    return (
      <div>
        <TopBar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <div className='projects-section'>Projects</div>
        <div className='app-footer'>Footer</div>
      </div>
    );
  }
}

export default App;
