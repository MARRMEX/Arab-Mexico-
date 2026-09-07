import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_PHONE_FORMATTED } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show quick greeting tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div
          id="floating-whatsapp-tooltip"
          className="relative bg-emerald-950 text-white px-4 py-3 rounded-2xl shadow-2xl border border-amber-400/40 text-xs sm:text-sm max-w-[240px] animate-fade-in flex items-start gap-2"
        >
          <div>
            <span className="font-bold text-amber-300 block text-xs">Need travel advice?</span>
            <span className="text-emerald-200 text-[11px] leading-tight block font-medium">
              Chat directly on WhatsApp in Arabic or English
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-stone-300 hover:text-white p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Chat with Arab Mexico Guide on WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white shadow-xl shadow-emerald-950/40 ring-2 ring-amber-400/60 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400"
      >
        {/* Subtle pulsing ping effect */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 group-hover:opacity-50 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 relative z-10" />

        {/* Online green indicator badge */}
        <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full z-10" />
      </a>
    </aside>
  );
};
