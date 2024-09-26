import { useState } from 'react'
import './TodoList.css'

export const TodoList = () => {
  const [input, setInput] = useState("")
  const array = ["a", "b", "c"]
  return (
    <div className='TodoList'>
      <h1>Todo List</h1>
      <ul>{array.map(e => (
        <li>
          <input type="checkbox" />
          <span>{e}</span>
        </li>))}
      </ul>
      <button>Delete All Completed</button>
      <div>
        <input
          type="text"
          placeholder='Type a todo'
        />
        <button>
          Add
        </button>
      </div>
    </div>
  )
}