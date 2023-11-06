import React from 'react'

const Header = () => {
  const headerStyle = {
    backgroundColor: "blue",
    color: "white",
    borderRadius: "10px",
    pading: "10px"
  }
  return (
    <header style={headerStyle}>
      <h1>WELCOME TO REACT JS CLASS </h1>
      <h2 style={{color: "black", borderTopRightRadious: "39px", backgroundColor: "greenYellow"}}>WELCOME TO DLT-AFRICA BOOT CAMP </h2>
    </header>
  )
}

export default Header
