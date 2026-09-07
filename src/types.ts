export interface NavItem {
  name: string;
  href: string;
}

export interface Destination {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  altText: string;
  tag: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Compass' | 'Building2' | 'Plane' | 'UtensilsCrossed' | 'Languages' | 'MessageCircle' | 'Calendar' | 'Car' | 'MapPin';
  badge?: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Languages' | 'MapPin' | 'Compass' | 'UserCheck' | 'Clock' | 'ShieldCheck' | 'Scale' | 'MessageCircle' | 'HeartHandshake';
}

export interface ArabicServiceItem {
  id: string;
  title: string;
  iconName: string;
}
