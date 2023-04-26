import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { ImMenu } from 'react-icons/im'



export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false)
  const handleToggleNav = () => {
    setToggleNav(!toggleNav)
  }
  const activeLink = "underline decoration-[3px] underline-offset-[10.4px] decoration-orange-500";
  return (
    <>
      <div className="flex w-full items-center justify-between p-6 bg-white-700 h-20">
        <span className="text-4xl font-bold"> UDITHA </span>
        <span onClick={handleToggleNav} className='text-2xl flex md:hidden'>
          <ImMenu />
        </span>
        <div className='hidden md:flex items-center justify-end space-x-4 '>
          <ul className='flex items-center justify-end space-x-6 font-bold'>
            <li className='relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2.5px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-orange-500 hover:before:w-full hover:before:opacity-100'>
              <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : "")}>HOME</NavLink>
            </li>
            <li className='relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2.5px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-orange-500 hover:before:w-full hover:before:opacity-100'>
              <NavLink to="/about" className={({ isActive }) => (isActive ? activeLink : "")}>ABOUT</NavLink>
            </li>
            <li className='relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2.5px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-orange-500 hover:before:w-full hover:before:opacity-100'>
              <NavLink to="/review" className={({ isActive }) => (isActive ? activeLink : "")} >CLIENTS</NavLink>
            </li>
            <li className='relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2.5px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-orange-500 hover:before:w-full hover:before:opacity-100'>
              <NavLink to='/contact' className={({ isActive }) => (isActive ? activeLink : "")}>CONTACT</NavLink>
            </li>
            <li className='relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2.5px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-orange-500 hover:before:w-full hover:before:opacity-100'>
              <NavLink to='/faq' className={({ isActive }) => (isActive ? activeLink : "")}>FAQ</NavLink>
            </li>
            <li className='relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2.5px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-orange-500 hover:before:w-full hover:before:opacity-100'>
              <NavLink to='/portfolio' className={({ isActive }) => (isActive ? activeLink : "")}>PORTFOLIO</NavLink>
            </li>
            <li className='relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2.5px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-orange-500 hover:before:w-full hover:before:opacity-100'>
              <NavLink to='/resume' className={({ isActive }) => (isActive ? activeLink : "")}>RESUME</NavLink>
            </li>
            <li className='relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2.5px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-orange-500 hover:before:w-full hover:before:opacity-100'>
              <NavLink to='/me' className={({ isActive }) => (isActive ? activeLink : "")}>SERVICES</NavLink>
            </li>
            <NavLink to='*' />
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
      {toggleNav ? (<div className='bg-orange-50 shadow-md p-4 md:hidden'>
        <ul className='flex flex-col items-start justify-center gap-4 font-bold'>
          <li className='relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2.5px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-orange-500 hover:before:w-full hover:before:opacity-100'>
            <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : "")}>HOME</NavLink>
          </li>
          <li className='relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2.5px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-orange-500 hover:before:w-full hover:before:opacity-100'>
            <NavLink to="/about" className={({ isActive }) => (isActive ? activeLink : "")}>ABOUT</NavLink>
          </li>
          <li className='relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2.5px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-orange-500 hover:before:w-full hover:before:opacity-100'>
            <NavLink to="/review" className={({ isActive }) => (isActive ? activeLink : "")} >CLIENTS</NavLink>
          </li>
          <li className='relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2.5px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-orange-500 hover:before:w-full hover:before:opacity-100'>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? activeLink : "")}>CONTACT</NavLink>
          </li>
          <li className='relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2.5px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-orange-500 hover:before:w-full hover:before:opacity-100'>
            <NavLink to='/faq' className={({ isActive }) => (isActive ? activeLink : "")}>FAQ</NavLink>
          </li>
          <li className='relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2.5px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-orange-500 hover:before:w-full hover:before:opacity-100'>
            <NavLink to='/portfolio' className={({ isActive }) => (isActive ? activeLink : "")}>PORTFOLIO</NavLink>
          </li>
          <li className='relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2.5px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-orange-500 hover:before:w-full hover:before:opacity-100'>
            <NavLink to='/resume' className={({ isActive }) => (isActive ? activeLink : "")}>RESUME</NavLink>
          </li>
          <li className='relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2.5px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-orange-500 hover:before:w-full hover:before:opacity-100'>
            <NavLink to='/me' className={({ isActive }) => (isActive ? activeLink : "")}>SERVICES</NavLink>
          </li>
          <NavLink to='*' />
        </ul>
      </div>) : null}

    </>
  )
}
