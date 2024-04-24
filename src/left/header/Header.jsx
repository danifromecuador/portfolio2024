// src/left/header/Header.jsx
import { useState, useEffect } from 'react'
import { Stores } from '../../store/store.js'
import './Header.css'

export const Header = () => {
  const [hide1, setHide1] = useState("") // for showing - hidding day_icon icon
  const [hide2, setHide2] = useState("") // for showing - hidding night_icon icon
  const { ThemeSlice } = Stores()  // get current theme from the store

  // change the colors on index.css and those colors can be used overall .css files
  const setLightTheme = () => document.querySelector("body").setAttribute('data-theme', 'light')
  const setDarkTheme = () => document.querySelector("body").setAttribute('data-theme', 'dark')

  useEffect(() => {
    if (ThemeSlice.theme === "light") {
      setLightTheme();
      setHide1("hide");
      setHide2("")
    }
    else {
      setDarkTheme();
      setHide1("");
      setHide2("hide")
    }
  }, [ThemeSlice.theme])

  const changeTheme = () => ThemeSlice.theme === "light" ? ThemeSlice.changeThemeToDark() : ThemeSlice.changeThemeToLight()

  return (
    <div className='Header'>
      <div className={`day_icon ${hide1}`} onClick={() => changeTheme()}></div>
      <div className={`night_icon ${hide2}`} onClick={() => changeTheme()}></div>
      <div className={`sun_bright_shadow ${hide1}`}></div>
      <div className={`moon_bright_shadow ${hide2}`}></div>
    </div>
  )
}
