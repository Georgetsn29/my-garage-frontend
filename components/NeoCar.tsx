import { motion } from 'motion/react';

interface NeoCarProps {
  color?: string;
  className?: string;
  isMoving?: boolean;
  size?: number; // font-size in px, controls overall scale
}

export default function NeoCar({ color = '#FF5722', className = '', isMoving = false, size = 16 }: NeoCarProps) {
  return (
    <div className={`relative flex-shrink-0 ${className}`} style={{ fontSize: size, width: '8em', height: '5em' }}>
      
      {/* Spoiler */}
      <div className="absolute top-[0.8em] left-[0.2em] w-[1.5em] h-[0.5em] bg-black rounded-sm z-0 transform -rotate-12" />
      <div className="absolute top-[0.2em] left-[-0.5em] w-[2em] h-[0.8em] bg-[#FFEA00] border-[0.2em] border-black rounded-sm z-10 transform -rotate-12" />

      {/* Exhaust Pipe */}
      <div className="absolute bottom-[1.2em] left-[-0.8em] w-[1.5em] h-[0.8em] bg-gray-400 border-[0.2em] border-black rounded-sm z-0" />
      
      {/* Exhaust Smoke/Flames when moving */}
      {isMoving && (
        <motion.div 
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5], x: [-5, -20] }}
          transition={{ duration: 0.3, repeat: Infinity }}
          className="absolute bottom-[1.2em] left-[-1.5em] w-[1em] h-[1em] bg-white rounded-full z-0"
        />
      )}

      {/* Roof */}
      <div className="absolute top-[0.5em] left-[1.5em] w-[4em] h-[2em] bg-white border-[0.2em] border-black rounded-t-[0.75em] z-10 overflow-hidden transform skew-x-[-10deg]">
        <div className="absolute inset-[0.1em] bg-[#00E5FF] border-[0.15em] border-black rounded-t-[0.5em]" />
        <div className="absolute top-0 left-1/2 w-[0.2em] h-full bg-black -ml-[0.1em] transform skew-x-[10deg]" />
      </div>
      
      {/* Main Body */}
      <div 
        className="absolute bottom-[1em] left-0 w-[7.5em] h-[2.5em] border-[0.2em] border-black rounded-[0.5em] rounded-tr-[2em] rounded-br-[0.5em] z-20 overflow-hidden"
        style={{ backgroundColor: color, boxShadow: '0.25em 0.25em 0px 0px rgba(0,0,0,1)' }}
      >
        {/* Headlight */}
        <div className="absolute right-[0.25em] top-[0.5em] w-[1em] h-[1em] bg-[#FFEA00] border-[0.15em] border-black rounded-full" />
        {/* Taillight */}
        <div className="absolute left-[0.25em] top-[0.5em] w-[0.5em] h-[1em] bg-red-500 border-[0.15em] border-black rounded-sm" />
        {/* Handle */}
        <div className="absolute left-[3.5em] top-[0.5em] w-[1em] h-[0.3em] bg-black rounded-full" />
        
        {/* Racing Stripe */}
        <div className="absolute left-0 top-1/2 w-full h-[0.6em] bg-white opacity-50 -translate-y-1/2 transform -skew-x-12" />
      </div>

      {/* Front Bumper */}
      <div className="absolute bottom-[1.2em] right-[0.2em] w-[0.8em] h-[1em] bg-black rounded-r-md z-10" />

      {/* Wheels */}
      <motion.div 
        animate={isMoving ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[0.25em] left-[0.75em] w-[2.25em] h-[2.25em] bg-white border-[0.2em] border-black rounded-full z-30 flex items-center justify-center"
        style={{ boxShadow: '0.15em 0.15em 0px 0px rgba(0,0,0,1)' }}
      >
        <div className="w-[0.75em] h-[0.75em] bg-black rounded-full z-10" />
        <div className="absolute w-full h-[0.2em] bg-black" />
        <div className="absolute h-full w-[0.2em] bg-black" />
      </motion.div>

      <motion.div 
        animate={isMoving ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[0.25em] right-[1.25em] w-[2.25em] h-[2.25em] bg-white border-[0.2em] border-black rounded-full z-30 flex items-center justify-center"
        style={{ boxShadow: '0.15em 0.15em 0px 0px rgba(0,0,0,1)' }}
      >
        <div className="w-[0.75em] h-[0.75em] bg-black rounded-full z-10" />
        <div className="absolute w-full h-[0.2em] bg-black" />
        <div className="absolute h-full w-[0.2em] bg-black" />
      </motion.div>
    </div>
  );
}
