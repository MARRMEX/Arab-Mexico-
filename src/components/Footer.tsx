import React from 'react';
import { MessageCircle, Phone, ArrowUp, Linkedin } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_PHONE_FORMATTED } from '../utils/whatsapp';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const Footer: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const t = translations[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about-service' },
    { name: t.nav.miniGuide, href: '#mini-travel-guide' },
    { name: t.nav.howWeHelp, href: '#how-we-help' },
    { name: t.nav.privateAssistance, href: '#private-assistance' },
    { name: t.nav.howItWorks, href: '#how-it-works' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-stone-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <Logo size="md" variant="dark" />
              <div>
                <h3 className="text-xl font-bold tracking-tight">
                  <span className="text-amber-300">Arab Mexico </span>
                  <span className="text-emerald-400">Guide</span>
                </h3>
                <p className="text-xs text-emerald-300 font-semibold">
                  {t.footer.tagline}
                </p>
                <p className="text-[11px] text-amber-400/90 font-medium">
                  {t.footer.subTagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-stone-400 max-w-md leading-relaxed mb-6 font-normal">
              {t.footer.desc}
            </p>

            {/* Direct WhatsApp Badge & LinkedIn */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-stone-300">
              <div className="flex items-center gap-2">
                <span className="text-stone-400">WhatsApp:</span>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-mono font-medium transition-colors"
                  aria-label="WhatsApp Contact"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="dir-ltr">{WHATSAPP_PHONE_FORMATTED}</span>
                </a>
              </div>
              <a
                href="https://www.linkedin.com/company/arab-mexico-guide/"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-linkedin-button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 text-sky-400 hover:text-sky-300 border border-stone-800 hover:border-sky-500/40 text-xs font-medium transition-all"
                aria-label="Arab Mexico Guide on LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 fill-current" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-5">
              {t.footer.quickNav}
            </h4>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-stone-300 hover:text-amber-300 transition-colors py-1 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors py-1 inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/arab-mexico-guide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-linkedin-nav"
                  className="text-sky-400 hover:text-sky-300 font-medium transition-colors py-1 inline-flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5 fill-current" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Back to Top */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start md:items-end">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-5">
                {t.footer.backToTop}
              </h4>
            </div>

            <div>
              <button
                type="button"
                onClick={scrollToTop}
                id="footer-back-to-top"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 text-xs font-medium transition-all cursor-pointer"
                aria-label="Back to top"
              >
                <span>{t.footer.backToTop}</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p id="footer-copyright" className="text-center sm:text-left">
            Arab Mexico Guide &copy; 2026 &bull; {t.footer.rights}
          </p>

          <div className="flex items-center gap-1.5 text-stone-400 text-center sm:text-right">
            <span>{t.footer.independentDisclaimer}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

