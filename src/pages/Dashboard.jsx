import React, { useState, useEffect } from 'react';
import { Shield, MapPin, AlertTriangle, Zap, Briefcase, Lock, Activity, Target } from 'lucide-react';
import Tabs from "../Components/Tabs.jsx";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('schutzen_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setLoading(false);
    } else {
      fetch('http://localhost:8000/api/users')
        .then(res => res.json())
        .then(data => {
          if (data.length > 0) setUser(data[0]);
          setLoading(false);
        }).catch(() => setLoading(false));
    }
  }, []);

  if (loading) return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin mb-4"></div>
      <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em]">Decrypting Profile...</p>
    </div>
  );

  if (!user) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="bg-white p-12 rounded-[3rem] shadow-2xl text-center border border-slate-200">
        <AlertTriangle size={60} className="text-red-500 mx-auto mb-6" />
        <h2 className="text-3xl font-black text-slate-900 mb-2">Unauthorized Access</h2>
        <p className="text-slate-500 mb-8">No active session found. Please re-authenticate.</p>
        <button onClick={() => window.location.href='/login'} className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest">Login</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20 font-sans">
      <div className="bg-slate-900 text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-green-500">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Uplink Active
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">Sector: {user.location}</span>
          </div>
          <div className="flex items-center gap-4 text-blue-400">
            <Activity size={12} /> Data Syncing 100%
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-linear-to-tr from-blue-600 to-blue-400 rounded-[2.5rem] flex items-center justify-center text-5xl font-black shadow-2xl mb-6 border-4 border-white/10">
                  {user.firstName[0]}
                </div>
                <h1 className="text-3xl font-black tracking-tighter mb-1">{user.firstName} {user.lastName}</h1>
                <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">Verified {user.role}</p>
                
                <div className="w-full space-y-4 pt-6 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-[10px] font-bold uppercase">Location</span>
                    <span className="text-sm font-bold flex items-center gap-1"><MapPin size={12} /> {user.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-[10px] font-bold uppercase">Base Rate</span>
                    <span className="text-sm font-bold text-blue-400">${user.priceIdeal}/hr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-[10px] font-bold uppercase">Specialty</span>
                    <span className="text-sm font-bold">{user.gigWorkType}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-blue-200 group">
               <h3 className="font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                 <Target size={18} /> Instant SOS
               </h3>
               <p className="text-blue-100 text-sm mb-6 leading-relaxed">Broadcast a level-1 emergency alert to all units in {user.location}.</p>
               <button className="w-full bg-white text-blue-600 font-black py-4 rounded-2xl hover:bg-blue-50 transition transform active:scale-95 shadow-lg">Initialize Broadcast</button>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-sm">
              <div className="mb-10">
                <Tabs userType={user.role} data={[]} />
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <Zap size={22} className="text-blue-600" /> Professional Summary
                  </h3>
                  <div className="bg-slate-50 border-l-4 border-blue-600 p-8 rounded-2xl">
                    <p className="text-slate-600 italic leading-relaxed text-lg font-medium">
                      "{user.description || "No active tactical description provided for this profile."}"
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                   <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                      <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Total Missions</p>
                      <p className="text-2xl font-black text-slate-900">14</p>
                   </div>
                   <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                      <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Trust Rating</p>
                      <p className="text-2xl font-black text-blue-600">A+</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;