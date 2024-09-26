import { TodoList } from '../about/miniprojects/TodoList'
import './Projects.css'

export const Projects = () => {
  return (
    <div className='Projects' id='projects'>
      Projects Component
      <div>
        <TodoList />
      </div>
    </div>
  )
}