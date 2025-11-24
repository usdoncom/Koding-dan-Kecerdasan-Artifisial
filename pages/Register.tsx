import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Phone, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API delay just for UX effect
    setTimeout(() => {
      register({
        name: formData.name,
        phone: formData.phone,
        password: formData.password
      });
      setLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-tikBlack flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-tikPink/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-3xl border border-zinc-800 shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Daftar Akun</h2>
          <p className="text-gray-400 text-sm mt-2">Mulai perjalanan sukses affiliate Anda sekarang.</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Nama Lengkap</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={18} className="text-gray-500" />
              </div>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black border border-zinc-700 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-tikPink focus:ring-1 focus:ring-tikPink transition-colors placeholder-gray-600"
                placeholder="Contoh: Budi Santoso"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Nomor WhatsApp / Telepon</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone size={18} className="text-gray-500" />
              </div>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-black border border-zinc-700 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-tikPink focus:ring-1 focus:ring-tikPink transition-colors placeholder-gray-600"
                placeholder="081234567890"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Buat Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-gray-500" />
              </div>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-black border border-zinc-700 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-tikPink focus:ring-1 focus:ring-tikPink transition-colors placeholder-gray-600"
                placeholder="Minimal 6 karakter"
              />
            </div>
          </div>

          <div className="flex items-start gap-2 text-xs text-gray-500 mt-2">
             <ShieldCheck size={14} className="mt-0.5 text-tikCyan shrink-0"/>
             <p>Data Anda aman. Kami tidak akan membagikan nomor Anda ke pihak manapun.</p>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-gradient-to-r from-tikPink to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3 rounded-lg shadow-lg transform transition-all hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
          >
            {loading ? 'Mendaftarkan...' : (
              <>
                Daftar Sekarang <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Sudah punya akun? <Link to="/login" className="text-tikCyan cursor-pointer hover:underline font-bold">Login Disini</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;