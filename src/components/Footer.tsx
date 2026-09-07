import React from 'react';
import { NAV_ITEMS } from '../data/content';
import { MessageCircle, Phone, ArrowUp, Download } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_PHONE_FORMATTED } from '../utils/whatsapp';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
                  Your Arabic Travel Companion in Mexico
                </p>
                <p className="text-[11px] text-amber-400/90 font-medium">
                  Independent Travel Assistance &amp; Local Guidance
                </p>
              </div>
            </div>

            <p className="text-sm text-stone-400 max-w-md leading-relaxed mb-6 font-normal">
              Independent travel assistance, local recommendations, and Arabic-Spanish communication support designed specifically for Arabic-speaking travelers exploring Mexico.
            </p>

            {/* Direct WhatsApp Badge */}
            <div className="flex items-center gap-3 text-sm text-stone-300">
              <span className="text-stone-400">WhatsApp:</span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-mono font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{WHATSAPP_PHONE_FORMATTED}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-5">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {NAV_ITEMS.map((item) => (
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
            </ul>
          </div>

          {/* Quick Back to Top & Export */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start md:items-end gap-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
                GitHub Pages
              </h4>
              <a
                href="/github-pages-ready.zip"
                download="github-pages-ready.zip"
                id="footer-download-gh-pages"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-900/40 hover:bg-emerald-800/60 text-emerald-300 border border-emerald-500/40 text-xs font-semibold transition-all mb-2 shadow-sm"
                title="Download static build ready to upload to GitHub Pages"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>GitHub Pages ZIP</span>
              </a>
            </div>

            <div>
              <button
                type="button"
                onClick={scrollToTop}
                id="footer-back-to-top"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 text-xs font-medium transition-all"
                aria-label="Back to top"
              >
                <span>Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p id="footer-copyright" className="text-center sm:text-left">
            Arab Mexico Guide &copy; 2026 &bull; Crafted with care for Arabic-speaking travelers.
          </p>

          <div className="flex items-center gap-1.5 text-stone-400">
            <span>Connecting cultures between the Arab World and Mexico</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
