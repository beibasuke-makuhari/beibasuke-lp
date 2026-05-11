import type { Dictionary } from "@/app/_i18n/ja";
import { VENUES } from "@/app/_config/site";
import { ExternalLinkIcon, MapPinIcon } from "./Icons";

type Props = { dict: Dictionary };

export default function Venues({ dict }: Props) {
  return (
    <section
      id="venues"
      aria-labelledby="venues-heading"
      className="border-y border-black/5 bg-cream"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink">
            <MapPinIcon className="h-4 w-4" />
            05 · venues
          </p>
          <h2
            id="venues-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            {dict.venues.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/75">
            {dict.venues.lead}
          </p>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {VENUES.map((venue) => (
            <li
              key={venue.key}
              className="group flex flex-col overflow-hidden rounded-3xl border border-brand/10 bg-background shadow-sm transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden bg-cream">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(venue.embedQuery)}&output=embed`}
                  title={venue.name}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-full w-full"
                  style={{ border: 0 }}
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-lg font-bold text-foreground">{venue.name}</h3>
                <a
                  href={venue.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 self-start rounded text-sm font-semibold text-brand-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {dict.venues.openInMaps}
                  <ExternalLinkIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
