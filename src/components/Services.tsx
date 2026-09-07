import React from 'react';
import { SERVICES } from '../data/content';
import {
  Compass,
  Building2,
  Plane,
  UtensilsCrossed,
  Languages,
  MessageCircle,
  Calendar,
  ArrowRight,
  Briefcase
} from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Building2,
  Plane,
  UtensilsCrossed,
  Languages,
  MessageCircle,
  Calendar,
};

export const Services: React.FC = () => {
  return (
    <section id="how-we-help" className="py-20 sm:py-28 bg-white border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-amber-400/40 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-emerald-900 font-bold">Tailored Travel Assistance</span>
          </div>

          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold tracking-tight mb-5"
          >
            <span className="text-emerald-950">How We </span>
            <span className="text-amber-600">Can Help</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Practical, personalized assistance for Arabic-speaking travelers in Mexico.
          </p>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName] || Compass;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative bg-stone-50/70 hover:bg-white rounded-2xl p-7 sm:p-8 border border-stone-200/80 hover:border-amber-400/50 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950 text-amber-300 ring-1 ring-amber-400/40 group-hover:bg-emerald-900 group-hover:text-amber-200 flex items-center justify-center transition-colors duration-300">
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-bold text-emerald-900 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300/60 transition-colors">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-emerald-950 mb-3 tracking-tight group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Direct Action Link */}
                <div className="pt-4 border-t border-stone-200/60 mt-auto">
                  <a
                    href={getWhatsAppUrl(WHATSAPP_MESSAGES.serviceInquiry(service.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800 hover:text-amber-600 transition-colors"
                  >
                    <span>Ask for assistance</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-amber-600" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
