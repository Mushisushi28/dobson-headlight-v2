import React from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    source?: 'global' | 'chat';
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, source = 'global' }) => {
    if (!isOpen) return null;

    // Chat-specific side positioning style (Desktop only)
    const isChatSideMode = source === 'chat';

    return (
        <div className={`fixed inset-0 z-[60] flex items-center justify-center p-4 ${isChatSideMode ? 'md:bg-transparent md:pointer-events-none' : ''}`}>
            {/* Backdrop - full screen for global, but transparent/clickable for specific areas in chat mode if needed (or just lighter) */}
            {/* Actually, user wants "seamless". If side-by-side, maybe no dark backdrop on desktop? Or just a subtle one? 
                Let's keep the backdrop but maybe confine it or make it transparent for chat mode on desktop so you can still see site?
                User said "open ... to the left of itself". 
                Let's behave like a popover on desktop if chat-sourced.
            */}
            <div
                className={`absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-all duration-300 ${isChatSideMode ? 'md:bg-transparent md:backdrop-blur-none md:pointer-events-none' : ''}`}
                onClick={!isChatSideMode ? onClose : undefined}
            />

            {/* Modal Container */}
            <div
                className={`relative w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 pointer-events-auto
                ${isChatSideMode
                        ? 'md:fixed md:bottom-8 md:right-[460px] md:w-[700px] md:h-[800px] md:max-h-[90vh] md:origin-bottom-right'
                        : 'max-w-4xl h-[85vh]'}
                `}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                >
                    <X className="w-5 h-5 text-slate-900" />
                </button>

                {/* Iframe */}
                <iframe
                    src="https://koalendar.com/e/meet-with-isaac-dobson?embed=true"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Book Appointment"
                    className="w-full h-full"
                />
            </div>
        </div>
    );
};

export default BookingModal;
