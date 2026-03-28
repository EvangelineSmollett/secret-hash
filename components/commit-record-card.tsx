import Link from "next/link";
import { CommitStatusChip } from "@/components/commit-status-chip";
import type { CommitRecord } from "@/lib/types";
import { formatDate, shortenHash } from "@/lib/utils";

export function CommitRecordCard({ record }: { record: CommitRecord }) {
  return (
    <Link href={`/records/${record.id}`} className="panel record-card">
      <div className="record-row">
        <div className="eyebrow">Sealed Entry</div>
        <CommitStatusChip status={record.status} />
      </div>
      <div className="record-hash">{record.hash}</div>
      <div className="record-row muted" style={{ fontSize: "0.88rem" }}>
        <span>{formatDate(record.createdAt)}</span>
        <span>{shortenHash(record.owner, 8, 6)}</span>
      </div>
    </Link>
  );
}