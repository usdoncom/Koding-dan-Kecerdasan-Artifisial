import React from 'react';
import { BASICS_DATA } from '../constants';
import * as Icons from 'lucide-react';

const Basics: React.FC = () => {
  return (
    <div className="min-h-screen bg-tikBlack py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Dasar <span className="text-tikCyan">TikTok Affiliate</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pondasi penting yang wajib diketahui sebelum mulai terjun. Jangan skip langkah-langkah ini agar akun aman dan komisi lancar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BASICS_DATA.map((card) => {
            // Dynamically render icon
            const IconComponent = (Icons as any)[card.iconName] || Icons.HelpCircle;

            return (
              <div key={card.id} className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-tikCyan transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-tikCyan/5 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-tikCyan/10"></div>
                
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6 text-tikCyan shadow-lg group-hover:shadow-neon-cyan transition-all">
                  <IconComponent size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {card.description}
                </p>
                
                <button className="w-full py-2 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-white hover:text-black font-medium text-sm transition-colors">
                  Pelajari Detail
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Basics;