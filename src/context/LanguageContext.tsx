import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: 'ltr' | 'rtl';
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'arab_mexico_guide_lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY) as Language;
      if (saved === 'en' || saved === 'ar' || saved === 'es') {
        return saved;
      }
      // Check browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('ar')) return 'ar';
      if (browserLang.startsWith('es')) return 'es';
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  };

  const isRtl = language === 'ar';
  const dir: 'ltr' | 'rtl' = isRtl ? 'rtl' : 'ltr';

  useEffect(() => {
    // Update HTML root attributes for accessibility and styling
    document.documentElement.lang = language;
    document.documentElement.dir = dir;

    // Update body classes for Arabic font support
    if (language === 'ar') {
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
    }
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, isRtl }}>
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
