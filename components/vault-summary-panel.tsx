import Link from "next/link";
import { CommitStatusChip } from "@/components/commit-status-chip";
import type { CommitRecord } from "@/lib/types";
import { formatDate, shortenHash } from "@/lib/utils";

export function VaultSummaryPanel({ latestRecord }: { latestRecord?: CommitRecord | null }) {
  if (!latestRecord) {
    return (
      <section className="panel" style={{ padding: 18 }}>
        <div className="panel-header">
          <div>
            <div className="eyebrow">Latest Entry</div>
            <div style={{ marginTop: 8, fontSize: "1.1rem", fontWeight: 700 }}>Vault is idle</div>
          </div>
          <CommitStatusChip status="empty" />
        </div>
        <p className="muted" style={{ marginBottom: 0 }}>No sealed hash has been stored for this session.</p>
      </section>
    );
  }

  return (
    <section className="panel" style={{ padding: 18 }}>
      <div className="panel-header">
        <div>
          <div className="eyebrow">Latest Entry</div>
          <div style={{ marginTop: 8, fontSize: "1.1rem", fontWeight: 700 }}>Current commitment</div>
        </div>
        <CommitStatusChip status={latestRecord.status} />
      </div>
      <div className="hero-hash" style={{ marginTop: 16 }}>{latestRecord.hash}</div>
      <div className="record-row muted" style={{ marginTop: 12, fontSize: "0.88rem" }}>
        <span>{formatDate(latestRecord.createdAt)}</span>
        <span>{shortenHash(latestRecord.owner, 8, 6)}</span>
      </div>
      <Link href={`/records/${latestRecord.id}`} className="button-ghost" style={{ display: "grid", placeItems: "center", marginTop: 14 }}>
        Open Record
      </Link>
    </section>
  );
}