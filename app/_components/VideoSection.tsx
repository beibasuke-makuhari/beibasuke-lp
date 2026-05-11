import type { Dictionary } from "@/app/_i18n/ja";
import { SITE } from "@/app/_config/site";
import PlaceholderArt from "./PlaceholderArt";

type Props = { dict: Dictionary };

export default function VideoSection({ dict }: Props) {
  const videoId = SITE.youtubeVideoId;
  return (
    <section aria-labelledby="video-heading" className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink">
            06 · video
          </p>
          <h2
            id="video-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            {dict.video.heading}
          </h2>
          <p className="mt-3 text-sm text-muted">{dict.video.lead}</p>
        </div>
        <div className="mt-8 overflow-hidden rounded-3xl border border-brand/10 shadow-sm">
          {videoId ? (
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title={dict.video.iframeTitle}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <PlaceholderArt
              ratio="aspect-video"
              label={dict.video.placeholderLabel}
            />
          )}
        </div>
      </div>
    </section>
  );
}
