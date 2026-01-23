
import React, { useRef, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GalleryItem from './GalleryItem';

const RAW_GALLERY_DATA = [
  { before: "https://i.ibb.co/gL1vw4gN/20251030-125306-2.jpg", after: "https://i.ibb.co/HLLwz8ty/20251030-141133-2.jpg" },
  { before: "https://i.ibb.co/QFwtrd09/20251101-125236.jpg", after: "https://i.ibb.co/qMyCw0ym/20251101-130304-2.jpg" },
  { before: "https://i.ibb.co/ymG2qWvk/20251101-162948-2.jpg", after: "https://i.ibb.co/9HbvyZYr/20251101-171144-2.jpg" },
  { before: "https://i.ibb.co/VYWzJRQr/20251104-134030-2.jpg", after: "https://i.ibb.co/ksf6Q3pK/20251104-140738-2.jpg" },
  { before: "https://i.ibb.co/HTc0Bsdj/20251121-161724.jpg", after: "https://i.ibb.co/zH44m1xY/20251121-171218.jpg" },
  { before: "https://i.ibb.co/d4F3NPxs/20251122-132041-2.jpg", after: "https://i.ibb.co/BSnjrwc/20251122-140157-3.jpg" },
  { before: "https://i.ibb.co/gZ031TW8/20251122-165908-2.jpg", after: "https://i.ibb.co/p62J1S50/20251122-172550-3.jpg" },
  { before: "https://i.ibb.co/CpYc19pT/20251229-151436.jpg", after: "https://i.ibb.co/0jVvnjmH/20251229-154236-2.jpg" },
  { before: "https://i.ibb.co/Gf7TQB5k/20260101-152827-2.jpg", after: "https://i.ibb.co/JRcV0jgh/20260101-160034-2.jpg" },
  { before: "https://i.ibb.co/5gR1frRF/20260107-133008-2.jpg", after: "https://i.ibb.co/S71TTV2s/20260107-135400-2.jpg" },
  { before: "https://i.ibb.co/HfRF3ftr/20260107-164149.jpg", after: "https://i.ibb.co/BHRxqB9G/20260107-181526.jpg" },
  { before: "https://i.ibb.co/wFWdjKpt/20260108-160447.jpg", after: "https://i.ibb.co/HLz2TtDL/20260108-162850.jpg" },
  { before: "https://i.ibb.co/wZhWb3NQ/20260114-130210-2.jpg", after: "https://i.ibb.co/nMwHPsWN/20260114-131548-2.jpg" },
  { before: "https://i.ibb.co/XfJW533S/20260114-154725-2.jpg", after: "https://i.ibb.co/mCK6kSH7/20260114-165015-2.jpg" },
];

const LABELS = [
  "Standard Restoration",
  "Premium Package",
  "Crystal Clear Finish",
  "UV Protection Applied",
  "Safety Restoration",
  "Extreme Oxidation Fix",
  "Factory Finish Results",
  "Mobile Service Result"
];

const DESCRIPTIONS = [
  "Restored to Factory Clarity",
  "Industrial UV Shield Applied",
  "Maximum Light Output",
  "Oxidation Removed Completely",
  "Southern Alberta Durability",
  "Long-Term Protection",
  "Improved Night Safety",
  "Mirror-Like Finish"
];

const GalleryCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Shuffle the gallery items and assign random generic labels every time the component mounts
  const shuffledGallery = useMemo(() => {
    return [...RAW_GALLERY_DATA]
      .sort(() => Math.random() - 0.5)
      .map(item => ({
        ...item,
        label: LABELS[Math.floor(Math.random() * LABELS.length)],
        description: DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)]
      }));
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;

      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group">
      {/* Navigation Arrows - Desktop */}
      <button
        onClick={() => scroll('left')}
        aria-label="Scroll gallery left"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => scroll('right')}
        aria-label="Scroll gallery right"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
      >
        <ChevronRight size={24} />
      </button>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-4 sm:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {shuffledGallery.map((item, i) => (
          <div key={i} className="min-w-full sm:min-w-[45%] lg:min-w-[23%] snap-start">
            <GalleryItem
              before={item.before}
              after={item.after}
              label={item.label}
              description={item.description}
            />
          </div>
        ))}
      </div>

      {/* Mobile Indicator Dots */}
      <div className="flex justify-center gap-1.5 mt-8 md:hidden">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCarousel;
