import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  User,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import {
  getWhatsAppUrl,
  WHATSAPP_PHONE_FORMATTED,
  FOUNDER_NAME,
  WHATSAPP_MESSAGES
} from '../utils/whatsapp';

export const ContactCta: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(WHATSAPP_PHONE_FORMATTED);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const starterPrompts = [
    'General travel assistance',
    'Private assistance in Oaxaca / Puebla',
    'Halal dining recommendations',
    'Transportation & airport advice',
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-stone-50 border-t border-stone-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-emerald-950 via-stone-900 to-stone-950 text-white p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden border border-amber-400/25">
          {/* Subtle lighting decorations */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Independent Travel Support</span>
            </div>

            {/* Title */}
            <h2
              id="contact-cta-title"
              className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold tracking-tight mb-4"
            >
              <span className="text-white">Need Help Planning Your </span>
              <span className="text-amber-300">Mexico Experience?</span>
            </h2>

            {/* Text */}
            <p className="text-base sm:text-lg text-emerald-200 leading-relaxed mb-8 max-w-lg font-medium">
              Tell us what you need and we'll explain how our independent travel assistance can help.
            </p>

            {/* Starter chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {starterPrompts.map((prompt, i) => (
                <a
                  key={i}
                  href={getWhatsAppUrl(`Hello, I would like to ask about: ${prompt}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/10 hover:bg-white/20 border border-white/15 text-stone-200 hover:text-white transition-all"
                >
                  "{prompt}"
                </a>
              ))}
            </div>

            {/* Big WhatsApp Chat Button */}
            <a
              href={getWhatsAppUrl('Hello, I would like to consult about your independent travel assistance in Mexico.')}
              target="_blank"
              rel="noopener noreferrer"
              id="main-contact-whatsapp-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-lg shadow-xl shadow-emerald-950/50 hover:shadow-emerald-900/60 hover:-translate-y-0.5 transition-all duration-200 mb-10 group"
            >
              <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-5 h-5 text-emerald-200 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Contact Details Card */}
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-stone-300">Independent Travel Companion</div>
                  <div className="text-sm sm:text-base font-bold text-white">{FOUNDER_NAME}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm sm:text-base font-mono font-semibold text-emerald-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{WHATSAPP_PHONE_FORMATTED}</span>
                </a>

                <button
                  type="button"
                  onClick={copyPhoneNumber}
                  title="Copy Phone Number"
                  id="copy-phone-number-btn"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors"
                  aria-label="Copy phone number"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {copied && (
              <span className="text-xs text-emerald-400 mt-2 animate-fade-in font-medium">
                Phone number copied to clipboard!
              </span>
            )}

            <div className="mt-6 flex items-center gap-2 text-xs text-stone-300">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Fast response time &bull; Available 7 days a week</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
