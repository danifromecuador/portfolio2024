import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { add, markAsDone, deleteAllCompleted } from "./todoListLogic.js"

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

const TodoListSlice = set => ({
  todos: JSON.parse(localStorage.getItem("todoList")) || [],
  add: (input) => add(set, input),
  markAsDone: (e) => markAsDone(set, e),
  deleteAllCompleted: () => deleteAllCompleted(set)
})

export const Stores = create(devtools((set) => ({
  ThemeSlice: ThemeSlice(set),
  TodoList: TodoListSlice(set)
})))
