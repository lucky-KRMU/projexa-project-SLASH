import React, { useEffect, useState } from 'react';
import { Shield, Star, MapPin } from 'lucide-react';

const FindGuards = () => {
  const [guards, setGuards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/guards')
      .then(res => res.json())
      .then(data => setGuards(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8">Professional Guards Available</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {guards.map(guard => (
          <div key={guard._id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="flex justify-between mb-4">
              <Shield className="text-blue-600" size={30} />
              <div className="flex items-center gap-1 text-amber-500 font-bold"><Star size={16} fill="currentColor"/> {guard.rating}</div>
            </div>
            <h3 className="text-xl font-bold">{guard.firstName} {guard.lastName}</h3>
            <p className="text-slate-500 text-sm mb-4"><MapPin size={14} className="inline"/> {guard.location}</p>
            <div className="flex justify-between items-center border-t pt-4">
              <span className="font-bold text-lg text-blue-600">${guard.priceIdeal}/hr</span>
              <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold">Hire Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindGuards;