import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0a0f1b] text-white flex items-center justify-center p-4 font-sans overflow-hidden">
      

      <div className="relative w-full max-w-4xl aspect-square md:aspect-video border border-white/10 rounded-[40px] flex flex-col items-center justify-center bg-linear-to-b from-white/3to-transparent shadow-2xl">
        

        <div className="absolute inset-0 flex justify-center gap-6 opacity-5 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-24 h-full border-x border-slate-400 flex flex-col gap-2 p-4">
              {[...Array(10)].map((_, j) => (
                <div key={j} className="h-2 w-full bg-slate-500 rounded-full" />
              ))}
            </div>
          ))}
        </div>


        <div className="relative z-10 -mb-5">
          <div className="relative flex items-center justify-center">
            <h1 className="text-[120px] md:text-[180px] font-black tracking-tighter text-blue-400/90 leading-none select-none"
                style={{ WebkitTextStroke: '2px #60a5fa', textShadow: '0 0 30px rgba(59,130,246,0.3)' }}>
              4<span className="opacity-60 relative px-2">
                0

                <div className="absolute inset-0 bg-[#0a0f1b] w-1 md:w-2 h-full left-1/2 -translate-x-1/2 rotate-25" />
              </span>4
            </h1>
            
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -15, 0], 
                  x: [0, Math.random() * 10 - 5, 0],
                  rotate: [0, 45, 0] 
                }}
                transition={{ duration: 4 + Math.random() * 2, repeat: Infinity }}
                className="absolute w-2 h-2 bg-blue-300/40"
                style={{ 
                  top: `${Math.random() * 80}%`, 
                  left: `${Math.random() * 100}%`,
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                }}
              />
            ))}
          </div>
          <p className="text-center text-lg md:text-xl font-bold tracking-[0.6em] uppercase text-white drop-shadow-md">
            Page Not Found
          </p>
        </div>

        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20 w-48 h-64 flex items-center justify-center scale-75 md:scale-100"
        >
          <svg viewBox="0 0 200 250" className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

            <rect x="60" y="120" width="80" height="90" rx="15" fill="#2d3748" stroke="#1a202c" strokeWidth="4" />
            <rect x="70" y="130" width="60" height="50" rx="10" fill="#4a5568" />
            <circle cx="100" cy="145" r="8" fill="#ecc94b" className="animate-pulse" />
            
            <rect x="35" y="125" width="25" height="60" rx="10" fill="#2d3748" transform="rotate(10 35 125)" />
            <rect x="140" y="125" width="25" height="60" rx="10" fill="#2d3748" transform="rotate(-15 140 125)" />

            <path d="M60 110 C 60 70, 140 70, 140 110 L 140 125 L 60 125 Z" fill="#2d3748" stroke="#1a202c" strokeWidth="4" />
            <rect x="65" y="85" width="70" height="25" rx="5" fill="#1a202c" /> 
            <circle cx="85" cy="98" r="3" fill="#feb2b2" /> 
            <circle cx="115" cy="98" r="3" fill="#feb2b2" />
            
            <g transform="translate(155, 160) rotate(15)">
               <rect x="0" y="0" width="40" height="15" rx="4" fill="#4a5568" />
               <rect x="35" y="-5" width="10" height="25" rx="2" fill="#718096" />
            </g>
          </svg>

          <div className="absolute -right-35 top-42.5 pointer-events-none">
            <motion.div 
               animate={{ opacity: [0.3, 0.5, 0.3], scaleX: [1, 1.02, 1] }}
               transition={{ duration: 0.15, repeat: Infinity }}
               className="w-50 h-25 bg-yellow-400/20 blur-2xl rounded-full origin-left -rotate-12"
            />

            <motion.div 
               animate={{ opacity: [0, 1, 0], x: [0, 10, 0] }}
               transition={{ duration: 0.5, repeat: Infinity }}
               className="absolute top-10 right-10 text-yellow-300 font-bold italic text-xl"
            >
              ⚡
            </motion.div>
          </div>
        </motion.div>


        <div className="absolute bottom-24 w-full px-12 hidden md:flex justify-between items-end">
          <p className="text-[10px] tracking-widest leading-relaxed text-blue-200/40 uppercase max-w-45">
            Unauthorized access detected<br />or data corruption.<br />Our guard dogs are on it.
          </p>
          <p className="text-[10px] tracking-widest leading-relaxed text-blue-200/40 uppercase text-right max-w-45">
            Please return to<br />a secure location.
          </p>
        </div>
            <br />
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59,130,246,0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-8 flex items-center gap-3 px-8 py-3 rounded-full border border-blue-400/30 bg-blue-900/10 backdrop-blur-md group transition-all"
        >
          <div className="p-1 border border-blue-400/50 rounded-md">
            <Shield className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-100 cursor-pointer">
            {/* <button><a href="/" className='text-white font-bold text-2xl'>Return Home</a></button> */}
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default NotFound;