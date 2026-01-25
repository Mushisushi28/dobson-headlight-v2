import React from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-4xl h-[85vh] bg-white rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
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
