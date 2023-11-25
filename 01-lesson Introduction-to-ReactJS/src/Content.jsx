import React from
import { useState } from 'react'


const Content = () => {

  const [name, setName] = useState('Zaka')

  const handleNamechange = () => {
    const names = ['Qadir', 'Soji', 'Shola']
    const int = Math.floor(Math.random() * 3)
    setName(names[int])
  }

  const handleClick = () => {
    console.log("You click it")
  }

  const handleClickOne = (names) => {
    console.log(`${names} was clicked`)
  }

  const handleClickTwo = (e) => {
    console.log(e.target.innerText);
  }

  const styling = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px"
  }


  return (
    <main>
      <p>
        Hello {name} 👍
      </p>


      <div style={styling}>
        <button onClick={handleNamechange}><span>Change Name</span></button>
        <button onClick={handleClick}><span>Click it</span></button>

        <button onClick={() => handleClickOne('Qadir')}>Click name</button>
        <button onClick={(e) => handleClickTwo(e)}><span>Click Now</span></button>
      </div>


    </main>
  )
}

export default Content
