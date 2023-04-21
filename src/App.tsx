import { useState } from 'react'
import { BrowserRouter, Routes, Route , Link } from 'react-router-dom'
import Home from "./pages/Home"
import AboutMe from './pages/AboutMe'
import ClientReviews from './pages/ClientReviews'
import ContactMe from './pages/ContactMe'
import Error from './pages/Error'
import Faq from './pages/Faq'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import WhatIdo from './pages/WhatIdo'
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={< Home />}/>
        <Route path='/about' element={< AboutMe />}/>
        <Route path='/review' element={< ClientReviews />}/>
        <Route path='/contact' element={< ContactMe />}/>
        <Route path='/faq' element={< Faq />}/>
        <Route path='/portfolio' element={< Portfolio />}/>
        <Route path='/resume' element={< Resume />}/>
        <Route path='/me' element={< WhatIdo />}/>
        <Route path='*' element={< Error />}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
