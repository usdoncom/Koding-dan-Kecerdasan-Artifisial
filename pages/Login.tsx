import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Phone, Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  });

  // Jika sudah login, lempar ke dashboard
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Hapus error saat mengetik
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate Network Delay
    setTimeout(() => {
      const success = login(formData.phone, formData.password);
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Nomor HP atau Password salah!');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-tikBlack flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-tikCyan/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-3xl border border-zinc-800 shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
          <p className="text-gray-400 text-sm mt-2">Login untuk akses progres belajar Anda.</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-900/30 border border-red-800 rounded-lg flex items-center text-red-400 text-sm">
            <AlertCircle size={16} className="mr-2" />
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">No. HP</label>
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
                className="w-full bg-black border border-zinc-700 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-tikCyan focus:ring-1 focus:ring-tikCyan transition-colors placeholder-gray-600"
                placeholder="08123456789"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
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
                className="w-full bg-black border border-zinc-700 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-tikCyan focus:ring-1 focus:ring-tikCyan transition-colors placeholder-gray-600"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-gradient-to-r from-tikCyan to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold py-3 rounded-lg shadow-lg transform transition-all hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Checking...' : (
              <>
                Masuk Dashboard <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Belum punya akun? <Link to="/register" className="text-tikPink cursor-pointer hover:underline font-bold">Daftar Gratis</Link>
          </p>
          <div className="mt-4 p-3 bg-zinc-800/50 rounded text-xs text-gray-400">
            <span className="block font-bold mb-1 text-tikCyan">Akun Demo:</span>
            No HP: 081234567890<br/>
            Password: 123
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;