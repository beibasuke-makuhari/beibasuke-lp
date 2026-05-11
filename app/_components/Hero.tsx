import Image from "next/image";
import type { Dictionary } from "@/app/_i18n/ja";
import { ArrowDownIcon, ArrowRightIcon, CheckIcon } from "./Icons";

type Props = { dict: Dictionary };

export default function Hero({ dict }: Props) {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand/[0.18] via-cream to-background"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-[24rem] w-[24rem] rounded-full bg-brand-glow/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-12 -z-10 hidden h-80 w-[28rem] overflow-hidden rounded-l-[2rem] motion-safe:animate-drift md:block lg:top-16 lg:h-[26rem] lg:w-[36rem]"
      >
        <Image
          src="/hero-basketball.webp"
          alt="幕張の体育館でプレーするバスケットボール"
          fill
          sizes="(min-width: 1024px) 36rem, 28rem"
          className="object-cover object-left"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-background from-0% via-background/30 via-50% to-transparent to-100%"
        />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-20 pt-14 sm:pt-20 md:gap-10 md:pb-28 md:pt-28">
        <p className="inline-flex items-center gap-2 self-start rounded-full border border-brand/30 bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-ink backdrop-blur">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
          {dict.hero.kicker}
        </p>

        <h1
          id="hero-heading"
          className="max-w-3xl text-[2.5rem] font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.5rem]"
        >
          {dict.hero.title}
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg md:text-xl">
          {dict.hero.sub}
        </p>

        <ul className="flex flex-wrap gap-2">
          {dict.hero.chips.map((chip) => (
            <li
              key={chip}
              className="inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm ring-1 ring-brand/15 backdrop-blur sm:text-sm"
            >
              <span className="grid h-4 w-4 place-items-center rounded-full bg-brand/15 text-brand-ink">
                <CheckIcon className="h-3 w-3" />
              </span>
              {chip}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-ink px-7 text-base font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:-translate-y-0.5 hover:bg-brand hover:shadow-xl hover:shadow-brand/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-lg"
          >
            {dict.hero.cta}
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="text-sm text-muted">{dict.hero.note}</p>
        </div>

        <a
          href="#activities"
          className="mt-2 inline-flex items-center gap-2 self-start rounded text-sm font-medium text-foreground/70 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {dict.hero.scrollHint}
          <ArrowDownIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
