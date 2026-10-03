import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS, GOOGLE_RATING } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header with Google Rating Badge */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B8860B] uppercase mb-2">
            <span>Verified Client Feedback</span>
            <span className="text-neutral-400">/</span>
            <span>Google Reviews</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight text-balance">
            Trusted by Commercial Clients
          </h2>
        </div>

        {/* Real Google Rating Display */}
        <div className="bg-[#FAF9F5] border border-neutral-200/90 rounded-sm p-4 sm:px-6 sm:py-4 flex items-center gap-4 self-start md:self-auto shadow-2xs">
          <div className="flex flex-col items-center">
            <span className="font-serif text-3xl font-bold text-neutral-900 leading-none">
              {GOOGLE_RATING.score}
            </span>
            <div className="flex items-center text-amber-500 mt-1 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-current"
                />
              ))}
            </div>
          </div>
          <div className="h-10 w-px bg-neutral-200" />
          <div>
            <div className="text-xs font-semibold text-neutral-800">
              {GOOGLE_RATING.reviewCount} Reviews
            </div>
            <div className="text-[11px] text-neutral-500">
              Google Business Rating
            </div>
          </div>
        </div>
      </div>

      {/* 3 Real Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REVIEWS.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-md border border-neutral-200/90 p-8 flex flex-col justify-between shadow-2xs hover:border-[#B8860B]/40 hover:shadow-md transition-all duration-300 relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-8 h-8 text-[#B8860B]/30 group-hover:text-[#B8860B]/60 transition-colors" />
                <div className="flex items-center text-amber-500 gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal mb-8 italic">
                “{review.quote}”
              </blockquote>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <div>
                <p className="font-serif text-lg font-semibold text-neutral-900">
                  {review.author}
                </p>
                <p className="text-xs text-neutral-500 font-medium">
                  Commercial Property Client
                </p>
              </div>
              <span className="text-[11px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-xs border border-emerald-100">
                Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
