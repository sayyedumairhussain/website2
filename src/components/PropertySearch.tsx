import React, { useState } from 'react';
import { Search, MapPin, Building2, ChevronDown, Check } from 'lucide-react';

interface PropertySearchProps {
  onSearch: (selectedType: string, selectedLocation: string) => void;
}

export const PropertySearch: React.FC<PropertySearchProps> = ({ onSearch }) => {
  const [propertyType, setPropertyType] = useState('Office Space');
  const [location, setLocation] = useState('Nehru Place / Delhi');
  const [hasSearched, setHasSearched] = useState(false);

  const propertyOptions = [
    'Office Space',
    'Commercial Property',
    'Rental Property',
    'Purchase',
    'Other'
  ];

  const locationOptions = [
    'Nehru Place / Delhi',
    'Nehru Place (Core IT & Financial Hub)',
    'South Delhi Commercial Corridors'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    onSearch(propertyType, location);
    setTimeout(() => setHasSearched(false), 2000);
  };

  return (
    <section className="relative -mt-10 sm:-mt-14 z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-md shadow-xl border border-neutral-200/90 p-5 sm:p-7 backdrop-blur-sm">
        <div className="mb-4">
          <h2 className="text-xs font-semibold tracking-wider text-[#B8860B] uppercase">
            Property Search & Advisory
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-neutral-900 font-semibold mt-0.5">
            What are you looking for?
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          {/* Dropdown 1: Property Type */}
          <div className="md:col-span-5">
            <label htmlFor="property-type" className="block text-xs font-medium text-neutral-600 mb-1.5">
              Property Category
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                <Building2 className="w-4 h-4" />
              </div>
              <select
                id="property-type"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full pl-10 pr-9 py-3 bg-[#FAF9F5] border border-neutral-300 rounded-sm text-sm text-neutral-900 font-medium focus:ring-1 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none appearance-none transition-colors cursor-pointer"
              >
                {propertyOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-neutral-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Dropdown 2: Location */}
          <div className="md:col-span-4">
            <label htmlFor="location-select" className="block text-xs font-medium text-neutral-600 mb-1.5">
              Target Location
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                <MapPin className="w-4 h-4" />
              </div>
              <select
                id="location-select"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-9 py-3 bg-[#FAF9F5] border border-neutral-300 rounded-sm text-sm text-neutral-900 font-medium focus:ring-1 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none appearance-none transition-colors cursor-pointer"
              >
                {locationOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-neutral-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* CTA: Find My Space */}
          <div className="md:col-span-3">
            <button
              type="submit"
              className="w-full py-3 px-5 bg-[#191919] hover:bg-[#B8860B] text-white font-medium text-sm rounded-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer group"
            >
              {hasSearched ? (
                <>
                  <Check className="w-4 h-4 text-[#DFBA67]" />
                  <span>Matching Spaces...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 text-[#DFBA67] group-hover:text-white transition-colors" />
                  <span>Find My Space</span>
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-3.5 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
          <p>
            Consultancy with verified on-ground guidance in Deepak Building 13 & Nehru Place commercial zone.
          </p>
          <span className="hidden sm:inline-block font-mono text-[11px] text-neutral-400">
            Delhi NCR • Commercial Focus
          </span>
        </div>
      </div>
    </section>
  );
};
