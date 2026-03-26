import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { useState } from 'react';
import { Car } from '@/lib/mockData';

export default function AddCarModal({ onClose, onAdd }: { onClose: () => void, onAdd: (car: Omit<Car, 'id' | 'color'>) => void }) {
  const [formData, setFormData] = useState({
    year: '',
    brand: '',
    model: '',
    engineType: 'Gasoline',
    status: 'current' as 'current' | 'previous'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.5, rotate: -15 }}
        transition={{ type: 'spring', bounce: 0.6 }}
        className="bg-[#FF90E8] border-8 border-black rounded-[3rem] p-10 w-full max-w-xl shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] relative max-h-[90vh] overflow-y-auto"
      >
        <motion.button 
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-6 right-6 bg-[#FF5722] p-4 rounded-full border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-10"
        >
          <X strokeWidth={4} size={32} color="white" />
        </motion.button>

        <h2 className="text-5xl font-black uppercase mb-8 border-b-8 border-black pb-6 text-white" style={{ WebkitTextStroke: '2px black' }}>
          New Ride!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block font-black uppercase mb-2 text-xl">Year</label>
              <input
                required
                type="number"
                value={formData.year}
                onChange={(e) => setFormData({...formData, year: e.target.value})}
                className="w-full border-8 border-black rounded-3xl p-4 text-xl font-black focus:outline-none focus:ring-8 focus:ring-[#FFEA00] transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                placeholder="2024"
              />
            </div>
            <div>
              <label className="block font-black uppercase mb-2 text-xl">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value as 'current' | 'previous'})}
                className="w-full border-8 border-black rounded-3xl p-4 text-xl font-black focus:outline-none focus:ring-8 focus:ring-[#FFEA00] transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] appearance-none bg-white"
              >
                <option value="current">Current</option>
                <option value="previous">Previous</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block font-black uppercase mb-2 text-xl">Brand</label>
              <input
                required
                type="text"
                value={formData.brand}
                onChange={(e) => setFormData({...formData, brand: e.target.value})}
                className="w-full border-8 border-black rounded-3xl p-4 text-xl font-black focus:outline-none focus:ring-8 focus:ring-[#FFEA00] transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                placeholder="Porsche"
              />
            </div>
            <div>
              <label className="block font-black uppercase mb-2 text-xl">Engine</label>
              <select
                value={formData.engineType}
                onChange={(e) => setFormData({...formData, engineType: e.target.value})}
                className="w-full border-8 border-black rounded-3xl p-4 text-xl font-black focus:outline-none focus:ring-8 focus:ring-[#FFEA00] transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] appearance-none bg-white"
              >
                <option>Gasoline</option>
                <option>Electric</option>
                <option>Hybrid</option>
                <option>Diesel</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-black uppercase mb-2 text-xl">Model</label>
            <input
              required
              type="text"
              value={formData.model}
              onChange={(e) => setFormData({...formData, model: e.target.value})}
              className="w-full border-8 border-black rounded-3xl p-4 text-xl font-black focus:outline-none focus:ring-8 focus:ring-[#FFEA00] transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              placeholder="911 GT3"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95, rotate: 2 }}
            className="w-full bg-[#00E676] text-black font-black uppercase text-4xl py-6 rounded-3xl border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[8px] hover:translate-y-[8px] transition-all mt-8"
            type="submit"
          >
            Park It!
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
