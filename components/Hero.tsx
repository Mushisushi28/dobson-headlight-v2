'use client';
import React, { useEffect, useState } from 'react';
import { ArrowRight, Phone, Star, Shield, Zap } from 'lucide-react';

interface HeroProps {
  onBookClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#080808] overflow-hidden flex flex-col">

      {/* ── Background grain texture ── */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
        }}
      />

      {/* ── Ambient yellow glow top-left ── */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[160px] pointer-events-none" />

      {/* ── Main grid ── */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-2 max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-16 pt-36 pb-16 gap-12 lg:gap-0 items-center">

        {/* ── LEFT: Copy ── */}
        <div className="flex flex-col justify-center">

          {/* Eyebrow badge */}
          <div
            className={`inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full border border-yellow-400/25 bg-yellow-400/5 text-yellow-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            Lethbridge's #1 Rated — 47+ Five-Star Reviews
          </div>

          {/* Headline */}
          <div className={`transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.35em] mb-3">
              Mobile Service · Factory Clarity
            </p>
            <h1 className="font-black uppercase leading-[0.9] tracking-tight">
              <span className="block text-white" style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}>
                Headlight
              </span>
              <span
                className="block"
                style={{
                  fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                  WebkitTextStroke: '2px #FFB800',
                  color: 'transparent',
                }}
              >
                Restoration
              </span>
              <span className="block text-white" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}>
                Lethbridge
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <p className={`mt-8 text-slate-400 text-lg leading-relaxed max-w-md transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            We restore foggy headlights to factory clarity in under 90 minutes.{' '}
            <span className="text-white font-semibold">Starting at $99 CAD.</span>{' '}
            No results? You don't pay.
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 mt-10 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <button
              onClick={onBookClick}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-base rounded-xl transition-all duration-200 shadow-[0_0_40px_rgba(255,184,0,0.3)] hover:shadow-[0_0_60px_rgba(255,184,0,0.5)] cursor-pointer uppercase tracking-wide"
            >
              Book Now — Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <a
              href="tel:587-402-4794"
              className="flex items-center justify-center gap-3 px-8 py-4 border border-white/15 hover:border-yellow-400/50 bg-white/5 hover:bg-yellow-400/5 text-white font-bold text-base rounded-xl transition-all duration-200 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-yellow-400" />
              587-402-4794
            </a>
          </div>

          {/* Trust chips */}
          <div className={`flex flex-wrap gap-3 mt-8 transition-all duration-700 delay-[400ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {[
              { icon: Star, label: '4.9★ Google Rating' },
              { icon: Shield, label: 'Results Guaranteed' },
              { icon: Zap, label: 'Same-Day Available' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-xs font-bold uppercase tracking-wide"
              >
                <Icon className="w-3.5 h-3.5 text-yellow-400" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Photo card ── */}
        <div className={`flex items-center justify-center lg:justify-end transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
          <div className="relative w-full max-w-[560px]">

            {/* Glow behind card */}
            <div className="absolute inset-0 bg-yellow-400/20 rounded-3xl blur-3xl scale-95 -z-10" />

            {/* Main photo */}
            <div className="relative rounded-3xl overflow-hidden border border-yellow-400/20 shadow-2xl">
              <img
                src="https://i.ibb.co/QFhDNcgn/20260106-175851-1.jpg"
                alt="Headlight restoration before and after — Dobson Headlight Restoration Lethbridge"
                className="w-full object-cover aspect-[4/3]"
                loading="eager"
              />
              {/* Dark overlay gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Before / After label */}
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur text-white text-xs font-black uppercase tracking-widest border border-white/10">Before</span>
                  <span className="px-3 py-1 rounded-lg bg-yellow-400 text-black text-xs font-black uppercase tracking-widest">After</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur border border-white/10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-white text-xs font-black ml-1">47 reviews</span>
                </div>
              </div>
            </div>

            {/* Floating stat card — top right */}
            <div className="absolute -top-5 -right-5 bg-[#111] border border-white/10 rounded-2xl px-5 py-4 shadow-2xl">
              <p className="text-yellow-400 font-black text-2xl leading-none">$99</p>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Starting Price</p>
            </div>

            {/* Floating stat card — bottom left */}
            <div className="absolute -bottom-5 -left-5 bg-[#111] border border-white/10 rounded-2xl px-5 py-4 shadow-2xl">
              <p className="text-yellow-400 font-black text-2xl leading-none">500+</p>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Cars Restored</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom divider ── */}
      <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent mt-auto" />
    </section>
  );
};

export default Hero;
