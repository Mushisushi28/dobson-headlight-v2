
import React, { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center h-full ${className}`}>
    <img
      src="/dobson-logo.png"
      alt="Dobson Headlight Restoration Logo"
      className="h-10 w-auto object-contain drop-shadow-2xl"
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
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4">
      {/* Floating pill navbar */}
      <div
        className={`
          w-full max-w-4xl flex justify-between items-center
          px-6 py-3
          rounded-full
          bg-black/80 backdrop-blur-xl
          border border-white/10
          transition-all duration-300
          ${isScrolled ? 'shadow-[0_0_30px_rgba(255,184,0,0.1)] border-white/20' : ''}
        `}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}
          className="hover:opacity-90 transition-opacity flex items-center cursor-pointer"
        >
          <Logo />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo('process')}
            className="text-sm font-bold text-slate-300 hover:text-yellow-400 transition-colors duration-300 uppercase tracking-[0.15em] outline-none cursor-pointer"
          >
            Process
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="text-sm font-bold text-slate-300 hover:text-yellow-400 transition-colors duration-300 uppercase tracking-[0.15em] outline-none cursor-pointer"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollTo('areas')}
            className="text-sm font-bold text-slate-300 hover:text-yellow-400 transition-colors duration-300 uppercase tracking-[0.15em] outline-none cursor-pointer"
          >
            Areas
          </button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:587-402-4794"
            className="text-sm font-bold text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            587-402-4794
          </a>
          <button
            onClick={onBookClick}
            className="px-5 py-2.5 bg-yellow-400 text-black rounded-full text-sm font-black hover:bg-yellow-300 transition-all duration-300 shadow-lg shadow-yellow-400/20 uppercase tracking-tight cursor-pointer"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <a href="tel:587-402-4794" className="p-2 text-yellow-400 cursor-pointer">
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-yellow-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Full Overlay Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 bg-black/95 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="flex flex-col gap-6">
            <button
              onClick={() => scrollTo('process')}
              className="text-xl font-black text-white text-left uppercase tracking-widest hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Process
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="text-xl font-black text-white text-left uppercase tracking-widest hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollTo('areas')}
              className="text-xl font-black text-white text-left uppercase tracking-widest hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Service Areas
            </button>
            <div className="border-t border-white/10 pt-6">
              <button
                onClick={() => { onBookClick(); setIsMenuOpen(false); }}
                className="w-full py-4 bg-yellow-400 text-black rounded-2xl text-center font-black uppercase tracking-widest shadow-xl shadow-yellow-400/20 cursor-pointer"
              >
                Book Your Slot
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
