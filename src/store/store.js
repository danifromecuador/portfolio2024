// src/store/store.js
import { create } from "zustand";
import { devtools } from 'zustand/middleware';

const ThemeSlice = (set) => ({
  theme: JSON.parse(localStorage.getItem("theme")) || "light",

  changeThemeToLight: () => {
    localStorage.setItem("theme", JSON.stringify("light"))
    set((state) => ({ThemeSlice: { ...state.ThemeSlice, theme: "light" }}))
  },

  changeThemeToDark: () => {
    localStorage.setItem("theme", JSON.stringify("dark"))
    set((state) =>({ThemeSlice: { ...state.ThemeSlice, theme: "dark" }}))
  },
})

const BearSlice = () => ({
  bears: 23,
})

export const Stores = create(devtools((set) => ({
  ThemeSlice: ThemeSlice(set),
  BearSlice: BearSlice()
})))
