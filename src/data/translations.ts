import { Language } from '../context/LanguageContext';

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    miniGuide: string;
    howWeHelp: string;
    privateAssistance: string;
    howItWorks: string;
    contact: string;
    tagline: string;
    contactWhatsApp: string;
    directAssistance: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleEnd: string;
    subtitle: string;
    desc1: string;
    desc2: string;
    ctaAssistance: string;
    ctaChat: string;
    exploreDestinations: string;
    trust1: string;
    trust2: string;
    trust3: string;
  };
  aboutService: {
    badge: string;
    titleStart: string;
    titleEnd: string;
    p1: string;
    p2: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    calloutBadge: string;
    calloutText: string;
    calloutCta: string;
  };
  discover: {
    badge: string;
    titleStart: string;
    titleEnd: string;
    desc: string;
    ctaExplore: string;
    destinations: Array<{
      id: string;
      title: string;
      subtitle: string;
      tag: string;
    }>;
  };
  miniGuide: {
    badge: string;
    title: string;
    desc: string;
    practicalEdition: string;
    instantDownload: string;
    subheading: string;
    subdesc: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
    benefit4: string;
    priceLabel: string;
    oneTimePayment: string;
    cardEditionLabel: string;
    cardBadgePrice: string;
    cardTitle: string;
    cardP1: string;
    cardP2: string;
    cardHighlightTitle: string;
    ctaHeading: string;
    ctaButton: string;
    buyButton: string;
    valueQuote: string;
    trustPaypal: string;
    trustCards: string;
    bottomNotice: string;
  };
  personalizedPlanning: {
    badge: string;
    titleStart: string;
    titleEnd: string;
    desc: string;
    vipBadge: string;
    bannerTitle: string;
    bannerDesc: string;
    bannerHighlights: string[];
    bannerCta: string;
    whatsAppFast: string;
    features: Array<{
      title: string;
      desc: string;
    }>;
    bottomNote: string;
  };
  services: {
    badge: string;
    titleStart: string;
    titleEnd: string;
    desc: string;
    askAbout: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      badge: string;
    }>;
  };
  privateAssistance: {
    badge: string;
    titleStart: string;
    titleEnd: string;
    subtitle: string;
    desc: string;
    features: string[];
    cardTitle: string;
    cardDesc: string;
    cardBadge: string;
    cardCta: string;
  };
  whyChoose: {
    badge: string;
    titleStart: string;
    titleEnd: string;
    desc: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  howItWorks: {
    badge: string;
    titleStart: string;
    titleEnd: string;
    desc: string;
    supportTitle: string;
    supportSubtitle: string;
    whatWeHelp: string[];
    whatWeDoNotOperateAs: string[];
    notAgencyTitle: string;
    notAgencySubtitle: string;
    independentNote: string;
    ctaNote: string;
    ctaButton: string;
  };
  founder: {
    badge: string;
    role: string;
    quote: string;
    bioSecondParagraph: string;
    tagline: string;
    credential1: string;
    credential2: string;
    credential3: string;
    stats: Array<{
      value: string;
      label: string;
      description: string;
    }>;
    cta: string;
  };
  arabicOverview: {
    badge: string;
    titleStart: string;
    titleEnd: string;
    p1: string;
    p2: string;
    note: string;
    cta: string;
  };
  contact: {
    badge: string;
    titleStart: string;
    titleEnd: string;
    desc: string;
    whatsAppLabel: string;
    directNumber: string;
    copied: string;
    copyNumber: string;
    chatNow: string;
    conversationTopics: string;
    prompts: string[];
    disclaimer: string;
  };
  footer: {
    tagline: string;
    subTagline: string;
    desc: string;
    quickNav: string;
    backToTop: string;
    rights: string;
    independentDisclaimer: string;
  };
  floatingWhatsApp: {
    title: string;
    subtitle: string;
    ariaLabel: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      miniGuide: 'Mexico Mini Travel Guide',
      howWeHelp: 'How We Can Help',
      privateAssistance: 'Private Assistance',
      howItWorks: 'How It Works',
      contact: 'Contact',
      tagline: 'Your Arabic Travel Companion in Mexico',
      contactWhatsApp: 'Contact on WhatsApp',
      directAssistance: 'Direct Assistance:',
    },
    hero: {
      badge: 'Independent Travel Assistance in Mexico',
      titleStart: 'Arab Mexico ',
      titleEnd: 'Guide',
      subtitle: 'Your Arabic Travel Companion in Mexico',
      desc1: 'Independent travel assistance and local guidance for Arabic-speaking visitors exploring Mexico.',
      desc2: 'Personalized support, local recommendations, Arabic-Spanish assistance and practical guidance before and during your trip.',
      ctaAssistance: 'Get Travel Assistance',
      ctaChat: 'Chat on WhatsApp',
      exploreDestinations: 'Explore Mexico',
      trust1: 'Native Arabic & Spanish Support',
      trust2: 'Based in Mexico',
      trust3: '100% Independent Guidance',
    },
    aboutService: {
      badge: 'Independent Travel Assistance',
      titleStart: 'More Than a Guide ',
      titleEnd: 'Your Local Travel Support',
      p1: 'Arab Mexico Guide provides independent, personalized assistance to Arabic-speaking travelers visiting Mexico.',
      p2: 'From understanding local customs and finding suitable places to eat, to navigating transportation and communicating in Spanish, we help make your experience in Mexico easier and more comfortable.',
      pillar1Title: 'Authentic Guidance',
      pillar1Desc: 'Objective recommendations based on real local knowledge, with no commercial bias.',
      pillar2Title: 'Personalized Care',
      pillar2Desc: 'Attention centered purely on your schedule, interests, comfort and family preferences.',
      pillar3Title: 'Language Bridge',
      pillar3Desc: 'Seamless Arabic-Spanish communication assistance to eliminate all barriers.',
      calloutBadge: 'Important Notice',
      calloutText: 'We do not operate as a traditional travel agency, tour operator, or booking platform. We provide personal, independent travel assistance and local guidance.',
      calloutCta: 'Learn more about how we help',
    },
    discover: {
      badge: 'Unforgettable Destinations',
      titleStart: 'Discover ',
      titleEnd: 'Mexico',
      desc: "Mexico is one of the world's most exciting travel destinations — rich culture, historic cities, beautiful beaches, delicious cuisine, ancient archaeological sites, and unforgettable experiences.",
      ctaExplore: 'Ask about visiting',
      destinations: [
        {
          id: 'mexico-city',
          title: 'Mexico City',
          subtitle: 'Capital & culture',
          tag: 'Historic & Vibrant',
        },
        {
          id: 'oaxaca',
          title: 'Oaxaca',
          subtitle: 'Monte Albán & Heritage',
          tag: 'Zapotec Pyramids & Culture',
        },
        {
          id: 'puebla',
          title: 'Puebla',
          subtitle: 'Colonial elegance',
          tag: 'Cathedrals & Talavera',
        },
        {
          id: 'caribbean-beaches',
          title: 'Caribbean Beaches',
          subtitle: 'Turquoise paradise',
          tag: 'Riviera Maya & Cancun',
        },
        {
          id: 'mexican-culture',
          title: 'Mexican Culture',
          subtitle: 'Music & traditions',
          tag: 'Folklore & Festivals',
        },
      ],
    },
    miniGuide: {
      badge: 'Digital Travel Edition • دليل السفر الرقمي',
      title: 'Mexico Mini Travel Guide',
      desc: 'Essential guidance, practical travel tips, and cultural insights crafted specifically for Arab travelers visiting Mexico.',
      practicalEdition: 'PRACTICAL EDITION',
      instantDownload: 'Instant Digital Download (PDF)',
      subheading: 'Everything you need to kickstart your journey',
      subdesc: 'A concise, easy-to-read travel companion designed to answer key questions, recommend safe navigation methods, and highlight culturally welcoming experiences across Mexico.',
      benefit1: 'Essential travel preparation',
      benefit2: 'Transportation & safety tips',
      benefit3: 'Halal-friendly & dining advice',
      benefit4: 'Arabic-friendly local recommendations',
      priceLabel: 'Price:',
      oneTimePayment: 'One-time payment',
      cardEditionLabel: 'English Edition',
      cardBadgePrice: '$19 USD',
      cardTitle: 'Mexico Mini Travel Guide',
      cardP1: 'Plan your trip to Mexico with our practical Mini Travel Guide, created especially for Arab travelers.',
      cardP2: 'Discover essential information and useful recommendations to help you enjoy your trip with confidence.',
      cardHighlightTitle: 'Quick, practical and easy to read on your mobile or tablet',
      ctaHeading: 'Buy your Mexico Mini Travel Guide for $19 USD',
      ctaButton: 'Buy your Mexico Mini Travel Guide for $19 USD',
      buyButton: 'Buy Now',
      valueQuote: 'Investing in this guide is your best insurance for a worry-free travel experience.',
      trustPaypal: 'PayPal Protected',
      trustCards: 'Cards & PayPal',
      bottomNotice: 'All payments are processed securely by PayPal. You do not need a PayPal account to pay with a debit or credit card.',
    },
    personalizedPlanning: {
      badge: 'Tailored Itineraries • خدمات السفر المميزة والمخصصة',
      titleStart: 'Personalized Travel Planning & Premium Services ',
      titleEnd: '✨',
      desc: 'Bespoke itineraries, luxury recommendations, and dedicated on-the-ground support tailored specifically for you and your family.',
      vipBadge: 'VIP BESPOKE SERVICE',
      bannerTitle: 'Custom Travel Experience Designed Around You',
      bannerDesc: 'Planning a trip to Mexico can feel overwhelming when balancing cultural comfort, safe transportation, family-friendly scheduling, and authentic dining. We craft a fully customized day-by-day plan reflecting your exact pace and preferences.',
      bannerHighlights: [
        'Tailored day-by-day itinerary designed for your family & style',
        'Handpicked boutique & luxury hotels matching your comfort',
        'Direct coordination for safe private drivers & transfers',
        'Direct WhatsApp support from an Arabic-speaking companion',
      ],
      bannerCta: 'Request a Custom Travel Plan',
      whatsAppFast: 'Fast response directly on WhatsApp',
      features: [
        {
          title: 'Customized Day-by-Day Itineraries',
          desc: 'Carefully curated schedules matching your exact travel dates, preferred pace, family needs, and personal interests.',
        },
        {
          title: 'Premium Stays & Neighborhood Guidance',
          desc: 'Carefully vetted boutique hotels, private residences, and safe, walkable neighborhoods suitable for Arab travelers.',
        },
        {
          title: 'Private Transportation Coordination',
          desc: 'Guidance and trusted local contacts for airport transfers, private bilingual drivers, and seamless inter-city travel.',
        },
        {
          title: 'Cultural & Dietary Concierge',
          desc: 'Handpicked halal-friendly dining, vegetarian options, respectful cultural experiences, and prayer-friendly spots.',
        },
        {
          title: 'VIP On-Demand WhatsApp Concierge',
          desc: 'Priority real-time guidance before departure and throughout your stay in Mexico for instant peace of mind.',
        },
        {
          title: 'Exclusive In-Person Private Escort',
          desc: 'Specialized Arabic-Spanish in-person guidance and accompaniment available upon request in Oaxaca & Puebla.',
        },
      ],
      bottomNote: 'Every trip is unique. Contact us directly to discuss your travel dates and receive a personalized proposal.',
    },
    services: {
      badge: 'Tailored Travel Assistance',
      titleStart: 'How We ',
      titleEnd: 'Can Help',
      desc: 'Practical, personalized assistance for Arabic-speaking travelers in Mexico.',
      askAbout: 'Ask about this on WhatsApp',
      items: [
        {
          id: 'local-recommendations',
          title: 'Local Recommendations',
          description: 'Recommendations for places to visit, restaurants, neighborhoods, shopping and local experiences.',
          badge: 'Local Knowledge',
        },
        {
          id: 'personalized-itinerary-guidance',
          title: 'Personalized Itinerary Guidance',
          description: 'Help organizing your days and choosing places that match your interests, schedule and preferences.',
          badge: 'Tailored Support',
        },
        {
          id: 'transportation-guidance',
          title: 'Transportation Guidance',
          description: 'Practical information and guidance about airports, taxis, buses, private transportation and getting around Mexico.',
          badge: 'Transit Advice',
        },
        {
          id: 'arabic-spanish-assistance',
          title: 'Arabic-Spanish Assistance',
          description: 'Communication support between Arabic and Spanish when you need help understanding or communicating locally.',
          badge: 'Language Support',
        },
        {
          id: 'halal-friendly-recommendations',
          title: 'Halal-Friendly Recommendations',
          description: 'Recommendations for halal-friendly and Muslim-friendly dining options when available.',
          badge: 'Dining Advice',
        },
        {
          id: 'whatsapp-travel-support',
          title: 'WhatsApp Travel Support',
          description: 'Direct communication and practical assistance through WhatsApp before and during your visit.',
          badge: 'Direct Chat',
        },
      ],
    },
    privateAssistance: {
      badge: 'Independent In-Person Support',
      titleStart: 'Private In-Person ',
      titleEnd: 'Assistance',
      subtitle: 'Personalized local support in Oaxaca and Puebla',
      desc: 'For travelers who prefer personal assistance, we offer independent in-person support and local accompaniment in selected locations.',
      features: [
        'Local orientation',
        'Arabic-Spanish communication assistance',
        'Help navigating the city',
        'Local recommendations',
        'Cultural guidance',
        'Practical travel support',
      ],
      cardTitle: 'Request In-Person Support',
      cardDesc: 'Traveling to Oaxaca or Puebla? Let us know your travel dates and requirements for tailored on-the-ground accompaniment.',
      cardBadge: 'Selected Locations',
      cardCta: 'Inquire About In-Person Support',
    },
    whyChoose: {
      badge: 'Authentic & Independent',
      titleStart: 'Why Choose ',
      titleEnd: 'Arab Mexico Guide?',
      desc: 'We are focused on helping Arabic-speaking visitors feel more comfortable, informed and confident while exploring Mexico.',
      items: [
        {
          id: 'arabic-support',
          title: 'Arabic-Speaking Support',
          description: 'Direct, clear communication in Arabic so you feel completely at ease with zero language barriers throughout your trip planning.',
        },
        {
          id: 'independent-assistance',
          title: 'Independent Assistance',
          description: 'Objective guidance and unbiased recommendations focused exclusively on your interests, with no hidden commercial commissions.',
        },
        {
          id: 'local-knowledge',
          title: 'Local Knowledge',
          description: 'Real insight into Mexican neighborhoods, cultural customs, hidden gems, and practical day-to-day tips.',
        },
        {
          id: 'personalized-attention',
          title: 'Personalized Attention',
          description: 'Help tailored specifically to your travel style, schedule, family preferences, and personal requirements.',
        },
        {
          id: 'direct-whatsapp',
          title: 'Direct WhatsApp Communication',
          description: 'Prompt, human assistance directly through WhatsApp whenever you need quick answers before and during your stay.',
        },
        {
          id: 'based-in-mexico',
          title: 'Based in Mexico',
          description: 'Living in Mexico with real-time familiarity of the cities, transport options, and current conditions on the ground.',
        },
      ],
    },
    howItWorks: {
      badge: 'Clarity & Transparency',
      titleStart: 'How Our ',
      titleEnd: 'Assistance Works',
      desc: 'We believe in complete transparency. We are an independent travel companion and assistance service, not a commercial sales intermediary.',
      supportTitle: 'Our Support',
      supportSubtitle: 'What We Help With',
      whatWeHelp: [
        'Local recommendations',
        'Travel planning guidance',
        'Transportation information',
        'Restaurant recommendations',
        'Arabic-Spanish communication',
        'Local orientation',
        'Personalized travel support',
        'WhatsApp assistance',
        'In-person assistance where available',
      ],
      notAgencyTitle: 'Independence',
      notAgencySubtitle: 'What We Do Not Operate As',
      whatWeDoNotOperateAs: [
        'Travel agency',
        'Tour operator',
        'Airline',
        'Hotel',
        'Booking platform',
      ],
      independentNote: 'Our priority is your comfort, confidence and an authentic experience in Mexico.',
      ctaNote: 'Ready to plan your trip with honest, independent guidance?',
      ctaButton: 'Ask a Question on WhatsApp',
    },
    founder: {
      badge: 'Founder & Companion',
      role: 'Founder & Local Travel Companion',
      quote: 'I created Arab Mexico Guide to help Arabic-speaking visitors experience Mexico with greater confidence, comfort and cultural understanding.',
      bioSecondParagraph: 'Rather than operating as a traditional travel agency, Arab Mexico Guide focuses on independent personal assistance, local guidance and Arabic-Spanish communication support. My goal is to make it easier for visitors to navigate Mexico, discover local places and enjoy their trip with reliable human support.',
      tagline: 'Travel • Culture • Guidance',
      credential1: 'Founder: Houssame Chajari',
      credential2: 'Native Arabic & Spanish Concierge',
      credential3: 'Direct On-The-Ground Assistance',
      stats: [
        { value: '100%', label: 'Arabic Support', description: 'Native Arabic assistance' },
        { value: 'Independent', label: 'Personal Guidance', description: 'No agency commissions' },
        { value: 'Mexico', label: 'Based Locally', description: 'On-the-ground support' },
      ],
      cta: 'Connect Directly with Houssame',
    },
    arabicOverview: {
      badge: 'مساعدة سياحية مستقلة ومرافقة شخصية',
      titleStart: 'دليلك ومساعدك العربي ',
      titleEnd: 'في المكسيك',
      p1: 'نقدم خدمات مساعدة وإرشاد سياحي بشكل مستقل للزوار الناطقين باللغة العربية في المكسيك.',
      p2: 'نساعدك في فهم الأماكن، والمواصلات، والمطاعم المناسبة، والتواصل باللغة الإسبانية، والتخطيط لرحلتك، والحصول على الدعم والمعلومات أثناء زيارتك.',
      note: 'نحن لسنا وكالة سفر، بل نقدم مساعدة وإرشاداً شخصياً ومستقلاً للمسافرين.',
      cta: 'تواصل معنا مباشرة عبر واتساب',
    },
    contact: {
      badge: 'Independent Travel Support',
      titleStart: 'Need Help Planning Your ',
      titleEnd: 'Mexico Experience?',
      desc: 'Reach out directly through WhatsApp. Whether you have quick questions about safety, need recommendations, or want personal accompaniment, we are here to help.',
      whatsAppLabel: 'WhatsApp Direct Contact',
      directNumber: 'Direct number',
      copied: 'Copied!',
      copyNumber: 'Copy number',
      chatNow: 'Chat Now on WhatsApp',
      conversationTopics: 'Start a conversation about:',
      prompts: [
        'General travel assistance',
        'Private assistance in Oaxaca / Puebla',
        'Halal dining recommendations',
        'Transportation & airport advice',
      ],
      disclaimer: 'Independent travel assistance • Direct personal communication • No commercial commissions',
    },
    footer: {
      tagline: 'Your Arabic Travel Companion in Mexico',
      subTagline: 'Independent Travel Assistance & Local Guidance',
      desc: 'Independent travel assistance, local recommendations, and Arabic-Spanish communication support designed specifically for Arabic-speaking travelers exploring Mexico.',
      quickNav: 'Quick Navigation',
      backToTop: 'Back to Top',
      rights: 'All rights reserved.',
      independentDisclaimer: 'Arab Mexico Guide provides independent travel assistance and local guidance. Not a licensed travel agency or commercial booking operator.',
    },
    floatingWhatsApp: {
      title: 'Need travel advice?',
      subtitle: 'Chat directly on WhatsApp in Arabic or English',
      ariaLabel: 'Chat with Arab Mexico Guide on WhatsApp',
    },
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن الخدمة',
      miniGuide: 'الدليل المصغر للمكسيك',
      howWeHelp: 'كيف نساعدك',
      privateAssistance: 'المساعدة الخاصة',
      howItWorks: 'كيف نعمل',
      contact: 'تواصل معنا',
      tagline: 'رفيقك ومساعدك العربي في المكسيك',
      contactWhatsApp: 'تواصل عبر واتساب',
      directAssistance: 'مساعدة مباشرة:',
    },
    hero: {
      badge: 'مساعدة سياحية مستقلة وإرشاد محلي في المكسيك',
      titleStart: 'دليل المكسيك ',
      titleEnd: 'للعرب',
      subtitle: 'رفيقك ومساعدك العربي في المكسيك',
      desc1: 'مساعدة سياحية مستقلة وإرشاد محلي موجه للزوار والمسافرين الناطقين باللغة العربية في المكسيك.',
      desc2: 'دعم مخصص، توصيات محلية، مساعدة في التواصل بين العربية والإسبانية، وإرشادات عملية قبل وخلال رحلتك.',
      ctaAssistance: 'احصل على مساعدة سياحية',
      ctaChat: 'محادثة عبر واتساب',
      exploreDestinations: 'استكشف المكسيك',
      trust1: 'دعم ناطق بالعربية والإسبانية',
      trust2: 'مقيم محلياً في المكسيك',
      trust3: 'إرشاد مستقل بنسبة 100٪',
    },
    aboutService: {
      badge: 'مساعدة سياحية مستقلة',
      titleStart: 'أكثر من مجرد مرشد ',
      titleEnd: 'دعمك السياحي المحلي',
      p1: 'يقدم دليل المكسيك للعرب مساعدة شخصية ومستقلة للمسافرين الناطقين باللغة العربية القادمين إلى المكسيك.',
      p2: 'من فهم العادات المحلية وإيجاد المطاعم المناسبة، إلى تنظيم المواصلات والتواصل باللغة الإسبانية، نساعدك لتكون تجربتك أكثر سهولة وراحة واطمئناناً.',
      pillar1Title: 'إرشاد أصيل وموثوق',
      pillar1Desc: 'توصيات واقعية مبنية على معرفة محلية عميقة، دون أي انحياز أو عمولات تجارية.',
      pillar2Title: 'اهتمام شخصي مخصص',
      pillar2Desc: 'عناية تركز بالكامل على جدولك، واهتماماتك، وراحة عائلتك وخصوصيتكم.',
      pillar3Title: 'جسر للتواصل واللغة',
      pillar3Desc: 'مساعدة متواصلة بين اللغتين العربية والإسبانية لإزالة كافة حواجز التواصل.',
      calloutBadge: 'تنويه هام',
      calloutText: 'نحن لا نعمل كوكالة سفر تقليدية أو منصة حجوزات، بل نقدم خدمة مساعدة شخصية وإرشاداً محلياً مستقلاً.',
      calloutCta: 'تعرف على تفاصيل خدماتنا',
    },
    discover: {
      badge: 'وجهات مكسيكية لا تُنسى',
      titleStart: 'استكشف ',
      titleEnd: 'المكسيك',
      desc: 'تعد المكسيك واحدة من أكثر الوجهات السياحية تنوعاً وإثارة في العالم — ثقافة عريقة، ومدن تاريخية، وشواطئ خلابة، ومأكولات شهية، وآثار تاريخية ساحرة.',
      ctaExplore: 'استفسر عن زيارة هذه الوجهة',
      destinations: [
        {
          id: 'mexico-city',
          title: 'مدينة مكسيكو',
          subtitle: 'العاصمة والثقافة',
          tag: 'تاريخية ونابضة بالحياة',
        },
        {
          id: 'oaxaca',
          title: 'واهاكا (Oaxaca)',
          subtitle: 'مونتي ألبان والتراث',
          tag: 'أهرامات وحضارة الزابوتيك',
        },
        {
          id: 'puebla',
          title: 'بويبلا (Puebla)',
          subtitle: 'أناقة العمارة الاستعمارية',
          tag: 'كاتدرائيات وخزف التالافيرا',
        },
        {
          id: 'caribbean-beaches',
          title: 'شواطئ الكاريبي',
          subtitle: 'المياه الفيروزية الساحرة',
          tag: 'ريفييرا مايا وكانكون',
        },
        {
          id: 'mexican-culture',
          title: 'الثقافة المكسيكية',
          subtitle: 'موسيقى وتقاليد أصيلة',
          tag: 'فلكلور ومهرجانات ملونة',
        },
      ],
    },
    miniGuide: {
      badge: 'Digital Travel Edition • دليل السفر الرقمي',
      title: 'الدليل المصغر للسفر في المكسيك',
      desc: 'إرشادات أساسية، نصائح سفر عملية، ومعلومات ثقافية مصممة خصيصاً للمسافرين العرب إلى المكسيك.',
      practicalEdition: 'إصدار عملي شامل',
      instantDownload: 'تحميل رقمي فوري (PDF)',
      subheading: 'كل ما تحتاجه لبدء رحلتك باطمئنان',
      subdesc: 'دليل سفر موجز وسهل القراءة صُمم للإجابة عن تساؤلاتك الرئيسية، وأفضل طرق التنقل الآمن، وأبرز التجارب الترحيبية في المكسيك.',
      benefit1: 'التحضير الأساسي للرحلة',
      benefit2: 'نصائح الأمان والمواصلات',
      benefit3: 'خيارات الطعام المناسبة والحلال',
      benefit4: 'توصيات محلية ملائمة للعرب',
      priceLabel: 'السعر:',
      oneTimePayment: 'دفع لمرة واحدة',
      cardEditionLabel: 'النسخة العربية',
      cardBadgePrice: '١٩ دولارًا أمريكيًا',
      cardTitle: 'الدليل المصغر للسفر في المكسيك',
      cardP1: 'خطط لرحلتك إلى المكسيك بسهولة مع دليلنا المصغر والعملي، المصمم خصيصًا للمسافرين العرب.',
      cardP2: 'اكتشف معلومات أساسية ونصائح مفيدة تساعدك على الاستمتاع برحلتك إلى المكسيك بثقة.',
      cardHighlightTitle: 'دليل عملي ومباشر سهل القراءة على هاتفك أو جهازك اللوحي',
      ctaHeading: 'اشترِ الدليل المصغر للسفر في المكسيك مقابل ١٩ دولارًا',
      ctaButton: 'اشترِ الدليل المصغر للسفر في المكسيك مقابل ١٩ دولارًا',
      buyButton: 'اشترِ الآن',
      valueQuote: 'الاستثمار في هذا الدليل هو أفضل تأمين لرحلة خالية من المتاعب.',
      trustPaypal: 'دفع محمي عبر PayPal',
      trustCards: 'بطاقات بنكية وPayPal',
      bottomNotice: 'تتم جميع المدفوعات بأمان عبر PayPal. لا تحتاج إلى حساب PayPal للدفع ببطاقة الخصم أو الائتمان.',
    },
    personalizedPlanning: {
      badge: 'Tailored Itineraries • خدمات السفر المميزة والمخصصة',
      titleStart: 'تخطيط سفر مخصص وخدمات مميزة ',
      titleEnd: '✨',
      desc: 'جداول سفر مفصلة، وتوصيات راقية، ودعم ميداني مستمر مصمم خصيصاً لك ولعائلتك.',
      vipBadge: 'خدمة مخصصة لكبار الشخصيات',
      bannerTitle: 'تجربة سفر مصممة بدقة حول اهتماماتك',
      bannerDesc: 'قد يبدو التخطيط لرحلة إلى المكسيك معقداً عند مراعاة الراحة الثقافية، وسلامة المواصلات، وجدول العائلة، والمطاعم المناسبة. نحن نصنع لك برنامجاً يومياً متكاملاً يعكس وتيرتك المفضلة بدقة.',
      bannerHighlights: [
        'برنامج يومي مخصص ومفصل وفق أسلوبك واحتياجات عائلتك',
        'اختيار فنادق فاخرة ومريحة تم فحصها بعناية',
        'تنسيق مباشر لسائقين وسيارات خاصة آمنة وموثوقة',
        'دعم متواصل ومباشر عبر واتساب من رفيق يتحدث العربية',
      ],
      bannerCta: 'اطلب خطة سفر مخصصة',
      whatsAppFast: 'استجابة سريعة ومباشرة عبر واتساب',
      features: [
        {
          title: 'جداول سفر يومية مخصصة',
          desc: 'برامج تم إعدادها بعناية لتناسب مواعيد سفرك، وسرعتك المفضلة، واحتياجات أسرتك، واهتماماتك الخاصة.',
        },
        {
          title: 'إرشادات الإقامة والأحياء الآمنة',
          desc: 'ترشيحات لفنادق راقية وأحياء آمنة وممتعة للمشي تتناسب تماماً مع راحة العائلات والمسافرين العرب.',
        },
        {
          title: 'تنسيق المواصلات الخاصة',
          desc: 'إرشادات ومعارف محلية موثوقة للاستقبال من المطار وتوفير سيارات خاصة وسائقين معتمدين بين المدن.',
        },
        {
          title: 'عناية بالخيارات الغذائية والثقافية',
          desc: 'ترشيحات لمطاعم حلال وخيارات نبائية، وأماكن مناسبة للصلاة، وتجارب ثقافية محترمة وممتعة.',
        },
        {
          title: 'خدمة كونسيرج فورية عبر واتساب',
          desc: 'إرشاد ودعم مباشر على مدار الساعة قبل الإقلاع وخلال تواجدك في المكسيك لراحة بال تامة.',
        },
        {
          title: 'مرافقة خاصة وشخصية عند الطلب',
          desc: 'مرافقة سياحية وتواصل ثنائي بين العربية والإسبانية متوفر في مدينتي واهاكا وبويبلا.',
        },
      ],
      bottomNote: 'كل رحلة لها خصوصيتها. تواصل معنا لمناقشة مواعيد سفرك والحصول على مقترح مخصص لك.',
    },
    services: {
      badge: 'مساعدة سياحية مخصصة',
      titleStart: 'كيف يمكننا ',
      titleEnd: 'مساعدتك؟',
      desc: 'مساعدة عملية ومخصصة للمسافرين الناطقين باللغة العربية في المكسيك.',
      askAbout: 'استفسر عن هذه الخدمة عبر واتساب',
      items: [
        {
          id: 'local-recommendations',
          title: 'توصيات محلية للأماكن والمطاعم',
          description: 'توصيات بأفضل الأماكن للزيارة، والمطاعم، والأحياء، والتسوق، والتجارب المحلية الأصيلة.',
          badge: 'معرفة محلية',
        },
        {
          id: 'personalized-itinerary-guidance',
          title: 'توجيه وتنظيم الجداول الشخصية',
          description: 'مساعدتك في تنظيم أيامك واختيار الوجهات التي تتناسب مع اهتماماتك وجدولك وتفضيلاتك.',
          badge: 'دعم مخصص',
        },
        {
          id: 'transportation-guidance',
          title: 'إرشادات التنقل والمواصلات في المكسيك',
          description: 'معلومات عملية وتوجيهات حول المطارات، وسيارات الأجرة، والحافلات، والمواصلات الخاصة للتنقل بأمان.',
          badge: 'نصائح التنقل',
        },
        {
          id: 'arabic-spanish-assistance',
          title: 'مساعدة التواصل بين العربية والإسبانية',
          description: 'دعم لغوي مباشر لتسهيل التفاهم مع السكان المحليين والفنادق والخدمات بدون حواجز لغوية.',
          badge: 'دعم لغوي',
        },
        {
          id: 'halal-friendly-recommendations',
          title: 'توصيات المطاعم المناسبة والحلال',
          description: 'ترشيحات لأفضل خيارات الطعام الصديقة للمسلمين والأطعمة الحلال والخيارات البحرية والنباتية.',
          badge: 'إرشاد غذائي',
        },
        {
          id: 'whatsapp-travel-support',
          title: 'دعم ومساعدة مباشرة عبر واتساب',
          description: 'تواصل مباشر ومساعدة فورية عبر تطبيق واتساب للإجابة عن استفساراتك قبل وخلال الرحلة.',
          badge: 'محادثة مباشرة',
        },
      ],
    },
    privateAssistance: {
      badge: 'مرافقة ومساعدة شخصية مستقلة',
      titleStart: 'مساعدة ومرافقة ',
      titleEnd: 'خاصة ومباشرة',
      subtitle: 'دعم ميداني شخصي في مدينتي واهاكا وبويبلا',
      desc: 'للمسافرين الذين يفضلون وجود مرافق شخصي، نقدم خدمة المرافقة الميدانية والمساعدة الشخصية المستقلة في مدن محددة.',
      features: [
        'توجيه واستكشاف محلي',
        'مساعدة في التواصل بين العربية والإسبانية',
        'مساعدة في التنقل بالمدينة بأمان',
        'توصيات محلية حصرية',
        'إرشادات ثقافية ونمط الحياة',
        'دعم عملي مباشر طوال اليوم',
      ],
      cardTitle: 'طلب مرافقة شخصية',
      cardDesc: 'هل تخطط لزيارة واهاكا أو بويبلا؟ شاركنا مواعيد سفرك واحتياجاتك لترتيب مرافقة ميدانية مخصصة لك.',
      cardBadge: 'وجهات مختارة',
      cardCta: 'استفسر عن المرافقة الميدانية',
    },
    whyChoose: {
      badge: 'أصيل ومستقل',
      titleStart: 'لماذا تختار ',
      titleEnd: 'دليل المكسيك للعرب؟',
      desc: 'هدفنا الأساسي هو مساعدة الزوار العرب ليشعروا بمزيد من الراحة والأمان والثقة أثناء استكشاف المكسيك.',
      items: [
        {
          id: 'arabic-support',
          title: 'دعم كامل باللغة العربية',
          description: 'تواصل مباشر وواضح بلغتك الأم لتشعر بالراحة التامة وتتخلص من أي عائق لغوي أثناء تخطيط رحلتك.',
        },
        {
          id: 'independent-assistance',
          title: 'مساعدة مستقلة ومحايدة',
          description: 'إرشادات وتوصيات موضوعية تركز حصرياً على مصلحتك وراحتك دون أي عمولات تجارية خفية.',
        },
        {
          id: 'local-knowledge',
          title: 'معرفة محلية حقيقية',
          description: 'فهم عميق للأحياء المكسيكية والعادات الثقافية والأماكن الخفية والنصائح اليومية الثمينة.',
        },
        {
          id: 'personalized-attention',
          title: 'عناية شخصية فائقة',
          description: 'خدمات مصممة ومفصلة خصيصاً لتناسب وتيرة سفرك، وجدولك، واحتياجات عائلتك الخاصة.',
        },
        {
          id: 'direct-whatsapp',
          title: 'تواصل مباشر وسريع عبر واتساب',
          description: 'استجابة إنسانية سريعة عبر واتساب كلما احتجت إلى إجابات فورية قبل وخلال تواجدك في المكسيك.',
        },
        {
          id: 'based-in-mexico',
          title: 'مقيم وموجود في المكسيك',
          description: 'إقامة فعلية في المكسيك مع معرفة يومية محدثة بالمدن والمواصلات والأوضاع الميدانية.',
        },
      ],
    },
    howItWorks: {
      badge: 'وضوح وشفافية كاملة',
      titleStart: 'كيف تعمل ',
      titleEnd: 'خدماتنا؟',
      desc: 'نؤمن بالشفافية المطلقة. نحن خدمة رفيق ومساعد سياحي مستقل، ولسنا وسيطاً تجارياً أو وكالة سفر ربحية.',
      supportTitle: 'ما نقدمه',
      supportSubtitle: 'الأمور التي نساعدك بها',
      whatWeHelp: [
        'توصيات محلية للأماكن والمزارات',
        'توجيه وإرشادات تخطيط الرحلات',
        'معلومات ونصائح المواصلات',
        'توصيات المطاعم المناسبة',
        'التواصل بين اللغتين العربية والإسبانية',
        'توجيه واستكشاف ميداني',
        'دعم ومرافقة شخصية مخصصة',
        'مساعدة مستمرة عبر واتساب',
        'مرافقة شخصية عند التواجد في مدن معينة',
      ],
      notAgencyTitle: 'الاستقلالية',
      notAgencySubtitle: 'ما لا نعمل به (لسنا)',
      whatWeDoNotOperateAs: [
        'وكالة سفر تقليدية',
        'شركة تنظيم جولات سياحية',
        'شركة طيران',
        'فندق أو منتجع',
        'منصة حجز تذاكر',
      ],
      independentNote: 'أولويتنا الأولى هي راحتك وثقتك وخوض تجربة سفر مكسيكية أصيلة وممتعة.',
      ctaNote: 'هل أنت جاهز لتخطيط رحلتك مع إرشاد صادق ومستقل؟',
      ctaButton: 'اطرح سؤالك عبر واتساب',
    },
    founder: {
      badge: 'المؤسس والرفيق المحلي',
      role: 'المؤسس والرفيق السياحي المحلي',
      quote: 'أنشأت دليل المكسيك للعرب لمساعدة الزوار الناطقين بالعربية على خوض تجربة السفر في المكسيك بثقة أكبر وراحة تامة وفهم ثقافي أعمق.',
      bioSecondParagraph: 'بدلاً من العمل كوكالة سفر تجارية، يركز دليل المكسيك للعرب على المساعدة الشخصية المستقلة، والتوجيه المحلي، والدعم اللغوي بين العربية والإسبانية. هدفي هو تيسير تنقل الزوار، واكتشاف الأماكن الأصيلة، والاستمتاع برحلتهم مع دعم إنساني موثوق.',
      tagline: 'سياحة • ثقافة • إرشاد',
      credential1: 'المؤسس: حسام شجري (Houssame Chajari)',
      credential2: 'مساعد وكونسيرج عربي-إسباني مقيم',
      credential3: 'مساعدة مباشرة وميدانية في المكسيك',
      stats: [
        { value: '100٪', label: 'دعم عربي', description: 'مساعدة بلغتك الأم' },
        { value: 'مستقل', label: 'إرشاد شخصي', description: 'بدون عمولات وكالات' },
        { value: 'المكسيك', label: 'إقامة محلية', description: 'دعم ميداني واقعي' },
      ],
      cta: 'تواصل مباشرة مع حسام',
    },
    arabicOverview: {
      badge: 'مساعدة سياحية مستقلة ومرافقة شخصية',
      titleStart: 'دليلك ومساعدك العربي ',
      titleEnd: 'في المكسيك',
      p1: 'نقدم خدمات مساعدة وإرشاد سياحي بشكل مستقل للزوار الناطقين باللغة العربية في المكسيك.',
      p2: 'نساعدك في فهم الأماكن، والمواصلات، والمطاعم المناسبة، والتواصل باللغة الإسبانية، والتخطيط لرحلتك، والحصول على الدعم والمعلومات أثناء زيارتك.',
      note: 'نحن لسنا وكالة سفر، بل نقدم مساعدة وإرشاداً شخصياً ومستقلاً للمسافرين.',
      cta: 'تواصل معنا مباشرة عبر واتساب',
    },
    contact: {
      badge: 'دعم سياحي مستقل',
      titleStart: 'هل تحتاج مساعدة في التخطيط لرحلتك إلى ',
      titleEnd: 'المكسيك؟',
      desc: 'تواصل معنا مباشرة عبر واتساب. سواء كانت لديك أسئلة سريعة حول الأمان والمواصلات، أو تبحث عن توصيات، أو ترغب في مرافقة خاصة، فنحن هنا لمساعدتك.',
      whatsAppLabel: 'تواصل مباشر عبر واتساب',
      directNumber: 'الرقم المباشر',
      copied: 'تم النسخ!',
      copyNumber: 'نسخ الرقم',
      chatNow: 'تحدث الآن عبر واتساب',
      conversationTopics: 'ابدأ محادثتك حول:',
      prompts: [
        'مساعدة سياحية عامة',
        'مرافقة خاصة في واهاكا أو بويبلا',
        'توصيات المطاعم المناسبة والحلال',
        'نصائح المواصلات والمطارات',
      ],
      disclaimer: 'مساعدة سياحية مستقلة • تواصل شخصي مباشر • بدون أي عمولات تجارية',
    },
    footer: {
      tagline: 'رفيقك ومساعدك العربي في المكسيك',
      subTagline: 'مساعدة سياحية مستقلة وإرشاد محلي موثوق',
      desc: 'مساعدة سياحية مستقلة وتوصيات محلية ودعم لغوي بين العربية والإسبانية مصمم خصيصاً للمسافرين الناطقين بالعربية في المكسيك.',
      quickNav: 'روابط سريعة',
      backToTop: 'العودة للأعلى',
      rights: 'جميع الحقوق محفوظة.',
      independentDisclaimer: 'يقدم دليل المكسيك للعرب مساعدة سياحية مستقلة وإرشاداً محلياً. لسنا وكالة سفر مرخصة أو منصة حجوزات تجارية.',
    },
    floatingWhatsApp: {
      title: 'هل تحتاج نصائح سفر؟',
      subtitle: 'تحدث معنا مباشرة عبر واتساب باللغة العربية أو الإنجليزية',
      ariaLabel: 'محادثة عبر واتساب مع دليل المكسيك للعرب',
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      miniGuide: 'Mexico Mini Travel Guide',
      howWeHelp: 'Cómo Ayudamos',
      privateAssistance: 'Asistencia Privada',
      howItWorks: 'Cómo Funciona',
      contact: 'Contacto',
      tagline: 'Tu Acompañante de Viaje en México',
      contactWhatsApp: 'Contactar por WhatsApp',
      directAssistance: 'Asistencia Directa:',
    },
    hero: {
      badge: 'Asistencia Independiente de Viaje en México',
      titleStart: 'Arab Mexico ',
      titleEnd: 'Guide',
      subtitle: 'Tu Acompañante de Viaje en México',
      desc1: 'Asistencia de viaje independiente y orientación local para visitantes de habla árabe que exploran México.',
      desc2: 'Apoyo personalizado, recomendaciones locales, asistencia árabe-español y orientación práctica antes y durante tu viaje.',
      ctaAssistance: 'Obtener Asistencia de Viaje',
      ctaChat: 'Chatear por WhatsApp',
      exploreDestinations: 'Explorar México',
      trust1: 'Atención Nativa en Árabe y Español',
      trust2: 'Establecidos en México',
      trust3: 'Orientación 100% Independiente',
    },
    aboutService: {
      badge: 'Asistencia de Viaje Independiente',
      titleStart: 'Más que una Guía ',
      titleEnd: 'Tu Apoyo Local de Viaje',
      p1: 'Arab Mexico Guide ofrece asistencia personalizada e independiente a viajeros de habla árabe que visitan México.',
      p2: 'Desde entender las costumbres locales y encontrar opciones gastronómicas adecuadas, hasta coordinar traslados y comunicarse en español, facilitamos una experiencia cómoda, segura y enriquecedora.',
      pillar1Title: 'Orientación Auténtica',
      pillar1Desc: 'Recomendaciones objetivas basadas en conocimiento local real, sin sesgos comerciales.',
      pillar2Title: 'Atención Personalizada',
      pillar2Desc: 'Atención centrada exclusivamente en tus horarios, intereses, confort y preferencias familiares.',
      pillar3Title: 'Puente Lingüístico',
      pillar3Desc: 'Asistencia de comunicación fluida entre el árabe y el español para eliminar cualquier barrera.',
      calloutBadge: 'Aviso Importante',
      calloutText: 'No operamos como agencia de viajes tradicional, operador turístico ni plataforma de reservas. Brindamos asistencia personal independiente y orientación local.',
      calloutCta: 'Conoce más sobre cómo te ayudamos',
    },
    discover: {
      badge: 'Destinos Inolvidables',
      titleStart: 'Descubre ',
      titleEnd: 'México',
      desc: 'México es uno de los destinos más fascinantes del mundo: cultura milenaria, ciudades coloniales, playas paradisíacas, exquisita gastronomía y sitios arqueológicos únicos.',
      ctaExplore: 'Consultar sobre este destino',
      destinations: [
        {
          id: 'mexico-city',
          title: 'Ciudad de México',
          subtitle: 'Capital y cultura',
          tag: 'Histórica y Vibrante',
        },
        {
          id: 'oaxaca',
          title: 'Oaxaca',
          subtitle: 'Monte Albán y Tradición',
          tag: 'Pirámides Zapotecas y Cultura',
        },
        {
          id: 'puebla',
          title: 'Puebla',
          subtitle: 'Elegancia colonial',
          tag: 'Catedrales y Talavera',
        },
        {
          id: 'caribbean-beaches',
          title: 'Playas del Caribe',
          subtitle: 'Paraíso turquesa',
          tag: 'Riviera Maya y Cancún',
        },
        {
          id: 'mexican-culture',
          title: 'Cultura Mexicana',
          subtitle: 'Música y tradiciones',
          tag: 'Folclor y Festivales',
        },
      ],
    },
    miniGuide: {
      badge: 'Digital Travel Edition • دليل السفر الرقمي',
      title: 'Mexico Mini Travel Guide',
      desc: 'Orientación esencial, consejos prácticos de viaje y perspectivas culturales creadas especialmente para viajeros árabes que visitan México.',
      practicalEdition: 'EDICIÓN PRÁCTICA',
      instantDownload: 'Descarga Digital Inmediata (PDF)',
      subheading: 'Todo lo que necesitas para iniciar tu viaje',
      subdesc: 'Un compañero de viaje conciso y fácil de leer, diseñado para responder dudas clave, recomendar rutas seguras y resaltar experiencias cálidas y respetuosas en México.',
      benefit1: 'Preparación esencial del viaje',
      benefit2: 'Consejos de transporte y seguridad',
      benefit3: 'Opciones halal y recomendaciones culinarias',
      benefit4: 'Recomendaciones locales amigables con viajeros árabes',
      priceLabel: 'Precio:',
      oneTimePayment: 'Pago único',
      cardEditionLabel: 'Edición en Español',
      cardBadgePrice: '$19 USD',
      cardTitle: 'Mexico Mini Travel Guide',
      cardP1: 'Planifica tu viaje a México con nuestra práctica Mini Guía de Viaje, creada especialmente para viajeros de habla árabe.',
      cardP2: 'Descubre información indispensable y sugerencias útiles para disfrutar de tu viaje con total tranquilidad.',
      cardHighlightTitle: 'Rápida, práctica y fácil de leer en tu móvil o tableta',
      ctaHeading: 'Compra tu Mini Guía de Viaje a México por $19 USD',
      ctaButton: 'Compra tu Mini Guía de Viaje a México por $19 USD',
      buyButton: 'Comprar ahora',
      valueQuote: 'Invertir en esta guía es tu mejor seguro para un viaje tranquilo y sin contratiempos.',
      trustPaypal: 'Protegido por PayPal',
      trustCards: 'Tarjetas y PayPal',
      bottomNotice: 'Todos los pagos se procesan de manera segura a través de PayPal. No necesitas cuenta PayPal para pagar con tarjeta de débito o crédito.',
    },
    personalizedPlanning: {
      badge: 'Tailored Itineraries • servicios personalizados',
      titleStart: 'Planificación de Viajes a Medida y Servicios Premium ',
      titleEnd: '✨',
      desc: 'Itinerarios a medida, recomendaciones exclusivas y acompañamiento local dedicado para ti y tu familia.',
      vipBadge: 'SERVICIO VIP PERSONALIZADO',
      bannerTitle: 'Experiencia de Viaje Diseñada Exclusivamente para Ti',
      bannerDesc: 'Organizar un viaje a México puede resultar abrumador al coordinar comodidad cultural, seguridad en traslados, horarios familiares y opciones gastronómicas adecuadas. Creamos un plan día a día totalmente adaptado a tu ritmo y preferencias.',
      bannerHighlights: [
        'Itinerario día a día diseñado según tu estilo y familia',
        'Hoteles boutique y de lujo seleccionados para tu confort',
        'Coordinación directa de transporte y choferes privados confiables',
        'Asistencia directa por WhatsApp de un acompañante que habla árabe',
      ],
      bannerCta: 'Solicitar un Plan de Viaje Personalizado',
      whatsAppFast: 'Respuesta rápida directamente por WhatsApp',
      features: [
        {
          title: 'Itinerarios Día a Día a Medida',
          desc: 'Programas diseñados minuciosamente para ajustarse a tus fechas, ritmo preferido, necesidades familiares e intereses.',
        },
        {
          title: 'Alojamiento Premium y Barrios Seguros',
          desc: 'Selección de hoteles boutique, residencias privadas y zonas seguras y agradables para caminar.',
        },
        {
          title: 'Coordinación de Transporte Privado',
          desc: 'Orientación y contactos confiables para traslados desde aeropuertos y choferes bilingües privados entre ciudades.',
        },
        {
          title: 'Conserjería Cultural y Gastronómica',
          desc: 'Selección de gastronomía halal-friendly, opciones vegetarianas, lugares para orar y experiencias culturales enriquecedoras.',
        },
        {
          title: 'Conserjería VIP en Vivo por WhatsApp',
          desc: 'Orientación prioritaria en tiempo real antes de salir y durante toda tu estadía en México para tu total tranquilidad.',
        },
        {
          title: 'Acompañamiento Privado Exclusivo',
          desc: 'Asistencia y acompañamiento presencial con apoyo en árabe y español disponible a solicitud en Oaxaca y Puebla.',
        },
      ],
      bottomNote: 'Cada viaje es único. Contáctanos directamente para comentar tus fechas y recibir una propuesta personalizada.',
    },
    services: {
      badge: 'Asistencia de Viaje Personalizada',
      titleStart: 'Cómo Podemos ',
      titleEnd: 'Ayudarte',
      desc: 'Asistencia práctica y personalizada para visitantes de habla árabe en México.',
      askAbout: 'Preguntar sobre esto en WhatsApp',
      items: [
        {
          id: 'local-recommendations',
          title: 'Recomendaciones Locales',
          description: 'Sugerencias de lugares para visitar, restaurantes, barrios, compras y experiencias culturales auténticas.',
          badge: 'Conocimiento Local',
        },
        {
          id: 'personalized-itinerary-guidance',
          title: 'Orientación de Itinerarios a Medida',
          description: 'Apoyo para organizar tus días y elegir lugares que se adapten a tus intereses, horarios y preferencias.',
          badge: 'Soporte Personalizado',
        },
        {
          id: 'transportation-guidance',
          title: 'Orientación de Transporte',
          description: 'Información práctica y consejos sobre aeropuertos, taxis, autobuses y transporte privado para moverte con seguridad.',
          badge: 'Consejos de Traslado',
        },
        {
          id: 'arabic-spanish-assistance',
          title: 'Asistencia Árabe-Español',
          description: 'Soporte de comunicación entre el árabe y el español cuando necesites entender o comunicarte localmente sin barreras.',
          badge: 'Soporte de Idioma',
        },
        {
          id: 'halal-friendly-recommendations',
          title: 'Recomendaciones Halal-Friendly',
          description: 'Opciones de comida aptas para musulmanes, restaurantes halal, alternativas vegetarianas y de mariscos.',
          badge: 'Guía Gastronómica',
        },
        {
          id: 'whatsapp-travel-support',
          title: 'Soporte de Viaje por WhatsApp',
          description: 'Comunicación directa y asistencia práctica a través de WhatsApp antes y durante tu estancia.',
          badge: 'Chat Directo',
        },
      ],
    },
    privateAssistance: {
      badge: 'Acompañamiento Presencial Independiente',
      titleStart: 'Asistencia Privada ',
      titleEnd: 'en Persona',
      subtitle: 'Apoyo local personalizado en Oaxaca y Puebla',
      desc: 'Para viajeros que prefieren atención personalizada en el destino, ofrecemos acompañamiento en persona y apoyo local independiente en ubicaciones seleccionadas.',
      features: [
        'Orientación local',
        'Asistencia de comunicación árabe-español',
        'Ayuda para desplazarse por la ciudad',
        'Recomendaciones locales exclusivas',
        'Orientación cultural',
        'Apoyo práctico de viaje',
      ],
      cardTitle: 'Solicitar Acompañamiento en Persona',
      cardDesc: '¿Viajas a Oaxaca o Puebla? Comparte tus fechas y requerimientos para organizar un acompañamiento adaptado a tu medida.',
      cardBadge: 'Ubicaciones Seleccionadas',
      cardCta: 'Consultar sobre Acompañamiento Presencial',
    },
    whyChoose: {
      badge: 'Auténtico e Independiente',
      titleStart: '¿Por Qué Elegir ',
      titleEnd: 'Arab Mexico Guide?',
      desc: 'Nos dedicamos a que los visitantes de habla árabe se sientan cómodos, informados y seguros mientras descubren México.',
      items: [
        {
          id: 'arabic-support',
          title: 'Atención en Árabe',
          description: 'Comunicación directa y clara en árabe para que disfrutes de tu viaje sin ninguna barrera de idioma.',
        },
        {
          id: 'independent-assistance',
          title: 'Asistencia Independiente',
          description: 'Orientación objetiva y recomendaciones enfocadas exclusivamente en tus intereses, sin comisiones comerciales ocultas.',
        },
        {
          id: 'local-knowledge',
          title: 'Conocimiento Local Real',
          description: 'Comprensión profunda de los barrios, costumbres mexicanas, joyas ocultas y consejos prácticos del día a día.',
        },
        {
          id: 'personalized-attention',
          title: 'Atención Personalizada',
          description: 'Apoyo adaptado específicamente a tu estilo de viaje, tiempos, preferencias familiares y requerimientos personales.',
        },
        {
          id: 'direct-whatsapp',
          title: 'Comunicación Directa por WhatsApp',
          description: 'Respuesta humana y ágil a través de WhatsApp siempre que necesites resolver dudas antes o durante tu estadía.',
        },
        {
          id: 'based-in-mexico',
          title: 'Establecidos en México',
          description: 'Residencia en México con conocimiento al día de ciudades, rutas de transporte y condiciones en el terreno.',
        },
      ],
    },
    howItWorks: {
      badge: 'Claridad y Transparencia',
      titleStart: 'Cómo Funciona ',
      titleEnd: 'Nuestra Asistencia',
      desc: 'Creemos en la total transparencia. Somos un servicio de acompañamiento y asistencia de viaje independiente, no un intermediario comercial de ventas.',
      supportTitle: 'Nuestro Apoyo',
      supportSubtitle: 'En Qué Te Ayudamos',
      whatWeHelp: [
        'Recomendaciones locales',
        'Orientación para planificar tu viaje',
        'Información sobre transporte',
        'Recomendaciones de restaurantes',
        'Comunicación árabe-español',
        'Orientación local en destino',
        'Apoyo de viaje personalizado',
        'Asistencia por WhatsApp',
        'Acompañamiento presencial donde esté disponible',
      ],
      notAgencyTitle: 'Independencia',
      notAgencySubtitle: 'Lo Que No Somos',
      whatWeDoNotOperateAs: [
        'Agencia de viajes tradicional',
        'Operador de tours',
        'Aerolínea',
        'Hotel',
        'Plataforma de reservas',
      ],
      independentNote: 'Nuestra prioridad es tu confort, seguridad y que vivas una experiencia mexicana auténtica.',
      ctaNote: '¿Listo para planificar tu viaje con orientación honesta e independiente?',
      ctaButton: 'Hacer una Pregunta por WhatsApp',
    },
    founder: {
      badge: 'Fundador y Acompañante',
      role: 'Fundador y Acompañante Local de Viaje',
      quote: 'Creé Arab Mexico Guide para ayudar a los visitantes de habla árabe a experimentar México con mayor confianza, tranquilidad y comprensión cultural.',
      bioSecondParagraph: 'En lugar de operar como una agencia de viajes comercial, Arab Mexico Guide se enfoca en asistencia personal independiente, orientación local y apoyo lingüístico árabe-español. Mi objetivo es facilitar que los viajeros recorran México, descubran lugares auténticos y disfruten de su viaje con un respaldo humano confiable.',
      tagline: 'Viajes • Cultura • Orientación',
      credential1: 'Fundador: Houssame Chajari',
      credential2: 'Conserje Bilingüe Árabe y Español',
      credential3: 'Asistencia Directa en México',
      stats: [
        { value: '100%', label: 'Soporte en Árabe', description: 'Atención nativa en tu idioma' },
        { value: 'Independiente', label: 'Guía Personal', description: 'Sin comisiones de agencias' },
        { value: 'México', label: 'Basados Localmente', description: 'Apoyo real en el terreno' },
      ],
      cta: 'Contactar Directamente con Houssame',
    },
    arabicOverview: {
      badge: 'مساعدة سياحية مستقلة ومرافقة شخصية',
      titleStart: 'دليلك ومساعدك العربي ',
      titleEnd: 'في المكسيك',
      p1: 'نقدم خدمات مساعدة وإرشاد سياحي بشكل مستقل للزوار الناطقين باللغة العربية في المكسيك.',
      p2: 'نساعدك في فهم الأماكن، والمواصلات، والمطاعم المناسبة، والتواصل باللغة الإسبانية، والتخطيط لرحلتك، والحصول على الدعم والمعلومات أثناء زيارتك.',
      note: 'نحن لسنا وكالة سفر، بل نقدم مساعدة وإرشاداً شخصياً ومستقلاً للمسافرين.',
      cta: 'تواصل معنا مباشرة عبر واتساب',
    },
    contact: {
      badge: 'Apoyo de Viaje Independiente',
      titleStart: '¿Necesitas Ayuda para Planificar tu Experiencia en ',
      titleEnd: 'México?',
      desc: 'Contáctanos directamente por WhatsApp. Ya sea que tengas preguntas sobre seguridad, necesites recomendaciones o desees acompañamiento presencial, estamos listos para ayudarte.',
      whatsAppLabel: 'Contacto Directo por WhatsApp',
      directNumber: 'Número directo',
      copied: '¡Copiado!',
      copyNumber: 'Copiar número',
      chatNow: 'Chatear Ahora por WhatsApp',
      conversationTopics: 'Inicia una conversación sobre:',
      prompts: [
        'Asistencia general de viaje',
        'Asistencia privada en Oaxaca / Puebla',
        'Recomendaciones de comida halal',
        'Consejos de transporte y aeropuertos',
      ],
      disclaimer: 'Asistencia de viaje independiente • Comunicación personal directa • Sin comisiones comerciales',
    },
    footer: {
      tagline: 'Tu Acompañante de Viaje en México',
      subTagline: 'Asistencia Independiente de Viaje y Orientación Local',
      desc: 'Asistencia independiente de viaje, recomendaciones locales y apoyo de comunicación árabe-español diseñado específicamente para viajeros de habla árabe en México.',
      quickNav: 'Navegación Rápida',
      backToTop: 'Volver Arriba',
      rights: 'Todos los derechos reservados.',
      independentDisclaimer: 'Arab Mexico Guide ofrece asistencia de viaje independiente y orientación local. No es una agencia de viajes comercial ni plataforma de reservas.',
    },
    floatingWhatsApp: {
      title: '¿Necesitas consejos de viaje?',
      subtitle: 'Chatea directamente por WhatsApp en árabe, inglés o español',
      ariaLabel: 'Chatear con Arab Mexico Guide por WhatsApp',
    },
  },
};
