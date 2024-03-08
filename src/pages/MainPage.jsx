// MainPage.js
import React, { useRef } from 'react';
import '../styles/pages/MainPage.css';

export const MainPage = () => {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="main-page">
      <div id="header" ref={headerRef}>
        header
      </div>
      <div id="projects" ref={projectsRef}>
        projects
      </div>
      <div id="skills" ref={skillsRef}>
        skills
      </div>
      <div id="contact" ref={contactRef}>
        <p>contact</p>
        If you like what you see and have a project you need coded, don’t hesitate to contact me.
      </div>
    </div>
  );
};
