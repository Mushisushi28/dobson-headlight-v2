
import React from 'react';
import { ArrowRight, CheckCircle, MapPin, Shield, Star, Users, Award, Zap } from 'lucide-react';

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
    <div className="relative pt-40 pb-12 lg:pt-56 lg:pb-20 overflow-hidden bg-slate-950">
      <div className="absolute top-0 right-0 w-1/2 h-full -z-10 bg-slate-900 skew-x-[-12deg] translate-x-20 hidden lg:block opacity-50"></div>

      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center text-white mb-20">
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-yellow-400 text-xs font-black uppercase tracking-widest mb-8 border border-white/10 backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5" /> Service: Lethbridge & Southern Alberta
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight mb-8 leading-[1.05]">
              Don't Replace.<br />
              <span className="text-yellow-400">Restore & Save.</span>
            </h1>

            <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed font-medium">
              Lethbridge's #1 rated restoration. We bring factory clarity back to your headlights for a fraction of the cost of new ones. <span className="text-yellow-400 font-black">Starting at $99.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto px-10 py-5 bg-yellow-400 text-black rounded-2xl font-black text-lg hover:bg-yellow-300 transition-all shadow-2xl shadow-yellow-400/20 flex items-center justify-center gap-3 group uppercase tracking-tight"
              >
                Book Your Slot <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto px-10 py-5 bg-white/5 border-2 border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all text-center backdrop-blur-md uppercase tracking-tight"
              >
                Instant Quote
              </button>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {[
                { icon: Shield, text: "UV-Protected Finish" },
                { icon: CheckCircle, text: "Drop-Off Service" },
                { icon: CheckCircle, text: "No Results, No Pay" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-black text-slate-500 uppercase tracking-widest">
                  <item.icon className="w-4 h-4 text-yellow-400" /> {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-4 bg-yellow-400/5 rounded-[3rem] blur-2xl group-hover:bg-yellow-400/10 transition-colors"></div>

            <div className="relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] flex flex-col sm:flex-row group cursor-pointer" onClick={() => scrollTo('comparison')}>
              <div className="relative flex-1 h-full overflow-hidden">
                <img
                  src="https://i.ibb.co/QFhDNcgn/20260106-175851-1.jpg"
                  alt="Yellowed foggy headlights before professional restoration in Lethbridge Alberta"
                  fetchPriority="high"
                  width={600}
                  height={450}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded border border-white/10">Dangerous & Faded</div>
              </div>
              <div className="relative flex-1 h-full border-t sm:border-t-0 sm:border-l border-white/20">
                <img
                  src="https://i.ibb.co/TMwM05dB/20260106-183436-1.jpg"
                  alt="Crystal clear headlights after Dobson restoration service — Lethbridge AB"
                  width={600}
                  height={450}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-black text-[10px] font-black uppercase tracking-widest rounded shadow-lg">Crystal Clear</div>
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 pointer-events-none">
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-400">Join 500+ Happy Drivers</span>
                  </div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-300 mb-1">Southern Alberta Service</p>
                  <p className="text-xl font-black uppercase tracking-tighter leading-none">Professional Restoration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-white/5">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-white font-black text-xs uppercase tracking-widest">5.0 Star Rated</p>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">On Facebook & Google</p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <Users className="w-5 h-5 text-yellow-400 mb-1" />
            <p className="text-white font-black text-xs uppercase tracking-widest">Local Specialist</p>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Southern Alberta Born</p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <Zap className="w-5 h-5 text-yellow-400 mb-1" />
            <p className="text-white font-black text-xs uppercase tracking-widest">Fast Results</p>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">60-90 Minute Service</p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <Award className="w-5 h-5 text-yellow-400 mb-1" />
            <p className="text-white font-black text-xs uppercase tracking-widest">Guaranteed Results</p>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Or You Don't Pay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
