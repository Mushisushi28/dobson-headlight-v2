import React from 'react';
import { CheckCircle, Zap, Star, Shield, MapPin, Tag } from 'lucide-react';

const ITEMS = [
  { icon: CheckCircle, text: 'No Results = No Charge' },
  { icon: Zap, text: 'Same-Day Service' },
  { icon: Star, text: '47 Five-Star Reviews' },
  { icon: Shield, text: 'Ceramic Pro Certified' },
  { icon: MapPin, text: 'Mobile Across Southern Alberta' },
  { icon: Tag, text: '$99 Starting Price' },
  { icon: CheckCircle, text: 'No Results = No Charge' },
  { icon: Zap, text: 'Same-Day Service' },
  { icon: Star, text: '47 Five-Star Reviews' },
  { icon: Shield, text: 'Ceramic Pro Certified' },
  { icon: MapPin, text: 'Mobile Across Southern Alberta' },
  { icon: Tag, text: '$99 Starting Price' },
];

const PromoBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-8 bg-yellow-400/5 border-b border-yellow-400/20 overflow-hidden flex items-center">
      <div className="flex items-center animate-scroll-x whitespace-nowrap" style={{ willChange: 'transform' }}>
        {ITEMS.map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-8 text-[10px] font-black uppercase tracking-widest text-yellow-400">
            <item.icon className="w-3 h-3 shrink-0" />
            <span>{item.text}</span>
            <span className="text-yellow-400/30 ml-4">|</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoBar;
