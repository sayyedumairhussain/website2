import React from 'react';
import { X, MapPin, Building, Check, Phone, Send, ArrowRight } from 'lucide-react';
import { Property } from '../types';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onEnquire: (property: Property) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onEnquire
}) => {
  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-md max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-200 z-10 my-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-white p-1.5 rounded-full transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Property Image */}
        <div className="relative aspect-16/9 bg-neutral-900 overflow-hidden">
          <img
            src={property.image}
            alt={property.altText}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white text-xs">
            <span className="bg-black/70 backdrop-blur-xs px-3 py-1 rounded-xs border border-white/20">
              {property.categoryLabel}
            </span>
            <span className="font-mono text-[#DFBA67]">
              Nehru Place, New Delhi
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B8860B] mb-1">
            <Building className="w-3.5 h-3.5" />
            <span>Commercial Space Profile</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">
            {property.title}
          </h3>

          <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>{property.location}</span>
            <span>·</span>
            <span>Deepak Building Vicinity</span>
          </div>

          <p className="text-sm text-neutral-700 leading-relaxed mb-6">
            {property.shortDescription}
          </p>

          <div className="border-t border-neutral-100 pt-5 mb-8">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-800 mb-3">
              Space Characteristics & Location Merits
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-700">
              {property.highlights.map((hl, i) => (
                <li key={i} className="flex items-start gap-2 bg-[#FAF9F5] p-2.5 rounded-xs border border-neutral-200/60">
                  <Check className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                onEnquire(property);
              }}
              className="flex-1 py-3 px-5 bg-[#191919] hover:bg-[#B8860B] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <Send className="w-4 h-4 text-[#DFBA67]" />
              <span>Enquire For This Space</span>
            </button>

            <a
              href="tel:09899668475"
              className="py-3 px-5 border border-neutral-300 hover:bg-neutral-50 text-neutral-800 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#B8860B]" />
              <span>Call 098996 68475</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
