// Número oficial de contato — formato internacional (55 + DDD + número)
export const WHATSAPP_NUMBER = '5595984285898';
export const CONTACT_EMAIL = 'contato@valhallas.dev';

export function buildWhatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
