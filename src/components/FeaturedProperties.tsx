import React, { useState } from 'react';
import { Property } from '../types';
import { PROPERTIES } from '../data/properties';
import { ArrowRight, Eye, Send, MapPin, Building } from 'lucide-react';

interface FeaturedPropertiesProps {
  onViewDetails: (property: Property) => void;
  onEnquire: (property: Property) => void;
  filterCategory?: string;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  onViewDetails,
  onEnquire,
  filterCategory
}) => {
  const [activeTab, setActiveTab] = useState<string>(filterCategory || 'all');

  const filteredProperties = PROPERTIES.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'office') return item.category === 'office';
    if (activeTab === 'commercial') return item.category === 'commercial';
    if (activeTab === 'rental') return item.category === 'rental';
    if (activeTab === 'purchase') return item.category === 'purchase';
    return true;
  });

  return (
    <section id="properties" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B8860B] uppercase mb-2">
            <span>Portfolio & Spaces</span>
            <span className="text-neutral-400">/</span>
            <span>Nehru Place & Delhi</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight text-balance">
            Spaces That Fit Your Business
          </h2>
          <p className="mt-3 text-neutral-600 max-w-2xl text-base leading-relaxed">
            Carefully curated commercial opportunities across Nehru Place business district, evaluated for corporate accessibility, business layout, and strategic presence.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-[#EFECE6] rounded-md overflow-x-auto self-start md:self-auto border border-neutral-300/60 max-w-full">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-all duration-150 whitespace-nowrap cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#191919] text-white shadow-xs'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            All Spaces
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('office')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-all duration-150 whitespace-nowrap cursor-pointer ${
              activeTab === 'office'
                ? 'bg-[#191919] text-white shadow-xs'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            Office Space
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('commercial')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-all duration-150 whitespace-nowrap cursor-pointer ${
              activeTab === 'commercial'
                ? 'bg-[#191919] text-white shadow-xs'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            Commercial Property
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('rental')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-all duration-150 whitespace-nowrap cursor-pointer ${
              activeTab === 'rental'
                ? 'bg-[#191919] text-white shadow-xs'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            Rental
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('purchase')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-all duration-150 whitespace-nowrap cursor-pointer ${
              activeTab === 'purchase'
                ? 'bg-[#191919] text-white shadow-xs'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            Purchase
          </button>
        </div>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredProperties.map((property) => (
          <article
            key={property.id}
            className="group bg-white rounded-md border border-neutral-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            {/* Large Image with refined hover zoom */}
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-100">
              <img
                src={property.image}
                alt={property.altText}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Unboxed contextual label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                <span className="flex items-center gap-1.5 drop-shadow-xs">
                  <Building className="w-3.5 h-3.5 text-[#DFBA67]" />
                  {property.categoryLabel}
                </span>
                <span className="flex items-center gap-1 drop-shadow-xs text-neutral-200">
                  <MapPin className="w-3.5 h-3.5 text-[#DFBA67]" />
                  {property.location}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-neutral-900 mb-2 group-hover:text-[#B8860B] transition-colors">
                  {property.title}
                </h3>
                
                {/* Location text with typographic separator */}
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-4">
                  <span>Nehru Place</span>
                  <span aria-hidden="true">·</span>
                  <span>New Delhi 110019</span>
                  <span aria-hidden="true">·</span>
                  <span>Deepak Building Vicinity</span>
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {property.shortDescription}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-6 text-xs text-neutral-700">
                  {property.highlights.slice(0, 2).map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#B8860B] font-bold">›</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-neutral-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onViewDetails(property)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-800 hover:text-[#B8860B] py-2 px-3 rounded-sm transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-neutral-500" />
                  <span>View Details</span>
                </button>

                <button
                  type="button"
                  onClick={() => onEnquire(property)}
                  className="inline-flex items-center gap-2 py-2 px-4 bg-[#191919] hover:bg-[#B8860B] text-white text-xs font-semibold rounded-sm transition-all duration-200 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5 text-[#DFBA67]" />
                  <span>Enquire Now</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
