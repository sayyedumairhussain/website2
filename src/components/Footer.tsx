import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0C0E] text-neutral-300 pt-16 pb-24 md:pb-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-neutral-800/80">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <span className="font-serif text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Girish Properties
            </span>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#DFBA67]">
              Commercial Real Estate • Nehru Place • Delhi
            </p>
            <p className="mt-4 text-sm text-neutral-400 max-w-sm leading-relaxed">
              Professional commercial real estate consultancy providing requirement-based guidance for corporate offices, commercial setups, and investment opportunities in Nehru Place and Delhi.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-[#DFBA67] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#DFBA67] transition-colors">
                  Properties
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#DFBA67] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#DFBA67] transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#DFBA67] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#DFBA67] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#DFBA67] transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-200 mb-4">
              Contact & Address
            </h4>
            <div className="space-y-3.5 text-sm text-neutral-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#DFBA67] shrink-0 mt-1" />
                <span>
                  65, Deepak Building 13,<br />
                  Nehru Place, New Delhi, Delhi 110019
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#DFBA67] shrink-0" />
                <a
                  href="tel:09899668475"
                  className="text-white hover:text-[#DFBA67] font-medium transition-colors"
                >
                  098996 68475
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#DFBA67] shrink-0" />
                <span>info@girishproperties.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Girish Properties. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Nehru Place Commercial Consultancy</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
