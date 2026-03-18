
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const StarRow: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'}
      />
    ))}
  </div>
);

const SocialProof: React.FC = () => {
  const displayedReviews = REVIEWS.slice(0, 3);

  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-yellow-400/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 font-black text-xs uppercase tracking-[0.4em] mb-3">Social Proof</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Don't Take Our<br />
            <span className="text-yellow-400">Word For It</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-slate-400 font-black text-sm uppercase tracking-widest">47 verified reviews</span>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {displayedReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col gap-6 hover:border-yellow-400/30 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start">
                <StarRow rating={review.rating} />
                <Quote size={20} className="text-yellow-400/20 group-hover:text-yellow-400/40 transition-colors" />
              </div>
              <p className="text-slate-300 font-medium leading-relaxed flex-grow">
                &ldquo;{review.comment}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 font-black text-sm">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="font-black text-white text-sm">{review.author}</p>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Lethbridge, AB</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google */}
        <div className="text-center">
          <a
            href="https://share.google/KYMPrdpx2hJIyl69o"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl cursor-pointer"
          >
            View All 47 Google Reviews →
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
