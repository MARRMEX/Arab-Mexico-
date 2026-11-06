import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationSchema } from '../data/translations';

export type Language = 'en' | 'ar' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: 'ltr' | 'rtl';
  isRtl: boolean;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'arab_mexico_guide_lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = window.localStorage.getItem(STORAGE_KEY) as Language;
        if (saved === 'en' || saved === 'ar' || saved === 'es') {
          return saved;
        }
      }
    } catch {
      // Storage access might be restricted in cross-origin iframes
    }

    try {
      if (typeof navigator !== 'undefined') {
        const rawLang =
          navigator.language ||
          (navigator as unknown as { userLanguage?: string }).userLanguage ||
          (Array.isArray(navigator.languages) ? navigator.languages[0] : '') ||
          '';
        const browserLang = typeof rawLang === 'string' ? rawLang.toLowerCase() : '';
        if (browserLang.startsWith('ar')) return 'ar';
        if (browserLang.startsWith('es')) return 'es';
      }
    } catch {
      // Navigator language inspection failed
    }

    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(STORAGE_KEY, lang);
      }
    } catch {
      // Ignore storage restrictions
    }
  };

  const isRtl = language === 'ar';
  const dir: 'ltr' | 'rtl' = isRtl ? 'rtl' : 'ltr';
  const t: TranslationSchema = translations[language] || translations.en;

  useEffect(() => {
    try {
      if (typeof document !== 'undefined') {
        document.documentElement.lang = language;
        document.documentElement.dir = dir;

        if (document.body) {
          if (language === 'ar') {
            document.body.classList.add('font-arabic');
          } else {
            document.body.classList.remove('font-arabic');
          }
        }
      }
    } catch {
      // Ignore DOM manipulation errors
    }
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, isRtl, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

