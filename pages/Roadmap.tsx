import React, { useState, useEffect } from 'react';
import { ROADMAP_DATA } from '../constants';
import { CheckCircle, Circle, Info } from 'lucide-react';

const Roadmap: React.FC = () => {
  // Initialize state from localStorage or default to empty array
  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    const saved = localStorage.getItem('roadmapProgress');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('roadmapProgress', JSON.stringify(completedDays));
  }, [completedDays]);

  const toggleDay = (day: number) => {
    setCompletedDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const progress = Math.round((completedDays.length / ROADMAP_DATA.length) * 100);

  return (
    <div className="min-h-screen bg-tikBlack py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header & Progress */}
        <div className="mb-12 bg-zinc-900 p-8 rounded-2xl border border-zinc-800 sticky top-20 z-30 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Roadmap <span className="text-tikCyan">30 Hari</span></h1>
              <p className="text-gray-400 text-sm mt-1">Konsisten checklist setiap hari untuk hasil maksimal.</p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <div className="text-4xl font-black text-tikPink">{progress}%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Selesai</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-tikCyan to-tikPink h-full rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="space-y-8 relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-zinc-800 z-0"></div>
            
            {ROADMAP_DATA.map((item) => {
                const isCompleted = completedDays.includes(item.day);
                
                return (
                    <div key={item.day} className={`relative pl-16 md:pl-24 transition-all duration-500 ${isCompleted ? 'opacity-60' : 'opacity-100'}`}>
                        {/* Circle Marker */}
                        <div 
                            onClick={() => toggleDay(item.day)}
                            className={`absolute left-0 md:left-4 top-1 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center border-4 cursor-pointer z-10 transition-colors bg-tikBlack ${
                                isCompleted 
                                ? 'border-tikCyan text-tikCyan' 
                                : 'border-zinc-700 text-zinc-700 hover:border-gray-500'
                            }`}
                        >
                            {isCompleted ? <CheckCircle size={16} className="fill-tikCyan text-black"/> : <Circle size={16} />}
                        </div>

                        {/* Content Card */}
                        <div 
                            className={`p-5 rounded-xl border cursor-pointer transition-all hover:translate-x-1 ${
                                isCompleted 
                                ? 'bg-zinc-900/50 border-zinc-800' 
                                : 'bg-zinc-900 border-zinc-700 hover:border-tikCyan/50 shadow-lg'
                            }`}
                            onClick={() => toggleDay(item.day)}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wide ${
                                    item.phase.includes('Setup') ? 'bg-blue-900/30 text-blue-400' :
                                    item.phase.includes('Content') ? 'bg-purple-900/30 text-purple-400' :
                                    item.phase.includes('Live') ? 'bg-red-900/30 text-red-400' :
                                    'bg-green-900/30 text-green-400'
                                }`}>
                                    {item.phase}
                                </span>
                                <span className="text-xs text-gray-500 font-mono">Hari {item.day}</span>
                            </div>
                            
                            <h3 className={`text-lg font-bold mb-2 ${isCompleted ? 'text-gray-400 line-through' : 'text-white'}`}>
                                {item.task}
                            </h3>
                            
                            <div className="flex items-start gap-2 text-sm text-gray-400 bg-black/20 p-3 rounded-lg">
                                <Info size={16} className="mt-0.5 text-gray-500 flex-shrink-0"/>
                                <p>{item.note}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;