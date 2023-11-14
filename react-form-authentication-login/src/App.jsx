import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'

const App = () => {
  return (
    
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* public routes */}
          <Route path='login' element={<Login />}/>

        </Route>
      </Routes>
    
  )
}

export default App