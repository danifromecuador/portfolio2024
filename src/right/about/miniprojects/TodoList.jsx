import { useState, useEffect } from 'react'
import { Stores } from '../../../store/store'
import './TodoList.css'

export const TodoList = () => {
  const store = Stores()
  const [input, setInput] = useState("")

  const AddTodo = () => (input && (store.TodoList.add(input), setInput("")))
  const showDelBtn = () => store.TodoList.todos.some(item => item.completed)

  useEffect(() => localStorage.setItem("todoList", JSON.stringify(store.TodoList.todos)), [store.TodoList.todos])

  return (
    <div className='TodoList'>
      <h1>Todo List</h1>
      <ul>{store.TodoList.todos.map(e => (
        <li key={e.id}>
          <input type="checkbox" defaultChecked={e.completed} onChange={() => store.TodoList.markAsDone(e)} />
          <span>{e.text}</span>
        </li>))}
      </ul>
      <button className={`${showDelBtn() ? "" : "hide"}`} onClick={() => store.TodoList.deleteAllCompleted()}>
        Delete All Completed
      </button>
      <div>
        <input
          type="text"
          placeholder='Type a new task'
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={k => k.key === "Enter" && AddTodo()}
        />
        <button onClick={() => AddTodo()}>Add</button>
      </div>
    </div>
  )
}