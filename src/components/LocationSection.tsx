import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Clock, Train, Building2, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const address = '65, Deepak Building 13, Nehru Place, New Delhi, Delhi 110019';
  const phone = '098996 68475';
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    '65, Deepak Building 13, Nehru Place, New Delhi, Delhi 110019'
  )}`;
  const whatsappUrl = `https://wa.me/919899668475?text=${encodeURIComponent(
    'Hello Girish Properties, I am interested in commercial property options in Nehru Place / Delhi.'
  )}`;

  return (
    <section id="location" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-3xl mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B8860B] uppercase mb-2">
          <span>Office Location & Coordinates</span>
          <span className="text-neutral-400">/</span>
          <span>South Delhi Hub</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight text-balance">
          Visit Girish Properties in Nehru Place
        </h2>
        <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
          Conveniently located within Deepak Building 13, at the heart of Delhi’s renowned commercial and IT district.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Card: Office Coordinates & Actions */}
        <div className="lg:col-span-5 bg-white rounded-md border border-neutral-200/90 p-8 shadow-xs flex flex-col justify-between">
          <div>
            <div className="border-b border-neutral-100 pb-6 mb-6">
              <span className="text-xs font-semibold tracking-wider text-[#B8860B] uppercase">
                Agency Office
              </span>
              <h3 className="font-serif text-3xl font-semibold text-neutral-900 mt-1">
                Girish Properties
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Commercial Real Estate Consultancy
              </p>
            </div>

            {/* Address */}
            <div className="space-y-5 text-sm text-neutral-700">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-sm bg-[#FAF8F2] border border-[#B8860B]/20 flex items-center justify-center shrink-0 text-[#B8860B]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-medium text-neutral-900">Registered Office</span>
                  <p className="text-neutral-600 mt-0.5 leading-relaxed">
                    65, Deepak Building 13,<br />
                    Nehru Place,<br />
                    New Delhi, Delhi 110019
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-sm bg-[#FAF8F2] border border-[#B8860B]/20 flex items-center justify-center shrink-0 text-[#B8860B]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-medium text-neutral-900">Direct Contact</span>
                  <a
                    href="tel:09899668475"
                    className="text-neutral-900 font-semibold text-base hover:text-[#B8860B] transition-colors"
                  >
                    098996 68475
                  </a>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Available for property consultations & visits
                  </p>
                </div>
              </div>

              {/* Transit & Landmarks */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-sm bg-[#FAF8F2] border border-[#B8860B]/20 flex items-center justify-center shrink-0 text-[#B8860B]">
                  <Train className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-medium text-neutral-900">Metro Connectivity</span>
                  <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                    Nehru Place Metro (Violet Line) & Kalkaji Mandir Metro (Violet & Magenta Interchange) within 5 minutes walking distance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-8 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:09899668475"
              className="flex-1 py-3 px-4 bg-[#191919] hover:bg-[#B8860B] text-white text-xs font-semibold uppercase tracking-wider rounded-sm text-center transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#DFBA67]" />
              <span>Call Now</span>
            </a>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 text-xs font-semibold uppercase tracking-wider rounded-sm text-center transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Get Directions</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5B] text-white text-xs font-semibold uppercase tracking-wider rounded-sm text-center transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Right Card: Interactive Map View */}
        <div className="lg:col-span-7 bg-[#FAF9F5] rounded-md border border-neutral-200/90 overflow-hidden shadow-xs flex flex-col">
          {/* Map Top Bar */}
          <div className="bg-white px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
              <Building2 className="w-4 h-4 text-[#B8860B]" />
              <span>Nehru Place Commercial Map View</span>
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[#B8860B] hover:text-[#996924] inline-flex items-center gap-1"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Stylized Map View & Interactive Points */}
          <div className="relative flex-1 min-h-[380px] bg-[#EAE8E1] p-6 flex flex-col justify-between overflow-hidden">
            {/* Geometric Grid Street Overlay */}
            <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#191919_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Visual Schematic Card */}
            <div className="relative z-10 bg-white/95 backdrop-blur-xs p-5 rounded-sm border border-neutral-300/80 shadow-md max-w-sm">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#191919] text-[#DFBA67] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-neutral-900">
                    65, Deepak Building 13
                  </h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Nehru Place, New Delhi 110019
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[11px] text-neutral-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Office Open for Direct Appointments</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Landmarks schematic pills */}
            <div className="relative z-10 flex flex-wrap gap-2.5 mt-8">
              <div className="bg-white/90 backdrop-blur-xs border border-neutral-300 text-neutral-800 text-xs px-3 py-1.5 rounded-sm flex items-center gap-2 shadow-2xs">
                <Train className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>Nehru Place Metro (Violet Line) · 250m</span>
              </div>
              <div className="bg-white/90 backdrop-blur-xs border border-neutral-300 text-neutral-800 text-xs px-3 py-1.5 rounded-sm flex items-center gap-2 shadow-2xs">
                <Train className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>Kalkaji Mandir Metro (Magenta Line) · 600m</span>
              </div>
              <div className="bg-white/90 backdrop-blur-xs border border-neutral-300 text-neutral-800 text-xs px-3 py-1.5 rounded-sm flex items-center gap-2 shadow-2xs">
                <Navigation className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>Outer Ring Road Corridor Access</span>
              </div>
            </div>

            {/* Bottom Map Note */}
            <div className="relative z-10 pt-4 flex items-center justify-between text-xs text-neutral-600">
              <span>Deepak Building Commercial Block</span>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#B8860B]"
              >
                Navigate via GPS →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
