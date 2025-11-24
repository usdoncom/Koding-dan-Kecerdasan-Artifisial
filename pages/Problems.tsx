import React, { useState } from 'react';
import { PROBLEMS_DATA } from '../constants';
import { ChevronDown, ChevronUp, AlertTriangle, Lightbulb, CheckCircle } from 'lucide-react';

const Problems: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-tikBlack py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Masalah Umum & <span className="text-tikPink">Solusinya</span></h1>
          <p className="text-gray-400">
            Jangan panik kalau stuck. Berikut adalah 15 masalah paling sering dialami affiliate pemula beserta cara mengatasinya.
          </p>
        </div>

        <div className="space-y-4">
          {PROBLEMS_DATA.map((item) => (
            <div 
              key={item.id} 
              className={`bg-zinc-900 rounded-xl border transition-all duration-300 overflow-hidden ${
                openId === item.id ? 'border-tikPink shadow-neon-pink' : 'border-zinc-800 hover:border-gray-700'
              }`}
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <div className="flex items-center gap-4 text-left">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    openId === item.id ? 'bg-tikPink text-white' : 'bg-zinc-800 text-gray-400'
                  }`}>
                    {item.id}
                  </span>
                  <h3 className={`font-bold text-lg ${openId === item.id ? 'text-white' : 'text-gray-300'}`}>
                    {item.title}
                  </h3>
                </div>
                {openId === item.id ? <ChevronUp className="text-tikPink" /> : <ChevronDown className="text-gray-500" />}
              </button>

              {openId === item.id && (
                <div className="px-6 pb-6 border-t border-zinc-800/50 bg-zinc-900/50">
                  <div className="grid gap-4 mt-4">
                    <div className="flex gap-3">
                      <AlertTriangle className="text-red-500 flex-shrink-0 w-5 h-5 mt-1" />
                      <div>
                        <h4 className="font-bold text-red-400 text-sm uppercase mb-1">Penyebab</h4>
                        <p className="text-gray-300 text-sm">{item.cause}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 w-5 h-5 mt-1" />
                      <div>
                        <h4 className="font-bold text-green-400 text-sm uppercase mb-1">Solusi</h4>
                        <p className="text-gray-300 text-sm">{item.solution}</p>
                      </div>
                    </div>

                    <div className="bg-zinc-800 p-4 rounded-lg flex gap-3">
                      <Lightbulb className="text-yellow-500 flex-shrink-0 w-5 h-5 mt-1" />
                      <div>
                        <h4 className="font-bold text-yellow-500 text-sm uppercase mb-1">Pro Tip</h4>
                        <p className="text-gray-300 text-sm italic">"{item.tip}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Problems;