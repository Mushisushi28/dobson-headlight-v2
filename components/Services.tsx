
import React from 'react';
import { Check, Sparkles, ShieldCheck, Zap, AlertTriangle, TrendingDown } from 'lucide-react';
import { PACKAGES, FLEET_PACKAGES } from '../constants';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'residential' | 'commercial'>('residential');

  const displayedPackages = activeTab === 'residential' ? PACKAGES : FLEET_PACKAGES;

  return (
    <section id="services" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-slate-900 mb-4 leading-tight uppercase tracking-tight">Professional Packages <br /><span className="text-yellow-500">Built to Last.</span></h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">We don't do wipe-on fixes. Every restoration includes multi-step leveling and professional UV protection.</p>
          </div>
          <div className="hidden lg:flex gap-4 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              onClick={() => setActiveTab('residential')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'residential'
                ? 'bg-slate-950 text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
                }`}
            >
              Residential
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'commercial'
                ? 'bg-slate-950 text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
                }`}
            >
              Commercial/Fleet
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {displayedPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 border-2 ${pkg.popular
                ? 'bg-slate-950 text-white border-yellow-400 shadow-2xl scale-105 z-10'
                : 'bg-white text-slate-900 border-slate-100 shadow-sm hover:shadow-xl hover:border-yellow-200'
                }`}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-2 bg-yellow-400 text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-yellow-400/20">
                  Best Value
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{pkg.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-yellow-400">{pkg.priceRange}</span>
                  <span className={`${pkg.popular ? 'text-slate-500' : 'text-slate-400'} text-xs font-bold uppercase tracking-wider ml-1`}>/per set</span>
                </div>
                <p className={`mt-6 text-sm leading-relaxed font-medium ${pkg.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                  {pkg.description}
                </p>
              </div>

              <div className="space-y-5 mb-12 flex-grow">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 text-sm font-medium">
                    <div className={`mt-0.5 p-1 rounded-md ${pkg.popular ? 'bg-yellow-400/10 text-yellow-400' : 'bg-yellow-50 text-yellow-600'}`}>
                      <Check size={14} />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={pkg.ctaUrl || "https://koalendar.com/e/meet-with-isaac-dobson"}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-5 rounded-2xl font-black text-center transition-all ${pkg.popular
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-xl shadow-yellow-400/20'
                  : 'bg-slate-950 text-white hover:bg-slate-800 shadow-lg'
                  }`}
              >
                {pkg.ctaText || "Choose Package"}
              </a>
            </div>
          ))}
        </div>

        {/* Economic Logic Bar */}
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-yellow-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">
                <TrendingDown size={14} /> Smart Investment
              </div>
              <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Why Restore?</h3>
              <p className="text-slate-500 font-bold">New headlights are expensive. Restoration saves you over 80% of the cost while providing factory clarity.</p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden group hover:border-red-200 transition-colors">
                <AlertTriangle className="absolute -right-4 -top-4 w-24 h-24 text-red-50 opacity-50 group-hover:text-red-100" />
                <h4 className="font-black text-slate-400 uppercase text-xs tracking-widest mb-2">Replacement Cost</h4>
                <p className="text-4xl font-black text-slate-900 tracking-tighter mb-4">$450 – $1,200+</p>
                <p className="text-xs text-red-500 font-bold uppercase tracking-widest">Plus Labor & Installation</p>
              </div>
              <div className="bg-slate-950 p-8 rounded-[2rem] border border-yellow-400/30 shadow-2xl relative overflow-hidden group hover:border-yellow-400 transition-colors">
                <Sparkles className="absolute -right-4 -top-4 w-24 h-24 text-yellow-400 opacity-10 group-hover:opacity-20" />
                <h4 className="font-black text-yellow-500/50 uppercase text-xs tracking-widest mb-2">Dobson Restoration</h4>
                <p className="text-4xl font-black text-white tracking-tighter mb-4">$99 – $169</p>
                <p className="text-xs text-yellow-400 font-bold uppercase tracking-widest">Heated Shop Service</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 grid md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-yellow-500 shadow-sm border border-slate-100">
              <Sparkles size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Fog Lights</h4>
              <p className="text-xs text-slate-500 font-bold">Add to any package.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-yellow-500 shadow-sm border border-slate-100">
              <Zap size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">LED Upgrades</h4>
              <p className="text-xs text-slate-500 font-bold">Inquire for pricing.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-yellow-500 shadow-sm border border-slate-100">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Partner Shops</h4>
              <p className="text-xs text-slate-500 font-bold">Drop-off available.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
