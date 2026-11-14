import type { StaticImageData } from 'next/image';

import heroCreperieImg from '@/src/assets/images/hero_creperie_showcase_1794671372665.jpg';
import crepeOreoPistacheImg from '@/src/assets/images/crepe_oreo_pistache_1794671372699.jpg';
import crepeCrevettesImg from '@/src/assets/images/crepe_crevettes_fromage_1794671373680.jpg';
import crepePouletImg from '@/src/assets/images/crepe_poulet_champignons_1794671374670.jpg';
import crepeChocolatNoisettesImg from '@/src/assets/images/crepe_chocolat_noisettes_1794671374425.jpg';
import milkshakeOreoImg from '@/src/assets/images/milkshake_oreo_boissons_1794671375169.jpg';

export type MenuCategory = 'sweet' | 'savory' | 'drinks';
export type Lang = 'fr' | 'en';

export interface MenuItem {
  id: string;
  category: MenuCategory;
  verified: boolean;
  unitPriceMad: number;
  image: StaticImageData;
  name: Record<Lang, string>;
  ingredients: Record<Lang, string>;
  tag: Record<Lang, string>;
}

export const HERO_IMAGE = heroCreperieImg;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'crepe-oreo-pistache',
    category: 'sweet',
    verified: true,
    unitPriceMad: 35,
    image: crepeOreoPistacheImg,
    name: {
      fr: 'Crêpe Oreo & Pistache',
      en: 'Oreo & Pistachio Crêpe',
    },
    ingredients: {
      fr: 'Pâte dorée minute, coulis chocolat noir, crème de pistache onctueuse, éclats d’Oreo et pistaches torréfiées.',
      en: 'Fresh griddled golden crêpe, dark cocoa drizzle, velvety pistachio cream, crushed Oreo cookies and roasted pistachios.',
    },
    tag: {
      fr: 'Signature vérifiée',
      en: 'Verified signature',
    },
  },
  {
    id: 'crepe-crevettes-fromage',
    category: 'savory',
    verified: true,
    unitPriceMad: 42,
    image: crepeCrevettesImg,
    name: {
      fr: 'Crêpe Crevettes & Fromage',
      en: 'Shrimp & Melted Cheese Crêpe',
    },
    ingredients: {
      fr: 'Crevettes sautées à l’ail et persil, fromage fondant doré et sauce crémeuse maison dans une crêpe salée croustillante.',
      en: 'Garlic-parsley sautéed shrimp, melted golden cheese and house cream sauce folded in a crisp savory crêpe.',
    },
    tag: {
      fr: 'Signature vérifiée',
      en: 'Verified signature',
    },
  },
  {
    id: 'crepe-poulet-champignons',
    category: 'savory',
    verified: true,
    unitPriceMad: 38,
    image: crepePouletImg,
    name: {
      fr: 'Crêpe Poulet & Champignons',
      en: 'Chicken & Mushroom Crêpe',
    },
    ingredients: {
      fr: 'Émincé de poulet mariné grillé, champignons poêlés, béchamel légère aux herbes et cœur fromage fondant.',
      en: 'Seasoned grilled chicken strips, sautéed mushrooms, light herb béchamel and melted cheese center.',
    },
    tag: {
      fr: 'Signature vérifiée',
      en: 'Verified signature',
    },
  },
  {
    id: 'crepe-chocolat-banane',
    category: 'sweet',
    verified: false,
    unitPriceMad: 28,
    image: crepeChocolatNoisettesImg,
    name: {
      fr: 'Crêpe Chocolat & Banane',
      en: 'Chocolate & Banana Crêpe',
    },
    ingredients: {
      fr: 'Pâte à tartiner cacao-noisette tiède, rondelles de banane fraîche et sucre glace.',
      en: 'Warm hazelnut-cocoa spread, fresh sliced banana and light dusting of powdered sugar.',
    },
    tag: {
      fr: 'Suggestion indicative',
      en: 'Indicative menu item',
    },
  },
  {
    id: 'crepe-kinder-noisettes',
    category: 'sweet',
    verified: false,
    unitPriceMad: 34,
    image: crepeChocolatNoisettesImg,
    name: {
      fr: 'Crêpe Kinder Bueno & Noisettes',
      en: 'Kinder Bueno & Hazelnut Crêpe',
    },
    ingredients: {
      fr: 'Crème pralinée aux noisettes, éclats de gaufrette chocolatée et noisettes concassées grillées.',
      en: 'Creamy hazelnut praline drizzle, crisp chocolate wafer pieces and toasted crushed hazelnuts.',
    },
    tag: {
      fr: 'Suggestion indicative',
      en: 'Indicative menu item',
    },
  },
  {
    id: 'crepe-3-fromages-dinde',
    category: 'savory',
    verified: false,
    unitPriceMad: 36,
    image: crepePouletImg,
    name: {
      fr: 'Crêpe 3 Fromages & Dinde Fumée',
      en: '3-Cheese & Smoked Turkey Crêpe',
    },
    ingredients: {
      fr: 'Trio mozzarella, emmental et cheddar fondant, lamelles de dinde fumée et poivre concassé.',
      en: 'Mozzarella, emmental and cheddar blend, smoked turkey slices and freshly cracked black pepper.',
    },
    tag: {
      fr: 'Suggestion indicative',
      en: 'Indicative menu item',
    },
  },
  {
    id: 'milkshake-oreo',
    category: 'drinks',
    verified: false,
    unitPriceMad: 25,
    image: milkshakeOreoImg,
    name: {
      fr: 'Milkshake Oreo Glacé',
      en: 'Chilled Oreo Milkshake',
    },
    ingredients: {
      fr: 'Glace vanille mixée minute avec biscuits Oreo croquants et lait frais bien frappé.',
      en: 'Freshly blended vanilla ice cream with crushed Oreo cookies and cold milk.',
    },
    tag: {
      fr: 'Suggestion indicative',
      en: 'Indicative menu item',
    },
  },
  {
    id: 'jus-frais-sodas',
    category: 'drinks',
    verified: false,
    unitPriceMad: 18,
    image: milkshakeOreoImg,
    name: {
      fr: 'Jus d’Orange Pressé ou Soda',
      en: 'Fresh Orange Juice or Chilled Soda',
    },
    ingredients: {
      fr: 'Orange pressée à la demande ou canette bien fraîche au choix pour accompagner votre crêpe.',
      en: 'Freshly squeezed orange juice or chilled canned soft drink of your choice.',
    },
    tag: {
      fr: 'Suggestion indicative',
      en: 'Indicative menu item',
    },
  },
];

