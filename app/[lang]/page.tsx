import { notFound } from "next/navigation";
import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import Intro from "@/app/_components/Intro";
import Activities from "@/app/_components/Activities";
import Schedule from "@/app/_components/Schedule";
import Venues from "@/app/_components/Venues";
import VideoSection from "@/app/_components/VideoSection";
import FirstTimers from "@/app/_components/FirstTimers";
import Testimonials from "@/app/_components/Testimonials";
import Contact from "@/app/_components/Contact";
import Footer from "@/app/_components/Footer";
import StickyMobileCTA from "@/app/_components/StickyMobileCTA";
import { getDictionary } from "@/app/_i18n/dictionaries";
import { hasLocale } from "@/app/_i18n/locales";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.firstTimers.items.map((item, i) => ({
      "@type": "Question",
      name: dict.firstTimers.faqQuestions[i] ?? item.label,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.body,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header lang={lang} dict={dict} />
      <main id="main" className="flex-1">
        <Hero dict={dict} />
        <Intro dict={dict} />
        <Activities dict={dict} />
        <Schedule dict={dict} />
        <Venues dict={dict} />
        <VideoSection dict={dict} />
        <FirstTimers dict={dict} />
        <Testimonials dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
      <StickyMobileCTA dict={dict} />
    </>
  );
}
