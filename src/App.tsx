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
import SocialMedia from './pages/SocialMedia'
import WhatIdo from './pages/WhatIdo'


function App() {

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={< Home />}/>
    //     <Route path='/about' element={< AboutMe />}/>
    //     <Route path='/review' element={< ClientReviews />}/>
    //     <Route path='/contact' element={< ContactMe />}/>
    //     <Route path='/faq' element={< Faq />}/>
    //     <Route path='/portfolio' element={< Portfolio />}/>
    //     <Route path='/resume' element={< Resume />}/>
    //     <Route path='/social' element={< SocialMedia/>}/>
    //     <Route path='/me' element={< WhatIdo />}/>
    //     <Route path='*' element={< Error />}/>
    //   </Routes>
    // </BrowserRouter>
    <div className="text-3xl font-bold underline">
      TEST
    </div>
  )
}

export default App
