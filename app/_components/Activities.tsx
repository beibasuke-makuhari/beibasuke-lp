import type { Dictionary } from "@/app/_i18n/ja";
import { activityIcons } from "./Icons";

type Props = { dict: Dictionary };

export default function Activities({ dict }: Props) {
  return (
    <section
      id="activities"
      aria-labelledby="activities-heading"
      className="border-y border-black/5 bg-cream"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink">
            03 · activities
          </p>
          <h2
            id="activities-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            {dict.activities.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/75">
            {dict.activities.lead}
          </p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {dict.activities.cards.map((card, i) => {
            const Icon = activityIcons[i] ?? activityIcons[0];
            return (
              <li
                key={card.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-brand/10 bg-background shadow-sm transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-md"
              >
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-brand/15 via-cream to-brand-glow/15">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 20% 20%, rgba(232,119,34,0.20), transparent 55%), radial-gradient(circle at 80% 80%, rgba(245,158,11,0.18), transparent 55%)",
                    }}
                  />
                  <div className="relative text-brand-ink transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-20 w-20" />
                  </div>
                  <span className="absolute right-4 top-4 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-ink shadow-sm backdrop-blur">
                    {card.frequency}
                  </span>
                </div>

                <div className="flex flex-col gap-3 p-6">
                  <div className="flex items-baseline gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink/70">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <span aria-hidden="true" className="h-px w-6 bg-current opacity-40" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/75">{card.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
