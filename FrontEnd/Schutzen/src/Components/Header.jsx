import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shield } from 'lucide-react';

function Header() {
  return (
    <header className='h-20 w-full bg-slate-900 border-b border-slate-800 sticky top-0 z-100'>
      <nav className='max-w-7xl mx-auto h-full px-6 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Shield className="text-blue-500 w-8 h-8" />
          <h1 className='font-["IBM_Plex_Serif"] font-bold text-2xl tracking-tighter uppercase'>
            <NavLink to="/" className='text-white hover:text-blue-400 transition-colors'>Schützen</NavLink>
          </h1>
        </div>
        <ul className='hidden md:flex items-center gap-8 font-semibold text-slate-300'>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-white"}>Home</NavLink></li>
          <li><NavLink to="/user" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-white"}>Dashboard</NavLink></li>
          <li><NavLink to="/find" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-white"}>Find Guards</NavLink></li>
        </ul>
        <div className='flex items-center gap-4'>
          <NavLink to="/login" className='bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded-xl transition-all'>Login</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;