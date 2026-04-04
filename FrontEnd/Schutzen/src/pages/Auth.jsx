import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user', // Default to user
    firstName: '',
    lastName: '',
    userName: '',
    location: ''
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <form onSubmit={handleSubmit} className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-200 space-y-4">
        <h2 className="text-3xl font-black text-slate-900 text-center mb-8">
          {isLogin ? "Sector Login" : "Initialize Profile"}
        </h2>

        {/* ROLE SELECTOR (Only show on Signup) */}
        {!isLogin && (
          <div className="flex bg-slate-100 p-1 rounded-2xl mb-6">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, role: 'user' })}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${formData.role === 'user' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
            >
              CLIENT
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, role: 'guard' })}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${formData.role === 'guard' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
            >
              GUARD
            </button>
          </div>
        )}

        <input className="w-full bg-slate-50 border p-4 rounded-2xl" name="email" type="email" placeholder="Email" onChange={handleChange} required />

        {!isLogin && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <input className="border p-4 rounded-2xl bg-slate-50" name="firstName" placeholder="First Name" onChange={handleChange} required />
              <input className="border p-4 rounded-2xl bg-slate-50" name="lastName" placeholder="Last Name" onChange={handleChange} required />
            </div>
            <input className="w-full bg-slate-50 border p-4 rounded-2xl" name="location" placeholder="City / Sector" onChange={handleChange} required />
          </>
        )}

        <input className="w-full bg-slate-50 border p-4 rounded-2xl" type="password" name="password" placeholder="Password" onChange={handleChange} required />

        <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-200">
          {isLogin ? 'Authenticate' : 'Register Agent'}
        </button>
      </form>
    </div>
  );
};