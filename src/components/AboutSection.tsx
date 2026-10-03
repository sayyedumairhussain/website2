import React from 'react';
import { Building, Target, CheckCircle2, Shield } from 'lucide-react';

interface AboutSectionProps {
  onLearnMoreClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMoreClick }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F4F2EC]/60 border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline and Overview */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B8860B] uppercase mb-3">
              <span>About Girish Properties</span>
              <span className="text-neutral-400">/</span>
              <span>Nehru Place, New Delhi</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.15] mb-6 text-balance">
              A Better Way to Find Commercial Property in Delhi
            </h2>

            <div className="space-y-4 text-neutral-700 text-base leading-relaxed font-light">
              <p>
                Girish Properties is a specialized commercial real-estate agency operating directly out of Nehru Place, New Delhi. We assist corporate entities, expanding enterprises, and professional firms in identifying and securing suitable office and commercial premises across Delhi NCR.
              </p>
              <p>
                Commercial leasing and acquisitions require more than browsing listings—they demand genuine on-ground market clarity, building operational assessments, and clear communication between landlords and tenants. Our work is grounded in understanding your operational needs first, ensuring smooth coordination from discovery to occupancy.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200/80 flex flex-wrap gap-6 items-center">
              <div>
                <span className="block font-serif text-2xl font-bold text-neutral-900">
                  Nehru Place
                </span>
                <span className="text-xs text-neutral-500">
                  Headquartered in Deepak Building 13
                </span>
              </div>
              <div className="h-8 w-px bg-neutral-300 hidden sm:block" />
              <div>
                <span className="block font-serif text-2xl font-bold text-neutral-900">
                  Delhi NCR
                </span>
                <span className="text-xs text-neutral-500">
                  Commercial & Corporate Scope
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Core Practice */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white p-6 rounded-md border border-neutral-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-sm bg-[#FAF8F2] flex items-center justify-center text-[#B8860B] mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-neutral-900 mb-2">
                Requirement-First
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Prioritizing exact corporate specifications, seating capacities, and transit accessibility before organizing visits.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md border border-neutral-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-sm bg-[#FAF8F2] flex items-center justify-center text-[#B8860B] mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-neutral-900 mb-2">
                Transparent Dealing
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Clear discussions on paperwork, lock-in periods, maintenance charges, and lease formalities with zero ambiguity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md border border-neutral-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-sm bg-[#FAF8F2] flex items-center justify-center text-[#B8860B] mb-4">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-neutral-900 mb-2">
                Nehru Place Native
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Located on-site in Deepak Building, providing direct daily access to commercial inventory and building administrators.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md border border-neutral-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-sm bg-[#FAF8F2] flex items-center justify-center text-[#B8860B] mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-neutral-900 mb-2">
                End-to-End Support
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Hands-on coordination from initial requirement briefing to site walk-throughs and deal closure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
