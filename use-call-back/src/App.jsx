import { useState, useEffect, useCallback } from "react"

import React from 'react'

const App = () => {
  const [userInput, setUserInput] = useState('')
  const [result, setResult] = useState(0)
  const [num1] = useState(5)
  const [num2] = useState(5)

  const sum = useCallback(() => num1 + num2, [num1, num2]) 

  const buildArray = useCallback(() => [num1, num2], [num1, num2])

  useEffect(() => {
    console.log(`New sum. Value: ${buildArray()}`)
    setResult(buildArray());

  }, [buildArray])
  

  return (
    <main className="App">
      <input className="inputText" type="text" placeholder="input"
        value={userInput} onChange={(e) => setUserInput(e.target.value)}
      />
      <h1>OutPut: <span style={{ color: "aqua" }}> {userInput || ".."}</span></h1>
    </main>
  )
}

export default App



