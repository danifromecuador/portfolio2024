import '../styles/components/Hero.css'
import sun2 from '../assets/images/sun2.png'

export const Hero = () => {
  return (
    <div className="hero">
      <div className="theme">
        <div className="sun-bright-shadow"></div>
        <img className='sun-png' src={sun2} alt="" />
        <div className="light-png"></div>
      </div>
      <div className="hero-name">
        <p>Hey There,</p>
        <p>I&apos;m Dani.</p>
      </div>
      <div className="hero-img"></div>
      <div className="hero-about">
        I can help you build a product , feature or website. Look through some of my work and experience!
      </div>
    </div>
  )
}