import Link from "next/link";

export function EmptyState() {
  return (
    <div className="panel empty-state">
      <div className="eyebrow">Private Ledger</div>
      <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>No commit records yet</div>
      <div className="muted">Create a sealed hash entry to start your ledger.</div>
      <Link href="/commit" className="button-primary" style={{ display: "grid", placeItems: "center", width: "100%" }}>
        Create Commit
      </Link>
    </div>
  );
}
