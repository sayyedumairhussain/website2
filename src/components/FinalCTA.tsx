import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onStartSearch: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartSearch }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#121316] text-white border-t border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Unboxed category label */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#DFBA67] uppercase mb-4">
          <span>Commercial Property Advisory</span>
          <span className="text-white/30">•</span>
          <span>Nehru Place, New Delhi</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6 text-balance">
          Looking for the Right Commercial Space?
        </h2>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-10 text-balance">
          Tell us what your business needs. We'll help you explore suitable property options.
        </p>

        {/* Primary Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onStartSearch}
            className="w-full sm:w-auto px-9 py-4 bg-[#B8860B] hover:bg-[#996924] text-white font-medium text-sm rounded-sm transition-all duration-200 inline-flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <span>Start Your Property Search</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="tel:09899668475"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-neutral-200 hover:text-white border border-white/20 rounded-sm text-sm font-medium transition-colors inline-flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-[#DFBA67]" />
            <span>Call 098996 68475</span>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#DFBA67]" />
            On-Site Nehru Place Verification
          </span>
          <span className="text-white/20">•</span>
          <span>Direct Advisory from 65, Deepak Building 13</span>
          <span className="text-white/20">•</span>
          <span>Zero Obligation Requirement Consultation</span>
        </div>
      </div>
    </section>
  );
};
