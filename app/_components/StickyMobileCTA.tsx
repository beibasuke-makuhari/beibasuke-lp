"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/app/_i18n/ja";
import { ArrowRightIcon } from "./Icons";

type Props = { dict: Dictionary };

export default function StickyMobileCTA({ dict }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [contactInView, setContactInView] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const target = document.getElementById("contact");
    if (!target || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setContactInView(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px" },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const visible = scrolled && !contactInView;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-3 transition-all duration-300 md:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href="#contact"
        tabIndex={visible ? 0 : -1}
        className="flex items-center justify-between gap-3 rounded-full bg-brand-ink px-5 py-3.5 text-white shadow-xl shadow-brand/30 ring-1 ring-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span className="flex flex-col leading-tight">
          <span className="text-base font-semibold">{dict.stickyCta.label}</span>
          <span className="text-xs text-white/80">{dict.stickyCta.sub}</span>
        </span>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-brand-ink">
          <ArrowRightIcon className="h-4 w-4" />
        </span>
      </a>
    </div>
  );
}
