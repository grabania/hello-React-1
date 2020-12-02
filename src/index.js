// 1. exercise

// import React from "react"
// import ReactDOM from "react-dom"

// ReactDOM.render(
//   <div>
//     <h1>Hello React</h1>
//     <p>This is a paragraph</p>
//   </div>,
//   document.getElementById("root")
// )

// 2. exercise

// import React from "react"
// import ReactDOM from "react-dom"

// function MyApp() {
//   return (
//     <ul>
//       <li>1</li>
//       <li>2</li>
//       <li>3</li>
//     </ul>
//   )
// }

// ReactDOM.render(<MyApp />, document.getElementById("root"))

//Functional components exercise
import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
  return (
    <div>
      <h1>Hi</h1>
      <p>I am playing with ReactJS</p>
      <ul>
        <li>Paris</li>
        <li>London</li>
        <li>Milan</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<MyInfo />, document.getElementById("root"))
