import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { initialCars, Car } from '@/lib/mockData';
import { Plus, LogOut, Trophy, Wrench } from 'lucide-react';
import AddCarModal from './AddCarModal';
import CarLogo from './CarLogo';

export default function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [cars, setCars] = useState<Car[]>(initialCars);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCar = (newCar: Omit<Car, 'id' | 'color'>) => {
    const colors = ['bg-[#FF5722]', 'bg-[#FF90E8]', 'bg-[#00E676]', 'bg-[#FFEA00]', 'bg-[#00E5FF]'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    const car: Car = {
      ...newCar,
      id: Math.random().toString(36).substr(2, 9),
      color: randomColor,
    };
    
    setCars([car, ...cars]);
    setIsModalOpen(false);
  };

  const currentCars = cars.filter(c => c.status === 'current');
  const previousCars = cars.filter(c => c.status === 'previous');

  const renderCarCard = (car: Car, i: number) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: i % 2 === 0 ? 2 : -2 }}
      exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
      transition={{ type: 'spring', bounce: 0.6 }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10, y: -10 }}
      key={car.id}
      className={`${car.color} border-8 border-black rounded-[3rem] p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group transition-shadow`}
    >
      <div className="absolute -right-10 -bottom-10 opacity-20 transform group-hover:scale-110 group-hover:-rotate-12 group-hover:-translate-x-4 transition-all duration-500">
        <CarLogo brand={car.brand} className="w-64 h-64 text-white" />
      </div>
      <div className="relative z-10">
        <span className="bg-white text-black font-black px-4 py-2 rounded-xl text-xl uppercase inline-block mb-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-3 group-hover:rotate-3 transition-transform">
          {car.year}
        </span>
        <h3 className="text-5xl font-black uppercase mb-2 leading-none text-white group-hover:scale-105 origin-left transition-transform" style={{ WebkitTextStroke: '2px black' }}>
          {car.brand}
        </h3>
        <p className="text-4xl font-black mb-8 text-black">{car.model}</p>
        <div className="inline-block bg-black text-white border-4 border-black rounded-2xl px-6 py-3 font-black uppercase text-xl shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transform rotate-2 group-hover:-rotate-2 transition-transform">
          {car.engineType}
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: 100 }}
      className="min-h-screen p-6 md:p-12 max-w-7xl mx-auto"
    >
      <header className="flex flex-col md:flex-row justify-between items-center mb-12 bg-white border-8 border-black p-8 rounded-[3rem] shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
        <h1 
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6 md:mb-0"
          style={{ WebkitTextStroke: '3px black', textShadow: '6px 6px 0px #000' }}
        >
          Neo-Garage
        </h1>
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9, rotate: -5 }}
          onClick={onLogout}
          className="bg-[#FF5722] p-4 rounded-2xl border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[8px] hover:translate-y-[8px] transition-all"
          title="Logout"
        >
          <LogOut strokeWidth={4} size={32} color="white" />
        </motion.button>
      </header>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="bg-[#FFEA00] border-8 border-black rounded-[2rem] p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex items-center gap-6"
        >
          <div className="bg-white p-4 rounded-full border-4 border-black">
            <Trophy size={40} className="text-black" />
          </div>
          <div>
            <p className="text-xl font-black uppercase">Total Fleet</p>
            <p className="text-5xl font-black">{cars.length}</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05, rotate: -2 }}
          className="bg-[#00E5FF] border-8 border-black rounded-[2rem] p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex items-center gap-6"
        >
          <div className="bg-white p-4 rounded-full border-4 border-black">
            <Wrench size={40} className="text-black" />
          </div>
          <div>
            <p className="text-xl font-black uppercase">Current</p>
            <p className="text-5xl font-black">{currentCars.length}</p>
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05, rotate: -3 }}
          whileTap={{ scale: 0.95, rotate: 3 }}
          onClick={() => setIsModalOpen(true)}
          className="bg-[#00E676] flex items-center justify-center gap-4 text-3xl font-black uppercase px-8 py-6 rounded-[2rem] border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[8px] hover:translate-y-[8px] transition-all h-full"
        >
          <Plus strokeWidth={4} size={40} /> Add Car!
        </motion.button>
      </div>

      <div className="mb-16">
        <motion.h2 
          animate={{ rotate: [-1, 1, -1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block text-4xl font-black uppercase bg-white text-black px-8 py-4 rounded-3xl border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-10 transform -rotate-2"
        >
          Current Rides
        </motion.h2>
        
        {currentCars.length === 0 ? (
          <p className="text-2xl font-black uppercase text-black/50 ml-4">No current rides!</p>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {currentCars.map((car, i) => renderCarCard(car, i))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <div>
        <motion.h2 
          animate={{ rotate: [1, -1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="inline-block text-4xl font-black uppercase bg-white text-black px-8 py-4 rounded-3xl border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-10 transform rotate-2"
        >
          Previous Rides
        </motion.h2>

        {previousCars.length === 0 ? (
          <p className="text-2xl font-black uppercase text-black/50 ml-4">No previous rides!</p>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {previousCars.map((car, i) => renderCarCard(car, i))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <AddCarModal onClose={() => setIsModalOpen(false)} onAdd={handleAddCar} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
