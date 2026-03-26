import React from 'react';

interface CarLogoProps {
  brand: string;
  className?: string;
}

export default function CarLogo({ brand, className = '' }: CarLogoProps) {
  const b = brand.toLowerCase();

  if (b.includes('porsche')) {
    return (
      <svg viewBox="0 0 100 120" className={className} fill="currentColor">
        <path d="M10,10 Q50,-10 90,10 L90,80 Q50,130 10,80 Z" stroke="currentColor" strokeWidth="5" fill="none"/>
        <rect x="35" y="30" width="30" height="40" stroke="currentColor" strokeWidth="5" fill="none"/>
        <path d="M45,40 L55,40 L50,60 Z" fill="currentColor" />
      </svg>
    );
  }
  if (b.includes('audi')) {
    return (
      <svg viewBox="0 0 160 60" className={className} fill="none" stroke="currentColor" strokeWidth="8">
        <circle cx="30" cy="30" r="20" />
        <circle cx="63" cy="30" r="20" />
        <circle cx="96" cy="30" r="20" />
        <circle cx="129" cy="30" r="20" />
      </svg>
    );
  }
  if (b.includes('bmw')) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" fill="none"/>
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M50,20 A30,30 0 0,1 80,50 L50,50 Z" />
        <path d="M50,80 A30,30 0 0,1 20,50 L50,50 Z" />
      </svg>
    );
  }
  if (b.includes('mercedes') || b.includes('benz')) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="6">
        <circle cx="50" cy="50" r="45" />
        <path d="M50,5 L50,50 L10,75 M50,50 L90,75" />
      </svg>
    );
  }
  if (b.includes('toyota')) {
    return (
      <svg viewBox="0 0 100 70" className={className} fill="none" stroke="currentColor" strokeWidth="6">
        <ellipse cx="50" cy="35" rx="45" ry="30" />
        <ellipse cx="50" cy="25" rx="30" ry="15" />
        <ellipse cx="50" cy="45" rx="10" ry="20" />
      </svg>
    );
  }
  if (b.includes('ford')) {
    return (
      <svg viewBox="0 0 120 60" className={className} fill="none" stroke="currentColor" strokeWidth="6">
        <ellipse cx="60" cy="30" rx="55" ry="25" />
        <text x="60" y="40" fontSize="28" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none" style={{fontFamily: 'serif', fontStyle: 'italic'}}>Ford</text>
      </svg>
    );
  }
  if (b.includes('tesla')) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <path d="M10,20 Q50,0 90,20 L80,30 Q50,15 20,30 Z" />
        <path d="M40,30 L60,30 L55,90 L45,90 Z" />
      </svg>
    );
  }
  if (b.includes('honda')) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="8">
        <rect x="10" y="10" width="80" height="80" rx="20" />
        <path d="M30,20 L30,80 M70,20 L70,80 M30,60 L70,60" />
      </svg>
    );
  }
  if (b.includes('nissan')) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="6">
        <circle cx="50" cy="50" r="40" />
        <rect x="5" y="35" width="90" height="30" fill="currentColor" stroke="none" />
        {/* We use a generic sans-serif text to approximate the logo */}
        <text x="50" y="55" fontSize="18" fontWeight="bold" textAnchor="middle" fill="white" stroke="none" style={{fontFamily: 'sans-serif'}}>NISSAN</text>
      </svg>
    );
  }
  if (b.includes('chevrolet') || b.includes('chevy')) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <path d="M10,40 L90,40 L90,60 L10,60 Z" />
        <path d="M40,10 L60,10 L60,90 L40,90 Z" />
      </svg>
    );
  }
  if (b.includes('volkswagen') || b.includes('vw')) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="6">
        <circle cx="50" cy="50" r="45" />
        <path d="M20,20 L40,80 L50,50 L60,80 L80,20" />
        <path d="M35,20 L50,65 L65,20" />
      </svg>
    );
  }

  // Default generic logo (Shield with first letter)
  const initial = brand ? brand.charAt(0).toUpperCase() : 'C';
  return (
    <svg viewBox="0 0 100 120" className={className} fill="none" stroke="currentColor" strokeWidth="8">
      <path d="M10,10 L90,10 L90,60 Q90,110 50,110 Q10,110 10,60 Z" />
      <text x="50" y="75" fontSize="50" fontWeight="black" textAnchor="middle" fill="currentColor" stroke="none" style={{fontFamily: 'sans-serif'}}>{initial}</text>
    </svg>
  );
}
