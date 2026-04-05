import React, { useState } from 'react';
import { ArrowRight, Shield, Camera, Upload, Lock, Mail, User as UserIcon } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '', password: '', role: 'user', firstName: '', lastName: '', userName: '', location: '', profileImage: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setFormData({ ...formData, profileImage: reader.result });
    if (file) reader.readAsDataURL(file);
  };

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
      } else { alert(data.error); setLoading(false); }
    } catch (err) { alert("Grid Offline"); setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 font-sans">
      <div className="max-w-5xl w-full bg-slate-900 rounded-[3rem] shadow-2xl flex flex-col md:flex-row overflow-hidden border border-white/5">
        <div className="md:w-5/12 bg-slate-800 p-12 text-white flex flex-col justify-between border-r border-white/5 relative">
          <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <Shield size={48} className="text-blue-500 mb-8" />
            <h2 className="text-5xl font-black tracking-tighter mb-4">{isLogin ? "System\nAccess" : "Initialize\nProtocol"}</h2>
            <p className="text-slate-400 text-sm font-medium">Verified security for the modern age.</p>
          </div>
        </div>

        <div className="md:w-7/12 p-12 bg-slate-900/50 backdrop-blur-xl">
          {!isLogin && (
            <div className="flex bg-slate-950 p-1 rounded-2xl mb-8 border border-white/5">
              {['user', 'guard'].map(r => (
                <button key={r} type="button" onClick={() => setFormData({ ...formData, role: r })}
                  className={`flex-1 py-3 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all ${formData.role === r ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500'}`}>{r}</button>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input className="w-full bg-slate-950 border border-white/5 p-4 rounded-2xl text-white outline-none focus:ring-1 focus:ring-blue-500" name="email" type="email" placeholder="Email" onChange={handleChange} required />
            {!isLogin && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <input className="bg-slate-950 border border-white/5 p-4 rounded-2xl text-white outline-none" name="firstName" placeholder="First Name" onChange={handleChange} required />
                  <input className="bg-slate-950 border border-white/5 p-4 rounded-2xl text-white outline-none" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                </div>
                <input className="w-full bg-slate-950 border border-white/5 p-4 rounded-2xl text-white outline-none" name="location" placeholder="Deployment Location" onChange={handleChange} required />

                {formData.role === 'guard' && (
                  <label className="flex items-center gap-4 p-6 bg-blue-600/5 border border-dashed border-blue-500/20 rounded-2xl cursor-pointer group">
                    <div className="w-12 h-12 bg-slate-950 rounded-xl overflow-hidden border border-white/10 flex items-center justify-center">
                      {formData.profileImage ? <img src={formData.profileImage} className="w-full h-full object-cover" /> : <Camera size={20} className="text-slate-700" />}
                    </div>
                    <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest">
                      {formData.profileImage ? "ID Photo Uploaded" : "Upload Biometric ID Photo"}
                      <input type="file" className="hidden" accept="image/*" onChange={handleImage} required />
                    </div>
                  </label>
                )}
              </>
            )}
            <input className="w-full bg-slate-950 border border-white/5 p-4 rounded-2xl text-white outline-none" type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-blue-900/20">
              {loading ? "Authenticating..." : isLogin ? "Access Terminal" : "Register Agent"}
            </button>
          </form>
          <button onClick={() => setIsLogin(!isLogin)} className="mt-8 text-slate-500 text-[10px] font-black uppercase tracking-widest block mx-auto hover:text-blue-400">
            {isLogin ? "Need Identity? Register" : "Existing Agent? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;