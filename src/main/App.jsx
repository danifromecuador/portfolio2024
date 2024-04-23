// src/main/App.jsx
import { useState, useRef } from 'react';
import { Header } from '../left/header/Header.jsx';
import { MainComponent } from '../left/mainComponent/MainComponent.jsx';
import { Navbar } from '../left/navbar/Navbar.jsx';
import { Footer } from '../left/footer/Footer.jsx';
import { About } from '../right/about/About.jsx';
import { Projects } from '../right/projects/Projects.jsx';
import { Skills } from '../right/skills/Skills.jsx';
import { Contact } from '../right/contact/Contact.jsx';
import './App.css';

export const App = () => {
  // Create refs for right side components
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Pass refs as props to Navbar
  const refs = {
    about: aboutRef,
    projects: projectsRef,
    skills: skillsRef,
    contact: contactRef,
  };

  return (
    <div className="app">
      <div className="left">
        <Header />
        <MainComponent />
        <Navbar refs={refs} />
        <Footer />
      </div>
      <div className="right">
        <div ref={aboutRef}><About /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={contactRef}><Contact /></div>
      </div>
    </div>
  );
};
