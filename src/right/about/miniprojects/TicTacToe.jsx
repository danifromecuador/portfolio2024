import { useState, useEffect } from 'react'
import './TicTacToe.css'

export const TicTacToe = () => {
  const [array, setArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [allowComputerResponse, setAllowComputerResponse] = useState(false)
  const [gameOverMessage, setGameOverMessage] = useState("")
  const [gameOverVisibility, setGameOverVisibility] = useState("hide")

  const mouseDown = i => {
    if (gameOverVisibility === "hide") {
      if (array[i] === 0) {
        let newArray = [...array]
        newArray[i] = 'X'
        setArray(newArray)
        setAllowComputerResponse(true)
      }
      else setAllowComputerResponse(false)
    }
  }

  const mouseUp = () => {
    if (allowComputerResponse && gameOverVisibility==="hide") {
      let isDone = false
      while (!isDone) {
        const arrayIsFilled = array.every(e => e !== 0)
        const randomIndex = parseInt(Math.random().toString().split('')[2])
        if (arrayIsFilled) isDone = true
        if (array[randomIndex] === 0) {
          let newArray = [...array]
          newArray[randomIndex] = 'O'
          setArray(newArray)
          isDone = true
        }
      }
    }
  }

  useEffect(() => {
    // 3 en raya horizontales
    if (array[0] === 'X' && array[1] === 'X' && array[2] === 'X') gameOver("win")
    if (array[3] === 'X' && array[4] === 'X' && array[5] === 'X') gameOver("win")
    if (array[6] === 'X' && array[7] === 'X' && array[8] === 'X') gameOver("win")
    // 3 en raya verticales
    if (array[0] === 'X' && array[3] === 'X' && array[6] === 'X') gameOver("win")
    if (array[1] === 'X' && array[4] === 'X' && array[7] === 'X') gameOver("win")
    if (array[2] === 'X' && array[5] === 'X' && array[8] === 'X') gameOver("win")
    // 3 en raya oblícuas
    if (array[0] === 'X' && array[4] === 'X' && array[8] === 'X') gameOver("win")
    if (array[2] === 'X' && array[4] === 'X' && array[6] === 'X') gameOver("win")

    // 3 en raya horizontales
    if (array[0] === 'O' && array[1] === 'O' && array[2] === 'O') gameOver("lose")
    if (array[3] === 'O' && array[4] === 'O' && array[5] === 'O') gameOver("lose")
    if (array[6] === 'O' && array[7] === 'O' && array[8] === 'O') gameOver("lose")
    // 3 en raya verticales
    if (array[0] === 'O' && array[3] === 'O' && array[6] === 'O') gameOver("lose")
    if (array[1] === 'O' && array[4] === 'O' && array[7] === 'O') gameOver("lose")
    if (array[2] === 'O' && array[5] === 'O' && array[8] === 'O') gameOver("lose")
    // 3 en raya oblícuas
    if (array[0] === 'O' && array[4] === 'O' && array[8] === 'O') gameOver("lose")
    if (array[2] === 'O' && array[4] === 'O' && array[6] === 'O') gameOver("lose")
  }, [array])

  const gameOver = (result) => {
    setGameOverVisibility("")
    if (result === "win") setGameOverMessage("YOU WIN")
    if (result === "lose") setGameOverMessage("YOU LOST")
  }

  const resetBtn = () => {
    setArray(([0, 0, 0, 0, 0, 0, 0, 0, 0]))
    setGameOverVisibility("hide")
    setGameOverMessage("")
  }

  return (
    <div className='TicTacToe'>
      <h1>TIC TAC TOE</h1>
      <div className={`gameOver ${gameOverVisibility}`}>
        <p>{gameOverMessage}</p>
      </div>
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
      <button onClick={() => resetBtn()}>RESET</button>
    </div >
  )
}