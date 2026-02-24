import React, { useState } from 'react'
import { Mail, Lock, User, MapPin, Phone, ShieldCheck, Github, Chrome, Facebook } from 'lucide-react';

const SignupPage = () => {
  const [activeTab, setActiveTab] = useState('user');

  return(
    <div className='min-h-screen bg-linear-to-br from-blue-400 via-blue-600 to-blue-800 items-center
    justify-center p-4 font-sans'>
      
      <div className='absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse'></div>

      <div className='relative w-full man-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden'></div>

      <div className='flex p-2 bg-black/20 m-6 rounded-2xl'>

      <button onClick={() => setActiveTab('user')} className={`flex-1 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${ activeTab === 'user' ? 'bg-white text-blue-700 shadow-lg' : 'text-white hover:bg-white/5</div>'}`}>User Sign Up</button>
      
      <button onClick={() => setActiveTab('guard')} className={`flex-1 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${ activeTab === 'guard' ? 'bg-white text-blue-700 shadow-lg' : 'text-white hover:bg-white/5'}`}>Guard Sign Up</button>
      </div>

      <div className='px-8 pb-10'>
        <h2 className='text-3xl font-bold text-white text-center mb-2'>Create Account </h2>
        <p className='text-blue-100 text-center mb-8 text-sm italic'>
          {activeTab === 'user' ? 'Join the community as a user' : 'Register as a verified security partner' }
        </p>
        <form className='space-y-4'>
          <div className='relative'>
            <User className='absolute left-3 top-3 text-white/60 w-5 h-5'></User>
            <input type="text" placeholder='Full Name' className='w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-10 pr-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40' />
          </div>

          <div className='relative'>
            <Mail className='absolute left-3 top-3 text-white/60 w-5 h-5'></Mail>
            <input type="email" placeholder='Email Address'
            className='w-full bg-white/20 rounded-xl py-3 pl-10 pr-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignupPage