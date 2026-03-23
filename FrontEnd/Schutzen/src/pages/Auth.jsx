import React, { useState } from 'react';
import { Mail, Lock, User, MapPin, DollarSign, Briefcase, ArrowRight } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    userName: '', email: '', firstName: '', lastName: '', 
    location: '', priceIdeal: '', gigWorkType: 'Personal Security', description: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? '/api/users/login' : '/api/users';
    const res = await fetch(`http://localhost:8000${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (res.ok) window.location.href = '/user';
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-4xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-200">
        <div className="md:w-1/3 bg-slate-900 p-10 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">{isLogin ? "Welcome Back" : "Join Schützen"}</h2>
          <p className="text-slate-400 text-sm">Elite on-demand security for the modern world.</p>
        </div>
        <div className="md:w-2/3 p-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input className="w-full bg-slate-50 border p-3 rounded-xl" name="email" placeholder="Email" onChange={handleChange} />
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <input className="border p-3 rounded-xl" name="firstName" placeholder="First Name" onChange={handleChange} />
                <input className="border p-3 rounded-xl" name="lastName" placeholder="Last Name" onChange={handleChange} />
                <input className="border p-3 rounded-xl" name="location" placeholder="Location" onChange={handleChange} />
                <input className="border p-3 rounded-xl" name="priceIdeal" placeholder="Price/hr" onChange={handleChange} />
              </div>
            )}
            <input className="w-full bg-slate-50 border p-3 rounded-xl" type="password" name="password" placeholder="Password" />
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
              {isLogin ? 'Sign In' : 'Create Account'} <ArrowRight size={18} />
            </button>
          </form>
          <button onClick={() => setIsLogin(!isLogin)} className="mt-6 text-blue-600 text-sm font-bold block mx-auto">
            {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;