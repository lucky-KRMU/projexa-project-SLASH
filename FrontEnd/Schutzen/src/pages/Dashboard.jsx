import React, { useState, useEffect } from 'react';
import { Shield, MapPin, AlertTriangle, Zap, Briefcase, Lock, User as UserIcon } from 'lucide-react';
import Tabs from "../components/Tabs.jsx"; // Ensure this path and casing are correct

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch('http://localhost:8000/api/users')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // Taking the first user from your MongoDB array
  //       setUser(data[0]); 
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Connection to Schützen API failed:", err);
  //       setLoading(false);
  //     });
  // }, []);

  // --- INLINE LOADING UI ---
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping scale-150"></div>
          <div className="relative bg-slate-800 p-8 rounded-[2.5rem] border border-slate-700 shadow-2xl">
            <Shield size={60} className="text-blue-500 animate-pulse" />
            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-xl shadow-lg">
              <Lock size={18} />
            </div>
          </div>
        </div>
        <h2 className="text-white font-serif text-2xl font-bold tracking-tight mb-2">SCHTUZEN</h2>
        <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em] animate-pulse">
          Establishing Secure Session...
        </p>
      </div>
    );
  }

  // --- ERROR STATE ---
  // if (!user) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-slate-50">
  //       <div className="text-center p-12 bg-white rounded-[3rem] border border-slate-200 shadow-xl">
  //         <AlertTriangle size={48} className="text-red-500 mx-auto mb-4" />
  //         <h3 className="text-xl font-bold text-slate-900">User Data Not Found</h3>
  //         <p className="text-slate-500 mb-6">We couldn't retrieve your security profile.</p>
  //         <button onClick={() => window.location.href='/signup'} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold">
  //           Create Profile
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  // --- MAIN DASHBOARD UI ---
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Top Status Bar */}
      <div className="bg-slate-900 text-white py-4 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              System Live: {user.location}
            </span>
          </div>
          <button className="text-xs font-bold bg-red-600/20 text-red-400 border border-red-600/30 px-3 py-1 rounded-full">
            Rapid Response Active
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2 flex items-center gap-6">
            <div className="w-24 h-24 bg-blue-600 rounded4xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl shadow-blue-200">
              {user.firstName[0]}
            </div>
            <div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight font-serif">
                {user.firstName} {user.lastName}
              </h1>
              <div className="flex flex-wrap gap-3 mt-2 text-slate-500 text-sm font-medium">
                <span className="flex items-center gap-1"><MapPin size={14} className="text-blue-500" /> {user.location}</span>
                <span className="flex items-center gap-1"><Briefcase size={14} className="text-blue-500" /> {user.gigWorkType}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4">
            <div className="text-right">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Target Hourly Rate</p>
              <p className="text-2xl font-black text-slate-900">${user.priceIdeal}</p>
            </div>
            <button className="bg-red-600 text-white p-4 rounded-2xl shadow-lg shadow-red-200 hover:scale-105 transition-all">
              <AlertTriangle size={24} />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            {/* Using the Tabs component from your components folder */}
            <Tabs userType="user" data={[]} />
            
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Zap size={20} className="text-blue-600" /> Security Bio
              </h3>
              <p className="text-slate-600 italic border-l-4 border-blue-600 pl-4 bg-slate-50 py-2">
                "{user.description || "No description provided."}"
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-blue-600 text-white p-8 rounded-[2.5rem] shadow-xl shadow-blue-100 relative overflow-hidden">
              <h3 className="text-xl font-bold mb-4">Quick Request</h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                Broadcast an SOS to verified {user.gigWorkType} guards in {user.location}.
              </p>
              <button className="w-full bg-white text-blue-600 font-bold py-4 rounded-2xl shadow-lg hover:bg-blue-50 transition">
                Broadcast SOS
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;