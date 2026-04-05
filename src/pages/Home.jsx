import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Lock, MapPin, ArrowRight, CheckCircle, Globe, Users } from 'lucide-react';

const Home = () => {
  const [liveGuards, setLiveGuards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/guards')
      .then(res => res.json())
      .then(data => setLiveGuards(data.slice(0, 4)))
      .catch(err => console.error("Grid sync failed", err));
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100">
      
      <section className="relative bg-slate-900 text-white pt-24 pb-40 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-5 py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-400">Tactical Response Network</span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-black leading-[0.95] tracking-tighter">
              Elite <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">Protection.</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed font-medium">
              The world's first on-demand encrypted security infrastructure. Deploy vetted, high-tier professional agents to your coordinates in real-time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                to="/signup" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-black px-10 py-5 rounded-2xl flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(37,99,235,0.3)] transition-all hover:-translate-y-1 active:scale-95"
              >
                Find Protection <ArrowRight size={20} />
              </Link>
              <Link 
                to="/signup" 
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-10 py-5 rounded-2xl flex items-center justify-center gap-2 border border-slate-700 transition-all"
              >
                Join as Agent
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -inset-20 bg-blue-600/20 blur-[120px] rounded-full animate-pulse"></div>
            
            <div className="bg-slate-800/50 backdrop-blur-xl border border-white/10 p-8 rounded-[3.5rem] shadow-2xl relative">
              <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-6">
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
                   <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-300">Active Sector Grid</span>
                </div>
                <div className="flex gap-1">
                  <div className="h-1 w-8 bg-blue-500 rounded-full"></div>
                  <div className="h-1 w-2 bg-slate-600 rounded-full"></div>
                </div>
              </div>
              
              <div className="grid gap-4">
                {liveGuards.length > 0 ? liveGuards.map((guard) => (
                  <div key={guard._id} className="flex items-center gap-5 bg-slate-900/80 p-5 rounded-4xl border border-white/5 hover:border-blue-500/40 transition-all group cursor-default">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center font-black text-white shadow-xl group-hover:rotate-6 transition-transform">
                      {guard.firstName[0]}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        {guard.firstName} {guard.lastName[0]}.
                        <Shield size={12} className="text-blue-400" />
                      </div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-1">
                        <MapPin size={10} /> {guard.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-blue-400 font-black text-xs">${guard.priceIdeal}/hr</div>
                      <div className="text-[8px] text-green-500 font-black uppercase tracking-tighter italic">Mission Ready</div>
                    </div>
                  </div>
                )) : (
                  <div className="py-20 text-center space-y-4">
                    <Globe className="mx-auto text-slate-700 animate-spin-slow" size={40} />
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em]">Establishing Uplink...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-10 grid md:grid-cols-3 gap-10">
          <div className="flex items-center gap-6 md:border-r border-slate-100">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600"><Users size={28} /></div>
            <div>
              <p className="text-3xl font-black text-slate-900 tracking-tighter">2,400+</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Agents</p>
            </div>
          </div>
          <div className="flex items-center gap-6 md:border-r border-slate-100">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600"><Zap size={28} /></div>
            <div>
              <p className="text-3xl font-black text-slate-900 tracking-tighter">8.4 min</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Avg Response</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600"><Lock size={28} /></div>
            <div>
              <p className="text-3xl font-black text-slate-900 tracking-tighter">100%</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Encrypted Comms</p>
            </div>
          </div>
        </div>
      </div>
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter">The Standard in Safety</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We've replaced slow agencies with a high-speed digital protocol. Real-time tracking, instant billing, and verified elite talent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { 
              icon: <Zap className="text-blue-600" />, 
              title: "Rapid Dispatch", 
              desc: "Our matching algorithm identifies the highest-rated agents nearest to your GPS coordinates." 
            },
            { 
              icon: <CheckCircle className="text-blue-600" />, 
              title: "Verified Identity", 
              desc: "Every agent undergoes multi-layer background checks and biometric identity verification." 
            },
            { 
              icon: <Shield className="text-blue-600" />, 
              title: "Premium Logistics", 
              desc: "From corporate transit to personal threat mitigation, Schützen handles the infrastructure." 
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-12 rounded-[3rem] border border-slate-200 hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.1)] group">
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[4rem] p-20 text-center text-white relative overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter">Join the Grid.</h2>
            <p className="text-slate-400 text-xl mb-12 max-w-xl mx-auto font-medium">Whether you're protecting or protected, the mission starts here.</p>
            <Link to="/signup" className="inline-flex items-center gap-3 bg-white text-slate-900 font-black px-12 py-6 rounded-2xl text-xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-xl">
              Get Started <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;