import React from 'react';
import { WHY_CHOOSE_ITEMS } from '../data/content';
import {
  Languages,
  MapPin,
  Compass,
  UserCheck,
  Clock,
  ShieldCheck,
  Scale,
  MessageCircle,
  Award
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Languages,
  MapPin,
  Compass,
  UserCheck,
  Clock,
  ShieldCheck,
  Scale,
  MessageCircle,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose" className="py-20 sm:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-amber-400/40 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-emerald-900 font-bold">Authentic &amp; Independent</span>
          </div>

          <h2
            id="why-choose-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold tracking-tight mb-5"
          >
            <span className="text-emerald-950">Why Choose </span>
            <span className="text-amber-600">Arab Mexico Guide?</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto font-normal">
            We are focused on helping Arabic-speaking visitors feel more comfortable, informed and confident while exploring Mexico.
          </p>
        </div>

        {/* 6 Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item) => {
            const IconComponent = iconMap[item.iconName] || Compass;

            return (
              <div
                key={item.id}
                id={`why-choose-${item.id}`}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-stone-200/80 hover:border-amber-400/50 shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-950 text-amber-300 ring-1 ring-amber-400/40 group-hover:bg-emerald-900 group-hover:text-amber-200 flex items-center justify-center mb-5 transition-colors">
                  <IconComponent className="w-6 h-6 stroke-[1.8]" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-emerald-950 mb-2.5 tracking-tight group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
