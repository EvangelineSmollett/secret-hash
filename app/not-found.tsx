import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-stack">
      <section className="panel empty-state">
        <div className="eyebrow">Record</div>
        <div style={{ fontSize: "1.14rem", fontWeight: 700 }}>Record not found</div>
        <div className="muted">The sealed entry may not exist in this local ledger yet.</div>
        <Link href="/my" className="button-primary" style={{ display: "grid", placeItems: "center", width: "100%" }}>
          Open Ledger
        </Link>
      </section>
    </div>
  );
}
