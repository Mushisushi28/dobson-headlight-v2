
import React from 'react';
import { Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { SERVICE_AREAS } from '../constants';

const FooterLogo: React.FC = () => (
  <div className="flex items-center gap-4">
    <img 
      src="https://i.ibb.co/KxFsd4bP/colored-logo-1.png" 
      alt="Dobson Headlight Restoration Logo" 
      className="h-80 w-auto object-contain"
    />
  </div>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-yellow-400 shadow-[0_5px_15px_rgba(250,204,21,0.3)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <FooterLogo />
            </div>
            <p className="text-slate-400 max-w-sm mb-10 text-lg font-medium leading-relaxed">
              Southern Alberta's mobile specialist. We restore clarity, safety, and value to your vehicle starting at just $99.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/DobsonHeadlightRestoration" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-yellow-400 hover:text-black transition-all border border-white/10 shadow-lg"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://share.google/KYMPrdpx2hJIyl69o" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all border border-white/10 shadow-lg p-2.5"
              >
                <GoogleIcon />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-white text-xs uppercase tracking-[0.3em] mb-10 text-slate-500">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-slate-400 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-colors border border-white/10 shadow-sm">
                    <Phone size={20} />
                </div>
                <a href="tel:587-402-4794" className="font-black text-sm uppercase tracking-widest hover:text-yellow-400 transition-colors">587-402-4794</a>
              </li>
              <li className="flex items-center gap-4 text-slate-400 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-colors border border-white/10 shadow-sm">
                    <Mail size={20} />
                </div>
                <a href="mailto:dobsonheadlights@gmail.com" className="font-black text-xs uppercase tracking-widest hover:text-yellow-400 transition-colors">Email Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-white text-xs uppercase tracking-[0.3em] mb-10 text-slate-500">Service Area</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-slate-500 text-[10px] font-black uppercase tracking-[0.1em]">
              {SERVICE_AREAS.slice(0, 8).map(area => (
                <li key={area} className="hover:text-yellow-400 transition-colors cursor-default whitespace-nowrap">{area}, AB</li>
              ))}
              <li className="text-yellow-400">And More...</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
          <p>© 2026 DOBSON HEADLIGHT RESTORATION. SOUTHERN ALBERTA LOCAL.</p>
          <div className="flex gap-8">
            <a href="https://share.google/KYMPrdpx2hJIyl69o" target="_blank" className="hover:text-white transition-colors">GOOGLE REVIEWS</a>
            <a href="https://koalendar.com/e/meet-with-isaac-dobson" target="_blank" className="hover:text-white transition-colors">BOOK APPOINTMENT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
