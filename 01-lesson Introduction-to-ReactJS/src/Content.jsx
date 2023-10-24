import React from 'react'

const Content = () => {

    const handleNamechange = () => {
      const names = ['Qadir', 'Soji', 'Shola']
      const int =Math.floor(Math.random() * 3)
        return names [int]
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


  return (
    <main>
        <p>
        Hello {handleNamechange()}
        </p>
        <button onClick={handleClick}>Click it</button>
        <button onClick={() => handleClickOne('Qadir')}>Click name</button>
        <button onClick={(e) => handleClickTwo(e)}>Clich Now</button>
        
    </main>
  )
}

export default Content
