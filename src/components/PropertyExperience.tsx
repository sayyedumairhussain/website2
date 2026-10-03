import React from 'react';
import experienceImg from '../assets/images/property_experience_facade_1791023185075.jpg';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface PropertyExperienceProps {
  onDiscussRequirement: () => void;
}

export const PropertyExperience: React.FC<PropertyExperienceProps> = ({ onDiscussRequirement }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#121316] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Property Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/3 sm:aspect-16/11 overflow-hidden rounded-sm border border-white/10 shadow-2xl">
              <img
                src={experienceImg}
                alt="Contemporary commercial building in Nehru Place, New Delhi"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Location Badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-white/90 font-medium">
                <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xs border border-white/15">
                  Nehru Place Commercial District
                </span>
                <span className="font-mono text-[11px] text-[#DFBA67]">
                  New Delhi 110019
                </span>
              </div>
            </div>

            {/* Subtle decorative bronze accent border */}
            <div className="absolute -bottom-3 -right-3 w-32 h-32 border-b-2 border-r-2 border-[#B8860B]/50 -z-10 hidden sm:block" />
          </div>

          {/* Right Column: Copy & CTA */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#DFBA67] uppercase mb-4">
              <span>Commercial Property Experience</span>
              <span className="text-white/30">•</span>
              <span>Delhi NCR</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.15] mb-6 text-balance">
              The Right Property Changes the Way You Do Business.
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-8 text-balance">
              From location and layout to accessibility and business requirements, choosing commercial property involves more than simply finding an available space.
            </p>

            <div className="space-y-4 mb-10 text-sm text-neutral-300">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#DFBA67] shrink-0 mt-0.5" />
                <span>
                  Carefully evaluated commercial environments designed to support client visits and staff productivity.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#DFBA67] shrink-0 mt-0.5" />
                <span>
                  Strategic proximity to major Delhi Metro stations (Violet Line & Magenta Line).
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#DFBA67] shrink-0 mt-0.5" />
                <span>
                  Transparent facilitation that respects your business timelines and operational constraints.
                </span>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={onDiscussRequirement}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#B8860B] hover:bg-[#996924] text-white font-medium text-sm rounded-sm transition-all duration-200 inline-flex items-center justify-center gap-2.5 cursor-pointer shadow-md"
              >
                <span>Discuss Your Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
