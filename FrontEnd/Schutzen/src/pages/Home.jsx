import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Lock, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100">
      <section className="relative bg-slate-900 text-white pt-24 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Security Redefined</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black leading-[1.1] tracking-tighter">
              On-Demand <br />
              <span className="text-blue-500">Protection.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
              Schützen connects individuals seeking immediate safety with vetted, high-tier professional guards. Peace of mind is now just a tap away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/signup" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-5 rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-blue-900/40 transition-all active:scale-95"
              >
                Find Protection <ArrowRight size={20} />
              </Link>
              <Link 
                to="/signup" 
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-5 rounded-2xl flex items-center justify-center gap-2 border border-slate-700 transition-all"
              >
                Join as a Guard
              </Link>
            </div>
          </div>

          {/* Decorative UI Element */}
          <div className="hidden lg:block relative">
            <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] rounded-full"></div>
            <div className="bg-slate-800 border border-slate-700 p-8 rounded-[3rem] shadow-2xl relative">
              <div className="flex items-center justify-between mb-10">
                <Shield className="text-blue-500" size={40} />
                <div className="h-2 w-32 bg-slate-700 rounded-full"></div>
              </div>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-2xl border border-slate-700/50">
                    <div className="w-10 h-10 bg-slate-700 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="h-2 w-24 bg-slate-600 rounded"></div>
                      <div className="h-2 w-16 bg-slate-700 rounded"></div>
                    </div>
                    <div className="ml-auto text-blue-500 font-bold text-xs uppercase tracking-widest">Active</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Engineered for Rapid Response</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">We've automated the logistics of personal security so you can focus on what matters.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Zap className="text-blue-600" />, 
              title: "Instant Dispatch", 
              desc: "Our real-time engine matches you with the nearest professional guard in seconds." 
            },
            { 
              icon: <CheckCircle className="text-blue-600" />, 
              title: "Vetted Professionals", 
              desc: "Rigorous background checks and identity verification for every single provider." 
            },
            { 
              icon: <Lock className="text-blue-600" />, 
              title: "Encrypted Privacy", 
              desc: "Your data and location are masked until a secure connection is established." 
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:shadow-2xl hover:shadow-blue-100 transition duration-500 group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Total Transparency.</h2>
            <p className="text-slate-500">Every guard on Schützen has a public rating and verified work history. No surprises, just professional protection.</p>
          </div>
          <div className="flex gap-4 overflow-hidden opacity-30 grayscale pointer-events-none">
            <span className="text-4xl font-black italic tracking-tighter">SECURE-CO</span>
            <span className="text-4xl font-black italic tracking-tighter">GLOBAL-SYS</span>
            <span className="text-4xl font-black italic tracking-tighter">TRUST-NET</span>
          </div>
        </div>
      </section>
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[3rem] p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Ready to secure your world?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">Join the Schützen network today and experience the future of personal security.</p>
            <Link to="/signup" className="bg-white text-blue-600 font-black px-12 py-5 rounded-2xl text-xl hover:bg-blue-50 transition shadow-xl">
              Get Started Now
            </Link>
          </div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500 rounded-full opacity-40"></div>
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-700 rounded-full opacity-40"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;