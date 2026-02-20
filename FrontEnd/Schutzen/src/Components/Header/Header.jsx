import React from 'react'
import { Link, NavLink } from 'react-router'

function Header() {
  return (
    <>
    <header className='h-[15vh] w-full bg-sky-700 stiky top-0'>
    <nav className='h-full w-full'>
      <ul className='h-full w-full flex flex-row gap-3 items-center justify-center  '>
        <li>
          <NavLink to="/" className={({isActive})=>`${isActive ? "text-white" : ""}`}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/user" className={({isActive})=>`${isActive ? "text-white" : ""}`}>User</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({isActive})=>`${isActive ? "text-white" : ""}`}>login</NavLink>
        </li>
        <li>
          <NavLink to="/signup" className={({isActive})=>`${isActive ? "text-white" : ""}`}>signup</NavLink>
        </li>
      </ul>
    </nav>
    </header>
    </>
  )
}

export default Header