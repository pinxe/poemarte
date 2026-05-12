import es from './es.json';
import ca from './ca.json';
import en from './en.json';

export type Locale = 'es' | 'ca' | 'en';

const translations = { es, ca, en };

export function getTranslations(locale: Locale) {
  return translations[locale] ?? translations['es'];
}

export function useTranslations(locale: Locale) {
  const t = translations[locale] ?? translations['es'];

  return function get(key: string): string {
    return key.split('.').reduce((obj: any, k) => obj?.[k], t) ?? key;
  };
}

export const locales: Locale[] = ['es', 'ca', 'en'];
export const defaultLocale: Locale = 'es';

export function getLocalePath(locale: Locale, path: string = '') {
  if (locale === defaultLocale) return `/${path}`;
  return `/${locale}/${path}`;
}
