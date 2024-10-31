import { TodoList } from '../about/miniprojects/TodoList'
import { Calculator } from './miniprojects/Calculator'
import { TicTacToe } from './miniprojects/TicTacToe'
import './About.css'

export const About = () => {
  return (
    <div className='About' id='about'>
      <h1>I&apos;m a Full Stack Web Developer!</h1>
      <p>With a background in Mechatronics and Electronics Engineeering. I the last year, I&apos;ve spent 1200+ hours coding and working in a remote environment, collaborating with a distributed team around the world, using pair programming, async communication and daily stand ups</p>
      <div className="projects">
          <TodoList />
          <Calculator />
          <TicTacToe />
      </div>
    </div>
  )
}