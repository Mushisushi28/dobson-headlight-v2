import React from 'react';

const PromoBar: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 right-0 h-8 bg-yellow-400 z-[60] flex items-center justify-center px-4 shadow-sm">
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-900 text-center">
                PROMO: $20 OFF CERAMIC RESTORATIONS • 3 SLOTS LEFT
            </p>
        </div>
    );
};

export default PromoBar;
