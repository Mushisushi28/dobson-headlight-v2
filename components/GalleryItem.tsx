
import React, { useState } from 'react';

interface GalleryItemProps {
  before: string;
  after: string;
  label: string;
  description: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ before, after, label, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-900 border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(!isHovered)}
    >
      {/* After Image (Primary) */}
      <img
        src={after}
        alt={`${label} After — Headlight Restoration Lethbridge AB`}
        loading="lazy"
        width={400}
        height={500}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Before Image (Revealed on Hover) */}
      <img
        src={before}
        alt={`${label} Before — Yellowed Foggy Headlights Southern Alberta`}
        loading="lazy"
        width={400}
        height={500}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
      
      {/* Status Badges */}
      <div className="absolute top-6 left-6 flex gap-2">
        <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${isHovered ? 'bg-slate-900 text-white border border-white/20' : 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/20'}`}>
          {isHovered ? 'Before' : 'After'}
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-8 left-8 right-8">
        <p className="text-[10px] font-black text-yellow-400 uppercase tracking-[0.3em] mb-2">{label}</p>
        <h4 className="text-xl font-black text-white uppercase tracking-tight leading-tight">{description}</h4>
        <div className="mt-4 h-1 w-12 bg-yellow-400 rounded-full group-hover:w-full transition-all duration-500"></div>
      </div>

      {/* Instruction Badge */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
        <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg text-[8px] font-black text-white uppercase tracking-widest">
          Release to see After
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
