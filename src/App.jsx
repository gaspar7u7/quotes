import { useState } from 'react'
 import quotes from "./Componentes/quotes"
import reactLogo from './assets/react.svg'

import './App.css'

function App() {

  const randomQuotes= Math.floor(Math.random() * quotes.length)
const [ news, setNews] = useState(randomQuotes)

const changeButton = () => {
  const randomFunction = Math.floor(Math.random() * quotes.length)
  setNews(randomFunction) 

}
  
const eachColors = ["#4476a3", "#c90076", "#cfff66", "#6df9db", "#f570ee", "#00539b", "#4b9cd3"]

const reformColors = Math.floor(Math.random() * eachColors.length)
document.body.style = `background: ${eachColors[reformColors]}`

//  const changeColor = ["#4476a3", "#c90076", "#cfff66", "#6df9db", "#f570ee", "#00539b", "#4b9cd3"]
//  const randomCol = Math.floor(Math.random() * changeColor.length )
 

 
  return (
    <div className="App">
      <div className='card' style={{color: eachColors[reformColors] }}>
        
      <p> <i class="fa-solid fa-quote-left"></i> {quotes[news].quote} </p>
      <h3> {quotes[news].author} </h3>
      <button onClick={changeButton} style={{background: eachColors[reformColors]}}><i class="fa-solid fa-angle-right"></i> </button>

      </div>
 

    </div>
  )
}

export default App
