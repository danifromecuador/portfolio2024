// src/store/store.js
import { create } from "zustand";
import { devtools } from 'zustand/middleware';

const lightTheme = {
  backgroundLeft: "#a6f6af",
  backgroundRight: "#fffbb7",
  color1: "black",
  color2: "gray",
  color3: "green"
}

const darkTheme = {
  backgroundLeft: "black",
  backgroundRight: "gray",
  color1: "white",
  color2: "gray",
  color3: "green"
}

const ThemeSlice = (set) => ({
  theme: darkTheme,
  changeThemeToLight: () => set((state) => ({
    ThemeSlice: { ...state.ThemeSlice, theme: lightTheme }
  })),
  changeThemeToDark: () => set((state) => ({
    ThemeSlice: { ...state.ThemeSlice, theme: darkTheme }
  })),
})

const BearSlice = () => ({
  bears: 23,
})

export const Stores = create(devtools((set) => ({
  ThemeSlice: ThemeSlice(set),
  BearSlice: BearSlice()
})))
