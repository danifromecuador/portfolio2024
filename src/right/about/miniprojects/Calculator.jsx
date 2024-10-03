import { useState } from 'react'
import './Calculator.css'

export const Calculator = () => {
  const keyPad = '789+456-123*0.=/'.split('')
  const [display, setDisplay] = useState('')

  const handleKey = k => {
    if (k === 'AC') return setDisplay('')
    setDisplay(display + k)
    if (k === '=') {
      try {
        const result = eval(display)
        typeof result === 'number' && setDisplay(eval(result.toString().slice(0, 10)))
        isNaN(result) && setDisplay("infinite") // to handle 0/0 NaN error
      } catch (error) { setDisplay('error') }
    }
  }

  return (
    <div className='Calculator'>
      <h1>CAS1O</h1>
      <button className='AC button' onClick={() => handleKey('AC')}>AC</button>
      <div className='display'>{display}</div>
      <div className='keypad'>
        {keyPad.map(k => <button className='key button' key={k} onClick={() => handleKey(k)}>{k}</button>)}
      </div>
    </div>
  )
}