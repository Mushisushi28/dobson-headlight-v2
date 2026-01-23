import React from 'react';
import { TrendingUp, ShieldAlert, Sun, DollarSign } from 'lucide-react';

const Resources: React.FC = () => {
    return (
        <section id="resources" className="py-24 bg-slate-50 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-black text-yellow-600 uppercase tracking-[0.4em] mb-4">Education Center</h2>
                    <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-6">Why Restore <span className="text-slate-400">vs</span> Replace?</h2>
                    <p className="text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                        Many vehicle owners don't realize that restoration isn't just cosmetic—it's a critical safety and financial decision. Here is the breakdown.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Comparison Card */}
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200">
                        <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                            <div className="p-3 bg-red-100 text-red-600 rounded-xl"><DollarSign size={24} /></div>
                            The Cost Reality
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="font-bold text-slate-700">OEM Replacement</h4>
                                    <span className="font-black text-red-500">$800 - $1,500+</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2">
                                    <div className="bg-red-500 h-2 rounded-full w-[90%]"></div>
                                </div>
                                <p className="text-xs text-slate-400 mt-2 font-medium">New assemblies from the dealer are incredibly expensive due to integrated electronics.</p>
                            </div>

                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="font-bold text-slate-700">Aftermarket Parts</h4>
                                    <span className="font-black text-orange-500">$200 - $400</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2">
                                    <div className="bg-orange-400 h-2 rounded-full w-[30%]"></div>
                                </div>
                                <p className="text-xs text-slate-400 mt-2 font-medium">Cheaper, but known for poor fitment, leaking seals, and inferior light projection.</p>
                            </div>

                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="font-bold text-slate-900">Dobson Restoration</h4>
                                    <span className="font-black text-green-500">$99 - $169</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full w-[15%]"></div>
                                </div>
                                <p className="text-xs text-slate-400 mt-2 font-medium">Keep your high-quality factory housings. Restore the lens for a fraction of the cost.</p>
                            </div>
                        </div>
                    </div>

                    {/* UV Science Card */}
                    <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl border border-slate-800 text-white">
                        <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                            <div className="p-3 bg-yellow-400 text-black rounded-xl"><Sun size={24} /></div>
                            The Science of Fading
                        </h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1"><ShieldAlert className="text-yellow-400 shrink-0" /></div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Factory Clear Coat Failure</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Car manufacturers apply a thin UV coating at the factory. In Southern Alberta's high-altitude sun, this coating fails after 3-5 years, exposing the polycarbonate plastic.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1"><TrendingUp className="text-yellow-400 shrink-0" /></div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Oxidation Acceleration</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Once the coating is gone, UV rays interact with oxygen to physically yellow and pit the plastic surface. This isn't dirt—it's chemical degradation.
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 mt-4">
                                <p className="text-sm font-bold text-yellow-400 mb-2">My Solution:</p>
                                <p className="text-slate-300 text-sm">
                                    We verify the failure depth, sand it away completely, and re-apply a heavy industrial UV coating that is thicker and harder than the factory original.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resources;
