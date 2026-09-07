import React from 'react';
import { Sparkles, ShieldCheck, HeartHandshake, Compass, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const AboutService: React.FC = () => {
  return (
    <section
      id="about-service"
      className="py-20 sm:py-28 bg-white border-t border-stone-200/70 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Visual Clarification Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-amber-400/50 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Independent Travel Assistance</span>
          </div>

          {/* Section Title */}
          <h2
            id="about-service-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold tracking-tight mb-6"
          >
            <span className="text-emerald-950">More Than a Guide </span>
            <span className="text-amber-600">Your Local Travel Support</span>
          </h2>

          {/* Core Descriptive Text */}
          <div className="space-y-4 text-base sm:text-lg md:text-xl text-stone-700 leading-relaxed font-normal mb-10 max-w-3xl mx-auto">
            <p className="font-medium text-emerald-950">
              Arab Mexico Guide provides independent, personalized assistance to Arabic-speaking travelers visiting Mexico.
            </p>
            <p className="text-stone-600">
              From understanding local customs and finding suitable places to eat, to navigating transportation and communicating in Spanish, we help make your experience in Mexico easier and more comfortable.
            </p>
          </div>

          {/* Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-left">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-amber-400/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 text-amber-300 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-emerald-950 text-base mb-1.5">
                Authentic Guidance
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Objective recommendations based on real local knowledge, with no commercial bias.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-amber-400/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 text-amber-300 flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-emerald-950 text-base mb-1.5">
                Personalized Care
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Attention centered purely on your schedule, interests, comfort and family preferences.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-amber-400/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 text-amber-300 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-emerald-950 text-base mb-1.5">
                Zero Language Barriers
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Fluent Arabic and Spanish support so you can explore Mexico with complete peace of mind.
              </p>
            </div>
          </div>

          {/* CTA Link */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href={getWhatsAppUrl('Hello, I would like to learn more about your independent travel assistance in Mexico.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>Ask for Travel Assistance</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
