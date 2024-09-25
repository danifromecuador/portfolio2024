import './About.css'

export const About = () => {
  return (
    <div className='About' id='about'>
      <h1>I'm a Full Stack Web Developer!</h1>
      <p>With a background in Mechatronics and Electronics Engineeering. I the last year, I've spent 1200+ hours coding and working in a remote environment, collaborating with a distributed team around the world, using pair programming, async communication and daily stand ups</p>
      <div className="projects">
        <div className="todo">
          TODO LIST
        </div>
        <div className="calculator">
          CALCULATOR
        </div>
        <div className="tic-tac-toe">
          TIC TAC TOE
        </div>
      </div>
    </div>
  )
}