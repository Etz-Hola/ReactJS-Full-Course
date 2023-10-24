import React from 'react'

const Content = () => {

    const handleNamechange = () => {
      const names = ['Ola', 'Soji', 'Shola']
      const int =Math.floor(Math.random() * 3)
        return names [int]
    }
  return (
    <main>
        Hello {handleNamechange()}
    </main>
  )
}

export default Content
