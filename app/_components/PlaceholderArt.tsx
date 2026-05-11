type Props = {
  label?: string;
  ratio?: string;
  className?: string;
};

export default function PlaceholderArt({
  label,
  ratio = "aspect-[4/3]",
  className = "",
}: Props) {
  return (
    <div
      className={`${ratio} relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand/20 via-cream to-brand-glow/15 ${className}`}
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full text-brand-ink/35"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path
          d="M16 50 H84 M50 16 V84 M22 22 Q50 50 22 78 M78 22 Q50 50 78 78"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
      {label && (
        <span className="absolute bottom-3 left-4 text-xs font-medium text-foreground/55">
          {label}
        </span>
      )}
    </div>
  );
}
