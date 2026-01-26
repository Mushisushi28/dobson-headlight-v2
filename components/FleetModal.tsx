import React, { useState } from 'react';
import { X, Send, Truck, Building2, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

interface FleetModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FleetModal: React.FC<FleetModalProps> = ({ isOpen, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        companyName: '',
        contactName: '',
        phone: '',
        fleetSize: '',
        email: ''
    });

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            // Using same Formspree ID as ContactForm for now: mzdezloa
            const response = await fetch('https://formspree.io/f/mzdezloa', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `FLEET INQUIRY: ${formData.companyName} (${formData.fleetSize} vehicles)`,
                })
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitted(true);
            } else {
                throw new Error(data.errors?.[0]?.message || 'Failed to send.');
            }
        } catch (err: any) {
            console.error('Submission Error:', err);
            setError('Something went wrong. Please try again or email us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm transition-all" onClick={onClose} />

            <div className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-8 md:p-12">
                    {!submitted ? (
                        <>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center text-black">
                                    <Truck size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-white uppercase tracking-tight">Fleet Partner Inquiry</h2>
                                    <p className="text-slate-400 text-sm font-bold">Priority service for 5+ vehicles</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {error && (
                                    <div className="bg-red-500/10 border border-red-500/50 p-4 rounded-xl flex items-start gap-3 text-red-200 text-sm">
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                        <p>{error}</p>
                                    </div>
                                )}

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-1">
                                        <label className="text-xs font-black uppercase text-slate-500 ml-1">Company Name</label>
                                        <div className="relative">
                                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                            <input
                                                required
                                                type="text"
                                                placeholder="Business Name"
                                                value={formData.companyName}
                                                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:ring-2 focus:ring-yellow-400 outline-none transition-all font-medium"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-black uppercase text-slate-500 ml-1">Approx Fleet Size</label>
                                        <div className="relative">
                                            <Truck className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                            <select
                                                required
                                                value={formData.fleetSize}
                                                onChange={(e) => setFormData({ ...formData, fleetSize: e.target.value })}
                                                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:ring-2 focus:ring-yellow-400 appearance-none font-medium cursor-pointer"
                                            >
                                                <option value="" className="bg-slate-900 text-slate-500">Select Size...</option>
                                                <option value="5-10" className="bg-slate-900">5-10 Vehicles</option>
                                                <option value="11-25" className="bg-slate-900">11-25 Vehicles</option>
                                                <option value="26-50" className="bg-slate-900">26-50 Vehicles</option>
                                                <option value="50+" className="bg-slate-900">50+ Vehicles</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-1">
                                        <label className="text-xs font-black uppercase text-slate-500 ml-1">Contact Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Your Name"
                                            value={formData.contactName}
                                            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                                            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:ring-2 focus:ring-yellow-400 outline-none transition-all font-medium"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-black uppercase text-slate-500 ml-1">Phone / Mobile</label>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="(555) 555-5555"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:ring-2 focus:ring-yellow-400 outline-none transition-all font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-black uppercase text-slate-500 ml-1">Email (for quote)</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="admin@company.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:ring-2 focus:ring-yellow-400 outline-none transition-all font-medium"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-5 bg-yellow-400 text-black font-black text-lg rounded-xl hover:bg-yellow-300 shadow-xl shadow-yellow-400/20 transition-all uppercase tracking-tight flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                                    {isSubmitting ? 'Sending Request...' : 'Request Fleet Pricing'}
                                </button>

                                <p className="text-center text-xs text-slate-500 font-medium">
                                    We typically respond with a formal estimate within 24 hours.
                                </p>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <div className="w-20 h-20 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-black text-white mb-4 uppercase">Received!</h3>
                            <p className="text-slate-400 mb-8 max-w-md mx-auto">
                                Thanks {formData.contactName}. We'll review your fleet requirements and send a custom proposal to {formData.email} shortly.
                            </p>
                            <button
                                onClick={onClose}
                                className="px-8 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
                            >
                                Close Window
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FleetModal;
