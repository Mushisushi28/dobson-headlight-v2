
import React from 'react';
import { ArrowRight, Phone, ChevronDown } from 'lucide-react';

interface HeroProps {
  onBookClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950">
      {/* Radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1a1a_0%,_#0a0a0a_70%)] -z-10" />

      {/* Yellow glow orb behind headline */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-yellow-400/15 blur-[120px] rounded-full -z-10 animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-yellow-400 text-xs font-black uppercase tracking-widest mb-8 border border-yellow-400/20 opacity-0 animate-fadeInUp"
          style={{ animationFillMode: 'forwards' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          Lethbridge's Most Trusted — 47+ Five-Star Reviews
        </div>

        {/* Headline */}
        <div className="mb-6">
          <p
            className="text-sm sm:text-base font-black text-slate-400 uppercase tracking-[0.4em] mb-2 opacity-0 animate-fadeInUp-1"
            style={{ animationFillMode: 'forwards' }}
          >
            Mobile Service → Factory Clarity
          </p>
          <h1
            className="text-6xl sm:text-7xl lg:text-9xl font-black text-white leading-[0.95] tracking-tight uppercase opacity-0 animate-fadeInUp-2"
            style={{ animationFillMode: 'forwards' }}
          >
            Headlight
          </h1>
          <h1
            className="text-6xl sm:text-7xl lg:text-9xl font-black leading-[0.95] tracking-tight uppercase opacity-0 animate-fadeInUp-3"
            style={{
              animationFillMode: 'forwards',
              WebkitTextStroke: '2px #FFB800',
              color: 'transparent',
            }}
          >
            Restoration
          </h1>
        </div>

        {/* Subtext */}
        <p
          className="text-lg sm:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed font-medium opacity-0 animate-fadeInUp-3"
          style={{ animationFillMode: 'forwards' }}
        >
          47+ five-star reviews. Starting at{' '}
          <span className="text-yellow-400 font-black">$99 CAD</span>. Results guaranteed or it&apos;s free.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 mb-12 opacity-0 animate-fadeInUp-4"
          style={{ animationFillMode: 'forwards' }}
        >
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-10 py-5 bg-yellow-400 text-black rounded-2xl font-black text-lg hover:bg-yellow-300 transition-all duration-300 shadow-2xl shadow-yellow-400/25 flex items-center justify-center gap-3 group uppercase tracking-tight cursor-pointer"
          >
            Book Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="tel:587-402-4794"
            className="w-full sm:w-auto px-10 py-5 bg-white/5 border-2 border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center flex items-center justify-center gap-3 uppercase tracking-tight cursor-pointer"
          >
            <Phone className="w-5 h-5 text-yellow-400" />
            587-402-4794
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="flex flex-wrap gap-x-8 gap-y-3 opacity-0 animate-fadeInUp-4"
          style={{ animationFillMode: 'forwards' }}
        >
          {[
            '500+ Cars Restored',
            '47 Reviews',
            '5★ Average',
            '$99 Starting',
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-2 text-sm font-black text-slate-500 uppercase tracking-widest">
              <span className="w-1 h-1 rounded-full bg-yellow-400" />
              {stat}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('process')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-black uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce-y" />
      </button>
    </div>
  );
};

export default Hero;
