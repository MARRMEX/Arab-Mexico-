import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';

interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
  flag: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
  { code: 'ar', label: 'Arabic', nativeLabel: 'العربية', flag: '🇸🇦' },
  { code: 'es', label: 'Spanish', nativeLabel: 'Español', flag: '🇲🇽' },
];

interface LanguageToggleProps {
  variant?: 'navbar-desktop' | 'navbar-mobile' | 'segmented';
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  variant = 'navbar-desktop',
  className = '',
}) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Segmented control style (for mobile drawer or modal toggle)
  if (variant === 'segmented') {
    return (
      <div
        className={`inline-flex items-center p-1 rounded-xl bg-emerald-900/90 border border-amber-400/30 text-xs shadow-inner ${className}`}
        role="group"
        aria-label="Language selection"
      >
        {LANGUAGES.map((lang) => {
          const isSelected = language === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLanguage(lang.code)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                isSelected
                  ? 'bg-amber-400 text-stone-950 font-bold shadow-xs'
                  : 'text-stone-300 hover:text-white hover:bg-emerald-800/60'
              }`}
              aria-pressed={isSelected}
            >
              <span className="text-sm">{lang.flag}</span>
              <span>{lang.nativeLabel}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Mobile drawer format
  if (variant === 'navbar-mobile') {
    return (
      <div className={`space-y-2 ${className}`}>
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider px-1">
          <Globe className="w-3.5 h-3.5" />
          <span>Language / اللغة / Idioma</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {LANGUAGES.map((lang) => {
            const isSelected = language === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => setLanguage(lang.code)}
                className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-amber-400 text-stone-950 border-amber-300 font-bold shadow-sm'
                    : 'bg-emerald-900/60 text-stone-200 border-amber-400/20 hover:bg-emerald-800 hover:text-white'
                }`}
                aria-pressed={isSelected}
              >
                <span className="text-base mb-1">{lang.flag}</span>
                <span className="leading-tight">{lang.nativeLabel}</span>
                <span className="text-[10px] opacity-75">{lang.code.toUpperCase()}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop elegant dropdown pill with current language flag & label
  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        id="language-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={`Language selector. Current language: ${currentLang.label}`}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-900/80 hover:bg-emerald-800/90 text-amber-300 hover:text-amber-200 border border-amber-400/40 hover:border-amber-400/70 text-xs font-semibold shadow-xs transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
      >
        <span className="text-sm leading-none">{currentLang.flag}</span>
        <span className="tracking-wide uppercase font-bold text-[11px]">{currentLang.code}</span>
        <span className="hidden xl:inline text-stone-200 font-normal">({currentLang.nativeLabel})</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-amber-300 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          id="language-dropdown-menu"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-toggle-button"
          className="absolute right-0 mt-2 w-48 rounded-2xl bg-emerald-950 border border-amber-400/40 shadow-2xl py-1.5 text-white z-50 backdrop-blur-xl animate-fade-in divide-y divide-emerald-900/60"
        >
          <div className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-400/90 flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-amber-400" />
            <span>Select Language</span>
          </div>
          <div className="py-1">
            {LANGUAGES.map((lang) => {
              const isSelected = language === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2 text-xs text-left transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-800/80 text-amber-300 font-bold'
                      : 'text-stone-200 hover:bg-emerald-900 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-base">{lang.flag}</span>
                    <span className="flex flex-col text-left">
                      <span className="font-medium text-white">{lang.nativeLabel}</span>
                      <span className="text-[10px] text-stone-400">{lang.label}</span>
                    </span>
                  </span>
                  {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
