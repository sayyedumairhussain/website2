import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  const whatsappUrl = `https://wa.me/919899668475?text=${encodeURIComponent(
    'Hello Girish Properties, I am interested in commercial properties in Nehru Place / Delhi.'
  )}`;

  return (
    <aside
      aria-label="Quick contact"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200/90 py-2 px-3 shadow-lg flex items-center gap-2 max-h-[60px]"
    >
      <a
        href="tel:09899668475"
        className="flex-1 min-h-[44px] py-2 px-3 bg-[#191919] active:bg-[#B8860B] text-white text-xs font-semibold uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors"
      >
        <Phone className="w-4 h-4 text-[#DFBA67]" />
        <span>Call Now</span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 min-h-[44px] py-2 px-3 bg-[#25D366] active:bg-[#1EBE5B] text-white text-xs font-semibold uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors shadow-2xs"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
};
