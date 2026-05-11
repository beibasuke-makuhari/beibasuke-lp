import type { Dictionary } from "@/app/_i18n/ja";
import { SITE } from "@/app/_config/site";
import { CalendarIcon } from "./Icons";

type Props = { dict: Dictionary };

export default function Schedule({ dict }: Props) {
  return (
    <section
      id="schedule"
      aria-labelledby="schedule-heading"
      className="bg-background"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink">
            <CalendarIcon className="h-4 w-4" />
            04 · schedule
          </p>
          <h2
            id="schedule-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            {dict.schedule.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/75">
            {dict.schedule.lead}
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-brand/10 bg-background shadow-sm">
          <iframe
            src={SITE.calendarSrc}
            title={dict.schedule.iframeTitle}
            loading="lazy"
            className="block h-[520px] w-full md:h-[640px]"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
