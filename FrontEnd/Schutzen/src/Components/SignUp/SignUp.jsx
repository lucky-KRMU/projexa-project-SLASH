import React, { useState } from 'react'
import { Mail, Lock, User, MapPin, Phone, ShieldCheck, Github, Chrome, Facebook } from 'lucide-react';

const SignupPage = () => {
  const [activeTab, setActiveTab] = useState('user');

  return(
    <div className='min-h-screen bg-linear-to-br from-blue-400 via-blue-600 to-blue-800 items-center
    justify-center p-4 font-sans'>
      
      <div className='absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse'></div>

      <div className='relative w-full man-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden'></div>

      
    </div>
  )
}

export default SignupPage