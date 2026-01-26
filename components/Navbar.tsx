
import React, { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center h-full ${className}`}>
    <img
      src="/dobson-logo.png"
      alt="Dobson Headlight Restoration Logo"
      className="h-40 w-auto object-contain drop-shadow-2xl"
    />
  </div>
);

interface NavbarProps {
  onBookClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setIsMenuOpen(false);
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
    <nav className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-slate-950/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-0'
      : 'bg-transparent border-b border-transparent py-2'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}
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
            <button
              onClick={onBookClick}
              className="px-6 py-3 bg-yellow-400 text-black rounded-xl text-sm font-black hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/20 uppercase tracking-tighter"
            >
              Book Now
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <a href="tel:587-402-4794" className="p-2.5 text-yellow-400 bg-white/5 rounded-xl border border-white/10"><Phone className="w-6 h-6" /></a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-8 h-8 text-yellow-400" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 bg-slate-950 border-b border-white/10 p-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-6">
            <button
              onClick={() => scrollTo('process')}
              className="text-lg font-black text-white text-left uppercase tracking-widest"
            >
              Process
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="text-lg font-black text-white text-left uppercase tracking-widest"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollTo('areas')}
              className="text-lg font-black text-white text-left uppercase tracking-widest"
            >
              Service Area
            </button>
            <button
              onClick={() => {
                onBookClick();
                setIsMenuOpen(false);
              }}
              className="w-full py-4 bg-yellow-400 text-black rounded-2xl text-center font-black uppercase tracking-widest shadow-xl shadow-yellow-400/10"
            >
              Book Your Slot
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
