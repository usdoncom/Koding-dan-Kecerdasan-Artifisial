import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './context/AuthContext';

// Pages
import Home from './pages/Home';
import Basics from './pages/Basics';
import Problems from './pages/Problems';
import ContentLearning from './pages/ContentLearning';
import LiveStreaming from './pages/LiveStreaming';
import Roadmap from './pages/Roadmap';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-tikBlack text-white font-sans">
          <ScrollToTop />
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/basics" element={<Basics />} />
              <Route path="/problems" element={<Problems />} />
              <Route path="/content" element={<ContentLearning />} />
              <Route path="/live" element={<LiveStreaming />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;