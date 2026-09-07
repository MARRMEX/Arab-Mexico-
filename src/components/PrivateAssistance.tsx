import React from 'react';
import { CheckCircle2, MessageCircle, Sparkles, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const PrivateAssistance: React.FC = () => {
  const privateFeatures = [
    'Local orientation',
    'Arabic-Spanish communication assistance',
    'Help navigating the city',
    'Local recommendations',
    'Cultural guidance',
    'Practical travel support',
  ];

  return (
    <section
      id="private-assistance"
      className="py-20 sm:py-28 bg-stone-900 text-stone-100 relative overflow-hidden"
    >
      {/* Subtle decorative background pattern / warm glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Premium Text & Details */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Exclusive Service Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider w-fit mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Independent In-Person Support</span>
            </div>

            {/* Title */}
            <h2
              id="private-assistance-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold tracking-tight mb-3"
            >
              <span className="text-emerald-400">Private In-Person </span>
              <span className="text-amber-300">Assistance</span>
            </h2>

            {/* Location Subtitle */}
            <div className="flex items-center gap-2 text-amber-300 text-lg sm:text-xl font-medium mb-6">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Personalized local support in Oaxaca and Puebla</span>
            </div>

            {/* Description */}
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-light">
              For travelers who prefer personal assistance, we offer independent in-person support and local accompaniment in selected locations.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-10 max-w-lg">
              {privateFeatures.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 py-2 px-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-stone-200 text-sm sm:text-base font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.privateAssistance)}
                target="_blank"
                rel="noopener noreferrer"
                id="request-private-assistance-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-base shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Request Private Assistance</span>
                <ArrowRight className="w-4 h-4 text-emerald-200" />
              </a>

              <span className="text-xs text-stone-400 px-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Direct inquiry via WhatsApp
              </span>
            </div>
          </div>

          {/* Right Column: Professional Monte Albán & Oaxaca Photography */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-400/30 group">
              <div className="aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] overflow-hidden">
                <img
                  src="./monte-alban-oaxaca.jpg"
                  alt="Ancient Zapotec stepped pyramids and archaeological site of Monte Albán in Oaxaca, Mexico"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Gradient & Caption Card */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <div className="bg-emerald-950/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-amber-400/30 shadow-lg">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-amber-300 font-bold text-xs uppercase tracking-wider">
                      Monte Albán &bull; Oaxaca &bull; Puebla
                    </span>
                    <span className="text-emerald-300 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-900/60 border border-emerald-500/30">
                      In-Person Support
                    </span>
                  </div>
                  <p className="text-white text-sm sm:text-base font-medium leading-snug">
                    Explore ancient pyramids of Monte Albán, authentic local markets, and historic culture with personalized Arabic assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
