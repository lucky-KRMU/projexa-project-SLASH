import React from 'react';
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const NotFound = () => {
  return (
    <div className='min-h-screen bg-[#0a0f1b] text-white flex items-center justify-center p-6 font-sans select-none'> 
    
    <div className='relative w-full max-w-5xl aspect-square md:aspect-video border border-white/5 rounded-[40px] flex flex-col items-center justify-center overflow-hidden bg-linear-to-b from-white/2 to-transparent'>
    
    <div className='absoulute inset-0 flex justify-center gap-4 opacity-10 pointer-events-none'>
       {[...Array(3)].map((_, i) => (
            <div key={i} className="w-32 h-full border-x border-slate-500 flex flex-col gap-4 p-4">
              {[...Array(6)].map((_, j) => (
                <div key={j} className="h-4 w-full bg-slate-700 rounded-sm" />
              ))}
            </div>
          ))}
    </div>
    <div className='relative z-10'>
        <motion.div 
        inital={{ opacity: 0 , y: 20}}
        animate ={{ opacity: 1 , y: 0}}
        className = "text-[140px] md:text-[220px] font-black leading-none flex items-center justify-center"> 
        <span className='text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]'>4</span>
          <div className='relative'>
            <span className='text-blue-400 opacity-80'style={{ WebkitTextStroke: '2px #60a5fa' }}>0</span>
          </div>
        </motion.div>
    </div>
    </div>
    
    </div>
  )
}


export default NotFound;
