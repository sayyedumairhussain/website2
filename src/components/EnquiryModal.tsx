import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Phone, MessageSquare, Building2, Send } from 'lucide-react';
import { RequirementFormData } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledSubject?: string;
  prefilledPropertyType?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  prefilledSubject,
  prefilledPropertyType
}) => {
  const [formData, setFormData] = useState<RequirementFormData>({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    propertyType: prefilledPropertyType || 'Office Space',
    locationPreference: 'Nehru Place, New Delhi',
    requirementDetails: prefilledSubject ? `Inquiring regarding: ${prefilledSubject}` : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (prefilledSubject) {
      setFormData((prev) => ({
        ...prev,
        requirementDetails: `Inquiring regarding: ${prefilledSubject}`
      }));
    }
    if (prefilledPropertyType) {
      setFormData((prev) => ({
        ...prev,
        propertyType: prefilledPropertyType
      }));
    }
  }, [prefilledSubject, prefilledPropertyType]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please provide a valid 10-digit mobile number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setErrors({});
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Girish Properties, I have a commercial requirement:\nName: ${formData.name}\nPhone: ${formData.phone}\nType: ${formData.propertyType}\nLocation: ${formData.locationPreference}\nDetails: ${formData.requirementDetails || 'Looking for available options'}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={resetAndClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-md max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 z-10 my-8">
        <button
          type="button"
          onClick={resetAndClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-900 transition-colors p-1"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4 border border-emerald-200">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-2">
              Requirement Received
            </h3>
            <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
              Thank you, <strong className="font-semibold text-neutral-900">{formData.name}</strong>. Our commercial team at Girish Properties (Nehru Place) will review your parameters and get in touch with you shortly.
            </p>

            <div className="bg-[#FAF9F5] border border-neutral-200 p-4 rounded-sm mb-6 text-left text-xs space-y-1.5 text-neutral-700">
              <p>
                <strong className="text-neutral-900">Type:</strong> {formData.propertyType}
              </p>
              <p>
                <strong className="text-neutral-900">Location:</strong> {formData.locationPreference}
              </p>
              <p>
                <strong className="text-neutral-900">Contact:</strong> {formData.phone}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/919899668475?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5B] text-white text-xs font-semibold uppercase tracking-wider rounded-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Instant WhatsApp</span>
              </a>
              <a
                href="tel:09899668475"
                className="flex-1 py-3 px-4 bg-[#191919] hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider rounded-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#DFBA67]" />
                <span>Call Directly</span>
              </a>
            </div>

            <button
              type="button"
              onClick={resetAndClose}
              className="mt-4 text-xs text-neutral-500 hover:text-neutral-900 underline"
            >
              Close this window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#B8860B] mb-1">
                Girish Properties • Nehru Place
              </div>
              <h3 className="font-serif text-2xl font-bold text-neutral-900">
                Discuss Your Requirement
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Tell us what kind of commercial space your business needs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Full Name / Contact Person *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-neutral-300 rounded-sm text-sm text-neutral-900 focus:ring-1 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none"
                />
                {errors.name && (
                  <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="098996 68475"
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-neutral-300 rounded-sm text-sm text-neutral-900 focus:ring-1 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Apex Tech Ltd."
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-neutral-300 rounded-sm text-sm text-neutral-900 focus:ring-1 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none"
                  />
                </div>
              </div>

              {/* Category & Location Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Requirement Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-neutral-300 rounded-sm text-sm text-neutral-900 focus:ring-1 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none"
                  >
                    <option value="Office Space">Office Space</option>
                    <option value="Commercial Property">Commercial Property</option>
                    <option value="Rental Property">Rental Property</option>
                    <option value="Purchase">Purchase</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Preferred Location
                  </label>
                  <input
                    type="text"
                    value={formData.locationPreference}
                    onChange={(e) => setFormData({ ...formData, locationPreference: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-neutral-300 rounded-sm text-sm text-neutral-900 focus:ring-1 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none"
                  />
                </div>
              </div>

              {/* Notes / Details */}
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Specific Requirements or Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.requirementDetails}
                  onChange={(e) => setFormData({ ...formData, requirementDetails: e.target.value })}
                  placeholder="Mention preferred layout, team size, timeline or questions..."
                  className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-neutral-300 rounded-sm text-sm text-neutral-900 focus:ring-1 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-[#191919] hover:bg-[#B8860B] text-white font-medium text-sm rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs mt-2"
              >
                <Send className="w-4 h-4 text-[#DFBA67]" />
                <span>Submit Requirement to Girish Properties</span>
              </button>

              <p className="text-[11px] text-neutral-500 text-center pt-2">
                Office: 65, Deepak Building 13, Nehru Place • Phone: 098996 68475
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
