import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: (prefilledSubject?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-neutral-200/80 py-3.5'
          : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className={`font-serif text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
              scrolled ? 'text-neutral-900' : 'text-white'
            }`}
          >
            Girish Properties
          </a>

          {/* Zone 2: 4-6 text navigation links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            <a
              href="#properties"
              className={`text-sm font-medium transition-colors hover:text-[#B8860B] ${
                scrolled ? 'text-neutral-700' : 'text-neutral-200'
              }`}
            >
              Properties
            </a>
            <a
              href="#services"
              className={`text-sm font-medium transition-colors hover:text-[#B8860B] ${
                scrolled ? 'text-neutral-700' : 'text-neutral-200'
              }`}
            >
              Services
            </a>
            <a
              href="#why-us"
              className={`text-sm font-medium transition-colors hover:text-[#B8860B] ${
                scrolled ? 'text-neutral-700' : 'text-neutral-200'
              }`}
            >
              Why Us
            </a>
            <a
              href="#about"
              className={`text-sm font-medium transition-colors hover:text-[#B8860B] ${
                scrolled ? 'text-neutral-700' : 'text-neutral-200'
              }`}
            >
              About
            </a>
            <a
              href="#testimonials"
              className={`text-sm font-medium transition-colors hover:text-[#B8860B] ${
                scrolled ? 'text-neutral-700' : 'text-neutral-200'
              }`}
            >
              Testimonials
            </a>
            <a
              href="#location"
              className={`text-sm font-medium transition-colors hover:text-[#B8860B] ${
                scrolled ? 'text-neutral-700' : 'text-neutral-200'
              }`}
            >
              Location
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:09899668475"
              className={`flex items-center gap-2 text-xs font-semibold tracking-wide uppercase px-3 py-2 rounded-sm transition-colors ${
                scrolled
                  ? 'text-neutral-800 hover:text-[#B8860B]'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
              <span className="whitespace-nowrap">098996 68475</span>
            </a>
            <button
              type="button"
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#191919] text-white hover:bg-[#B8860B] transition-colors rounded-sm shadow-xs whitespace-nowrap cursor-pointer"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:09899668475"
              className={`p-2 rounded-sm transition-colors ${
                scrolled ? 'text-neutral-900' : 'text-white'
              }`}
              aria-label="Call Girish Properties"
            >
              <Phone className="w-5 h-5 text-[#B8860B]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-sm transition-colors focus:outline-none ${
                scrolled ? 'text-neutral-900' : 'text-white'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-neutral-900 border-b border-neutral-200 px-6 py-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-4 text-base font-medium">
            <a
              href="#properties"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-800 hover:text-[#B8860B] py-1 border-b border-neutral-100"
            >
              Properties
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-800 hover:text-[#B8860B] py-1 border-b border-neutral-100"
            >
              Services
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-800 hover:text-[#B8860B] py-1 border-b border-neutral-100"
            >
              Why Girish Properties
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-800 hover:text-[#B8860B] py-1 border-b border-neutral-100"
            >
              About
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-800 hover:text-[#B8860B] py-1 border-b border-neutral-100"
            >
              Testimonials
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-800 hover:text-[#B8860B] py-1 border-b border-neutral-100"
            >
              Location & Contact
            </a>

            <div className="pt-3 flex flex-col gap-3">
              <a
                href="tel:09899668475"
                className="flex items-center justify-center gap-2 py-2.5 px-4 border border-neutral-300 rounded-sm font-semibold text-sm text-neutral-900"
              >
                <Phone className="w-4 h-4 text-[#B8860B]" />
                <span>Call 098996 68475</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-2.5 px-4 bg-[#191919] text-white rounded-sm font-semibold text-sm text-center uppercase tracking-wider"
              >
                Enquire Now
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
