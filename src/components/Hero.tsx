import React from 'react';
import { MessageCircle, ArrowDown, Sparkles, MapPin, Globe } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  const scrollToDiscover = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('discover');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] sm:min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image with Mexican colonial / cultural architecture */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=85&w=2160&auto=format&fit=crop"
          alt="Palacio de Bellas Artes and historic architecture in Mexico City"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in duration-1000 transform transition-transform"
          loading="eager"
          fetchPriority="high"
        />
        {/* Layered dark gradients for pristine contrast and luxury warmth */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/70 to-emerald-950/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-stone-950/40 to-stone-950/90" />
      </div>

      {/* Hero Content Container */}
      <div className="relative max-w-4xl mx-auto text-center text-white z-10 flex flex-col items-center">
        {/* Official Brand Logo Emblem */}
        <div className="mb-5 animate-fade-in">
          <div className="p-1.5 rounded-full bg-emerald-950/90 backdrop-blur-md ring-4 ring-amber-400/60 shadow-2xl hover:scale-105 transition-transform duration-300">
            <Logo size="lg" variant="dark" />
          </div>
        </div>

        {/* Top Badge */}
        <div
          id="hero-badge"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm tracking-wide animate-fade-in"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Independent Travel Assistance in Mexico</span>
        </div>

        {/* Main H1 Title */}
        <h1
          id="hero-main-title"
          className="text-4xl sm:text-6xl md:text-7xl font-serif-title font-bold tracking-tight mb-4 leading-tight sm:leading-tight drop-shadow-sm"
        >
          <span className="text-amber-300">Arab Mexico </span>
          <span className="text-emerald-400">Guide</span>
        </h1>

        {/* Subtitle */}
        <p
          id="hero-subtitle"
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-emerald-300 mb-6 tracking-tight max-w-2xl"
        >
          Your Arabic Travel Companion in Mexico
        </p>

        {/* Main Description - Black text in clean readable container */}
        <div
          id="hero-description"
          className="bg-white/95 backdrop-blur-md px-6 py-5 rounded-2xl max-w-2xl mx-auto mb-10 shadow-lg border border-white/60 text-center space-y-3"
        >
          <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed font-bold">
            Independent travel assistance and local guidance for Arabic-speaking visitors exploring Mexico.
          </p>
          <div className="w-16 h-px bg-stone-300 mx-auto" />
          <p
            id="hero-additional-text"
            className="text-sm sm:text-base text-black max-w-2xl mx-auto leading-relaxed font-semibold"
          >
            Personalized support, local recommendations, Arabic-Spanish assistance and practical guidance before and during your trip.
          </p>
        </div>

        {/* Hero CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <a
            href={getWhatsAppUrl('Hello, I am looking for independent travel assistance for my trip to Mexico.')}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-assistance"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-base shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/50 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ring-1 ring-white/20"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Get Travel Assistance</span>
          </a>

          <a
            href={getWhatsAppUrl('Hello, I would like to chat about travel advice in Mexico.')}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-whatsapp"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 active:bg-white/30 backdrop-blur-md text-white font-medium text-base border border-white/25 hover:border-white/40 transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 text-amber-300" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div
          id="hero-trust-bar"
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-3xl pt-8 border-t border-white/15 text-stone-200 text-xs sm:text-sm"
        >
          <div className="flex items-center justify-center gap-2.5 bg-black py-3 px-4 rounded-xl border border-stone-800 shadow-md">
            <Globe className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-semibold text-white">100% Arabic Support</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 bg-black py-3 px-4 rounded-xl border border-stone-800 shadow-md">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-semibold text-white">Independent Assistance</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 bg-black py-3 px-4 rounded-xl border border-stone-800 shadow-md">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-semibold text-white">Based in Mexico</span>
          </div>
        </div>
      </div>
    </section>
  );
};
