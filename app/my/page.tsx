"use client";

import { CommitRecordCard } from "@/components/commit-record-card";
import { EmptyState } from "@/components/empty-state";
import { VaultHeader } from "@/components/vault-header";
import { useCommitRecords } from "@/hooks/use-commit-records";
import { useAccount } from "wagmi";

export default function MyCommitsPage() {
  const { address } = useAccount();
  const { records } = useCommitRecords(address);

  return (
    <div className="page-stack">
      <VaultHeader />

      <section className="panel" style={{ padding: 18 }}>
        <div className="panel-header">
          <div>
            <div className="eyebrow">Personal Ledger</div>
            <div style={{ marginTop: 8, fontSize: "1.18rem", fontWeight: 700 }}>Your sealed records</div>
          </div>
          <div className="summary-cell" style={{ padding: "10px 14px" }}>
            <div className="eyebrow">Count</div>
            <div style={{ marginTop: 6, fontWeight: 700 }}>{records.length}</div>
          </div>
        </div>
      </section>

      {records.length === 0 ? (
        <EmptyState />
      ) : (
        <section className="record-grid">
          {records.map((record) => (
            <CommitRecordCard key={record.id} record={record} />
          ))}
        </section>
      )}
    </div>
  );
}