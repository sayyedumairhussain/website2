import React from 'react';
import { Compass, FileCheck2, MessageSquareText, Briefcase } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Local Market Understanding',
      desc: 'Focused on Nehru Place and Delhi commercial real estate, offering deep familiarity with building management, micro-locations, and commercial corridors.',
      icon: Compass
    },
    {
      num: '02',
      title: 'Requirement-Based Assistance',
      desc: "We understand the client's specific business requirements, operational workflow, and team preferences before suggesting appropriate spaces.",
      icon: Briefcase
    },
    {
      num: '03',
      title: 'Transparent Communication',
      desc: 'Clear communication throughout the property process, ensuring straightforward discussions regarding terms, paperwork, and property status.',
      icon: MessageSquareText
    },
    {
      num: '04',
      title: 'Professional Support',
      desc: 'Dedicated assistance from initial property identification and on-site visits through coordination, documentation, and handover finalization.',
      icon: FileCheck2
    }
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#F4F2EC]/70 border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B8860B] uppercase mb-2">
            <span>Our Approach</span>
            <span className="text-neutral-400">/</span>
            <span>Commercial Advisory</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight text-balance">
            Why Girish Properties
          </h2>
          <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
            Finding commercial real estate in South Delhi requires genuine local insight, clear expectations, and a grounded requirement-first perspective.
          </p>
        </div>

        {/* 4-Column Grid with Editorial Polish */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="bg-white p-7 rounded-sm border border-neutral-200/90 shadow-2xs hover:border-[#B8860B]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
                    <span className="font-serif text-2xl font-light text-[#B8860B]">
                      {pillar.num}
                    </span>
                    <Icon className="w-5 h-5 text-neutral-400" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-neutral-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100/60 flex items-center gap-2 text-xs font-medium text-neutral-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
                  <span>Nehru Place Advisory</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
