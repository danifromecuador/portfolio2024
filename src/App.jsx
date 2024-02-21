import './styles/App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './components/Navbar'

export const App = () => {
  return (
    <Router>
      <div className="app">
        < Navbar />
      </div>
    </Router>
  )
}

export default App
