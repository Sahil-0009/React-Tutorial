import { useState } from 'react'
import './App.css'

// function App() {
//   const [color, setColor] = useState("olive")

//   return (
//     <div className="w-full h-screen duration-200"
//     style={{backgroundColor: color}}
//     >
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//           <button
//           onClick={() => setColor("red")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "red"}}
//           >Red</button>
//           <button
//           onClick={() => setColor("green")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "green"}}
//           >Green</button>
//           <button
//           onClick={() => setColor("blue")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "blue"}}
//           >Blue</button>
//         </div>
//       </div>
//     </div>
//   )
// }
function App() {
  const [bgColor, setBgColor] = useState("olive")
  const colors = [
    { name: "Blue", value: "blue", class: "bg-blue-500 hover:bg-blue-600" },
    { name: "Red", value: "red", class: "bg-red-500 hover:bg-red-600" },
    { name: "Yellow", value: "yellow", class: "bg-yellow-500 hover:bg-yellow-600" },
    { name: "Gray", value: "gray", class: "bg-gray-500 hover:bg-gray-600" },
    { name: "Purple", value: "purple", class: "bg-purple-500 hover:bg-purple-600" },
    { name: "Pink", value: "pink", class: "bg-pink-500 hover:bg-pink-600" },
    { name: "Teal", value: "teal", class: "bg-teal-500 hover:bg-teal-600" },
    { name: "Orange", value: "orange", class: "bg-orange-500 hover:bg-orange-600" },
  ]

  return (
    <div
      className="w-full h-screen flex items-center justify-center transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <div className="fixed bottom-12 inset-x-0 flex justify-center px-2">
        <div className="flex flex-wrap gap-4 shadow-2xl border border-white/30 bg-white/10 backdrop-blur-lg px-6 py-4 rounded-3xl">
          {colors.map((color) => (
            <button
              key={color.value}
              className={`${color.class} text-white px-5 py-2 rounded-xl font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                bgColor === color.value ? "ring-4 ring-white/70 scale-105" : ""
              }`}
              onClick={() => setBgColor(color.value)}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
