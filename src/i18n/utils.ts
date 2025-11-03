import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang], variables?: Record<string, string | number>) {
    let translation = ui[lang][key] || ui[defaultLang][key];

    if (variables) {
      Object.entries(variables).forEach(([varKey, varValue]) => {
        translation = translation.replace(`{{${varKey}}}`, String(varValue));
      });
    }

    return translation;
  }
}
