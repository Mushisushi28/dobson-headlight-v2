
import React from 'react';
import { Check, Sparkles, ShieldCheck, Zap, AlertTriangle, TrendingDown, Clock } from 'lucide-react';
import { PACKAGES, FLEET_PACKAGES } from '../constants';

interface ServicesProps {
  onBookClick: () => void;
  onFleetClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onBookClick, onFleetClick }) => {
  const [activeTab, setActiveTab] = React.useState<'residential' | 'commercial'>('residential');

  const displayedPackages = activeTab === 'residential' ? PACKAGES : FLEET_PACKAGES;

  return (
    <section id="services" className="py-24 bg-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-yellow-400 font-black text-xs uppercase tracking-[0.4em] mb-3">Transparent Pricing</p>
            <h2 className="text-4xl font-black text-white mb-4 leading-tight uppercase tracking-tight">
              Professional Packages
              <br />
              <span className="text-yellow-400">Built to Last.</span>
            </h2>
            <div className="w-16 h-1 bg-yellow-400 rounded-full" />
            <p className="text-slate-400 text-lg leading-relaxed font-medium mt-4">We don't do wipe-on fixes. Every restoration includes multi-step leveling and professional UV protection.</p>
          </div>
          {/* Tab toggle */}
          <div className="flex gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/10">
            <button
              onClick={() => setActiveTab('residential')}
              className={`px-5 py-2.5 rounded-xl text-sm font-black transition-all duration-300 uppercase tracking-tight cursor-pointer ${activeTab === 'residential'
                ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/20'
                : 'text-slate-400 hover:text-white'
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`px-5 py-2.5 rounded-xl text-sm font-black transition-all duration-300 uppercase tracking-tight cursor-pointer ${activeTab === 'commercial'
                ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/20'
                : 'text-slate-400 hover:text-white'
              }`}
            >
              Fleet / Commercial
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {displayedPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 ${pkg.popular
                ? 'bg-yellow-400/5 border border-yellow-400 shadow-[0_0_40px_rgba(255,184,0,0.15)] scale-[1.02] z-10'
                : 'bg-white/5 border border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-yellow-400 text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-yellow-400/30">
                  <Clock size={10} /> Limited Slots This Week
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-5xl font-black text-yellow-400">{pkg.priceRange}</span>
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-wider ml-1">/per set</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed font-medium text-slate-400">
                  {pkg.description}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm font-medium border-b border-white/5 pb-4 last:border-none last:pb-0">
                    <div className="mt-0.5 p-1 rounded-md bg-yellow-400/10 text-yellow-400 shrink-0">
                      <Check size={12} />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              {pkg.ctaUrl ? (
                <a
                  href={pkg.ctaUrl}
                  className={`w-full py-4 rounded-2xl font-black text-center transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer ${pkg.popular
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-xl shadow-yellow-400/20'
                    : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5'
                  }`}
                >
                  {pkg.ctaText}
                </a>
              ) : (
                <button
                  onClick={activeTab === 'commercial' ? onFleetClick : onBookClick}
                  className={`w-full py-4 rounded-2xl font-black text-center transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer ${pkg.popular
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-xl shadow-yellow-400/20'
                    : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5'
                  }`}
                >
                  {pkg.ctaText || 'Choose Package'}
                </button>
              )}

              <div className="mt-5 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-600">
                <ShieldCheck size={12} className="text-yellow-400/50" /> Satisfaction Guarantee
              </div>
            </div>
          ))}
        </div>

        {/* Economic Logic Bar */}
        <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-yellow-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4">
                <TrendingDown size={14} /> Smart Investment
              </div>
              <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-4">Why Restore?</h3>
              <p className="text-slate-400 font-medium">New headlights are expensive. Restoration saves you over 80% of the cost while providing factory clarity.</p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
                <AlertTriangle className="absolute -right-4 -top-4 w-24 h-24 text-red-400/5 group-hover:text-red-400/10 transition-colors" />
                <h4 className="font-black text-slate-500 uppercase text-xs tracking-widest mb-2">Replacement Cost</h4>
                <p className="text-4xl font-black text-white tracking-tighter mb-4">$450 – $1,200+</p>
                <p className="text-xs text-red-400 font-bold uppercase tracking-widest">Plus Labor & Installation</p>
              </div>
              <div className="bg-yellow-400/5 p-8 rounded-2xl border border-yellow-400/30 relative overflow-hidden group hover:border-yellow-400/60 transition-colors">
                <Sparkles className="absolute -right-4 -top-4 w-24 h-24 text-yellow-400/10 group-hover:text-yellow-400/20 transition-colors" />
                <h4 className="font-black text-yellow-400/50 uppercase text-xs tracking-widest mb-2">Dobson Restoration</h4>
                <p className="text-4xl font-black text-yellow-400 tracking-tighter mb-4">$99 – $169</p>
                <p className="text-xs text-yellow-400 font-bold uppercase tracking-widest">Heated Shop Service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add-ons strip */}
        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 grid md:grid-cols-3 gap-6">
          {[
            { Icon: Sparkles, title: 'Fog Lights', sub: 'Add to any package.' },
            { Icon: Zap, title: 'LED Upgrades', sub: 'Inquire for pricing.' },
            { Icon: ShieldCheck, title: 'Partner Shops', sub: 'Drop-off available.' },
          ].map(({ Icon, title, sub }) => (
            <div key={title} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-yellow-400/10 rounded-xl flex items-center justify-center text-yellow-400 shrink-0">
                <Icon size={20} />
              </div>
              <div>
                <h4 className="font-black text-white text-sm">{title}</h4>
                <p className="text-xs text-slate-500 font-bold">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
