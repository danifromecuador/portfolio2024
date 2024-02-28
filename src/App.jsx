import './styles/App.css'
import { Navbar } from './components/Navbar'
import { MainPage } from './pages/MainPage.jsx'
import { Hero } from './components/Hero.jsx'
import { Footer } from './components/Footer.jsx'

export const App = () => {
  return (
      <div className="app">
        <div className="left">     
          < Hero />     
          < Navbar />
          < Footer />
        </div>
        <div className="right">
          < MainPage />
        </div>
      </div>
  )
}

export default App
