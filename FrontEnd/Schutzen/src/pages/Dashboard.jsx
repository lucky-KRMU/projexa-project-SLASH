import React, { useState, useEffect } from 'react';
import { Shield, MapPin, AlertTriangle, Zap, Briefcase, User as UserIcon } from 'lucide-react';
import Tabs from "../Components/Tabs.jsx";
import Loading from "./LoadingPage.jsx";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/api/users')
      .then((res) => res.json())
      .then((data) => {
        setUser(data[0]); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Connection to Schützen API failed:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading message="Syncing Encrypted Profiles..." />;
  if (!user) return <div className="p-20 text-center text-slate-500 font-bold">No user data found. Please sign up.</div>;
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
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
            <div className="w-24 h-24 bg-blue-600 rounded-4xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              {user.firstName[0]}
            </div>
            <div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight font-serif">
                {user.firstName} {user.lastName}
              </h1>
              <div className="flex flex-wrap gap-3 mt-2 text-slate-500 text-sm font-medium">
                <span className="flex items-center gap-1"><MapPin size={14} /> {user.location}</span>
                <span className="flex items-center gap-1"><Briefcase size={14} /> {user.gigWorkType}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4">
            <div className="text-right">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Hourly Rate</p>
              <p className="text-2xl font-black text-slate-900">${user.priceIdeal}</p>
            </div>
            <button className="bg-red-600 text-white p-4 rounded-2xl shadow-lg">
              <AlertTriangle size={24} />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <Tabs userType="user" data={[]} />
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Zap size={20} className="text-blue-600" /> Security Description
              </h3>
              <p className="text-slate-600 italic border-l-4 border-blue-600 pl-4 bg-slate-50 py-2">
                "{user.description || "No description provided."}"
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-blue-600 text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
              <h3 className="text-xl font-bold mb-4">Quick Request</h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                Broadcast an SOS to verified {user.gigWorkType} guards in {user.location}.
              </p>
              <button className="w-full bg-white text-blue-600 font-bold py-4 rounded-2xl shadow-lg">
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