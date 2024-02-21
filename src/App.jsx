import './styles/App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { MainPage } from './pages/MainPage.jsx'
import { Hero } from './components/Hero.jsx'
import { Footer } from './components/Footer.jsx'

export const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="left">     
          < Hero />     
          < Navbar />
          < Footer />
        </div>
        <div className="right">
          < MainPage />
        </div>
      </div>
    </Router>
  )
}

export default App
