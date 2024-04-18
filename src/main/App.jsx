// src/main/App.jsx
import './App.css'
import { store } from '../store/store.js'

export const App = () => {
  return (
    <div className="app">
      <p>Hello Dani</p>
      <p>Bears Count: {store.getState().bears}</p>
    </div>
  )
}
