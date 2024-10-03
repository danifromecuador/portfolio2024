import { useState } from 'react'
import './Calculator.css'

export const Calculator = () => {
  const keyPad = '789+456-123x0.=/'.split('')
  const [display, setDisplay] = useState('0')
  const handleKey = k => {
    // if (display === '0' && k === '0') setDisplay('123')
    if (display === '0' && k !== '0') setDisplay(k)
    if (display !== '0') setDisplay(display + k)
    // setDisplay(display.toString() + k.toString())
    // if (display[0] === 0 && display.length > 0) setDisplay(display.unshift())
    console.log(k + 1)
    console.log(display)
  }

  const handleOnOff = () => { display ? setDisplay("") : setDisplay("0") }

  return (
    <div className='Calculator'>
      <h1>CAS1O</h1>
      <button className='on-off button' onClick={() => handleOnOff()}>ON/OFF</button>
      <div className='display'>{display}</div>
      <div className='keypad'>
        {
          keyPad.map(k => <button className='key button' onClick={() => handleKey(k)}>{k}</button>)
        }
      </div>
    </div>
  )
}