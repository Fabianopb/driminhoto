import React, { Component } from 'react';
import TopBar from '../components/TopBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import AppFooter from '../components/AppFooter';

class App extends Component {
  render () {
    return (
      <div>
        <TopBar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AppFooter />
      </div>
    );
  }
}

export default App;
