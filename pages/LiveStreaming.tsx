import React from 'react';
import { Radio, Mic, Camera, Users, BarChart2 } from 'lucide-react';

const LiveStreaming: React.FC = () => {
  return (
    <div className="min-h-screen bg-tikBlack py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-red-900/40 to-tikBlack p-8 rounded-3xl border border-red-900/50 mb-12 overflow-hidden">
           <div className="absolute top-4 right-4 animate-pulse">
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">LIVE</span>
           </div>
           <h1 className="text-4xl font-bold text-white mb-4">Mastering <span className="text-red-500">Live Streaming</span></h1>
           <p className="text-gray-300 max-w-xl">
             Live streaming adalah cara tercepat mendapatkan omzet besar dalam waktu singkat. Pelajari setup, script, dan psikologi live selling di sini.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Main Content */}
           <div className="md:col-span-2 space-y-8">
              
              {/* Section 1: Setup */}
              <section className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                 <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Camera className="text-tikCyan" /> Setup & Equipment
                 </h2>
                 <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>Visual adalah kunci. Penonton hanya butuh 3 detik untuk memutuskan stay atau scroll.</p>
                    <ul className="list-disc pl-5 space-y-2">
                       <li><strong className="text-white">Lighting:</strong> Wajib terang. Gunakan Softbox atau Ringlight (arah jam 10 dan jam 2).</li>
                       <li><strong className="text-white">Background:</strong> Bersih dan rapi. Tampilkan stok produk di belakang agar terlihat seperti "gudang" (trust factor).</li>
                       <li><strong className="text-white">Audio:</strong> Gunakan mic wireless agar suara jernih walaupun Anda bergerak menjauh dari HP.</li>
                       <li><strong className="text-white">Koneksi:</strong> Pastikan upload speed minimal 10 Mbps stabil.</li>
                    </ul>
                 </div>
              </section>

              {/* Section 2: Script */}
              <section className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                 <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Mic className="text-tikPink" /> Winning Script (15 Menit Awal)
                 </h2>
                 <div className="space-y-6">
                    <div className="bg-zinc-800 p-4 rounded-lg border-l-4 border-tikPink">
                       <h3 className="font-bold text-white mb-2">Menit 0-5: Sapa & Absen</h3>
                       <p className="text-sm text-gray-400">"Halo Kak Sinta, Kak Budi, selamat bergabung! Yang dari Jakarta mana suaranya? Tap-tap layarnya ya kakak biar rezekinya lancar."</p>
                    </div>
                    <div className="bg-zinc-800 p-4 rounded-lg border-l-4 border-tikCyan">
                       <h3 className="font-bold text-white mb-2">Menit 5-10: Hook Masalah</h3>
                       <p className="text-sm text-gray-400">"Siapa disini yang wajahnya kusam padahal udah pakai skincare mahal? Nah, etalase nomor 1 ini solusinya..."</p>
                    </div>
                    <div className="bg-zinc-800 p-4 rounded-lg border-l-4 border-white">
                       <h3 className="font-bold text-white mb-2">Menit 10-15: Flash Sale Pancingan</h3>
                       <p className="text-sm text-gray-400">"Khusus 10 orang tercepat yang CO etalase 5 sekarang, aku kasih bonus pouch cantik. Cuma 2 menit ya, timer jalan!"</p>
                    </div>
                 </div>
              </section>

              {/* Section 3: Analytics */}
              <section className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                 <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <BarChart2 className="text-green-500" /> Analisis Performa
                 </h2>
                 <p className="text-gray-300 mb-4">Setelah live selesai, wajib buka menu Analytics LIVE Center:</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-black p-4 rounded-lg">
                       <h4 className="text-tikCyan font-bold">Total Viewers</h4>
                       <p className="text-xs text-gray-500">Seberapa menarik cover & judul live kamu.</p>
                    </div>
                    <div className="bg-black p-4 rounded-lg">
                       <h4 className="text-tikPink font-bold">Average Watch Time</h4>
                       <p className="text-xs text-gray-500">Jika rendah, berarti pembawaan kamu membosankan.</p>
                    </div>
                 </div>
              </section>
           </div>

           {/* Sidebar CTA */}
           <div className="space-y-6">
              <div className="bg-zinc-800 p-6 rounded-xl sticky top-24">
                 <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <Radio className="text-white w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-bold text-center text-white mb-2">Mulai Live Sekarang!</h3>
                 <p className="text-center text-gray-400 text-sm mb-6">Jangan tunggu sempurna. Live pertama pasti jelek, itu wajar.</p>
                 
                 <h4 className="font-bold text-white text-sm mb-3">Checklist Sebelum Start:</h4>
                 <ul className="space-y-2 text-sm text-gray-300 mb-6">
                    <li className="flex items-center"><Users size={14} className="mr-2 text-tikCyan"/> Baterai HP 100%</li>
                    <li className="flex items-center"><Users size={14} className="mr-2 text-tikCyan"/> Mode "Do Not Disturb"</li>
                    <li className="flex items-center"><Users size={14} className="mr-2 text-tikCyan"/> Produk Etalase Pin</li>
                    <li className="flex items-center"><Users size={14} className="mr-2 text-tikCyan"/> Air Minum Siap</li>
                 </ul>
                 
                 <button className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
                    Buka TikTok Live Center
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreaming;