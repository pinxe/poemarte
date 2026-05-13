import es from './es.json';

export type Locale = 'es';

const translations = { es };

export function useTranslations(_locale: Locale = 'es') {
  return function get(key: string): string {
    return key.split('.').reduce((obj: any, k) => obj?.[k], translations.es) ?? key;
  };
}

export const locales: Locale[] = ['es'];
export const defaultLocale: Locale = 'es';

export function getLocalePath(_locale: Locale, path: string = '') {
  return `/${path}`;
}
