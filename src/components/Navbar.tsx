import React from 'react'
import { Link } from 'react-router-dom'
import { BsGithub, BsLinkedin } from 'react-icons/bs'



export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-6 bg-white-700 h-20">
      <div>
        <span className="text-4xl font-bold"> UDITHA </span>
      </div>
      <div className='flex items-center justify-end space-x-4'>
        <ul className='flex items-center justify-end space-x-6'>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/review">CLIENTS</Link>
          </li>
          <li>
            <Link to='/contact'>CONTACT</Link>
          </li>
          <li>
            <Link to='/faq'>FAQ</Link>
          </li>
          <li>
            <Link to='/portfolio'>PORTFOLIO</Link>
          </li>
          <li>
            <Link to='/resume'>RESUME</Link>
          </li>
          <li>
            <Link to='/me'>SERVICES</Link>
          </li>
          <Link to='*' />
        </ul>
      </div>
      <div className='flex items-center justify-end space-x-4'>
        <span className='text-xl'>
          <BsLinkedin />
        </span>
        <span className='text-xl'>
          <BsGithub />
        </span>
      </div>
    </div>
  )
}
