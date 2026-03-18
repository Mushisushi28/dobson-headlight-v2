
import React, { useEffect, useRef, useState } from 'react';

interface Stat {
  value: string;
  numericValue: number;
  suffix: string;
  prefix: string;
  label: string;
}

const STATS: Stat[] = [
  { value: '500+', numericValue: 500, prefix: '', suffix: '+', label: 'Cars Restored' },
  { value: '47', numericValue: 47, prefix: '', suffix: '', label: 'Five-Star Reviews' },
  { value: '5★', numericValue: 5, prefix: '', suffix: '★', label: 'Google Rating' },
  { value: '$99', numericValue: 99, prefix: '$', suffix: '', label: 'Starting Price' },
];

const CountUp: React.FC<{ stat: Stat; active: boolean }> = ({ stat, active }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1500;
    const steps = 60;
    const increment = stat.numericValue / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.numericValue) {
        setCount(stat.numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, stat.numericValue]);

  return (
    <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-yellow-400 tracking-tight">
      {stat.prefix}{active ? count : 0}{stat.suffix}
    </span>
  );
};

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,184,0,0.04)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center py-6 px-4 group relative">
              {/* Yellow glow behind number */}
              <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/5 rounded-2xl transition-colors duration-500" />
              <CountUp stat={stat} active={isVisible} />
              <p className="mt-3 text-sm font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
