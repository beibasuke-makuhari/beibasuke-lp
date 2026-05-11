import type { Dictionary } from "@/app/_i18n/ja";

type Props = { dict: Dictionary };

export default function Footer({ dict }: Props) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-center text-xs text-muted">
          © {year} {dict.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
