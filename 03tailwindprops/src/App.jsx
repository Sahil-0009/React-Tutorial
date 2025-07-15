import { useState } from 'react'
import './App.css'
import './index.css'
import Cards from './components/Cards'


function App() {
  let myObj = {
    name: "John",
    age: 30,
  }
  let newArray = [1, 2, 3, 4, 5]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

      <Cards username="Sahil" btnText="Click Me" />
      <br />
      <Cards username="Heena" btnText="Click Me" />
    </>
  )
}

export default App
