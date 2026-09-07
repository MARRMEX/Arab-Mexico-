import { NavItem, Destination, ServiceItem, WhyChooseItem, ArabicServiceItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about-service' },
  { name: 'How We Can Help', href: '#how-we-help' },
  { name: 'Private Assistance', href: '#private-assistance' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Contact', href: '#contact' },
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'mexico-city',
    title: 'Mexico City',
    subtitle: 'Capital & culture',
    tag: 'Historic & Vibrant',
    imageUrl: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=1200&auto=format&fit=crop',
    altText: 'Palacio de Bellas Artes and historical architecture in Mexico City',
  },
  {
    id: 'oaxaca',
    title: 'Oaxaca',
    subtitle: 'Monte Albán & Heritage',
    tag: 'Zapotec Pyramids & Culture',
    imageUrl: '/monte-alban-oaxaca.jpg',
    altText: 'Ancient Zapotec pyramids and grand plaza of Monte Albán in Oaxaca, Mexico',
  },
  {
    id: 'puebla',
    title: 'Puebla',
    subtitle: 'Colonial elegance',
    tag: 'Cathedrals & Talavera',
    imageUrl: 'https://images.unsplash.com/photo-1568402102990-bc541580b59f?q=80&w=1200&auto=format&fit=crop',
    altText: 'Colonial tiled facades and historic architecture in Puebla, Mexico',
  },
  {
    id: 'caribbean-beaches',
    title: 'Caribbean Beaches',
    subtitle: 'Turquoise paradise',
    tag: 'Riviera Maya & Cancun',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    altText: 'Turquoise ocean waters and white sandy beaches in the Mexican Caribbean',
  },
  {
    id: 'mexican-culture',
    title: 'Mexican Culture',
    subtitle: 'Music & traditions',
    tag: 'Folklore & Festivals',
    imageUrl: '/mexican-culture.jpg',
    altText: 'Traditional Mexican folkloric dance and colorful cultural festival performance',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'local-recommendations',
    title: 'Local Recommendations',
    description: 'Recommendations for places to visit, restaurants, neighborhoods, shopping and local experiences.',
    iconName: 'Compass',
    badge: 'Local Knowledge',
  },
  {
    id: 'personalized-itinerary-guidance',
    title: 'Personalized Itinerary Guidance',
    description: 'Help organizing your days and choosing places that match your interests, schedule and preferences.',
    iconName: 'Calendar',
    badge: 'Tailored Support',
  },
  {
    id: 'transportation-guidance',
    title: 'Transportation Guidance',
    description: 'Practical information and guidance about airports, taxis, buses, private transportation and getting around Mexico.',
    iconName: 'Plane',
    badge: 'Transit Advice',
  },
  {
    id: 'arabic-spanish-assistance',
    title: 'Arabic-Spanish Assistance',
    description: 'Communication support between Arabic and Spanish when you need help understanding or communicating locally.',
    iconName: 'Languages',
    badge: 'Language Support',
  },
  {
    id: 'halal-friendly-recommendations',
    title: 'Halal-Friendly Recommendations',
    description: 'Recommendations for halal-friendly and Muslim-friendly dining options when available.',
    iconName: 'UtensilsCrossed',
    badge: 'Dining Advice',
  },
  {
    id: 'whatsapp-travel-support',
    title: 'WhatsApp Travel Support',
    description: 'Direct communication and practical assistance through WhatsApp before and during your visit.',
    iconName: 'MessageCircle',
    badge: 'Direct Chat',
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'arabic-support',
    title: 'Arabic-Speaking Support',
    description: 'Direct, clear communication in Arabic so you feel completely at ease with zero language barriers throughout your trip planning.',
    iconName: 'Languages',
  },
  {
    id: 'independent-assistance',
    title: 'Independent Assistance',
    description: 'Objective guidance and unbiased recommendations focused exclusively on your interests, with no hidden commercial commissions.',
    iconName: 'Scale',
  },
  {
    id: 'local-knowledge',
    title: 'Local Knowledge',
    description: 'Real insight into Mexican neighborhoods, cultural customs, hidden gems, and practical day-to-day tips.',
    iconName: 'Compass',
  },
  {
    id: 'personalized-attention',
    title: 'Personalized Attention',
    description: 'Help tailored specifically to your travel style, schedule, family preferences, and personal requirements.',
    iconName: 'UserCheck',
  },
  {
    id: 'direct-whatsapp',
    title: 'Direct WhatsApp Communication',
    description: 'Prompt, human assistance directly through WhatsApp whenever you need quick answers before and during your stay.',
    iconName: 'MessageCircle',
  },
  {
    id: 'based-in-mexico',
    title: 'Based in Mexico',
    description: 'Living in Mexico with real-time familiarity of the cities, transport options, and current conditions on the ground.',
    iconName: 'MapPin',
  },
];

export const ARABIC_SERVICES: ArabicServiceItem[] = [
  { id: 'ar-1', title: 'توصيات محلية للأماكن والمطاعم', iconName: 'Compass' },
  { id: 'ar-2', title: 'توجيه وتنظيم الجداول الشخصية', iconName: 'Calendar' },
  { id: 'ar-3', title: 'إرشادات التنقل والمواصلات في المكسيك', iconName: 'Plane' },
  { id: 'ar-4', title: 'مساعدة التواصل بين العربية والإسبانية', iconName: 'Languages' },
  { id: 'ar-5', title: 'توصيات المطاعم المناسبة والحلال', iconName: 'UtensilsCrossed' },
  { id: 'ar-6', title: 'دعم ومساعدة مباشرة عبر واتساب', iconName: 'MessageCircle' },
];

export const FOUNDER_INFO = {
  name: 'Houssame Chajari',
  role: 'Founder & Local Travel Companion',
  quote:
    'I created Arab Mexico Guide to help Arabic-speaking visitors experience Mexico with greater confidence, comfort and cultural understanding.',
  bioSecondParagraph:
    'Rather than operating as a traditional travel agency, Arab Mexico Guide focuses on independent personal assistance, local guidance and Arabic-Spanish communication support. My goal is to make it easier for visitors to navigate Mexico, discover local places and enjoy their trip with reliable human support.',
  stats: [
    { value: '100%', label: 'Arabic Support', description: 'Native Arabic assistance' },
    { value: 'Independent', label: 'Personal Guidance', description: 'No agency commissions' },
    { value: 'Mexico', label: 'Based Locally', description: 'On-the-ground support' },
  ],
};
