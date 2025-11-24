import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Zap, LogOut, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Dasar', path: '/basics' },
    { name: 'Masalah', path: '/problems' },
    { name: 'Konten', path: '/content' },
    { name: 'Live', path: '/live' },
    { name: 'Roadmap', path: '/roadmap' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-tikBlack/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
             <div className="w-8 h-8 bg-gradient-to-br from-tikCyan to-tikPink rounded-full flex items-center justify-center shadow-neon-cyan">
                <Zap className="w-5 h-5 text-white fill-current" />
             </div>
             <span className="font-bold text-xl tracking-tighter text-white">
               Tiktok<span className="text-tikCyan">Affiliate</span><span className="text-tikPink">Pro</span>
             </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-gray-900 text-tikCyan shadow-neon-cyan border border-gray-700'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </NavLink>
              ))}
              
              {user ? (
                <div className="flex items-center gap-3 ml-4">
                   <NavLink
                    to="/dashboard"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-white font-medium text-sm hover:bg-zinc-700 transition-colors"
                  >
                    <User size={16} className="text-tikCyan" />
                    <span>{user.name.split(' ')[0]}</span>
                  </NavLink>
                  <button 
                    onClick={handleLogout}
                    className="p-2 rounded-full bg-red-900/20 text-red-500 hover:bg-red-900/40 transition-colors"
                    title="Logout"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className="ml-4 px-4 py-2 rounded-full bg-tikPink text-white font-bold text-sm hover:bg-pink-600 transition-colors shadow-neon-pink"
                >
                  Login Dashboard
                </NavLink>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-tikDark border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-gray-900 text-tikCyan'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.name}
              </NavLink>
            ))}
            
            {user ? (
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-center px-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-tikCyan flex items-center justify-center text-black font-bold mr-3">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-base font-medium leading-none text-white">{user.name}</div>
                    <div className="text-sm font-medium leading-none text-gray-400 mt-1">{user.phone}</div>
                  </div>
                </div>
                <NavLink
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Dashboard
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-500 hover:bg-gray-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 px-5 py-3 rounded-md font-bold bg-tikPink text-white"
              >
                Login Dashboard
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;