export const languages = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
};

export const defaultLang = 'en';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    'site.title': 'Mi Sitio Web',
    'site.description': 'Descripción de mi sitio web',
    'footer.rights': '© {{year}} Todos los derechos reservados.',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'site.title': 'My Website',
    'site.description': 'Description of my website',
    'footer.rights': '© {{year}} All rights reserved.',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'site.title': 'Mon Site Web',
    'site.description': 'Description de mon site web',
    'footer.rights': '© {{year}} Tous droits réservés.',
  },
} as const;
