import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertySearch } from './components/PropertySearch';
import { FeaturedProperties } from './components/FeaturedProperties';
import { WhyUs } from './components/WhyUs';
import { Services } from './components/Services';
import { PropertyExperience } from './components/PropertyExperience';
import { Testimonials } from './components/Testimonials';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Property } from './types';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [prefilledSubject, setPrefilledSubject] = useState<string>('');
  const [prefilledType, setPrefilledType] = useState<string>('Office Space');
  const [propertyFilter, setPropertyFilter] = useState<string>('all');

  const handleOpenEnquiry = (subject?: string, type?: string) => {
    setPrefilledSubject(subject || '');
    if (type) setPrefilledType(type);
    setIsEnquiryOpen(true);
  };

  const handleSearch = (type: string, location: string) => {
    // Scroll smoothly to properties and adapt filter if matched
    const targetElement = document.getElementById('properties');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (type.toLowerCase().includes('office')) {
      setPropertyFilter('office');
    } else if (type.toLowerCase().includes('rental')) {
      setPropertyFilter('rental');
    } else if (type.toLowerCase().includes('purchase')) {
      setPropertyFilter('purchase');
    } else if (type.toLowerCase().includes('commercial')) {
      setPropertyFilter('commercial');
    } else {
      setPropertyFilter('all');
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    handleOpenEnquiry(`Consultation for ${serviceTitle}`);
  };

  const handlePropertyEnquire = (property: Property) => {
    handleOpenEnquiry(`Enquiry for ${property.title} in ${property.location}`, property.categoryLabel);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-neutral-900 selection:bg-[#B8860B]/20 selection:text-neutral-900 flex flex-col">
      {/* Top Bar Navigation */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry('General Commercial Property Consultation')} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreClick={() => {
            const el = document.getElementById('properties');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onTalkClick={() => handleOpenEnquiry('Requirement Discussion with Girish Properties')}
        />

        {/* Property Search & Discovery */}
        <PropertySearch onSearch={handleSearch} />

        {/* Featured Property Section */}
        <FeaturedProperties
          filterCategory={propertyFilter}
          onViewDetails={(prop) => setSelectedProperty(prop)}
          onEnquire={handlePropertyEnquire}
        />

        {/* Why Girish Properties (4 Columns) */}
        <WhyUs />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Property Experience Split Section */}
        <PropertyExperience
          onDiscussRequirement={() =>
            handleOpenEnquiry('Requirement consultation from Property Experience section')
          }
        />

        {/* Testimonials & Verified Google Rating */}
        <Testimonials />

        {/* About Section */}
        <AboutSection
          onLearnMoreClick={() => {
            const el = document.getElementById('location');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Location & Map Section */}
        <LocationSection />

        {/* Final Dark Premium CTA */}
        <FinalCTA
          onStartSearch={() =>
            handleOpenEnquiry('Commercial Space Search Form - Girish Properties')
          }
        />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar />

      {/* Interactive Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        prefilledSubject={prefilledSubject}
        prefilledPropertyType={prefilledType}
      />

      {/* Property Details View Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onEnquire={handlePropertyEnquire}
      />
    </div>
  );
}
