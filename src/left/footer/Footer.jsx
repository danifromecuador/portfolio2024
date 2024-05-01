// src/letf/footer/Footer.jsx
import { Stores } from '../../store/store'
import './Footer.css'

export const Footer = () => {
  const { theme } = Stores().ThemeSlice
  console.log(theme);
  return (
    <div className='Footer'>
      <div className="icons">
        <a className={`${theme} linkedin`} href="https://www.linkedin.com/in/danifromec/" target='_blank'></a>
        <a className={`${theme} github`} href="https://github.com/danifromecuador" target='_blank'></a>
        <a className={`${theme} gmail`} href="mailto:danifromecuador@gmail.com"></a>
        <a className={`${theme} whatsapp`} href="https://wa.me/593980022515" target='_blank'></a>
      </div>
    </div>
  )
}