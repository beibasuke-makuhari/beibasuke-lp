type IconProps = { className?: string };

const defaultSize = "h-5 w-5";

function pick(className: string) {
  return className || defaultSize;
}

export function BasketballIcon({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={pick(className)}
    >
      <circle cx="24" cy="24" r="18" />
      <path d="M6 24h36M24 6v36M11 11c8 6 8 20 0 26M37 11c-8 6-8 20 0 26" />
    </svg>
  );
}

export function GlassesIcon({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={pick(className)}
    >
      <path d="M16 6l4 18 4 8M32 6l-4 18-4 8M14 6h6M28 6h6M14 32h10M24 32h10" />
    </svg>
  );
}

export function TicketIcon({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={pick(className)}
    >
      <path d="M6 16a4 4 0 014-4h28a4 4 0 014 4v3a3 3 0 000 6v3a4 4 0 01-4 4H10a4 4 0 01-4-4v-3a3 3 0 000-6v-3z" />
      <path d="M22 12v24" strokeDasharray="2 3" />
    </svg>
  );
}

export function BagIcon({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={pick(className)}
    >
      <path d="M10 16h28l-2 24H12L10 16z" />
      <path d="M18 16v-3a6 6 0 0112 0v3" />
    </svg>
  );
}

export function LevelIcon({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={pick(className)}
    >
      <path d="M10 36V26M22 36V18M34 36V10" />
      <path d="M6 40h36" />
    </svg>
  );
}

export function ClockIcon({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={pick(className)}
    >
      <circle cx="24" cy="24" r="18" />
      <path d="M24 14v10l7 4" />
    </svg>
  );
}

export function CoinIcon({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={pick(className)}
    >
      <ellipse cx="24" cy="14" rx="14" ry="5" />
      <path d="M10 14v10c0 2.8 6.3 5 14 5s14-2.2 14-5V14" />
      <path d="M10 24v10c0 2.8 6.3 5 14 5s14-2.2 14-5V24" />
    </svg>
  );
}

export function QuoteIcon({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="currentColor"
      className={pick(className)}
    >
      <path d="M14 14h10v10H17c0 4 2 6 6 7v4c-6 0-11-4-11-12V14zm16 0h10v10h-7c0 4 2 6 6 7v4c-6 0-11-4-11-12V14z" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={pick(className)}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowDownIcon({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={pick(className)}
    >
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

export function CalendarIcon({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={pick(className)}
    >
      <rect x="7" y="10" width="34" height="32" rx="3" />
      <path d="M7 20h34M16 6v8M32 6v8" />
      <circle cx="16" cy="30" r="1.5" fill="currentColor" />
      <circle cx="24" cy="30" r="1.5" fill="currentColor" />
      <circle cx="32" cy="30" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function MapPinIcon({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={pick(className)}
    >
      <path d="M24 42c-9-9-14-15-14-22a14 14 0 0128 0c0 7-5 13-14 22z" />
      <circle cx="24" cy="20" r="5" />
    </svg>
  );
}

export function ExternalLinkIcon({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={pick(className)}
    >
      <path d="M14 4h6v6M10 14L20 4M19 14v6H4V4h6" />
    </svg>
  );
}

export function CheckIcon({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={pick(className)}
    >
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}

export const activityIcons = [BasketballIcon, GlassesIcon, TicketIcon] as const;
export const firstTimerIcons = [BagIcon, LevelIcon, ClockIcon, CoinIcon] as const;
