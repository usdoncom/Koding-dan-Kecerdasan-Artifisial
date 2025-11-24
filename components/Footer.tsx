import React from 'react';
import { Instagram, Youtube, Facebook, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tikDark border-t border-gray-800 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Tiktok<span className="text-tikCyan">Affiliate</span><span className="text-tikPink">Pro</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Platform belajar gratis untuk membantu Anda mencapai Rp 100 Juta pertama dari TikTok Affiliate. 
              Materi update setiap hari.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Menu Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#/basics" className="hover:text-tikCyan transition-colors">Dasar Affiliate</a></li>
              <li><a href="#/problems" className="hover:text-tikCyan transition-colors">Solusi Masalah</a></li>
              <li><a href="#/roadmap" className="hover:text-tikCyan transition-colors">Roadmap 30 Hari</a></li>
              <li><a href="#/login" className="hover:text-tikCyan transition-colors">Member Area</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-tikPink hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 hover:text-white transition-all">
                <Youtube size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs flex items-center justify-center">
           <span>Made with </span> <Heart className="w-3 h-3 mx-1 text-tikPink fill-current" /> <span> for Creators</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;