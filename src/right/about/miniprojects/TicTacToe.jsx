import { useState, useEffect } from 'react'
import './TicTacToe.css'

export const TicTacToe = () => {
  const [array, setArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [allowComputerResponse, setAllowComputerResponse] = useState(false)

  // const mouseDown = i => setArray(prevArray => prevArray.map((item, index) => index === i && item === 0 ? 'X' : item))
  const mouseDown = i => {
    if (array[i] === 0) {
      let newArray = [...array]
      newArray[i] = 'X'
      setArray(newArray)
      setAllowComputerResponse(true)
    }
    else setAllowComputerResponse(false)
  }

  const mouseUp = (i) => {
    console.log(allowComputerResponse)
    if (allowComputerResponse) {
      for (let index = 0; index < array.length; index++) {
        let randomIndex = parseInt(Math.random().toString().split('')[2])
        console.log(randomIndex + 1)
        if (array[randomIndex] === 0) {
          let newArray = [...array]
          newArray[randomIndex] = 'O'
          setArray(newArray)
          break;
        }
      }
    }
  }

  return (
    <div className='TicTacToe'>
      <h1>TIC TAC TOE</h1>
      <div className="grid">
        <button onMouseDown={() => mouseDown(0)} onMouseUp={() => mouseUp(0)}>{`${array[0] === 0 ? "" : array[0]}`}</button>
        <button onMouseDown={() => mouseDown(1)} onMouseUp={() => mouseUp(1)}>{`${array[1] === 0 ? "" : array[1]}`}</button>
        <button onMouseDown={() => mouseDown(2)} onMouseUp={() => mouseUp(2)}>{`${array[2] === 0 ? "" : array[2]}`}</button>
        <button onMouseDown={() => mouseDown(3)} onMouseUp={() => mouseUp(3)}>{`${array[3] === 0 ? "" : array[3]}`}</button>
        <button onMouseDown={() => mouseDown(4)} onMouseUp={() => mouseUp(4)}>{`${array[4] === 0 ? "" : array[4]}`}</button>
        <button onMouseDown={() => mouseDown(5)} onMouseUp={() => mouseUp(5)}>{`${array[5] === 0 ? "" : array[5]}`}</button>
        <button onMouseDown={() => mouseDown(6)} onMouseUp={() => mouseUp(6)}>{`${array[6] === 0 ? "" : array[6]}`}</button>
        <button onMouseDown={() => mouseDown(7)} onMouseUp={() => mouseUp(7)}>{`${array[7] === 0 ? "" : array[7]}`}</button>
        <button onMouseDown={() => mouseDown(8)} onMouseUp={() => mouseUp(8)}>{`${array[8] === 0 ? "" : array[8]}`}</button>
      </div>
    </div>
  )
}