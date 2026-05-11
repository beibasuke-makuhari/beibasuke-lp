import "server-only";
import type { Dictionary } from "./ja";
import type { Locale } from "./locales";

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  ja: () => import("./ja").then((m) => m.default),
  en: () => import("./en").then((m) => m.default),
  zh: () => import("./zh").then((m) => m.default),
  ko: () => import("./ko").then((m) => m.default),
};

export const getDictionary = (locale: Locale): Promise<Dictionary> => loaders[locale]();

export type { Dictionary } from "./ja";
