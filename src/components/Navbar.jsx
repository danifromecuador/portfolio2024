// Navbar.js
import { useState, useEffect } from 'react';
import '../styles/components/Navbar.css';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        block: 'start',
      });

      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Use Intersection Observer to determine which section is in the viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.8 } // Adjust the threshold as needed
      );

      // Observe each section
      ['header', 'projects', 'skills', 'contact'].forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the observer on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className='navbar'>
      <button
        onClick={() => scrollToSection('header')}
        className={`header ${activeSection === 'header' ? 'active' : ''}`}
      >
        About Me
      </button>
      <button
        onClick={() => scrollToSection('projects')}
        className={`projects ${activeSection === 'projects' ? 'active' : ''}`}
      >
        Projects
      </button>
      <button
        onClick={() => scrollToSection('skills')}
        className={`skills ${activeSection === 'skills' ? 'active' : ''}`}
      >
        Skills
      </button>
      <button
        onClick={() => scrollToSection('contact')}
        className={`contact ${activeSection === 'contact' ? 'active' : ''}`}
      >
        Contact
      </button>
    </nav>
  );
};
