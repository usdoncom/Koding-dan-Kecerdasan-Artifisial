import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, DollarSign, Award, ArrowRight, PlayCircle, CheckCircle2 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-tikBlack overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-tikCyan/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tikPink/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="text-center relative z-10">
          <div className="inline-block px-4 py-1 mb-6 border border-tikCyan/30 rounded-full bg-tikCyan/10 backdrop-blur-sm">
            <span className="text-tikCyan font-semibold text-sm tracking-wide uppercase">Update Materi 2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Belajar TikTok Affiliate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tikCyan via-white to-tikPink">
              Menuju 100 Juta Pertama
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Panduan lengkap dari 0 sampai expert. Gratis, terstruktur, dan siap dipraktekkan hari ini juga. Jangan sampai ketinggalan momentum!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/roadmap" 
              className="w-full sm:w-auto px-8 py-4 bg-tikPink hover:bg-pink-600 text-white font-bold rounded-full shadow-neon-pink transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Mulai Belajar Sekarang <ArrowRight size={20} />
            </Link>
            <Link 
              to="/basics" 
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2"
            >
              Pelajari Dasarnya <PlayCircle size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Learn Section */}
      <section className="py-16 bg-zinc-900/50 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-tikCyan/50 transition-colors group">
              <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-tikCyan/20">
                <DollarSign className="text-tikCyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">100% Gratis</h3>
              <p className="text-gray-400">Akses semua materi premium tanpa bayar sepeserpun. Kami percaya ilmu harus dibagikan.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-tikPink/50 transition-colors group">
              <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-tikPink/20">
                <TrendingUp className="text-tikPink" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Pemula to Expert</h3>
              <p className="text-gray-400">Kurikulum disusun sistematis. Mulai dari cara daftar sampai strategi scaling iklan.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-purple-500/50 transition-colors group">
              <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500/20">
                <Award className="text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Studi Kasus Nyata</h3>
              <p className="text-gray-400">Belajar dari kesalahan dan keberhasilan affiliate marketer lain yang sudah sukses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
           <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Roadmap 30 Hari</h2>
            <p className="text-gray-400">Kami sudah buatkan jadwal harian agar Anda tidak bingung harus mulai dari mana.</p>
           </div>
           <Link to="/roadmap" className="mt-4 md:mt-0 text-tikCyan font-semibold flex items-center hover:underline">
             Lihat Full Roadmap <ArrowRight size={16} className="ml-2"/>
           </Link>
        </div>

        <div className="relative">
          {/* Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-zinc-800 -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {[
              { step: 1, title: "Setup Akun", desc: "Hari 1-3", color: "border-tikCyan" },
              { step: 2, title: "Upload Pertama", desc: "Hari 4-7", color: "border-white" },
              { step: 3, title: "Live Streaming", desc: "Hari 15-21", color: "border-white" },
              { step: 4, title: "Scaling Ads", desc: "Hari 22-30", color: "border-tikPink" },
            ].map((item) => (
              <div key={item.step} className={`bg-zinc-900 p-6 rounded-xl border-2 ${item.color} flex flex-col items-center text-center shadow-lg`}>
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center mb-3 font-bold text-white">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-16 px-4">
         <div className="max-w-5xl mx-auto bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-tikCyan/10 rounded-full blur-3xl"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Siap Mengubah Follower <br/>Jadi Rupiah?</h2>
            <ul className="flex flex-wrap justify-center gap-4 mb-8 text-gray-300 text-sm">
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-tikCyan"/> Gratis Seumur Hidup</li>
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-tikCyan"/> Komunitas Solid</li>
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-tikCyan"/> Materi Premium</li>
            </ul>
            <Link to="/login" className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
              Gabung Sekarang
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;