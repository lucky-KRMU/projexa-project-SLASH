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
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[140px] md:text-[220px] font-black leading-none flex items-center justify-center"
          >
            <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">4</span>
            <div className="relative">
              <span className="text-blue-400 opacity-80" style={{ WebkitTextStroke: '2px #60a5fa' }}>0</span>
              <div className="absolute inset-0 bg-[#0a0f1b] w-4 h-full left-1/2 -translate-x-1/2 rotate-12" />
            </div>
            <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">4</span>
          </motion.div>
          <h2 className="text-center text-xl md:text-2xl font-bold tracking-[0.5em] mt-5 uppercase text-white">
            Page Not Found
          </h2>
        </div>
        <div className='relative mt-8 z-20 '>
          <div className='relative w-24 h-32 md:w-32 md:h-40 bg-slate-800 rounded-t-3xl border-x-4 border-t-4 border-slate-900 shadow-2xl'>
            <div className='absolute top-4 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-slate-700 rounded-lg flex items-center justify-center'>
              <div className='w-1/2 h-1 bg-slate-900 rounded-full'></div>

              <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 0.2 }}
              className="absolute -right-40 top-16 w-64 h-32 bg-yellow-400/20 blur-2xl rounded-full origin-left -rotate-12 pointer-events-none"
            />
            <div className="absolute -right-2 top-20 w-8 h-4 bg-slate-600 rounded-full rotate-[-15deg] border-2 border-slate-900" />
            </div>
          </div>
          
        </div>


      </div>

    </div>
  )
}


export default NotFound;
