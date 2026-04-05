import React, { useState, useEffect } from 'react';
import { Shield, Star, MapPin, Zap } from 'lucide-react';

const FindGuards = () => {
  const [guards, setGuards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/guards')
      .then(res => res.json())
      .then(data => setGuards(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 bg-slate-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-5xl font-black tracking-tighter text-slate-900">Active Units</h2>
          <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em] mt-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Real-time Sector Scanning
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {guards.map(guard => (
          <div key={guard._id} className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 group">
            <div className="flex justify-between mb-8">
              <div className="w-20 h-20 rounded-3xl overflow-hidden border-4 border-slate-50 shadow-xl group-hover:rotate-3 transition-transform">
                {guard.profileImage ? <img src={guard.profileImage} className="w-full h-full object-cover" /> : <div className="bg-blue-600 w-full h-full flex items-center justify-center text-white font-black text-2xl">{guard.firstName[0]}</div>}
              </div>
              <div className="bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full h-fit flex items-center gap-1 text-xs font-black">
                <Star size={14} fill="currentColor" /> {guard.rating}
              </div>
            </div>
            
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">{guard.firstName} {guard.lastName}</h3>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1 mb-6 flex items-center gap-2">
              <MapPin size={12} className="text-blue-500" /> {guard.location}
            </p>
            
            <div className="flex justify-between items-center border-t border-slate-100 pt-8">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rate</span>
                <span className="text-2xl font-black text-slate-900 tracking-tighter">${guard.priceIdeal}/hr</span>
              </div>
              <button className="bg-slate-900 hover:bg-blue-600 text-white p-4 rounded-2xl shadow-xl transition-all active:scale-95 group">
                <Zap size={20} className="group-hover:fill-current" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindGuards;