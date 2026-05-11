import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { SITE, SITE_URL, VENUES } from "@/app/_config/site";
import { getDictionary } from "@/app/_i18n/dictionaries";
import { hasLocale, locales, type Locale } from "@/app/_i18n/locales";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ogLocaleMap: Record<Locale, string> = {
  ja: "ja_JP",
  en: "en_US",
  zh: "zh_CN",
  ko: "ko_KR",
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);

  const languages: Record<string, string> = { "x-default": "/ja" };
  for (const locale of locales) {
    languages[locale] = `/${locale}`;
  }

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: dict.meta.title, template: `%s | ${dict.meta.title}` },
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages,
    },
    openGraph: {
      type: "website",
      locale: ogLocaleMap[lang],
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      siteName: SITE.brandName,
      url: `/${lang}`,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  const sportsClubJsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    "@id": `${SITE_URL}/${lang}#sportsclub`,
    name: SITE.brandName,
    alternateName: SITE.brandNameAlt,
    description: dict.meta.description,
    url: `${SITE_URL}/${lang}`,
    inLanguage: lang,
    sport: "Basketball",
    areaServed: [
      { "@type": "Place", name: "千葉県千葉市美浜区幕張" },
      { "@type": "Place", name: "千葉県千葉市美浜区真砂" },
    ],
    audience: {
      "@type": "PeopleAudience",
      audienceType: "Families with kids, newcomers to the area, beginners",
    },
    knowsAbout: ["Basketball", "Local community", "Newcomer support"],
    sameAs: [
      `https://www.youtube.com/watch?v=${SITE.youtubeVideoId}`,
      SITE.lineChatUrl,
    ],
    location: VENUES.map((venue) => ({
      "@type": "Place",
      name: venue.name,
      url: venue.url,
    })),
    potentialAction: {
      "@type": "JoinAction",
      target: SITE.lineChatUrl,
      description: dict.contact.lead,
    },
  };

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-brand-ink focus:text-white focus:px-3 focus:py-2 focus:rounded"
        >
          {dict.skipLink}
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsClubJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
