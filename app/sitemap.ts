import type { MetadataRoute } from "next";
import { SITE_URL } from "@/app/_config/site";
import { locales } from "@/app/_i18n/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${SITE_URL}/${l}`]),
  );

  return locales.map((lang) => ({
    url: `${SITE_URL}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: lang === "ja" ? 1 : 0.8,
    alternates: {
      languages: { ...languages, "x-default": `${SITE_URL}/ja` },
    },
  }));
}
