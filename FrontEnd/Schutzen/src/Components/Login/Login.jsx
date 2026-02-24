import React, { useState } from 'react'
import { Github, Chrome, Facebook, Twitter } from 'lucide-react';
const SocialButton = ({ icon }) => (
  <button className="flex-1 flex justify-center items-center py-2 bg-white rounded-md hover:bg-gray-100 transition-colors shadow-sm">
    <span className="text-gray-700">{icon}</span>
  </button>
);
const LoginPage = () => {
  const [role, setRole] = useState('User');
  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-linear-to-br from-blue-400 via-blue-600 to-blue-800 p-4'>

      <div className='relative w-full max-w-5xl h-150 bg-linear-to-br from-[#0047ab] to-[#002147] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center '>

        <div className='absolute top-10 left-10 w-32 h-32 bg-blue-400 opacity-20 blur-3xl rounded-full'></div>

        <div className='absolute bottom-10 right-10 w-64 h-64 bg-cyan-500 opacity-10 blur-3xl rounded-full'></div>

        <div className='relative z-10 w-full max-w-md p-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl'>

          <div className='text-white mb-8'>
            <p className='text-sm font-light opacity-80 uppercase'>Schũtzen</p>
            <h1 className='text-4xl font-bold'>Login</h1>
          </div>

          <div className="flex bg-black/20 p-1 rounded-lg mb-6 relative">
            <div className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white/20 rounded-md transition-all duration-300 ease-in-out ${role === 'Guard' ? 'translate-x-full' : 'translate-x-0'}`}></div>
            <button
              onClick={() => setRole('User')}
              className={`flex-1 py-2 text-sm font-medium z-10 transition-colors ${role === 'User' ? 'text-white' : 'text-white/50'}`}>User</button>
            <button
              onClick={() => setRole('Guard')}
              className={`flex-1 py-2 text-sm font-medium z-10 transition-colors ${role === 'Guard' ? 'text-white' : 'text-white/50'}`}>Guard</button>
          </div>

          <form className='space-y-4'>
            <div>
              <label className='block mb-1 text-white text-sm ml-1'>Email</label>
              <input type="email" placeholder='username@gmail.com' className='w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition' />
            </div>

            <div>
              <label className='block mb-1 text-white text-sm ml-1'></label>
              <input type="passord" placeholder='password' className="w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
              <button type='button' className='block mt-2 text-xs text-blue-200 hover:underline'>Forgot Password?</button>
            </div>
          </form>
          <div className='mt-6'>
            <p className='text-center text-xs text-blue-100 mb-4 opacity-70'>or continue with</p>
            <div className='flex justify-between gap-4'>
              <SocialButton icon={<Chrome size={20} />} />
              <SocialButton icon={<Twitter size={20} />} />
              <SocialButton icon={<Facebook size={20} />} />
            </div>
          </div>
          <p className='mt-8 text-center text-sm text-white opacity-80'>
            Don't have an account? <a href="/signup" className="font-semibold hover:underline">Register for free</a>
          </p>
        </div>
      </div>
    </div>
  );
};


export default LoginPage