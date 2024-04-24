// src/letf/footer/Footer.jsx
import { Stores } from '../../store/store'
import './Footer.css'

export const Footer = () => {
  const { theme } = Stores().ThemeSlice
  console.log(theme);
  return (
    <div className='Footer'>
      <div className="icons">
        <div className={`${theme} linkedin`}></div>
        <div className={`${theme} github`}></div>
        <div className={`${theme} gmail`}></div>
        <div className={`${theme} whatsapp`}></div>
      </div>
    </div>
  )
}