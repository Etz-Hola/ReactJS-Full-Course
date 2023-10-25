import React from 'react'

const Content = () => {

    const handleNamechange = () => {
      const names = ['Ola', 'Soji', 'Shola']
      const int =Math.floor(Math.random() * 3)
        return names [int]
    }
    const handleClick = () => {
      console.log("You click it")
    }
  return (
    <main>
        <p>
        Hello {handleNamechange()}
        </p>
        <button onClick={handleClick}>Click it</button>
    </main>
  )
}

export default Content
