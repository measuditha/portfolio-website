import React from 'react'
import { Link } from 'react-router-dom'
import { BsGithub, BsLinkedin } from 'react-icons/bs'



export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-6 bg-white-700 h-20">
      <div>
        <span className="text-4xl font-bold"> UDITHA </span>
      </div>
      <div className='flex items-center justify-end space-x-4 '>
        <ul className='flex items-center justify-end space-x-6 font-bold'>
          <li className='hover:underline underline-offset-8 decoration-2  decoration-orange-500'>
            <Link to="/">HOME</Link>
          </li>
          <li className='hover:underline underline-offset-8 decoration-2 decoration-orange-500'>
            <Link to="/about">ABOUT</Link>
          </li>
          <li className='hover:underline underline-offset-8 decoration-2 decoration-orange-500'>
            <Link to="/review">CLIENTS</Link>
          </li>
          <li className='hover:underline underline-offset-8 decoration-2 decoration-orange-500'>
            <Link to='/contact'>CONTACT</Link>
          </li>
          <li className='hover:underline underline-offset-8 decoration-2 decoration-orange-500'>
            <Link to='/faq'>FAQ</Link>
          </li>
          <li className='hover:underline underline-offset-8 decoration-2 decoration-orange-500'>
            <Link to='/portfolio'>PORTFOLIO</Link>
          </li>
          <li className='hover:underline underline-offset-8 decoration-2 decoration-orange-500'>
            <Link to='/resume'>RESUME</Link>
          </li>
          <li className='hover:underline underline-offset-8 decoration-2 decoration-orange-500'>
            <Link to='/me'>SERVICES</Link>
          </li>
          <Link to='*' />
        </ul>
      </div>
      <div className='flex items-center justify-end space-x-4 p-10'>
        <span className='text-xl hover:scale-125 transition duration-300'>
          <BsLinkedin />
        </span>
        <span className='text-xl hover:scale-125 transition duration-300'>
          <BsGithub />
        </span>
      </div>
    </div>
  )
}
