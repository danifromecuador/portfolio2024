import '../styles/components/Footer.css'
import gmail from '../assets/icons/gmail.png'
import linkedin from '../assets/icons/linkedin.png'
import github from '../assets/icons/github.png'

export const Footer = () => {
  return (
    <ul className="footer">
      <li>
        <a href="mailto:danifromecuador@gmail.com">
          <img className='gmail-icon' src={gmail} alt="gmail_icon" />
        </a>
      </li>

      <li>
        <a href="https://www.linkedin.com/in/danifromec/" target='_blank'>
          <img src={linkedin} alt="linkedin_icon" />
        </a>
      </li>

      <li>
        <a href="https://github.com/danifromecuador" target='_blank'>
          <img src={github} alt="github_icon" />
        </a>
      </li>
    </ul>
  )
}