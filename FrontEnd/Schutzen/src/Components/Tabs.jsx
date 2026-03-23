import React, { useState } from 'react';
import { Shield, Clock, History, Settings, Activity } from 'lucide-react';

const Tabs = ({ userType = 'user', data = [] }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const tabConfig = {
    user: [
      { id: 'overview', label: 'Live Status', icon: <Activity size={18} /> },
      { id: 'history', label: 'Past Requests', icon: <History size={18} /> },
      { id: 'settings', label: 'Security Prefs', icon: <Settings size={18} /> },
    ],
    guard: [
      { id: 'overview', label: 'Available Jobs', icon: <Shield size={18} /> },
      { id: 'history', label: 'Earnings', icon: <Clock size={18} /> },
      { id: 'settings', label: 'Service Area', icon: <Settings size={18} /> },
    ]
  };

  const currentTabs = tabConfig[userType];

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="flex bg-slate-50/50 border-b border-slate-100 overflow-x-auto">
        {currentTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-8 py-5 text-sm font-bold whitespace-nowrap transition-all relative ${
              activeTab === tab.id 
                ? 'text-blue-600 bg-white' 
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {tab.icon}
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 shadow-[0_-2px_8px_rgba(37,99,235,0.3)]" />
            )}
          </button>
        ))}
      </div>
      <div className="p-8 min-h-75 animate-in fade-in duration-500">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-slate-900">Current Activity</h4>
            {data.length > 0 ? (
              <div className="grid gap-4">
                {data.map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex justify-between items-center">
                    <span className="font-medium">{item.title || 'Security Session'}</span>
                    <span className="text-xs font-bold bg-blue-100 text-blue-600 px-3 py-1 rounded-full uppercase">Active</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-48 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400">
                <Shield size={40} className="mb-2 opacity-20" />
                <p className="text-sm">No active {userType === 'user' ? 'requests' : 'jobs'} at the moment.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900">Recent Logs</h4>
            <p className="text-slate-500 text-sm italic tracking-tight">Accessing Schützen encrypted archives...</p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-md space-y-6">
            <h4 className="text-lg font-bold text-slate-900">System Configurations</h4>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition">
                <span className="text-sm font-semibold">Allow Real-time Tracking</span>
                <input type="checkbox" className="w-5 h-5 accent-blue-600" defaultChecked />
              </label>
              <label className="flex items-center justify-between p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition">
                <span className="text-sm font-semibold">Enable SOS Quick-Trigger</span>
                <input type="checkbox" className="w-5 h-5 accent-red-600" defaultChecked />
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;