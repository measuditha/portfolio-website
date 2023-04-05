import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route , Link } from 'react-router-dom'
import Home from "./pages/Home"
import AboutMe from './pages/AboutMe'
import ClentReviews from './pages/ClentReviews'
import ContactMe from './pages/ContactMe'
import Error from './pages/Error'
import Faq from './pages/Faq'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import SocialMedia from './pages/SocialMedia'
import WhatIdo from './pages/WhatIdo'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home />}/>
        <Route path='/about' element={< AboutMe />}/>
        <Route path='/review' element={< ClentReviews />}/>
        <Route path='/contact' element={< ContactMe />}/>
        <Route path='/faq' element={< Faq />}/>
        <Route path='/portfolio' element={< Portfolio />}/>
        <Route path='/resume' element={< Resume />}/>
        <Route path='/social' element={< SocialMedia/>}/>
        <Route path='/me' element={< WhatIdo />}/>
        <Route path='/error' element={< Error />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
