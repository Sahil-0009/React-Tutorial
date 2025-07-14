import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   Children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Click me to visit google
  </a>
)
const anotherUser = "Jane Doe"

const reactElement = React.createElement('a', {
  href: 'https://google.com',
  target: '_blank'
}, 'Click me to visit google');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {reactElement}
    <App />
    <MyApp />
    {anotherElement}
    {React.createElement('h1', null, `Hello ${anotherUser}`)}
    {React.createElement('a', {
      href: 'https://google.com',
      target: '_blank'
    }, 'Click me to visit google')}

  </StrictMode>,
)
