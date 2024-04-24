// src/left/navbar/Navbar.jsx
import { useState } from 'react'
import { Stores } from '../../store/store.js'
import './Navbar.css'

export const Navbar = () => {
  const { ThemeSlice } = Stores()
  const theme = ThemeSlice.theme

  const [hovered1, setHovered1] = useState("")
  const [hovered2, setHovered2] = useState("")
  const [hovered3, setHovered3] = useState("")
  const [hovered4, setHovered4] = useState("")
  const [active1, setActive1] = useState("")
  const [active2, setActive2] = useState("")
  const [active3, setActive3] = useState("")
  const [active4, setActive4] = useState("")

  const scrollToComponent = (component) => document.getElementById(component).scrollIntoView({ behavior: 'smooth' })

  const handleClick = (component) => {
    if (component === "about") { scrollToComponent("about"); setActive1("active"); setActive2(""); setActive3(""); setActive4("") }
    if (component === "projects") { scrollToComponent("projects"); setActive1(""); setActive2("active"); setActive3(""); setActive4("") }
    if (component === "skills") { scrollToComponent("skills"); setActive1(""); setActive2(""); setActive3("active"); setActive4("") }
    if (component === "contact") { scrollToComponent("contact"); setActive1(""); setActive2(""); setActive3(""); setActive4("active") }
  }

  return (
    <nav className='Navbar'>
      <li
        onClick={() => handleClick("about")}
        onMouseMove={() => setHovered1("hovered")}
        onMouseLeave={() => setHovered1("")}>
        <span className={`${theme} ${active1} ${hovered1}`}>About Me</span>
      </li>
      <li
        onClick={() => handleClick("projects")}
        onMouseMove={() => setHovered2("hovered")}
        onMouseLeave={() => setHovered2("")}>
        <span className={`${theme} ${active2} ${hovered2}`}>Projects</span>
      </li>
      <li
        onClick={() => handleClick("skills")}
        onMouseMove={() => setHovered3("hovered")}
        onMouseLeave={() => setHovered3("")}>
        <span className={`${theme} ${active3} ${hovered3}`}>Skills</span>
      </li>
      <li
        onClick={() => handleClick("contact")}
        onMouseMove={() => setHovered4("hovered")}
        onMouseLeave={() => setHovered4("")}>
        <span className={`${theme} ${active4} ${hovered4}`}>Contact</span>
      </li>
    </nav>
  );
};
