export type FulfillmentMode = 'drive' | 'dine-in' | 'delivery';

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  unitPriceMad: number;
}

export interface CreperieOrderPayload {
  customerName: string;
  mode: FulfillmentMode;
  deliveryAddress?: string;
  notes?: string;
  items: CartItem[];
  lang?: 'fr' | 'en';
}

export const CREPERIE_WHATSAPP = '212775531309';
export const CREPERIE_PHONE_DISPLAY = '+212 7 75 53 13 09';
export const CREPERIE_PLUS_CODE = '7QP8+XQ Safi';
export const CREPERIE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=7QP8%2BXQ+Safi+Morocco';
export const CREPERIE_GLOVO_URL = 'https://glovoapp.com/ma/fr/safi/';

const MODE_LABELS_FR: Record<FulfillmentMode, string> = {
  drive: 'Service Drive (Retrait Express)',
  'dine-in': 'Repas Sur Place',
  delivery: 'Livraison Locale',
};

const MODE_LABELS_EN: Record<FulfillmentMode, string> = {
  drive: 'Drive Pickup (Express)',
  'dine-in': 'Dine-In',
  delivery: 'Local Delivery',
};

export function buildCreperieWhatsAppUrl(payload: CreperieOrderPayload): string {
  const isEn = payload.lang === 'en';
  const modeLabels = isEn ? MODE_LABELS_EN : MODE_LABELS_FR;

  if (payload.items.length === 0) {
    const quickGreeting = isEn
      ? 'Hello Les crepiers 07, I would like to place an order or ask about today’s menu.'
      : 'Bonjour Les crepiers 07, je souhaite passer une commande directe ou connaître vos disponibilités du jour.';
    return `https://wa.me/${CREPERIE_WHATSAPP}?text=${encodeURIComponent(quickGreeting)}`;
  }

  const itemLines = payload.items.map(
    (item) =>
      `• ${item.quantity}x ${item.name} (~${item.quantity * item.unitPriceMad} MAD)`
  );

  const estimatedTotal = payload.items.reduce(
    (sum, item) => sum + item.quantity * item.unitPriceMad,
    0
  );

  const addressLine =
    payload.mode === 'delivery' && payload.deliveryAddress?.trim()
      ? isEn
        ? `Address: ${payload.deliveryAddress.trim()}`
        : `Adresse : ${payload.deliveryAddress.trim()}`
      : undefined;

  const notesLine = payload.notes?.trim()
    ? isEn
      ? `Note: ${payload.notes.trim()}`
      : `Note : ${payload.notes.trim()}`
    : undefined;

  const lines = isEn
    ? [
        `Hello Les crepiers 07,`,
        `I would like to place a direct order:`,
        ``,
        ...itemLines,
        ``,
        `Estimated total: ~${estimatedTotal} MAD (Pay on pickup/delivery)`,
        `Fulfillment: ${modeLabels[payload.mode]}`,
        `Name: ${payload.customerName.trim() || 'Guest'}`,
        addressLine,
        notesLine,
      ]
    : [
        `Bonjour Les crepiers 07,`,
        `Je souhaite passer une commande directe :`,
        ``,
        ...itemLines,
        ``,
        `Total estimé : ~${estimatedTotal} MAD (Paiement à réception)`,
        `Mode : ${modeLabels[payload.mode]}`,
        `Nom : ${payload.customerName.trim() || 'Client'}`,
        addressLine,
        notesLine,
      ];

  const message = lines.filter((line) => line !== undefined).join('\n');

  return `https://wa.me/${CREPERIE_WHATSAPP}?text=${encodeURIComponent(message)}`;
}
