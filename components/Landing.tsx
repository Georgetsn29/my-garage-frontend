import { motion } from 'motion/react';
import { CarFront } from 'lucide-react';

export default function Landing({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8, y: -100 }}
      className="min-h-screen flex flex-col items-center justify-center p-6"
    >
      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: -10 }}
          transition={{ type: 'spring', bounce: 0.7, delay: 0.1 }}
          className="inline-block bg-[#FF90E8] p-8 rounded-[3rem] border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] mb-12"
        >
          <CarFront size={100} strokeWidth={3} />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.6, delay: 0.2 }}
          className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-8 text-white"
          style={{ WebkitTextStroke: '4px black', textShadow: '8px 8px 0px #000' }}
        >
          my - Garage
        </motion.h1>
        
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', bounce: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <span className="text-3xl md:text-4xl font-black uppercase bg-[#00E5FF] text-black px-8 py-4 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-full inline-block transform rotate-3">
            Your Digital Showroom!
          </span>
        </motion.div>

        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', bounce: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.9, rotate: 2 }}
          onClick={onEnter}
          className="bg-[#FFEA00] text-black font-black uppercase text-5xl px-16 py-8 rounded-[3rem] border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[12px] hover:translate-y-[12px] transition-all"
        >
          Let&apos;s Go!
        </motion.button>
      </div>
    </motion.div>
  );
}
