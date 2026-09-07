import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '../data/content';
import { getWhatsAppUrl, WHATSAPP_PHONE_FORMATTED } from '../utils/whatsapp';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ['home', 'about-service', 'how-we-help', 'private-assistance', 'how-it-works', 'about', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-emerald-950/95 backdrop-blur-md shadow-lg border-b border-amber-400/30 py-3'
          : 'bg-emerald-950/90 backdrop-blur-md border-b border-amber-400/20 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xl p-1"
            id="brand-logo-link"
          >
            <Logo size="md" variant="dark" />
            <div className="flex flex-col text-left">
              <span className="text-lg sm:text-xl font-bold tracking-tight leading-tight">
                <span className="text-amber-300 group-hover:text-amber-200 transition-colors">Arab Mexico </span>
                <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">Guide</span>
              </span>
              <span className="text-[11px] text-emerald-300 font-semibold tracking-wide hidden sm:block">
                Your Arabic Travel Companion in Mexico
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  id={`nav-link-${targetId}`}
                  className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-emerald-800/90 font-semibold shadow-xs ring-1 ring-amber-400/40'
                      : 'text-stone-200 hover:text-amber-300 hover:bg-emerald-900/60'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* CTA Button & WhatsApp Direct Contact */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-cta"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-semibold text-sm shadow-md ring-1 ring-amber-400/40 hover:ring-amber-400 transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
            >
              <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Contact on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-header-quick-wa"
              aria-label="Contact on WhatsApp"
              className="p-2 text-amber-300 bg-emerald-900/80 hover:bg-emerald-800 rounded-full sm:hidden transition-colors border border-amber-400/30"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-200 hover:text-white hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="lg:hidden bg-emerald-950 border-b border-amber-400/30 shadow-2xl transition-all duration-200 px-4 pt-3 pb-6 text-white"
        >
          <div className="space-y-1 py-2">
            {NAV_ITEMS.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  id={`mobile-nav-${targetId}`}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-emerald-800/90 text-white font-semibold ring-1 ring-amber-400/40'
                      : 'text-stone-200 hover:bg-emerald-900 hover:text-amber-300'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-emerald-900 space-y-3">
            <div className="px-2 text-xs text-stone-300 flex justify-between items-center">
              <span>Direct Assistance:</span>
              <span className="font-semibold text-amber-300">{WHATSAPP_PHONE_FORMATTED}</span>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-menu-whatsapp-btn"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-sm ring-1 ring-amber-400/40 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
