import React from 'react'
import { Route, Routes } from 'react-router-dom'

// import pages
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Page404 from './components/pages/Page404'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}

export default App