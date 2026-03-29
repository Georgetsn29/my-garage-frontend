export interface Car {
  id: string;
  year: string;
  brand: string;
  model: string;
  engineType: string;
  color: string;
  status: 'current' | 'previous';
}

export const initialCars: Car[] = [
  { id: '1', year: '2021', brand: 'Tesla', model: 'Model 3', engineType: 'Electric', color: 'bg-[#FF5722]', status: 'current' },
  { id: '2', year: '2014', brand: 'MINI', model: 'PACEMAN JCW', engineType: 'Gas', color: 'bg-[#00E5FF]', status: 'previous' },
  { id: '3', year: '2019', brand: 'Lexus', model: 'UX', engineType: 'Hybrid', color: 'bg-[#00E676]', status: 'current' },
];
