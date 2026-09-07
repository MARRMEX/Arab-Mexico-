export const WHATSAPP_PHONE_RAW = '525545120473';
export const WHATSAPP_PHONE_FORMATTED = '+52 55 4512 0473';
export const FOUNDER_NAME = 'Houssame Chajari';

export const WHATSAPP_MESSAGES = {
  general: 'Hello, I would like to know more about your travel assistance services in Mexico.',
  privateAssistance: 'Hello, I am interested in private in-person assistance in Mexico.',
  serviceInquiry: (serviceName: string) =>
    `Hello, I would like to ask about travel assistance regarding ${serviceName} in Mexico.`,
  arabic: 'مرحباً بكم، أود معرفة المزيد عن خدمات المساعدة والإرشاد السياحي للمسافرين في المكسيك.',
  quickChat: 'Hello Houssame, I would like to know more about your travel assistance services in Mexico.'
};

/**
 * Returns a wa.me URL with the specified pre-filled message
 */
export function getWhatsAppUrl(message: string = WHATSAPP_MESSAGES.general): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encoded}`;
}
