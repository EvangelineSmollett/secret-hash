"use client";

import { CommitPanel } from "@/components/commit-panel";
import { CommitRecordCard } from "@/components/commit-record-card";
import { VaultHeader } from "@/components/vault-header";
import { useCommitRecords } from "@/hooks/use-commit-records";
import { useAccount } from "wagmi";

export default function CommitPage() {
  const { address } = useAccount();
  const { records, appendRecord } = useCommitRecords(address);

  return (
    <div className="page-stack">
      <VaultHeader />

      <div className="commit-layout">
        <CommitPanel onCommitted={appendRecord} />

        <section className="panel" style={{ padding: 18 }}>
          <div className="eyebrow">Recent Seal</div>
          <div style={{ marginTop: 8, fontSize: "1.12rem", fontWeight: 700 }}>Latest records</div>
          <div className="record-grid" style={{ marginTop: 16 }}>
            {records.slice(0, 2).map((record) => (
              <CommitRecordCard key={record.id} record={record} />
            ))}
            {records.length === 0 && (
              <div className="field-shell">
                <div className="field-label">
                  <span>Vault Feed</span>
                  <span>Empty</span>
                </div>
                <div className="muted">Connect your wallet and submit a hash to create the first sealed record.</div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}