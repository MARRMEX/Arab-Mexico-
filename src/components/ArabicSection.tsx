import React from 'react';
import { ARABIC_SERVICES } from '../data/content';
import {
  Compass,
  Building2,
  Plane,
  UtensilsCrossed,
  Languages,
  MessageCircle,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';

const arabicIconMap: Record<string, React.ElementType> = {
  Compass: Compass,
  Building2: Building2,
  Plane: Plane,
  UtensilsCrossed: UtensilsCrossed,
  Languages: Languages,
  MessageCircle: MessageCircle,
};

export const ArabicSection: React.FC = () => {
  return (
    <section
      id="arabic-overview"
      dir="rtl"
      className="py-20 sm:py-28 bg-stone-900 text-white relative overflow-hidden font-arabic"
    >
      {/* Subtle decorative background lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header in Arabic */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-5">
            <span>مساعدة سياحية مستقلة ومرافقة شخصية</span>
          </div>

          <h2
            id="arabic-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-normal"
          >
            <span className="text-amber-300">دليلك ومساعدك العربي </span>
            <span className="text-emerald-400">في المكسيك</span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-stone-200 leading-loose max-w-2xl mx-auto font-light mb-6">
            <p className="font-normal text-amber-200/90">
              نقدم خدمات مساعدة وإرشاد سياحي بشكل مستقل للزوار الناطقين باللغة العربية في المكسيك.
            </p>
            <p>
              نساعدك في فهم الأماكن، والمواصلات، والمطاعم المناسبة، والتواصل باللغة الإسبانية، والتخطيط لرحلتك، والحصول على الدعم والمعلومات أثناء زيارتك.
            </p>
          </div>

          <div className="inline-block bg-emerald-950/70 border border-amber-400/30 px-5 py-2.5 rounded-2xl text-xs sm:text-sm text-emerald-300 font-medium">
            نحن لسنا وكالة سفر، بل نقدم مساعدة وإرشاداً شخصياً ومستقلاً للمسافرين.
          </div>
        </div>

        {/* 6 Arabic Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-14">
          {ARABIC_SERVICES.map((item) => {
            const IconComp = arabicIconMap[item.iconName] || CheckCircle2;

            return (
              <div
                key={item.id}
                id={`arabic-service-${item.id}`}
                className="bg-stone-800/80 hover:bg-stone-800 rounded-2xl p-6 border border-stone-700/80 hover:border-amber-500/40 transition-all duration-300 flex items-center gap-4 group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                  <IconComp className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-400/80 shrink-0" />
              </div>
            );
          })}
        </div>

        {/* Arabic WhatsApp CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.arabic)}
            target="_blank"
            rel="noopener noreferrer"
            id="arabic-whatsapp-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-base shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/50 hover:-translate-y-0.5 transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            <span>تواصل معنا عبر واتساب</span>
            <ArrowLeft className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
