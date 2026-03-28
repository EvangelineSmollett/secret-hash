"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { CommitStatusChip } from "@/components/commit-status-chip";
import { CopyHashButton } from "@/components/copy-hash-button";
import { OwnerInfoRow } from "@/components/owner-info-row";
import { VaultHeader } from "@/components/vault-header";
import { useCommitRecords } from "@/hooks/use-commit-records";
import { formatDate, shortenHash } from "@/lib/utils";

export default function RecordDetailPage() {
  const params = useParams<{ id: string }>();
  const { records } = useCommitRecords();
  const record = records.find((item) => item.id === params.id);

  if (!record) {
    notFound();
  }

  return (
    <div className="page-stack">
      <VaultHeader />

      <section className="panel detail-slab">
        <div className="panel-header">
          <div>
            <div className="eyebrow">Vault Record</div>
            <div style={{ marginTop: 8, fontSize: "1.2rem", fontWeight: 700 }}>Sealed commitment</div>
          </div>
          <CommitStatusChip status={record.status} />
        </div>

        <div className="detail-hash">{record.hash}</div>

        <OwnerInfoRow owner={record.owner} />

        <div className="summary-grid">
          <div className="summary-cell">
            <div className="eyebrow">Recorded</div>
            <div style={{ marginTop: 8, fontWeight: 700 }}>{formatDate(record.createdAt)}</div>
          </div>
          <div className="summary-cell">
            <div className="eyebrow">Transaction</div>
            <div className="mono" style={{ marginTop: 8 }}>{record.txHash ? shortenHash(record.txHash, 10, 8) : "Pending sync"}</div>
          </div>
        </div>

        <div className="status-rail">
          <div className="status-step">
            <span>Commit stored</span>
            <span className="muted">{record.source === "wallet" ? "Wallet" : "Mock"}</span>
          </div>
          <div className="status-step">
            <span>Reveal flow</span>
            <span className="muted">Reserved</span>
          </div>
        </div>

        <div className="button-row">
          <CopyHashButton value={record.hash} />
          <Link href="/my" className="button-ghost" style={{ display: "grid", placeItems: "center" }}>
            Back to Ledger
          </Link>
        </div>
      </section>
    </div>
  );
}