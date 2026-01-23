
import React, { useState } from 'react';
import { Send, MapPin, Camera, Sparkles, Eye, EyeOff, Droplets, MessageCircle, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { SERVICE_AREAS } from '../constants';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    city: '',
    condition: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Using the provided Formspree ID: mzdezloa
      const response = await fetch('https://formspree.io/f/mzdezloa', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Quote Request: ${formData.vehicle} from ${formData.name}`,
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Formspree Error:', data);
        throw new Error(data.errors?.[0]?.message || 'Failed to send. Please try WhatsApp!');
      }
    } catch (err: any) {
      console.error('Submission Error:', err);
      setError(err.message || 'Something went wrong. Please use the WhatsApp button below for a faster response!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const message = `Hi Isaac! I just requested a quote on your website. \n\nName: ${formData.name}\nVehicle: ${formData.vehicle}\nLocation: ${formData.city}\nCondition: ${formData.condition}`;
    const encodedMessage = encodeURIComponent(message);
    // WhatsApp number remains 14038920513 as per previous context
    window.open(`https://wa.me/14038920513?text=${encodedMessage}`, '_blank');
  };

  const conditions = [
    { id: 'fully_faded', label: 'Fully Faded', icon: EyeOff, desc: 'Opaque / Cloudy' },
    { id: 'partially_faded', label: 'Partially Faded', icon: Eye, desc: 'Blurry patches' },
    { id: 'yellow', label: 'Yellowed', icon: Sparkles, desc: 'Heavy oxidation' },
    { id: 'cracked', label: 'Cracked/Water', icon: Droplets, desc: 'Broken seal' }
  ];

  return (
    <section id="contact" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 rounded-[3.5rem] p-10 md:p-20 flex flex-col lg:flex-row gap-16 overflow-hidden relative shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] border border-white/5">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#facc1511_0%,transparent_50%)]"></div>
          
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 leading-tight uppercase tracking-tight">Get Your <br/><span className="text-yellow-400">Free Fast Quote</span></h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-md">
              Fill out the form below and we'll text you an exact quote within 15 minutes. No obligation, just honest local pricing.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: Camera, text: "Photos help us give exact quotes fast" },
                { icon: MapPin, text: "Mobile service within Southern Alberta" },
                { icon: CheckCircle2, text: "No results? You don't pay a cent." }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 text-slate-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative z-10">
            {submitted ? (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-12 text-center h-full flex flex-col justify-center items-center shadow-inner animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 rounded-full bg-yellow-400 text-black flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(250,204,21,0.4)]">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase">Request Sent!</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                  Thanks {formData.name.split(' ')[0]}! Check your phone—we'll text you your quote shortly.
                </p>
                
                <div className="w-full space-y-4">
                  <button 
                    onClick={handleWhatsAppRedirect}
                    className="w-full py-5 bg-emerald-500 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 uppercase tracking-tight"
                  >
                    <MessageCircle className="w-6 h-6" /> Instant WhatsApp Response
                  </button>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
                    Usually responds in under 5 minutes
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 sm:p-12 space-y-6 shadow-2xl">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/50 p-4 rounded-xl flex items-start gap-3 text-red-200 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p>{error}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input 
                    required 
                    type="text" 
                    name="name"
                    placeholder="Full Name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-500 focus:ring-2 focus:ring-yellow-400 outline-none transition-all font-medium"
                  />
                  <input 
                    required 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-500 focus:ring-2 focus:ring-yellow-400 outline-none transition-all font-medium"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                   <input 
                    required 
                    type="text" 
                    name="vehicle"
                    placeholder="Year, Make, Model" 
                    value={formData.vehicle}
                    onChange={(e) => setFormData({...formData, vehicle: e.target.value})}
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-500 focus:ring-2 focus:ring-yellow-400 outline-none transition-all font-medium"
                  />
                  <div className="relative">
                    <select 
                      required
                      name="city"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-yellow-400 outline-none transition-all appearance-none cursor-pointer font-medium pr-10"
                    >
                      <option className="bg-slate-900" value="">Select City</option>
                      {SERVICE_AREAS.map(area => (
                        <option key={area} className="bg-slate-900" value={area}>{area}</option>
                      ))}
                      <option className="bg-slate-900" value="Other">Other (Southern AB)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                      <MapPin size={18} />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Condition of Lights</label>
                  <div className="grid grid-cols-2 gap-3">
                    {conditions.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData({...formData, condition: item.label})}
                        className={`p-4 rounded-2xl border transition-all text-left flex flex-col gap-2 group ${
                          formData.condition === item.label 
                          ? 'bg-yellow-400 border-yellow-400 text-black shadow-lg shadow-yellow-400/20' 
                          : 'bg-white/5 border-white/10 text-white hover:border-white/30'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <item.icon className={`w-5 h-5 ${formData.condition === item.label ? 'text-black' : 'text-yellow-400'}`} />
                        </div>
                        <div>
                          <p className="font-black text-xs uppercase tracking-tight">{item.label}</p>
                          <p className={`text-[10px] font-bold ${formData.condition === item.label ? 'text-black/60' : 'text-slate-500'}`}>{item.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-yellow-400 text-black font-black text-xl rounded-2xl hover:bg-yellow-300 shadow-2xl shadow-yellow-400/20 transition-all active:scale-95 uppercase tracking-tight flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" /> Sending Quote...
                    </>
                  ) : (
                    <>
                      Send Quote Request <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all uppercase tracking-tight text-sm"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" /> Skip Email & Text Me Instead
                </button>

                <p className="text-center text-slate-500 text-[10px] font-black uppercase tracking-widest">
                  Quotes arrive via text or call (587-402-4794) within minutes.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
