// src/left/header/Header.jsx
import { useState } from 'react'
import { Stores } from '../../store/store.js'
import './Header.css'

export const Header = () => {
  const [hide1, setHide1] = useState("")
  const [hide2, setHide2] = useState("hide")
  const { ThemeSlice } = Stores()
  console.log(ThemeSlice);

  const setDarkTheme = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark')
  }

  const setLightTheme = () => {
    document.querySelector("body").setAttribute('data-theme', 'light')
  }

  const handleHide = () => {
    if (hide1 === "") {
      setHide1("hide")
      setHide2("")
      ThemeSlice.changeThemeToLight()
      setLightTheme()
    } else {
      setHide1("")
      setHide2("hide")
      ThemeSlice.changeThemeToDark()
      setDarkTheme()
    }
  }

  return (
    <div className='Header'>
      <div className={`day_icon ${hide1}`} onClick={() => handleHide()}>
      </div>
      <div className={`night_icon ${hide2}`} onClick={() => handleHide()}>
      </div>
      <div className="sun_bright_shadow"></div>
    </div>
  )
}
