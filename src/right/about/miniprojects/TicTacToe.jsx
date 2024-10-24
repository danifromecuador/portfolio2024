import { useState } from 'react'
import './TicTacToe.css'

export const TicTacToe = () => {
  const [array, setArray] = useState([0, 0, 0, "O", 0, 0, 0, 0, 0])

  const handleClick = (i) => {
    if (array[i] === 0) {
      let newArray = [...array]
      newArray[i] = "X"
      setArray(newArray)
    }
  }

  return (
    <div className='TicTacToe'>
      <h1>TIC TAC TOE</h1>
      <div className="grid">
        <button onClick={() => handleClick(0)}>{`${array[0] === 0 ? "" : array[0]}`}</button>
        <button onClick={() => handleClick(1)}>{`${array[1] === 0 ? "" : array[1]}`}</button>
        <button onClick={() => handleClick(2)}>{`${array[2] === 0 ? "" : array[2]}`}</button>
        <button onClick={() => handleClick(3)}>{`${array[3] === 0 ? "" : array[3]}`}</button>
        <button onClick={() => handleClick(4)}>{`${array[4] === 0 ? "" : array[4]}`}</button>
        <button onClick={() => handleClick(5)}>{`${array[5] === 0 ? "" : array[5]}`}</button>
        <button onClick={() => handleClick(6)}>{`${array[6] === 0 ? "" : array[6]}`}</button>
        <button onClick={() => handleClick(7)}>{`${array[7] === 0 ? "" : array[7]}`}</button>
        <button onClick={() => handleClick(8)}>{`${array[8] === 0 ? "" : array[8]}`}</button>
      </div>
    </div>
  )
}