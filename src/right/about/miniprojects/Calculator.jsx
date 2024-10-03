import './Calculator.css'

export const Calculator = () => {
  const keyPad = [7, 8, 9, '+', 4, 5, 6, '-', 1,2,3,'x', 0,'.', '=', '/']
  return (
    <div className='Calculator'>
      <h1>CAS1O</h1>
      <div className='display'>0123456789</div>
      <div className='keypad'>
        {
          keyPad.map(k => <button className='key button'>{k}</button>)
        }
      </div>
    </div>
  )
}