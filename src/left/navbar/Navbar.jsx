// src/left/navbar/Navbar.jsx
import { useState, useEffect } from 'react'
import { Stores } from '../../store/store.js'
import './Navbar.css'

export const Navbar = () => {
  const { ThemeSlice } = Stores()
  const theme = ThemeSlice.theme

  const [activeSection, setActiveSection] = useState("")
  const [hovered1, setHovered1] = useState("")
  const [hovered2, setHovered2] = useState("")
  const [hovered3, setHovered3] = useState("")
  const [hovered4, setHovered4] = useState("")

  const scrollToComponent = (componentId) => {
    document.getElementById(componentId).scrollIntoView({ behavior: 'smooth' })
    setActiveSection(componentId)
  }
  // mark a navbar link as active when scrolling over right components
  useEffect(() => {
    const handleScroll = () => {
      // Use Intersection Observer to determine which section is in the viewport
      const observer = new IntersectionObserver(
        (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id) }) },
        { threshold: 0.8 }
      );  // don't delete this semicolon!!!
      // Observe each section
      ['about', 'projects', 'skills', 'contact'].forEach((id) => {
        const element = document.getElementById(id)
        if (element) observer.observe(element)
      })
    }
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)
    // Cleanup the observer on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className='Navbar'>
      <li
        onClick={() => scrollToComponent("about")}
        onMouseMove={() => setHovered1("hovered")}
        onMouseLeave={() => setHovered1("")}>
        <span className={`${theme} ${activeSection === 'about' ? 'active' : ''} ${hovered1}`}>About Me</span>
      </li>
      <li
        onClick={() => scrollToComponent("projects")}
        onMouseMove={() => setHovered2("hovered")}
        onMouseLeave={() => setHovered2("")}>
        <span className={`${theme} ${activeSection === 'projects' ? 'active' : ''} ${hovered2}`}>Projects</span>
      </li>
      <li
        onClick={() => scrollToComponent("skills")}
        onMouseMove={() => setHovered3("hovered")}
        onMouseLeave={() => setHovered3("")}>
        <span className={`${theme} ${activeSection === 'skills' ? 'active' : ''} ${hovered3}`}>Skills</span>
      </li>
      <li
        onClick={() => scrollToComponent("contact")}
        onMouseMove={() => setHovered4("hovered")}
        onMouseLeave={() => setHovered4("")}>
        <span className={`${theme} ${activeSection === 'contact' ? 'active' : ''} ${hovered4}`}>Contact</span>
      </li>
    </nav>
  )
}
