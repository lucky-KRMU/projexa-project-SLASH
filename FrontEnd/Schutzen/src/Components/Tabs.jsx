import React, { useState } from 'react';
import { Shield, Clock, History, Settings, Activity, Terminal, Lock, ChevronRight } from 'lucide-react';

const Tabs = ({ userType = 'user', data = [] }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabConfig = {
    user: [
      { id: 'overview', label: 'Tactical Status', icon: <Activity size={16} /> },
      { id: 'history', label: 'Mission Logs', icon: <History size={16} /> },
      { id: 'settings', label: 'Security Config', icon: <Settings size={16} /> },
    ],
    guard: [
      { id: 'overview', label: 'Open Missions', icon: <Shield size={16} /> },
      { id: 'history', label: 'Pay Ledger', icon: <Clock size={16} /> },
      { id: 'settings', label: 'Deployment Area', icon: <Settings size={16} /> },
    ]
  };

  const currentTabs = tabConfig[userType] || tabConfig.user;

  return (
    <div className="w-full bg-slate-900 rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl relative">
      <div className="flex bg-slate-950/80 backdrop-blur-md border-b border-white/5 px-4 overflow-x-auto scrollbar-hide">
        {currentTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-3 px-8 py-6 text-[10px] font-black uppercase tracking-[0.25em] transition-all relative group ${
              activeTab === tab.id 
                ? 'text-blue-500' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <span className={`${activeTab === tab.id ? 'animate-pulse' : ''}`}>
              {tab.icon}
            </span>
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
            )}
          </button>
        ))}
      </div>

      <div className="p-10 min-h-87.5 bg-linear-to-b from-slate-900 to-slate-950 text-white relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_4px,3px_100%"></div>

        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-2">
                <Terminal size={14} className="text-blue-500" /> Live Telemetry
              </h4>
              <span className="text-[9px] font-bold text-green-500 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                SECURE_UPLINK_READY
              </span>
            </div>
            
            {data.length > 0 ? (
              <div className="grid gap-4">
                {data.map((item, idx) => (
                  <div key={idx} className="p-6 bg-slate-800/50 border border-white/5 rounded-2xl flex justify-between items-center group hover:border-blue-500/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="font-bold text-sm tracking-tight">{item.title || 'Standard Session'}</span>
                    </div>
                    <ChevronRight size={16} className="text-slate-600 group-hover:text-blue-500 transition-colors" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-56 border-2 border-dashed border-white/5 rounded-4xl flex flex-col items-center justify-center text-slate-600">
                <Lock size={40} className="mb-4 opacity-10" />
                <p className="text-[10px] font-black uppercase tracking-widest italic">No active data streams found.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Encrypted Archives</h4>
            <div className="space-y-4 opacity-50">
              {[1, 2].map((i) => (
                <div key={i} className="h-12 w-full bg-slate-800/30 rounded-xl animate-pulse"></div>
              ))}
            </div>
            <p className="text-blue-500/60 text-[10px] font-black uppercase tracking-widest animate-pulse italic">
              Accessing Schützen High-Security Vault...
            </p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">System Overrides</h4>
            <div className="space-y-4">
              {[
                { label: 'Ghost Protocol (Anonymize Location)', color: 'blue' },
                { label: 'Emergency Panic Trigger', color: 'red' },
                { label: 'Auto-Erase Cache on Logout', color: 'slate' }
              ].map((opt, idx) => (
                <label key={idx} className="flex items-center justify-between p-5 bg-slate-800/40 border border-white/5 rounded-2xl cursor-pointer hover:bg-slate-800 transition-all group">
                  <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">{opt.label}</span>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked={idx === 1} />
                    <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;