import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Key untuk localStorage
const STORAGE_KEY_USERS = 'tiktok_affiliate_users';
const STORAGE_KEY_SESSION = 'tiktok_affiliate_session';

// Data Dummy Awal (Agar Demo Login bisa langsung dipakai)
const DEMO_USER: User = {
  name: "Member Demo",
  phone: "081234567890",
  password: "123" // password simple
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load session saat aplikasi pertama kali dibuka
  useEffect(() => {
    const savedSession = localStorage.getItem(STORAGE_KEY_SESSION);
    if (savedSession) {
      setUser(JSON.parse(savedSession));
    }

    // Pastikan ada demo user di database local jika kosong
    const existingUsers = localStorage.getItem(STORAGE_KEY_USERS);
    if (!existingUsers) {
      localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify([DEMO_USER]));
    }
  }, []);

  const login = (phone: string, password: string): boolean => {
    // Ambil database user dari localStorage
    const usersString = localStorage.getItem(STORAGE_KEY_USERS);
    const users: User[] = usersString ? JSON.parse(usersString) : [];

    // Cari user yang cocok
    const foundUser = users.find(u => u.phone === phone && u.password === password);

    if (foundUser) {
      const userSession = { name: foundUser.name, phone: foundUser.phone };
      setUser(userSession);
      localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(userSession));
      return true;
    }

    return false;
  };

  const register = (newUser: User) => {
    // Ambil data lama
    const usersString = localStorage.getItem(STORAGE_KEY_USERS);
    const users: User[] = usersString ? JSON.parse(usersString) : [];

    // Cek apakah nomor sudah ada
    const existingUser = users.find(u => u.phone === newUser.phone);
    if (existingUser) {
      alert("Nomor telepon sudah terdaftar!");
      return;
    }

    // Simpan user baru
    const updatedUsers = [...users, newUser];
    localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(updatedUsers));

    // Auto login setelah register
    const userSession = { name: newUser.name, phone: newUser.phone };
    setUser(userSession);
    localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(userSession));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY_SESSION);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};