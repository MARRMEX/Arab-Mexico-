import React from 'react';
import {
  Sparkles,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Compass,
  Star,
  Hotel,
  Car,
  HeartHandshake
} from 'lucide-react';

const PERSONALIZED_PLAN_WHATSAPP_URL =
  'https://wa.me/525545120473?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%AE%D8%B7%D8%A9%20%D8%B3%D9%81%D8%B1%20%D9%85%D8%AE%D8%B5%D8%B5%D8%A9%20%D9%88%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D9%85%D9%85%D9%8A%D8%B2%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%85%D9%83%D8%B3%D9%8A%D9%83.';

export const PersonalizedPlanning: React.FC = () => {
  return (
    <section
      id="personalized-planning"
      className="py-20 sm:py-28 bg-[#fbf9f5] border-t border-stone-200/80 relative overflow-hidden"
    >
      {/* Subtle decorative background elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Tailored Itineraries &bull; خدمات السفر المميزة والمخصصة</span>
          </div>

          <h2
            id="personalized-planning-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold tracking-tight mb-4 text-emerald-950"
          >
            <span>Personalized Travel Planning &amp; Premium Services </span>
            <span className="text-amber-600">✨</span>
          </h2>

          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Bespoke itineraries, luxury recommendations, and dedicated on-the-ground support tailored specifically for you and your family.
          </p>
        </div>

        {/* Featured Visual Banner Showcase */}
        <div className="max-w-5xl mx-auto mb-14 rounded-3xl overflow-hidden bg-white border border-stone-200/80 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
            {/* Image Side */}
            <div className="md:col-span-5 relative min-h-[260px] md:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1000&auto=format&fit=crop"
                alt="Personalized Luxury Travel in Mexico"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-transparent to-transparent" />
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/40 shadow-md">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>Curated with Arab Travel Preferences in Mind</span>
                </div>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  Privacy, halal dining awareness, and family-oriented pacing.
                </p>
              </div>
            </div>

            {/* Value Highlights Side */}
            <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  Custom Travel Experience
                </span>

                <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-emerald-950 mt-3 mb-3">
                  Tailored to Every Detail of Your Journey
                </h3>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  Whether you are planning a relaxing family vacation, a cultural exploration across colonial gems, or a luxury getaway along the coast, we design each aspect to match your personal vision.
                </p>

                {/* Grid of custom plan elements */}
                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-stone-700 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span className="font-medium">Travel Dates &amp; Pace</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Hotel className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span className="font-medium">Handpicked Accommodations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span className="font-medium">Exclusive Activities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span className="font-medium">Private Transportation</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Banner */}
              <div className="flex items-center justify-between p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200/70 text-xs sm:text-sm text-emerald-950">
                <span className="font-semibold flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-amber-600 shrink-0" />
                  Direct WhatsApp consultation &amp; personal assistance
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bilingual Sales Cards: English & Arabic Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: English Edition */}
          <div
            id="personalized-card-english"
            className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-emerald-700/30 hover:border-emerald-700 shadow-lg flex flex-col justify-between transition-all duration-300 relative"
          >
            <div>
              {/* Badge */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
                  Custom Itinerary Design
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Premium Services
                </span>
              </div>

              {/* English Heading */}
              <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-emerald-950 mb-3">
                Personalized Travel Planning &amp; Premium Services ✨
              </h3>

              {/* Question Subheading */}
              <p className="text-lg sm:text-xl font-bold text-amber-700 font-serif-title mb-4">
                Looking for a trip designed especially for you?
              </p>

              {/* Main English Body Text */}
              <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                <p>
                  We offer personalized travel planning and premium services in Mexico, tailored to your preferences, travel dates, budget, destinations, hotels, activities, transportation, and special requirements.
                </p>
                <p className="font-medium text-emerald-950">
                  Tell us what you need, and we will help you create the right travel experience for you.
                </p>
              </div>

              {/* Key Features Checklist */}
              <div className="space-y-2.5 mb-8 bg-stone-50 p-4 rounded-2xl border border-stone-200/70 text-xs sm:text-sm text-stone-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fully tailored to your budget, travel rhythm &amp; family needs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Top-tier hotel recommendations &amp; private transit advice</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Arabic-Spanish communication support before and during trip</span>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="pt-4 border-t border-stone-100">
              <a
                href={PERSONALIZED_PLAN_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="request-plan-english-btn"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-base sm:text-lg shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-200" />
                <span>REQUEST A PERSONALIZED PLAN</span>
              </a>

              <p className="text-center text-xs text-stone-500 mt-3">
                Opens directly in WhatsApp &bull; Fast, friendly response
              </p>
            </div>
          </div>

          {/* Card 2: Arabic Edition */}
          <div
            id="personalized-card-arabic"
            dir="rtl"
            className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-amber-600/40 hover:border-amber-600 shadow-lg flex flex-col justify-between transition-all duration-300 relative text-right"
          >
            <div>
              {/* Badge */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
                  تصميم خطط سفر مخصصة
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  خدمات متميزة
                </span>
              </div>

              {/* Arabic Heading */}
              <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-emerald-950 mb-3">
                تخطيط رحلة مخصص وخدمات مميزة ✨
              </h3>

              {/* Question Subheading */}
              <p className="text-lg sm:text-xl font-bold text-amber-700 font-serif-title mb-4">
                هل تبحث عن رحلة مصممة خصيصًا لك؟
              </p>

              {/* Main Arabic Body Text */}
              <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                <p>
                  نقدم خدمات تخطيط رحلات مخصصة وخدمات مميزة في المكسيك، وفقًا لاحتياجاتك وتفضيلاتك وتواريخ السفر والميزانية والمدن والفنادق والأنشطة والمواصلات وأي متطلبات خاصة.
                </p>
                <p className="font-medium text-emerald-950">
                  أخبرنا بما تحتاج إليه، وسنساعدك في تصميم تجربة السفر المناسبة لك.
                </p>
              </div>

              {/* Key Features Checklist */}
              <div className="space-y-2.5 mb-8 bg-stone-50 p-4 rounded-2xl border border-stone-200/70 text-xs sm:text-sm text-stone-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>تصميم متكامل يناسب ميزانيتك وتفضيلات عائلتك ووقتك</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>أفضل توصيات الفنادق والمواصلات المريحة والآمنة</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>دعم كامل باللغة العربية والتواصل باللغة الإسبانية طوال رحلتك</span>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="pt-4 border-t border-stone-100">
              <a
                href={PERSONALIZED_PLAN_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="request-plan-arabic-btn"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-800 hover:from-emerald-700 hover:to-emerald-700 active:bg-emerald-900 text-white font-bold text-base sm:text-lg shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-amber-300" />
                <span>اطلب خطة مخصصة</span>
              </a>

              <p className="text-center text-xs text-stone-500 mt-3">
                يفتح محادثة واتساب مباشرة مع رسالة جاهزة &bull; استجابة سريعة
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
