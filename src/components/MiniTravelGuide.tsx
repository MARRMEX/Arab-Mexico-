import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Download,
  CreditCard,
  Lock,
  ExternalLink,
  BookOpen,
  CheckCircle2
} from 'lucide-react';

const PAYPAL_PAYMENT_URL = 'https://www.paypal.com/ncp/payment/N6FNK223TFT36';

export const MiniTravelGuide: React.FC = () => {
  return (
    <section
      id="mini-travel-guide"
      className="scroll-mt-16 sm:scroll-mt-20 py-20 sm:py-28 bg-gradient-to-b from-stone-900 via-emerald-950 to-stone-950 text-white relative overflow-hidden border-t border-emerald-900/50"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/70 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Digital Travel Edition &bull; دليل السفر الرقمي</span>
          </div>

          <h2
            id="mini-guide-main-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold tracking-tight mb-4 text-white"
          >
            <span>Mexico Mini Travel Guide </span>
            <span className="text-amber-400">🇲🇽</span>
          </h2>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Essential guidance, practical travel tips, and cultural insights crafted specifically for Arab travelers visiting Mexico.
          </p>
        </div>

        {/* Central Book Visual & Showcase */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="bg-gradient-to-r from-emerald-900/40 via-emerald-800/30 to-emerald-900/40 border border-emerald-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            
            {/* 3D-styled Guidebook Cover Graphic */}
            <div className="relative group shrink-0">
              {/* Soft glow behind book */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 to-emerald-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-75" />

              {/* Guidebook Visual Object */}
              <div className="relative w-52 sm:w-60 h-72 sm:h-80 bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/60 flex flex-col justify-between p-4 transform sm:-rotate-2 sm:group-hover:rotate-0 transition-transform duration-300">
                {/* Background Mexico landmark photo with dark gradient */}
                <img
                  src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=800&auto=format&fit=crop"
                  alt="Mexico Travel Guidebook Preview - Palacio de Bellas Artes"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-emerald-950/80 to-stone-950/60" />

                {/* Book Header */}
                <div className="relative z-10 flex items-center justify-between border-b border-amber-400/30 pb-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
                    Arab Mexico Guide
                  </span>
                  <span className="text-xs">🇲🇽</span>
                </div>

                {/* Book Title Center */}
                <div className="relative z-10 text-center my-auto py-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[10px] text-emerald-300 font-semibold mb-2">
                    PRACTICAL EDITION
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif-title font-bold text-white tracking-tight leading-tight mb-1">
                    Mexico Mini Travel Guide
                  </h3>
                  <p className="text-xs font-serif-title text-amber-300" dir="rtl">
                    الدليل المصغر للسفر في المكسيك
                  </p>
                </div>

                {/* Book Footer / Price Tag */}
                <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/15 text-[11px] text-stone-300">
                  <span className="flex items-center gap-1 text-emerald-300 font-medium">
                    <Download className="w-3 h-3" /> PDF Guide
                  </span>
                  <span className="font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full border border-amber-400/40">
                    $5 USD
                  </span>
                </div>

                {/* Simulated Book Spine Highlight */}
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-white/20 via-white/5 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Quick Benefits / Overview */}
            <div className="flex-1 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Instant Digital Download (PDF)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-white">
                Everything you need to kickstart your journey
              </h3>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                A concise, easy-to-read travel companion designed to answer key questions, recommend safe navigation methods, and highlight culturally welcoming experiences across Mexico.
              </p>

              {/* Highlights list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm text-stone-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Essential travel preparation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transportation &amp; safety tips</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Halal-friendly &amp; dining advice</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Arabic-friendly local recommendations</span>
                </div>
              </div>

              {/* Price Banner */}
              <div className="pt-3 flex items-baseline gap-3">
                <span className="text-stone-400 text-sm">Special price:</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif-title">
                  $5 USD
                </span>
                <span className="text-xs text-stone-400 bg-stone-800/80 px-2.5 py-1 rounded-full border border-stone-700">
                  One-time payment
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Bilingual Sales Cards: English & Arabic Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: English Sales Version */}
          <div
            id="mini-guide-card-english"
            className="bg-stone-900/90 border-2 border-emerald-700/50 hover:border-emerald-500 rounded-3xl p-7 sm:p-9 shadow-xl flex flex-col justify-between relative transition-all duration-300"
          >
            <div>
              {/* Badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-600/40">
                  English Edition
                </span>
                <span className="text-sm font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
                  Only $5 USD
                </span>
              </div>

              {/* English Title */}
              <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-white mb-4 flex items-center gap-2">
                <span>Mexico Mini Travel Guide</span>
                <span>🇲🇽</span>
              </h3>

              {/* English Description Paragraphs */}
              <div className="space-y-4 text-stone-200 text-sm sm:text-base leading-relaxed mb-8">
                <p className="font-medium text-stone-100">
                  Plan your trip to Mexico with our practical Mini Travel Guide, created especially for Arab travelers.
                </p>
                <p className="text-stone-300">
                  Discover essential information and useful recommendations to help you enjoy your trip with confidence.
                </p>
              </div>

              {/* Highlight Box */}
              <div className="bg-emerald-950/60 border border-emerald-800/40 rounded-2xl p-4 mb-8 text-xs sm:text-sm text-stone-300 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Quick, practical and easy to read on your mobile or tablet</span>
                </div>
                <p className="text-stone-400 pl-6">
                  Direct tips on what to pack, safe transit, neighborhood insights, and language tips.
                </p>
              </div>
            </div>

            {/* Price & Buy Now Button */}
            <div className="pt-4 border-t border-stone-800">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs text-stone-400 uppercase tracking-wider block">Price</span>
                  <span className="text-3xl font-serif-title font-extrabold text-amber-400">
                    Only $5 USD
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-emerald-300 font-medium block flex items-center gap-1 justify-end">
                    <Download className="w-3.5 h-3.5" /> Instant PDF
                  </span>
                  <span className="text-[11px] text-stone-400">Secure Checkout</span>
                </div>
              </div>

              {/* BUY NOW Button with PayPal Link */}
              <a
                href={PAYPAL_PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="buy-now-english-btn"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-500 active:scale-[0.99] text-white font-bold text-base sm:text-lg shadow-lg shadow-emerald-950/60 hover:shadow-emerald-900/80 transition-all duration-200 border border-emerald-400/40 cursor-pointer"
              >
                <Lock className="w-4 h-4 text-amber-300" />
                <span>BUY NOW</span>
                <ExternalLink className="w-4 h-4 text-emerald-200" />
              </a>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-4 mt-3.5 text-[11px] text-stone-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  PayPal Protected
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5 text-amber-400" />
                  Cards &amp; PayPal
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Arabic Sales Version */}
          <div
            id="mini-guide-card-arabic"
            dir="rtl"
            className="bg-stone-900/90 border-2 border-amber-600/50 hover:border-amber-400 rounded-3xl p-7 sm:p-9 shadow-xl flex flex-col justify-between relative transition-all duration-300 text-right"
          >
            <div>
              {/* Badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-emerald-950 px-3 py-1 rounded-full border border-amber-500/40">
                  النسخة العربية
                </span>
                <span className="text-sm font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
                  السعر فقط 5 دولارات أمريكية
                </span>
              </div>

              {/* Arabic Title */}
              <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-white mb-4 flex items-center gap-2">
                <span>الدليل المصغر للسفر في المكسيك</span>
                <span>🇲🇽</span>
              </h3>

              {/* Arabic Description Paragraphs */}
              <div className="space-y-4 text-stone-200 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                <p className="font-medium text-stone-100 text-base sm:text-lg">
                  خطط لرحلتك إلى المكسيك بسهولة مع دليلنا المصغر والعملي، المصمم خصيصًا للمسافرين العرب.
                </p>
                <p className="text-stone-300">
                  اكتشف معلومات أساسية ونصائح مفيدة تساعدك على الاستمتاع برحلتك إلى المكسيك بثقة.
                </p>
              </div>

              {/* Highlight Box */}
              <div className="bg-emerald-950/60 border border-amber-500/30 rounded-2xl p-4 mb-8 text-xs sm:text-sm text-stone-300 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-300 font-semibold">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>دليل عملي ومباشر سهل القراءة على هاتفك أو جهازك اللوحي</span>
                </div>
                <p className="text-stone-400 pr-6">
                  إرشادات واضحة حول المواصلات الآمنة، والمطاعم المناسبة، وأهم المناطق، والتعامل اليومي.
                </p>
              </div>
            </div>

            {/* Price & Buy Now Button */}
            <div className="pt-4 border-t border-stone-800">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs text-stone-400 uppercase tracking-wider block">السعر</span>
                  <span className="text-2xl sm:text-3xl font-serif-title font-extrabold text-amber-400">
                    السعر فقط 5 دولارات أمريكية
                  </span>
                </div>
                <div className="text-left">
                  <span className="text-xs text-emerald-300 font-medium block flex items-center gap-1 justify-end">
                    <Download className="w-3.5 h-3.5" /> ملف PDF فوري
                  </span>
                  <span className="text-[11px] text-stone-400">دفع آمن ومحمي</span>
                </div>
              </div>

              {/* اشترِ الآن Button with PayPal Link */}
              <a
                href={PAYPAL_PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="buy-now-arabic-btn"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 active:scale-[0.99] text-stone-950 font-bold text-base sm:text-lg shadow-lg shadow-amber-950/60 hover:shadow-amber-900/80 transition-all duration-200 border border-amber-300/40 cursor-pointer"
              >
                <Lock className="w-4 h-4 text-stone-950" />
                <span>اشترِ الآن</span>
                <ExternalLink className="w-4 h-4 text-stone-950/70" />
              </a>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-4 mt-3.5 text-[11px] text-stone-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  دفع آمن عبر PayPal
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5 text-amber-400" />
                  بطاقات بنكية وPayPal
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Trust & Satisfaction Assurance */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-stone-400 flex items-center justify-center gap-2">
            <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>
              All payments are processed securely by PayPal. You do not need a PayPal account to pay with a debit or credit card.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
