// src/left/header/Header.jsx
import { useState } from 'react'
import './Header.css'

export const Header = () => {
  const [hide1, setHide1] = useState("")
  const [hide2, setHide2] = useState("hide")
  const handleHide = () => {
    if (hide1 === "") {
      setHide1("hide")
      setHide2("")
    } else {
      setHide1("")
      setHide2("hide")
    }
  }
  return (
    <div className='Header'>
      <div className={`day_icon ${hide1}`} onClick={() => handleHide()}>
      </div>
      <div className={`night_icon ${hide2}`} onClick={() => handleHide()}>
      </div>
    </div>
  )
}