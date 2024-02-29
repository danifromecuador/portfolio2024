import '../styles/components/Hero.css'

export const Hero = () => {
  return (
    <div className="hero">
      <div className="theme">
        <div className="dark-png"></div>
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