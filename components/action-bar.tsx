import Link from "next/link";

type ActionBarProps = {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export function ActionBar({ primaryHref, primaryLabel, secondaryHref, secondaryLabel }: ActionBarProps) {
  return (
    <div className="button-row">
      <Link href={primaryHref} className="button-primary" style={{ display: "grid", placeItems: "center" }}>
        {primaryLabel}
      </Link>
      <Link href={secondaryHref} className="button-ghost" style={{ display: "grid", placeItems: "center" }}>
        {secondaryLabel}
      </Link>
    </div>
  );
}
