import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, Search, Wifi, Clock, ArrowRight } from 'lucide-react';

const LoadingPage = () => {
  const navigate = useNavigate();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const loadingMessages = [
    "Establishing secure network protocols...",
    "Vetting available security professionals...",
    "Syncing real-time global map data...",
    "Finalizing your encrypted profile...",
    "All systems clear. System is live."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => navigate('/dashboard'), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 40);
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [navigate, loadingMessages.length]);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-blue-900/40 relative overflow-hidden">
      <header className='h-20 w-full bg-slate-900 border-b border-slate-800 sticky top-0 z-100'>
        <nav className='max-w-7xl mx-auto h-full px-6 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Shield className="text-blue-500 w-8 h-8" />
            <h1 className='font-serif font-bold text-2xl tracking-tighter uppercase text-white'>
              Schtuzen
            </h1>
          </div>
          <div className='flex items-center gap-4 text-slate-300 font-semibold'>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">System Loading</span>
          </div>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-20 flex items-center justify-center min-h-[85vh]">
        <div className="w-full flex flex-col md:flex-row items-center gap-16 relative">
          
          <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[150px] animate-pulse"></div>
          <div className="relative flex-1">
            <div className="relative">
              <div className="bg-slate-800 p-8 rounded-[3rem] shadow-2xl relative border border-slate-700">
                <div className="flex items-center justify-between mb-10">
                  <Shield className="text-blue-500" size={40} />
                  <div className="h-2 w-32 bg-slate-700 rounded-full"></div>
                </div>
                <div className="text-center space-y-4 pt-10 pb-16">
                  <h1 className="text-6xl font-black text-white tracking-tighter">SCHTUZEN</h1>
                  <p className="text-2xl font-bold text-slate-200">System Booting...</p>
                000100</div>
              </div>

              <div className="display-hidden lg:block absolute -left-16 bottom-16 bg-white p-6 rounded-4xl shadow-2xl border border-slate-100 flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <UserIcon size={32} />
                </div>
                <div className="space-y-1">
                   <p className="font-bold text-slate-900">SYSTEM ANALYST</p>
                   <p className="text-xs text-slate-500 uppercase font-bold tracking-wider animate-pulse">Waiting for network sync...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-8 relative z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Schützen core services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tighter">
              Authenticating <br />
              <span className="text-blue-500">Secure Assets.</span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed italic border-l-4 border-blue-600 pl-4 py-2 bg-slate-900">
               "{loadingMessages[messageIndex]}"
            </p>
            <div className="w-full max-w-md pt-6">
              <div className="flex justify-between items-center text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest">
                <span>SYSTEM STATUS</span>
                <span>{loadingProgress}% COMPLETE</span>
              </div>
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out" 
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start gap-4 pt-4 text-blue-500">
                <StatusIcon icon={<Search/>} label="Network Scanner" />
                <StatusIcon icon={<Wifi/>} label="Satellite Sync" />
                <StatusIcon icon={<Clock/>} label="Vetting Protocol" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const StatusIcon = ({icon, label}) => (
    <div className="p-3 bg-slate-800 rounded-2xl border border-slate-700 flex flex-col items-center gap-1 group">
        <div className="group-hover:scale-110 group-hover:text-white transition-all">{icon}</div>
        <span className="text-[10px] font-bold text-slate-500 group-hover:text-blue-400 uppercase tracking-widest pt-1">{label}</span>
    </div>
);
const UserIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" {...props}>
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
)

export default LoadingPage;