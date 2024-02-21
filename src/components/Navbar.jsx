import { Link } from "react-router-dom"
import '../styles/components/Navbar.css'

export const Navbar = () => {
  return (
    <div className="navbar">
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/contact">Contact</Link>
    </div>
  )
}