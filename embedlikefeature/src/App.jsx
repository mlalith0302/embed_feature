import React from "react"
import External_render from "./Components/External_render"

function App() {

  return (
    <>
       <External_render 
        link="https://en.wikipedia.org/wiki/Main_Page"
        title="Wikipedia"
        width="70%"
        height='600px'
       />
    </>
  )
}

export default App