export const SITE_COPY = {
  fr: {
    nav: {
      menu: 'La Carte',
      service: 'Service Drive',
      access: 'Accès & Horaires',
      cart: 'Panier',
    },
    hero: {
      kicker: "Ouvert dès 16h00 · Quartier l'hôpital, Safi",
      headline: 'Crêpes Gourmandes, Sucrées & Salées — À Emporter, en Drive ou Sur Place.',
      subheadline:
        'Du croquant Oreo & Pistache aux crêpes salées généreuses aux crevettes ou poulet-champignons. Commandez en direct sans intermédiaire.',
      ctaPrimary: 'Commander en Direct (WhatsApp)',
      ctaSecondary: 'Voir la Carte',
      imageCaptionTitle: 'Préparées à la minute dès 16h00',
      imageCaptionSub: 'Oreo & Pistache · Crevettes & Fromage · Poulet & Champignons',
      modes: [
        { title: 'Repas sur Place', desc: 'Accueil chaleureux dès 16h00' },
        { title: 'Service Drive Rapide', desc: 'Retrait express sans attente' },
        { title: 'Livraison Sans Contact', desc: 'À domicile sur Safi ou via Glovo' },
      ],
    },
    menu: {
      kicker: 'La Carte du Soir',
      title: 'Sucrées croquantes & Salées généreuses',
      note: 'Les 3 recettes signatures sont confirmées. Les autres suggestions, tarifs en MAD et horaires de fermeture sont indicatifs et à confirmer avec l’établissement.',
      tabs: {
        all: 'Tout',
        sweet: 'Crêpes Sucrées',
        savory: 'Crêpes Salées',
        drinks: 'Boissons & Milkshakes',
      },
      add: 'Ajouter',
      priceSuffix: 'MAD (indicatif)',
      verifiedLabel: 'Signature',
      placeholderLabel: 'Indicatif',
    },
    service: {
      kicker: 'Comment Commander',
      title: 'Trois façons simples de savourer vos crêpes à Safi',
      subtitle:
        'Passez en direct via WhatsApp sans commission ni attente au comptoir, installez-vous sur place ou commandez depuis chez vous.',
      cards: [
        {
          id: 'drive',
          index: '01',
          title: 'Service Drive (Retrait Express)',
          desc: "Commandez à l'avance sur WhatsApp, garez-vous au Quartier l'hôpital et récupérez vos crêpes encore chaudes sans descendre ou attendre.",
          meta: 'Prêt à votre arrivée · Paiement sur place',
        },
        {
          id: 'dine-in',
          index: '02',
          title: 'Repas Sur Place',
          desc: 'Un comptoir convivial ouvert dès 16h00 pour vos pauses sucrées de fin d’après-midi et vos dîners en famille ou entre amis.',
          meta: 'Ouvert dès 16h00 · Quartier l’hôpital',
        },
        {
          id: 'delivery',
          index: '03',
          title: 'Livraison Locale & Glovo',
          desc: 'Livraison directe à domicile à Safi via commande WhatsApp avec paiement en espèces à réception.',
          meta: 'Direct WhatsApp ou Glovo',
          glovoLabel: 'Également disponible sur Glovo',
        },
      ],
    },
    checkout: {
      kicker: 'Accès, Horaires & Commande Directe',
      title: 'Finalisez votre commande sur WhatsApp',
      locationTitle: "Quartier l'hôpital, Safi 46000",
      plusCodeLabel: 'Repère Google Maps',
      hoursTitle: 'Horaires d’ouverture',
      hoursPrimary: 'Ouverture tous les jours dès 16h00',
      hoursSecondary: 'Heure de fermeture : à confirmer avec l’établissement',
      directionsCta: 'Itinéraire Google Maps',
      phoneLabel: 'Téléphone & WhatsApp direct',
      builderTitle: 'Votre Commande Directe',
      builderSubtitle: 'Paiement en espèces à la réception — aucune carte bancaire requise.',
      modeLabel: 'Mode de retrait ou livraison',
      modes: {
        drive: 'Service Drive',
        'dine-in': 'Sur Place',
        delivery: 'Livraison',
      },
      nameLabel: 'Votre nom',
      namePlaceholder: 'Ex : Salma / Yassine',
      addressLabel: 'Adresse de livraison à Safi',
      addressPlaceholder: 'Ex : Quartier l’hôpital, rue / repère...',
      notesLabel: 'Précision ou allergie (optionnel)',
      notesPlaceholder: 'Ex : Sans oignons, couverts souhaités, arrivée dans 15 min...',
      emptyTitle: 'Votre panier est encore vide',
      emptyDesc: 'Ajoutez une crêpe depuis la carte ci-dessus ou choisissez une signature :',
      totalLabel: 'Total estimé (tarifs indicatifs)',
      paymentNote: 'Paiement à réception (espèces)',
      sendCta: 'Envoyer la Commande sur WhatsApp',
      clearCta: 'Vider le panier',
    },
    sheet: {
      title: 'Votre Panier',
      subtitle: 'Vérifiez vos crêpes avant d’envoyer sur WhatsApp.',
      goToCheckout: 'Choisir Drive / Livraison',
      sendDirect: 'Envoyer sur WhatsApp',
    },
    mobileBar: {
      itemsSingular: 'article',
      itemsPlural: 'articles',
      cta: 'Finaliser sur WhatsApp',
    },
    footer: {
      tagline: "Crêperie sucrée & salée à Safi — Service Drive, Sur Place & Livraison.",
      address: "Quartier l'hôpital, Safi 46000, Maroc (7QP8+XQ Safi)",
      hours: 'Ouvert dès 16h00 · Fermeture à confirmer',
      glovo: 'Également disponible sur Glovo',
      rights: 'Les crepiers 07 · Safi',
    },
  },
  en: {
    nav: {
      menu: 'Menu',
      service: 'Drive Pickup',
      access: 'Location & Hours',
      cart: 'Bag',
    },
    hero: {
      kicker: "Open from 16:00 · Quartier l'hôpital, Safi",
      headline: 'Gourmet Sweet & Savory Crêpes — Pickup, Drive or Dine-In.',
      subheadline:
        'From crunchy Oreo & Pistachio to generous savory shrimp or chicken-mushroom crêpes. Order direct with zero middleman fees.',
      ctaPrimary: 'Order Direct (WhatsApp)',
      ctaSecondary: 'Explore Menu',
      imageCaptionTitle: 'Griddled fresh to order from 16:00',
      imageCaptionSub: 'Oreo & Pistachio · Shrimp & Cheese · Chicken & Mushrooms',
      modes: [
        { title: 'Dine-In', desc: 'Evening spot open from 16:00' },
        { title: 'Express Drive Pickup', desc: 'Pull up and grab hot crêpes' },
        { title: 'Contactless Delivery', desc: 'Local Safi delivery or via Glovo' },
      ],
    },
    menu: {
      kicker: 'Evening Menu',
      title: 'Sweet Cravings & Savory Classics',
      note: 'Our 3 signature recipes are verified. Supplementary items, MAD prices, and closing hours are illustrative placeholders to be confirmed with the owner.',
      tabs: {
        all: 'All',
        sweet: 'Sweet Crêpes',
        savory: 'Savory Crêpes',
        drinks: 'Drinks & Milkshakes',
      },
      add: 'Add',
      priceSuffix: 'MAD (indicative)',
      verifiedLabel: 'Signature',
      placeholderLabel: 'Indicative',
    },
    service: {
      kicker: 'How to Order',
      title: 'Three easy ways to enjoy Les crepiers 07 in Safi',
      subtitle:
        'Send your order directly on WhatsApp without platform markups, stop by in Quartier l’hôpital, or relax at home.',
      cards: [
        {
          id: 'drive',
          index: '01',
          title: 'Service Drive (Express Pickup)',
          desc: "Order ahead on WhatsApp, pull up in Quartier l'hôpital, and pick up your hot crêpes right away without waiting in line.",
          meta: 'Ready when you arrive · Pay on pickup',
        },
        {
          id: 'dine-in',
          index: '02',
          title: 'Dine-In',
          desc: 'A welcoming evening crêperie open from 16:00 for late-afternoon desserts and casual dinners with friends or family.',
          meta: "Open from 16:00 · Quartier l'hôpital",
        },
        {
          id: 'delivery',
          index: '03',
          title: 'Local Delivery & Glovo',
          desc: 'Direct local delivery across Safi via WhatsApp with simple cash payment upon arrival.',
          meta: 'Direct WhatsApp or Glovo',
          glovoLabel: 'Also available on Glovo',
        },
      ],
    },
    checkout: {
      kicker: 'Location, Hours & Direct Checkout',
      title: 'Send your order via WhatsApp',
      locationTitle: "Quartier l'hôpital, Safi 46000",
      plusCodeLabel: 'Google Maps Plus Code',
      hoursTitle: 'Opening Hours',
      hoursPrimary: 'Open daily from 16:00',
      hoursSecondary: 'Closing time: to be confirmed with the owner',
      directionsCta: 'Google Maps Directions',
      phoneLabel: 'Direct Phone & WhatsApp',
      builderTitle: 'Direct Order Summary',
      builderSubtitle: 'Cash on pickup or delivery — no online card payment needed.',
      modeLabel: 'Fulfillment mode',
      modes: {
        drive: 'Drive Pickup',
        'dine-in': 'Dine-In',
        delivery: 'Delivery',
      },
      nameLabel: 'Your name',
      namePlaceholder: 'e.g. Salma / Yassine',
      addressLabel: 'Delivery address in Safi',
      addressPlaceholder: "e.g. Quartier l'hôpital, street / landmark...",
      notesLabel: 'Notes or preferences (optional)',
      notesPlaceholder: 'e.g. No onions, arriving in 15 mins...',
      emptyTitle: 'Your order bag is empty',
      emptyDesc: 'Add a crêpe from the menu above or quick-add a signature:',
      totalLabel: 'Estimated total (indicative)',
      paymentNote: 'Cash on pickup / delivery',
      sendCta: 'Send Order on WhatsApp',
      clearCta: 'Clear bag',
    },
    sheet: {
      title: 'Your Order Bag',
      subtitle: 'Review your selected items before sending on WhatsApp.',
      goToCheckout: 'Select Drive / Delivery',
      sendDirect: 'Send on WhatsApp',
    },
    mobileBar: {
      itemsSingular: 'item',
      itemsPlural: 'items',
      cta: 'Checkout on WhatsApp',
    },
    footer: {
      tagline: 'Sweet & savory artisanal crêperie in Safi — Drive Pickup, Dine-In & Delivery.',
      address: "Quartier l'hôpital, Safi 46000, Morocco (7QP8+XQ Safi)",
      hours: 'Open from 16:00 · Closing time to be confirmed',
      glovo: 'Also available on Glovo',
      rights: 'Les crepiers 07 · Safi',
    },
  },
} as const;
