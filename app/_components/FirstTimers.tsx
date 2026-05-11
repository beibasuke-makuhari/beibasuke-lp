import type { Dictionary } from "@/app/_i18n/ja";
import { firstTimerIcons } from "./Icons";

type Props = { dict: Dictionary };

export default function FirstTimers({ dict }: Props) {
  return (
    <section
      id="first-time"
      aria-labelledby="first-time-heading"
      className="border-y border-black/5 bg-background"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink">
            07 · for first-timers
          </p>
          <h2
            id="first-time-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            {dict.firstTimers.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/75">
            {dict.firstTimers.lead}
          </p>
        </div>

        <dl className="mt-10 grid gap-4 sm:grid-cols-2">
          {dict.firstTimers.items.map((item, i) => {
            const Icon = firstTimerIcons[i] ?? firstTimerIcons[0];
            return (
              <div
                key={item.label}
                className="flex gap-4 rounded-2xl border border-black/5 bg-cream p-5 transition-colors hover:border-brand/30"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand-ink">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <dt className="text-sm font-semibold text-foreground">{item.label}</dt>
                  <dd className="text-sm leading-relaxed text-foreground/75">{item.body}</dd>
                </div>
              </div>
            );
          })}
        </dl>

        <div className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-ink p-px shadow-lg shadow-brand/20">
          <div className="rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-brand/95 to-brand-ink px-6 py-7 text-center sm:py-8">
            <p className="text-lg font-bold leading-relaxed text-white sm:text-xl">
              {dict.firstTimers.reassurance}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
