import React from 'react';
import { FOUNDER_INFO } from '../data/content';
import { User, MessageCircle, Globe, ShieldCheck, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Logo } from './Logo';

export const Founder: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Official Logo Emblem & Trust Credentials (No photo of founder) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Luxury Credential Card */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-900 via-stone-900 to-emerald-950 p-8 sm:p-10 text-white shadow-2xl border border-amber-400/30 flex flex-col items-center text-center">
                {/* Subtle decorative glow */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

                {/* Central Brand Logo */}
                <div className="relative mb-6">
                  <div className="p-2.5 rounded-full bg-emerald-950/90 ring-4 ring-amber-400/50 backdrop-blur-md shadow-2xl hover:scale-105 transition-transform duration-300">
                    <Logo size="xl" variant="dark" />
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Official Emblem</span>
                </div>

                <h3 className="text-2xl font-serif-title font-bold mb-1">
                  <span className="text-amber-300">Arab Mexico </span>
                  <span className="text-emerald-400">Guide</span>
                </h3>
                <p className="text-xs text-emerald-300 font-medium mb-6">
                  Travel &bull; Culture &bull; Guidance
                </p>

                {/* Trust Badges List */}
                <div className="w-full space-y-2.5 text-left pt-6 border-t border-white/15">
                  <div className="flex items-center gap-3 py-2 px-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Founder: <strong className="text-white font-medium">{FOUNDER_INFO.name}</strong></span>
                  </div>
                  <div className="flex items-center gap-3 py-2 px-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-stone-200">
                    <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Native Arabic &amp; Spanish Concierge</span>
                  </div>
                  <div className="flex items-center gap-3 py-2 px-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-stone-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direct On-The-Ground Assistance</span>
                  </div>
                </div>
              </div>

              {/* Decorative background shadow accent */}
              <div className="absolute -inset-3 bg-gradient-to-r from-emerald-600/20 to-amber-500/20 rounded-3xl -z-10 blur-xl" />
            </div>
          </div>

          {/* Right Column: Founder Narrative & Statistics */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col">
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-amber-400/40 text-xs font-semibold uppercase tracking-wider w-fit mb-5">
              <User className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-emerald-900 font-bold">The Founder</span>
            </div>

            {/* Title */}
            <h2
              id="founder-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold tracking-tight mb-2"
            >
              <span className="text-emerald-950">Meet the </span>
              <span className="text-amber-600">Founder</span>
            </h2>
            <p className="text-xl font-bold text-emerald-800 mb-6 font-serif-title">
              {FOUNDER_INFO.name}
            </p>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-stone-700 leading-relaxed mb-10 font-normal">
              <p className="p-5 rounded-2xl bg-emerald-50/70 border-l-4 border-emerald-700 text-stone-800 font-medium italic">
                "{FOUNDER_INFO.quote}"
              </p>
              <p className="text-stone-700">
                {FOUNDER_INFO.bioSecondParagraph}
              </p>
              <p className="text-stone-700">
                My goal is to make it easier for visitors to navigate Mexico, discover local places and enjoy their trip with reliable human support.
              </p>
            </div>

            {/* Three Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {FOUNDER_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  id={`founder-stat-${idx}`}
                  className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80 text-center sm:text-left transition-all hover:border-amber-400/50 hover:bg-white hover:shadow-sm"
                >
                  <div className="text-2xl sm:text-3xl font-serif-title font-bold text-amber-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-emerald-950 mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-stone-500">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Connect CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppUrl(`Hello Houssame, I would like to ask about your travel assistance in Mexico.`)}
                target="_blank"
                rel="noopener noreferrer"
                id="founder-whatsapp-link"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="flex items-center justify-center gap-2 text-xs text-stone-600 font-medium px-2">
                <Globe className="w-4 h-4 text-emerald-700" />
                <span>Fluent in Arabic &amp; Spanish</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
