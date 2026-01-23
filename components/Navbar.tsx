
import React from 'react';
import { Menu, Phone } from 'lucide-react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center h-full ${className}`}>
    <img 
      src="https://i.ibb.co/KxFsd4bP/colored-logo-1.png" 
      alt="Dobson Headlight Restoration Logo" 
      className="h-40 w-auto object-contain drop-shadow-2xl"
    />
  </div>
);

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Standard offset for h-24 navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
            className="hover:opacity-90 transition-opacity h-full flex items-center relative z-10"
          >
            <Logo />
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollTo('process')} 
              className="text-sm font-black text-slate-300 hover:text-yellow-400 transition-colors uppercase tracking-[0.2em] outline-none"
            >
              Process
            </button>
            <button 
              onClick={() => scrollTo('services')} 
              className="text-sm font-black text-slate-300 hover:text-yellow-400 transition-colors uppercase tracking-[0.2em] outline-none"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollTo('areas')} 
              className="text-sm font-black text-slate-300 hover:text-yellow-400 transition-colors uppercase tracking-[0.2em] outline-none"
            >
              Service Area
            </button>
            <a 
              href="https://koalendar.com/e/meet-with-isaac-dobson" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-yellow-400 text-black rounded-xl text-sm font-black hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/20 uppercase tracking-tighter"
            >
              Book Now
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <a href="tel:587-402-4794" className="p-2.5 text-yellow-400 bg-white/5 rounded-xl border border-white/10"><Phone className="w-6 h-6" /></a>
            <button className="p-2 text-white"><Menu className="w-8 h-8" /></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
