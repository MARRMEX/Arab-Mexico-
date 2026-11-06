import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Download,
  CreditCard,
  Lock,
  ExternalLink,
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const PAYPAL_PAYMENT_URL = 'https://www.paypal.com/ncp/payment/N6FNK223TFT36';

export const MiniTravelGuide: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="mini-travel-guide"
      className="scroll-mt-16 sm:scroll-mt-20 py-20 sm:py-28 bg-gradient-to-b from-stone-900 via-emerald-950 to-stone-950 text-white relative overflow-hidden border-t border-emerald-900/50"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/70 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.miniGuide.badge}</span>
          </div>

          <h2
            id="mini-guide-main-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold tracking-tight mb-4 text-white"
          >
            <span>{t.miniGuide.title} </span>
            <span className="text-amber-400">🇲🇽</span>
          </h2>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            {t.miniGuide.desc}
          </p>
        </div>

        {/* Central Book Visual & Showcase */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="bg-gradient-to-r from-emerald-900/40 via-emerald-800/30 to-emerald-900/40 border border-emerald-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            
            {/* 3D-styled Guidebook Cover Graphic */}
            <div className="relative group shrink-0">
              {/* Soft glow behind book */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 to-emerald-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-75" />

              {/* Guidebook Visual Object */}
              <div className="relative w-52 sm:w-60 h-72 sm:h-80 bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/60 flex flex-col justify-between p-4 transform sm:-rotate-2 sm:group-hover:rotate-0 transition-transform duration-300">
                {/* Background Mexico landmark photo with dark gradient */}
                <img
                  src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=800&auto=format&fit=crop"
                  alt="Mexico Travel Guidebook Preview - Palacio de Bellas Artes"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-emerald-950/80 to-stone-950/60" />

                {/* Book Header */}
                <div className="relative z-10 flex items-center justify-between border-b border-amber-400/30 pb-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
                    Arab Mexico Guide
                  </span>
                  <span className="text-xs">🇲🇽</span>
                </div>

                {/* Book Title Center */}
                <div className="relative z-10 text-center my-auto py-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[10px] text-emerald-300 font-semibold mb-2">
                    {t.miniGuide.practicalEdition}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif-title font-bold text-white tracking-tight leading-tight mb-1">
                    Mexico Mini Travel Guide
                  </h3>
                  <p className="text-xs font-serif-title text-amber-300" dir="rtl">
                    الدليل المصغر للسفر في المكسيك
                  </p>
                </div>

                {/* Book Footer / Price Tag */}
                <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/15 text-[11px] text-stone-300">
                  <span className="flex items-center gap-1 text-emerald-300 font-medium">
                    <Download className="w-3 h-3" /> PDF Guide
                  </span>
                  <span className="font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full border border-amber-400/40">
                    $19 USD
                  </span>
                </div>

                {/* Simulated Book Spine Highlight */}
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-white/20 via-white/5 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Quick Benefits / Overview */}
            <div className="flex-1 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.miniGuide.instantDownload}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-white">
                {t.miniGuide.subheading}
              </h3>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                {t.miniGuide.subdesc}
              </p>

              {/* Highlights list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm text-stone-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.miniGuide.benefit1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.miniGuide.benefit2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.miniGuide.benefit3}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.miniGuide.benefit4}</span>
                </div>
              </div>

              {/* Price Banner */}
              <div className="pt-3 flex items-baseline gap-3">
                <span className="text-stone-400 text-sm">{t.miniGuide.priceLabel}</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif-title">
                  $19 USD
                </span>
                <span className="text-xs text-stone-400 bg-stone-800/80 px-2.5 py-1 rounded-full border border-stone-700">
                  {t.miniGuide.oneTimePayment}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Sales Section: Adapts automatically to selected language (ES, EN, AR) */}
        <div className="max-w-4xl mx-auto">
          <div
            id="mini-guide-sales-card"
            dir={isRtl ? 'rtl' : 'ltr'}
            className={`bg-stone-900/95 border-2 rounded-3xl p-7 sm:p-10 shadow-2xl transition-all duration-300 relative ${
              language === 'ar'
                ? 'border-amber-500/60 shadow-amber-950/40 text-right'
                : language === 'es'
                ? 'border-emerald-500/60 shadow-emerald-950/40 text-left'
                : 'border-emerald-600/60 shadow-emerald-950/40 text-left'
            }`}
          >
            {/* Header Badge & Price Tag */}
            <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-stone-800">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-600/40 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.miniGuide.cardEditionLabel}</span>
              </span>

              <span className="text-sm sm:text-base font-extrabold text-amber-400 bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-400/30">
                {language === 'ar' ? '١٩ دولارًا أمريكيًا ($19 USD)' : '$19 USD'}
              </span>
            </div>

            {/* Localized Title / Call to Action Heading */}
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif-title font-bold text-white mb-3 flex items-center gap-2.5 flex-wrap">
                <span>{t.miniGuide.ctaHeading}</span>
                <span className="text-amber-400">🇲🇽</span>
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                {t.miniGuide.cardP1}
              </p>
            </div>

            {/* Practical feature highlight callout */}
            <div className="bg-emerald-950/60 border border-emerald-800/40 rounded-2xl p-4 sm:p-5 mb-8 text-xs sm:text-sm text-stone-200 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.miniGuide.cardHighlightTitle}</span>
              </div>
              <p className="text-stone-300 opacity-90">
                {t.miniGuide.cardP2}
              </p>
            </div>

            {/* Price & Checkout Area */}
            <div className="pt-6 border-t border-stone-800">
              <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                <div>
                  <span className="text-xs text-stone-400 uppercase tracking-wider block">
                    {t.miniGuide.priceLabel}
                  </span>
                  <span className="text-3xl sm:text-4xl font-serif-title font-extrabold text-amber-400">
                    {language === 'ar' ? '١٩ دولارًا ($19 USD)' : '$19 USD'}
                  </span>
                </div>
                <div className={isRtl ? 'text-left' : 'text-right'}>
                  <span className="text-xs sm:text-sm text-emerald-300 font-medium block flex items-center gap-1.5 justify-end">
                    <Download className="w-4 h-4 text-emerald-400" />
                    <span>{t.miniGuide.instantDownload}</span>
                  </span>
                  <span className="text-xs text-stone-400">
                    {language === 'ar' ? 'دفع آمن ومحمي' : language === 'es' ? 'Pago Seguro y Confiable' : 'Secure Instant Checkout'}
                  </span>
                </div>
              </div>

              {/* Main PayPal Purchase Button (Consistent URL for all 3 languages) */}
              <a
                href={PAYPAL_PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="mini-guide-paypal-purchase-btn"
                className={`w-full inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-2xl font-bold text-base sm:text-lg shadow-xl active:scale-[0.99] transition-all duration-200 cursor-pointer text-center ${
                  language === 'ar'
                    ? 'bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-stone-950 shadow-amber-950/60 border border-amber-300/40'
                    : 'bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-500 text-white shadow-emerald-950/60 border border-emerald-400/40'
                }`}
              >
                <Lock className={`w-5 h-5 shrink-0 ${language === 'ar' ? 'text-stone-950' : 'text-amber-300'}`} />
                <span className="flex items-center gap-2.5">
                  <span className="text-lg font-bold">{t.miniGuide.buyButton}</span>
                  <span className={`text-xs sm:text-sm font-semibold px-2.5 py-0.5 rounded-full ${
                    language === 'ar' ? 'bg-black/25 text-stone-900' : 'bg-black/25 text-amber-300'
                  }`}>
                    $19 USD
                  </span>
                </span>
                <ExternalLink className={`w-4 h-4 shrink-0 ${language === 'ar' ? 'text-stone-950/70' : 'text-emerald-200'}`} />
              </a>

              {/* Value Proposition Message (Just below the CTA) */}
              <div className="mt-4 p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/25 text-center">
                <p className="text-xs sm:text-sm text-amber-200 font-medium leading-relaxed italic">
                  &ldquo;{t.miniGuide.valueQuote}&rdquo;
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-4 sm:gap-6 mt-4 text-xs text-stone-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  {t.miniGuide.trustPaypal}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-amber-400" />
                  {t.miniGuide.trustCards}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust & Satisfaction Assurance */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-stone-400 flex items-center justify-center gap-2">
            <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>
              {t.miniGuide.bottomNotice}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
