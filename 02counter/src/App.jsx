import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  const addValue = () => {
    console.log('add value', counter)
    // counter += 1
    setCounter(counter + 1)
  }
  const removeValue = () => {
    console.log('remove value', counter)
    // counter -= 1
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur React </h1>
      <h2>Counter value : {counter}</h2>
      <button
        onClick={addValue}

      >Add Value : {counter}</button>
      <br />
      <br />
      <button
        onClick={removeValue}
      >Remove Value : {counter}</button>
      <br />
      <br />
      {/* <footer>footer {counter}</footer> */}
    </>
  )
}

export default App
