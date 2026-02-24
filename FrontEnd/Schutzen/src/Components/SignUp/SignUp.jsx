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

      
    </div>
  )
}

export default SignupPage