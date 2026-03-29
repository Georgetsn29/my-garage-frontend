import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CarFront } from 'lucide-react';

export default function Auth({ onLogin }: { onLogin: () => void }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
      transition={{ type: 'spring', bounce: 0.6 }}
      className="min-h-screen flex items-center justify-center p-6"
    >
      <div className="bg-white border-8 border-black rounded-[3rem] py-4 px-10 w-full max-w-lg shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] relative">
        <div className="absolute -top-12 -left-12">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="bg-[#FF90E8] p-5 rounded-full border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            <CarFront size={40} strokeWidth={3} />
          </motion.div>
        </div>
        
        <h1 className="text-5xl font-black text-center mb-4 uppercase tracking-tighter mt-8">
          {isLogin ? 'Login!' : 'Register!'}
        </h1>
        <p className="text-center font-black text-xl text-gray-500 mb-4 border-b-8 border-black pb-6">
          {isLogin ? "Get in loser, we're cataloging cars." : "Join the coolest garage in town."}
        </p>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div>
            <label className="block font-black uppercase mb-2 text-lg">Username</label>
            <input
              type="text"
              required
              className="w-full border-6 border-black rounded-2xl p-4 text-lg font-black focus:outline-none focus:ring-6 focus:ring-[#00E5FF] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              placeholder="SPEED_RACER_99"
            />
          </div>

          <AnimatePresence>
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
                exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
              >
                <label className="block font-black uppercase mb-2 text-lg mt-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full border-6 border-black rounded-2xl p-4 text-lg font-black focus:outline-none focus:ring-6 focus:ring-[#00E5FF] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  placeholder="racer@neo.com"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div>
            <label className="block font-black uppercase mb-2 text-lg">Password</label>
            <input
              type="password"
              required
              className="w-full border-6 border-black rounded-2xl p-5 text-lg font-black focus:outline-none focus:ring-6 focus:ring-[#00E5FF] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              placeholder="••••••••"
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            className="w-full bg-[#00E676] text-black font-black uppercase text-3xl py-6 rounded-2xl border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[8px] hover:translate-y-[6px] transition-all mt-2"
            type="submit"
          >
            {isLogin ? 'Vroom Vroom!' : 'Sign Up!'}
          </motion.button>
        </form>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="font-black text-xl uppercase underline decoration-4 underline-offset-4 hover:text-[#FF5722] transition-colors"
          >
            {isLogin ? "Need an account? Register!" : "Already have one? Login!"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
