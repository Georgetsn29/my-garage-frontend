import { motion } from 'motion/react';
import { Cloud, Zap, Flame, Flag } from 'lucide-react';
import { useState, useEffect } from 'react';
import NeoCar from './NeoCar';

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'revving' | 'launching'>('revving');

  useEffect(() => {
    const duration = 2000; // 2 seconds to fill
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));
      if (currentStep >= steps) {
        clearInterval(timer);
        setPhase('launching');
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 800); // 800ms for the launch animation
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      key="loading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.5, filter: 'blur(20px)' }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFE600] overflow-hidden"
    >
      {/* Moving Checkered Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'repeating-conic-gradient(#000 0% 25%, transparent 0% 50%)', 
             backgroundSize: '100px 100px',
             animation: 'slide 2s linear infinite' 
           }} 
      />
      <style>{`
        @keyframes slide {
          from { background-position: 0 0; }
          to { background-position: 100px 100px; }
        }
      `}</style>

      {/* Clouds */}
      <motion.div
        animate={{ x: ['-20vw', '120vw'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-0 opacity-80"
      >
        <Cloud size={160} strokeWidth={3} className="text-white drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] fill-white" />
      </motion.div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center px-6">
        
        {/* Giant Text */}
        <motion.h1
          animate={phase === 'launching' ? { scale: [1, 1.5, 1], rotate: [-5, 5, 0] } : { y: [-5, 5, -5] }}
          transition={{ duration: phase === 'launching' ? 0.5 : 0.5, repeat: phase === 'launching' ? 0 : Infinity }}
          className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-white text-center mb-20"
          style={{ WebkitTextStroke: '4px black', textShadow: '12px 12px 0px #000' }}
        >
          {phase === 'revving' ? 'READY...' : 'GO!!!'}
        </motion.h1>

        {/* The Road & Car Container */}
        <div className="w-full relative h-32 mt-10">
          
          {/* The Car Container for horizontal movement */}
          <div 
            className="absolute bottom-8 z-20 transition-all duration-75 ease-linear"
            style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
          >
            <motion.div
              animate={
                phase === 'launching' 
                  ? { x: '150vw', rotate: -15, y: -50 } 
                  : { y: [-2, 2, -2], rotate: [-1, 1, -1] }
              }
              transition={
                phase === 'launching'
                  ? { duration: 0.6, ease: "easeIn" }
                  : { duration: 0.1, repeat: Infinity }
              }
            >
              <div className="relative">
                <NeoCar size={24} color="#FF5722" isMoving={true} />
                
                {/* Flames when launching */}
                {phase === 'launching' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: [1, 1.5, 1], x: [-10, -30, -10] }}
                    transition={{ duration: 0.2, repeat: Infinity }}
                    className="absolute top-1/2 -left-16 -translate-y-1/2"
                  >
                    <Flame size={80} className="text-[#FFEA00] fill-[#FF5722] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] transform -rotate-90" />
                  </motion.div>
                )}
                
                {/* Zaps when revving */}
                {phase === 'revving' && (
                  <motion.div
                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], x: [-10, -40] }}
                    transition={{ duration: 0.2, repeat: Infinity }}
                    className="absolute top-1/2 -left-10 -translate-y-1/2"
                  >
                    <Zap size={40} className="text-[#00E5FF] fill-[#00E5FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* The Road (Progress Bar) */}
          <div className="absolute bottom-0 w-full h-12 bg-gray-800 border-8 border-black rounded-full shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <motion.div
              className="h-full bg-[#00E676] relative"
              style={{ width: `${progress}%` }}
            >
              {/* Dashed line for road */}
              <div className="absolute top-1/2 -translate-y-1/2 w-full h-2 bg-[repeating-linear-gradient(90deg,#fff,#fff_20px,transparent_20px,transparent_40px)] opacity-80" />
            </motion.div>
          </div>
          
          {/* Finish Line Flag */}
          <div className="absolute bottom-0 right-0 transform translate-x-1/2 -translate-y-12 z-10">
            <Flag size={80} strokeWidth={3} className="text-black fill-white drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]" />
          </div>

        </div>
      </div>
    </motion.div>
  );
}
