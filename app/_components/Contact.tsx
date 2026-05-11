import Image from "next/image";
import type { Dictionary } from "@/app/_i18n/ja";
import { SITE } from "@/app/_config/site";
import { ArrowRightIcon } from "./Icons";

type Props = { dict: Dictionary };

export default function Contact({ dict }: Props) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-cream"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink">
            09 · join
          </p>
          <h2
            id="contact-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            {dict.contact.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-foreground/80">
            {dict.contact.lead}
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-brand/10 bg-background shadow-lg shadow-brand/10">
          <div className="grid gap-8 p-6 md:grid-cols-[auto_1fr] md:items-center md:gap-10 md:p-10">
            <div className="mx-auto w-44 md:w-52">
              <a
                href={SITE.lineChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.contact.qrAlt}
                className="block overflow-hidden rounded-2xl border border-brand/10 bg-white p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Image
                  src="/line-qr.webp"
                  alt={dict.contact.qrAlt}
                  width={333}
                  height={333}
                  className="h-auto w-full"
                  priority={false}
                />
              </a>
              <p className="mt-3 text-center text-xs text-muted">
                {dict.contact.qrCaption}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href={SITE.lineChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-ink px-7 text-base font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:-translate-y-0.5 hover:bg-brand hover:shadow-xl hover:shadow-brand/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-lg"
              >
                {dict.contact.button}
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-sm text-foreground/70">{dict.contact.fallback}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
