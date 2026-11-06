import React from 'react';
import { Check, Info, Shield, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const HowItWorks: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-28 bg-stone-50 border-t border-stone-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-amber-400/40 text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-emerald-900 font-bold">{t.howItWorks.badge}</span>
          </div>

          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold tracking-tight mb-5"
          >
            <span className="text-emerald-950">{t.howItWorks.titleStart}</span>
            <span className="text-amber-600">{t.howItWorks.titleEnd}</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto font-normal">
            {t.howItWorks.desc}
          </p>
        </div>

        {/* Two Comparison Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Card 1: What We Help With */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-emerald-700/30 shadow-sm relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {t.howItWorks.supportTitle}
                  </span>
                  <h3 className="text-2xl font-serif-title font-bold text-emerald-950 mt-2">
                    {t.howItWorks.supportSubtitle}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  ✓
                </div>
              </div>

              <ul className="space-y-3.5 text-stone-700">
                {t.howItWorks.whatWeHelp.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-sm sm:text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: What We Do Not Operate As */}
          <div className="bg-stone-100/90 rounded-3xl p-8 sm:p-10 border border-stone-300/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-700 bg-stone-200/80 px-3 py-1 rounded-full border border-stone-300">
                    {t.howItWorks.notAgencyTitle}
                  </span>
                  <h3 className="text-2xl font-serif-title font-bold text-stone-900 mt-2">
                    {t.howItWorks.notAgencySubtitle}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center font-bold">
                  ✕
                </div>
              </div>

              <ul className="space-y-4 text-stone-700 mb-8">
                {t.howItWorks.whatWeDoNotOperateAs.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center shrink-0 text-xs font-bold">
                      ✕
                    </div>
                    <span className="text-sm sm:text-base font-medium text-stone-800">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-300/50 text-stone-700 text-xs sm:text-sm leading-relaxed flex gap-3">
                <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <p>
                  {t.aboutService.calloutText}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Explanatory Clarification Banner */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-white border border-stone-200 p-6 sm:p-8 text-center shadow-xs">
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-6">
            {t.howItWorks.independentNote}
          </p>

          <a
            href={getWhatsAppUrl(
              language === 'ar'
                ? 'مرحباً، لدي سؤال حول المساعدة السياحية في المكسيك.'
                : language === 'es'
                ? 'Hola, tengo una pregunta sobre cómo funciona la asistencia de viaje en México.'
                : 'Hello, I have a question about your travel assistance in Mexico.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-200" />
            <span>{t.howItWorks.ctaButton}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
