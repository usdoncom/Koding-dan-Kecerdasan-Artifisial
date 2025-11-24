import React, { useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { CheckCircle, PlayCircle, Award, TrendingUp, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Protect Route
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Mock Data
  const progressData = [
    { name: 'Completed', value: 35 },
    { name: 'Remaining', value: 65 },
  ];
  const COLORS = ['#31F3FF', '#333'];

  const stats = [
    { title: 'Materi Selesai', value: '12/45', icon: <CheckCircle className="text-tikCyan"/> },
    { title: 'Hari Roadmap', value: 'Day 8', icon: <TrendingUp className="text-tikPink"/> },
    { title: 'Poin Belajar', value: '1,250', icon: <Award className="text-yellow-500"/> },
  ];

  if (!user) return null; // Avoid flash before redirect

  return (
    <div className="min-h-screen bg-tikBlack py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div>
             <h1 className="text-3xl font-bold text-white">Dashboard <span className="text-gray-500 font-normal">Affiliate</span></h1>
             <p className="text-gray-400 mt-1">Lacak progres belajar harianmu.</p>
          </div>
          
          <div className="flex items-center gap-4 bg-zinc-900 p-3 rounded-xl border border-zinc-800">
            <div className="text-right hidden sm:block">
              <p className="text-xs text-gray-400">Welcome back,</p>
              <p className="font-bold text-white text-lg">{user.name}</p>
            </div>
            <button 
              onClick={() => { logout(); navigate('/login'); }}
              className="p-2 bg-red-900/20 text-red-500 rounded-lg hover:bg-red-600 hover:text-white transition-colors flex items-center gap-2"
            >
              <LogOut size={18} />
              <span className="text-sm font-bold sm:hidden">Logout</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-950 rounded-full flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-gray-400">{stat.title}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Chart */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold text-white mb-4 w-full text-left">Progress Keseluruhan</h3>
            <div className="w-64 h-64 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={progressData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {progressData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              {/* Center Text */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-3xl font-bold text-white">35%</p>
                <p className="text-xs text-gray-500">Selesai</p>
              </div>
            </div>
            <Link to="/roadmap" className="mt-4 text-tikCyan hover:underline text-sm">Lanjutkan Roadmap &rarr;</Link>
          </div>

          {/* Next Lesson & Checklist */}
          <div className="lg:col-span-2 bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            <h3 className="text-xl font-bold text-white mb-6">Lanjut Belajar</h3>
            
            <div className="space-y-4">
              {/* Next Item Card */}
              <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 p-6 rounded-xl border-l-4 border-tikPink flex justify-between items-center group cursor-pointer hover:bg-zinc-800 transition-colors">
                <div>
                   <span className="text-xs text-tikPink font-bold uppercase mb-1 block">Sedang Berlangsung</span>
                   <h4 className="text-lg font-bold text-white">Riset Kompetitor Niche</h4>
                   <p className="text-sm text-gray-400 mt-1">Roadmap Hari ke-9</p>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-tikPink group-hover:text-white transition-colors">
                   <PlayCircle size={24} />
                </div>
              </div>

              <h4 className="text-sm font-bold text-gray-400 uppercase mt-8 mb-2">Checklist Harian</h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-3 p-3 bg-black rounded-lg border border-zinc-800 cursor-pointer hover:border-gray-600">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-tikCyan rounded focus:ring-0 bg-zinc-900 border-zinc-700" />
                  <span className="text-gray-300 text-sm">Upload 1 Video Pagi</span>
                </label>
                <label className="flex items-center space-x-3 p-3 bg-black rounded-lg border border-zinc-800 cursor-pointer hover:border-gray-600">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-tikCyan rounded focus:ring-0 bg-zinc-900 border-zinc-700" />
                  <span className="text-gray-300 text-sm">Balas 5 Komentar</span>
                </label>
                <label className="flex items-center space-x-3 p-3 bg-black rounded-lg border border-zinc-800 cursor-pointer hover:border-gray-600">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-tikCyan rounded focus:ring-0 bg-zinc-900 border-zinc-700" />
                  <span className="text-gray-300 text-sm">Cek Analytics FYP</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;