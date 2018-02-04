import React, { Component } from 'react';
import TopBar from '../components/TopBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import './App.css';

class App extends Component {
  render () {
    return (
      <div>
        <TopBar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <div className='app-footer'>Footer</div>
      </div>
    );
  }
}

export default App;
