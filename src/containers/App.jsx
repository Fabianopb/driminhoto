import React, { Component } from 'react';
import projectImage from '../assets/project-image.png';
import TopBar from '../components/TopBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import AppFooter from '../components/AppFooter';

class App extends Component {
  state = {
    heroDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    biography: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    skills: [
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
    ],
    projects: [
      {
        imageSrc: projectImage,
        name: 'Nome do projeto 1'
      },
      {
        imageSrc: projectImage,
        name: 'Nome do projeto 2'
      },
      {
        imageSrc: projectImage,
        name: 'Nome do projeto 3'
      },
      {
        imageSrc: projectImage,
        name: 'Nome do projeto 4'
      },
      {
        imageSrc: projectImage,
        name: 'Nome do projeto 5'
      }
    ]
  };
  render () {
    const { heroDescription, biography, skills, projects } = this.state;
    return (
      <div>
        <TopBar />
        <HeroSection heroDescription={heroDescription} />
        <AboutSection biography={biography} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <AppFooter />
      </div>
    );
  }
}

export default App;
