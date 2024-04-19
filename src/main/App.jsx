// src/main/App.jsx
import { Header } from '../left/header/Header.jsx'
import { MainComponent } from '../left/mainComponent/MainComponent.jsx'
import { Navbar } from '../left/navbar/Navbar.jsx'
import { Footer } from '../left/footer/Footer.jsx'
import { About } from '../right/about/About.jsx'
import { Projects } from '../right/projects/Projects.jsx'
import { Skills } from '../right/skills/Skills.jsx'
import { Contact } from '../right/contact/Contact.jsx'
import './App.css'

export const App = () => {
  return (
    <div className="app">
      <div className="left">
        <Header />
        <MainComponent />
        <Navbar />
        <Footer />
      </div>
      <div className="right">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}
