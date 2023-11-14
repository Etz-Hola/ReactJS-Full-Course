import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout'
import Login from './components/Login'
import LinkPage from './components/LinkPage'
import Unauthorized from './components/Unauthorized'

const App = () => {
  return (
    <main className='App'>   
      <Routes>
          {/* public routes/ */}
          <Route path='/' element={<Login />}/>
          <Route path='/linkpage' element={<LinkPage />}/>
          <Route path='/unauthorized' element={<Unauthorized />}/>

    </Routes>    
      </main> 
  )
}

export default App