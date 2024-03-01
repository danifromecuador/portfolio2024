import '../styles/components/Navbar.css'

export const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start', //is this line necessary?
      });
    }
  };
  return (
    <nav className='navbar'>
      <button onClick={() => scrollToSection('header')}>About Me</button>
      <button onClick={() => scrollToSection('projects')}>Projects</button>
      <button className='skills-btn' onClick={() => scrollToSection('skills')}>Skills</button>
      <button onClick={() => scrollToSection('contact')}>Contact</button>
    </nav>
  )
}