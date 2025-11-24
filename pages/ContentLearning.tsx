import React, { useState } from 'react';
import { CONTENT_CARDS } from '../constants';
import { Search, Download, FileText, Video, Scissors, Hash } from 'lucide-react';

const ContentLearning: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContent = CONTENT_CARDS.filter(card => 
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getIcon = (category: string) => {
    switch(category.toLowerCase()) {
      case 'hook': return <FileText size={20} />;
      case 'editing': return <Scissors size={20} />;
      case 'script': return <FileText size={20} />;
      case 'seo': return <Hash size={20} />;
      default: return <Video size={20} />;
    }
  };

  return (
    <div className="min-h-screen bg-tikBlack py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Belajar <span className="text-tikCyan">Konten Viral</span></h1>
            <p className="text-gray-400">Template, script, dan teknik editing untuk meningkatkan konversi penjualan.</p>
          </div>
          
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Cari materi..."
              className="w-full bg-zinc-900 border border-zinc-700 rounded-full py-2 px-4 pl-10 text-white focus:outline-none focus:border-tikCyan"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-500 w-4 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredContent.map((card) => (
            <div key={card.id} className="bg-zinc-900 rounded-xl p-5 border border-zinc-800 hover:border-white/30 transition-all flex flex-col h-full group">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs font-medium text-tikCyan border border-zinc-700">
                  {card.category}
                </span>
                <div className="text-gray-500 group-hover:text-tikPink transition-colors">
                  {getIcon(card.category)}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm flex-grow mb-6">{card.description}</p>
              
              <button className="w-full py-2 flex items-center justify-center gap-2 rounded bg-zinc-800 hover:bg-tikCyan hover:text-black text-white text-sm font-medium transition-colors">
                <Download size={16} /> Download Assets
              </button>
            </div>
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p>Tidak ada materi yang cocok dengan pencarian "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentLearning;