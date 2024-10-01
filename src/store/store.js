import { create } from "zustand";
import { devtools } from 'zustand/middleware';
import { TodoList } from "../right/about/miniprojects/TodoList";

const ThemeSlice = (set) => ({
  theme: JSON.parse(localStorage.getItem("theme")) || "light",

  changeThemeToLight: () => {
    localStorage.setItem("theme", JSON.stringify("light"))
    set((state) => ({ ThemeSlice: { ...state.ThemeSlice, theme: "light" } }))
  },

  changeThemeToDark: () => {
    localStorage.setItem("theme", JSON.stringify("dark"))
    set((state) => ({ ThemeSlice: { ...state.ThemeSlice, theme: "dark" } }))
  },
})

const BearSlice = () => ({
  bears: 23,
})

const TodoListSlice = set => ({
  todos: JSON.parse(localStorage.getItem("todoList")) || [],
  add: (input) => (set(state => ({
    TodoList: {
      ...state.TodoList,
      todos: [...state.TodoList.todos, {
        id: Date.now(), text: input, completed: false
      }]
    }
  }))),
  markAsDone: (e) => (set(state => {
    let index = 0
    for (let i = 0; i < state.TodoList.todos.length; i++) {
      if (state.TodoList.todos[i].id === e.id) index = i
    }
    let newTodos = [...state.TodoList.todos]
    newTodos[index].completed = true
    return ({
      TodoList: {
        ...state.TodoList,
        todos: newTodos
      }
    })
  })),
  deleteAllCompleted: () => (set(state => {
    let notCompleted = []
    for (let i = 0; i < state.TodoList.todos.length; i++) {
      if (state.TodoList.todos[i].completed === false) notCompleted.push(state.TodoList.todos[i])
    }
    return ({
      TodoList: {
        ...state.TodoList,
        todos: notCompleted
      }
    })
  }))
})

export const Stores = create(devtools((set) => ({
  ThemeSlice: ThemeSlice(set),
  BearSlice: BearSlice(),
  TodoList: TodoListSlice(set)
})))
