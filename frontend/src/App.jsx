import React from 'react'
import { Route, Routes } from 'react-router-dom'

// import pages, auth
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Page404 from './components/pages/Page404'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}

export default App