import React, { useState } from 'react';
import { Mail, Lock, User, MapPin, Phone, ShieldCheck, Chrome, Github, Facebook, Twitter, ArrowRight } from 'lucide-react';

const SignupPage = () => {
  const [activeTab, setActiveTab] = useState('user');

  return (
    <div className="min-h-screen bg-[#0052D4] bg-linear-to-br from-[#0052D4] via-[#4361EE] to-[#6e8efb] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[120px]" />
      <div className="relative w-full max-w-2xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="hidden md:flex md:w-1/3 bg-linear-to-b from-white/10 to-transparent p-8 flex-col justify-between border-r border-white/10">
          <div>
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-6">
              <ShieldCheck className="text-blue-600 w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-white leading-tight">Secure Portal Access</h1>
          </div>
          <p className="text-blue-100/60 text-xs italic">© 2026 GuardSystems Inc.</p>
        </div>
        <div className="flex-1 p-8 md:p-12">
          <div className="inline-flex p-1 bg-black/20 rounded-2xl mb-8 w-full">
            <button
              onClick={() => setActiveTab('user')}
              className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-500 ${activeTab === 'user' ? 'bg-white text-blue-600 shadow-xl scale-[1.02]' : 'text-white/70 hover:text-white'
                }`}>User</button>
            <button
              onClick={() => setActiveTab('guard')}
              className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-500 ${activeTab === 'guard' ? 'bg-white text-blue-600 shadow-xl scale-[1.02]' : 'text-white/70 hover:text-white'
                }`}>Guard</button>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-1 gap-4">
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors w-5 h-5" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:bg-white/10 focus:border-white/40 transition-all"
                />
              </div>

              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors w-5 h-5" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:bg-white/10 focus:border-white/40 transition-all"
                />
              </div>

              <div className="relative group animate-in fade-in slide-in-from-left-2 duration-500">
                {activeTab === 'user' ? (
                  <>
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Residential Address"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:bg-white/10 focus:border-white/40 transition-all"
                    />
                  </>
                ) : (
                  <>
                    <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Guard ID / License Number"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:bg-white/10 focus:border-white/40 transition-all"
                    />
                  </>
                )}
              </div>

              <div className="relative group">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors w-5 h-5" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:bg-white/10 focus:border-white/40 transition-all"
                />
              </div>

              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors w-5 h-5" />
                <input
                  type="password"
                  placeholder="Create Password"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:bg-white/10 focus:border-white/40 transition-all"
                />
              </div>
            </div>

            <button className="w-full bg-white text-blue-700 font-black py-4 rounded-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 group">CREATE ACCOUNT
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          <div className="mt-10 pt-8 border-t border-white/10 text-center">
            <p className="text-white/60 text-sm mb-6">Or join with</p>
            <div className="flex justify-center gap-6">
              {[Chrome, Twitter, Facebook].map((Icon, i) => (
                <button key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all">
                  <Icon className="w-5 h-5 text-white" />
                </button>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-white/80">
              Already have an account? <a href="Login" className="font-bold text-white hover:underline">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;