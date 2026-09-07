import React from 'react';
import { DESTINATIONS } from '../data/content';
import { Compass, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const DiscoverMexico: React.FC = () => {
  return (
    <section id="discover" className="py-20 sm:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-amber-400/40 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-emerald-900 font-bold">Unforgettable Destinations</span>
          </div>

          <h2
            id="discover-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold tracking-tight mb-6"
          >
            <span className="text-emerald-900">Discover </span>
            <span className="text-amber-600">Mexico</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Mexico is one of the world's most exciting travel destinations — rich culture, historic cities, beautiful beaches, delicious cuisine, ancient archaeological sites, and unforgettable experiences.
          </p>
        </div>

        {/* Cards Grid: 3 cards on top row, 2 cards on bottom row for balanced symmetry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {DESTINATIONS.slice(0, 3).map((dest) => (
            <div
              key={dest.id}
              id={`destination-card-${dest.id}`}
              className="group relative h-[380px] sm:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end p-6 sm:p-8 bg-stone-900 cursor-pointer"
            >
              {/* Background Image with Zoom */}
              <img
                src={dest.imageUrl}
                alt={dest.altText}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/45 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Top Tag Badge */}
              <div className="absolute top-5 left-5 z-10">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-amber-300 bg-emerald-950/80 backdrop-blur-md rounded-full border border-amber-400/40">
                  {dest.tag}
                </span>
              </div>

              {/* Content Box */}
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-white mb-1.5 tracking-tight group-hover:text-amber-300 transition-colors">
                  {dest.title}
                </h3>
                <p className="text-sm sm:text-base text-emerald-300 font-medium mb-4">
                  {dest.subtitle}
                </p>

                <a
                  href={getWhatsAppUrl(`Hola, me gustaría información y asistencia para visitar ${dest.title} en México.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors group/link"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Ask about {dest.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform text-amber-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: 2 Wider Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {DESTINATIONS.slice(3, 5).map((dest) => (
            <div
              key={dest.id}
              id={`destination-card-${dest.id}`}
              className="group relative h-[360px] sm:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end p-6 sm:p-8 bg-stone-900 cursor-pointer"
            >
              {/* Background Image with Zoom */}
              <img
                src={dest.imageUrl}
                alt={dest.altText}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/45 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Top Tag Badge */}
              <div className="absolute top-5 left-5 z-10">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-amber-300 bg-emerald-950/80 backdrop-blur-md rounded-full border border-amber-400/40">
                  {dest.tag}
                </span>
              </div>

              {/* Content Box */}
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-white mb-1.5 tracking-tight group-hover:text-amber-300 transition-colors">
                  {dest.title}
                </h3>
                <p className="text-sm sm:text-base text-emerald-300 font-medium mb-4">
                  {dest.subtitle}
                </p>

                <a
                  href={getWhatsAppUrl(`Hola, me gustaría recibir recomendaciones sobre ${dest.title} en México.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors group/link"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Ask about {dest.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform text-amber-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
