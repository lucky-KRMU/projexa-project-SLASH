import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, ArrowRight, AlertCircle, Terminal, WifiOff } from 'lucide-react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500/30 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 border border-blue-500/10 rounded-full animate-[ping_5s_linear_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 border border-blue-500/5 rounded-full animate-[ping_7s_linear_infinite]"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_4px,3px_100%] pointer-events-none"></div>
      </div>

      <main className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
          <div className="relative group">
            <div className="absolute -inset-10 bg-blue-600/20 blur-[120px] rounded-full group-hover:bg-blue-500/30 transition-all duration-700"></div>
            <div className="relative bg-slate-900 border border-white/10 p-12 rounded-[4rem] shadow-2xl backdrop-blur-xl">
              <div className="absolute top-6 left-6 flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                <div className="w-2 h-2 rounded-full bg-slate-700"></div>
              </div>
              <div className="text-center py-10">
                <div className="relative inline-block mb-6">
                  <Shield size={80} className="text-blue-500 opacity-20 absolute top-0 left-0 scale-125 blur-sm" />
                  <WifiOff size={80} className="text-blue-600 relative z-10 animate-bounce" />
                </div>
                <h1 className="text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-slate-700">
                  404
                </h1>
                <div className="mt-2 text-[10px] font-black uppercase tracking-[0.5em] text-blue-500">
                  Signal_Lost
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/5 font-mono text-[9px] text-slate-500 space-y-1">
                <p>&gt; ERROR: SECTOR_NOT_FOUND</p>
                <p>&gt; COORDS: [NULL_PTR_EXCEPTION]</p>
                <p>&gt; STATUS: UNAUTHORIZED_ZONE</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-8 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full w-fit mx-auto md:mx-0">
              <AlertCircle size={14} className="text-red-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Security Alert</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tighter">
              Sector <br />
              <span className="text-blue-600">Unreachable.</span>
            </h2>
            <div className="relative">
              <p className="text-lg text-slate-400 leading-relaxed italic border-l-4 border-blue-600 pl-6 py-2 bg-white/5 rounded-r-2xl">
                "The encryption key for this coordinate has expired or never existed. Your current path has led you outside the Schtuzen secure grid."
              </p>
            </div>
            <div className="pt-8 flex flex-col sm:flex-row gap-4 items-center md:items-start">
              <button 
                onClick={() => navigate('/')} 
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black px-10 py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-blue-900/40 transition-all active:scale-95 group"
              >
                Return to Base <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => navigate('/find')}
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-bold px-10 py-5 rounded-2xl flex items-center justify-center gap-2 border border-white/5 transition-all"
              >
                <Terminal size={18} /> Re-scan Grid
              </button>
            </div>
          </div>
        </div>
      </main>
      <div className="absolute bottom-10 w-full px-10 flex justify-between items-end opacity-20 md:flex">
        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500">
          Schtuzen_Secure_Protocol // v4.0.4
        </div>
        <div className="flex gap-4">
          <div className="h-1 w-20 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-blue-600 animate-[loading_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default NotFoundPage;