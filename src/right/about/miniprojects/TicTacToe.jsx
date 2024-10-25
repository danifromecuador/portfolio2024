import { useState, useEffect } from 'react'
import './TicTacToe.css'

export const TicTacToe = () => {
  const [array, setArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])

  const mouseDown = i => {
    if (array[i] === 0) {
      let newArray = [...array]
      newArray[i] = 'X'
      setArray(newArray)
    }
  }

  const mouseUp = () => {
    for (let i = 0; i < array.length; i++) {
      let randomIndex = Math.random().toString().split('')[2]      
      if (array[randomIndex] === 0) {
        let newArray = [...array]
        newArray[randomIndex] = 'O'
        setArray(newArray)
        break;
      }
    }
  }

  return (
    <div className='TicTacToe'>
      <h1>TIC TAC TOE</h1>
      <div className="grid">
        <button onMouseDown={() => mouseDown(0)} onMouseUp={() => mouseUp()}>{`${array[0] === 0 ? "" : array[0]}`}</button>
        <button onMouseDown={() => mouseDown(1)} onMouseUp={() => mouseUp()}>{`${array[1] === 0 ? "" : array[1]}`}</button>
        <button onMouseDown={() => mouseDown(2)} onMouseUp={() => mouseUp()}>{`${array[2] === 0 ? "" : array[2]}`}</button>
        <button onMouseDown={() => mouseDown(3)} onMouseUp={() => mouseUp()}>{`${array[3] === 0 ? "" : array[3]}`}</button>
        <button onMouseDown={() => mouseDown(4)} onMouseUp={() => mouseUp()}>{`${array[4] === 0 ? "" : array[4]}`}</button>
        <button onMouseDown={() => mouseDown(5)} onMouseUp={() => mouseUp()}>{`${array[5] === 0 ? "" : array[5]}`}</button>
        <button onMouseDown={() => mouseDown(6)} onMouseUp={() => mouseUp()}>{`${array[6] === 0 ? "" : array[6]}`}</button>
        <button onMouseDown={() => mouseDown(7)} onMouseUp={() => mouseUp()}>{`${array[7] === 0 ? "" : array[7]}`}</button>
        <button onMouseDown={() => mouseDown(8)} onMouseUp={() => mouseUp()}>{`${array[8] === 0 ? "" : array[8]}`}</button>
      </div>
    </div>
  )
}