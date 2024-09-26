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

const TodoListSlice = (set) => ({
  todos: [],
  add: (input) => (set(state => ({
    TodoList: {
      ...state.TodoList,
      todos: [...state.TodoList.todos, {
        id: Date.now(), text: input, completed: false
      }]
    }
  })))
})

export const Stores = create(devtools((set) => ({
  ThemeSlice: ThemeSlice(set),
  BearSlice: BearSlice(),
  TodoList: TodoListSlice(set)
})))
