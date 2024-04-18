// src/store/store.js
import { create } from "zustand";
import { devtools } from 'zustand/middleware';

// const createBearSlice = (set) => ({
//   bears: 24,
//   increaseBears: () => set((state) => ({
//     BearSlice: { ...state.BearSlice, bears: state.BearSlice.bears + 1 },
//     CowSlice: { cows: state.CowSlice.cows - 1 }
//   }))
// });

// const createCowSlice = () => ({
//   cows: 7,
// });

// export const Stores = create(devtools((set) => ({
//   BearSlice: createBearSlice(set),
//   CowSlice: createCowSlice(),
// })));

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