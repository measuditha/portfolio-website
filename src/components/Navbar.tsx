import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar() {
  return (
    <div className="navbar">
    <div className="logo"> Uditha Adhikary</div>
     <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/review">Reviews</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/faq'>FAQ</Link>
        </li>
        <li>
          <Link to='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link to='/resume'>Resume</Link>
        </li>
        <li>
          <Link to='/me'>Services</Link>
        </li>
        <Link to='*'/>
     </ul>
  </div>
  )
}
