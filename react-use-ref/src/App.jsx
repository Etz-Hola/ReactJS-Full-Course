import { useState, useRef } from "react"



const App = () => {

  const [randomInput, setRandomInput] = useState("")
  const [seconds, setSeconds] = useState(0)

  const renders = useRef(0);
   


  return (
    <main className="App">
      <input
        type="text"
        value={randomInput}
        placeholder="Type anything..."
        
      />
      <p>Result: {randomInput}</p>

      <br/>
      <br/>

      <section>
        <button>Stop</button>
        <button>Start</button>
      </section>
      <button>Reset</button>

      <br/>
      <br/>

      <p>Second</p>

      <br/>
      <br/>

      <p>{randomInput}</p>


    </main>
  )
}

export default App

