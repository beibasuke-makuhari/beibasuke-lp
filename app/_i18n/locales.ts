export const locales = ["ja", "en", "zh", "ko"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ja";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
