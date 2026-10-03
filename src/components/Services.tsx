import React from 'react';
import { Building2, Briefcase, KeyRound, Landmark, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'commercial-property',
      title: 'Commercial Property',
      tagline: 'Strategic Business Locales',
      desc: 'Find suitable commercial spaces for different business requirements across the premier trade district of Nehru Place and surrounding South Delhi areas.',
      icon: Building2,
      features: ['Retail & Commercial Units', 'High-Footfall Enclaves', 'Corporate Hub Proximity']
    },
    {
      id: 'office-spaces',
      title: 'Office Spaces',
      tagline: 'Professional Working Setups',
      desc: 'Explore office spaces suitable for businesses and professional setups, equipped with dependable infrastructure, client reception potential, and modern facilities.',
      icon: Briefcase,
      features: ['Corporate Workstations', 'Executive Cabins & Conference Setups', 'Managed & Independent Floors']
    },
    {
      id: 'property-rental',
      title: 'Property Rental',
      tagline: 'Commercial Lease Advisory',
      desc: 'Comprehensive assistance with commercial rental requirements, including lease agreement navigation, tenant-landlord coordination, and move-in facilitation.',
      icon: KeyRound,
      features: ['Structured Lease Terms', 'Commercial Tenancy Support', 'On-Site Property Inspection']
    },
    {
      id: 'property-purchase',
      title: 'Property Purchase',
      tagline: 'Acquisition & Investment Support',
      desc: 'Support for clients looking to purchase commercial property in Nehru Place, ensuring clean documentation verification, title diligence, and transaction advisory.',
      icon: Landmark,
      features: ['Commercial Assets Evaluation', 'Documentation Assistance', 'Ownership Transition Coordination']
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B8860B] uppercase mb-2">
          <span>Expertise & Services</span>
          <span className="text-neutral-400">/</span>
          <span>Commercial Solutions</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight text-balance">
          Tailored Commercial Real Estate Services
        </h2>
        <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
          From finding flexible office floors to acquiring permanent commercial assets in Delhi, Girish Properties provides structured guidance at every stage.
        </p>
      </div>

      {/* 4 Visually Strong Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((srv) => {
          const Icon = srv.icon;
          return (
            <div
              key={srv.id}
              className="bg-white rounded-md border border-neutral-200/90 p-7 flex flex-col justify-between hover:border-[#B8860B] hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 rounded-sm bg-[#FAF8F2] border border-[#B8860B]/20 flex items-center justify-center mb-6 group-hover:bg-[#191919] group-hover:border-[#191919] transition-colors">
                  <Icon className="w-6 h-6 text-[#B8860B] group-hover:text-[#DFBA67] transition-colors" />
                </div>

                <div className="text-xs font-semibold text-[#B8860B] tracking-wider uppercase mb-1">
                  {srv.tagline}
                </div>

                <h3 className="font-serif text-2xl font-semibold text-neutral-900 mb-3 group-hover:text-[#B8860B] transition-colors">
                  {srv.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {srv.desc}
                </p>

                <ul className="space-y-2 border-t border-neutral-100 pt-4 mb-6">
                  {srv.features.map((feat, i) => (
                    <li key={i} className="text-xs text-neutral-600 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#B8860B]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onSelectService(srv.title)}
                className="w-full py-2.5 px-3 bg-[#FAF9F5] hover:bg-[#191919] text-neutral-800 hover:text-white border border-neutral-300 hover:border-[#191919] text-xs font-semibold tracking-wide rounded-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Discuss Requirement</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
