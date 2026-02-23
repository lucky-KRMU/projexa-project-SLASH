import React from 'react'
import { Link, NavLink } from 'react-router'

function Header() {
  return (
    <>
    <header className='h-[8vh] w-full bg-sky-500 stiky top-0'>
    <nav className='h-full w-full flex'>
      <h1 className='h-10em w-full font-bold text-[30px] flex flex-row gap-3 items-center justify-start p-2 uppercase'>
        <div className=' hover:text-blue-200 pointer-none: cursor-pointer '>
          <NavLink to="/" >Schũtzen</NavLink></div>
      </h1>
      <ul className='h-10em w-full font-bold text-[25px] flex flex-row gap-3 items-center justify-end p-2 '>
        <li className='hover:text-blue-300'>
          <NavLink to="/" className={({isActive})=>`${isActive ? "text-white" : ""}`}>Home</NavLink>
        </li>
        <li className='hover:text-blue-200'>
          <NavLink to="/user" className={({isActive})=>`${isActive ? "text-white" : ""}`}>User</NavLink>
        </li>
        <li className='bg-orange-500 hover:bg-orange-600 text-black margin-[10px] p-2 rounded-[10px] transition-all'>
          <NavLink to="/login" className={({isActive})=>`${isActive ? "text-white" : ""}`}>login</NavLink>
        </li>
        <li className='bg-amber-400 text-amber-950 margin-[10px]  p-2 rounded-[10px]'>
          <NavLink to="/signup" className={({isActive})=>`${isActive ? "text-white" : ""}`}>signup</NavLink>
        </li>
      </ul>
    </nav>
    </header>
    </>
  )
}

export default Header