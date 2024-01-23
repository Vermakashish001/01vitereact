import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import {jsx as _jsx} from "react/jsx-runtime.js"

function MyApp() {
  return(
    <div>
      <h1> Custom App ! </h1>
    </div>
  )
  
}
// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       terget: '_blank'
//   },
//   children: 'click me to visit google'
// }

const anotherElement = (
  <a herf="https://google.com" terget='_blank'>visit google</a>
)
const anotherUser = "ReactJourney"
const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).
render(
  reactElement
)
