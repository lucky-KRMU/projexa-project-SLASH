import React, { useState, useEffect } from 'react';
import { Shield, MapPin, AlertTriangle, Zap, Briefcase, Lock } from 'lucide-react';
import Tabs from "../components/Tabs.jsx";

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
        })
        .catch(() => setLoading(false));
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping scale-150"></div>
          <Shield size={60} className="text-blue-500 relative animate-pulse" />
        </div>
        <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em]">Secure Session Initializing...</p>
      </div>
    );
  }

  if (!user) return <div className="p-20 text-center font-bold">Session Expired. Please Login.</div>;

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-slate-900 text-white py-4 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-bold uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>System Live: {user.location}</span>
          </div>
          <button className="text-red-400 border border-red-600/30 px-3 py-1 rounded-full bg-red-600/10">Rapid Response Active</button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-8 mb-10 items-center">
          <div className="lg:col-span-2 flex items-center gap-6">
            <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white text-3xl font-bold shadow-xl shadow-blue-200">
              {user.firstName ? user.firstName[0] : 'U'}
            </div>
            <div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tighter">{user.firstName} {user.lastName}</h1>
              <div className="flex gap-4 mt-1 text-slate-500 text-sm font-semibold">
                <span className="flex items-center gap-1"><MapPin size={14} /> {user.location}</span>
                <span className="flex items-center gap-1"><Briefcase size={14} /> {user.gigWorkType}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-6 text-right">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Hourly Rate</p>
              <p className="text-2xl font-black text-slate-900">${user.priceIdeal}</p>
            </div>
            <button className="bg-red-600 text-white p-4 rounded-2xl shadow-lg shadow-red-200 hover:scale-105 transition-all">
              <AlertTriangle size={24} />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <Tabs userType="user" data={[]} />
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Zap size={20} className="text-blue-600" /> Bio-Security Brief</h3>
              <p className="text-slate-600 italic border-l-4 border-blue-600 pl-4 py-2 bg-slate-50">"{user.description || "No active mission description."}"</p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="bg-blue-600 text-white p-8 rounded-[3rem] shadow-xl shadow-blue-100">
              <h3 className="text-xl font-bold mb-4">Quick Request</h3>
              <p className="text-blue-100 text-sm mb-6">Deploy a priority SOS to vetted {user.gigWorkType} guards.</p>
              <button className="w-full bg-white text-blue-600 font-bold py-4 rounded-2xl hover:bg-blue-50 transition shadow-lg">Broadcast SOS</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;