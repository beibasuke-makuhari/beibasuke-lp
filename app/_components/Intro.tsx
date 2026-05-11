import Image from "next/image";
import type { Dictionary } from "@/app/_i18n/ja";
import { CheckIcon } from "./Icons";

type Props = { dict: Dictionary };

export default function Intro({ dict }: Props) {
  return (
    <section aria-labelledby="intro-heading" className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <div className="relative -mx-4 mb-10 aspect-[21/9] overflow-hidden md:mx-0 md:rounded-3xl md:shadow-sm">
          <Image
            src="/makuhari-area.webp"
            alt="千葉・幕張の街並み"
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink">
          02 · about
        </p>
        <h2
          id="intro-heading"
          className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
        >
          {dict.intro.heading}
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-[auto_1fr] md:items-start">
          <div
            aria-hidden="true"
            className="h-1 w-12 rounded-full bg-brand md:mt-3 md:h-12 md:w-1"
          />
          <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
            {dict.intro.body}
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-black/5 bg-cream p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink">
            {dict.intro.audienceHeading}
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {dict.intro.audienceList.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand/15 text-brand-ink">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-base leading-relaxed text-foreground/85">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
