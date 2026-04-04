import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Shield, LogOut, Grid, User as UserIcon } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('schutzen_user'));

  const handleLogout = () => {
    localStorage.removeItem('schutzen_user');
    navigate('/');
  };

  return (
    <header className="h-20 w-full bg-slate-900 border-b border-white/5 sticky top-0 z-100 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            <Shield className="text-white" size={20} />
          </div>
          <span className="font-black text-xl uppercase tracking-tighter text-white">Schtuzen</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-10">
          <Link 
            to="/find" 
            className={`text-[11px] font-black uppercase tracking-[0.2em] transition ${location.pathname === '/find' ? 'text-blue-500' : 'text-slate-400 hover:text-white'}`}
          >
            Grid Marketplace
          </Link>
          
          {user ? (
            <div className="flex items-center gap-8 pl-8 border-l border-white/10">
              <Link 
                to="/user" 
                className={`flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] transition ${location.pathname === '/user' ? 'text-blue-500' : 'text-slate-400 hover:text-white'}`}
              >
                <Grid size={14} /> My Console
              </Link>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-500 hover:text-red-400 text-[11px] font-black uppercase tracking-[0.2em] transition"
              >
                Disconnect <LogOut size={14} />
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="bg-white text-slate-900 px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-50 transition shadow-xl"
            >
              Initialize Access
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;