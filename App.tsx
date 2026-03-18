'use client'

import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import ComparisonSlider from './components/ComparisonSlider';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import GalleryCarousel from './components/GalleryCarousel';
import Resources from './components/Resources';
import FAQ from './components/FAQ';
import BookingModal from './components/BookingModal';
import FleetModal from './components/FleetModal';
import { SERVICE_AREAS } from './constants';
import PromoBar from './components/PromoBar';
import { Shield, Zap, Search, Car, Image as ImageIcon, Phone } from 'lucide-react';

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" className="inline-block shrink-0">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isFleetModalOpen, setIsFleetModalOpen] = useState(false);
  const [bookingSource, setBookingSource] = useState<'global' | 'chat'>('global');

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero (approx 600px)
      if (window.scrollY > 600) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleBookClick = (source: 'global' | 'chat' = 'global') => {
    setBookingSource(source);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-yellow-400 selection:text-black" style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>
      <PromoBar />
      <Navbar onBookClick={() => handleBookClick('global')} />

      <main>
        <Hero onBookClick={() => handleBookClick('global')} />
        <StatsSection />

        {/* Simple 3-Step Process */}
        <section id="process" className="py-24 bg-slate-950 relative overflow-hidden scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-sm font-black text-yellow-400 uppercase tracking-[0.4em] mb-4">The Dobson Method</h2>
              <p className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">From Cloudy to <span className="text-yellow-400">Crystal Clear</span></p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 items-start relative">
              <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-slate-100 -z-10"></div>

              {[
                {
                  Icon: Search,
                  title: "1. Quick Quote",
                  desc: "Send us a photo and your vehicle details for a fast, honest estimate."
                },
                {
                  Icon: Car,
                  title: "2. Shop Service",
                  desc: "Results while you wait. No need to leave your car for the day."
                },
                {
                  Icon: Shield,
                  title: "3. Restore & Protect",
                  desc: "Professional multi-step restoration followed by high-grade UV protection."
                }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-black rounded-[2.5rem] shadow-2xl flex items-center justify-center mb-8 relative border border-white/10 group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-500 shrink-0">
                    <step.Icon size={44} className="text-yellow-400 group-hover:text-black transition-colors" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center font-black text-sm border-4 border-slate-950 shadow-lg">
                      {i + 1}
                    </div>
                  </div>
                  <div className="max-w-[280px]">
                    <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{step.title}</h3>
                    <p className="text-slate-400 text-sm font-bold leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="about" className="py-24 bg-slate-950 text-white overflow-hidden relative border-y border-white/5 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl font-black mb-10 leading-tight uppercase tracking-tight">
                  Clarity is <span className="text-yellow-400">Safety.</span>
                </h2>
                <div className="space-y-10">
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-yellow-400 text-black rounded-2xl flex items-center justify-center flex-shrink-0 border border-yellow-400 group-hover:scale-110 transition-transform">
                      <Zap size={32} />
                    </div>
                    <div>
                      <h3 className="font-black text-xl mb-2 text-white uppercase tracking-tight">80% More Light</h3>
                      <p className="text-slate-400 leading-relaxed font-medium">Oxidation blocks light output. Our process restores optical clarity for safer nighttime driving and faster reaction times.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white/5 text-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                      <Shield size={32} />
                    </div>
                    <div>
                      <h3 className="font-black text-xl mb-2 text-white uppercase tracking-tight">Curb Appeal Boost</h3>
                      <p className="text-slate-400 leading-relaxed font-medium">Cloudy headlights make a car look 10 years older. Restoration adds significant value to your resale price.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-yellow-400/10 blur-[120px]"></div>
                <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                  <img
                    src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=1200"
                    alt="Night Driving Safety"
                    className="w-full grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ComparisonSlider />

        {/* Work Gallery */}
        <section id="gallery" className="py-24 bg-slate-950 scroll-mt-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-yellow-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4 border border-white/10">
                <ImageIcon className="w-3 h-3" /> Recent Transformations
              </div>
              <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-4">The Dobson <span className="text-yellow-400">Portfolio</span></h2>
              <p className="text-slate-400 font-bold max-w-2xl mx-auto">Browse our full gallery of restorations across Southern Alberta. Hover any vehicle to see the "Before" state.</p>
            </div>

            <GalleryCarousel />

            <div className="mt-20 p-12 bg-white/5 border border-white/10 rounded-[3rem] text-center max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-yellow-400 text-black rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase mb-4">Southern Alberta Built</h3>
              <p className="text-slate-400 font-medium mb-8 leading-relaxed">Our multi-step process is designed specifically to withstand the harsh Southern Alberta UV rays and gravel. We don't just clean; we restore and protect.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://www.facebook.com/DobsonHeadlightRestoration" target="_blank" className="px-8 py-4 bg-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all">Facebook Portfolio</a>
                <a href="https://share.google/KYMPrdpx2hJIyl69o" target="_blank" className="px-8 py-4 bg-yellow-400 text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-yellow-300 transition-all flex items-center justify-center gap-2">
                  <GoogleIcon /> Google Reviews
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Areas */}
        <section id="areas" className="py-24 bg-slate-950 border-y border-white/5 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 rounded-3xl p-12 md:p-20 text-center border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 blur-[80px] -z-0"></div>
              <h2 className="text-3xl font-black text-white mb-8 uppercase tracking-tight relative z-10">Southern Alberta's Specialist</h2>
              <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg font-bold leading-relaxed relative z-10">Serving Southern Alberta with professional restoration services.</p>
              <div className="flex flex-wrap justify-center items-center gap-4 relative z-10">
                {SERVICE_AREAS.map(area => (
                  <button
                    key={area}
                    onClick={() => scrollTo('contact')}
                    className="flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-xs font-black uppercase tracking-[0.2em] text-slate-300 hover:border-yellow-400 hover:text-yellow-400 hover:scale-105 transition-all duration-300 cursor-pointer min-w-[160px] text-center"
                  >
                    <span className="w-full text-center">{area}, AB</span>
                  </button>
                ))}
              </div>
              <p className="mt-12 text-sm text-slate-600 font-black italic tracking-widest relative z-10 uppercase">Don't see your town? Click a town to inquire!</p>
            </div>
          </div>
        </section>

        {/* Testimonials - Using Elfsight Widget */}
        <section className="py-24 bg-slate-950 scroll-mt-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-4">Real Facebook Reviews</h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Join hundreds of satisfied Southern Alberta drivers</p>
            </div>

            {/* Elfsight Facebook Reviews Widget */}
            <div className="elfsight-app-e6a876bc-3273-4fe1-8431-79a08137b1ab" data-elfsight-app-lazy></div>

            <div className="mt-16 text-center">
              <a
                href="https://share.google/KYMPrdpx2hJIyl69o"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all duration-300 shadow-xl border border-white/10"
              >
                View All Google Reviews
              </a>
            </div>
          </div>
        </section>

        <Resources />

        <Services onBookClick={handleBookClick} onFleetClick={() => setIsFleetModalOpen(true)} />

        <SocialProof />

        <FAQ />

        <ContactForm />
      </main>

      <Footer />
      <ChatWidget onBookClick={() => handleBookClick('chat')} />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        source={bookingSource}
      />

      <FleetModal
        isOpen={isFleetModalOpen}
        onClose={() => setIsFleetModalOpen(false)}
      />

      {/* Mobile Sticky CTA */}
      <div className={`
        fixed bottom-0 left-0 right-0 z-[100] 
        md:hidden 
        transition-transform duration-500 
        bg-black/95 backdrop-blur-md border-t border-white/10 
        p-4 flex gap-3
        ${showStickyCTA ? 'translate-y-0' : 'translate-y-full'}
      `}>
        <button
          onClick={() => handleBookClick('global')}
          className="flex-grow bg-yellow-400 text-black py-4 rounded-xl font-black uppercase tracking-widest active:scale-95 transition-all shadow-xl shadow-yellow-400/10"
        >
          Book Now
        </button>
        <a
          href="tel:587-402-4794"
          className="bg-white/10 border border-white/20 text-white px-6 flex items-center justify-center rounded-xl active:scale-95 transition-all hover:bg-white/20"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      <Analytics />
    </div>
  );
}

export default App;

