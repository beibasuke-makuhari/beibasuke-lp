import type { Dictionary } from "@/app/_i18n/ja";
import { QuoteIcon } from "./Icons";

type Props = { dict: Dictionary };

export default function Testimonials({ dict }: Props) {
  const items = dict.testimonials.items;
  const isSingle = items.length === 1;

  return (
    <section
      id="voices"
      aria-labelledby="voices-heading"
      className="relative overflow-hidden bg-gradient-to-br from-brand/[0.08] via-cream to-brand-glow/[0.06]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[26rem] w-[26rem] rounded-full bg-brand/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-[22rem] w-[22rem] rounded-full bg-brand-glow/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink">
            08 · voices
          </p>
          <h2
            id="voices-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            {dict.testimonials.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/75">
            {dict.testimonials.lead}
          </p>
        </div>

        <ul
          className={
            isSingle
              ? "mx-auto mt-12 max-w-2xl"
              : "mt-12 grid gap-5 md:grid-cols-3"
          }
        >
          {items.map((item, i) => (
            <li
              key={item.who}
              className="relative flex flex-col gap-5 rounded-3xl border border-brand/10 bg-background p-6 shadow-sm transition-colors hover:border-brand/30 md:p-8"
            >
              <div className="text-brand/80">
                <QuoteIcon className={isSingle ? "h-10 w-10" : "h-8 w-8"} />
              </div>
              <blockquote
                className={`leading-relaxed text-foreground/85 ${
                  isSingle ? "text-lg md:text-xl" : "text-base"
                }`}
              >
                {item.quote}
              </blockquote>
              <div className="mt-auto flex items-center gap-3 border-t border-brand/10 pt-4">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-ink text-xs font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-xs font-medium text-muted">{item.who}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
