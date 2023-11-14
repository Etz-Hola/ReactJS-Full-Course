import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import LinkPage from './components/LinkPage'
import Unauthorized from './components/Unauthorized'
import Layout from './components/Layout'
import Home from './components/Home'
import Editor from './components/Editor'
import Lounge from './components/Lounge'
import Admin from './components/Admin'
import Missing from './components/Missing'

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5158,
}

const App = () => {
  return (     
    <Routes>
      <Route path='/' element={<Layout/>}> 

        {/* public routes/ */}
        <Route index element={<Login />}/>
        <Route path='/linkpage' element={<LinkPage />}/>
        <Route path='/unauthorized' element={<Unauthorized />}/>

        {/* private routes/ */}
        <Route path='/' element={<Home/>}/>
        <Route path='editor' element={<Editor/>}/>
        <Route path='admin' element={<Admin/>}/>
        <Route path='lounge' element={<Lounge/>}/>

        {/* catch all/ */}
        <Route path='*' element={<Missing/>}/>
        

      </Route> 

    </Routes>    
     
  )
}

export default App