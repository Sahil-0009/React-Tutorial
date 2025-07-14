import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(1)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur React </h1>
      <h2>Counter value : {counter}</h2>
      <button
        onClick={addValue}
        disabled={counter >= 20}
      >Add Value : {counter}</button>
      <br />
      <br />
      <button
        onClick={removeValue}
        disabled={counter <= 0}
      >Remove Value : {counter}</button>
      <br />
      <br />
      {/* <footer>footer {counter}</footer> */}
    </>
  )
}

export default App
