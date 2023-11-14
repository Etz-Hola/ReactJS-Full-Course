import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import LinkPage from './components/LinkPage'
import Unauthorized from './components/Unauthorized'
import Layout from './components/Layout'

const App = () => {
  return (     
    <Routes>
      <Route path='/' element={<Layout/>}>

        {/* public routes/ */}
        <Route index element={<Login />}/>
        <Route path='/linkpage' element={<LinkPage />}/>
        <Route path='/unauthorized' element={<Unauthorized />}/>

        {/* private routes/ */}
        <Route path='/linkpage' element={<LinkPage />}/>
        

      </Route> 

    </Routes>    
     
  )
}

export default App