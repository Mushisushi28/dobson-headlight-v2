
import React, { useState, useRef, useEffect } from 'react';
import { Image as ImageIcon, ArrowRight } from 'lucide-react';

const ComparisonSlider: React.FC = () => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const container = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e 
      ? e.touches[0].clientX - container.left 
      : (e as React.MouseEvent).clientX - container.left;
    const nextPosition = Math.max(0, Math.min(100, (x / container.width) * 100));
    setPosition(nextPosition);
  };

  const scrollToGallery = () => {
    const el = document.getElementById('gallery');
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
    <section id="comparison" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Unbelievable Results</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-bold">Slide to see the difference our multi-step restoration makes compared to cheap kits.</p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full max-w-4xl mx-auto aspect-video rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] cursor-ew-resize select-none border border-slate-100 group"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Image (Full Background) */}
          <div className="absolute inset-0">
            <img 
              src="https://i.ibb.co/TMwM05dB/20260106-183436-1.jpg" 
              alt="After Restoration"
              className="w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute bottom-8 right-8 px-6 py-2 bg-yellow-400 text-black font-black rounded-xl shadow-xl z-20 text-xs uppercase tracking-widest">AFTER</div>
          </div>

          {/* Before Image (Clipped Overlay) */}
          <div 
            className="absolute inset-0 overflow-hidden z-10 pointer-events-none"
            style={{ width: `${position}%` }}
          >
            <div style={{ width: containerWidth || '100%' }} className="h-full relative overflow-hidden">
              <img 
                src="https://i.ibb.co/QFhDNcgn/20260106-175851-1.jpg" 
                alt="Before Restoration"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{ minWidth: containerWidth }}
              />
              <div className="absolute bottom-8 left-8 px-6 py-2 bg-slate-900 text-white font-black rounded-xl shadow-xl text-xs uppercase tracking-widest">BEFORE</div>
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1.5 bg-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.6)] z-30 pointer-events-none"
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center border-[6px] border-yellow-400 transition-transform group-hover:scale-110">
              <div className="flex gap-1.5">
                <div className="w-1.5 h-6 bg-slate-200 rounded-full"></div>
                <div className="w-1.5 h-6 bg-slate-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={scrollToGallery}
            className="inline-flex items-center gap-3 px-10 py-5 bg-slate-950 text-white rounded-2xl font-black text-sm hover:bg-black transition-all shadow-xl hover:shadow-2xl uppercase tracking-widest group"
          >
            <ImageIcon className="w-5 h-5 text-yellow-400" />
            View Full Gallery 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSlider;
