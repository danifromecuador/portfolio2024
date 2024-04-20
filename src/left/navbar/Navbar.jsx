// src/left/navbar/Navbar.jsx
import { useState } from 'react'
import './Navbar.css'

export const Navbar = () => {
  const [hovered1, setHovered1] = useState("")
  const [hovered2, setHovered2] = useState("")
  const [hovered3, setHovered3] = useState("")
  const [hovered4, setHovered4] = useState("")

  return (
    <nav className='Navbar'>
      <li
        onMouseMove={() => setHovered1("hovered")}
        onMouseLeave={() => setHovered1("")}>
        <span className={hovered1}>About Me</span>
      </li>
      <li
        onMouseMove={() => setHovered2("hovered")}
        onMouseLeave={() => setHovered2("")}>
        <span className={hovered2}>Projects</span>
      </li>
      <li
        onMouseMove={() => setHovered3("hovered")}
        onMouseLeave={() => setHovered3("")}>
        <span className={hovered3}>Skills</span>
      </li>
      <li
        onMouseMove={() => setHovered4("hovered")}
        onMouseLeave={() => setHovered4("")}>
        <span className={hovered4}>Contact</span>
      </li>
    </nav>
  )
}