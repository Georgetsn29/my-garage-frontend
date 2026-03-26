'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Landing from '@/components/Landing';
import Auth from '@/components/Auth';
import Dashboard from '@/components/Dashboard';
import Cursor from '@/components/Cursor';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  const [view, setView] = useState<'loading' | 'landing' | 'auth' | 'dashboard'>('loading');

  useEffect(() => {
    const timer = setTimeout(() => {
      setView('landing');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#bdbdbd] bg-[radial-gradient(#000_3px,transparent_3px)] bg-[size:40px_40px] font-sans overflow-x-hidden selection:bg-[#FF90E8] selection:text-black md:cursor-none">
      <Cursor />
      <AnimatePresence mode="wait">
        {view === 'loading' && (
          <LoadingScreen key="loading" />
        )}
        {view === 'landing' && (
          <Landing key="landing" onEnter={() => setView('auth')} />
        )}
        {view === 'auth' && (
          <Auth key="auth" onLogin={() => setView('dashboard')} />
        )}
        {view === 'dashboard' && (
          <Dashboard key="dashboard" onLogout={() => setView('landing')} />
        )}
      </AnimatePresence>
    </main>
  );
}
