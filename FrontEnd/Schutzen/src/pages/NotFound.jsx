import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, ArrowRight } from 'lucide-react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-blue-900/40 relative overflow-hidden">
      
      {/* <header className='h-20 w-full bg-slate-900 border-b border-slate-800 sticky top-0 z-100'>
        <nav className='max-w-7xl mx-auto h-full px-6 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Shield className="text-blue-500 w-8 h-8" />
            <h1 className='font-serif font-bold text-2xl tracking-tighter uppercase text-white'>
              Schtuzen
            </h1>
          </div>
          <div className='flex items-center gap-4 text-slate-300 font-semibold'>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Page Not Found</span>
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
                  <h1 className="text-6xl font-black text-white tracking-tighter">404</h1>
                  <p className="text-2xl font-bold text-slate-200">Page Not Found</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-8 relative z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Error Encountered</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tighter">
              Area <br />
              <span className="text-blue-500">Unverified.</span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed italic border-l-4 border-blue-600 pl-4 py-2 bg-slate-900">
              "The coordinates you provided do not match any verified Schtuzen sectors. It seems you've wandered off-path."
            </p>

            <div className="pt-6">
              <button 
                onClick={() => navigate('/')} 
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-5 rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-blue-900/40 transition-all active:scale-95"
              >
                Return to Base <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </main> */}
    </div>
  );
};

export default NotFoundPage;