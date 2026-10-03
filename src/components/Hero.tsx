import React from 'react';
import heroImg from '../assets/images/hero_nehru_place_tower_1791023135008.jpg';
import { ArrowDown, PhoneCall, ShieldCheck, Compass, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onTalkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onTalkClick }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-neutral-950">
      {/* Full-width cinematic property image background with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Commercial corporate tower in Nehru Place business district, New Delhi"
          className="w-full h-full object-cover object-center scale-[1.02] transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured scrim according to frontend-design: 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/45" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-black/80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-12 mb-6">
        {/* Small label: unboxed text with subtle typographic separators */}
        <div className="inline-flex items-center gap-2 mb-6 text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#DFBA67] uppercase">
          <span>Commercial Real Estate</span>
          <span className="text-white/40">•</span>
          <span>Nehru Place, Delhi</span>
        </div>

        {/* Main headline: balanced text wrap, elegant serif */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl mx-auto text-balance">
          Find the Right Space for Your Business.
        </h1>

        {/* Supporting text: clean readable measure */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-neutral-200/90 font-light leading-relaxed mb-10 text-balance">
          Commercial property solutions in Nehru Place and Delhi, with a focus on understanding your requirements and helping you find the right space.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#B8860B] hover:bg-[#996924] text-white font-medium text-sm tracking-wide transition-all duration-200 rounded-sm shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Properties</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          <button
            type="button"
            onClick={onTalkClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-xs text-white border border-white/25 hover:border-white/50 font-medium text-sm tracking-wide transition-all duration-200 rounded-sm inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#DFBA67]" />
            <span>Talk to Girish Properties</span>
          </button>
        </div>

        {/* Small trust line: unboxed metadata */}
        <div className="pt-6 border-t border-white/15 max-w-xl mx-auto flex items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-neutral-300 font-medium tracking-wide">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#DFBA67]" />
            Professional
          </span>
          <span className="text-white/30">•</span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#DFBA67]" />
            Transparent
          </span>
          <span className="text-white/30">•</span>
          <span className="inline-flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-[#DFBA67]" />
            Requirement-Focused
          </span>
        </div>
      </div>
    </section>
  );
};
