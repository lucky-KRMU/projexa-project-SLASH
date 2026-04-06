import React, { useState } from 'react';
import { ArrowRight, Shield, Lock, Mail, User as UserIcon, MapPin } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '', 
    password: '', 
    role: 'user', 
    firstName: '', 
    lastName: '', 
    userName: '', // Required by backend
    location: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const path = isLogin ? 'login' : 'signup';
    try {
      const res = await fetch(`http://localhost:8000/api/auth/${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('schutzen_user', JSON.stringify(data));
        window.location.href = data.role === 'guard' ? '/find' : '/user';
      } else { 
        alert(data.error); 
        setLoading(false); 
      }
    } catch (err) { 
      alert("Grid Offline: Connection to Schützen Terminal Failed."); 
      setLoading(false); 
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 font-sans selection:bg-blue-500/30">
      <div className="max-w-5xl w-full bg-slate-900 rounded-[3rem] shadow-2xl flex flex-col md:flex-row overflow-hidden border border-white/5">
        
        {/* --- LEFT PANEL: BRANDING --- */}
        <div className="md:w-5/12 bg-slate-800 p-12 text-white flex flex-col justify-between border-r border-white/5 relative">
          <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <Shield size={48} className="text-blue-500 mb-8" />
            <h2 className="text-5xl font-black tracking-tighter mb-4">
              {isLogin ? "System\nAccess" : "Initialize\nProtocol"}
            </h2>
            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs">
              Verified on-demand protection for the modern age. Secure your sector today.
            </p>
          </div>
          <div className="relative z-10">
             <div className="flex items-center gap-2 text-blue-400">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Encrypted Uplink Active</span>
             </div>
          </div>
        </div>

        {/* --- RIGHT PANEL: FORM --- */}
        <div className="md:w-7/12 p-12 bg-slate-900/50 backdrop-blur-xl">
          {!isLogin && (
            <div className="flex bg-slate-950 p-1 rounded-2xl mb-8 border border-white/5">
              {['user', 'guard'].map(r => (
                <button 
                  key={r} 
                  type="button" 
                  onClick={() => setFormData({ ...formData, role: r })}
                  className={`flex-1 py-3 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all ${
                    formData.role === r ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-500 transition-colors" size={18} />
              <input 
                className="w-full bg-slate-950 border border-white/5 p-4 pl-12 rounded-2xl text-white outline-none focus:ring-1 focus:ring-blue-500 transition-all" 
                name="email" 
                type="email" 
                placeholder="Email Terminal" 
                onChange={handleChange} 
                required 
              />
            </div>

            {!isLogin && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    className="bg-slate-950 border border-white/5 p-4 rounded-2xl text-white outline-none focus:ring-1 focus:ring-blue-500 transition-all" 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={handleChange} 
                    required 
                  />
                  <input 
                    className="bg-slate-950 border border-white/5 p-4 rounded-2xl text-white outline-none focus:ring-1 focus:ring-blue-500 transition-all" 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="relative group">
                  <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-500 transition-colors" size={18} />
                  <input 
                    className="w-full bg-slate-950 border border-white/5 p-4 pl-12 rounded-2xl text-white outline-none focus:ring-1 focus:ring-blue-500 transition-all" 
                    name="userName" 
                    placeholder="Agent Identifier (Username)" 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-500 transition-colors" size={18} />
                  <input 
                    className="w-full bg-slate-950 border border-white/5 p-4 pl-12 rounded-2xl text-white outline-none focus:ring-1 focus:ring-blue-500 transition-all" 
                    name="location" 
                    placeholder="Primary Sector (Location)" 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </>
            )}

            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-500 transition-colors" size={18} />
              <input 
                className="w-full bg-slate-950 border border-white/5 p-4 pl-12 rounded-2xl text-white outline-none focus:ring-1 focus:ring-blue-500 transition-all" 
                type="password" 
                name="password" 
                placeholder="Access Cipher" 
                onChange={handleChange} 
                required 
              />
            </div>

            <button 
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-xl shadow-blue-900/20 transition-all active:scale-95 flex items-center justify-center gap-2 group"
            >
              {loading ? "Decrypting..." : (
                <>
                  {isLogin ? "Access Terminal" : "Register Agent"} <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </>
              )}
            </button>
          </form>

          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="mt-8 text-slate-500 text-[10px] font-black uppercase tracking-widest block mx-auto hover:text-blue-400 transition-colors"
          >
            {isLogin ? "No identity on grid? Initialize" : "Existing Agent? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;